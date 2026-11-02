import path from 'path';
import sharp from 'c:/Users/reksl/.gemini/antigravity/scratch/fridge-inventory/node_modules/sharp/lib/index.js';

const sheet1Path = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/mise_en_place_3x3_grid_1793590220607.jpg';
const sheet2Path = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/culinary_spices_grid_1793590226207.jpg';
const sheet3Path = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/pantry_ingredients_3x3_grid_1793590235482.jpg';

const outDir = 'c:/Users/reksl/.gemini/antigravity/scratch/fridge-inventory/public/images/ingredients';

// In 1024x1024 with 3x3 grid, let's calculate the bounding boxes of the 9 circular bowls
// Typical 3x3 grid:
// Col 0 center ~ 180-200, Col 1 center ~ 512, Col 2 center ~ 820-840
// Row 0 center ~ 180-200, Row 1 center ~ 512, Row 2 center ~ 820-840
// Bowl radius is approx 110-130px (size ~ 240x240)
async function extractGrid(imagePath, names) {
  const meta = await sharp(imagePath).metadata();
  console.log(`Processing ${path.basename(imagePath)}: ${meta.width}x${meta.height}`);

  // Let's sample a few crop offsets
  // For 1024x1024:
  // Cell bounds:
  const xs = [60, 380, 700];
  const ys = [60, 380, 700];
  const size = 265; // crop box

  let idx = 0;
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const name = names[idx++];
      if (!name) continue;
      const left = Math.round(xs[c]);
      const top = Math.round(ys[r]);
      const targetFile = path.join(outDir, `${name}.jpg`);

      await sharp(imagePath)
        .extract({ left, top, width: size, height: size })
        .resize(300, 300)
        .jpeg({ quality: 90 })
        .toFile(targetFile);

      console.log(`Extracted ${name}.jpg from (${left}, ${top})`);
    }
  }
}

async function run() {
  await extractGrid(sheet1Path, [
    'onion', 'capsicum', 'tomato',
    'potato', 'carrot', 'brinjal',
    'drumstick', 'beans', 'coconut'
  ]);

  await extractGrid(sheet2Path, [
    'curry_leaves', 'coriander', 'garlic',
    'ginger', 'green_chilli', 'turmeric',
    'chilli_powder', 'sambar_powder', 'mustard_cumin'
  ]);

  await extractGrid(sheet3Path, [
    'toor_dal', 'chana_dal', 'urad_dal',
    'rice', 'chickpeas', 'salt',
    'tamarind', 'sesame_oil', 'egg'
  ]);

  console.log('Extraction complete!');
}

run().catch(console.error);
