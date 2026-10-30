import type { WeeklyShoppingDay } from '@/lib/weekly-shopping';

export const CURRENT_WEEKLY_PLAN_KEY = 'currentSourashtraWeeklyCombosV3';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isRecipe(value: unknown): boolean {
  if (!isRecord(value)) return false;
  return ['fridgeIngredientsUsed', 'missingIngredients', 'pantryAdditives'].every((key) => {
    const list = value[key];
    return list === undefined || (Array.isArray(list) && list.every((item) => typeof item === 'string'));
  });
}

function isCombo(value: unknown): boolean {
  if (!isRecord(value)) return false;
  return ['primaryRecipe', 'secondaryRecipe'].every((key) => {
    const recipe = value[key];
    return recipe === undefined || isRecipe(recipe);
  });
}

function isWeeklyDay(value: unknown): value is WeeklyShoppingDay {
  if (!isRecord(value) || typeof value.dayName !== 'string') return false;
  return ['breakfast', 'lunch', 'dinner'].every((key) => {
    const combo = value[key];
    return combo === undefined || isCombo(combo);
  });
}

export function saveCurrentWeeklyPlan(plan: WeeklyShoppingDay[]): void {
  localStorage.setItem(CURRENT_WEEKLY_PLAN_KEY, JSON.stringify(plan));
  window.dispatchEvent(new Event('weeklyPlanChange'));
}

export function readCurrentWeeklyPlan(): WeeklyShoppingDay[] {
  const savedPlan = localStorage.getItem(CURRENT_WEEKLY_PLAN_KEY);
  if (!savedPlan) return [];

  try {
    const parsed: unknown = JSON.parse(savedPlan);
    if (Array.isArray(parsed) && parsed.every(isWeeklyDay)) {
      return parsed;
    }
  } catch (error) {
    console.error('Unable to read the saved weekly meal plan:', error);
    return [];
  }

  return [];
}
