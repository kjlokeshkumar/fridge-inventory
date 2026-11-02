import { chromium } from 'playwright';
import path from 'path';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 412, height: 915 },
    deviceScaleFactor: 2
  });

  const page = await context.newPage();

  // 1. Authenticate via dev login
  console.log('Logging in via dev login...');
  const loginRes = await context.request.post('http://localhost:3000/api/auth', {
    data: { devLogin: true }
  });
  console.log('Login status:', loginRes.status());

  // 2. Open recipes page to pin the 7-day plan
  await page.goto('http://localhost:3000/recipes', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Pin & save the weekly plan so shopping list has items
  const pinBtn = page.locator('button:has-text("Pin & Save"), button:has-text("Save")').first();
  if (await pinBtn.count() > 0) {
    await pinBtn.click();
    await page.waitForTimeout(600);
  }

  // Open recipe modal for a recipe that uses cashews / spices (e.g. sweet pongal, kesari, or kurma)
  const recipeButtons = page.locator('.combo-recipe-btn');
  const count = await recipeButtons.count();
  console.log(`Found ${count} recipe buttons`);
  if (count > 0) {
    // Click recipe button
    await recipeButtons.first().click();
    await page.waitForTimeout(1200);

    const modalPath = path.resolve('c:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/recipe_modal_updated.png');
    await page.screenshot({ path: modalPath, fullPage: true });
    console.log('Saved recipe modal screenshot to:', modalPath);

    // Close modal
    const closeBtn = page.locator('.modal-close-btn, button:has-text("✕")').first();
    if (await closeBtn.count() > 0) {
      await closeBtn.click();
      await page.waitForTimeout(500);
    }
  }

  // 3. Open Shopping list
  await page.goto('http://localhost:3000/shopping-list', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  // Check off a couple of items to test interactive state
  const firstCheckbox = page.locator('.pantry-item-checkbox').first();
  if (await firstCheckbox.count() > 0) {
    await firstCheckbox.click();
    await page.waitForTimeout(400);
  }

  const shoppingPath = path.resolve('c:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/pantry_checklist_categorized.png');
  await page.screenshot({ path: shoppingPath, fullPage: true });
  console.log('Saved shopping list screenshot to:', shoppingPath);

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
