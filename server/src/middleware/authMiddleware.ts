import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { logger } from '../utils/logger.js';

interface AuthRequest extends Request {
  user?: any;
}

export const protect = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer')) {
    const token = authHeader.split(' ')[1];
    try {
      const decoded = jwt.verify(token || '', process.env.JWT_SECRET || 'supersecretkey');
      req.user = decoded;
      next();
    } catch (err) {
      logger.error('Authentication error:', err);
      res.status(401).json({ message: 'Unauthorized' });
    }
  } else {
    logger.warn('Authentication attempted without token');
    res.status(401).json({ message: 'No token provided' });
  }
};
