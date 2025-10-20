import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SignatureService } from './signature.service';

@Injectable()
export class SignatureInterceptor implements NestInterceptor {
  constructor(private readonly signatureService: SignatureService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    return next.handle().pipe(
      map((data) => {
        const type = context.getType<'http' | 'graphql' | string>();

        // 仅为 HTTP REST 端点添加签名，GraphQL 完全不涉及签名机制
        if (type === 'http') {
          const signature = this.signatureService.signPayload(data);
          if (signature) {
            const response = context.switchToHttp().getResponse();
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
