"use client";

import { useState, useEffect } from 'react';

export interface AuthUser {
  id: number;
  username: string;
  role: string;
  status: string;
}

export default function UserAuthModal() {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [passkeyInput, setPasskeyInput] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('appUser');
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        setCurrentUser(parsed);
      } catch {
        // Clear corrupt storage
        localStorage.removeItem('appUser');
      }
    } else {
      // Initialize default user session
      loginUser('user_guest', '1234');
    }
  }, []);

  const loginUser = async (uname: string, pkey: string) => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: uname, passkey: pkey })
      });
      const data = await res.json();

      if (!data.success) {
        setErrorMsg(data.error || 'Authentication failed.');
        setLoading(false);
        return;
      }

      const user: AuthUser = data.user;
      setCurrentUser(user);
      localStorage.setItem('appUser', JSON.stringify(user));
      localStorage.setItem('appUserId', String(user.id));
      window.dispatchEvent(new CustomEvent('userAuthChange', { detail: user }));
      setIsOpen(false);
      setUsernameInput('');
      setPasskeyInput('');
    } catch {
      setErrorMsg('Failed to connect to authentication server.');
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!usernameInput.trim()) return;
    loginUser(usernameInput, passkeyInput);
  };

  return (
    <div className="user-auth-wrapper">
      {/* User Badge Button in Header */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="user-auth-badge"
        title="Switch Account / Unique Username"
      >
        <span className="user-auth-icon">🔑</span>
        <span className="user-auth-name">{currentUser?.username || 'Sign In'}</span>
      </button>

      {/* Auth Modal */}
      {isOpen && (
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="modal-content glass-pane" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Enter Unique Username</h3>
              <button onClick={() => setIsOpen(false)} className="modal-close-btn">✕</button>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#cbd5e1', marginBottom: '16px' }}>
              Maintain your own <strong>private inventory</strong>! Enter a unique alphanumeric name to log in or create your personal account.
            </p>

            {errorMsg && (
              <div className="auth-error-banner">
                ⚠️ {errorMsg}
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="profile-form">
              <div className="form-group">
                <label>Unique Username (e.g. alex99, lokesh_cook)</label>
                <input 
                  type="text"
                  required
                  placeholder="Enter unique username"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>Passkey / PIN (Optional)</label>
                <input 
                  type="password"
                  placeholder="e.g. 1234"
                  value={passkeyInput}
                  onChange={(e) => setPasskeyInput(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-actions">
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)} 
                  className="btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? 'Authenticating...' : 'Access My Inventory'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
