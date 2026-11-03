import fs from 'fs';
import path from 'path';
import { type SourashtraRecipeReference } from './sourashtra-recipes';
import { getIngredientImage } from './produce-styles';

export const RECIPE_CATEGORIES = [
  'Ounty & Kolkar (Tangy Gravies)',
  'Ambat & Pitla (Rich Curries)',
  'Budith, Losto & Polte (Chutneys/Masiyal)',
  'Pilchar & Charu (Rasam/Broths)',
  'Bhaath & Pongal (Rice Specialties)',
  'Sambar (Lentil Stews)',
  'Bhairi & Appam (Fritters & Tiffin)',
  'Non-Veg Ounty, Chaino & Kodhi'
] as const;

export type RecipeCategory = typeof RECIPE_CATEGORIES[number];

export const DIETARY_TYPES = ['Vegetarian', 'Eggitarian', 'Non-Veg'] as const;
export type DietaryType = typeof DIETARY_TYPES[number];

export interface RecipeValidationResult {
  valid: boolean;
  errors: string[];
  warnings: string[];
  normalizedRecipe?: SourashtraRecipeReference;
}

export interface IngredientAssetReport {
  ready: boolean;
  totalIngredients: number;
  mappedCount: number;
  unmappedCount: number;
  mapped: { name: string; image: string }[];
  unmapped: string[];
  coveragePercent: number;
}

export interface NutritionIngredient {
  name: string;
  weightGrams: number;
  calories: number;
}

export interface NutritionReport {
  totalCalories: number;
  ingredientsBreakdown: NutritionIngredient[];
}

/**
 * Generates a clean URL/catalog slug from recipe name
 */
export function generateRecipeSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Automatically infers dietary type from ingredients
 */
export function inferDietaryType(fridgeTriggers: string[], pantryAdditives: string[]): DietaryType {
  const all = [...fridgeTriggers, ...pantryAdditives].map((s) => s.toLowerCase());
  const nonVegKeywords = ['chicken', 'koli', 'kudi', 'mutton', 'goat', 'chaino', 'mansa', 'fish', 'meen', 'koddi', 'prawn', 'shrimp', 'crab'];
  const eggKeywords = ['egg', 'anda', 'muttai'];

  if (all.some((ing) => nonVegKeywords.some((kw) => ing.includes(kw)))) {
    return 'Non-Veg';
  }
  if (all.some((ing) => eggKeywords.some((kw) => ing.includes(kw)))) {
    return 'Eggitarian';
  }
  return 'Vegetarian';
}

/**
 * Automatically infers category from recipe name and ingredients
 */
export function inferRecipeCategory(name: string, dietaryType: DietaryType): RecipeCategory {
  const lower = name.toLowerCase();
  if (dietaryType === 'Non-Veg' || lower.includes('chaino') || lower.includes('meen') || lower.includes('koli')) {
    return 'Non-Veg Ounty, Chaino & Kodhi';
  }
  if (lower.includes('sambar')) {
    return 'Sambar (Lentil Stews)';
  }
  if (lower.includes('pilchar') || lower.includes('charu') || lower.includes('rasam')) {
    return 'Pilchar & Charu (Rasam/Broths)';
  }
  if (lower.includes('budith') || lower.includes('losto') || lower.includes('polte') || lower.includes('chutney') || lower.includes('thuvaiyal')) {
    return 'Budith, Losto & Polte (Chutneys/Masiyal)';
  }
  if (lower.includes('bhaath') || lower.includes('pongal') || lower.includes('rice') || lower.includes('saadu') || lower.includes('kichdi') || lower.includes('pulao')) {
    return 'Bhaath & Pongal (Rice Specialties)';
  }
  if (lower.includes('bhairi') || lower.includes('vadai') || lower.includes('appam') || lower.includes('phalar') || lower.includes('idli') || lower.includes('diido') || lower.includes('dosa') || lower.includes('poori') || lower.includes('roti')) {
    return 'Bhairi & Appam (Fritters & Tiffin)';
  }
  if (lower.includes('ambat') || lower.includes('pitla') || lower.includes('kootu') || lower.includes('kurma')) {
    return 'Ambat & Pitla (Rich Curries)';
  }
  return 'Ounty & Kolkar (Tangy Gravies)';
}

/**
 * Estimates nutritional calorie values for recipe ingredients
 */
