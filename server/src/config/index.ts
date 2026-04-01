import dotenv from 'dotenv';

dotenv.config();

/**
 * Application configuration object mapping environment variables
 * to internal application keys.
 */
export const config = {
  port: process.env.PORT || 5000,
  mongodbUri: process.env.MONGODB_URI || '',
  jwtSecret: process.env.JWT_SECRET || 'fallback-secret-for-dev-only',
  email: {
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASS || '',
    from: process.env.EMAIL_FROM || 'noreply@certifypro.com'
  }
};

/**
 * Validates that all required configuration variables are present.
 * Throws an error if any critical configuration is missing.
 */
export const validateConfig = () => {
  if (!config.mongodbUri) {
    throw new Error('MONGODB_URI is required');
  }
};
