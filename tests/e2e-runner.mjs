import { chromium } from 'playwright';

async function testFullSuite() {
  console.log('--- Comprehensive Playwright E2E Test Suite ---');
  const browser = await chromium.launch({ headless: true });

  const context = await browser.newContext({
    viewport: { width: 375, height: 812 }, // Mobile profile
    userAgent: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
  });

  const page = await context.newPage();
  
  const consoleMessages = [];
  const errors = [];
  page.on('console', msg => {
    consoleMessages.push(`[${msg.type()}] ${msg.text()}`);
    if (msg.type() === 'error') {
      console.log(`[BROWSER CONSOLE ERROR]: ${msg.text()}`);
    }
  });
  page.on('pageerror', err => {
    errors.push(err);
    console.log(`[PAGE ERROR]: ${err.message}\n${err.stack}`);
  });

  // Step 1: Sign in via API on localhost
  console.log('\n1. Logging in via dev sign-in API...');
  const loginRes = await context.request.post('http://localhost:3000/api/auth', {
    data: { devLogin: true }
  });
  console.log('Login API status:', loginRes.status(), await loginRes.json());

  // Step 2: Navigate to /recipes
  console.log('\n2. Navigating to /recipes...');
  await page.goto('http://localhost:3000/recipes', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Check Mobile Header for Overlap
  const logoText = page.locator('.logo-text');
  const userAuth = page.locator('.user-auth-badge');
  const logoTextBox = await logoText.boundingBox();
  const userAuthBox = await userAuth.boundingBox();
  console.log('Mobile Header Positions:', { logoTextBox, userAuthBox });
  if (logoTextBox && userAuthBox) {
    const overlap = logoTextBox.x + logoTextBox.width > userAuthBox.x;
    console.log(`Mobile Header Overlap: ${overlap ? 'YES (OVERLAPPING)' : 'NO (CLEAN)'}`);
    if (overlap) {
      console.log(`Overlap amount: ${(logoTextBox.x + logoTextBox.width - userAuthBox.x).toFixed(1)}px`);
    }
  }

  // Step 3: Check bottom camera button centering
  const scanCircle = page.locator('.scan-icon-container').first();
  if (await scanCircle.count() > 0) {
    const circleBox = await scanCircle.boundingBox();
    const icon = page.locator('.scan-icon-container .bottom-nav-icon, .scan-icon-container svg').first();
    const iconBox = await icon.boundingBox();
    console.log('Camera centering:', { circleBox, iconBox });
    if (circleBox && iconBox) {
      const cx = circleBox.x + circleBox.width / 2;
      const cy = circleBox.y + circleBox.height / 2;
      const ix = iconBox.x + iconBox.width / 2;
      const iy = iconBox.y + iconBox.height / 2;
      console.log(`Centering diff: X=${(cx - ix).toFixed(2)}px, Y=${(cy - iy).toFixed(2)}px`);
    }
  }

  // Step 4: Click Shopping Tab in /recipes
  console.log('\n3. Clicking Shopping Tab in /recipes...');
  const shoppingTab = page.locator('.recipe-view-tab:has-text("Shopping")');
  await shoppingTab.waitFor({ state: 'visible', timeout: 5000 });
  await shoppingTab.click();
  await page.waitForTimeout(1000);

  // Step 5: Click "Open full shopping list"
  console.log('\n4. Clicking "Open full shopping list" button...');
  const openFullShoppingLink = page.locator('a.btn-primary[href="/shopping-list"]');
  await openFullShoppingLink.waitFor({ state: 'visible', timeout: 5000 });
  await Promise.all([
    page.waitForURL('**/shopping-list', { timeout: 10000 }),
    openFullShoppingLink.click()
  ]);

  // Wait for navigation and inspect /shopping-list
  console.log('\n5. Inspecting /shopping-list state after navigation...');
  await page.waitForTimeout(2000);
  console.log('Current URL:', page.url());

  const pageHtml = await page.content();
  const bodyText = await page.locator('body').innerText();
  const pageTitle = await page.locator('h1').allTextContents();
  const shoppingContainerCount = await page.locator('.shopping-container').count();
  const spinnerCount = await page.locator('.spinner').count();

  console.log('Page Title(s):', pageTitle);
  console.log('.shopping-container count:', shoppingContainerCount);
  console.log('.spinner count:', spinnerCount);
  console.log('Body Text length:', bodyText.length);
  console.log('Body Text snippet:', bodyText.slice(0, 300).replace(/\n/g, ' '));

  // Check if blank
  if (bodyText.trim().length === 0 || pageHtml.includes('class="spinner"') && bodyText.length < 50) {
    console.error('CRITICAL BUG DETECTED: Page is blank or stuck loading!');
  }

  // Step 6: Test all other pages after login:
  console.log('\n6. Testing All Pages While Authenticated...');
  const allRoutes = ['/', '/inventory', '/recipes', '/shopping-list', '/upload'];
  for (const route of allRoutes) {
    console.log(`\nNavigating to ${route}...`);
    await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    const title = await page.locator('h1, h2').first().textContent().catch(() => 'No heading');
    const textLen = (await page.locator('body').innerText()).length;
    console.log(`  -> Heading: "${title?.trim()}", Body Length: ${textLen}`);
    if (textLen < 20) {
      console.error(`  -> ERROR: Route ${route} appears blank!`);
    }
  }

  console.log('\n--- Test Completed ---');
  console.log('Total Console Errors:', consoleMessages.filter(m => m.startsWith('[error]')).length);
  console.log('Total Unhandled Page Errors:', errors.length);

  await browser.close();
}

testFullSuite().catch(err => {
  console.error('Test Suite Failed:', err);
  process.exit(1);
});
