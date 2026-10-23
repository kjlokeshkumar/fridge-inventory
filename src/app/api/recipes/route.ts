import { NextRequest, NextResponse } from 'next/server';
import {
  MADURAI_SOURASHTRA_BHURKOS,
  MADURAI_SOURASHTRA_RECIPES,
  PANTRY_ADDITIVES_CATALOG
} from '@/lib/sourashtra-recipes';

interface IngredientCalorieItem {
  name: string;
  weightGrams: number;
  calories: number;
}

interface FormulatedRecipe {
  id: string;
  title: string;
  category: string;
  sourceAttribution: string;
  youtubeUrl?: string;
  webUrl?: string;
  fridgeIngredientsUsed: string[];
  pantryAdditives: string[];
  bhurkoNote: string;
  missingIngredients: string[];
  difficulty: string;
  steps: string[];
  totalCalories: number;
  ingredientsBreakdown: IngredientCalorieItem[];
}

const SOURASHTRA_TERM_MAP: Record<string, string> = {
  tomato: 'Tomato (Takkali) - 200g',
  brinjal: 'Brinjal / Eggplant (Vangi) - 250g',
  eggplant: 'Brinjal / Eggplant (Vangi) - 250g',
  potato: 'Potato (Batata) - 200g',
  onion: 'Onion / Shallots (Kando) - 150g',
  drumstick: 'Drumstick (Sengu) - 150g',
  beans: 'Beans / Butter Beans (Jinnavara) - 150g',
  'butter beans': 'Butter Beans (Beans) - 150g',
  garlic: 'Whole Garlic Cloves (Losan / Lasan) - 50g',
  ginger: 'Fresh Ginger (Alla / Allam) - 25g',
  'green chilli': 'Green Chillies (Mirsang) - 20g',
  'curry leaves': 'Fresh Curry Leaves (Kariveppilai) - 10g',
  coriander: 'Fresh Coriander Leaves (Kothmir) - 20g',
  mint: 'Fresh Mint Leaves (Pudina) - 50g',
  'mint leaves': 'Fresh Mint Leaves (Pudina) - 50g',
  spinach: 'Fresh Greens / Spinach (Bhajji / Keerai) - 200g',
  greens: 'Fresh Greens / Spinach (Bhajji / Keerai) - 200g',
  lemon: 'Fresh Lemon (Limbu) - 2 medium',
  gooseberry: 'Gooseberry / Amla (Nellika) - 150g',
  amla: 'Gooseberry / Amla (Nellika) - 150g',
  coconut: 'Fresh Grated Coconut (Nalar) - 100g',
  milk: 'Milk / Curd (Doodh / Dheim) - 250ml',
  curd: 'Curd / Buttermilk (Dheim / Taak) - 200ml',
  buttermilk: 'Spiced Buttermilk (Taak) - 250ml',
  egg: 'Boiled Eggs (Anda) - 4 pcs',
  eggs: 'Boiled Eggs (Anda) - 4 pcs',
  chicken: 'Chicken (Koli / Kudi) - 500g',
  mutton: 'Mutton / Goat Meat (Chaino / Mansa) - 500g',
  fish: 'Fresh / Dry Fish (Meen / Koddi) - 500g'
};

function estimateAdditiveCalories(additive: string): IngredientCalorieItem {
  const lower = additive.toLowerCase();
  if (lower.includes('oil') || lower.includes('ghee')) {
    return { name: additive, weightGrams: 25, calories: 220 };
  }
  if (lower.includes('dal') || lower.includes('bela') || lower.includes('chickpea') || lower.includes('besan') || lower.includes('gram')) {
    return { name: additive, weightGrams: 80, calories: 270 };
  }
  if (lower.includes('rice') || lower.includes('saadu')) {
    return { name: additive, weightGrams: 150, calories: 520 };
  }
  if (lower.includes('jaggery') || lower.includes('gullu') || lower.includes('sugar')) {
    return { name: additive, weightGrams: 40, calories: 150 };
  }
  if (lower.includes('tamarind')) {
    return { name: additive, weightGrams: 25, calories: 60 };
  }
  if (lower.includes('bhurko') || lower.includes('burko')) {
    return { name: additive, weightGrams: 20, calories: 65 };
  }
  if (lower.includes('peanut') || lower.includes('sesame') || lower.includes('poppy')) {
    return { name: additive, weightGrams: 30, calories: 170 };
  }
  return { name: additive, weightGrams: 10, calories: 20 };
}

