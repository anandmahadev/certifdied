import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

router.get('/', (req, res) => {
  const readyState = mongoose.connection.readyState;
  const statusMap = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  const dbStatus = statusMap[readyState] || 'unknown';

  console.log(`[Health] API Health check performed - DB Status: ${dbStatus}`);

  const isHealthy = readyState === 1;

  res.status(isHealthy ? 200 : 503).json({
    status: isHealthy ? 'ok' : 'degraded',
    timestamp: new Date().toISOString(),
    services: {
      database: dbStatus,
      api: 'up',
      uptime: process.uptime()
    },
    version: '1.0.0'
  });
});

export default router;
