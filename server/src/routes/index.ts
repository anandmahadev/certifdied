import express from 'express';
import authRoutes from './authRoutes.js';
import templateRoutes from './templateRoutes.js';
import certificateRoutes from './certificateRoutes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/templates', templateRoutes);
router.use('/certificates', certificateRoutes);

export default router;