function estimateFridgeCalories(fridgeItem: string): IngredientCalorieItem {
  const lower = fridgeItem.toLowerCase();
  if (lower.includes('mutton') || lower.includes('chaino') || lower.includes('mansa')) {
    return { name: fridgeItem, weightGrams: 350, calories: 510 };
  }
  if (lower.includes('chicken') || lower.includes('koli') || lower.includes('kudi')) {
    return { name: fridgeItem, weightGrams: 350, calories: 420 };
  }
  if (lower.includes('fish') || lower.includes('meen') || lower.includes('koddi')) {
    return { name: fridgeItem, weightGrams: 300, calories: 340 };
  }
  if (lower.includes('egg') || lower.includes('anda')) {
    return { name: fridgeItem, weightGrams: 200, calories: 280 };
  }
  if (lower.includes('coconut') || lower.includes('nalar')) {
    return { name: fridgeItem, weightGrams: 100, calories: 350 };
  }
  if (lower.includes('potato') || lower.includes('batata')) {
    return { name: fridgeItem, weightGrams: 200, calories: 160 };
  }
  if (lower.includes('milk') || lower.includes('curd') || lower.includes('dheim')) {
    return { name: fridgeItem, weightGrams: 200, calories: 130 };
  }
  if (lower.includes('beans')) {
    return { name: fridgeItem, weightGrams: 150, calories: 95 };
  }
  return { name: fridgeItem, weightGrams: 150, calories: 45 };
}

