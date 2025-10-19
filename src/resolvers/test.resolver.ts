import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
  @Query(() => String, { name: 'hello' })
  hello(): string {
    return '🎉 Hello from VR Admin GraphQL API!';
  }

  @Query(() => String, { name: 'status' })
  status(): string {
    return '✅ VR Admin API is running successfully!';
  }
}