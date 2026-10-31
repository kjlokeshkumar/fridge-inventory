"use client";

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Capacitor } from '@capacitor/core';
import {
  ErrorCode,
  GoogleSignIn,
} from '@capawesome/capacitor-google-sign-in';

export interface AuthUser {
  id: number;
  username: string;
  email: string | null;
  displayName: string | null;
  role: string;
  status: string;
}

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const GOOGLE_CALLBACK_URL = '/auth/google/callback';

function getErrorMessage(error: unknown): string {
  if (typeof error === 'object' && error !== null && 'code' in error) {
    if (error.code === ErrorCode.SignInCanceled) return 'Google sign-in was canceled.';
    if (error.code === ErrorCode.NoCredentialAvailable) {
      return 'No Google account is available on this device.';
    }
    if (error.code === ErrorCode.ProviderConfigurationError) {
      return 'Google sign-in is unavailable. Check Google Play services and try again.';
    }
  }
  return error instanceof Error ? error.message : 'Google sign-in failed. Please try again.';
}

export default function UserAuthModal() {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isSessionReady, setIsSessionReady] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const syncSession = async () => {
      try {
        const response = await fetch('/api/auth');
        const data = await response.json();
        setCurrentUser(response.ok && data.success ? data.user : null);
      } catch {
        setCurrentUser(null);
      } finally {
        setIsSessionReady(true);
      }
    };
    const handleAuth = (event: Event) => {
      setCurrentUser((event as CustomEvent<AuthUser | null>).detail);
      setIsSessionReady(true);
    };
    const handleOpen = () => {
      setErrorMsg(null);
      setIsOpen(true);
    };
    void syncSession();
    window.addEventListener('userAuthChange', handleAuth);
    window.addEventListener('openAuthModal', handleOpen);
    return () => {
      window.removeEventListener('userAuthChange', handleAuth);
      window.removeEventListener('openAuthModal', handleOpen);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const loginWithGoogle = async () => {
    if (!GOOGLE_CLIENT_ID) {
      setErrorMsg('Google sign-in is not configured. Please try again later.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    try {
      const nonceResponse = await fetch('/api/auth/google/nonce', { method: 'POST' });
      const nonceData = await nonceResponse.json();
      if (!nonceResponse.ok || !nonceData.success || typeof nonceData.nonce !== 'string') {
        throw new Error(nonceData.error || 'Unable to start Google sign-in.');
      }

      const isWeb = Capacitor.getPlatform() === 'web';
      await GoogleSignIn.initialize({
        clientId: GOOGLE_CLIENT_ID,
        ...(isWeb ? { redirectUrl: `${window.location.origin}${GOOGLE_CALLBACK_URL}` } : {}),
      });
      const result = await GoogleSignIn.signIn({ nonce: nonceData.nonce });
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

      const user: AuthUser = data.user;
      setCurrentUser(user);
      window.dispatchEvent(new CustomEvent('userAuthChange', { detail: user }));
      setIsOpen(false);
    } catch (error: unknown) {
      setErrorMsg(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = async () => {
    try {
      const response = await fetch('/api/auth', { method: 'DELETE' });
      if (!response.ok) throw new Error('Unable to sign out of Fridge AI.');
      setCurrentUser(null);
      window.dispatchEvent(new CustomEvent('userAuthChange', { detail: null }));
      setIsOpen(false);

      if (GOOGLE_CLIENT_ID && Capacitor.isNativePlatform()) {
        try {
          await GoogleSignIn.initialize({ clientId: GOOGLE_CLIENT_ID });
          await GoogleSignIn.signOut();
        } catch (error) {
          console.error('Unable to clear Google credential state:', error);
        }
      }
    } catch (error: unknown) {
      setErrorMsg(error instanceof Error ? error.message : 'Unable to sign out.');
    }
  };

  const accountName = currentUser?.displayName || currentUser?.email || currentUser?.username;

  return (
    <div className="user-auth-wrapper">
      <button
        onClick={() => {
          if (isSessionReady) setIsOpen(true);
        }}
        className="user-auth-badge"
        title={currentUser ? `Signed in as ${accountName}` : 'Sign in'}
        aria-label={currentUser ? `Account: ${accountName}` : 'Sign in'}
        disabled={!isSessionReady}
      >
        <span className="user-auth-icon">👤</span>
        <span className="user-auth-name">
          {isSessionReady ? accountName || 'Sign In' : 'Checking…'}
        </span>
      </button>

      {isOpen && isMounted && createPortal(
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="modal-content glass-pane" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{currentUser ? 'Your Account' : 'Sign In or Create Account'}</h3>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="modal-close-btn"
                aria-label="Close account dialog"
                title="Close"
              >
                <span aria-hidden="true">✕</span>
                <span>Close</span>
              </button>
            </div>

            {currentUser ? (
              <div className="auth-account-summary">
                <p>You’re signed in as</p>
                <strong>{accountName}</strong>
                <div className="form-actions">
                  <button type="button" onClick={logoutUser} className="btn-secondary">
                    Sign out
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '16px' }}>
                  Continue with your Google account to access your private inventory.
                  Google passwords are never shared with Fridge AI.
                </p>

                {errorMsg && (
                  <div className="auth-error-banner" role="alert">
                    ⚠️ {errorMsg}
                  </div>
                )}

                <button
                  type="button"
                  onClick={loginWithGoogle}
                  className="btn-primary full-width google-sign-in-button"
                  disabled={loading}
                >
                  {loading ? 'Connecting to Google…' : 'Continue with Google'}
                </button>
              </>
            )}
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