function formulateSourashtraRecipesFromFridge(
  fridgeItemNames: string[],
  userDiet: string,
  userAllergies: string,
  shuffleSeed = 0
): FormulatedRecipe[] {
  const normalizedFridge = fridgeItemNames.map((n) => n.toLowerCase());
  const allergyTerms = userAllergies
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

  // Filter recipes by dietary preference and allergies
  const eligible = MADURAI_SOURASHTRA_RECIPES.filter((r) => {
    if (userDiet === 'Vegetarian' || userDiet === 'Vegan' || userDiet === 'Jain') {
      if (r.dietaryType !== 'Vegetarian') return false;
    } else if (userDiet === 'Eggitarian') {
      if (r.dietaryType === 'Non-Veg') return false;
    }
    if (allergyTerms.length > 0) {
      const fullText = `${r.name} ${r.englishSubtitle} ${r.fridgeTriggers.join(' ')} ${r.pantryAdditives.join(' ')}`.toLowerCase();
      if (allergyTerms.some((term) => fullText.includes(term))) return false;
    }
    return true;
  });

  // Score each recipe based on matching fridge triggers
  const scored = eligible.map((recipe, idx) => {
    const matchedTriggers: string[] = [];
    const missingTriggers: string[] = [];

    for (const trigger of recipe.fridgeTriggers) {
      const tLow = trigger.toLowerCase();
      const matchedInFridge = normalizedFridge.some(
        (f) =>
          f.includes(tLow) ||
          tLow.includes(f) ||
          (tLow === 'greens' && (f.includes('spinach') || f.includes('bhajji') || f.includes('keerai'))) ||
          (tLow === 'spinach' && (f.includes('greens') || f.includes('bhajji'))) ||
          (tLow === 'curd' && (f.includes('milk') || f.includes('buttermilk') || f.includes('dhi') || f.includes('dheim'))) ||
          (tLow === 'buttermilk' && (f.includes('curd') || f.includes('milk'))) ||
          (tLow === 'eggs' && f.includes('egg')) ||
          (tLow === 'amla' && f.includes('gooseberry')) ||
          (tLow === 'gooseberry' && f.includes('amla'))
      );

      if (matchedInFridge) {
        matchedTriggers.push(SOURASHTRA_TERM_MAP[tLow] || `${trigger} (Fresh from Fridge)`);
      } else {
        missingTriggers.push(SOURASHTRA_TERM_MAP[tLow] || trigger);
      }
    }

    // Strongly boost primary proteins/specialty items when explicitly selected in the fridge
    let primaryBoost = 0;
    for (const f of normalizedFridge) {
      if (f.includes('mutton') && recipe.fridgeTriggers.some((t) => t.toLowerCase().includes('mutton'))) primaryBoost += 20;
      if (f.includes('chicken') && recipe.fridgeTriggers.some((t) => t.toLowerCase().includes('chicken'))) primaryBoost += 20;
      if (f.includes('fish') && recipe.fridgeTriggers.some((t) => t.toLowerCase().includes('fish'))) primaryBoost += 20;
      if (f.includes('egg') && recipe.fridgeTriggers.some((t) => t.toLowerCase().includes('egg'))) primaryBoost += 20;
      if (f.includes('mint') && recipe.fridgeTriggers.some((t) => t.toLowerCase().includes('mint'))) primaryBoost += 12;
      if ((f.includes('spinach') || f.includes('greens')) && recipe.fridgeTriggers.some((t) => ['spinach', 'greens'].includes(t.toLowerCase()))) primaryBoost += 12;
      if (f.includes('brinjal') && recipe.fridgeTriggers.some((t) => t.toLowerCase().includes('brinjal'))) primaryBoost += 10;
      if (f.includes('drumstick') && recipe.fridgeTriggers.some((t) => t.toLowerCase().includes('drumstick'))) primaryBoost += 10;
      if (f.includes('beans') && recipe.fridgeTriggers.some((t) => t.toLowerCase().includes('beans'))) primaryBoost += 10;
      if ((f.includes('lemon') || f.includes('gooseberry')) && recipe.fridgeTriggers.some((t) => ['lemon', 'gooseberry', 'amla'].includes(t.toLowerCase()))) primaryBoost += 12;
      if (f.includes('coconut') && recipe.fridgeTriggers.some((t) => t.toLowerCase().includes('coconut'))) primaryBoost += 10;
      if ((f.includes('milk') || f.includes('curd')) && recipe.fridgeTriggers.some((t) => ['milk', 'curd', 'buttermilk'].includes(t.toLowerCase()))) primaryBoost += 10;
    }

    const matchRatio = recipe.fridgeTriggers.length > 0 ? matchedTriggers.length / recipe.fridgeTriggers.length : 0.5;
    const tieBreaker = shuffleSeed > 0 ? ((idx * 13 + shuffleSeed * 7) % 19) * 0.25 : 0;
    const score = matchedTriggers.length * 4 + matchRatio * 6 + primaryBoost - missingTriggers.length * 1.2 + tieBreaker;

    return {
      recipe,
      matchedTriggers,
      missingTriggers,
      score
    };
  });

  scored.sort((a, b) => b.score - a.score);

  // Return ALL eligible Madurai Sourashtra recipes (300+ recipes ranked by fridge match!)
  return scored.map(({ recipe, matchedTriggers, missingTriggers }): FormulatedRecipe => {
    const usedFridge =
      matchedTriggers.length > 0
        ? matchedTriggers
        : recipe.fridgeTriggers.slice(0, 2).map((t) => SOURASHTRA_TERM_MAP[t.toLowerCase()] || t);

    const breakdown: IngredientCalorieItem[] = [
      ...usedFridge.map(estimateFridgeCalories),
      ...recipe.pantryAdditives.slice(0, 5).map(estimateAdditiveCalories)
    ];
    const totalCalories = breakdown.reduce((sum, item) => sum + item.calories, 0);

    const titleText =
      recipe.name === recipe.englishSubtitle || recipe.englishSubtitle.includes(recipe.name)
        ? recipe.englishSubtitle
        : `${recipe.name} — ${recipe.englishSubtitle}`;

    return {
      id: recipe.id,
      title: titleText,
      category: recipe.category,
      sourceAttribution: recipe.sourceAttribution,
      youtubeUrl: recipe.youtubeUrl,
      webUrl: recipe.webUrl,
      fridgeIngredientsUsed: usedFridge,
      pantryAdditives: recipe.pantryAdditives,
      bhurkoNote: recipe.bhurkoUsed
        ? `${recipe.bhurkoUsed} • Source: ${recipe.sourceAttribution}`
        : `Traditional Madurai Sourashtra tempering & preparation • Source: ${recipe.sourceAttribution}`,
      missingIngredients: missingTriggers,
      difficulty: recipe.dietaryType === 'Non-Veg' || recipe.processSteps.length > 5 ? 'Medium' : 'Easy',
      steps: recipe.processSteps,
      totalCalories,
      ingredientsBreakdown: breakdown
    };
  });
}

