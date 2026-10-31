"use client";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { GoogleSignIn } from '@capawesome/capacitor-google-sign-in';

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

export default function GoogleSignInCallbackPage() {
  const started = useRef(false);
  const [message, setMessage] = useState('Completing Google sign-in…');

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const completeSignIn = async () => {
      try {
        if (!GOOGLE_CLIENT_ID) throw new Error('Google sign-in is not configured.');

        await GoogleSignIn.initialize({
          clientId: GOOGLE_CLIENT_ID,
          redirectUrl: `${window.location.origin}/auth/google/callback`,
        });
        const result = await GoogleSignIn.handleRedirectCallback();
        if (!result.idToken) throw new Error('Google did not return a sign-in token.');

        const response = await fetch('/api/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ idToken: result.idToken }),
        });
        const data = await response.json();
        if (!response.ok || !data.success) {
          throw new Error(data.error || 'Google sign-in failed.');
        }

        window.dispatchEvent(new CustomEvent('userAuthChange', { detail: data.user }));
        window.location.replace('/');
      } catch (error: unknown) {
        setMessage(error instanceof Error ? error.message : 'Google sign-in failed. Please try again.');
      }
    };

    void completeSignIn();
  }, []);

  return (
    <main className="container" style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <section className="glass-pane" style={{ maxWidth: '32rem', margin: '0 auto', padding: '2rem' }}>
        <h1 className="page-title">Google sign-in</h1>
        <p role="status">{message}</p>
        {message !== 'Completing Google sign-in…' && (
          <Link className="btn-primary" href="/">Return to Fridge AI</Link>
        )}
      </section>
    </main>
  );
}
