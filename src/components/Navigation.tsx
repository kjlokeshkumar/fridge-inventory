"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-content">
          <Link href="/" className="logo">
            <span className="logo-icon">🧊</span>
            Fridge<span className="logo-accent">AI</span>
          </Link>
          <div className="nav-links">
            <Link href="/inventory" className={`nav-link ${isActive('/inventory') ? 'active' : ''}`}>Inventory</Link>
            <Link href="/shopping-list" className={`nav-link ${isActive('/shopping-list') ? 'active' : ''}`}>Shopping</Link>
            <Link href="/recipes" className={`nav-link ${isActive('/recipes') ? 'active' : ''}`}>Recipes</Link>
            <Link href="/upload" className="nav-link btn-primary nav-upload">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
              Scan
            </Link>
          </div>
        </div>
      </nav>

      <nav className="bottom-nav">
        <Link href="/" className={`bottom-nav-item ${isActive('/') ? 'active' : ''}`}>
          <span className="bottom-nav-icon">🏠</span>
          <span className="bottom-nav-label">Home</span>
        </Link>
        <Link href="/inventory" className={`bottom-nav-item ${isActive('/inventory') ? 'active' : ''}`}>
          <span className="bottom-nav-icon">🫙</span>
          <span className="bottom-nav-label">Inventory</span>
        </Link>
        <Link href="/upload" className="bottom-nav-item scan-btn" title="Scan fridge">
          <div className="scan-icon-container">
            <span className="bottom-nav-icon">📷</span>
          </div>
        </Link>
        <Link href="/recipes" className={`bottom-nav-item ${isActive('/recipes') ? 'active' : ''}`}>
          <span className="bottom-nav-icon">🍳</span>
          <span className="bottom-nav-label">Recipes</span>
        </Link>
        <Link href="/shopping-list" className={`bottom-nav-item ${isActive('/shopping-list') ? 'active' : ''}`}>
          <span className="bottom-nav-icon">🛒</span>
          <span className="bottom-nav-label">Shopping</span>
        </Link>
      </nav>
    </>
  );
}
