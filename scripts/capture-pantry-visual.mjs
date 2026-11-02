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

  // 3. Open Shopping list
  await page.goto('http://localhost:3000/shopping-list', { waitUntil: 'networkidle' });
  await page.waitForSelector('.pantry-check-panel', { timeout: 15000 });
  await page.waitForTimeout(1000);

  const shoppingPath = path.resolve('c:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/pantry_checklist_categorized.png');
  await page.screenshot({ path: shoppingPath, fullPage: true });
  console.log('Saved shopping list screenshot to:', shoppingPath);

  await browser.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