export function calculateRecipeNutrition(recipe: Partial<SourashtraRecipeReference>): NutritionReport {
  const ingredientsBreakdown: NutritionIngredient[] = [];

  const estimateAdditive = (additive: string): NutritionIngredient => {
    const lower = additive.toLowerCase();
    if (lower.includes('oil') || lower.includes('ghee')) {
      return { name: additive, weightGrams: 25, calories: 220 };
    }
    if (lower.includes('dal') || lower.includes('gram') || lower.includes('chickpea') || lower.includes('besan')) {
      return { name: additive, weightGrams: 80, calories: 270 };
    }
    if (lower.includes('rice') || lower.includes('saadu')) {
      return { name: additive, weightGrams: 150, calories: 520 };
    }
    if (lower.includes('cashew') || lower.includes('peanut') || lower.includes('poppy')) {
      return { name: additive, weightGrams: 30, calories: 180 };
    }
    if (lower.includes('jaggery') || lower.includes('sugar')) {
      return { name: additive, weightGrams: 40, calories: 150 };
    }
    if (lower.includes('tamarind')) {
      return { name: additive, weightGrams: 25, calories: 60 };
    }
    if (lower.includes('bhurko')) {
      return { name: additive, weightGrams: 20, calories: 65 };
    }
    return { name: additive, weightGrams: 10, calories: 20 };
  };

  const estimateFridge = (item: string): NutritionIngredient => {
    const lower = item.toLowerCase();
    if (lower.includes('mutton') || lower.includes('chaino')) {
      return { name: item, weightGrams: 350, calories: 510 };
    }
    if (lower.includes('chicken') || lower.includes('koli')) {
      return { name: item, weightGrams: 350, calories: 420 };
    }
    if (lower.includes('fish') || lower.includes('meen')) {
      return { name: item, weightGrams: 300, calories: 340 };
    }
    if (lower.includes('egg') || lower.includes('anda')) {
      return { name: item, weightGrams: 200, calories: 280 };
    }
    if (lower.includes('potato') || lower.includes('batata')) {
      return { name: item, weightGrams: 200, calories: 154 };
    }
    if (lower.includes('coconut')) {
      return { name: item, weightGrams: 100, calories: 354 };
    }
    if (lower.includes('brinjal') || lower.includes('vangi')) {
      return { name: item, weightGrams: 250, calories: 62 };
    }
    if (lower.includes('tomato')) {
      return { name: item, weightGrams: 200, calories: 36 };
    }
    if (lower.includes('onion')) {
      return { name: item, weightGrams: 150, calories: 60 };
    }
    return { name: item, weightGrams: 100, calories: 45 };
  };

  for (const item of recipe.fridgeTriggers || []) {
    ingredientsBreakdown.push(estimateFridge(item));
  }
  for (const item of recipe.pantryAdditives || []) {
    if (
      !item ||
      item.toLowerCase().startsWith('channel ingredient note:') ||
      item.toLowerCase().startsWith('note:')
    ) {
      continue;
    }
    ingredientsBreakdown.push(estimateAdditive(item));
  }

  const totalCalories = ingredientsBreakdown.reduce((sum, ing) => sum + ing.calories, 0);
  return { totalCalories, ingredientsBreakdown };
}

/**
 * Checks if all recipe ingredients have real porcelain ramekin photos
 */
export function checkRecipeIngredientAssets(recipe: Partial<SourashtraRecipeReference>): IngredientAssetReport {
  const allIngredients = [
    ...(recipe.fridgeTriggers || []),
    ...(recipe.pantryAdditives || [])
  ];

  const mapped: { name: string; image: string }[] = [];
  const unmapped: string[] = [];

  for (const ing of allIngredients) {
    const cleanName = ing.replace(/\(.*?\)/g, '').split('-')[0].trim();
    const image = getIngredientImage(cleanName);
    if (image) {
      mapped.push({ name: ing, image });
    } else {
      unmapped.push(ing);
    }
  }

  const total = allIngredients.length;
  const coveragePercent = total > 0 ? Math.round((mapped.length / total) * 100) : 100;

  return {
    ready: unmapped.length === 0,
    totalIngredients: total,
    mappedCount: mapped.length,
    unmappedCount: unmapped.length,
    mapped,
    unmapped,
    coveragePercent
  };
}

/**
 * Validates and normalizes an input recipe
 */
export function validateRecipe(input: Partial<SourashtraRecipeReference>): RecipeValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!input.name || !input.name.trim()) {
    errors.push('Recipe name is required');
  }

  const id = input.id?.trim() || (input.name ? generateRecipeSlug(input.name) : '');
  if (!id) {
    errors.push('Could not generate or find a recipe ID');
  }

  const fridgeTriggers = Array.isArray(input.fridgeTriggers) ? input.fridgeTriggers.filter(Boolean) : [];
  const pantryAdditives = Array.isArray(input.pantryAdditives) ? input.pantryAdditives.filter(Boolean) : [];
  const processSteps = Array.isArray(input.processSteps) ? input.processSteps.filter(Boolean) : [];

  if (fridgeTriggers.length === 0 && pantryAdditives.length === 0) {
    errors.push('Recipe must have at least one fridgeTrigger or pantryAdditive');
  }

  if (processSteps.length === 0) {
    errors.push('Recipe must contain at least one step in processSteps');
  }

  const dietaryType: DietaryType = input.dietaryType && (DIETARY_TYPES as readonly string[]).includes(input.dietaryType)
    ? input.dietaryType as DietaryType
    : inferDietaryType(fridgeTriggers, pantryAdditives);

  const category: RecipeCategory = input.category && (RECIPE_CATEGORIES as readonly string[]).includes(input.category)
    ? input.category as RecipeCategory
    : inferRecipeCategory(input.name || '', dietaryType);

  // Asset validation check
  const assetReport = checkRecipeIngredientAssets({ fridgeTriggers, pantryAdditives });
  if (assetReport.unmappedCount > 0) {
    warnings.push(`Unmapped ingredient images: ${assetReport.unmapped.join(', ')} (coverage: ${assetReport.coveragePercent}%)`);
  }

  if (errors.length > 0) {
    return { valid: false, errors, warnings };
  }

  const normalizedRecipe: SourashtraRecipeReference = {
    id,
    name: input.name!.trim(),
    englishSubtitle: input.englishSubtitle?.trim() || `${input.name} - Authentic Sourashtra Preparation`,
    sourceAttribution: input.sourceAttribution?.trim() || 'Sourashtra Chef Heritage Kitchen',
    category,
    dietaryType,
    fridgeTriggers,
    pantryAdditives,
    processSteps,
    bhurkoUsed: input.bhurkoUsed?.trim(),
    youtubeUrl: input.youtubeUrl?.trim(),
    webUrl: input.webUrl?.trim()
  };

  return {
    valid: true,
    errors: [],
    warnings,
    normalizedRecipe
  };
}

