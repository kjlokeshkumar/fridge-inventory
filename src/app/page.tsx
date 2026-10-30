"use client";

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [inventoryCount, setInventoryCount] = useState<number | null>(null);

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
    void fetchInventoryCount();
    window.addEventListener('userAuthChange', fetchInventoryCount);
    return () => window.removeEventListener('userAuthChange', fetchInventoryCount);
  }, [fetchInventoryCount]);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <h1 className="page-title">Fridge Dashboard</h1>
          <p className="page-subtitle">Your AI domestic inventory manager</p>
        </div>
      </header>

      <div className="grid-cards">
        <Link href="/upload" className="glass-pane action-card highlight-card">
          <div className="card-icon">📸</div>
          <h3>Scan Fridge</h3>
          <p>Take a picture of your fridge or pantry to automatically analyze inventory</p>
        </Link>
        
        <Link href="/inventory" className="glass-pane action-card">
          <div className="card-icon">🍎</div>
          <h3>Inventory</h3>
          <p>View currently tracked food items and expiration dates</p>
          <div className="card-stats">
            {inventoryCount === null
              ? '— Items'
              : `${inventoryCount} ${inventoryCount === 1 ? 'Item' : 'Items'}`}
          </div>
        </Link>

        <Link href="/recipes" className="glass-pane action-card">
          <div className="card-icon">👨‍🍳</div>
          <h3>Recipes</h3>
          <p>Generate meals based on what you already have</p>
        </Link>

        <Link href="/shopping-list" className="glass-pane action-card">
          <div className="card-icon">🛒</div>
          <h3>Shopping List</h3>
          <p>Items running low and suggested restocks</p>
        </Link>
      </div>
    </div>
  );
}
