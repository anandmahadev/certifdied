# CertifyPro

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)
![Node.js](https://img.shields.io/badge/Node.js-18-green?style=flat-square&logo=node.js)
![Express](https://img.shields.io/badge/Express.js-5.0-lightgrey?style=flat-square&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-8.0-green?style=flat-square&logo=mongodb)

CertifyPro is an automated certificate generation and delivery platform designed for educational institutions, event organizers, and businesses.

## Why CertifyPro?

In today's fast-paced digital world, manual certificate generation and distribution are time-consuming and prone to errors. CertifyPro streamlines this process by:
- **Reducing Overhead**: Automating the entire workflow from data ingestion to email delivery.
- **Ensuring Accuracy**: Using direct mapping from CSV/Excel to prevent manual data entry errors.
- **Enhancing Credibility**: Providing a built-in verification system for every certificate issued.


## Features

- **Automated Generation**: Create high-quality PDF certificates from custom templates.
- **Bulk Processing**: Import hundreds of recipients via CSV/Excel in seconds.
- **Instant Delivery**: Automatically send personalized emails with certificates attached.
- **Verification System**: Each certificate includes a unique ID and optional QR code for public verification.
- **Modern Dashboard**: Intuitive interface for managing templates, students, and history.

### Key Highlights
- **Dynamic Field Mapping**: Map CSV headers directly to certificate placeholders via a simple UI.
- **Secure Links**: Share certificates via encrypted links for added security.
- **Email Tracking**: Monitor delivery status of all sent certificate emails.


## Architecture Overview

CertifyPro follows a modern decoupled architecture:

- **Client**: A React-based frontend built with Next.js 15, utilizing the App Router for efficient server-side rendering and client-side navigation.
- **Server**: A robust RESTful API built with Express.js and Node.js, managing business logic, PDF generation, and database interactions.
- **Database**: MongoDB serves as the primary data store, providing flexibility for certificate templates and recipient data.

## Project Structure

```text
certifdied/
├── client/          # Next.js 15 Frontend
│   ├── src/         # React components & hooks
│   └── public/      # Static assets
├── server/          # Express.js Backend
│   ├── src/         # API routes, models & services
│   └── dist/        # Compiled JS
├── CONTRIBUTING.md  # Guidelines for contributors
└── README.md        # Project documentation
```

## Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Styling**: TailwindCSS & Lucide Icons
- **Components**: Radix UI / Shadcn UI

### Backend
- **Runtime**: Node.js with Express
- **Database**: MongoDB with Mongoose
- **File Storage**: Cloudinary (for templates/PDFs)
- **Email**: Nodemailer with SMTP/SendGrid
- **PDF Generation**: pdf-lib

## Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Install dependencies for both client and server:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```
3. Set up environment variables in `server/.env`:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_secret
   ```
4. Run the development servers:
   - Server: `cd server && npm run dev`
   - Client: `cd client && npm run dev`


## Quick Start

```bash
# Clone the repository
git clone https://github.com/anandmahadev/certifdied.git
cd certifdied

# Install dependencies and start server
cd server && npm install && npm run dev &

# Install dependencies and start client
cd ../client && npm install && npm run dev
```

## Roadmap
- [x] Multi-template support
- [ ] Direct integration with Google Sheets
- [ ] Real-time email delivery analytics dashboard
- [ ] Multi-lingual certificate generation

## Frequently Asked Questions
- **How many certificates can I generate in a single batch?**
  Depending on your server configuration, you can typically generate up to 500 certificates per CSV upload.
- **Can I use custom fonts for my templates?**
  Yes, You can upload custom TTF fonts for branding consistency.

## Security

If you discover any security-related issues, please refer to our [Security Policy](SECURITY.md).

## License
MIT

