import { registerAs } from '@nestjs/config';

export default registerAs('signature', () => {
  const privateKey = process.env.SIGN_PRIVATE_KEY?.replace(/\s+/g, '');

  return {
    privateKey,
    appName: process.env.SIGN_APP_NAME || '',
  };
});
