import { chromium } from 'playwright';

async function captureModalPlatterCloseUp() {
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

  // Wait for recipe list and open first recipe card
  const card = page.locator('.recipe-catalog-card').first();
  await card.scrollIntoViewIfNeeded();
  await card.click();

  // Wait for modal backdrop and board
  await page.waitForSelector('.planner-recipe-modal-backdrop', { state: 'visible', timeout: 5000 });
  await page.waitForSelector('.ramekin-mise-en-place-board', { state: 'visible', timeout: 5000 });

  // Scroll the modal backdrop / container down
  await page.evaluate(() => {
    const modalBackdrop = document.querySelector('.planner-recipe-modal-backdrop');
    if (modalBackdrop) modalBackdrop.scrollTop = 480;
  });

  await page.waitForTimeout(1000);

  const screenshotPath = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/recipe_modal_platter_focused.png';
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log('Saved focused platter screenshot to:', screenshotPath);

  await browser.close();
}

captureModalPlatterCloseUp().catch(console.error);
