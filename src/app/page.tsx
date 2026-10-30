"use client";

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { UI_TRANSLATIONS } from '@/lib/translations';

export default function Home() {
  const [inventoryCount, setInventoryCount] = useState<number | null>(null);
  const [language, setLanguage] = useState('English');

  const fetchInventoryCount = useCallback(async () => {
    try {
      const response = await fetch('/api/inventory');
      if (!response.ok) {
        setInventoryCount(null);
        return;
      }

      const data = await response.json();
      setInventoryCount(Array.isArray(data.items) ? data.items.length : null);
    } catch (error) {
      console.error('Failed to fetch home inventory count:', error);
      setInventoryCount(null);
    }
  }, []);

  useEffect(() => {
    setLanguage(localStorage.getItem('appLanguage') || 'English');
    void fetchInventoryCount();
    const handleLanguageChange = (event: Event) => {
      setLanguage((event as CustomEvent<string>).detail);
    };
    window.addEventListener('userAuthChange', fetchInventoryCount);
    window.addEventListener('languageChange', handleLanguageChange);
    return () => {
      window.removeEventListener('userAuthChange', fetchInventoryCount);
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, [fetchInventoryCount]);

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.English;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1 className="page-title">{t.homeTitle}</h1>
          <p className="page-subtitle">{t.homeSubtitle}</p>
        </div>
      </header>

      <div className="grid-cards">
        <Link href="/upload" className="glass-pane action-card highlight-card">
          <div className="card-icon">📸</div>
          <h3>{t.homeScanTitle}</h3>
          <p>{t.homeScanDescription}</p>
        </Link>
        
        <Link href="/inventory" className="glass-pane action-card">
          <div className="card-icon">🍎</div>
          <h3>{t.navInventory}</h3>
          <p>{t.homeInventoryDescription}</p>
          <div className="card-stats">
            {inventoryCount === null
              ? `— ${t.itemsCountLabel}`
              : `${inventoryCount} ${inventoryCount === 1 ? t.itemCountLabel : t.itemsCountLabel}`}
          </div>
        </Link>

        <Link href="/recipes" className="glass-pane action-card">
          <div className="card-icon">👨‍🍳</div>
          <h3>{t.navRecipes}</h3>
          <p>{t.homeRecipesDescription}</p>
        </Link>

        <Link href="/shopping-list" className="glass-pane action-card">
          <div className="card-icon">🛒</div>
          <h3>{t.shoppingTitle}</h3>
          <p>{t.homeShoppingDescription}</p>
        </Link>
      </div>
    </div>
  );
}
