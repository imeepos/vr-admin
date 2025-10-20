import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Model } from '../entities/model.entity'
import { User } from '../entities/user.entity'

export default registerAs('database', (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'password',
    database: process.env.DB_DATABASE || 'vr_admin',
    entities: [
      User, Model
    ],
    synchronize: false, // 使用 migrations 替代自动同步
    migrationsRun: true, // 开发环境自动运行 migrations
    migrations: ['dist/migrations/*.js'],
    logging: true,
    ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false,
  };
});