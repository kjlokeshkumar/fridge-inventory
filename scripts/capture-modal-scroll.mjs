import { chromium } from 'playwright';

async function captureRecipeModalScroll() {
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

  // Open first recipe
  const viewRecipeBtn = page.locator('button:has-text("View Recipe"), .btn-view-recipe, button:has-text("Recipe")').first();
  await viewRecipeBtn.click();
  await page.waitForTimeout(1500);

  // Scroll the modal content directly
  await page.evaluate(() => {
    const modalContent = document.querySelector('.planner-recipe-modal-content');
    if (modalContent) {
      modalContent.scrollTop = 550;
    }
  });

  await page.waitForTimeout(1000);

  const screenshotPath = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/recipe_modal_platter_and_table.png';
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log('Saved scroll screenshot to:', screenshotPath);

  await browser.close();
}

captureRecipeModalScroll().catch(console.error);
