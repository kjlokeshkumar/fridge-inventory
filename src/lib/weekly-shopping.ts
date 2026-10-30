export interface WeeklyShoppingRecipe {
  title?: string;
  fridgeIngredientsUsed?: string[];
  missingIngredients?: string[];
  pantryAdditives?: string[];
}

export interface WeeklyShoppingCombo {
  comboId?: string;
  primaryRecipe?: WeeklyShoppingRecipe;
  secondaryRecipe?: WeeklyShoppingRecipe;
}

export interface WeeklyShoppingDay {
  isoDate?: string;
  dayName: string;
  breakfast?: WeeklyShoppingCombo;
  lunch?: WeeklyShoppingCombo;
  dinner?: WeeklyShoppingCombo;
}

export interface WeeklyShoppingItem {
  item: string;
  days: string;
}

export interface WeeklyShoppingAnalysis {
  toPurchase: WeeklyShoppingItem[];
  alreadyInFridge: string[];
  pantryChecklist: string[];
}

function normalizeIngredient(value: string): string {
  return value
    .split(' - ')[0]
    .replace('(Fresh from Fridge)', '')
    .trim()
    .toLowerCase();
}

export function calculateWeeklyShopping(
  plan: WeeklyShoppingDay[],
  inventoryNames: string[]
): WeeklyShoppingAnalysis {
  const available = inventoryNames
    .map((name) => normalizeIngredient(name.split(' (')[0]))
    .filter(Boolean);
  const neededByDay = new Map<string, Set<string>>();
  const alreadyInFridge = new Set<string>();
  const pantryNeeded = new Set<string>();

  for (const day of plan) {
    const dayLabel = day.dayName.replace('Today (', '').replace(')', '').slice(0, 3);
    for (const combo of [day.breakfast, day.lunch, day.dinner]) {
      if (!combo) continue;

      for (const recipe of [combo.primaryRecipe, combo.secondaryRecipe]) {
        if (!recipe) continue;

        const freshIngredients = [
          ...(recipe.fridgeIngredientsUsed || []),
          ...(recipe.missingIngredients || [])
        ];
        for (const rawIngredient of freshIngredients) {
          const cleanName = rawIngredient
            .split(' - ')[0]
            .replace('(Fresh from Fridge)', '')
            .trim();
          if (!cleanName) continue;

          for (const ingredientName of cleanName.split(/\s*&\s*/).map((part) => part.trim()).filter(Boolean)) {
            const normalizedName = normalizeIngredient(ingredientName);
            const ingredientWords = normalizedName.split(/[^a-z0-9]+/).filter((word) => word.length > 2);
            const inInventory = available.some((inventoryName) => {
              const inventoryWords = inventoryName.split(/[^a-z0-9]+/).filter((word) => word.length > 2);
              return inventoryName === normalizedName ||
                ingredientWords.some((word) => inventoryWords.includes(word));
            });
            if (inInventory) {
              alreadyInFridge.add(ingredientName);
            } else {
              const days = neededByDay.get(ingredientName) || new Set<string>();
              days.add(dayLabel);
              neededByDay.set(ingredientName, days);
            }
          }
        }

        for (const additive of recipe.pantryAdditives || []) {
          if (!additive.startsWith('Channel Ingredient Note:')) {
            pantryNeeded.add(additive.split(' (')[0].trim());
          }
        }
      }
    }
  }

  return {
    toPurchase: Array.from(neededByDay, ([item, days]) => ({
      item,
      days: Array.from(days).join(', ')
    })),
    alreadyInFridge: Array.from(alreadyInFridge),
    pantryChecklist: Array.from(pantryNeeded).slice(0, 14)
  };
}
