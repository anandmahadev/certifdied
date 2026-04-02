import mongoose from 'mongoose';

const TemplateSchema = new mongoose.Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
  fields: [{
    key: String, // {name}, {event}, {date}
    x: Number,
    y: Number,
    size: Number,
    font: String,
    color: String
  }]
}, { timestamps: true });

export default mongoose.model('Template', TemplateSchema);
