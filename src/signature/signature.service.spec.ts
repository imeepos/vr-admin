import { Logger } from '@nestjs/common';
import { createPrivateKey, createSign } from 'crypto';
import { SignatureService } from './signature.service';

class MockConfigService {
  constructor(private readonly values: Record<string, unknown>) {}

  get<T = any>(key: string): T | undefined {
    return this.values[key] as T | undefined;
  }
}

describe('SignatureService', () => {
  const privateKeyBase64 =
    'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBALuMEhKXPN2566gnPlpjNM++kYLj2KylBZmg61RiHZTEkolfgMTsAzvEcf5p2wDgVE83dzcW3eeWkGJrxifUhxVx5DHiUbRrfCoNg1kCNsCG/LYMacM4UWnbJb2xSCMEFws+/Mhn9Ti+Dvb7suhl++xQBFr9RDt7cKUwxEl2NSmtAgMBAAECgYBIWXa3WUSPvKNeURVKxS6gXcHAnqj9oQOSCnP+L4N92n81I3SHgwyUR+o53RgxNFkR3jHNPLMKHhlA/paI0wHw6BhLtF8wGOtp4AiJoEjJFC0qOiOJCeyr7OZh7EXOwbBVwJ5QkWYSRaAeJXdDhKcrAz9TgOajOuvXp/uq36GXAQJBAPDXJx3Ba3gRJgfqj7GP0SiGUz8dxhFhQ4UPDsNnVtDXCC6uARibq1iyBUDlNeWjV2uPdqC3L9H8SoBqY5ySuo0CQQDHWil7kWTgbVD7wBkePeWJiPkI+wgNi6m7lhkKb3//qIQEGGlOG6WJ9CUNJv8nhAZMBQj5W30YbBX08za4wvOhAkA3tg1eXLe3doANpLzInjQL48at+v0uWAl+ZhVMLkNu288QvT+Tqa7hPYzpjhwBmt9GClGuq7FsKagyPGn+dhKhAkB2KOXfnR06vPC8V29L8ookDDD39rseNEMFsgDjo5UttveQ6ds49cAX1cNEWXHxPRryYiWgj27FVANrreEogD0hAkALvYfF6HqrodSKf6iUqXFxwvDs2vPZcVzvgH7MBPPhRFZmFOsPwOsvw62HgVA3aCHxINsppv2Kko3i3TmSFzuZ';

  let warnSpy: jest.SpyInstance;
  let errorSpy: jest.SpyInstance;

  beforeEach(() => {
    warnSpy = jest.spyOn(Logger.prototype, 'warn').mockImplementation(() => undefined);
    errorSpy = jest.spyOn(Logger.prototype, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should return null when private key is missing', () => {
    const configService = new MockConfigService({
      signature: {
        appName: 'sams-yunmall',
      },
    });

    const service = new SignatureService(configService as any);
    const result = service.signPayload({ foo: 'bar' });

    expect(result).toBeNull();
    expect(warnSpy).toHaveBeenCalled();
  });

  it('should generate deterministic signatures for nested payloads', () => {
    const configService = new MockConfigService({
      signature: {
        appName: 'sams-yunmall',
        privateKey: privateKeyBase64,
      },
    });

    const service = new SignatureService(configService as any);

    const nowSpy = jest.spyOn(Date, 'now').mockReturnValue(1_735_000_000_000);
    const payload = {
      uid: '032423423',
      timestamp: 1_735_000_000_000,
      info: {
        b: '2',
        a: '1',
      },
      list: [
        { value: 2, label: 'z' },
        { label: 'a', value: 1 },
      ],
    };

    const result = service.signPayload(payload);
    expect(result).toBeTruthy();
    expect(result?.timestamp).toBe(1_735_000_000_000);

    const canonicalPayload = (service as any).canonicalize(payload) as string;
    const message = `${canonicalPayload}sams-yunmall${result?.timestamp}`;
    const signer = createSign('RSA-SHA256');
    signer.update(message);
    signer.end();

    const signatureBuffer = signer.sign(
      createPrivateKey({
        key: Buffer.from(privateKeyBase64, 'base64'),
        format: 'der',
        type: 'pkcs8',
      }),
    );

    const expectedSignature = signatureBuffer
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/g, '');

    expect(result?.sign).toBe(expectedSignature);
    nowSpy.mockRestore();
  });

  it('should treat non-serializable values as null during canonicalization', () => {
    const configService = new MockConfigService({
      signature: {
        appName: 'app',
        privateKey: privateKeyBase64,
      },
    });

    const service = new SignatureService(configService as any);
    const complexPayload = {
      handler: () => {},
      symbolKey: Symbol('key'),
      nested: {
        promise: Promise.resolve(1),
      },
    };

    const canonical = (service as any).canonicalize(complexPayload);
    expect(canonical.includes('"handler":null')).toBe(true);
    expect(canonical.includes('"symbolKey":null')).toBe(true);
  });
});
