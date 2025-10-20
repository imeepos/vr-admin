import { registerAs } from '@nestjs/config';

export default registerAs('app', () => {
  return {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.APP_PORT || '3001', 10),
    apiPrefix: process.env.API_PREFIX || 'api',
    graphqlPath: process.env.GRAPHQL_PATH || 'graphql',
    baseUrl: process.env.APP_BASE_URL || 'http://0.0.0.0:3001',
    storageType: process.env.STORAGE_TYPE || 'LOCAL',
    adminApiKey: process.env.ADMIN_API_KEY,
    adminUsername: process.env.ADMIN_USERNAME || 'admin',
  };
});