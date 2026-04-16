import express from 'express';
import { signup, login } from '../controllers/authController.js';

const router = express.Router();

/**
 * @route POST /api/auth/signup
 * @desc Register a new admin account
 */
router.post('/signup', signup);

/**
 * @route POST /api/auth/login
 * @desc Authenticate admin and return JWT token
 */
router.post('/login', login);

export default router;
