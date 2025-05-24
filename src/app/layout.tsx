import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import AuthInitializer from '@/components/AuthInitializer';
import QueryProvider from '@/providers/QueryProvider';
import { InitFavouriteStore } from './(nondashboard)/properties/InitFavouriteStore';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Rental',
    default: 'Rental',
  },
  description: 'Rental web app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <InitFavouriteStore />
        <AuthInitializer />
        <QueryProvider>{children}</QueryProvider>
        <Toaster position='top-center' richColors />
      </body>
    </html>
  );
}
