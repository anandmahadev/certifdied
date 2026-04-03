import { Request, Response } from 'express';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import Template from '../models/Template.js';
import Certificate from '../models/Certificate.js';
import { parse } from 'csv-parse';
import fs from 'fs';

/**
 * Processes a batch of certificates based on a template and student data.
 * @param req Request containing templateId and studentData.
 * @param res Response with generation results.
 */
export const generateCertificates = async (req: Request, res: Response) => {
  const { templateId, studentData } = req.body; // studentData is an array from CSV
  try {
    const template = await Template.findById(templateId);
    if (!template) return res.status(404).json({ message: 'Template not found' });

    const fontBytes = await fs.promises.readFile('./src/assets/fonts/Inter.ttf').catch(() => null);

    const results = [];
    for (const student of studentData) {
      try {
        const response = await fetch(template.imageUrl);
        const templateBytes = await response.arrayBuffer();
        const pdfDoc = await PDFDocument.create();
        const isPdf = template.imageUrl.endsWith('.pdf');
        let image: any;
        if (isPdf) {
          const pages = await pdfDoc.embedPdf(templateBytes);
          image = pages[0];
        } else {
          image = await pdfDoc.embedPng(templateBytes);
        }
        
        const { width, height } = (image as any);
        const page = pdfDoc.addPage([width, height]);
        page.drawImage(image as any, { x: 0, y: 0 });

        for (const field of template.fields) {
          const key = field.key || '';
          const text = student[key.replace(/{|}/g, '')] || '';
          page.drawText(text, {
            x: field.x || 0,
            y: field.y || 0,
            size: field.size || 24,
            color: rgb(0, 0, 0),
          });
        }

        const pdfBytes = await pdfDoc.save();
        // Here you would upload to Cloudinary or save locally
        results.push({ name: student.name, email: student.email, status: 'Generated' });
      } catch (err: any) {
        results.push({ name: student.name, email: student.email, status: 'Failed', error: err.message });
      }
    }

    return res.json({ message: 'Generation completed', results });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
