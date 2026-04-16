/**
 * Common types and interfaces for CertifyPro Server
 */

export interface StudentData {
  name: string;
  email: string;
  [key: string]: any;
}

export interface GenerationResult {
  name: string;
  email: string;
  status: 'Generated' | 'Failed';
  error?: string;
}

export interface CertificateField {
  key: string;
  x: number;
  y: number;
  size?: number;
  font?: string;
  color?: string;
}