/**
 * Creates an empty starter recipe template
 */
export function createRecipeTemplate(name = 'New Sourashtra Recipe'): SourashtraRecipeReference {
  const id = generateRecipeSlug(name);
  return {
    id,
    name,
    englishSubtitle: 'Authentic Sourashtra Recipe',
    sourceAttribution: 'Sourashtra Heritage Kitchen',
    category: 'Ounty & Kolkar (Tangy Gravies)',
    dietaryType: 'Vegetarian',
    fridgeTriggers: ['Tomato', 'Onion', 'Curry Leaves'],
    pantryAdditives: ['Mustard Seeds', 'Turmeric Powder', 'Salt', 'Sesame Oil'],
    bhurkoUsed: 'Ounty Bhurko',
    processSteps: [
      'Heat oil in a heavy-bottomed kadai and splutter mustard seeds and curry leaves.',
      'Sauté sliced onions until golden, then add fresh chopped vegetables and spices.',
      'Add water, simmer until tender, and garnish with fresh herbs before serving.'
    ],
    youtubeUrl: '',
    webUrl: ''
  };
}

/**
 * Formats a TypeScript recipe definition code string
 */
export function formatRecipeAsTypeScript(recipe: SourashtraRecipeReference): string {
  return `  {
    id: ${JSON.stringify(recipe.id)},
    name: ${JSON.stringify(recipe.name)},
    englishSubtitle: ${JSON.stringify(recipe.englishSubtitle)},
    sourceAttribution: ${JSON.stringify(recipe.sourceAttribution)},
    category: ${JSON.stringify(recipe.category)},
    dietaryType: ${JSON.stringify(recipe.dietaryType)},
    fridgeTriggers: ${JSON.stringify(recipe.fridgeTriggers, null, 6).replace(/\n/g, '\n    ')},
    pantryAdditives: ${JSON.stringify(recipe.pantryAdditives, null, 6).replace(/\n/g, '\n    ')},
${recipe.bhurkoUsed ? `    bhurkoUsed: ${JSON.stringify(recipe.bhurkoUsed)},\n` : ''}${recipe.youtubeUrl ? `    youtubeUrl: ${JSON.stringify(recipe.youtubeUrl)},\n` : ''}${recipe.webUrl ? `    webUrl: ${JSON.stringify(recipe.webUrl)},\n` : ''}    processSteps: ${JSON.stringify(recipe.processSteps, null, 6).replace(/\n/g, '\n    ')}
  }`;
}

/**
 * Appends a verified recipe directly into src/lib/sourashtra-recipes.ts
 */
export async function appendRecipeToCatalog(recipeInput: Partial<SourashtraRecipeReference>): Promise<{ success: boolean; id: string; error?: string }> {
  const validation = validateRecipe(recipeInput);
  if (!validation.valid || !validation.normalizedRecipe) {
    return { success: false, id: '', error: validation.errors.join('; ') };
  }

  const recipe = validation.normalizedRecipe;
  const filePath = path.resolve(process.cwd(), 'src/lib/sourashtra-recipes.ts');
  if (!fs.existsSync(filePath)) {
    return { success: false, id: recipe.id, error: `Could not find recipe file at ${filePath}` };
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Check for duplicate ID
  if (content.includes(`id: '${recipe.id}'`) || content.includes(`id: "${recipe.id}"`)) {
    return { success: false, id: recipe.id, error: `A recipe with id "${recipe.id}" already exists.` };
  }

  const targetMarker = 'export const MADURAI_SOURASHTRA_RECIPES: SourashtraRecipeReference[] = [';
  const markerIndex = content.indexOf(targetMarker);
  if (markerIndex === -1) {
    return { success: false, id: recipe.id, error: 'Could not find MADURAI_SOURASHTRA_RECIPES array.' };
  }

  const insertPos = markerIndex + targetMarker.length;
  const formattedCode = `\n${formatRecipeAsTypeScript(recipe)},`;
  const updatedContent = content.slice(0, insertPos) + formattedCode + content.slice(insertPos);

  fs.writeFileSync(filePath, updatedContent, 'utf8');
  return { success: true, id: recipe.id };
}
