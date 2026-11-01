"use client";

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { UI_TRANSLATIONS } from '@/lib/translations';

interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
  category: string | null;
  expirationDate: string | null;
}

function getProduceStyle(name: string): { icon: string; bg: string } {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('tomato')) return { icon: '🍅', bg: '#fcd3b6' };
  if (lowerName.includes('onion')) return { icon: '🧅', bg: '#f9c5d1' };
  if (lowerName.includes('spinach') || lowerName.includes('greens')) return { icon: '🥬', bg: '#c7e9c0' };
  if (lowerName.includes('pepper') || lowerName.includes('capsicum')) return { icon: '🫑', bg: '#fed99b' };
  if (lowerName.includes('paneer') || lowerName.includes('cheese')) return { icon: '🧀', bg: '#b2dfdb' };
  if (lowerName.includes('yogurt') || lowerName.includes('curd')) return { icon: '🥣', bg: '#bbdefb' };
  if (lowerName.includes('butter')) return { icon: '🧈', bg: '#fff59d' };
  if (lowerName.includes('garlic') || lowerName.includes('ginger') || lowerName.includes('paste')) return { icon: '🧄', bg: '#e0d2bc' };
  if (lowerName.includes('coriander') || lowerName.includes('mint')) return { icon: '🌿', bg: '#c8e6c9' };
  if (lowerName.includes('egg')) return { icon: '🥚', bg: '#ffecb3' };
  if (lowerName.includes('rice') || lowerName.includes('wheat') || lowerName.includes('flour')) return { icon: '🌾', bg: '#d7ccc8' };
  if (lowerName.includes('bean') || lowerName.includes('lentil') || lowerName.includes('dal')) return { icon: '🫘', bg: '#ffe0b2' };
  return { icon: '🥦', bg: '#dcedc8' };
}

