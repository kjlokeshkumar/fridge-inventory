import { chromium } from 'playwright';
import path from 'path';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 412, height: 915 },
    deviceScaleFactor: 2
  });

  const page = await context.newPage();

  // 1. Dev login
  await context.request.post('http://localhost:3000/api/auth', { data: { devLogin: true } });

  // 2. Visit landing page
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });

  // 3. Visit recipes page and switch to Recipes catalog tab
  await page.goto('http://localhost:3000/recipes', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const recipesTab = page.locator('.recipe-view-tab:has-text("Recipes")');
  if (await recipesTab.count() > 0) {
    await recipesTab.click();
    await page.waitForTimeout(800);
  }

  // Click a recipe card to view the mise-en-place platter
  const firstRecipeCard = page.locator('.recipe-card-clickable, .recipe-card').first();
  if (await firstRecipeCard.count() > 0) {
    await firstRecipeCard.click();
    await page.waitForSelector('.chef-ramekin-bowl', { timeout: 10000 });
    await page.waitForTimeout(800);

    // Click on a porcelain ramekin in the recipe platter to inspect!
    const ramekinBowl = page.locator('.chef-ramekin-bowl').first();
    if (await ramekinBowl.count() > 0) {
      await ramekinBowl.click();
      await page.waitForSelector('.ingredient-inspect-modal', { timeout: 5000 });
      await page.waitForTimeout(500);

      const inspectModalScreenshot = path.resolve('c:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/ingredient_inspection_modal.png');
      await page.screenshot({ path: inspectModalScreenshot, fullPage: true });
      console.log('Saved inspection modal screenshot to:', inspectModalScreenshot);
    }
  }

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
