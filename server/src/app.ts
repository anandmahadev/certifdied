import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routes from './routes/index.js';

import { logger } from './middleware/logger.js';

dotenv.config();

const app = express();

app.use(logger);
app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('CertifyPro API is running');
});

export default app;
