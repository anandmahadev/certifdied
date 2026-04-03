import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'supersecretkey', { expiresIn: '1d' });
};

/**
 * Registers a new user and returns a JWT token.
 * @param req Request object containing email and password.
 * @param res Response object.
 */
export const signup = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const user = await User.create({ email, password });
    const token = generateToken((user._id as any).toString());
    return res.status(201).json({ user: { id: user._id, email: user.email }, token });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

/**
 * Authenticates a user and returns a JWT token.
 * @param req Request object containing email and password.
 * @param res Response object.
 */
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await (user as any).comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = generateToken((user._id as any).toString());
    return res.json({ user: { id: user._id, email: user.email }, token });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
