import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // CORS 配置 - 支持nginx代理和本地开发
  const corsOptions: CorsOptions = {
    origin: [
      'http://localhost',
      'http://localhost:80',
      'http://127.0.0.1',
      'http://127.0.0.1:80',
      // 开发环境支持
      ...(['development', 'test'].includes(process.env.NODE_ENV || 'development')
        ? ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:3000', 'http://127.0.0.1:5173']
        : [])
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'X-Environment',
      'X-Client-Version',
      'Apollo-Require-Preflight',
      'X-Requested-With'
    ],
  };

  app.enableCors(corsOptions);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const port = configService.get<number>('app.port') || 3002;
  await app.listen(port, '0.0.0.0');

  console.log(`🚀 VR Admin API running on port ${port}`);
  console.log(`📚 GraphQL Playground: http://localhost:${port}/${configService.get('app.graphqlPath')}`);
}
bootstrap();
