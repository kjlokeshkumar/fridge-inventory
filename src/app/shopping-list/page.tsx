"use client";

import { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Capacitor } from '@capacitor/core';
import { Share } from '@capacitor/share';
import './shopping.css';
import { toTamilCategory, toTamilItemName, UI_TRANSLATIONS } from '@/lib/translations';
import {
  calculateWeeklyShopping,
  formatWeeklyShoppingShareText,
  groupPantryItems,
  type WeeklyShoppingDay
} from '@/lib/weekly-shopping';
import { readCurrentWeeklyPlan } from '@/lib/weekly-plan-storage';
import { triggerSparklesAtElement } from '@/lib/sparkles';
import { getIngredientImage } from '@/lib/produce-styles';
import IngredientInspectionModal from '@/components/IngredientInspectionModal';

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
  const [plan, setPlan] = useState<WeeklyShoppingDay[]>(() => {
    if (typeof window !== 'undefined') {
      return readCurrentWeeklyPlan();
    }
    return [];
  });
  const [checkedItems, setCheckedItems] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const currentPlan = readCurrentWeeklyPlan();
      return readCheckedItems(getCheckedItemsKey(currentPlan));
    }
    return [];
  });
  const [checkedPantryItems, setCheckedPantryItems] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('checkedPantryItemsV1');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.every((x) => typeof x === 'string')) {
            return parsed;
          }
        } catch {
          // ignore parsing error
        }
      }
    }
    return [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [language, setLanguage] = useState('English');
  const [inspectingIngredient, setInspectingIngredient] = useState<string | null>(null);

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

  const buildShareText = () => {
    return formatWeeklyShoppingShareText(
      t.shareTitle,
      uncheckedItems.map((item) => ({ ...item, item: formatItem(item.item) })),
      t.quantityNotSpecified
    );
  };

  const handleShare = async () => {
    const text = buildShareText();
    if (!text) {
      setNotice(t.shoppingListEmpty);
      return;
    }
    setNotice('');
    if (
      typeof window !== 'undefined' &&
      (window as unknown as { AndroidShareBridge?: { shareText?: (title: string, text: string) => boolean } })
        .AndroidShareBridge?.shareText
    ) {
      try {
        const ok = (window as unknown as { AndroidShareBridge: { shareText: (title: string, text: string) => boolean } }).AndroidShareBridge.shareText(t.shareTitle, text);
        if (ok) {
          setNotice(t.shoppingListShared);
          return;
        }
      } catch (_) {}
    }
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

  const toggleItemChecked = (itemName: string, e?: React.ChangeEvent) => {
    const key = itemName.toLowerCase();
    const willCheck = !checkedSet.has(key);
    if (willCheck && e) {
      triggerSparklesAtElement(e.currentTarget as HTMLElement, 'celebrate');
    }
    const updated = willCheck
      ? [...checkedItems, key]
      : checkedItems.filter((item) => item !== key);
    setCheckedItems(updated);
    localStorage.setItem(getCheckedItemsKey(plan), JSON.stringify(updated));
  };

  const checkedPantrySet = useMemo(() => new Set(checkedPantryItems), [checkedPantryItems]);
  const pantryCategories = useMemo(
    () => groupPantryItems(analysis.pantryChecklist),
    [analysis.pantryChecklist]
  );
  const totalPantryCount = analysis.pantryChecklist.length;
  const inStockPantryCount = analysis.pantryChecklist.filter((item) =>
    checkedPantrySet.has(item.toLowerCase())
  ).length;

  const togglePantryChecked = (itemName: string, e?: React.SyntheticEvent) => {
    const key = itemName.toLowerCase();
    const willCheck = !checkedPantrySet.has(key);
    if (willCheck && e?.currentTarget) {
      triggerSparklesAtElement(e.currentTarget as HTMLElement, 'celebrate');
    }
    const updated = willCheck
      ? [...checkedPantryItems, key]
      : checkedPantryItems.filter((item) => item !== key);
    setCheckedPantryItems(updated);
    localStorage.setItem('checkedPantryItemsV1', JSON.stringify(updated));
  };

  if (loading && plan.length === 0 && inventory.length === 0) {
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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <h1 className="page-title">{t.shoppingTitle}</h1>
            <p className="page-subtitle">{t.shoppingSub}</p>
          </div>
          {loading && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
              <span className="spinner" style={{ width: '18px', height: '18px', borderWidth: '2px' }} />
              <span>{t.loadingShopping}</span>
            </div>
          )}
        </div>
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
              const imageSrc = getIngredientImage(item.item);
              return (
                <li key={item.item} className={`plan-shopping-row ${checked ? 'checked' : ''}`}>
                  <label className="plan-shopping-label">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={(e) => toggleItemChecked(item.item, e)}
                    />
                    <div
                      className="pantry-item-thumb-bowl"
                      aria-hidden="true"
                      title="Click to view large photo & visual guide"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setInspectingIngredient(item.item);
                      }}
                    >
                      <img
                        src={imageSrc || '/images/ingredients/standard-ingredient.svg'}
                        alt={item.item}
                        className="pantry-item-thumb-img"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/images/ingredients/standard-ingredient.svg';
                        }}
                      />
                    </div>
                    <span className="plan-shopping-name" title={formatItem(item.item)}>
                      {formatItem(item.item)}
                    </span>
                  </label>
                  <span className="plan-shopping-days">
                    {t.quantityNeeded}: {item.quantity || t.quantityNotSpecified}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        {plan.length > 0 && analysis.pantryChecklist.length > 0 && (
          <div className="pantry-check-panel glass-pane">
            <div className="pantry-panel-header">
              <div>
                <h3 className="pantry-panel-title">{t.checkPantryTitle}</h3>
                <p className="selector-sub">{t.checkPantryDescription}</p>
              </div>
              <div className="pantry-stats-pill" title={`${inStockPantryCount} of ${totalPantryCount} in stock`}>
                <span className="pantry-stats-count">{inStockPantryCount} / {totalPantryCount}</span>
                <span className="pantry-stats-label">{t.pantryStockedCount}</span>
              </div>
            </div>

            <div className="pantry-categories-grid">
              {pantryCategories.map((group) => {
                const groupTitle = language === 'Tamil' ? group.titleTa : group.titleEn;
                const groupStocked = group.items.filter((item) =>
                  checkedPantrySet.has(item.toLowerCase())
                ).length;

                return (
                  <div key={group.id} className="pantry-category-card">
                    <div className="pantry-category-header">
                      <div className="pantry-category-title-wrap">
                        <span className="pantry-category-icon" aria-hidden="true">{group.icon}</span>
                        <h4 className="pantry-category-name">{groupTitle}</h4>
                      </div>
                      <span className="pantry-category-badge">
                        {groupStocked}/{group.items.length}
                      </span>
                    </div>

                    <ul className="pantry-category-items">
                      {group.items.map((item) => {
                        const key = item.toLowerCase();
                        const isChecked = checkedPantrySet.has(key);
                        const imageSrc = getIngredientImage(item);

                        return (
                          <li
                            key={item}
                            className={`pantry-item-row ${isChecked ? 'is-stocked' : 'needs-check'}`}
                            onClick={(e) => togglePantryChecked(item, e)}
                          >
                            <div className="pantry-item-info">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={(e) => togglePantryChecked(item, e)}
                                onClick={(e) => e.stopPropagation()}
                                className="pantry-item-checkbox"
                                aria-label={`Mark ${formatItem(item)} as in pantry`}
                              />
                              <div
                                className="pantry-item-thumb-bowl"
                                aria-hidden="true"
                                title="Click to view large photo & visual guide"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  setInspectingIngredient(item);
                                }}
                              >
                                <img
                                  src={imageSrc || '/images/ingredients/standard-ingredient.svg'}
                                  alt={item}
                                  className="pantry-item-thumb-img"
                                  loading="lazy"
                                  onError={(e) => {
                                    const target = e.currentTarget as HTMLImageElement;
                                    target.onerror = null;
                                    target.src = '/images/ingredients/standard-ingredient.svg';
                                  }}
                                />
                              </div>
                              <span className="pantry-item-title" title={formatItem(item)}>
                                {formatItem(item)}
                              </span>
                            </div>

                            <span
                              className={`pantry-stock-pill ${isChecked ? 'pill-in-pantry' : 'pill-check'}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                togglePantryChecked(item, e);
                              }}
                            >
                              {isChecked ? `✓ ${t.inPantry}` : t.checkStock}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
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

      <IngredientInspectionModal
        isOpen={Boolean(inspectingIngredient)}
        onClose={() => setInspectingIngredient(null)}
        ingredientName={inspectingIngredient || ''}
        language={language}
      />
    </div>
  );
}
