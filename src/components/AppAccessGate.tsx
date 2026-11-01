"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UI_TRANSLATIONS } from '@/lib/translations';

type AccessStatus = 'checking' | 'authenticated' | 'signed-out' | 'error';

export default function AppAccessGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [status, setStatus] = useState<AccessStatus>('checking');
  const [language, setLanguage] = useState('English');
  const authChangeVersion = useRef(0);
  const isPublicRoute = pathname === '/recipes' || pathname.startsWith('/recipes/') ||
    pathname === '/privacy' || pathname.startsWith('/privacy/') ||
    pathname === '/delete-account' || pathname.startsWith('/delete-account/') ||
    pathname === '/auth/google/callback';

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.English;

  const checkSession = useCallback(async () => {
    const version = authChangeVersion.current;
    setStatus('checking');
    try {
      const response = await fetch('/api/auth');
      if (version !== authChangeVersion.current) return;
      if (response.status === 401) {
        setStatus('signed-out');
        return;
      }
      if (!response.ok) throw new Error(`Session check failed (${response.status}).`);

      const data = await response.json();
      setStatus(data.success && data.user ? 'authenticated' : 'signed-out');
    } catch (error) {
      if (version === authChangeVersion.current) {
        console.error('Unable to verify sign-in session:', error);
        setStatus('error');
      }
    }
  }, []);

  useEffect(() => {
    setLanguage(localStorage.getItem('appLanguage') || 'English');

    const handleAuthChange = (event: Event) => {
      authChangeVersion.current += 1;
      setStatus((event as CustomEvent).detail ? 'authenticated' : 'signed-out');
    };

    const handleLanguageChange = (event: Event) => {
      setLanguage((event as CustomEvent<string>).detail || 'English');
    };

    window.addEventListener('userAuthChange', handleAuthChange);
    window.addEventListener('languageChange', handleLanguageChange);
    void checkSession();
    return () => {
      window.removeEventListener('userAuthChange', handleAuthChange);
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, [checkSession]);

  if (isPublicRoute || status === 'authenticated') return children;

  return (
    <section className="access-gate glass-pane" aria-live="polite">
      {status === 'checking' ? (
        <>
          <span className="spinner" />
          <p>{t.gateChecking || 'Checking your sign-in…'}</p>
        </>
      ) : status === 'error' ? (
        <>
          <div className="card-icon" aria-hidden="true">⚠️</div>
          <h1>{t.gateError || 'Can’t verify your sign-in'}</h1>
          <p>{t.gateConnectionCheck || 'Please check your connection and try again.'}</p>
          <button type="button" className="btn-primary" onClick={() => void checkSession()}>
            {t.gateRetry || 'Try again'}
          </button>
        </>
      ) : (
        <>
          <div className="card-icon" aria-hidden="true">🔒</div>
          <h1>{t.gateTitle || 'Sign in to your private fridge'}</h1>
          <p>
            {t.gateDesc || 'Inventory, scanning, and shopping lists are private to your account. Sign in or create an account to use these features.'}
          </p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => window.dispatchEvent(new Event('openAuthModal'))}
          >
            {t.gateSignInBtn || 'Sign in or create account'}
          </button>
          <Link href="/recipes" className="access-gate-link">
            {t.gateBrowseRecipes || 'Browse Sourashtra recipes without signing in'}
          </Link>
        </>
      )}
    </section>
  );
}
