"use client";

import { useEffect, useState, useRef } from 'react';
import './inventory.css';
import { formatItemName, toTamilCategory, UI_TRANSLATIONS } from '@/lib/translations';
import { getProduceStyle } from '@/lib/produce-styles';
import { isInventoryItemExpired, isInventoryItemExpiringSoon } from '@/lib/inventory-dates';
import { triggerSparkles, triggerSparklesAtElement } from '@/lib/sparkles';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  category: string;
  expirationDate: string | null;
  imageUrl: string | null;
}

export default function InventoryPage() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('English');
  const [pendingDeletedItem, setPendingDeletedItem] = useState<InventoryItem | null>(null);
  const [undoCountdown, setUndoCountdown] = useState(5);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Produce');
  const [newItemQty, setNewItemQty] = useState(1);
  const [isSubmittingNew, setIsSubmittingNew] = useState(false);

  const deleteTimerRef = useRef<NodeJS.Timeout | null>(null);
  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pendingItemRef = useRef<InventoryItem | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('appLanguage') || 'English';
    setLanguage(stored);

    const handleLang = (e: Event) => {
      const newLang = (e as CustomEvent).detail;
      setLanguage(newLang);
    };
    const handleAuth = () => {
      fetchInventory();
    };
    window.addEventListener('languageChange', handleLang);
    window.addEventListener('userAuthChange', handleAuth);
    return () => {
      window.removeEventListener('languageChange', handleLang);
      window.removeEventListener('userAuthChange', handleAuth);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchInventory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  // Clean up timers on unmount
  useEffect(() => {
    return () => {
      if (deleteTimerRef.current) clearTimeout(deleteTimerRef.current);
      if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
    };
  }, []);

  // Keyboard Shortcuts (Heuristic #7 - Flexibility & Efficiency)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (showAddModal) {
          setShowAddModal(false);
        }
      }
      if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setShowAddModal(true);
        setTimeout(() => {
          const input = document.getElementById('new-inventory-item-input') as HTMLInputElement | null;
          input?.focus();
        }, 100);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showAddModal]);

  const fetchInventory = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/inventory?lang=${encodeURIComponent(language)}`);
      const data = await res.json();
      if (res.ok && data.items) {
        setItems(data.items);
      } else {
        setItems([]);
      }
    } catch (err) {
      console.error('Failed to fetch inventory', err);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  // 5-Second Undo Delete (Heuristic #3 - User Control & Freedom) with Magic Sprinkles
  const handleDelete = (item: InventoryItem, e: React.MouseEvent) => {
    e.stopPropagation();
    triggerSparklesAtElement(e.currentTarget as HTMLElement, 'remove');

    // Finalize any previously pending delete immediately
    if (pendingItemRef.current) {
      finalizeDelete(pendingItemRef.current.id);
    }

    pendingItemRef.current = item;
    setPendingDeletedItem(item);
    setUndoCountdown(5);

    // Optimistically remove from state
    setItems((prev) => prev.filter((i) => i.id !== item.id));

    if (deleteTimerRef.current) clearTimeout(deleteTimerRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);

    countdownIntervalRef.current = setInterval(() => {
      setUndoCountdown((c) => {
        if (c <= 1) {
          if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);
          return 0;
        }
        return c - 1;
      });
    }, 1000);

    deleteTimerRef.current = setTimeout(() => {
      finalizeDelete(item.id);
      pendingItemRef.current = null;
      setPendingDeletedItem(null);
    }, 5000);
  };

  const finalizeDelete = async (id: number) => {
    try {
      await fetch('/api/inventory', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
    } catch (err) {
      console.error('Failed to permanently delete item', err);
    }
  };

  const handleUndoDelete = () => {
    if (deleteTimerRef.current) clearTimeout(deleteTimerRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);

    if (pendingDeletedItem) {
      setItems((prev) => [pendingDeletedItem, ...prev]);
      triggerSparkles(window.innerWidth / 2, window.innerHeight - 80, 'celebrate');
    }

    pendingItemRef.current = null;
    setPendingDeletedItem(null);
  };

  const handleQuickAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = newItemName.trim();
    if (!name || isSubmittingNew) return;

    setIsSubmittingNew(true);
    try {
      const res = await fetch('/api/inventory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          category: newItemCategory,
          quantity: newItemQty,
        }),
      });
      const data = await res.json();
      if (res.ok && data.item) {
        setItems((prev) => [data.item, ...prev]);
        setNewItemName('');
        setShowAddModal(false);
        triggerSparkles(window.innerWidth / 2, window.innerHeight / 3, 'add');
      }
    } catch (err) {
      console.error('Failed to add inventory item', err);
    } finally {
      setIsSubmittingNew(false);
    }
  };

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.English;

  const getProduceEmoji = (name: string) => getProduceStyle(name).icon;

  if (loading) {
    return (
      <div className="inventory-loading">
        <div className="spinner"></div>
        <p>{t.loadingInventory}</p>
      </div>
    );
  }

  return (
    <div className="inventory-container">
      <header className="dashboard-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h1 className="page-title">{t.inventoryTitle}</h1>
          <p className="page-subtitle">{t.inventorySub}</p>
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <button
            type="button"
            className="btn-primary"
            onClick={(e) => {
              triggerSparklesAtElement(e.currentTarget, 'open');
              setShowAddModal(true);
            }}
            style={{ minHeight: '40px' }}
          >
            ✨ {t.quickAddItem || (language === 'Tamil' ? 'பொருள் சேர்' : 'Add Item')}
          </button>
          <a href="/upload" className="btn-secondary" style={{ minHeight: '40px' }}>
            📷 {t.scanItems}
          </a>
        </div>
      </header>

      {/* Quick Add Modal */}
      {showAddModal && (
        <div className="planner-recipe-modal-backdrop" onClick={() => setShowAddModal(false)}>
          <div
            className="glass-pane"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '14px',
              padding: '22px',
              maxWidth: '420px',
              width: '92%',
              boxShadow: '0 16px 40px rgba(0,0,0,0.25)',
              margin: 'auto',
              border: '1.5px solid rgba(45, 110, 119, 0.28)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3 style={{ margin: 0, color: 'var(--primary-teal)', fontSize: '1.15rem' }}>
                ✨ {t.addItemTitle || (language === 'Tamil' ? 'புதிய பொருள் சேர்க்க' : 'Add Fridge Item')}
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                style={{ background: 'transparent', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#666' }}
              >
                ✕
              </button>
            </div>
            <form onSubmit={handleQuickAdd} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px', color: 'var(--text-main)' }}>
                  {language === 'Tamil' ? 'பொருளின் பெயர்' : 'Item Name'}
                </label>
                <input
                  id="new-inventory-item-input"
                  type="text"
                  required
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder={t.itemNamePlaceholder || (language === 'Tamil' ? 'எ.கா. தக்காளி, கத்தரிக்காய்' : 'e.g. Tomato, Brinjal')}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '0.95rem' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ flex: 1 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px', color: 'var(--text-main)' }}>
                    {language === 'Tamil' ? 'பிரிவு' : 'Category'}
                  </label>
                  <select
                    value={newItemCategory}
                    onChange={(e) => setNewItemCategory(e.target.value)}
                    style={{ width: '100%', padding: '9px 10px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '0.9rem' }}
                  >
                    <option value="Produce">{language === 'Tamil' ? 'காய்கறி/பழங்கள்' : 'Produce'}</option>
                    <option value="Dairy">{language === 'Tamil' ? 'பால் பொருட்கள்' : 'Dairy'}</option>
                    <option value="Meat">{language === 'Tamil' ? 'இறைச்சி' : 'Meat'}</option>
                    <option value="Pantry">{language === 'Tamil' ? 'மளிகைப் பொருட்கள்' : 'Pantry'}</option>
                    <option value="Other">{language === 'Tamil' ? 'மற்றவை' : 'Other'}</option>
                  </select>
                </div>
                <div style={{ width: '90px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px', color: 'var(--text-main)' }}>
                    {t.qty || (language === 'Tamil' ? 'அளவு' : 'Qty')}
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={newItemQty}
                    onChange={(e) => setNewItemQty(Math.max(1, parseInt(e.target.value) || 1))}
                    style={{ width: '100%', padding: '9px 10px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '8px' }}>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  style={{ padding: '8px 14px', borderRadius: '8px', border: '1px solid #ccc', background: '#f5f5f5', cursor: 'pointer' }}
                >
                  {language === 'Tamil' ? 'ரத்து' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingNew}
                  className="btn-primary"
                  style={{ minHeight: '38px', padding: '0 18px' }}
                >
                  ✨ {isSubmittingNew ? '...' : (language === 'Tamil' ? 'சேர்க்க' : 'Add Item')}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {items.length === 0 ? (
        <div className="empty-state glass-pane">
          <div className="card-icon">🫙</div>
          <h2>{t.emptyInventoryTitle}</h2>
          <p>{t.emptyInventorySub}</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '16px', justifyContent: 'center' }}>
            <button
              type="button"
              className="btn-primary"
              onClick={() => setShowAddModal(true)}
            >
              ✨ {t.quickAddItem || 'Add Item'}
            </button>
            <a href="/upload" className="btn-secondary">{t.scanItems}</a>
          </div>
        </div>
      ) : (
        <div className="inventory-grid">
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`inventory-item glass-pane ${isInventoryItemExpired(item.expirationDate) ? 'expired' : ''} ${isInventoryItemExpiringSoon(item.expirationDate) ? 'expiring-soon' : ''}`}
            >
              <div className="item-header">
                <span className="item-category">{language === 'Tamil' ? toTamilCategory(item.category) : item.category}</span>
                <button 
                  className="delete-btn" 
                  onClick={(e) => handleDelete(item, e)}
                  title={t.removeFromInventory}
                >
                  ✕
                </button>
              </div>

              <div className="item-main-row">
                <div className="item-icon-badge" aria-hidden="true">{getProduceEmoji(item.name)}</div>
                <h3 className="item-name">{formatItemName(item.name, language)}</h3>
              </div>

              <div className="item-details">
                <span className="item-quantity">{t.qty}: {item.quantity}</span>
                {item.expirationDate && (
                  <span className="item-expiry">
                    {t.exp}: {item.expirationDate}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 5-Second Undo Toast Banner (Heuristic #3 - User Control) */}
      {pendingDeletedItem && (
        <div className="undo-toast-banner" role="status" aria-live="polite">
          <div className="undo-toast-content">
            <span className="undo-toast-text">
              🗑️ {formatItemName(pendingDeletedItem.name, language)} {t.itemRemoved || (language === 'Tamil' ? 'நீக்கப்பட்டது' : 'removed')}
            </span>
            <button 
              type="button" 
              className="undo-toast-btn"
              onClick={handleUndoDelete}
            >
              ↩️ {t.undo || (language === 'Tamil' ? 'செயல்தவிர்' : 'Undo')} ({undoCountdown}s)
            </button>
          </div>
          <div className="undo-progress-bar" />
        </div>
      )}
    </div>
  );
}