export default function Home() {
  const [items, setItems] = useState<InventoryItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());
  const [language, setLanguage] = useState('English');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const storedLanguage = localStorage.getItem('appLanguage') || 'English';
    setLanguage(storedLanguage);

    const handleLanguageChange = (event: Event) => {
      setLanguage((event as CustomEvent<string>).detail);
    };
    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  useEffect(() => {
    let active = true;

    const fetchInventory = async () => {
      setLoading(true);
      setLoadError(false);
      try {
        const response = await fetch(`/api/inventory?lang=${encodeURIComponent(language)}`);
        if (!response.ok) throw new Error(`Inventory request failed (${response.status}).`);
        const data = await response.json();
        if (active) {
          setItems(Array.isArray(data.items) ? data.items : []);
        }
      } catch {
        if (active) {
          setItems([]);
          setLoadError(true);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    void fetchInventory();
    const handleAuthChange = () => void fetchInventory();
    window.addEventListener('userAuthChange', handleAuthChange);
    return () => {
      active = false;
      window.removeEventListener('userAuthChange', handleAuthChange);
    };
  }, [language]);

  const toggleCheck = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCheckedItems(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const updateQuantity = async (id: number, delta: number, e: React.MouseEvent) => {
    e.stopPropagation();
    const item = items.find(i => i.id === id);
    if (!item) return;
    const newQty = Math.max(0, item.quantity + delta);
    setItems(prev => prev.map(i => i.id === id ? { ...i, quantity: newQty } : i));

    try {
      await fetch('/api/inventory', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, quantity: newQty })
      });
    } catch (err) {
      console.error('Failed to update quantity', err);
    }
  };

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.English;

  const visibleGroups = useMemo(() => {
    const query = search.trim().toLowerCase();
    const filtered = items.filter((item) => {
      if (!query) return true;
      const name = item.name.toLowerCase();
      const category = (item.category || '').toLowerCase();
      return name.includes(query) || category.includes(query);
    });

    const groups = new Map<string, InventoryItem[]>();
    for (const item of filtered) {
      const category = (item.category && item.category.trim()) || t.categoryOther;
      const existing = groups.get(category);
      if (existing) {
        existing.push(item);
      } else {
        groups.set(category, [item]);
      }
    }

    return [...groups.entries()];
  }, [items, search, t.categoryOther]);

  return (
    <div className={styles.pageShell}>
      <header className={styles.appHeader}>
        <div className={styles.brandRow}>
          <div className={styles.avatar} aria-hidden="true">👨‍🍳</div>
          <span className={styles.brandName}>Sourashtra Chef</span>
        </div>
        <button
          type="button"
          className={styles.menuDotsButton}
          onClick={() => window.dispatchEvent(new Event('openAuthModal'))}
          title="Options / Account"
          aria-label="Account Options"
        >
          ⋮
        </button>
      </header>

      <main className={styles.content}>
        <div className={styles.titleRow}>
          <h1 className={styles.title}>{t.inventoryTitle}</h1>
          <Link className={styles.scanButton} href="/upload">
            {t.homeScanTitle || 'Scan Receipt or Photo'}
          </Link>
        </div>

        <label className={styles.searchBox}>
          <span className={styles.searchIcon} aria-hidden="true">🔍</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search inventory"
            placeholder="Search"
          />
        </label>

        {loading ? (
          <p className={styles.statusMessage}>{t.loadingInventory}</p>
        ) : loadError ? (
          <p className={styles.statusMessage} role="alert">Unable to load your inventory. Please try again.</p>
        ) : visibleGroups.length === 0 ? (
          <div className={styles.emptyState}>
            <p>{items.length === 0 ? t.emptyInventorySub : 'No items match your search.'}</p>
            {items.length === 0 && <Link href="/upload">{t.scanItems}</Link>}
          </div>
        ) : (
          <div className={styles.inventoryGroups}>
            {visibleGroups.map(([category, groupItems]) => (
              <section key={category} className={styles.groupSection}>
                <div className={styles.inventoryTableCard}>
                  <div className={styles.groupBanner}>
                    <h2>{category}</h2>
                    <span className={styles.groupCountTag}>{groupItems.length} items</span>
                  </div>
                  
                  <div className={styles.tableHeaderRow} aria-hidden="true">
                    <span className={styles.thCheck}>✓</span>
                    <span className={styles.thItem}>Item</span>
                    <span className={styles.thCategory}>Category</span>
                    <span className={styles.thStatus}>Qty / Status</span>
                  </div>

                  <div className={styles.groupTable} role="table" aria-label={`${category} Inventory Table`}>
                    {groupItems.map((item) => {
                      const style = getProduceStyle(item.name);
                      const isChecked = checkedItems.has(item.id);
                      return (
                        <div key={item.id} className={`${styles.inventoryRow} ${isChecked ? styles.rowChecked : ''}`} role="row">
                          <div
                            className={styles.checkColumn}
                            onClick={(e) => toggleCheck(item.id, e)}
                            role="cell"
                          >
                            <span
                              className={`${styles.checkBox} ${isChecked ? styles.checked : ''}`}
                              aria-label={`Select ${item.name}`}
                            />
                          </div>

                          <div className={styles.itemInfoCol} role="cell">
                            <div
                              className={styles.itemBadge}
                              style={{ backgroundColor: style.bg }}
                              aria-hidden="true"
                            >
                              {style.icon}
                            </div>
                            <span className={styles.itemName}>{item.name}</span>
                          </div>

                          <div className={styles.categoryCol} role="cell">
                            <span className={styles.categoryPill}>{category}</span>
                          </div>

                          <div className={styles.itemActionArea} role="cell">
                            {item.expirationDate ? (
                              <span className={styles.expiryPill}>{item.expirationDate}</span>
                            ) : (
                              <div className={styles.quantityBlock}>
                                <button
                                  type="button"
                                  className={styles.qtyButton}
                                  onClick={(e) => updateQuantity(item.id, 1, e)}
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                                <span className={styles.qtyValue}>{item.quantity}</span>
                                <button
                                  type="button"
                                  className={styles.qtyButton}
                                  onClick={(e) => updateQuantity(item.id, -1, e)}
                                  aria-label="Decrease quantity"
                                >
                                  −
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            ))}
          </div>
        )}

        <div className={styles.floatingCtaContainer}>
          <Link href="/recipes" className={styles.floatingRecipeButton}>
            Suggested Recipes
          </Link>
        </div>
      </main>
    </div>
  );
}
