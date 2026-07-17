"use client";

import { useEffect, useState } from 'react';
import './recipes.css';
import { UI_TRANSLATIONS } from '@/lib/translations';

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
    fetchRecipes();
  }, [language]);

  const fetchRecipes = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/recipes?lang=${encodeURIComponent(language)}`);
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

  const getDifficultyClass = (diff: string) => {
    const d = diff.toLowerCase();
    if (d.includes('easy') || d.includes('suluva') || d.includes('எளிது') || d.includes('சுலபம்') || d.includes('आसान') || d.includes('సులభం') || d.includes('ಸುಲಭ') || d.includes('સરળ') || d.includes('सोपे') || d.includes('সহজ') || d.includes('എളുപ്പം')) return 'easy';
    if (d.includes('hard') || d.includes('kastam') || d.includes('கடினம்') || d.includes('कठिन') || d.includes('కష్టం') || d.includes('ಕಷ್ಟ') || d.includes('મુશ્કેલ') || d.includes('कठीण') || d.includes('কঠিন') || d.includes('ബുദ്ധിമുട്ടാണ്')) return 'hard';
    return 'medium'; // default
  };

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.English;

  if (loading) {
    return (
      <div className="recipes-loading">
        <div className="spinner" style={{ width: '40px', height: '40px' }}></div>
        <p>{t.loadingRecipes}</p>
      </div>
    );
  }

  return (
    <div className="recipes-container">
      <header className="dashboard-header flex-header">
        <div>
          <h1 className="page-title">{t.recipesTitle}</h1>
          <p className="page-subtitle">{t.recipesSub}</p>
        </div>
        <button className="btn-secondary" onClick={fetchRecipes}>
          {t.regenerate}
        </button>
      </header>

      {error && <div className="error-message mb-24">{error}</div>}

      {recipes.length === 0 && !error ? (
        <div className="empty-state glass-pane">
          <div className="card-icon">🍳</div>
          <h2>{t.noRecipesTitle}</h2>
          <p>{t.noRecipesSub}</p>
          <a href="/upload" className="btn-primary mt-16">{t.scanGroceries}</a>
        </div>
      ) : (
        <div className="recipes-grid">
          {recipes.map((recipe, idx) => (
            <div key={idx} className="recipe-card glass-pane">
              <div className="recipe-header">
                <h3>{recipe.title}</h3>
                <span className={`difficulty ${getDifficultyClass(recipe.difficulty)}`}>
                  {recipe.difficulty}
                </span>
              </div>
              
              <div className="recipe-section">
                <h4>{t.missingIngredients}</h4>
                {recipe.missingIngredients.length > 0 ? (
                  <ul className="missing-list">
                    {recipe.missingIngredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-success">{t.haveEverything}</p>
                )}
              </div>

              <div className="recipe-section">
                <h4>Ingredients & Calories ({t.approx} {recipe.totalCalories || 0} {t.kcal}):</h4>
                <div className="calorie-breakdown">
                  {recipe.ingredientsBreakdown?.length > 0 ? (
                    <ul className="calorie-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                      {recipe.ingredientsBreakdown.map((item, i) => (
                        <li key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                          <span>{item.name} <span style={{ opacity: 0.6, fontSize: '0.9em' }}>({item.weightGrams}g)</span></span>
                          <span style={{ fontWeight: 'bold' }}>{item.calories} {t.kcal}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No calorie data available.</p>
                  )}
                </div>
              </div>

              <div className="recipe-section">
                <h4>{t.instructions}</h4>
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
