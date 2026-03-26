import { Request, Response } from 'express';
import Template from '../models/Template.js';

export const createTemplate = async (req: Request, res: Response) => {
  const { name, imageUrl, fields } = req.body;
  const adminId = (req as any).user.id;

  try {
    const template = await Template.create({ adminId, name, imageUrl, fields });
    res.status(201).json(template);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getTemplates = async (req: Request, res: Response) => {
  const adminId = (req as any).user.id;
  try {
    const templates = await Template.find({ adminId });
    res.json(templates);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteTemplate = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Template.findByIdAndDelete(id);
    res.json({ message: 'Template deleted' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
