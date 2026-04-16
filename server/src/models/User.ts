import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

/**
 * User Schema for authentication and session management.
 * Currently supports 'admin' role for certificate management.
 */
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin'],
    default: 'admin'
  },
  lastActive: {
    type: Date,
    default: Date.now
  }
}, { 
  timestamps: true,
  toJSON: {
    transform: (_, ret) => {
      delete ret.password;
      return ret;
    }
  }
});

/**
 * Hash password before saving if it has been modified.
 */
UserSchema.pre('save', async function(this: any, next: any) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

/**
 * Compares a plain text password with the hashed password in the database.
 * @param {string} password - The plain text password to compare.
 * @returns {Promise<boolean>} - True if passwords match, false otherwise.
 */
UserSchema.methods.comparePassword = async function(password: string) {
  return await bcrypt.compare(password, this.password);
};

export default mongoose.model('User', UserSchema);
