"use client";

import { useEffect, useState } from 'react';
import './shopping.css';

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

  const fetchList = async () => {
    try {
      const res = await fetch('/api/shopping-list');
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

  useEffect(() => {
    fetchList();
  }, []);

  if (loading) {
    return (
      <div className="center-container">
        <div className="spinner"></div>
        <p>Checking your pantry status...</p>
      </div>
    );
  }

  return (
    <div className="shopping-container">
      <header className="dashboard-header">
        <h1 className="page-title">Shopping List</h1>
        <p className="page-subtitle">Automatically generated from depleted or expired items</p>
      </header>

      {items.length === 0 ? (
        <div className="empty-state glass-pane success-state">
          <div className="card-icon">✅</div>
          <h2>You're all stocked up!</h2>
          <p>No depleted or expired items found in your inventory.</p>
        </div>
      ) : (
        <div className="shopping-list glass-pane">
          <div className="list-header">
            <span>Item</span>
            <span>Reason</span>
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
                    <span className="reason-depleted">Depleted (0 left)</span>
                  ) : (
                    <span className="reason-expired">Expired ({item.expirationDate})</span>
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
