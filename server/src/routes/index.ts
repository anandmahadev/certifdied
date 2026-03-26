import express from 'express';
import authRoutes from './authRoutes.js';
import templateRoutes from './templateRoutes.js';
import certificateRoutes from './certificateRoutes.js';
import healthRoutes from './healthRoutes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/templates', templateRoutes);
router.use('/certificates', certificateRoutes);
router.use('/health', healthRoutes);

export default router;
