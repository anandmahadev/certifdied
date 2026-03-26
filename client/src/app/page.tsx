import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Download, Mail, ShieldCheck, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white dark:bg-black">
        <Link className="flex items-center justify-center font-bold text-2xl tracking-tighter text-indigo-600" href="/">
          CertifyPro
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/login">
            Login
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/register">
            Register
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-indigo-600 text-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Automate Your Certificates
            </h1>
            <p className="mx-auto max-w-[700px] mt-4 text-indigo-100 md:text-xl">
              Upload templates, import student data, and deliver personalized certificates directly to their inbox in seconds.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg rounded-full shadow-lg transition-all hover:scale-105">
                <Link href="/register">Get Started Free</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-indigo-600 mb-2" />
                  <CardTitle>Fast Generation</CardTitle>
                  <CardDescription>Generate hundreds of certificates in a single batch with high-fidelity PDF output.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Mail className="h-10 w-10 text-indigo-600 mb-2" />
                  <CardTitle>Automated Delivery</CardTitle>
                  <CardDescription>Send certificates automatically via SendGrid or SMTP with tracking for every email.</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <ShieldCheck className="h-10 w-10 text-indigo-600 mb-2" />
                  <CardTitle>Secure Verification</CardTitle>
                  <CardDescription>Every certificate comes with a unique ID and optional QR code for public verification.</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        {/* How It Works Section */}
        <section className="w-full py-20 bg-white dark:bg-black overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full -z-10" />
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-900 dark:text-white">
                Three Simple Steps
              </h2>
              <p className="mt-4 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                Stop wasting hours on manual certificate creation. Our automated workflow handles everything.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="flex flex-col items-center text-center group cursor-pointer p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Upload Template</h3>
                <p className="text-slate-500 text-sm">Upload your design in PDF or JPG format and define placeholders for dynamic fields.</p>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Import Data</h3>
                <p className="text-slate-500 text-sm">Securely upload CSV or Excel files containing recipient details like name and email.</p>
              </div>
              <div className="flex flex-col items-center text-center group cursor-pointer p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
                <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-2xl flex items-center justify-center text-2xl font-bold mb-6 group-hover:scale-110 transition-transform">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Send Instantly</h3>
                <p className="text-slate-500 text-sm">Sit back as we generate and deliver hundreds of personalized certificates via email.</p>
              </div>
            </div>
          </div>
        </section>
      </main>


      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t font-medium text-sm text-slate-500">
        <p>© 2026 CertifyPro Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="hover:underline underline-offset-4" href="#">Terms of Service</Link>
          <Link className="hover:underline underline-offset-4" href="#">Privacy</Link>
        </nav>
      </footer>
    </div>
  );
}
