import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GqlExecutionContext } from '@nestjs/graphql';
import { SignatureService } from './signature.service';

@Injectable()
export class SignatureInterceptor implements NestInterceptor {
  constructor(private readonly signatureService: SignatureService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((data) => {
        const signature = this.signatureService.signPayload(data);
        if (signature) {
          const type = context.getType<'http' | 'graphql' | string>();
          if (type === 'http') {
            const response = context.switchToHttp().getResponse();
            if (response?.setHeader) {
              response.setHeader('sign', signature.sign);
              response.setHeader('sign-timestamp', signature.timestamp.toString());
            }
          } else if (type === 'graphql') {
            const gqlContext = GqlExecutionContext.create(context);
            const response = gqlContext.getContext().res;
            if (response?.setHeader) {
              response.setHeader('sign', signature.sign);
              response.setHeader('sign-timestamp', signature.timestamp.toString());
            }
          }
        }
        return data;
      }),
    );
  }
}
