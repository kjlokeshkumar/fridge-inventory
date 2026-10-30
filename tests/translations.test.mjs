import assert from 'node:assert/strict';
import test from 'node:test';
import {
  toTamilCategory,
  toTamilDayName,
  toTamilItemName,
  UI_TRANSLATIONS,
} from '../src/lib/translations.ts';

test('Tamil UI copy includes translated navigation and planner labels', () => {
  assert.equal(UI_TRANSLATIONS.Tamil.navRecipes, 'சமையல் குறிப்புகள்');
  assert.equal(UI_TRANSLATIONS.Tamil.plannerTab, '7 நாள் திட்டம்');
});

test('translates known food names and leaves unsupported names intact', () => {
  assert.equal(toTamilItemName('Tortilla Chips'), 'டார்ட்டில்லா சிப்ஸ்');
  assert.equal(toTamilItemName('Green Chilli'), 'பச்சை மிளகாய்');
  assert.equal(toTamilItemName('Green Chilli & Curry Leaves'), 'பச்சை மிளகாய் & கறிவேப்பிலை');
  assert.equal(toTamilItemName('Tomato (Takkali)'), 'தக்காளி');
  assert.equal(toTamilItemName('Dragon Fruit'), 'Dragon Fruit');
});

test('translates inventory categories and planner weekdays', () => {
  assert.equal(toTamilCategory('Produce'), 'காய்கறி மற்றும் பழங்கள்');
  assert.equal(toTamilDayName('Today (Friday)'), 'இன்று (வெள்ளி)');
  assert.equal(toTamilDayName('Monday'), 'திங்கள்');
});
