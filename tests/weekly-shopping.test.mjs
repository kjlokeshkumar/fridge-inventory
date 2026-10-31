import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateWeeklyShopping } from '../src/lib/weekly-shopping.ts';

test('finds planned ingredients absent from inventory and lists the days needed', () => {
  const analysis = calculateWeeklyShopping(
    [{
      dayName: 'Monday',
      breakfast: {
        primaryRecipe: {
          fridgeIngredientsUsed: ['Tomato - 200g'],
          missingIngredients: ['Onion (Fresh from Fridge)'],
          pantryAdditives: ['Salt (1 tsp)']
        }
      },
      lunch: {
        primaryRecipe: {
          missingIngredients: ['Onion - 1 piece', 'Potato - 2 pieces']
        }
      }
    }],
    ['Tomato (Takkali)']
  );

  assert.deepEqual(analysis.toPurchase, [
    { item: 'Onion', quantity: undefined },
    { item: 'Potato', quantity: '2 pcs' }
  ]);
  assert.deepEqual(analysis.alreadyInFridge, ['Tomato']);
  assert.deepEqual(analysis.pantryChecklist, ['Salt']);
});

test('empty plans produce no plan-based shopping items', () => {
  assert.deepEqual(calculateWeeklyShopping([], ['Tomato']), {
    toPurchase: [],
    alreadyInFridge: [],
    pantryChecklist: []
  });
});

test('does not confuse one item in a combined ingredient with the other', () => {
  const analysis = calculateWeeklyShopping(
    [{
      dayName: 'Tuesday',
      breakfast: {
        primaryRecipe: {
          missingIngredients: ['Green Chilli & Curry Leaves']
        }
      }
    }],
    ['Green Chilli']
  );

  assert.deepEqual(analysis.toPurchase, [{ item: 'Curry Leaves', quantity: undefined }]);
});

test('does not match egg with eggplant by substring', () => {
  const analysis = calculateWeeklyShopping(
    [{
      dayName: 'Wednesday',
      lunch: {
        primaryRecipe: {
          missingIngredients: ['Egg']
        }
      }
    }],
    ['Eggplant']
  );

  assert.deepEqual(analysis.toPurchase, [{ item: 'Egg', quantity: undefined }]);
});

test('adds ingredient quantities across repeated plan meals', () => {
  const analysis = calculateWeeklyShopping(
    [
      {
        dayName: 'Monday',
        breakfast: {
          primaryRecipe: {
            missingIngredients: ['Tomato (Takkali) - 200g', 'Onion - 150g']
          }
        }
      },
      {
        dayName: 'Tuesday',
        lunch: {
          primaryRecipe: {
            missingIngredients: ['Tomato (Takkali) - 200g', 'Onion - 150g']
          }
        }
      }
    ],
    []
  );

  assert.deepEqual(analysis.toPurchase, [
    { item: 'Tomato (Takkali)', quantity: '400 g' },
    { item: 'Onion', quantity: '300 g' }
  ]);
});

test('formats a clear seven-day share list without fake checkboxes or day clutter', async () => {
  const { formatWeeklyShoppingShareText } = await import('../src/lib/weekly-shopping.ts');

  assert.equal(
    formatWeeklyShoppingShareText(
      '7-Day Meal Plan Shopping List',
      [{ item: 'Tomato', quantity: '400 g' }],
      'quantity not specified'
    ),
    '🛒 7-Day Meal Plan Shopping List\n• Tomato — 400 g'
  );
  assert.equal(formatWeeklyShoppingShareText('List', [], 'unknown'), '');
});
