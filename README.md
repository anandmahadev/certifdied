# CertifyPro

CertifyPro is an automated certificate generation and delivery platform designed for educational institutions, event organizers, and businesses.

## Features

- **Automated Generation**: Create high-quality PDF certificates from custom templates.
- **Bulk Processing**: Import hundreds of recipients via CSV/Excel in seconds.
- **Instant Delivery**: Automatically send personalized emails with certificates attached.
- **Verification System**: Each certificate includes a unique ID and optional QR code for public verification.
- **Modern Dashboard**: Intuitive interface for managing templates, students, and history.

## Architecture Overview

CertifyPro follows a modern decoupled architecture:

- **Client**: A React-based frontend built with Next.js 15, utilizing the App Router for efficient server-side rendering and client-side navigation.
- **Server**: A robust RESTful API built with Express.js and Node.js, managing business logic, PDF generation, and database interactions.
- **Database**: MongoDB serves as the primary data store, providing flexibility for certificate templates and recipient data.

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

## License
MIT
