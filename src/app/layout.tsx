import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fridge Inventory',
  description: 'AI-powered fridge and pantry tracking',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="navbar">
          <div className="container nav-content">
            <Link href="/" className="logo">
              <span className="logo-icon">🧊</span>
              Fridge<span className="logo-accent">AI</span>
            </Link>
            <div className="nav-links">
              <Link href="/inventory" className="nav-link">Inventory</Link>
              <Link href="/shopping-list" className="nav-link">Shopping</Link>
              <Link href="/recipes" className="nav-link">Recipes</Link>
              <Link href="/upload" className="nav-link btn-primary nav-upload">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                Scan
              </Link>
            </div>
          </div>
        </nav>
        <main className="page-wrapper container">
          {children}
        </main>
      </body>
    </html>
  );
}
