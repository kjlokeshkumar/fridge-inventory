import fs from 'fs';

const produceStylesSrc = fs.readFileSync('c:/Users/reksl/.gemini/antigravity/scratch/fridge-inventory/src/lib/produce-styles.ts', 'utf8');

// Extract getIngredientImage implementation
const startIdx = produceStylesSrc.indexOf('export function getIngredientImage(');
const endIdx = produceStylesSrc.indexOf('export function getRamekinStyle(');
const rawFnCode = produceStylesSrc.slice(startIdx, endIdx);
const jsCode = rawFnCode
  .replace('export function getIngredientImage', 'function getIngredientImage')
  .replace(/\(name:\s*string\):\s*string\s*\|\s*undefined/, '(name)');

const getImg = new Function(jsCode + '\nreturn getIngredientImage;')();

const recipesSrc = fs.readFileSync('c:/Users/reksl/.gemini/antigravity/scratch/fridge-inventory/src/lib/sourashtra-recipes.ts', 'utf8');

// Find all items in arrays in sourashtra-recipes.ts
const unmapped = new Map();
const mapped = new Map();

// Match quoted strings
const strMatches = recipesSrc.match(/['"][^'"]+['"]/g) || [];

for (const raw of strMatches) {
  const str = raw.slice(1, -1).trim();
  // Filter out URLs, IDs, descriptions, long text
  if (str.length < 2 || str.length > 50 || str.startsWith('http') || str.startsWith('/')) continue;
  if (str.includes('youtube') || str.includes('Recipe') || str.includes('Channel') || str.includes('Gather')) continue;
  
  // Clean string like parseIngredientString does
  const cleanName = str.replace(/\s*\([^)]*\)/g, '').replace(/\s*-\s*.*$/, '').trim();
  if (cleanName.length < 2) continue;

  const img = getImg(cleanName);
  if (img) {
    mapped.set(cleanName, img);
  } else {
    // Only record potential ingredients
    unmapped.set(cleanName, (unmapped.get(cleanName) || 0) + 1);
  }
}

console.log('Mapped ingredients count:', mapped.size);
console.log('Unmapped candidates count:', unmapped.size);

// Print unmapped that appear more than once or look like food
const candidates = Array.from(unmapped.entries())
  .filter(([name]) => !name.includes(' ') || name.split(' ').length <= 4)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 40);

console.log('Top unmapped candidates:');
console.log(candidates);
