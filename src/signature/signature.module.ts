import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SignatureService } from './signature.service';
import { SignatureInterceptor } from './signature.interceptor';
import { SignatureVerificationMiddleware } from './signature-verification.middleware';

@Module({
  imports: [ConfigModule],
  providers: [SignatureService, SignatureInterceptor, SignatureVerificationMiddleware],
  exports: [SignatureService, SignatureInterceptor, SignatureVerificationMiddleware],
})
export class SignatureModule {}
