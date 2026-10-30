"use client";

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';
import './shopping.css';
import { toTamilCategory, toTamilDayName, toTamilItemName, UI_TRANSLATIONS } from '@/lib/translations';
import {
  calculateWeeklyShopping,
  type WeeklyShoppingDay
} from '@/lib/weekly-shopping';
import { readCurrentWeeklyPlan } from '@/lib/weekly-plan-storage';

interface InventoryItem {
  id: number;
  name: string;
  category: string;
  quantity: number;
  expirationDate: string | null;
}

interface ShoppingAlert {
  id: number;
  name: string;
  category: string;
  quantity: number;
  expirationDate: string | null;
}

function isAbortError(error: unknown): boolean {
  return (
    (error instanceof DOMException && error.name === 'AbortError') ||
    (error instanceof Error && /share canceled|share cancelled/i.test(error.message))
  );
}

async function copyTextToClipboard(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch (error) {
      console.warn('Modern clipboard API unavailable; trying the compatibility copy method:', error);
    }
  }

  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();

  try {
    if (!document.execCommand('copy')) {
      throw new Error('The browser did not allow copying to the clipboard.');
    }
  } finally {
    document.body.removeChild(textArea);
  }
}

function getCheckedItemsKey(plan: WeeklyShoppingDay[]): string {
  const signature = plan.map((day) => [
    day.isoDate || day.dayName,
    day.breakfast?.comboId || day.breakfast?.primaryRecipe?.title || '',
    day.lunch?.comboId || day.lunch?.primaryRecipe?.title || '',
    day.dinner?.comboId || day.dinner?.primaryRecipe?.title || ''
  ].join(':')).join('|');
  return `checkedWeeklyShoppingItemsV1:${signature || 'no-plan'}`;
}

function readCheckedItems(key: string): string[] {
  const stored = localStorage.getItem(key);
  if (!stored) return [];
  try {
    const parsed: unknown = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.every((item) => typeof item === 'string') ? parsed : [];
  } catch (error) {
    console.error('Unable to read checked shopping items:', error);
    return [];
  }
}

