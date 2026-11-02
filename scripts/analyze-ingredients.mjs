import fs from 'fs';

const content = fs.readFileSync('c:/Users/reksl/.gemini/antigravity/scratch/fridge-inventory/src/lib/sourashtra-recipes.ts', 'utf8');

const regex = /name:\s*['"]([^'"]+)['"]/g;
let match;
const freq = {};
while ((match = regex.exec(content)) !== null) {
  const name = match[1].trim();
  freq[name] = (freq[name] || 0) + 1;
}

const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]);
console.log('Total unique ingredient names:', sorted.length);
console.log('Top 40 ingredients:');
console.log(sorted.slice(0, 40));
