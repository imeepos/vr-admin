import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelService } from './model.service';
import { ModelResolver } from './model.resolver';
import { Model } from '../entities/model.entity';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Model]), AuthModule],
  providers: [ModelService, ModelResolver],
  exports: [ModelService],
})
export class ModelModule {}