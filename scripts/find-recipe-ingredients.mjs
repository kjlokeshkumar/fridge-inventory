import fs from 'fs';

const produceStylesSrc = fs.readFileSync('c:/Users/reksl/.gemini/antigravity/scratch/fridge-inventory/src/lib/produce-styles.ts', 'utf8');

const startIdx = produceStylesSrc.indexOf('export function getIngredientImage(');
const endIdx = produceStylesSrc.indexOf('export function getRamekinStyle(');
const rawFnCode = produceStylesSrc.slice(startIdx, endIdx);
const jsCode = rawFnCode
  .replace('export function getIngredientImage', 'function getIngredientImage')
  .replace(/\(name:\s*string\):\s*string\s*\|\s*undefined/, '(name)');

const getImg = new Function(jsCode + '\nreturn getIngredientImage;')();

const recipesSrc = fs.readFileSync('c:/Users/reksl/.gemini/antigravity/scratch/fridge-inventory/src/lib/sourashtra-recipes.ts', 'utf8');

// Parse pantry additives and fridge triggers specifically
const arrayRegex = /(?:fridgeTriggers|pantryAdditives|ingredients)\s*:\s*\[([\s\S]*?)\]/g;
let match;
const unmapped = new Map();
const mapped = new Map();

while ((match = arrayRegex.exec(recipesSrc)) !== null) {
  const block = match[1];
  const items = block.match(/['"][^'"]+['"]/g) || [];
  for (const item of items) {
    const raw = item.slice(1, -1).trim();
    // parse ingredient name like parseIngredientString
    let name = raw;
    const paren = raw.match(/^(.*?)\s*\([^)]+\)$/);
    if (paren) name = paren[1].trim();
    else {
      const dash = raw.match(/^(.*?)\s*-\s*/);
      if (dash) name = dash[1].trim();
    }

    const img = getImg(name);
    if (img) {
      mapped.set(name, img);
    } else {
      unmapped.set(name, (unmapped.get(name) || 0) + 1);
    }
  }
}

console.log('--- SPECIFIC RECIPE INGREDIENTS ---');
console.log('Total mapped unique ingredients:', mapped.size);
console.log('Total unmapped unique ingredients:', unmapped.size);
console.log('All unmapped:');
console.log(Array.from(unmapped.entries()).sort((a,b) => b[1] - a[1]));
