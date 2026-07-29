"use client";

import { useState, useEffect } from 'react';

export interface UserProfile {
  id: number;
  name: string;
  dietaryPreference: string;
  allergies: string;
  avatar: string;
}

const AVATARS = ['👤', '🧑‍🍳', '👩‍🍳', '👨‍👩‍👧', '👦', '👧', '👴', '👵', '🥗', '🥦', '🍖'];
const DIETARY_OPTIONS = ['Any', 'Vegetarian', 'Non-Veg', 'Vegan', 'Jain', 'Eggitarian'];

export default function ProfileSelector() {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [activeProfile, setActiveProfile] = useState<UserProfile | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<Partial<UserProfile>>({
    name: '',
    dietaryPreference: 'Any',
    allergies: '',
    avatar: '👤'
  });

  const fetchProfiles = async () => {
    try {
      const res = await fetch('/api/profiles');
      const data = await res.json();
      if (data.success && data.profiles && data.profiles.length > 0) {
        setProfiles(data.profiles);
        const storedId = localStorage.getItem('activeProfileId');
        const match = data.profiles.find((p: UserProfile) => p.id === Number(storedId));
        const active = match || data.profiles[0];
        setActiveProfile(active);
        if (!storedId || !match) {
          localStorage.setItem('activeProfileId', String(active.id));
        }
      }
    } catch (e) {
      console.error('Failed to fetch profiles:', e);
    }
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const selectProfile = (profile: UserProfile) => {
    setActiveProfile(profile);
    localStorage.setItem('activeProfileId', String(profile.id));
    window.dispatchEvent(new CustomEvent('profileChange', { detail: profile }));
    setIsOpen(false);
    setIsEditing(false);
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editForm.name?.trim()) return;

    try {
      const isNew = !editForm.id;
      const url = '/api/profiles';
      const method = isNew ? 'POST' : 'PUT';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editForm)
      });
      const data = await res.json();

      if (data.success && data.profile) {
        await fetchProfiles();
        selectProfile(data.profile);
      }
    } catch (e) {
      console.error('Failed to save profile:', e);
    }
  };

  const startCreate = () => {
    setEditForm({
      name: '',
      dietaryPreference: 'Any',
      allergies: '',
      avatar: '👤'
    });
    setIsEditing(true);
  };

  const startEdit = (p: UserProfile) => {
    setEditForm(p);
    setIsEditing(true);
  };

  return (
    <div className="profile-selector-wrapper">
      {/* Header Profile Badge Button */}
      <button 
        onClick={() => setIsOpen(true)} 
        className="profile-badge-btn"
        title="Manage Household Profiles"
      >
        <span className="profile-avatar">{activeProfile?.avatar || '👤'}</span>
        <span className="profile-name">{activeProfile?.name || 'Profile'}</span>
        {activeProfile?.dietaryPreference && activeProfile.dietaryPreference !== 'Any' && (
          <span className="profile-diet-tag">{activeProfile.dietaryPreference}</span>
        )}
      </button>

      {/* Profile Modal */}
      {isOpen && (
        <div className="modal-backdrop" onClick={() => setIsOpen(false)}>
          <div className="modal-content glass-pane" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{isEditing ? (editForm.id ? 'Edit Profile' : 'New Family Profile') : 'Household Profiles'}</h3>
              <button onClick={() => setIsOpen(false)} className="modal-close-btn">✕</button>
            </div>

            {!isEditing ? (
              <div className="profile-list-view">
                <div className="profile-cards-grid">
                  {profiles.map((p) => (
                    <div 
                      key={p.id} 
                      className={`profile-card ${activeProfile?.id === p.id ? 'active' : ''}`}
                      onClick={() => selectProfile(p)}
                    >
                      <div className="profile-card-top">
                        <span className="profile-card-avatar">{p.avatar}</span>
                        <div className="profile-card-meta">
                          <span className="profile-card-name">{p.name}</span>
                          <span className="profile-card-diet">{p.dietaryPreference}</span>
                        </div>
                      </div>
                      {p.allergies && (
                        <div className="profile-card-allergies">
                          🚫 Avoids: {p.allergies}
                        </div>
                      )}
                      <button 
                        onClick={(e) => { e.stopPropagation(); startEdit(p); }} 
                        className="profile-edit-icon"
                        title="Edit profile"
                      >
                        ✏️ Edit
                      </button>
                    </div>
                  ))}
                </div>

                <div className="profile-modal-actions">
                  <button onClick={startCreate} className="btn-primary full-width">
                    + Add New Household Profile
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSaveProfile} className="profile-form">
                <div className="form-group">
                  <label>Avatar / Icon</label>
                  <div className="avatar-picker">
                    {AVATARS.map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        className={`avatar-option ${editForm.avatar === emoji ? 'selected' : ''}`}
                        onClick={() => setEditForm({ ...editForm, avatar: emoji })}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Profile Name</label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Lokesh, Mom, Kids"
                    value={editForm.name || ''}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>Dietary Preference</label>
                  <select 
                    value={editForm.dietaryPreference || 'Any'}
                    onChange={(e) => setEditForm({ ...editForm, dietaryPreference: e.target.value })}
                    className="form-select"
                  >
                    {DIETARY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Allergies / Exclusions to Avoid</label>
                  <input 
                    type="text"
                    placeholder="e.g. Peanuts, Dairy, Shellfish, Gluten"
                    value={editForm.allergies || ''}
                    onChange={(e) => setEditForm({ ...editForm, allergies: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-actions">
                  <button 
                    type="button" 
                    onClick={() => setIsEditing(false)} 
                    className="btn-secondary"
                  >
                    Back
                  </button>
                  <button type="submit" className="btn-primary">
                    Save Profile
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
