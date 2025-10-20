import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import { SignatureService } from './signature.service';

@Injectable()
export class SignatureVerificationMiddleware implements NestMiddleware {
  constructor(
    private readonly configService: ConfigService,
    private readonly signatureService: SignatureService,
  ) {}

  use(req: Request, res: Response, next: NextFunction): void {
    if (req.method === 'OPTIONS') {
      next();
      return;
    }

    const graphqlPath = `/${this.configService.get<string>('app.graphqlPath', 'graphql')}`;
    const requestPath = this.getRequestPath(req);
    console.log(`[SignatureMiddleware] Request path: ${requestPath}, GraphQL path: ${graphqlPath}`);
    if (this.isGraphqlRequest(requestPath, graphqlPath)) {
      console.log(`[SignatureMiddleware] Skipping signature verification for GraphQL path`);
      next();
      return;
    }

    const sign = this.normalizeScalar(req.query.sign);

    if (!sign) {
      res.status(400).json({ message: 'Missing sign parameter' });
      return;
    }

    const { payload, timestamp } = this.extractPayload(req);

    if (timestamp === undefined || timestamp === null || timestamp === '') {
      res.status(400).json({ message: 'Missing timestamp parameter' });
      return;
    }

    const timestampNumber = Number(timestamp);
    if (!Number.isFinite(timestampNumber)) {
      res.status(400).json({ message: 'Invalid timestamp parameter' });
      return;
    }

    const isValid = this.signatureService.verifySignature(
      payload,
      sign,
      timestampNumber,
    );

    if (!isValid) {
      res.status(401).json({ message: 'Invalid signature' });
      return;
    }

    next();
  }

  private extractPayload(req: Request): {
    payload: Record<string, unknown>;
    timestamp?: string | number;
  } {
    const queryPayload = this.cleanObject(req.query);
    const bodyPayload =
      req.body && typeof req.body === 'object'
        ? this.cleanObject(req.body as Record<string, unknown>)
        : {};

    const hasBodyPayload = Object.keys(bodyPayload).length > 0;
    const payload = hasBodyPayload ? bodyPayload : queryPayload;
    const timestampSource =
      (hasBodyPayload ? bodyPayload.timestamp : undefined) ??
      queryPayload.timestamp;

    return {
      payload,
      timestamp: this.extractTimestamp(timestampSource),
    };
  }

  private cleanObject(
    value: Record<string, unknown> | Request['query'],
  ): Record<string, unknown> {
    if (!value || typeof value !== 'object') {
      return {};
    }

    return Object.entries(value).reduce<Record<string, unknown>>(
      (acc, [key, rawValue]) => {
        if (key === 'sign') {
          return acc;
        }

        const value =
          Array.isArray(rawValue) && rawValue.length === 1
            ? rawValue[0]
            : rawValue;

        acc[key] =
          key === 'timestamp'
            ? this.normalizeTimestampValue(value)
            : value;

        return acc;
      },
      {},
    );
  }

  private normalizeScalar(value: unknown): string | undefined {
    if (value === undefined || value === null) {
      return undefined;
    }

    if (Array.isArray(value)) {
      return this.normalizeScalar(value[0]);
    }

    if (typeof value === 'string') {
      return value;
    }

    if (typeof value === 'number') {
      return value.toString();
    }

    return undefined;
  }

  private extractTimestamp(value: unknown): string | number | undefined {
    if (value === undefined || value === null) {
      return undefined;
    }

    if (Array.isArray(value)) {
      return this.extractTimestamp(value[0]);
    }

    if (typeof value === 'number' || typeof value === 'string') {
      return value;
    }

    return undefined;
  }

  private normalizeTimestampValue(value: unknown): unknown {
    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (trimmed === '') {
        return value;
      }
      const parsed = Number(trimmed);
      return Number.isFinite(parsed) ? parsed : value;
    }

    if (Array.isArray(value)) {
      return this.normalizeTimestampValue(value[0]);
    }

    return value;
  }

  private getRequestPath(req: Request): string {
    const originalUrl =
      typeof req.originalUrl === 'string' && req.originalUrl.length > 0
        ? req.originalUrl
        : `${req.baseUrl || ''}${req.path || ''}`;

    const pathOnly = originalUrl.split('?')[0] ?? '';
    return pathOnly === '' ? '/' : pathOnly;
  }

  private isGraphqlRequest(requestPath: string, graphqlPath: string): boolean {
    return (
      requestPath === graphqlPath ||
      requestPath.startsWith(`${graphqlPath}/`)
    );
  }
}
