import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ModelService } from './model.service';
import { Model } from '../entities/model.entity';

@Controller('api/models')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Get('uuid/:uuid')
  async getModelByUuid(@Param('uuid') uuid: string): Promise<Model> {
    const model = await this.modelService.findByUuid(uuid);
    if (!model) {
      throw new NotFoundException(`Model with uuid ${uuid} not found`);
    }
    return model;
  }
}
