import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { AuthGuard } from '../auth/auth.guard';

@Resolver(() => User)
export class UserResolver {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  @Query(() => [User])
  @UseGuards(AuthGuard)
  async users(): Promise<User[]> {
    return this.userRepository.find();
  }

  @Query(() => User, { nullable: true })
  @UseGuards(AuthGuard)
  async user(@Args('id') id: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  @Mutation(() => User)
  @UseGuards(AuthGuard)
  async createUser(@Args('input') input: CreateUserInput): Promise<User> {
    const user = this.userRepository.create(input);
    return this.userRepository.save(user);
  }

  @Mutation(() => User, { nullable: true })
  @UseGuards(AuthGuard)
  async updateUser(
    @Args('id') id: string,
    @Args('input') input: UpdateUserInput,
  ): Promise<User | null> {
    await this.userRepository.update(id, input);
    return this.userRepository.findOne({ where: { id } });
  }

  @Mutation(() => Boolean)
  @UseGuards(AuthGuard)
  async deleteUser(@Args('id') id: string): Promise<boolean> {
    const result = await this.userRepository.delete(id);
    return (result.affected ?? 0) > 0;
  }
}