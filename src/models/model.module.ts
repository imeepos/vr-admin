import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModelService } from './model.service';
import { ModelResolver } from './model.resolver';
import { Model } from '../entities/model.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Model])],
  providers: [ModelService, ModelResolver],
  exports: [ModelService],
})
export class ModelModule {}