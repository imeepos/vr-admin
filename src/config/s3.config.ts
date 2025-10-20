import { registerAs } from '@nestjs/config';

export default registerAs('s3', () => ({
  region: process.env.S3_REGION || 'us-east-1',
  endpoint: process.env.S3_ENDPOINT || undefined,
  bucket: process.env.S3_BUCKET || 'vr-admin-uploads',
  accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
  forcePathStyle: process.env.S3_FORCE_PATH_STYLE === 'true',
  publicBaseUrl: process.env.S3_PUBLIC_BASE_URL || undefined,
}));