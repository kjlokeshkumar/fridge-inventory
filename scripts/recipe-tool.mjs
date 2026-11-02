#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const recipesFilePath = path.join(rootDir, 'src', 'lib', 'sourashtra-recipes.ts');
const produceStylesPath = path.join(rootDir, 'src', 'lib', 'produce-styles.ts');

// Extract getIngredientImage function dynamically
function loadIngredientImageMatcher() {
  const code = fs.readFileSync(produceStylesPath, 'utf8');
  const startIdx = code.indexOf('export function getIngredientImage(');
  const endIdx = code.indexOf('export function getRamekinStyle(');
  const rawFnCode = code.slice(startIdx, endIdx);
  const jsCode = rawFnCode
    .replace('export function getIngredientImage', 'function getIngredientImage')
    .replace(/\(name:\s*string\):\s*string\s*\|\s*undefined/, '(name)');

  return new Function(jsCode + '\nreturn getIngredientImage;')();
}

const getIngredientImage = loadIngredientImageMatcher();

const RECIPE_CATEGORIES = [
  'Ounty & Kolkar (Tangy Gravies)',
  'Ambat & Pitla (Rich Curries)',
  'Budith, Losto & Polte (Chutneys/Masiyal)',
  'Pilchar & Charu (Rasam/Broths)',
  'Bhaath & Pongal (Rice Specialties)',
  'Sambar (Lentil Stews)',
  'Bhairi & Appam (Fritters & Tiffin)',
  'Non-Veg Ounty, Chaino & Kodhi'
];

