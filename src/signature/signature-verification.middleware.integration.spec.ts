import express, { Express } from 'express';
import request from 'supertest';
import { ConfigService } from '@nestjs/config';
import { SignatureVerificationMiddleware } from './signature-verification.middleware';
import { SignatureService } from './signature.service';

describe('SignatureVerificationMiddleware (integration)', () => {
  let app: Express;
  let signatureService: SignatureService;
  let configService: ConfigService;

  beforeEach(() => {
    configService = {
      get: jest.fn().mockImplementation((key: string, defaultValue?: unknown) => {
        if (key === 'app.graphqlPath') {
          return 'graphql';
        }
        return defaultValue;
      }),
    } as unknown as ConfigService;

    signatureService = {
      verifySignature: jest.fn().mockReturnValue(true),
    } as unknown as SignatureService;

    const middleware = new SignatureVerificationMiddleware(
      configService,
      signatureService,
    );

    app = express();
    app.use(express.json());
    app.use((req, res, next) => middleware.use(req, res, next));

    app.post('/graphql', (req, res) => {
      res.status(200).json({ data: { login: { token: 'token', user: { id: '1' } } } });
    });

    app.get('/api/resource', (req, res) => {
      res.status(200).json({ ok: true });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('allows GraphQL requests without sign', async () => {
    await request(app)
      .post('/graphql')
      .send({
        query: 'mutation Login { login(input: { username: "admin", password: "admin123" }) { token } }',
      })
      .expect(200);

    expect(signatureService.verifySignature).not.toHaveBeenCalled();
  });

  it('rejects REST requests without sign', async () => {
    await request(app)
      .get('/api/resource')
      .expect(400)
      .expect({ message: 'Missing sign parameter' });

    expect(signatureService.verifySignature).not.toHaveBeenCalled();
  });

  it('allows REST requests when sign and timestamp are valid', async () => {
    await request(app)
      .get('/api/resource')
      .query({ sign: 'valid-sign', timestamp: '1700000000' })
      .expect(200)
      .expect({ ok: true });

    expect(signatureService.verifySignature).toHaveBeenCalledWith(
      { timestamp: 1700000000 },
      'valid-sign',
      1700000000,
    );
  });
});
