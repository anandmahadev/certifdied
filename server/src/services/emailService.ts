import nodemailer from 'nodemailer';

export const sendCertificateEmail = async (to: string, subject: string, text: string, pdfBuffer: Buffer) => {
  const transporter = nodemailer.createTransport({
    // Configure with SendGrid or SMTP
    host: 'smtp.sendgrid.net',
    port: 587,
    auth: {
      user: 'apikey',
      pass: process.env.SENDGRID_API_KEY
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to,
    subject,
    text,
    attachments: [
      {
        filename: 'certificate.pdf',
        content: pdfBuffer
      }
    ]
  };

  return await transporter.sendMail(mailOptions);
};
