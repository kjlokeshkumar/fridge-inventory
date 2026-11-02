const path = require('path');
const sharp = require('c:/Users/reksl/.gemini/antigravity/scratch/fridge-inventory/node_modules/sharp');

const sheet1Path = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/mise_en_place_3x3_grid_1793590220607.jpg';
const sheet2Path = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/culinary_spices_grid_1793590226207.jpg';
const sheet3Path = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/pantry_ingredients_3x3_grid_1793590235482.jpg';

const outDir = 'c:/Users/reksl/.gemini/antigravity/scratch/fridge-inventory/public/images/ingredients';

async function extractGrid(imagePath, names, xs, ys, size) {
  const meta = await sharp(imagePath).metadata();
  console.log(`Processing ${path.basename(imagePath)}: ${meta.width}x${meta.height}`);

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

      console.log(`Extracted ${name}.jpg from (${left}, ${top}, ${size}x${size})`);
    }
  }
}

async function run() {
  // Let's inspect center positions:
  // 1024x1024:
  // Col centers usually: ~200, ~512, ~824
  // If size = 260, left = center - 130 -> [70, 382, 694]
  const xs = [70, 382, 694];
  const ys = [70, 382, 694];
  const size = 260;

  await extractGrid(sheet1Path, [
    'onion', 'capsicum', 'tomato',
    'potato', 'carrot', 'brinjal',
    'drumstick', 'beans', 'coconut'
  ], xs, ys, size);

  await extractGrid(sheet2Path, [
    'curry_leaves', 'coriander', 'garlic',
    'ginger', 'green_chilli', 'turmeric',
    'chilli_powder', 'sambar_powder', 'mustard_cumin'
  ], xs, ys, size);

  await extractGrid(sheet3Path, [
    'toor_dal', 'chana_dal', 'urad_dal',
    'rice', 'chickpeas', 'salt',
    'tamarind', 'sesame_oil', 'egg'
  ], xs, ys, size);

  console.log('Extraction complete!');
}

run().catch(console.error);
