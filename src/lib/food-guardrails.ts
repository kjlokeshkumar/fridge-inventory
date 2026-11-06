/**
 * Culinary Food Guardrails & Utensil Filter
 *
 * Ensures only genuine edible foods, produce, dairy, meats, and pantry items
 * are extracted from fridge/grocery scans. Strictly filters out utensils,
 * cookware, plates, containers, non-food household items, and abusive/irrelevant uploads.
 */

export interface ScannedFoodItemCandidate {
  name?: string;
  sourashtraName?: string;
  quantity?: number;
  category?: string;
  expirationDate?: string | null;
}

// Known compound food names that happen to contain words like "bottle", "pot", "pan", "cup", etc.
const FOOD_ALLOWLIST_PHRASES = [
  'bottle gourd',
  'pot roast',
  'pot pie',
  'potato',
  'potatoes',
  'sweet potato',
  'pancake',
  'pancakes',
  'cupcake',
  'cupcakes',
  'panettone',
  'panzanella',
  'paneer',
  'panir',
  'butterhead',
  'ice cream',
  'iceberg lettuce',
];

// Regex matching non-food objects, utensils, kitchenware, furniture, human/pet, toiletries, etc.
const NON_FOOD_TERMS_REGEX = /\b(bowl|vessel|pot|pan|cooker|kadhai|kadai|deghi|tiffin|dabba|tupperware|container|box|cup|glass|mug|plate|dish|saucer|spoon|fork|knife|cutlery|utensil|cookware|ladle|spatula|tray|shelf|rack|refrigerator|fridge|freezer|lid|cover|foil|wrap|bag|plastic|bottle|tin|canister|carton|packet|pouch|packaging|soap|sponge|scrubber|detergent|cleaner|chemical|medicine|tablet|pill|person|people|man|woman|child|boy|girl|baby|face|hand|finger|body|pet|dog|cat|animal|chair|table|furniture|phone|iphone|mobile|device|shoe|cloth|shirt|pant|towel|napkin|tissue|garbage|trash|receipt)\b/i;

const DISALLOWED_CATEGORIES = new Set([
  'utensil',
  'cookware',
  'hardware',
  'container',
  'non-food',
  'unknown',
  'object',
  'furniture',
  'appliance',
  'electronics',
]);

/**
 * Checks whether an item is genuine edible food and NOT a utensil, container, or non-food item.
 */
export function isCulinaryFoodItem(item: ScannedFoodItemCandidate | null | undefined): boolean {
  if (!item || typeof item !== 'object') return false;

  const rawName = String(item.name || '').trim();
  if (!rawName || rawName.length < 2 || rawName.length > 80) return false;

  const lowerName = rawName.toLowerCase();

  // If the category is explicitly a non-food category, reject
  if (item.category) {
    const lowerCategory = item.category.toLowerCase().trim();
    if (DISALLOWED_CATEGORIES.has(lowerCategory)) {
      return false;
    }
  }

  // Check if it's an allowlisted compound food name (e.g. bottle gourd, potato, pot roast)
  const isAllowlisted = FOOD_ALLOWLIST_PHRASES.some((phrase) => lowerName.includes(phrase));
  if (isAllowlisted) {
    return true;
  }

  // Check against non-food terms regex
  if (NON_FOOD_TERMS_REGEX.test(lowerName)) {
    return false;
  }

  return true;
}

/**
 * Filters and sanitizes candidate items, returning only valid unique food items.
 */
export function sanitizeAndFilterFoodItems(items: unknown): ScannedFoodItemCandidate[] {
  if (!Array.isArray(items)) return [];

  const results: ScannedFoodItemCandidate[] = [];
  const seenNames = new Set<string>();

  for (const raw of items) {
    if (!raw || typeof raw !== 'object') continue;
    const item = raw as ScannedFoodItemCandidate;

    if (isCulinaryFoodItem(item)) {
      const cleanName = String(item.name).trim();
      const lower = cleanName.toLowerCase();
      if (seenNames.has(lower)) continue;
      seenNames.add(lower);

      const parsedQty = Math.max(1, Number(item.quantity) || 1);

      // Normalize category to standard set
      let normalizedCat = 'Produce';
      const cat = String(item.category || '').toLowerCase();
      if (cat.includes('dairy') || cat.includes('milk') || cat.includes('curd') || cat.includes('cheese') || cat.includes('butter') || cat.includes('paneer') || cat.includes('ghee')) {
        normalizedCat = 'Dairy';
      } else if (cat.includes('meat') || cat.includes('poultry') || cat.includes('fish') || cat.includes('chicken') || cat.includes('mutton') || cat.includes('egg') || cat.includes('seafood')) {
        normalizedCat = 'Meat';
      } else if (cat.includes('pantry') || cat.includes('spice') || cat.includes('grain') || cat.includes('dal') || cat.includes('rice') || cat.includes('flour') || cat.includes('oil') || cat.includes('masala')) {
        normalizedCat = 'Pantry';
      } else if (cat.includes('produce') || cat.includes('veg') || cat.includes('fruit') || cat.includes('herb') || cat.includes('green')) {
        normalizedCat = 'Produce';
      } else {
        normalizedCat = 'Other';
      }

      results.push({
        name: cleanName,
        sourashtraName: item.sourashtraName ? String(item.sourashtraName).trim() : undefined,
        quantity: parsedQty,
        category: normalizedCat,
        expirationDate: item.expirationDate ? String(item.expirationDate).trim() : null,
      });
    }
  }

  return results;
}
