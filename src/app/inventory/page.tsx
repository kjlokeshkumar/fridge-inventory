"use client";

import { useEffect, useState, useRef } from 'react';
import './inventory.css';
import { formatItemName, toTamilCategory, UI_TRANSLATIONS } from '@/lib/translations';
import { getIngredientImage } from '@/lib/produce-styles';
import { isInventoryItemExpired, isInventoryItemExpiringSoon } from '@/lib/inventory-dates';
import { triggerSparkles, triggerSparklesAtElement } from '@/lib/sparkles';
import IngredientInspectionModal from '@/components/IngredientInspectionModal';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  category: string;
  expirationDate: string | null;
  imageUrl: string | null;
}

interface SmartSuggestion {
  name: string;
  category?: string;
  hint?: string;
  sourashtraName?: string;
}

export default function InventoryPage() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('English');
  const [inspectingIngredient, setInspectingIngredient] = useState<string | null>(null);
  const [pendingDeletedItem, setPendingDeletedItem] = useState<InventoryItem | null>(null);
  const [pendingClearedItems, setPendingClearedItems] = useState<InventoryItem[] | null>(null);
  const [undoCountdown, setUndoCountdown] = useState(5);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [isClearingAll, setIsClearingAll] = useState(false);
  const [newItemName, setNewItemName] = useState('');
  const [newItemCategory, setNewItemCategory] = useState('Produce');
  const [newItemQty, setNewItemQty] = useState<string>('1');
  const [isSubmittingNew, setIsSubmittingNew] = useState(false);
  const [suggestions, setSuggestions] = useState<SmartSuggestion[]>([]);

  const deleteTimerRef = useRef<NodeJS.Timeout | null>(null);
  const countdownIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pendingItemRef = useRef<InventoryItem | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('appLanguage') || 'English';
    setLanguage(stored);

    try {
      const storedSug = localStorage.getItem('pendingFridgeSuggestions');
      if (storedSug) {
        const parsed = JSON.parse(storedSug);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSuggestions(parsed);
        }
      }
    } catch {}

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
        if (showClearModal) {
          setShowClearModal(false);
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
  }, [showAddModal, showClearModal]);

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
  const handleDelete = (item: InventoryItem, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (e?.currentTarget) {
      triggerSparklesAtElement(e.currentTarget as HTMLElement, 'remove');
    }

    if (pendingItemRef.current) {
      finalizeDelete(pendingItemRef.current.id);
    }

    pendingItemRef.current = item;
    setPendingDeletedItem(item);
    setUndoCountdown(5);

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

  const handleConfirmClearInventory = async () => {
    if (items.length === 0 || isClearingAll) return;
    setIsClearingAll(true);
    try {
      const backupItems = [...items];
      setPendingClearedItems(backupItems);
      setPendingDeletedItem(null);
      setUndoCountdown(5);
      setItems([]);
      setShowClearModal(false);

      await fetch('/api/inventory', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ clearAll: true }),
      });

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
        setPendingClearedItems(null);
      }, 5000);
    } catch (err) {
      console.error('Failed to clear inventory', err);
    } finally {
      setIsClearingAll(false);
    }
  };

  const handleUndoClearAll = async () => {
    if (deleteTimerRef.current) clearTimeout(deleteTimerRef.current);
    if (countdownIntervalRef.current) clearInterval(countdownIntervalRef.current);

    if (pendingClearedItems && pendingClearedItems.length > 0) {
      const restored = [...pendingClearedItems];
      setItems(restored);
      triggerSparkles(window.innerWidth / 2, window.innerHeight - 80, 'celebrate');

      try {
        await Promise.all(
          restored.map((item) =>
            fetch('/api/inventory', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: item.name,
                category: item.category,
                quantity: item.quantity,
                expirationDate: item.expirationDate,
              }),
            })
          )
        );
        fetchInventory();
      } catch (err) {
        console.error('Failed to restore cleared items', err);
      }
    }
    setPendingClearedItems(null);
  };

  const handleDecrementNewQty = () => {
    setNewItemQty((prev) => {
      const n = parseInt(prev, 10) || 1;
      return String(Math.max(1, n - 1));
    });
  };

  const handleIncrementNewQty = () => {
    setNewItemQty((prev) => {
      const n = parseInt(prev, 10) || 1;
      return String(n + 1);
    });
  };

  const handleQuickAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const name = newItemName.trim();
    if (!name || isSubmittingNew) return;

    const parsedQty = Math.max(1, parseInt(newItemQty, 10) || 1);
    setIsSubmittingNew(true);
    try {
      const res = await fetch('/api/inventory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          category: newItemCategory,
          quantity: parsedQty,
        }),
      });
      const data = await res.json();
      if (res.ok && data.item) {
        setItems((prev) => [data.item, ...prev]);
        setNewItemName('');
        setNewItemQty('1');
        setShowAddModal(false);
        triggerSparkles(window.innerWidth / 2, window.innerHeight / 3, 'add');
      }
    } catch (err) {
      console.error('Failed to add inventory item', err);
    } finally {
      setIsSubmittingNew(false);
    }
  };

  const handleUpdateItemQuantity = async (item: InventoryItem, newQty: number, e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (newQty <= 0) {
      handleDelete(item, e);
      return;
    }

    setItems((prev) => prev.map((i) => (i.id === item.id ? { ...i, quantity: newQty } : i)));

    try {
      await fetch('/api/inventory', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item.id, quantity: newQty }),
      });
    } catch (err) {
      console.error('Failed to update quantity', err);
      fetchInventory();
    }
  };

  const handleAddSuggestedItem = async (suggestion: SmartSuggestion) => {
    try {
      const res = await fetch('/api/inventory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: suggestion.name,
          category: suggestion.category || 'Pantry',
          quantity: 1,
        }),
      });
      const data = await res.json();
      if (res.ok && data.item) {
        setItems((prev) => [data.item, ...prev]);
        triggerSparkles(window.innerWidth / 2, window.innerHeight / 3, 'add');

        const updatedSug = suggestions.filter((s) => s.name !== suggestion.name);
        setSuggestions(updatedSug);
        localStorage.setItem('pendingFridgeSuggestions', JSON.stringify(updatedSug));
      }
    } catch (err) {
      console.error('Failed to add suggested item', err);
    }
  };

  const handleDismissSuggestions = () => {
    setSuggestions([]);
    localStorage.removeItem('pendingFridgeSuggestions');
  };

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.English;

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
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          {items.length > 0 && (
            <button
              type="button"
              className="btn-secondary"
              onClick={() => setShowClearModal(true)}
              style={{
                minHeight: '40px',
                color: '#b91c1c',
                borderColor: 'rgba(185, 28, 28, 0.4)',
                background: 'rgba(254, 242, 242, 0.85)',
                fontWeight: 600,
              }}
              title={t.clearInventory || 'Clear Inventory'}
            >
              🗑️ {t.clearInventory || (language === 'Tamil' ? 'கையிருப்பை அழிக்க' : 'Clear Inventory')}
            </button>
          )}
          <button
            type="button"
            className="btn-primary"
            onClick={(e) => {
              triggerSparklesAtElement(e.currentTarget, 'open');
              setNewItemQty('1');
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

      {/* AI Smart Suggestions for Unlabeled Homemade Preps */}
      {suggestions.length > 0 && (
        <div
          className="unlabeled-suggestions-banner glass-pane"
          style={{
            background: 'linear-gradient(135deg, rgba(230, 245, 245, 0.95), rgba(254, 243, 199, 0.88))',
            border: '1.5px solid rgba(45, 110, 119, 0.35)',
            borderRadius: '12px',
            padding: '14px 18px',
            marginBottom: '20px',
            boxShadow: '0 4px 14px rgba(0,0,0,0.06)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
            <div>
              <h4 style={{ margin: 0, color: 'var(--primary-teal)', fontSize: '1rem', fontWeight: 700 }}>
                {t.unlabeledSuggestionsTitle || '✨ AI Suggestions for Unlabeled Items'}
              </h4>
              <p style={{ margin: '3px 0 0 0', fontSize: '0.85rem', color: '#4b5563' }}>
                {t.unlabeledSuggestionsDesc || 'We spotted unlabeled containers/vessels in your fridge. Tap to add any of these to your inventory:'}
              </p>
            </div>
            <button
              type="button"
              onClick={handleDismissSuggestions}
              style={{ background: 'transparent', border: 'none', color: '#6b7280', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 500 }}
            >
              ✕ {t.dismissSuggestions || 'Dismiss'}
            </button>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
            {suggestions.map((sug, idx) => (
              <button
                key={`${sug.name}-${idx}`}
                type="button"
                onClick={() => handleAddSuggestedItem(sug)}
                className="btn-secondary"
                style={{
                  padding: '7px 14px',
                  fontSize: '0.86rem',
                  borderRadius: '20px',
                  background: '#ffffff',
                  border: '1.5px solid var(--primary-teal)',
                  color: 'var(--primary-teal)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  fontWeight: 600,
                }}
              >
                <span>➕</span>
                <span>{formatItemName(sug.name, language)}</span>
                {sug.hint && <span style={{ fontSize: '0.75rem', opacity: 0.7, fontWeight: 400 }}>({sug.hint})</span>}
              </button>
            ))}
          </div>
        </div>
      )}

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
              border: '1.5px solid rgba(45, 110, 119, 0.28)',
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
                  placeholder={t.itemNamePlaceholder || (language === 'Tamil' ? 'எ.கா. தக்காளி, கத்தரிக்காய், இட்லி மாவு' : 'e.g. Tomato, Brinjal, Dosa Batter')}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '0.95rem' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
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
                <div style={{ width: '110px' }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '4px', color: 'var(--text-main)' }}>
                    {t.qty || (language === 'Tamil' ? 'அளவு' : 'Qty')}
                  </label>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      background: '#f9fafb',
                    }}
                  >
                    <button
                      type="button"
                      onClick={handleDecrementNewQty}
                      disabled={parseInt(newItemQty, 10) <= 1}
                      aria-label={t.decreaseQty || 'Decrease quantity'}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        width: '32px',
                        height: '38px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        cursor: parseInt(newItemQty, 10) <= 1 ? 'not-allowed' : 'pointer',
                        color: parseInt(newItemQty, 10) <= 1 ? '#9ca3af' : 'var(--primary-teal)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={newItemQty}
                      onFocus={(e) => e.target.select()}
                      onChange={(e) => {
                        const v = e.target.value;
                        if (v === '') {
                          setNewItemQty('');
                          return;
                        }
                        const n = parseInt(v, 10);
                        if (!isNaN(n) && n >= 0) setNewItemQty(String(n));
                      }}
                      onBlur={() => {
                        if (!newItemQty || parseInt(newItemQty, 10) < 1) {
                          setNewItemQty('1');
                        }
                      }}
                      style={{
                        width: '46px',
                        textAlign: 'center',
                        border: 'none',
                        background: '#ffffff',
                        height: '38px',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        padding: 0,
                      }}
                    />
                    <button
                      type="button"
                      onClick={handleIncrementNewQty}
                      aria-label={t.increaseQty || 'Increase quantity'}
                      style={{
                        border: 'none',
                        background: 'transparent',
                        width: '32px',
                        height: '38px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        color: 'var(--primary-teal)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      +
                    </button>
                  </div>
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
              onClick={() => {
                setNewItemQty('1');
                setShowAddModal(true);
              }}
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

              {(() => {
                const itemImg = item.imageUrl || getIngredientImage(item.name, item.category);
                return (
                  <div
                    className="item-main-row item-clickable-preview"
                    onClick={() => setInspectingIngredient(item.name)}
                    title={language === 'Tamil' ? 'பொருளின் புகைப்படம் & வழிகாட்டியைப் பார்க்க தட்டவும்' : 'Click to view authentic ingredient photo & guide'}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setInspectingIngredient(item.name);
                      }
                    }}
                  >
                    <div className="item-icon-badge" aria-hidden="true">
                      <img
                        src={itemImg || '/images/ingredients/standard-ingredient.svg'}
                        alt={item.name}
                        className="inventory-item-thumb"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/images/ingredients/standard-ingredient.svg';
                        }}
                      />
                    </div>
                    <h3 className="item-name">{formatItemName(item.name, language)}</h3>
                  </div>
                );
              })()}

              <div className="item-details" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
                <div className="item-qty-adjuster" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <span className="item-quantity" style={{ marginRight: '2px' }}>{t.qty}:</span>
                  <button
                    type="button"
                    onClick={(e) => handleUpdateItemQuantity(item, Math.max(0, item.quantity - 1), e)}
                    aria-label={t.decreaseQty || 'Decrease quantity'}
                    title={t.decreaseQty || 'Decrease quantity'}
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '6px',
                      border: '1px solid #d1d5db',
                      background: '#f9fafb',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#374151',
                    }}
                  >
                    −
                  </button>
                  <span style={{ minWidth: '18px', textAlign: 'center', fontWeight: 600, fontSize: '0.9rem' }}>
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => handleUpdateItemQuantity(item, item.quantity + 1, e)}
                    aria-label={t.increaseQty || 'Increase quantity'}
                    title={t.increaseQty || 'Increase quantity'}
                    style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '6px',
                      border: '1px solid #d1d5db',
                      background: '#f9fafb',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: '0.9rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary-teal)',
                    }}
                  >
                    +
                  </button>
                </div>
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

      {/* 5-Second Undo Banner for Clear All Inventory */}
      {pendingClearedItems && (
        <div className="undo-toast-banner" role="status" aria-live="polite">
          <div className="undo-toast-content">
            <span className="undo-toast-text">
              🗑️ {t.clearInventorySuccess || (language === 'Tamil' ? 'கையிருப்பு பொருட்கள் அனைத்தும் அழிக்கப்பட்டன' : 'All inventory items cleared')} ({pendingClearedItems.length})
            </span>
            <button 
              type="button" 
              className="undo-toast-btn"
              onClick={handleUndoClearAll}
            >
              ↩️ {t.undo || (language === 'Tamil' ? 'செயல்தவிர்' : 'Undo')} ({undoCountdown}s)
            </button>
          </div>
          <div className="undo-progress-bar" />
        </div>
      )}

      {/* Clear Inventory Confirmation Modal */}
      {showClearModal && (
        <div className="planner-recipe-modal-backdrop" onClick={() => !isClearingAll && setShowClearModal(false)}>
          <div
            className="glass-pane"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#ffffff',
              borderRadius: '14px',
              padding: '24px',
              maxWidth: '440px',
              width: '92%',
              boxShadow: '0 16px 40px rgba(0,0,0,0.25)',
              margin: 'auto',
              border: '1.5px solid rgba(185, 28, 28, 0.3)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.6rem' }}>⚠️</span>
              <h3 style={{ margin: 0, color: '#b91c1c', fontSize: '1.2rem' }}>
                {t.clearInventoryConfirmTitle || (language === 'Tamil' ? 'கையிருப்பை முழுமையாக அழிக்கவா?' : 'Clear All Inventory Items?')}
              </h3>
            </div>
            <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.5', margin: '0 0 20px 0' }}>
              {t.clearInventoryConfirmDesc || (language === 'Tamil' ? 'இது உங்கள் குளிர்சாதனப் பெட்டியில் உள்ள அனைத்து பொருட்களையும் நீக்கும். நீங்கள் புதிதாக தொடங்கலாம்.' : 'This will remove all items currently tracked in your fridge inventory. You can start fresh from the beginning.')}
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
              <button
                type="button"
                disabled={isClearingAll}
                onClick={() => setShowClearModal(false)}
                style={{ padding: '9px 16px', borderRadius: '8px', border: '1px solid #ccc', background: '#f5f5f5', cursor: 'pointer', fontWeight: 500 }}
              >
                {t.cancel || (language === 'Tamil' ? 'ரத்து' : 'Cancel')}
              </button>
              <button
                type="button"
                disabled={isClearingAll}
                onClick={handleConfirmClearInventory}
                style={{
                  padding: '9px 18px',
                  borderRadius: '8px',
                  border: 'none',
                  background: '#dc2626',
                  color: '#ffffff',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(220, 38, 38, 0.35)',
                }}
              >
                {isClearingAll ? '...' : (t.clearInventoryConfirmBtn || (language === 'Tamil' ? 'ஆம், அனைத்தையும் அழி' : 'Yes, Clear All'))}
              </button>
            </div>
          </div>
        </div>
      )}

      <IngredientInspectionModal
        isOpen={Boolean(inspectingIngredient)}
        onClose={() => setInspectingIngredient(null)}
        ingredientName={inspectingIngredient || ''}
        language={language}
      />
    </div>
  );
}
