import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { UploadResolver } from './resolvers/upload.resolver';
import { User } from './entities/user.entity';
import { ModelModule } from './models/model.module';
import { FileUploadModule } from './upload/file-upload.module';
import { AuthModule } from './auth/auth.module';
import appConfig from './config/configuration';
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import { createGraphQLConfig } from './config/graphql.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, jwtConfig],
      envFilePath: '.env',
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: createGraphQLConfig,
      inject: [ConfigService],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        const dbConfig = config.get('database');
        if (!dbConfig) {
          throw new Error('Database configuration not found');
        }
        return dbConfig;
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([User]),
    ModelModule,
    FileUploadModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [UploadResolver],
})
export class AppModule {}
