import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthGuard } from './auth.guard';
import { User } from '../entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthService, AuthResolver, AuthGuard],
  exports: [AuthService, AuthGuard],
})
export class AuthModule {}