import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/index.js';

import { logger } from './middleware/logger.js';
import { errorHandler } from './utils/errorHandler.js';

dotenv.config();

const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get('/', (req: Request, res: Response) => {
  return res.json({ 
    message: 'CertifyPro API is active',
    version: '1.1.0'
  });
});

app.use(errorHandler);

export default app;
