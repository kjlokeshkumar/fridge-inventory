import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Fridge Inventory',
  description: 'AI-powered fridge and pantry tracking',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Fridge Inventory',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="page-wrapper container">
          {children}
        </main>
        <footer className="site-footer">
          <Link href="/privacy">Privacy Policy</Link>
        </footer>
      </body>
    </html>
  );
}
