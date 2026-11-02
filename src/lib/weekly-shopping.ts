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

export function extractCanonicalPantryItems(rawAdditive: string): string[] {
  if (!rawAdditive || rawAdditive.startsWith('Channel Ingredient Note:')) return [];

  // Remove parenthesis and notes (e.g. quantities, "optional", etc.)
  const cleaned = rawAdditive.replace(/\(.*?\)/g, '').trim();

  // Split by & , and , or , /
  const tokens = cleaned
    .split(/\s*(?:&|,|\band\b|\bor\b|\/)\s*/i)
    .map((s) => s.trim())
    .filter(Boolean);

  const results: string[] = [];

  for (const token of tokens) {
    const lower = token.toLowerCase();

    if (lower.includes('mustard') || lower.includes('kadugu')) {
      results.push('Mustard Seeds');
    } else if (lower.includes('cumin') || lower.includes('jeera')) {
      results.push('Cumin Seeds');
    } else if (lower.includes('black pepper') || lower.includes('peppercorn')) {
      results.push('Black Pepper');
    } else if (lower.includes('fenugreek') || lower.includes('methi') || lower.includes('vendhayam')) {
      results.push('Fenugreek Seeds');
    } else if (lower.includes('fennel') || lower.includes('somph') || lower.includes('saunf')) {
      results.push('Fennel Seeds (Somph)');
    } else if (lower.includes('asafoetida') || lower.includes('hing') || lower.includes('perungayam')) {
      results.push('Asafoetida (Hing)');
    } else if (lower.includes('turmeric') || lower.includes('manjal')) {
      results.push('Turmeric Powder');
    } else if (lower.includes('dry red chilli') || lower.includes('red chillies') || lower.includes('milagai')) {
      results.push('Dry Red Chilli');
    } else if (lower.includes('coriander seed')) {
      results.push('Coriander Seeds');
    } else if (lower.includes('coriander powder')) {
      results.push('Coriander Powder');
    } else if (lower.includes('sambar bhurko') || lower.includes('sambar powder')) {
      results.push('Sambar Powder / Bhurko');
    } else if (lower.includes('pilchar bhurko') || lower.includes('rasam powder')) {
      results.push('Pilchar (Rasam) Bhurko');
    } else if (lower.includes('ounty bhurko') || lower.includes('kulambu podi')) {
      results.push('Ounty Bhurko');
    } else if (lower.includes('chenna bhurko') || lower.includes('idli bhurko')) {
      results.push('Chenna Bhurko (Chutney Podi)');
    } else if (lower.includes('garam masala')) {
      results.push('Garam Masala');
    } else if (lower.includes('clove') || lower.includes('lavangam')) {
      results.push('Cloves');
    } else if (lower.includes('cinnamon') || lower.includes('pattai')) {
      results.push('Cinnamon');
    } else if (lower.includes('cardamom') || lower.includes('yelakkai') || lower.includes('elachi')) {
      results.push('Cardamom Pods');
    } else if (lower.includes('cashew') || lower.includes('mundhiri') || lower.includes('kaju')) {
      results.push('Cashews');
    } else if (lower.includes('raisin') || lower.includes('kismis')) {
      results.push('Raisins');
    } else if (lower.includes('poppy') || lower.includes('kas kas') || lower.includes('khus khus')) {
      results.push('Poppy Seeds (Kas Kas)');
    } else if (lower.includes('toor dal') || lower.includes('tuvaram')) {
      results.push('Toor Dal');
    } else if (lower.includes('chana dal') || lower.includes('kadala')) {
      results.push('Chana Dal');
    } else if (lower.includes('urad dal') || lower.includes('black gram') || lower.includes('ulundhu')) {
      results.push('Urad Dal');
    } else if (lower.includes('moong dal') || lower.includes('payatham') || lower.includes('pasi')) {
      results.push('Moong Dal');
    } else if (lower.includes('roasted gram') || lower.includes('pottukadalai')) {
      results.push('Roasted Gram (Pottukadalai)');
    } else if (lower.includes('chickpea') || lower.includes('chana') || lower.includes('kondakadalai')) {
      results.push('Chickpeas');
    } else if (lower.includes('raw rice')) {
      results.push('Raw Rice');
    } else if (lower.includes('idli rice') || lower.includes('parboiled rice')) {
      results.push('Idli / Parboiled Rice');
    } else if (lower.includes('rice flour')) {
      results.push('Rice Flour');
    } else if (lower.includes('besan') || lower.includes('gram flour')) {
      results.push('Besan (Gram Flour)');
    } else if (lower.includes('rava') || lower.includes('sooji')) {
      results.push('Rava (Sooji)');
    } else if (lower.includes('poha') || lower.includes('aval')) {
      results.push('Poha / Aval');
    } else if (lower.includes('gingelly') || lower.includes('sesame oil') || lower.includes('nallennai')) {
      results.push('Gingelly / Sesame Oil');
    } else if (lower.includes('cooking oil') || lower === 'oil') {
      results.push('Cooking Oil');
    } else if (lower.includes('ghee') || lower.includes('thup')) {
      results.push('Ghee');
    } else if (lower.includes('tamarind') || lower.includes('puli')) {
      results.push('Tamarind');
    } else if (lower.includes('palm jaggery') || lower.includes('karupatti')) {
      results.push('Palm Jaggery (Karupatti)');
    } else if (lower.includes('jaggery') || lower.includes('gullu')) {
      results.push('Jaggery (Gullu)');
    } else if (lower.includes('sugar')) {
      results.push('Sugar');
    } else if (lower.includes('salt') || lower.includes('lenu')) {
      results.push('Salt');
    } else if (token.length > 2) {
      results.push(token);
    }
  }

  return Array.from(new Set(results));
}

