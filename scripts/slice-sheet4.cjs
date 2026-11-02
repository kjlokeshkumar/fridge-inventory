const path = require('path');
const sharp = require('c:/Users/reksl/.gemini/antigravity/scratch/fridge-inventory/node_modules/sharp');

const sheet4Path = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/south_indian_ingredients_3x3_grid_1793590336765.jpg';
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
  const xs = [70, 382, 694];
  const ys = [70, 382, 694];
  const size = 260;

  await extractGrid(sheet4Path, [
    'chicken', 'mutton', 'fish',
    'lemon', 'ghee', 'pepper',
    'fenugreek', 'moong_dal', 'jaggery'
  ], xs, ys, size);

  console.log('Sheet 4 extraction complete!');
}

run().catch(console.error);
