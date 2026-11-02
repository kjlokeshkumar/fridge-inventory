import { MADURAI_SOURASHTRA_RECIPES, PANTRY_ADDITIVES_CATALOG } from '../src/lib/sourashtra-recipes.js';

const allIngredients = new Set();

for (const r of MADURAI_SOURASHTRA_RECIPES) {
  if (r.fridgeTriggers) {
    for (const t of r.fridgeTriggers) allIngredients.add(t);
  }
  if (r.pantryAdditives) {
    for (const p of r.pantryAdditives) allIngredients.add(p);
  }
}

for (const cat in PANTRY_ADDITIVES_CATALOG) {
  for (const item of PANTRY_ADDITIVES_CATALOG[cat]) {
    allIngredients.add(item);
  }
}

console.log('Total unique raw ingredients:', allIngredients.size);
console.log('All ingredients:');
console.log(Array.from(allIngredients).sort());
