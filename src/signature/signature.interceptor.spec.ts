import { ExecutionContext } from '@nestjs/common';
import { lastValueFrom, of } from 'rxjs';
import { SignatureInterceptor } from './signature.interceptor';
import { SignatureService } from './signature.service';

describe('SignatureInterceptor', () => {
  const signatureService = {
    signPayload: jest.fn(),
  } as unknown as SignatureService;

  afterEach(() => {
    jest.resetAllMocks();
    jest.restoreAllMocks();
  });

  it('should skip header injection when signing is disabled', async () => {
    const interceptor = new SignatureInterceptor(signatureService);
    const setHeader = jest.fn();
    const context = createHttpExecutionContext(setHeader);

    (signatureService.signPayload as jest.Mock).mockReturnValue(null);

    const result = await lastValueFrom(interceptor.intercept(context, {
      handle: () => of({ value: 1 }),
    }));

    expect(result).toEqual({ value: 1 });
    expect(setHeader).not.toHaveBeenCalled();
  });

  it('should write headers for HTTP responses when signature is available', async () => {
    const interceptor = new SignatureInterceptor(signatureService);
    const setHeader = jest.fn();
    const context = createHttpExecutionContext(setHeader);

    (signatureService.signPayload as jest.Mock).mockReturnValue({
      sign: 'signature-value',
      timestamp: 1234567890,
    });

    const result = await lastValueFrom(interceptor.intercept(context, {
      handle: () => of({ foo: 'bar' }),
    }));

    expect(result).toEqual({ foo: 'bar' });
    expect(setHeader).toHaveBeenCalledWith('sign', 'signature-value');
    expect(setHeader).toHaveBeenCalledWith('sign-timestamp', '1234567890');
  });

  it('should skip header injection for GraphQL responses', async () => {
    const interceptor = new SignatureInterceptor(signatureService);
    const switchToHttp = jest.fn(() => ({
      getResponse: () => ({
        setHeader: jest.fn(),
      }),
    }));
    const context = {
      getType: () => 'graphql',
      switchToHttp,
    } as ExecutionContext;

    (signatureService.signPayload as jest.Mock).mockReturnValue({
      sign: 'signature-value',
      timestamp: 999,
    });

    const result = await lastValueFrom(interceptor.intercept(context, {
      handle: () => of({ ok: true }),
    }));

    expect(result).toEqual({ ok: true });
    expect(switchToHttp).not.toHaveBeenCalled();
  });
});

function createHttpExecutionContext(setHeader: jest.Mock): ExecutionContext {
  return {
    getType: () => 'http',
    switchToHttp: () => ({
      getResponse: () => ({ setHeader }),
    }),
  } as unknown as ExecutionContext;
}
