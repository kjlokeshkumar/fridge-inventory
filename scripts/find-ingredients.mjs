import fs from 'fs';

const content = fs.readFileSync('src/lib/sourashtra-recipes.ts', 'utf8');
const fridgeMatches = content.match(/fridgeTriggers:\s*\[([^\]]+)\]/g) || [];
const pantryMatches = content.match(/pantryAdditives:\s*\[([^\]]+)\]/g) || [];

const items = new Set();
function addMatches(matches, isPantry) {
  matches.forEach(m => {
    const raw = m.substring(m.indexOf('[') + 1, m.lastIndexOf(']'));
    raw.split(',').forEach(part => {
      let clean = part.replace(/['"`]/g, '').trim();
      // clean quantities like (2 tbsp)
      clean = clean.replace(/\s*\([^)]*\)/g, '').replace(/-\s*[0-9].*$/, '').trim();
      if (clean && clean.length > 1 && !clean.startsWith('//')) {
        items.add(clean);
      }
    });
  });
}

addMatches(fridgeMatches, false);
addMatches(pantryMatches, true);

console.log('Total unique ingredient names:', items.size);
console.log(JSON.stringify(Array.from(items).sort(), null, 2));
