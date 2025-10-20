import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelService } from './model.service';
import { ModelResolver } from './model.resolver';
import { Model } from '../entities/model.entity';
import { AuthModule } from '../auth/auth.module';
import { ModelController } from './model.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Model]), AuthModule],
  providers: [ModelService, ModelResolver],
  controllers: [ModelController],
  exports: [ModelService],
})
export class ModelModule {}
