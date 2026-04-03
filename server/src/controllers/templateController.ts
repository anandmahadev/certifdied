import { Request, Response } from 'express';
import Template from '../models/Template.js';

/**
 * Creates a new certificate template.
 * @param req Request containing template details.
 * @param res Response with created template.
 */
export const createTemplate = async (req: Request, res: Response) => {
  const { name, imageUrl, fields } = req.body;
  const adminId = (req as any).user.id;

  try {
    const template = await Template.create({ adminId, name, imageUrl, fields });
    return res.status(201).json(template);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

/**
 * Fetches all templates associated with the admin.
 * @param req Request object.
 * @param res Response with list of templates.
 */
export const getTemplates = async (req: Request, res: Response) => {
  const adminId = (req as any).user.id;
  try {
    const templates = await Template.find({ adminId });
    return res.json(templates);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

/**
 * Deletes a specific template by ID.
 * @param req Request with template ID in params.
 * @param res Response confirmation.
 */
export const deleteTemplate = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await Template.findByIdAndDelete(id);
    return res.json({ message: 'Template deleted' });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
