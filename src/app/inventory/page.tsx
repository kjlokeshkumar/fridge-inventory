"use client";

import { useEffect, useState } from 'react';
import './inventory.css';

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

  const fetchInventory = async () => {
    try {
      const res = await fetch('/api/inventory');
      const data = await res.json();
      if (data.items) {
        setItems(data.items);
      }
    } catch (err) {
      console.error('Failed to fetch inventory', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      const res = await fetch('/api/inventory', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      if (res.ok) {
        setItems(items.filter(item => item.id !== id));
      }
    } catch (err) {
      console.error('Failed to delete item', err);
    }
  };

  const isExpiringSoon = (dateStr: string | null) => {
    if (!dateStr) return false;
    const expDate = new Date(dateStr);
    const today = new Date();
    const diffTime = expDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays >= 0 && diffDays <= 3;
  };

  const isExpired = (dateStr: string | null) => {
    if (!dateStr) return false;
    const expDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0,0,0,0);
    return expDate < today;
  };

  if (loading) {
    return (
      <div className="inventory-loading">
        <div className="spinner"></div>
        <p>Loading your pantry...</p>
      </div>
    );
  }

  return (
    <div className="inventory-container">
      <header className="dashboard-header">
        <h1 className="page-title">Current Inventory</h1>
        <p className="page-subtitle">Track your food and reduce waste</p>
      </header>

      {items.length === 0 ? (
        <div className="empty-state glass-pane">
          <div className="card-icon">🫙</div>
          <h2>Your fridge is empty</h2>
          <p>Scan some items or upload a grocery receipt to get started.</p>
          <a href="/upload" className="btn-primary" style={{ marginTop: '16px' }}>Scan Items</a>
        </div>
      ) : (
        <div className="inventory-grid">
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`inventory-item glass-pane ${isExpired(item.expirationDate) ? 'expired' : ''} ${isExpiringSoon(item.expirationDate) ? 'expiring-soon' : ''}`}
            >
              <div className="item-header">
                <span className="item-category">{item.category}</span>
                <button 
                  className="delete-btn" 
                  onClick={() => handleDelete(item.id)}
                  title="Remove from inventory"
                >
                  ✕
                </button>
              </div>
              <h3 className="item-name">{item.name}</h3>
              <div className="item-details">
                <span className="item-quantity">Qty: {item.quantity}</span>
                {item.expirationDate && (
                  <span className="item-expiry">
                    Exp: {item.expirationDate}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
