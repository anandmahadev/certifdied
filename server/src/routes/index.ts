import express from 'express';
import authRoutes from './authRoutes.js';
import templateRoutes from './templateRoutes.js';
import certificateRoutes from './certificateRoutes.js';
import healthRoutes from './healthRoutes.js';

const router = express.Router();

/**
 * @route GET /
 * @desc Base API discovery route
 */
router.get('/', (req, res) => {
  res.json({
    name: 'CertifyPro API',
    version: '1.1.0',
    description: 'Enterprise Certificate Generation Service',
    docs: 'https://github.com/anandmahadev/certifdied#readme'
  });
});

router.use('/auth', authRoutes);
router.use('/templates', templateRoutes);
router.use('/certificates', certificateRoutes);
router.use('/health', healthRoutes);

export default router;
