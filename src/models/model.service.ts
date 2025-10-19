import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from '../entities/model.entity';
import { CreateModelInput } from '../dto/create-model.input';
import { UpdateModelInput } from '../dto/update-model.input';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ModelService {
  constructor(
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>,
  ) {}

  async create(createModelInput: CreateModelInput): Promise<Model> {
    const model = this.modelRepository.create({
      ...createModelInput,
      uuid: uuidv4(),
    });
    return this.modelRepository.save(model);
  }

  async findAll(): Promise<Model[]> {
    return this.modelRepository.find({
      where: { isActive: true },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: string): Promise<Model | null> {
    return this.modelRepository.findOne({
      where: { id, isActive: true },
    });
  }

  async findByUuid(uuid: string): Promise<Model | null> {
    return this.modelRepository.findOne({
      where: { uuid, isActive: true },
    });
  }

  async update(id: string, updateModelInput: UpdateModelInput): Promise<Model | null> {
    await this.modelRepository.update(id, updateModelInput);
    return this.findOne(id);
  }

  async remove(id: string): Promise<boolean> {
    const result = await this.modelRepository.update(id, { isActive: false });
    return (result.affected ?? 0) > 0;
  }

  async hardDelete(id: string): Promise<boolean> {
    const result = await this.modelRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}