export function calculateWeeklyShopping(
  plan: WeeklyShoppingDay[],
  inventoryNames: string[]
): WeeklyShoppingAnalysis {
  if (!Array.isArray(plan)) {
    return { toPurchase: [], alreadyInFridge: [], pantryChecklist: [] };
  }
  const safeInventory = Array.isArray(inventoryNames) ? inventoryNames : [];
  const available = safeInventory
    .map((name) => (name ? normalizeIngredient(name.split(' (')[0]) : ''))
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
          for (const canonicalItem of extractCanonicalPantryItems(additive)) {
            pantryNeeded.add(canonicalItem);
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
    pantryChecklist: Array.from(pantryNeeded).sort((a, b) => a.localeCompare(b))
  };
}

export interface PantryCategoryGroup {
  id: 'dals' | 'spices' | 'oils' | 'nuts' | 'grains' | 'other';
  titleEn: string;
  titleTa: string;
  icon: string;
  items: string[];
}

export function groupPantryItems(items: string[]): PantryCategoryGroup[] {
  const groups: Record<string, PantryCategoryGroup> = {
    dals: {
      id: 'dals',
      titleEn: 'Dals & Pulses',
      titleTa: 'பருப்பு வகைகள்',
      icon: '🫘',
      items: []
    },
    spices: {
      id: 'spices',
      titleEn: 'Spices, Powders & Masalas',
      titleTa: 'மசாலா & மளிகை பொடிகள்',
      icon: '🌶️',
      items: []
    },
    oils: {
      id: 'oils',
      titleEn: 'Oils, Ghee & Souring',
      titleTa: 'எண்ணெய், நெய் & புளிப்பு',
      icon: '🫒',
      items: []
    },
    nuts: {
      id: 'nuts',
      titleEn: 'Nuts, Dry Fruits & Sweeteners',
      titleTa: 'நட்ஸ் & இனிப்பு பொருட்கள்',
      icon: '🥜',
      items: []
    },
    grains: {
      id: 'grains',
      titleEn: 'Grains & Flours',
      titleTa: 'தானியங்கள் & மாவுகள்',
      icon: '🌾',
      items: []
    },
    other: {
      id: 'other',
      titleEn: 'Other Pantry Staples',
      titleTa: 'இதர மளிகை பொருட்கள்',
      icon: '🧂',
      items: []
    }
  };

  for (const item of items) {
    const lower = item.toLowerCase();
    if (
      lower.includes('rice') ||
      lower.includes('rava') ||
      lower.includes('sooji') ||
      lower.includes('flour') ||
      lower.includes('maida') ||
      lower.includes('atta') ||
      lower.includes('besan') ||
      lower.includes('poha') ||
      lower.includes('aval') ||
      lower.includes('vermicelli') ||
      lower.includes('semiya')
    ) {
      groups.grains.items.push(item);
    } else if (
      lower.includes('dal') ||
      lower.includes('gram') ||
      lower.includes('pulse') ||
      lower.includes('lentil') ||
      lower.includes('chickpea') ||
      lower.includes('peas') ||
      lower.includes('payatham') ||
      lower.includes('paruppu')
    ) {
      groups.dals.items.push(item);
    } else if (
      lower.includes('powder') ||
      lower.includes('turmeric') ||
      lower.includes('chilli') ||
      lower.includes('pepper') ||
      lower.includes('mustard') ||
      lower.includes('cumin') ||
      lower.includes('jeera') ||
      lower.includes('coriander seed') ||
      lower.includes('fenugreek') ||
      lower.includes('methi') ||
      lower.includes('hing') ||
      lower.includes('asafoetida') ||
      lower.includes('clove') ||
      lower.includes('cinnamon') ||
      lower.includes('fennel') ||
      lower.includes('somph') ||
      lower.includes('garam masala') ||
      lower.includes('sambar') ||
      lower.includes('rasam') ||
      lower.includes('bhurko')
    ) {
      groups.spices.items.push(item);
    } else if (
      lower.includes('cashew') ||
      lower.includes('mundhiri') ||
      lower.includes('raisin') ||
      lower.includes('kismis') ||
      lower.includes('cardamom') ||
      lower.includes('elachi') ||
      lower.includes('jaggery') ||
      lower.includes('sugar') ||
      lower.includes('peanut') ||
      lower.includes('groundnut') ||
      lower.includes('kalkandu') ||
      lower.includes('poppy') ||
      lower.includes('kas kas') ||
      lower.includes('coconut') ||
      lower.includes('copra')
    ) {
      groups.nuts.items.push(item);
    } else if (
      /\boils?\b/i.test(lower) ||
      lower.includes('gingelly') ||
      lower.includes('sesame') ||
      lower.includes('ghee') ||
      lower.includes('tamarind') ||
      lower.includes('puli') ||
      lower.includes('vinegar') ||
      lower.includes('lemon')
    ) {
      groups.oils.items.push(item);
    } else {
      groups.other.items.push(item);
    }
  }

  return [groups.dals, groups.spices, groups.oils, groups.nuts, groups.grains, groups.other]
    .filter((g) => g.items.length > 0);
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
