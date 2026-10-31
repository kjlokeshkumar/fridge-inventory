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

function getFoodIcon(name: string): string {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('tomato')) return '🍅';
  if (lowerName.includes('onion')) return '🧅';
  if (lowerName.includes('spinach') || lowerName.includes('greens')) return '🥬';
  if (lowerName.includes('pepper') || lowerName.includes('capsicum')) return '🫑';
  if (lowerName.includes('paneer') || lowerName.includes('cheese')) return '🧀';
  if (lowerName.includes('yogurt') || lowerName.includes('curd')) return '🥣';
  if (lowerName.includes('butter')) return '🧈';
  if (lowerName.includes('garlic')) return '🧄';
  if (lowerName.includes('coriander') || lowerName.includes('mint')) return '🌿';
  if (lowerName.includes('egg')) return '🥚';
  if (lowerName.includes('rice') || lowerName.includes('wheat') || lowerName.includes('flour')) return '🌾';
  if (lowerName.includes('bean') || lowerName.includes('lentil') || lowerName.includes('dal')) return '🫘';
  return '🥦';
}

export default function Home() {
  const [items, setItems] = useState<InventoryItem[]>([]);
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
        if (active) setItems(Array.isArray(data.items) ? data.items : []);
      } catch (error) {
        console.error('Failed to load home inventory:', error);
        if (active) setLoadError(true);
      } finally {
        if (active) setLoading(false);
      }
    };

    void fetchInventory();
    return () => {
      active = false;
    };
  }, [language]);

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.English;
  const visibleGroups = useMemo(() => {
    const filteredItems = items.filter((item) =>
      item.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()),
    );
    const groups = new Map<string, InventoryItem[]>();
    for (const item of filteredItems) {
      const category = item.category || t.categoryOther;
      groups.set(category, [...(groups.get(category) || []), item]);
    }
    return [...groups.entries()];
  }, [items, search, t.categoryOther]);

  return (
    <div className={styles.pageShell}>
      <div className={styles.phoneFrame}>
        <div className={styles.statusBar} aria-hidden="true">
          <span>Fridge Inventory</span>
          <span className={styles.statusIcons}>🥗</span>
        </div>

        <header className={styles.appHeader}>
          <div className={styles.brandRow}>
            <div className={styles.avatar} aria-hidden="true">👨‍🍳</div>
            <span className={styles.brandName}>Sourashtra Chef</span>
          </div>
        </header>

        <main className={styles.content}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{t.inventoryTitle}</h1>
            <Link className={styles.scanButton} href="/upload">
              <span className={styles.scanIcon} aria-hidden="true">📷</span>
              {t.homeScanTitle}
            </Link>
          </div>

          <label className={styles.searchBox}>
            <span className={styles.searchIcon} aria-hidden="true">⌕</span>
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
                  <h2>{category}</h2>
                  {groupItems.map((item) => (
                    <Link key={item.id} href="/inventory" className={styles.inventoryRow}>
                      <span className={styles.itemIcon} aria-hidden="true">{getFoodIcon(item.name)}</span>
                      <span className={styles.itemName}>{item.name}</span>
                      {item.expirationDate ? (
                        <span className={styles.expiryPill}>{item.expirationDate}</span>
                      ) : (
                        <span className={styles.quantityBlock}>
                          <span className={styles.qtyButton} aria-hidden="true">+</span>
                          <span className={styles.qtyValue}>{item.quantity}</span>
                          <span className={styles.qtyButton} aria-hidden="true">−</span>
                        </span>
                      )}
                    </Link>
                  ))}
                </section>
              ))}
            </div>
          )}

          <Link href="/recipes" className={styles.recipeButton}>{t.navRecipes}</Link>
        </main>
      </div>
    </div>
  );
}
