import test from 'node:test';
import assert from 'node:assert/strict';
import { getIngredientImage, getRamekinStyle } from '../src/lib/produce-styles.ts';

test('boiled eggs are identified as egg/protein and never as oil/liquid', () => {
  const img = getIngredientImage('Boiled Eggs (Anda) - 4 pcs');
  assert.equal(img, '/images/ingredients/egg.jpg');

  const ramekin = getRamekinStyle('Boiled Eggs (Anda)');
  assert.equal(ramekin.category, 'fresh-produce');
  assert.equal(ramekin.categoryLabelEn, 'Protein');
  assert.equal(ramekin.icon, '🥚');
  assert.equal(ramekin.image, '/images/ingredients/egg.jpg');
});

test('boiled potatoes are identified as potato and never as oil', () => {
  const img = getIngredientImage('Boiled Potatoes');
  assert.equal(img, '/images/ingredients/potato.jpg');

  const ramekin = getRamekinStyle('Boiled Potatoes');
  assert.equal(ramekin.category, 'fresh-produce');
  assert.equal(ramekin.categoryLabelEn, 'Fresh Tuber');
});

test('oils and liquids are correctly matched when oil keyword is intentional', () => {
  assert.equal(getIngredientImage('Sesame Oil'), '/images/ingredients/sesame_oil.jpg');
  assert.equal(getIngredientImage('Cooking Oil'), '/images/ingredients/sesame_oil.jpg');
  assert.equal(getIngredientImage('Gingelly Oil'), '/images/ingredients/sesame_oil.jpg');

  const oilRamekin = getRamekinStyle('Sesame Oil');
  assert.equal(oilRamekin.category, 'liquid');
  assert.equal(oilRamekin.categoryLabelEn, 'Cooking Oil');
});

test('unmatched items fall back to beautiful standard svg graphics', () => {
  const fallbackProduce = getIngredientImage('Unusual Exotic Herb', 'Produce');
  assert.equal(fallbackProduce, '/images/ingredients/standard-produce.svg');

  const fallbackGeneral = getIngredientImage('Unknown Pantry Specimen');
  assert.equal(fallbackGeneral, '/images/ingredients/standard-ingredient.svg');
});
