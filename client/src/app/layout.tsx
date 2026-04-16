import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CertifyPro | Enterprise Certificate Automation",
    template: "%s | CertifyPro"
  },
  description: "Enterprise-grade automated certificate generation and secure delivery platform for institutions and events.",
  keywords: ["certificate generator", "automated delivery", "digital credentials", "bulk certificates", "PDF generation"],
  authors: [{ name: "Anand Mahadev" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://certifypro.vercel.app",
    title: "CertifyPro - Automated Certificate Delivery",
    description: "Generate and send personalized certificates automatically with enterprise-level security.",
    siteName: "CertifyPro",
  },
  twitter: {
    card: "summary_large_image",
    title: "CertifyPro - Automated Certificate Delivery",
    description: "Generate and send personalized certificates automatically.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-full bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50`}>
        {children}
      </body>
    </html>
  );
}
