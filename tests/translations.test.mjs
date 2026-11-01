import assert from 'node:assert/strict';
import test from 'node:test';
import {
  formatDateLabel,
  formatDayName,
  formatDishTitle,
  formatPairingNote,
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

test('translates dish titles and blueprint combos into authentic Tamil', () => {
  assert.equal(
    formatDishTitle('Soft Phalar (Steamed Idli) & Crispy Diido (Dosa)', 'Tamil'),
    'மென்மையான பலார் (இட்லி) & மொறுமொறு தீதோ (தோசை)'
  );
  assert.equal(
    formatDishTitle('Mudha Pongal (Velvety Milk & Ghee Ven Pongal)', 'Tamil'),
    'முத்தா பொங்கல் (நெய் வெண் பொங்கல்)'
  );
  assert.equal(
    formatDishTitle('Steamed Rice (Saadu) + Losan Kolkar (Whole Garlic & Sesame Oil Tamarind Gravy)', 'Tamil'),
    'சாதம் + லோசன் கொல்கார் (பூண்டு குழம்பு)'
  );
  assert.equal(
    formatDishTitle('Thakkali Ounty', 'Tamil'),
    'தக்காளி அவ்வுண்டி'
  );
});

test('translates pairing tradition notes and date labels into Tamil', () => {
  assert.ok(
    formatPairingNote('Classic Sourashtra morning tiffin—Ounty Bhurko thickened tomato gravy poured generously over hot Phalar (idli).', 'Tamil').includes('பாரம்பரிய சௌராஷ்டிர காலை உணவு')
  );
  assert.equal(formatDateLabel('Nov 1, 2026', 'Tamil'), 'நவ 1, 2026');
  assert.equal(formatDateLabel('Oct 31', 'Tamil'), 'அக் 31');
  assert.equal(formatDayName('Today (Sunday)', 'Tamil'), 'இன்று (ஞாயிறு)');
});
