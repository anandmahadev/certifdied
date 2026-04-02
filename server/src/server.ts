import app from './app.js';
import mongoose from 'mongoose';
import { config, validateConfig } from './config/index.js';

try {
  validateConfig();
} catch (error: any) {
  console.error('Critical Configuration Error:', error.message);
  process.exit(1);
}

mongoose.connect(config.mongodbUri)
  .then(() => {
    console.log('✅ Database Connected Successfully');
    console.log(`🚀 Server starting on port ${config.port}...`);
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });
