import { registerAs } from '@nestjs/config';

interface RedisConfig {
  host: string;
  port: number;
  password: string;
  connectTimeout: number;
  lazyConnect: boolean;
  maxRetriesPerRequest: number;
  retryDelayOnFailover: number;
}

export default registerAs('redis', (): RedisConfig => {
  return {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT || '6379', 10),
    password: process.env.REDIS_PASSWORD || '',
    connectTimeout: 10000,
    lazyConnect: true,
    maxRetriesPerRequest: 3,
    retryDelayOnFailover: 100,
  };
});