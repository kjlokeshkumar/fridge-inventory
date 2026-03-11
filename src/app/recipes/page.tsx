"use client";

import { useEffect, useState } from 'react';
import './recipes.css';

interface IngredientCalories {
  name: string;
  weightGrams: number;
  calories: number;
}

interface Recipe {
  title: string;
  missingIngredients: string[];
  difficulty: string;
  steps: string[];
  totalCalories: number;
  ingredientsBreakdown: IngredientCalories[];
}

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/recipes');
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || 'Failed to fetch');
      
      if (data.recipes) {
        setRecipes(data.recipes);
      }
    } catch (e: unknown) {
      const err = e as Error;
      setError(err.message || 'Failed to craft recipes');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <div className="recipes-loading">
        <div className="spinner" style={{ width: '40px', height: '40px' }}></div>
        <p>Chef AI is crafting recipes from your inventory...</p>
      </div>
    );
  }

  return (
    <div className="recipes-container">
      <header className="dashboard-header flex-header">
        <div>
          <h1 className="page-title">AI Recipes</h1>
          <p className="page-subtitle">Meals based on what you already have</p>
        </div>
        <button className="btn-secondary" onClick={fetchRecipes}>
          ↻ Regenerate
        </button>
      </header>

      {error && <div className="error-message mb-24">{error}</div>}

      {recipes.length === 0 && !error ? (
        <div className="empty-state glass-pane">
          <div className="card-icon">🍳</div>
          <h2>Nothing to cook yet</h2>
          <p>Add more items to your inventory to get recipe suggestions.</p>
          <a href="/upload" className="btn-primary mt-16">Scan groceries</a>
        </div>
      ) : (
        <div className="recipes-grid">
          {recipes.map((recipe, idx) => (
            <div key={idx} className="recipe-card glass-pane">
              <div className="recipe-header">
                <h3>{recipe.title}</h3>
                <span className={`difficulty ${recipe.difficulty.toLowerCase()}`}>
                  {recipe.difficulty}
                </span>
              </div>
              
              <div className="recipe-section">
                <h4>Missing Ingredients:</h4>
                {recipe.missingIngredients.length > 0 ? (
                  <ul className="missing-list">
                    {recipe.missingIngredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-success">You have everything needed!</p>
                )}
              </div>

              <div className="recipe-section">
                <h4>Ingredients & Calories (approx. {recipe.totalCalories || 0} kcal):</h4>
                <div className="calorie-breakdown">
                  {recipe.ingredientsBreakdown?.length > 0 ? (
                    <ul className="calorie-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                      {recipe.ingredientsBreakdown.map((item, i) => (
                        <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <span>{item.name} <span style={{ opacity: 0.6, fontSize: '0.9em' }}>({item.weightGrams}g)</span></span>
                          <span style={{ fontWeight: 'bold' }}>{item.calories} kcal</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No calorie data available.</p>
                  )}
                </div>
              </div>

              <div className="recipe-section">
                <h4>Instructions:</h4>
                <ol className="steps-list">
                  {recipe.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
