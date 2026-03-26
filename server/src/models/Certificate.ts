import mongoose from 'mongoose';

const CertificateSchema = new mongoose.Schema({
  templateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Template',
    required: true
  },
  studentName: {
    type: String,
    required: true
  },
  studentEmail: {
    type: String,
    required: true
  },
  pdfUrl: String,
  status: {
    type: String,
    enum: ['Generated', 'Sent', 'Failed'],
    default: 'Generated'
  },
  sentAt: Date,
  errorMessage: String
}, { timestamps: true });

export default mongoose.model('Certificate', CertificateSchema);