function generateSlug(name) {
  return name
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function inferDietaryType(fridgeTriggers = [], pantryAdditives = []) {
  const all = [...fridgeTriggers, ...pantryAdditives].map((s) => s.toLowerCase());
  const nonVegKeywords = ['chicken', 'koli', 'kudi', 'mutton', 'goat', 'chaino', 'mansa', 'fish', 'meen', 'koddi'];
  const eggKeywords = ['egg', 'anda'];
  if (all.some((ing) => nonVegKeywords.some((kw) => ing.includes(kw)))) return 'Non-Veg';
  if (all.some((ing) => eggKeywords.some((kw) => ing.includes(kw)))) return 'Eggitarian';
  return 'Vegetarian';
}

function inferCategory(name, dietaryType) {
  const lower = name.toLowerCase();
  if (dietaryType === 'Non-Veg' || lower.includes('chaino') || lower.includes('meen') || lower.includes('koli')) {
    return 'Non-Veg Ounty, Chaino & Kodhi';
  }
  if (lower.includes('sambar')) return 'Sambar (Lentil Stews)';
  if (lower.includes('pilchar') || lower.includes('charu') || lower.includes('rasam')) return 'Pilchar & Charu (Rasam/Broths)';
  if (lower.includes('budith') || lower.includes('losto') || lower.includes('polte') || lower.includes('chutney')) return 'Budith, Losto & Polte (Chutneys/Masiyal)';
  if (lower.includes('bhaath') || lower.includes('pongal') || lower.includes('rice') || lower.includes('saadu')) return 'Bhaath & Pongal (Rice Specialties)';
  if (lower.includes('bhairi') || lower.includes('vadai') || lower.includes('appam') || lower.includes('phalar') || lower.includes('diido')) return 'Bhairi & Appam (Fritters & Tiffin)';
  if (lower.includes('ambat') || lower.includes('pitla') || lower.includes('kootu') || lower.includes('kurma')) return 'Ambat & Pitla (Rich Curries)';
  return 'Ounty & Kolkar (Tangy Gravies)';
}

function estimateCalories(items = []) {
  let total = 0;
  const breakdown = [];
  for (const item of items) {
    const lower = item.toLowerCase();
    let weight = 50;
    let cal = 40;
    if (lower.includes('mutton') || lower.includes('chicken')) { weight = 350; cal = 450; }
    else if (lower.includes('fish')) { weight = 300; cal = 340; }
    else if (lower.includes('oil') || lower.includes('ghee')) { weight = 25; cal = 220; }
    else if (lower.includes('dal') || lower.includes('gram')) { weight = 80; cal = 270; }
    else if (lower.includes('rice')) { weight = 150; cal = 520; }
    else if (lower.includes('cashew') || lower.includes('peanut')) { weight = 30; cal = 180; }
    else if (lower.includes('jaggery') || lower.includes('sugar')) { weight = 40; cal = 150; }
    else if (lower.includes('potato')) { weight = 200; cal = 154; }
    else if (lower.includes('coconut')) { weight = 100; cal = 354; }
    total += cal;
    breakdown.push({ name: item, weightGrams: weight, calories: cal });
  }
  return { totalCalories: total, breakdown };
}

function checkAssets(items = []) {
  const mapped = [];
  const unmapped = [];
  for (const item of items) {
    const clean = item.replace(/\(.*?\)/g, '').split('-')[0].trim();
    const img = getIngredientImage(clean);
    if (img) mapped.push({ item, img });
    else unmapped.push(item);
  }
  const total = items.length;
  const coveragePercent = total > 0 ? Math.round((mapped.length / total) * 100) : 100;
  return { mapped, unmapped, total, coveragePercent };
}

function validateRecipe(data) {
  const errors = [];
  if (!data.name || typeof data.name !== 'string' || !data.name.trim()) {
    errors.push('Recipe name is required');
  }
  const id = data.id || (data.name ? generateSlug(data.name) : '');
  if (!id) errors.push('ID is required');

  const fridgeTriggers = Array.isArray(data.fridgeTriggers) ? data.fridgeTriggers : [];
  const pantryAdditives = Array.isArray(data.pantryAdditives) ? data.pantryAdditives : [];
  const processSteps = Array.isArray(data.processSteps) ? data.processSteps : [];

  if (fridgeTriggers.length === 0 && pantryAdditives.length === 0) {
    errors.push('Recipe must have at least one ingredient');
  }
  if (processSteps.length === 0) {
    errors.push('Recipe must have at least one step');
  }

  const dietaryType = data.dietaryType || inferDietaryType(fridgeTriggers, pantryAdditives);
  const category = data.category || inferCategory(data.name, dietaryType);

  return {
    valid: errors.length === 0,
    errors,
    normalized: {
      id,
      name: data.name?.trim(),
      englishSubtitle: data.englishSubtitle || `${data.name} - Authentic Sourashtra Recipe`,
      sourceAttribution: data.sourceAttribution || 'Sourashtra Chef Heritage Kitchen',
      category,
      dietaryType,
      fridgeTriggers,
      pantryAdditives,
      bhurkoUsed: data.bhurkoUsed,
      processSteps,
      youtubeUrl: data.youtubeUrl || '',
      webUrl: data.webUrl || ''
    }
  };
}

function parseAllRecipesFromSource() {
  const content = fs.readFileSync(recipesFilePath, 'utf8');
  const ids = [...content.matchAll(/id:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  const names = [...content.matchAll(/name:\s*['"]([^'"]+)['"]/g)].map((m) => m[1]);
  return { total: ids.length, ids, names, content };
}

async function main() {
  const args = process.argv.slice(2);
  const cmd = args[0] || 'help';

  switch (cmd) {
    case 'stats': {
      const { total, names } = parseAllRecipesFromSource();
      console.log('\n📊 --- SOURASHTRA RECIPE TOOL STATS ---');
      console.log(`Total Curated Recipes in Library: ${total}`);
      console.log(`Ingredient Photo Matcher Loaded: 100% active`);
      console.log(`Sample Recipes: ${names.slice(0, 5).join(', ')}...`);
      console.log('');
      break;
    }

    case 'template': {
      const name = args[1] || 'Sample Authentic Dish';
      const template = {
        id: generateSlug(name),
        name,
        englishSubtitle: 'Authentic Traditional Recipe',
        sourceAttribution: 'Sourashtra Chef Heritage Kitchen',
        category: 'Ounty & Kolkar (Tangy Gravies)',
        dietaryType: 'Vegetarian',
        fridgeTriggers: ['Tomato', 'Onion', 'Curry Leaves'],
        pantryAdditives: ['Mustard Seeds', 'Turmeric Powder', 'Salt', 'Sesame Oil'],
        bhurkoUsed: 'Ounty Bhurko',
        processSteps: [
          'Heat oil in a kadai and splutter mustard seeds with curry leaves.',
          'Add chopped onions and sauté until tender.',
          'Add vegetables and spices, simmer until done, and serve warm.'
        ],
        youtubeUrl: '',
        webUrl: ''
      };
      const out = args[2] || path.join(rootDir, `${template.id}.json`);
      fs.writeFileSync(out, JSON.stringify(template, null, 2), 'utf8');
      console.log(`✅ Recipe template generated at: ${out}`);
      break;
    }

    case 'validate': {
      const file = args[1];
      if (!file || !fs.existsSync(file)) {
        console.error('❌ Provide a valid JSON recipe file.');
        process.exit(1);
      }
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      const val = validateRecipe(data);
      if (!val.valid) {
        console.error('❌ Validation Failed:\n' + val.errors.map((e) => `  - ${e}`).join('\n'));
        process.exit(1);
      }
      console.log('✅ Recipe is Valid!');
      console.log(`ID: ${val.normalized.id}`);
      console.log(`Category: ${val.normalized.category}`);
      console.log(`Dietary Type: ${val.normalized.dietaryType}`);

      const all = [...val.normalized.fridgeTriggers, ...val.normalized.pantryAdditives];
      const assets = checkAssets(all);
      console.log(`Asset Coverage: ${assets.coveragePercent}% (${assets.mapped.length}/${assets.total} ingredients mapped to real photos)`);
      if (assets.unmapped.length > 0) {
        console.log(`⚠️ Unmapped: ${assets.unmapped.join(', ')}`);
      }

      const cal = estimateCalories(all);
      console.log(`Estimated Calories: ~${cal.totalCalories} kcal`);
      break;
    }

    case 'add': {
      const file = args[1];
      if (!file || !fs.existsSync(file)) {
        console.error('❌ Provide a valid JSON recipe file.');
        process.exit(1);
      }
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      const val = validateRecipe(data);
      if (!val.valid) {
        console.error('❌ Validation Failed:\n' + val.errors.map((e) => `  - ${e}`).join('\n'));
        process.exit(1);
      }

      const r = val.normalized;
      const content = fs.readFileSync(recipesFilePath, 'utf8');

      if (content.includes(`id: '${r.id}'`) || content.includes(`id: "${r.id}"`)) {
        console.error(`❌ Recipe with ID "${r.id}" already exists in catalog.`);
        process.exit(1);
      }

      const marker = 'export const MADURAI_SOURASHTRA_RECIPES: SourashtraRecipeReference[] = [';
      const idx = content.indexOf(marker);
      if (idx === -1) {
        console.error('❌ Could not locate MADURAI_SOURASHTRA_RECIPES in source file.');
        process.exit(1);
      }

      const formatted = `\n  {
    id: ${JSON.stringify(r.id)},
    name: ${JSON.stringify(r.name)},
    englishSubtitle: ${JSON.stringify(r.englishSubtitle)},
    sourceAttribution: ${JSON.stringify(r.sourceAttribution)},
    category: ${JSON.stringify(r.category)},
    dietaryType: ${JSON.stringify(r.dietaryType)},
    fridgeTriggers: ${JSON.stringify(r.fridgeTriggers, null, 6).replace(/\n/g, '\n    ')},
    pantryAdditives: ${JSON.stringify(r.pantryAdditives, null, 6).replace(/\n/g, '\n    ')},
${r.bhurkoUsed ? `    bhurkoUsed: ${JSON.stringify(r.bhurkoUsed)},\n` : ''}${r.youtubeUrl ? `    youtubeUrl: ${JSON.stringify(r.youtubeUrl)},\n` : ''}${r.webUrl ? `    webUrl: ${JSON.stringify(r.webUrl)},\n` : ''}    processSteps: ${JSON.stringify(r.processSteps, null, 6).replace(/\n/g, '\n    ')}
  },`;

      const updated = content.slice(0, idx + marker.length) + formatted + content.slice(idx + marker.length);
      fs.writeFileSync(recipesFilePath, updated, 'utf8');
      console.log(`🎉 Successfully added recipe "${r.name}" (${r.id}) to catalog!`);
      break;
    }

    default:
      console.log(`
Sourashtra Recipe Tool:

Commands:
  node scripts/recipe-tool.mjs stats                 Show total recipes & library status
  node scripts/recipe-tool.mjs template <name> [out] Generate a ready-to-use recipe JSON template
  node scripts/recipe-tool.mjs validate <file.json>  Validate recipe schema, nutrition & photos
  node scripts/recipe-tool.mjs add <file.json>       Validate and add recipe directly to the catalog
`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
