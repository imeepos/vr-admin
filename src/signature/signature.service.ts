import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createPrivateKey, createSign, KeyObject } from 'crypto';

interface SignatureConfig {
  privateKey?: string;
  appName?: string;
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
  private warnedMissingKey = false;

  constructor(private readonly configService: ConfigService) {
    const config = this.configService.get<SignatureConfig>('signature') ?? {};
    this.appName = config.appName ?? '';
    const privateKeyBase64 = config.privateKey;

    if (!privateKeyBase64) {
      this.logMissingKeyWarning();
      return;
    }

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

  private logMissingKeyWarning(): void {
    if (!this.warnedMissingKey) {
      this.logger.warn(
        'Signature private key is not configured. Response signatures are disabled.',
      );
      this.warnedMissingKey = true;
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
    return buffer
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/g, '');
  }
}
