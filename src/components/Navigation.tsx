"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import ProfileSelector from './ProfileSelector';
import UserAuthModal from './UserAuthModal';
import { UI_TRANSLATIONS } from '@/lib/translations';

const LANGUAGES = [
  { code: 'English', label: 'English' },
  { code: 'Tamil', label: 'தமிழ்' }
];

export default function Navigation() {
  const pathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const t = UI_TRANSLATIONS[selectedLanguage] || UI_TRANSLATIONS.English;

  useEffect(() => {
    const stored = localStorage.getItem('appLanguage') || 'English';
    const valid = stored === 'Tamil' ? 'Tamil' : 'English';
    if (stored !== valid) {
      localStorage.setItem('appLanguage', valid);
    }
    setSelectedLanguage(valid);

    const syncSession = async () => {
      try {
        const response = await fetch('/api/auth');
        const data = await response.json();
        setIsAuthenticated(response.ok && Boolean(data.success && data.user));
      } catch (error) {
        console.error('Unable to load navigation session:', error);
        setIsAuthenticated(false);
      }
    };
    const handleAuthChange = (event: Event) => {
      setIsAuthenticated(Boolean((event as CustomEvent).detail));
    };
    void syncSession();
    window.addEventListener('userAuthChange', handleAuthChange);

    // Global keyboard visibility detection for mobile webview & browsers
    const isTextInput = (el: Element | null): boolean => {
      if (!el) return false;
      const tag = el.tagName;
      return tag === 'INPUT' || tag === 'TEXTAREA' || (el as HTMLElement).isContentEditable;
    };

    const handleFocusIn = (e: FocusEvent) => {
      if (isTextInput(e.target as Element)) {
        document.body.classList.add('keyboard-open');
      }
    };

    const handleFocusOut = () => {
      setTimeout(() => {
        if (!isTextInput(document.activeElement)) {
          document.body.classList.remove('keyboard-open');
        }
      }, 120);
    };

    const handleVisualResize = () => {
      // If user is actively focused on an input/search, keep keyboard-open locked active
      if (isTextInput(document.activeElement)) {
        document.body.classList.add('keyboard-open');
        return;
      }
      if (window.visualViewport) {
        const screenH = (window.screen && window.screen.height) || window.innerHeight || 800;
        const isKeyboardUp = window.visualViewport.height < (screenH * 0.68);
        document.body.classList.toggle('keyboard-open', isKeyboardUp);
      }
    };

    window.addEventListener('focusin', handleFocusIn);
    window.addEventListener('focusout', handleFocusOut);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleVisualResize);
    }

    return () => {
      window.removeEventListener('userAuthChange', handleAuthChange);
      window.removeEventListener('focusin', handleFocusIn);
      window.removeEventListener('focusout', handleFocusOut);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleVisualResize);
      }
    };
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelectedLanguage(lang);
    localStorage.setItem('appLanguage', lang);
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
  };

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
            <span className="logo-icon">👨‍🍳</span>
            <span className="logo-text">Sourashtra <span className="logo-accent">Chef</span></span>
          </Link>
          
          <div className="nav-controls">
            <UserAuthModal />
            {isAuthenticated && <ProfileSelector />}

            <label htmlFor="header-lang-select" className="lang-selector-container">
              <span className="lang-globe-icon" aria-hidden="true">🌐</span>
              <select 
                id="header-lang-select"
                value={selectedLanguage} 
                onChange={handleLanguageChange}
                className="lang-selector"
                aria-label="Display language"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>{l.label}</option>
                ))}
              </select>
            </label>

            <div className="nav-links">
              <Link href="/recipes" className={`nav-link ${isActive('/recipes') ? 'active' : ''}`}>{t.navRecipes}</Link>
              {isAuthenticated && (
                <>
                  <Link href="/inventory" className={`nav-link ${isActive('/inventory') ? 'active' : ''}`}>{t.navInventory}</Link>
                  <Link href="/shopping-list" className={`nav-link ${isActive('/shopping-list') ? 'active' : ''}`}>{t.navShopping}</Link>
                  <Link href="/upload" className="nav-link btn-primary nav-upload">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}>
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                    {t.navScan}
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      <nav className="bottom-nav">
        <Link href="/" className={`bottom-nav-item ${isActive('/') ? 'active' : ''}`}>
          <span className="bottom-nav-icon">🏠</span>
          <span className="bottom-nav-label">{t.navHome}</span>
        </Link>
        <Link href="/inventory" className={`bottom-nav-item ${isActive('/inventory') ? 'active' : ''}`}>
          <span className="bottom-nav-icon">🫙</span>
          <span className="bottom-nav-label">{t.navInventory}</span>
        </Link>
        <Link href="/upload" className="bottom-nav-item scan-btn" title={t.homeScanTitle} aria-label={t.homeScanTitle || "Scan Fridge"}>
          <div className="scan-icon-container">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="scan-camera-svg"
              aria-hidden="true"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
        </Link>
        <Link href="/recipes" className={`bottom-nav-item ${isActive('/recipes') ? 'active' : ''}`}>
          <span className="bottom-nav-icon">🍳</span>
          <span className="bottom-nav-label">{t.navRecipes}</span>
        </Link>
        <Link href="/shopping-list" className={`bottom-nav-item ${isActive('/shopping-list') ? 'active' : ''}`}>
          <span className="bottom-nav-icon">🛒</span>
          <span className="bottom-nav-label">{t.navShopping}</span>
        </Link>
      </nav>
    </>
  );
}
