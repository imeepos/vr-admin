import { ConfigService } from '@nestjs/config';
import { SignatureService } from './signature.service';
import { SignatureVerificationMiddleware } from './signature-verification.middleware';

describe('SignatureVerificationMiddleware', () => {
  let configService: ConfigService;
  let signatureService: SignatureService;
  let middleware: SignatureVerificationMiddleware;

  beforeEach(() => {
    configService = {
      get: jest.fn().mockReturnValue('graphql'),
    } as unknown as ConfigService;

    signatureService = {
      verifySignature: jest.fn(),
    } as unknown as SignatureService;

    middleware = new SignatureVerificationMiddleware(configService, signatureService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should skip verification for GraphQL requests', () => {
    const req: any = { method: 'POST', path: '/graphql', query: {} };
    const res = createResponseMock();
    const next = jest.fn();

    middleware.use(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(signatureService.verifySignature).not.toHaveBeenCalled();
  });

  it('should respond with 400 when sign is missing', () => {
    const req: any = { method: 'GET', path: '/api/resource', query: {} };
    const res = createResponseMock();
    const next = jest.fn();

    middleware.use(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Missing sign parameter' });
    expect(next).not.toHaveBeenCalled();
  });

  it('should respond with 400 when timestamp is missing', () => {
    const req: any = {
      method: 'GET',
      path: '/api/resource',
      query: { sign: 'abc' },
    };
    const res = createResponseMock();
    const next = jest.fn();

    middleware.use(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ message: 'Missing timestamp parameter' });
    expect(signatureService.verifySignature).not.toHaveBeenCalled();
  });

  it('should reply with 401 when signature is invalid', () => {
    (signatureService.verifySignature as jest.Mock).mockReturnValue(false);
    const req: any = {
      method: 'GET',
      path: '/api/resource',
      query: { uid: '1', timestamp: '123', sign: 'bad-sign' },
    };
    const res = createResponseMock();
    const next = jest.fn();

    middleware.use(req, res, next);

    expect(signatureService.verifySignature).toHaveBeenCalledWith(
      { uid: '1', timestamp: 123 },
      'bad-sign',
      123,
    );
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ message: 'Invalid signature' });
    expect(next).not.toHaveBeenCalled();
  });

  it('should call next when signature is valid', () => {
    (signatureService.verifySignature as jest.Mock).mockReturnValue(true);
    const req: any = {
      method: 'POST',
      path: '/api/submit',
      query: { sign: 'valid-sign' },
      body: { uid: '100', timestamp: 456, data: 'value' },
    };
    const res = createResponseMock();
    const next = jest.fn();

    middleware.use(req, res, next);

    expect(signatureService.verifySignature).toHaveBeenCalledWith(
      { uid: '100', timestamp: 456, data: 'value' },
      'valid-sign',
      456,
    );
    expect(res.status).not.toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
});

function createResponseMock() {
  return {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
}
