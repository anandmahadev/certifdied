import express from 'express';
import { generateCertificates } from '../controllers/certificateController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/generate', protect, generateCertificates);
router.get('/health', (req, res) => res.json({ status: 'ok' }));

export default router;
