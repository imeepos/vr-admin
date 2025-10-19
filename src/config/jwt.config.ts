import { registerAs } from '@nestjs/config';

interface JwtConfig {
  secret: string;
  expiresIn: string;
  issuer: string;
  audience: string;
}

export default registerAs('jwt', (): JwtConfig => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('JWT_SECRET environment variable is required');
  }

  return {
    secret,
    expiresIn: process.env.JWT_EXPIRES_IN || '24h',
    issuer: process.env.JWT_ISSUER || 'vr-admin',
    audience: process.env.JWT_AUDIENCE || 'vr-admin-users',
  };
});