import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SignatureService } from './signature.service';
import { SignatureInterceptor } from './signature.interceptor';

@Module({
  imports: [ConfigModule],
  providers: [SignatureService, SignatureInterceptor],
  exports: [SignatureService, SignatureInterceptor],
})
export class SignatureModule {}
