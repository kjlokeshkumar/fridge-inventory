import Link from 'next/link';

export default function Home() {
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
          <div className="card-stats">0 Items</div>
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
