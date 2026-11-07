import type { Metadata, Viewport } from 'next';
import Link from 'next/link';
import './globals.css';
import Navigation from '@/components/Navigation';
import AppAccessGate from '@/components/AppAccessGate';

export const metadata: Metadata = {
  title: 'Sourashtra Chef',
  description: 'AI-powered fridge and pantry tracking for Sourashtra-inspired cooking',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Sourashtra Chef',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  colorScheme: 'light',
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
          <AppAccessGate>{children}</AppAccessGate>
        </main>
        <footer className="site-footer">
          <Link href="/privacy">Privacy Policy</Link>
          {' · '}
          <Link href="/delete-account">Delete Account</Link>
        </footer>
      </body>
    </html>
  );
}
