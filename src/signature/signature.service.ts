import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  createPrivateKey,
  createPublicKey,
  createSign,
  createVerify,
  KeyObject,
} from 'crypto';

interface SignatureConfig {
  privateKey?: string;
  appName?: string;
  publicKey?: string;
}

interface SignatureResult {
  sign: string;
  timestamp: number;
}

@Injectable()
export class SignatureService {
  private readonly logger = new Logger(SignatureService.name);
  private readonly appName: string;
  private readonly privateKey?: KeyObject;
  private readonly publicKey?: KeyObject;
  private warnedMissingKey = false;
  private warnedMissingPublicKey = false;

  constructor(private readonly configService: ConfigService) {
    const config = this.configService.get<SignatureConfig>('signature') ?? {};
    this.appName = config.appName ?? '';
    const privateKeyBase64 = config.privateKey;
    const publicKeyBase64 = config.publicKey;

    if (!privateKeyBase64) {
      this.logMissingKeyWarning();
    }

    if (privateKeyBase64) {
      try {
        this.privateKey = createPrivateKey({
          key: Buffer.from(privateKeyBase64, 'base64'),
          format: 'der',
          type: 'pkcs8',
        });
      } catch (error) {
        this.logger.error('Failed to parse RSA private key for response signing', error as Error);
      }
    }

    if (!publicKeyBase64) {
      this.logMissingPublicKeyWarning();
    }

    if (publicKeyBase64) {
      try {
        this.publicKey = createPublicKey({
          key: Buffer.from(publicKeyBase64, 'base64'),
          format: 'der',
          type: 'spki',
        });
      } catch (error) {
        this.logger.error('Failed to parse RSA public key for signature verification', error as Error);
      }
    }
  }

  signPayload(payload: unknown): SignatureResult | null {
    if (!this.privateKey) {
      this.logMissingKeyWarning();
      return null;
    }

    const timestamp = Date.now();
    const canonicalPayload = this.canonicalize(payload);
    const message = `${canonicalPayload}${this.appName}${timestamp}`;
    const signer = createSign('RSA-SHA256');
    signer.update(message);
    signer.end();
    const signature = signer.sign(this.privateKey);
    const signatureBase64Url = this.toBase64Url(signature);

    return {
      sign: signatureBase64Url,
      timestamp,
    };
  }

  verifySignature(payload: unknown, signature: string, timestamp: number): boolean {
    if (!this.publicKey) {
      this.logMissingPublicKeyWarning();
      return false;
    }

    if (!Number.isFinite(timestamp)) {
      this.logger.warn('Invalid timestamp provided for signature verification');
      return false;
    }

    try {
      const canonicalPayload = this.canonicalize(payload);
      const message = `${canonicalPayload}${this.appName}${timestamp}`;
      const verifier = createVerify('RSA-SHA256');
      verifier.update(message);
      verifier.end();
      const signatureBuffer = this.fromBase64Url(signature);
      return verifier.verify(this.publicKey, signatureBuffer);
    } catch (error) {
      this.logger.warn('Signature verification failed', error as Error);
      return false;
    }
  }

  private logMissingKeyWarning(): void {
    if (!this.warnedMissingKey) {
      this.logger.warn(
        'Signature private key is not configured. Response signatures are disabled.',
      );
      this.warnedMissingKey = true;
    }
  }

  private logMissingPublicKeyWarning(): void {
    if (!this.warnedMissingPublicKey) {
      this.logger.warn(
        'Signature public key is not configured. Signature verification is disabled.',
      );
      this.warnedMissingPublicKey = true;
    }
  }

  private canonicalize(value: unknown): string {
    if (value === null) {
      return 'null';
    }

    if (value === undefined) {
      return 'null';
    }

    if (typeof value === 'number' || typeof value === 'boolean') {
      return JSON.stringify(value);
    }

    if (typeof value === 'function' || typeof value === 'symbol') {
      return 'null';
    }

    if (typeof value === 'bigint') {
      return JSON.stringify(value.toString());
    }

    if (value instanceof Date) {
      return JSON.stringify(value.toISOString());
    }

    if (Buffer.isBuffer(value)) {
      return JSON.stringify(value.toString('base64'));
    }

    if (value instanceof Set) {
      return this.canonicalize(Array.from(value));
    }

    if (value instanceof Map) {
      const sortedEntries = Array.from(value.entries()).sort(([a], [b]) =>
        String(a).localeCompare(String(b)),
      );
      const normalized = sortedEntries.reduce<Record<string, unknown>>(
        (acc, [key, val]) => {
          acc[String(key)] = val;
          return acc;
        },
        {},
      );
      return this.stringifySorted(normalized);
    }

    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (this.isJsonLike(trimmed)) {
        try {
          const parsed = JSON.parse(trimmed);
          return this.stringifySorted(parsed);
        } catch {
          // fall through to treat as plain string
        }
      }
      return JSON.stringify(value);
    }

    if (Array.isArray(value)) {
      const items = value.map((item) => this.canonicalize(item));
      return `[${items.join(',')}]`;
    }

    if (typeof value === 'object') {
      return this.stringifySorted(value as Record<string, unknown>);
    }

    return JSON.stringify(value);
  }

  private stringifySorted(value: Record<string, unknown> | unknown): string {
    if (value === null || value === undefined) {
      return 'null';
    }

    if (Array.isArray(value)) {
      const items = value.map((item) => this.canonicalize(item));
      return `[${items.join(',')}]`;
    }

    if (typeof value !== 'object') {
      return this.canonicalize(value);
    }

    const entries = Object.entries(value as Record<string, unknown>)
      .filter(([, val]) => typeof val !== 'undefined')
      .sort(([a], [b]) => a.localeCompare(b))
      .map(
        ([key, val]) => `${JSON.stringify(key)}:${this.canonicalize(val)}`,
      );

    return `{${entries.join(',')}}`;
  }

  private isJsonLike(value: string): boolean {
    return (
      (value.startsWith('{') && value.endsWith('}')) ||
      (value.startsWith('[') && value.endsWith(']'))
    );
  }

  private toBase64Url(buffer: Buffer): string {
    if (!Buffer.isBuffer(buffer)) {
      return '';
    }
    return buffer
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/g, '');
  }

  private fromBase64Url(value: string): Buffer {
    const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
    const padding = 4 - (normalized.length % 4 || 4);
    return Buffer.from(normalized + '='.repeat(padding % 4), 'base64');
  }
}
