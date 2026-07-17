"use client";

import { useEffect, useState } from 'react';
import './shopping.css';
import { UI_TRANSLATIONS } from '@/lib/translations';

interface ShoppingItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  expirationDate: string | null;
}

export default function ShoppingListPage() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    const stored = localStorage.getItem('appLanguage') || 'English';
    setLanguage(stored);

    const handleLang = (e: Event) => {
      const newLang = (e as CustomEvent).detail;
      setLanguage(newLang);
    };
    window.addEventListener('languageChange', handleLang);
    return () => window.removeEventListener('languageChange', handleLang);
  }, []);

  useEffect(() => {
    fetchList();
  }, [language]);

  const fetchList = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/shopping-list?lang=${encodeURIComponent(language)}`);
      const data = await res.json();
      if (data.items) {
        setItems(data.items);
      }
    } catch (err) {
      console.error('Failed to fetch shopping list', err);
    } finally {
      setLoading(false);
    }
  };

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.English;

  if (loading) {
    return (
      <div className="center-container">
        <div className="spinner"></div>
        <p>{t.loadingShopping}</p>
      </div>
    );
  }

  return (
    <div className="shopping-container">
      <header className="dashboard-header">
        <h1 className="page-title">{t.shoppingTitle}</h1>
        <p className="page-subtitle">{t.shoppingSub}</p>
      </header>

      {items.length === 0 ? (
        <div className="empty-state glass-pane success-state">
          <div className="card-icon">✅</div>
          <h2>{t.allStockedTitle}</h2>
          <p>{t.allStockedSub}</p>
        </div>
      ) : (
        <div className="shopping-list glass-pane">
          <div className="list-header">
            <span>{t.item}</span>
            <span>{t.reason}</span>
          </div>
          <ul className="list-items">
            {items.map((item) => (
              <li key={item.id} className="list-row">
                <div className="item-info">
                  <span className="item-styled-name">{item.name}</span>
                  <span className="item-category-tag">{item.category}</span>
                </div>
                <div className="item-reason">
                  {item.quantity <= 0 ? (
                    <span className="reason-depleted">{t.depleted}</span>
                  ) : (
                    <span className="reason-expired">{t.expired} ({item.expirationDate})</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
