import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe, Logger } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { AdminSeederService } from './database/admin-seeder.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const adminSeeder = app.get(AdminSeederService);
  const logger = new Logger('Bootstrap');

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

  // 在开发环境或明确启用时初始化管理员账号
  const shouldSeedAdmin = process.env.NODE_ENV === 'development' ||
                          process.env.ENABLE_ADMIN_SEEDER === 'true';

  if (shouldSeedAdmin) {
    try {
      logger.log('正在初始化管理员账号...');
      await adminSeeder.initializeAdmin();
    } catch (error) {
      logger.error('管理员账号初始化失败:', error);
      // 不阻止应用启动，但记录错误
    }
  }

  const port = configService.get<number>('app.port') || 3002;
  await app.listen(port, '0.0.0.0');

  console.log(`🚀 VR Admin API running on port ${port}`);
  console.log(`📚 GraphQL Playground: http://localhost:${port}/${configService.get('app.graphqlPath')}`);

  if (shouldSeedAdmin) {
    console.log(`👤 管理员账号: admin / admin123`);
  }
}
bootstrap();
