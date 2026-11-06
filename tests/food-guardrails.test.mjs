import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isCulinaryFoodItem, sanitizeAndFilterFoodItems } from '../src/lib/food-guardrails.ts';
import { doesInventorySatisfyRecipeIngredient } from '../src/lib/weekly-shopping.ts';

test('Food Guardrails - Utensils & Cookware must be rejected', () => {
  const utensils = [
    { name: 'Steel Bowl', category: 'Other' },
    { name: 'Stainless Steel Vessel', category: 'Other' },
    { name: 'Pressure Cooker', category: 'Other' },
    { name: 'Frying Pan', category: 'Other' },
    { name: 'Plastic Container', category: 'Other' },
    { name: 'Tupperware Box', category: 'Other' },
    { name: 'Glass Plate', category: 'Other' },
    { name: 'Water Bottle', category: 'Other' },
    { name: 'Serving Spoon', category: 'Other' },
    { name: 'Fridge Shelf', category: 'Other' },
    { name: 'Tiffin Box', category: 'Other' },
  ];

  for (const utensil of utensils) {
    assert.strictEqual(
      isCulinaryFoodItem(utensil),
      false,
      `Expected utensil "${utensil.name}" to be rejected as food`
    );
  }
});

test('Food Guardrails - Allowlisted compound foods are safely preserved', () => {
  const validFoods = [
    { name: 'Bottle Gourd', category: 'Produce' },
    { name: 'Potato', category: 'Produce' },
    { name: 'Potatoes', category: 'Produce' },
    { name: 'Sweet Potato', category: 'Produce' },
    { name: 'Pot Roast', category: 'Meat' },
    { name: 'Paneer', category: 'Dairy' },
    { name: 'Pancakes', category: 'Pantry' },
    { name: 'Fresh Tomato', category: 'Produce' },
    { name: 'Brinjal', category: 'Produce' },
    { name: 'Idli / Dosa Batter', category: 'Pantry' },
    { name: 'Curd / Yogurt', category: 'Dairy' },
  ];

  for (const food of validFoods) {
    assert.strictEqual(
      isCulinaryFoodItem(food),
      true,
      `Expected valid food "${food.name}" to be accepted`
    );
  }
});

test('Food Guardrails - Non-food abuse and household objects are rejected', () => {
  const nonFoods = [
    { name: 'Human Face', category: 'Other' },
    { name: 'Pet Dog', category: 'Other' },
    { name: 'Leather Shoe', category: 'Other' },
    { name: 'iPhone', category: 'Other' },
    { name: 'Washing Soap', category: 'Other' },
    { name: 'Grocery Receipt', category: 'Other' },
    { name: 'Wooden Chair', category: 'Other' },
  ];

  for (const item of nonFoods) {
    assert.strictEqual(
      isCulinaryFoodItem(item),
      false,
      `Expected non-food "${item.name}" to be rejected`
    );
  }
});

test('Food Guardrails - sanitizeAndFilterFoodItems cleans and filters candidate lists', () => {
  const mixedInput = [
    { name: 'Tomato', category: 'Produce', quantity: 2 },
    { name: 'Stainless Steel Bowl', category: 'Cookware', quantity: 1 },
    { name: 'Tupperware Dabba', category: 'Container', quantity: 1 },
    { name: 'Bottle Gourd', category: 'Produce', quantity: 1 },
    { name: 'Idli / Dosa Batter', category: 'Pantry', quantity: 1 },
    { name: 'Kitchen Towel', category: 'Other', quantity: 1 },
  ];

  const filtered = sanitizeAndFilterFoodItems(mixedInput);
  const names = filtered.map((i) => i.name);

  assert.deepStrictEqual(names, ['Tomato', 'Bottle Gourd', 'Idli / Dosa Batter']);
});

test('Ingredient Equivalences - Unlabeled preps reconcile with recipe needs', () => {
  const fridgeWithBatter = ['Idli / Dosa Batter', 'Tomato'];
  assert.strictEqual(
    doesInventorySatisfyRecipeIngredient('Dosa Batter', fridgeWithBatter),
    true,
    'Expected "Idli / Dosa Batter" in fridge to satisfy recipe requirement for "Dosa Batter"'
  );
  assert.strictEqual(
    doesInventorySatisfyRecipeIngredient('Batter', fridgeWithBatter),
    true,
    'Expected "Idli / Dosa Batter" in fridge to satisfy recipe requirement for "Batter"'
  );

  const fridgeWithCurd = ['Curd / Yogurt (Dheim)'];
  assert.strictEqual(
    doesInventorySatisfyRecipeIngredient('Curd', fridgeWithCurd),
    true,
    'Expected "Curd / Yogurt (Dheim)" to satisfy "Curd"'
  );
  assert.strictEqual(
    doesInventorySatisfyRecipeIngredient('Buttermilk', fridgeWithCurd),
    true,
    'Expected "Curd / Yogurt (Dheim)" to satisfy "Buttermilk"'
  );

  const fridgeWithGG = ['Ginger Garlic Paste'];
  assert.strictEqual(
    doesInventorySatisfyRecipeIngredient('Fresh Ginger', fridgeWithGG),
    true,
    'Expected "Ginger Garlic Paste" to satisfy "Fresh Ginger"'
  );
  assert.strictEqual(
    doesInventorySatisfyRecipeIngredient('Garlic Cloves', fridgeWithGG),
    true,
    'Expected "Ginger Garlic Paste" to satisfy "Garlic Cloves"'
  );
});
