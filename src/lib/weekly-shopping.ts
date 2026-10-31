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
  quantity?: string;
}

export interface WeeklyShoppingAnalysis {
  toPurchase: WeeklyShoppingItem[];
  alreadyInFridge: string[];
  pantryChecklist: string[];
}

function normalizeIngredient(value: string): string {
  return value
    .replace(/\s+-\s+\d+(?:\.\d+)?\s*[a-z]+\s*$/i, '')
    .replace('(Fresh from Fridge)', '')
    .trim()
    .toLowerCase();
}

interface ParsedIngredient {
  name: string;
  amount?: number;
  unit?: string;
}

interface ShoppingQuantity {
  amount: number;
  unit: string;
  specified: boolean;
}

function parseIngredient(value: string): ParsedIngredient {
  const cleanValue = value.replace('(Fresh from Fridge)', '').trim();
  const match = cleanValue.match(/^(.*?)\s+-\s+(\d+(?:\.\d+)?)\s*([a-z]+)?$/i);
  if (!match) return { name: cleanValue };

  const rawUnit = (match[3] || '').toLowerCase();
  const units: Record<string, string> = {
    g: 'g',
    gram: 'g',
    grams: 'g',
    kg: 'g',
    ml: 'ml',
    milliliter: 'ml',
    milliliters: 'ml',
    l: 'ml',
    liter: 'ml',
    liters: 'ml',
    pc: 'pc',
    pcs: 'pc',
    piece: 'pc',
    pieces: 'pc',
    medium: 'medium',
    mediums: 'medium'
  };
  const unit = units[rawUnit] || rawUnit;
  let amount = Number(match[2]);
  if (rawUnit === 'kg' || rawUnit === 'l') amount *= 1000;

  return {
    name: match[1].trim(),
    amount,
    unit
  };
}

function formatQuantity(amount: number, unit: string): string {
  const formattedAmount = Number.isInteger(amount) ? String(amount) : String(Number(amount.toFixed(2)));
  if (!unit) return formattedAmount;
  if (unit === 'pc') return `${formattedAmount} ${amount === 1 ? 'pc' : 'pcs'}`;
  return `${formattedAmount} ${unit}`;
}

export function calculateWeeklyShopping(
  plan: WeeklyShoppingDay[],
  inventoryNames: string[]
): WeeklyShoppingAnalysis {
  const available = inventoryNames
    .map((name) => normalizeIngredient(name.split(' (')[0]))
    .filter(Boolean);
  const neededQuantities = new Map<string, ShoppingQuantity>();
  const alreadyInFridge = new Set<string>();
  const pantryNeeded = new Set<string>();

  for (const day of plan) {
    for (const combo of [day.breakfast, day.lunch, day.dinner]) {
      if (!combo) continue;

      for (const recipe of [combo.primaryRecipe, combo.secondaryRecipe]) {
        if (!recipe) continue;
        const recipeIngredients = new Set<string>();

        const freshIngredients = [
          ...(recipe.fridgeIngredientsUsed || []),
          ...(recipe.missingIngredients || [])
        ];
        for (const rawIngredient of freshIngredients) {
          const parsed = parseIngredient(rawIngredient);
          if (!parsed.name) continue;

          for (const ingredientName of parsed.name.split(/\s*&\s*/).map((part) => part.trim()).filter(Boolean)) {
            const normalizedName = normalizeIngredient(ingredientName);
            if (!normalizedName || recipeIngredients.has(normalizedName)) continue;
            recipeIngredients.add(normalizedName);

            const ingredientWords = normalizedName.split(/[^a-z0-9]+/).filter((word) => word.length > 2);
            const inInventory = available.some((inventoryName) => {
              const inventoryWords = inventoryName.split(/[^a-z0-9]+/).filter((word) => word.length > 2);
              return inventoryName === normalizedName ||
                ingredientWords.some((word) => inventoryWords.includes(word));
            });
            if (inInventory) {
              alreadyInFridge.add(ingredientName);
            } else {
              const quantity = neededQuantities.get(ingredientName) || {
                amount: 0,
                unit: parsed.unit || '',
                specified: true
              };
              if (parsed.amount === undefined || quantity.unit !== (parsed.unit || '')) {
                quantity.specified = false;
              } else {
                quantity.amount += parsed.amount;
              }
              neededQuantities.set(ingredientName, quantity);
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
    toPurchase: Array.from(neededQuantities, ([item, quantity]) => ({
      item,
      quantity: quantity.specified ? formatQuantity(quantity.amount, quantity.unit) : undefined
    })),
    alreadyInFridge: Array.from(alreadyInFridge),
    pantryChecklist: Array.from(pantryNeeded).slice(0, 14)
  };
}

export function formatWeeklyShoppingShareText(
  title: string,
  items: WeeklyShoppingItem[],
  unspecifiedQuantity: string
): string {
  if (items.length === 0) return '';
  return [
    `🛒 ${title}`,
    ...items.map((item) => `• ${item.item} — ${item.quantity || unspecifiedQuantity}`)
  ].join('\n');
}
