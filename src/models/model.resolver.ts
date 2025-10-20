import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ModelService } from './model.service';
import { Model } from '../entities/model.entity';
import { CreateModelInput } from '../dto/create-model.input';
import { UpdateModelInput } from '../dto/update-model.input';

@Resolver(() => Model)
export class ModelResolver {
  constructor(private readonly modelService: ModelService) {}

  @Query(() => [Model])
  async models(
    @Args('search', { type: () => String, nullable: true }) search?: string,
  ): Promise<Model[]> {
    return this.modelService.findAll(search);
  }

  @Query(() => Model, { nullable: true })
  async model(@Args('id', { type: () => ID }) id: string): Promise<Model | null> {
    return this.modelService.findOne(id);
  }

  @Query(() => Model, { nullable: true })
  async modelByUuid(@Args('uuid') uuid: string): Promise<Model | null> {
    return this.modelService.findByUuid(uuid);
  }

  @Mutation(() => Model)
  async createModel(@Args('createModelInput') createModelInput: CreateModelInput): Promise<Model> {
    return this.modelService.create(createModelInput);
  }

  @Mutation(() => Model, { nullable: true })
  async updateModel(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateModelInput') updateModelInput: UpdateModelInput,
  ): Promise<Model | null> {
    return this.modelService.update(id, updateModelInput);
  }

  @Mutation(() => Boolean)
  async deleteModel(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    return this.modelService.remove(id);
  }

  @Mutation(() => Boolean)
  async hardDeleteModel(@Args('id', { type: () => ID }) id: string): Promise<boolean> {
    return this.modelService.hardDelete(id);
  }
}