export async function GET(req: NextRequest) {
  try {
    const { default: db, initDb } = await import('@/lib/db');
    await initDb();

    const userIdParam = req.nextUrl.searchParams.get('userId') || req.headers.get('x-user-id');
    const customFridgeParam = req.nextUrl.searchParams.get('fridgeItems') || '';
    const shuffleParam = parseInt(req.nextUrl.searchParams.get('seed') || '0', 10) || 0;

    // Fetch current inventory (scoped by userId if available, falling back to all positive inventory)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let items: any[] = [];
    if (customFridgeParam.trim()) {
      items = customFridgeParam
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((name) => ({ name, quantity: 1, category: 'Fridge Selection' }));
    } else {
      try {
        if (userIdParam) {
          items = await db`SELECT name, quantity, category FROM inventory WHERE quantity > 0 AND "userId" = ${parseInt(userIdParam, 10)}`;
        }
        if (!items || items.length === 0) {
          items = await db`SELECT name, quantity, category FROM inventory WHERE quantity > 0`;
        }
      } catch {
        items = [];
      }
    }

    const isUsingSampleBasket = items.length === 0;
    if (isUsingSampleBasket) {
      items = [
        { name: 'Tomato (Takkali)', quantity: 4, category: 'Produce' },
        { name: 'Brinjal / Eggplant (Vangi)', quantity: 4, category: 'Produce' },
        { name: 'Potato (Batata)', quantity: 3, category: 'Produce' },
        { name: 'Onion (Kando)', quantity: 3, category: 'Produce' },
        { name: 'Green Chilli & Curry Leaves', quantity: 1, category: 'Produce' },
        { name: 'Mint & Coriander Leaves', quantity: 1, category: 'Produce' }
      ];
    }

    const profileIdParam = req.nextUrl.searchParams.get('profileId');

    // Fetch user profile for personalized dietary restrictions
    let profileData: { name: string; dietaryPreference: string; allergies: string } | null = null;
    try {
      if (profileIdParam) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res = await (db as any)`SELECT name, "dietaryPreference", allergies FROM profiles WHERE id = ${parseInt(profileIdParam, 10)}`;
        if (res && res.length > 0) profileData = res[0];
      }
      if (!profileData) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const defaultRes = await (db as any)`SELECT name, "dietaryPreference", allergies FROM profiles ORDER BY id ASC LIMIT 1`;
        if (defaultRes && defaultRes.length > 0) profileData = defaultRes[0];
      }
    } catch {
      // Fallback gracefully if profiles table is missing or DB connection is transient
    }

    const userDiet = profileData?.dietaryPreference || 'Any';
    const userAllergies = profileData?.allergies || '';
    const fridgeItemNames = items.map((i: { name: string }) => i.name);

    const formulatedRecipes = formulateSourashtraRecipesFromFridge(
      fridgeItemNames,
      userDiet,
      userAllergies,
      shuffleParam
    );

    return NextResponse.json({
      recipes: formulatedRecipes,
      totalCatalogCount: MADURAI_SOURASHTRA_RECIPES.length,
      isUsingSampleBasket,
      fridgeItemsUsed: fridgeItemNames,
      bhurkoGuide: MADURAI_SOURASHTRA_BHURKOS,
      pantryCatalog: PANTRY_ADDITIVES_CATALOG
    });
  } catch {
    const fallback = formulateSourashtraRecipesFromFridge(
      ['Tomato (Takkali)', 'Brinjal (Vangi)', 'Potato (Batata)', 'Onion (Kando)'],
      'Any',
      '',
      0
    );
    return NextResponse.json({
      recipes: fallback,
      totalCatalogCount: MADURAI_SOURASHTRA_RECIPES.length,
      isUsingSampleBasket: true,
      fridgeItemsUsed: ['Tomato (Takkali)', 'Brinjal (Vangi)', 'Potato (Batata)', 'Onion (Kando)'],
      bhurkoGuide: MADURAI_SOURASHTRA_BHURKOS
    });
  }
}
