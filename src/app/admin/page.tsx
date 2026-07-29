"use client";

import { useState, useEffect } from 'react';
import './admin.css';

interface AdminUser {
  id: number;
  username: string;
  status: string;
  role: string;
  createdAt: string;
  itemCount: number;
}

export default function AdminDashboardPage() {
  const [adminKey, setAdminKey] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedKey = localStorage.getItem('adminSecretKey');
    if (storedKey) {
      setAdminKey(storedKey);
      fetchAdminData(storedKey);
    }
  }, []);

  const fetchAdminData = async (key: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/admin', {
        headers: { 'x-admin-key': key }
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Invalid Admin Passcode');
      }
      setUsers(data.users || []);
      setIsAuthenticated(true);
      localStorage.setItem('adminSecretKey', key);
    } catch (e: unknown) {
      const err = e as Error;
      setError(err.message || 'Access denied');
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchAdminData(adminKey);
  };

  const handleUserAction = async (userId: number, action: 'block_user' | 'unblock_user' | 'delete_user') => {
    if (action === 'delete_user' && !confirm('Are you sure you want to permanently delete this user and purge all their inventory data?')) {
      return;
    }

    try {
      const res = await fetch('/api/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-key': adminKey
        },
        body: JSON.stringify({ action, userId })
      });
      const data = await res.json();
      if (data.success) {
        fetchAdminData(adminKey);
      } else {
        alert(data.error || 'Action failed');
      }
    } catch {
      alert('Failed to perform admin action.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login-container">
        <div className="admin-login-card glass-pane">
          <div className="admin-icon-header">
            🛡️ <h2>Admin Security Dashboard</h2>
          </div>
          <p className="admin-subtext">Restricted access for platform owner moderation</p>

          {error && <div className="admin-error-banner">⚠️ {error}</div>}

          <form onSubmit={handleLoginSubmit} className="admin-form">
            <div className="form-group">
              <label>Admin Passcode / Secret Key</label>
              <input 
                type="password"
                required
                placeholder="Enter admin passcode"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="form-input"
              />
            </div>
            <button type="submit" className="btn-primary full-width" disabled={loading}>
              {loading ? 'Verifying...' : 'Unlock Admin Panel 🔓'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  const activeUsers = users.filter(u => u.status === 'active').length;
  const blockedUsers = users.filter(u => u.status === 'blocked').length;
  const totalItems = users.reduce((acc, u) => acc + (u.itemCount || 0), 0);

  return (
    <div className="admin-dashboard-container">
      <header className="dashboard-header flex-header">
        <div>
          <h2>🛡️ Admin Safety & Moderation Dashboard</h2>
          <p className="subtitle">Manage user accounts, block abusive users, and enforce modestness</p>
        </div>
        <button 
          onClick={() => { localStorage.removeItem('adminSecretKey'); setIsAuthenticated(false); }} 
          className="btn-secondary"
        >
          🔒 Lock Dashboard
        </button>
      </header>

      {/* Stats Grid */}
      <div className="admin-stats-grid">
        <div className="stat-card glass-pane">
          <span className="stat-title">Total Registered Users</span>
          <span className="stat-value">{users.length}</span>
        </div>
        <div className="stat-card glass-pane">
          <span className="stat-title">Active Users</span>
          <span className="stat-value text-success">{activeUsers}</span>
        </div>
        <div className="stat-card glass-pane">
          <span className="stat-title">Blocked Users</span>
          <span className="stat-value text-danger">{blockedUsers}</span>
        </div>
        <div className="stat-card glass-pane">
          <span className="stat-title">Total Isolated Items</span>
          <span className="stat-value text-accent">{totalItems}</span>
        </div>
      </div>

      {/* Users Management Table */}
      <div className="glass-pane admin-table-card">
        <h3>User Accounts & Moderation</h3>
        <div className="table-responsive">
          <table className="admin-users-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Username</th>
                <th>Role</th>
                <th>Items Count</th>
                <th>Status</th>
                <th>Joined Date</th>
                <th>Admin Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u.id} className={u.status === 'blocked' ? 'row-blocked' : ''}>
                  <td>#{u.id}</td>
                  <td><strong>{u.username}</strong></td>
                  <td><span className={`role-badge ${u.role}`}>{u.role}</span></td>
                  <td>{u.itemCount} items</td>
                  <td>
                    <span className={`status-badge ${u.status}`}>
                      {u.status === 'active' ? '🟢 Active' : '🔴 Blocked'}
                    </span>
                  </td>
                  <td>{u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'N/A'}</td>
                  <td>
                    <div className="action-btn-group">
                      {u.role !== 'admin' && (
                        <>
                          {u.status === 'active' ? (
                            <button 
                              onClick={() => handleUserAction(u.id, 'block_user')}
                              className="btn-action btn-block"
                            >
                              🚫 Block User
                            </button>
                          ) : (
                            <button 
                              onClick={() => handleUserAction(u.id, 'unblock_user')}
                              className="btn-action btn-unblock"
                            >
                              ✅ Unblock
                            </button>
                          )}
                          <button 
                            onClick={() => handleUserAction(u.id, 'delete_user')}
                            className="btn-action btn-delete"
                          >
                            🗑️ Delete Account
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
