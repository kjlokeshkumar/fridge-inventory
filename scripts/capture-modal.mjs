import { chromium } from 'playwright';

async function captureRecipeModal() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 412, height: 915 },
    deviceScaleFactor: 2.625
  });

  const page = await context.newPage();
  
  await context.addCookies([
    {
      name: 'auth_session',
      value: JSON.stringify({
        id: 8,
        username: 'dev_user',
        email: 'dev@localhost',
        displayName: 'Developer (Local)',
        status: 'active',
        role: 'admin'
      }),
      domain: 'localhost',
      path: '/'
    }
  ]);

  await page.goto('http://localhost:3000/recipes', { waitUntil: 'networkidle' });

  const viewRecipeBtn = page.locator('button:has-text("View Recipe"), .btn-view-recipe, button.btn-primary:has-text("Recipe")').first();
  if (await viewRecipeBtn.isVisible()) {
    await viewRecipeBtn.click();
  }

  await page.waitForTimeout(1000);
  await page.waitForSelector('.ramekin-mise-en-place-board', { timeout: 5000 });

  // Scroll down within the modal so the platter and nutrition table are centered
  await page.evaluate(() => {
    const backdrop = document.querySelector('.planner-recipe-modal-backdrop');
    if (backdrop) {
      backdrop.scrollTop = 420;
    }
  });

  await page.waitForTimeout(800);

  const screenshotPath = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/recipe_modal_real_ingredients_scroll.png';
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log('Saved screenshot to:', screenshotPath);

  await browser.close();
}

captureRecipeModal().catch(console.error);
