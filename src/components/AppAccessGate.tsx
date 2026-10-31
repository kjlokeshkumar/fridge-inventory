"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type AccessStatus = 'checking' | 'authenticated' | 'signed-out' | 'error';

export default function AppAccessGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [status, setStatus] = useState<AccessStatus>('checking');
  const authChangeVersion = useRef(0);
  const isPublicRoute = pathname === '/recipes' || pathname.startsWith('/recipes/') ||
    pathname === '/privacy' || pathname.startsWith('/privacy/') ||
    pathname === '/auth/google/callback';

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
    const handleAuthChange = (event: Event) => {
      authChangeVersion.current += 1;
      setStatus((event as CustomEvent).detail ? 'authenticated' : 'signed-out');
    };

    window.addEventListener('userAuthChange', handleAuthChange);
    void checkSession();
    return () => window.removeEventListener('userAuthChange', handleAuthChange);
  }, [checkSession]);

  if (isPublicRoute || status === 'authenticated') return children;

  return (
    <section className="access-gate glass-pane" aria-live="polite">
      {status === 'checking' ? (
        <>
          <span className="spinner" />
          <p>Checking your sign-in…</p>
        </>
      ) : status === 'error' ? (
        <>
          <div className="card-icon" aria-hidden="true">⚠️</div>
          <h1>Can’t verify your sign-in</h1>
          <p>Please check your connection and try again.</p>
          <button type="button" className="btn-primary" onClick={() => void checkSession()}>
            Try again
          </button>
        </>
      ) : (
        <>
          <div className="card-icon" aria-hidden="true">🔒</div>
          <h1>Sign in to your private fridge</h1>
          <p>
            Inventory, scanning, and shopping lists are private to your account.
            Sign in or create an account to use these features.
          </p>
          <button
            type="button"
            className="btn-primary"
            onClick={() => window.dispatchEvent(new Event('openAuthModal'))}
          >
            Sign in or create account
          </button>
          <Link href="/recipes" className="access-gate-link">
            Browse Sourashtra recipes without signing in
          </Link>
        </>
      )}
    </section>
  );
}