export default function ShoppingListPage() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [alerts, setAlerts] = useState<ShoppingAlert[]>([]);
  const [plan, setPlan] = useState<WeeklyShoppingDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [language, setLanguage] = useState('English');
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const fetchShoppingData = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const [inventoryResponse, alertsResponse] = await Promise.all([
        fetch('/api/inventory?lang=English'),
        fetch('/api/shopping-list?lang=English')
      ]);
      const [inventoryData, alertsData] = await Promise.all([
        inventoryResponse.json(),
        alertsResponse.json()
      ]);

      if (!inventoryResponse.ok) {
        throw new Error(inventoryData.error || 'Failed to load inventory');
      }
      if (!alertsResponse.ok) {
        throw new Error(alertsData.error || 'Failed to load inventory alerts');
      }
      setInventory(Array.isArray(inventoryData.items) ? inventoryData.items : []);
      setAlerts(Array.isArray(alertsData.items) ? alertsData.items : []);
    } catch (fetchError) {
      console.error('Failed to load shopping data:', fetchError);
      setError(UI_TRANSLATIONS[language]?.loadShoppingError || UI_TRANSLATIONS.English.loadShoppingError);
    } finally {
      setLoading(false);
    }
  }, [language]);

  useEffect(() => {
    setLanguage(localStorage.getItem('appLanguage') || 'English');
    const currentPlan = readCurrentWeeklyPlan();
    setPlan(currentPlan);
    setCheckedItems(readCheckedItems(getCheckedItemsKey(currentPlan)));

    const handleLanguageChange = (event: Event) => {
      setLanguage((event as CustomEvent<string>).detail);
    };
    const handlePlanChange = () => {
      const currentPlan = readCurrentWeeklyPlan();
      setPlan(currentPlan);
      setCheckedItems(readCheckedItems(getCheckedItemsKey(currentPlan)));
    };
    window.addEventListener('languageChange', handleLanguageChange);
    window.addEventListener('userAuthChange', fetchShoppingData);
    window.addEventListener('weeklyPlanChange', handlePlanChange);
    window.addEventListener('storage', handlePlanChange);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
      window.removeEventListener('userAuthChange', fetchShoppingData);
      window.removeEventListener('weeklyPlanChange', handlePlanChange);
      window.removeEventListener('storage', handlePlanChange);
    };
  }, [fetchShoppingData]);

  useEffect(() => {
    void fetchShoppingData();
  }, [fetchShoppingData]);

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.English;
  const analysis = useMemo(
    () => calculateWeeklyShopping(plan, inventory.filter((item) => item.quantity > 0).map((item) => item.name)),
    [plan, inventory]
  );
  const checkedSet = useMemo(() => new Set(checkedItems), [checkedItems]);
  const uncheckedItems = analysis.toPurchase.filter((item) => !checkedSet.has(item.item.toLowerCase()));
  const formatItem = (name: string) => language === 'Tamil' ? toTamilItemName(name) : name;
  const formatDay = (day: string) => language === 'Tamil' ? toTamilDayName(day) : day;

  const buildShareText = () => {
    if (uncheckedItems.length === 0) return '';
    return [
      `🛒 ${t.shareTitle}`,
      ...uncheckedItems.map((item) => `☐ ${formatItem(item.item)} (${t.forDays}: ${item.days})`)
    ].join('\n');
  };

  const handleShare = async () => {
    const text = buildShareText();
    if (!text) {
      setNotice(t.shoppingListEmpty);
      return;
    }
    setNotice('');
    if (Capacitor.isNativePlatform()) {
      try {
        await Share.share({
          title: t.shareTitle,
          text,
          dialogTitle: t.shareShoppingList
        });
        setNotice(t.shoppingListShared);
      } catch (shareError) {
        if (isAbortError(shareError)) return;
        console.error('Failed to open native shopping-list share sheet:', shareError);
        try {
          await copyTextToClipboard(text);
          setNotice(t.shoppingListCopied);
          setError('');
        } catch (copyError) {
          console.error('Failed to copy shopping list after native share failed:', copyError);
          setError(t.shareShoppingError);
        }
      }
      return;
    }
    if (!navigator.share) {
      await handleCopy();
      return;
    }
    try {
      await navigator.share({ title: t.shareTitle, text });
      setNotice(t.shoppingListShared);
    } catch (shareError) {
      if (!isAbortError(shareError)) {
        console.error('Failed to share shopping list:', shareError);
        try {
          await copyTextToClipboard(text);
          setNotice(t.shoppingListCopied);
          setError('');
        } catch (copyError) {
          console.error('Failed to copy shopping list after browser share failed:', copyError);
          setError(t.shareShoppingError);
        }
      }
    }
  };

  const handleCopy = async () => {
    const text = buildShareText();
    if (!text) {
      setNotice(t.shoppingListEmpty);
      return;
    }
    try {
      await copyTextToClipboard(text);
      setNotice(t.shoppingListCopied);
      setError('');
    } catch (copyError) {
      console.error('Failed to copy shopping list:', copyError);
      setError(t.copyShoppingError);
    }
  };

  const toggleItemChecked = (itemName: string) => {
    const key = itemName.toLowerCase();
    const updated = checkedSet.has(key)
      ? checkedItems.filter((item) => item !== key)
      : [...checkedItems, key];
    setCheckedItems(updated);
    localStorage.setItem(getCheckedItemsKey(plan), JSON.stringify(updated));
  };

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

      {error && (
        <div className="shopping-error" role="alert">
          <span>{error}</span>
          <button type="button" className="btn-secondary btn-sm" onClick={() => void fetchShoppingData()}>
            {t.retry}
          </button>
        </div>
      )}
      {notice && <p className="shopping-notice" role="status">{notice}</p>}

      <section className="shopping-section">
        <div className="shopping-section-heading">
          <div>
            <h2>{t.plannedItemsToBuy}</h2>
            <p className="selector-sub">{t.planShoppingDescription}</p>
          </div>
          {plan.length > 0 && (
            <div className="shopping-share-actions">
              <button type="button" className="btn-primary" onClick={() => void handleShare()}>
                {t.shareShoppingList}
              </button>
              <button type="button" className="btn-secondary" onClick={() => void handleCopy()}>
                {t.copyShoppingList}
              </button>
            </div>
          )}
        </div>

        {plan.length === 0 ? (
          <div className="shopping-empty glass-pane">
            <h3>{t.noWeeklyPlan}</h3>
            <p>{t.createWeeklyPlan}</p>
            <Link href="/recipes" className="btn-primary">{t.recipesTab}</Link>
          </div>
        ) : analysis.toPurchase.length === 0 ? (
          <div className="shopping-empty glass-pane">
            <p>{t.noPlannedItems}</p>
          </div>
        ) : (
          <ul className="plan-shopping-list">
            {analysis.toPurchase.map((item) => {
              const checked = checkedSet.has(item.item.toLowerCase());
              return (
                <li key={item.item} className={`plan-shopping-row ${checked ? 'checked' : ''}`}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleItemChecked(item.item)}
                    />
                    <span className="plan-shopping-name">{formatItem(item.item)}</span>
                  </label>
                  <span className="plan-shopping-days">
                    {t.forDays}: {item.days.split(', ').map(formatDay).join(', ')}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        {plan.length > 0 && analysis.pantryChecklist.length > 0 && (
          <div className="pantry-check-panel glass-pane">
            <h3>🫙 {t.checkPantryTitle}</h3>
            <p className="selector-sub">{t.checkPantryDescription}</p>
            <div className="ingredient-badges">
              {analysis.pantryChecklist.map((item) => (
                <span key={item} className="badge-pantry">
                  {formatItem(item)}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="shopping-section inventory-alerts-section">
        <div className="shopping-section-heading">
          <div>
            <h2>{t.inventoryAlerts}</h2>
            <p className="selector-sub">{t.inventoryAlertsDescription}</p>
          </div>
        </div>
        {alerts.length === 0 ? (
          <div className="shopping-empty glass-pane">
            <p>{t.noInventoryAlerts}</p>
          </div>
        ) : (
          <div className="shopping-list glass-pane">
            <div className="list-header">
              <span>{t.item}</span>
              <span>{t.reason}</span>
            </div>
            <ul className="list-items">
              {alerts.map((item) => (
                <li key={item.id} className="list-row">
                  <div className="item-info">
                    <span className="item-styled-name">{formatItem(item.name)}</span>
                    <span className="item-category-tag">{language === 'Tamil' ? toTamilCategory(item.category) : item.category}</span>
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
      </section>
    </div>
  );
}
