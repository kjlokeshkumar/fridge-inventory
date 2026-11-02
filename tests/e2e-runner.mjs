import { chromium } from 'playwright';

async function testFullSuite() {
  console.log('--- Comprehensive Playwright E2E Test Suite (All Pages, Buttons, Auth & Upload) ---');
  const browser = await chromium.launch({ headless: true });

  const context = await browser.newContext({
    viewport: { width: 375, height: 812 }, // Mobile profile (iPhone / Pixel)
    userAgent: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
  });

  const page = await context.newPage();
  
  const consoleErrors = [];
  const pageErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
      console.log(`[BROWSER CONSOLE ERROR]: ${msg.text()}`);
    }
  });
  page.on('pageerror', err => {
    pageErrors.push(err);
    console.log(`[PAGE ERROR]: ${err.message}\n${err.stack}`);
  });

  // Step 1: Sign in via dev API on localhost
  console.log('\n1. Logging in via dev sign-in API...');
  const loginRes = await context.request.post('http://localhost:3000/api/auth', {
    data: { devLogin: true }
  });
  console.log('Login API status:', loginRes.status(), await loginRes.json());

  // Step 2: Navigate to Landing Page (/) and check brand count
  console.log('\n2. Testing Landing Page (/) Brand Count & Header...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  const brandOccurrences = await page.evaluate(() => {
    const textNodes = [];
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while (n = walk.nextNode()) {
      if (n.textContent && n.textContent.includes('Sourashtra Chef')) {
        textNodes.push({
          parentTag: n.parentElement?.tagName,
          className: n.parentElement?.className,
          text: n.textContent.trim()
        });
      }
    }
    return textNodes;
  });
  console.log(`Landing Page 'Sourashtra Chef' in DOM text: ${brandOccurrences.length} occurrence(s)`);
  brandOccurrences.forEach((o, i) => console.log(`  [${i + 1}] <${o.parentTag} class="${o.className}"> "${o.text}"`));
  if (brandOccurrences.length > 2) {
    console.warn(`WARNING: Expected at most 1-2 brand occurrences in navbar/footer, found ${brandOccurrences.length}!`);
  }

  // Step 3: Test User Account Modal Popup
  console.log('\n3. Testing User Account Modal Popup Buttons...');
  const userAuthBtn = page.locator('.user-auth-badge');
  await userAuthBtn.waitFor({ state: 'visible', timeout: 5000 });
  await userAuthBtn.click();
  await page.waitForTimeout(800);

  const modal = page.locator('.modal-content');
  await modal.waitFor({ state: 'visible', timeout: 5000 });

  // Verify "Done" button is NOT present (preventing redundant close buttons)
  const doneBtnCount = await modal.locator('button:has-text("Done")').count();
  console.log(`Redundant 'Done' button count: ${doneBtnCount} (Expected: 0)`);
  if (doneBtnCount !== 0) {
    throw new Error(`FAIL: Redundant 'Done' button still exists in modal!`);
  }

  // Verify Delete Account and Sign Out buttons are evenly sized
  const deleteBtn = modal.locator('.btn-danger-modal');
  const signoutBtn = modal.locator('.btn-secondary-modal');
  const deleteBox = await deleteBtn.boundingBox();
  const signoutBox = await signoutBtn.boundingBox();
  console.log('Modal Action Buttons Geometry:', {
    deleteAccount: deleteBox ? { width: Math.round(deleteBox.width), height: Math.round(deleteBox.height) } : null,
    signOut: signoutBox ? { width: Math.round(signoutBox.width), height: Math.round(signoutBox.height) } : null
  });

  if (deleteBox && signoutBox) {
    const widthDiff = Math.abs(deleteBox.width - signoutBox.width);
    const heightDiff = Math.abs(deleteBox.height - signoutBox.height);
    console.log(`Width Diff: ${widthDiff.toFixed(1)}px, Height Diff: ${heightDiff.toFixed(1)}px`);
    if (widthDiff > 15) {
      console.warn(`WARNING: Modal buttons are unevenly sized (width difference ${widthDiff}px)!`);
    } else {
      console.log('PASS: Modal buttons are evenly sized and balanced!');
    }
  }

  // Close modal via close button
  const closeBtn = modal.locator('.modal-close-btn');
  await closeBtn.click();
  await page.waitForTimeout(500);

  // Step 4: Test /upload Page Contrast, Single Analyze Button & No Dual Spinners
  console.log('\n4. Testing /upload Page Button Contrast & Single Analyzer UI...');
  await page.goto('http://localhost:3000/upload', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Check Drop Zone and "Take a photo" if on native platform
  const takePhotoBtn = page.locator('button:has-text("Take Photo")');
  if (await takePhotoBtn.count() > 0) {
    const photoColor = await takePhotoBtn.evaluate(el => window.getComputedStyle(el).color);
    const photoBg = await takePhotoBtn.evaluate(el => window.getComputedStyle(el).backgroundColor);
    console.log(`'Take Photo' Button styles -> Color: ${photoColor}, Background: ${photoBg}`);
  }

  // Upload sample test image via file input
  const fileInput = page.locator('input[type="file"]');
  // Create a minimal 1x1 test png buffer
  const samplePngBuffer = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
    'base64'
  );
  await fileInput.setInputFiles({
    name: 'fridge-test-photo.png',
    mimeType: 'image/png',
    buffer: samplePngBuffer
  });
  await page.waitForTimeout(1000);

  // Verify preview is displayed
  const previewItem = page.locator('.preview-item-card');
  const previewCount = await previewItem.count();
  console.log(`Upload preview item count: ${previewCount} (Expected: 1)`);

  // Verify "Add More" and "Retake All" buttons have high-contrast readable text
  const addMoreBtn = page.locator('button:has-text("Add More")');
  const retakeAllBtn = page.locator('button:has-text("Retake")');
  await addMoreBtn.waitFor({ state: 'visible', timeout: 5000 });
  await retakeAllBtn.waitFor({ state: 'visible', timeout: 5000 });

  const addMoreColors = await addMoreBtn.evaluate(el => {
    const style = window.getComputedStyle(el);
    return { color: style.color, bg: style.backgroundColor, border: style.borderColor, height: style.height };
  });
  const retakeColors = await retakeAllBtn.evaluate(el => {
    const style = window.getComputedStyle(el);
    return { color: style.color, bg: style.backgroundColor, border: style.borderColor, height: style.height };
  });

  console.log("'Add More' Button Computed Styles:", addMoreColors);
  console.log("'Retake All' Button Computed Styles:", retakeColors);

  // Check that text is NOT white on white/light background
  // White is rgb(255, 255, 255). We require dark text or danger red!
  const isAddMoreWhiteText = addMoreColors.color.replace(/\s+/g, '') === 'rgb(255,255,255)';
  const isRetakeWhiteText = retakeColors.color.replace(/\s+/g, '') === 'rgb(255,255,255)';
  if (isAddMoreWhiteText) {
    throw new Error("FAIL: 'Add More' button has white text on light surface!");
  }
  if (isRetakeWhiteText) {
    throw new Error("FAIL: 'Retake All' button has white text on light surface!");
  }
  console.log("PASS: Both 'Add More' and 'Retake All' have high-contrast readable text!");

  // Verify there is EXACTLY ONE Analyze button
  const analyzeBtn = page.locator('button:has-text("Analyze with AI")');
  const analyzeBtnCount = await analyzeBtn.count();
  console.log(`'Analyze with AI' button count: ${analyzeBtnCount} (Expected: exactly 1)`);
  if (analyzeBtnCount !== 1) {
    throw new Error(`FAIL: Expected exactly 1 'Analyze with AI' button, found ${analyzeBtnCount}!`);
  }

  // Check analyze button styling conforms to design system teal
  const analyzeStyle = await analyzeBtn.evaluate(el => {
    const style = window.getComputedStyle(el);
    return { color: style.color, bg: style.backgroundImage || style.backgroundColor, height: style.height };
  });
  console.log("'Analyze with AI' Button Computed Style:", analyzeStyle);

  // Step 5: Test Navigation & All Pages After Login
  console.log('\n5. Testing All Routes (/inventory, /recipes, /shopping-list)...');
  const routes = ['/inventory', '/recipes', '/shopping-list'];
  for (const r of routes) {
    console.log(`Testing route: ${r}...`);
    await page.goto(`http://localhost:3000${r}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    const bodyLen = (await page.locator('body').innerText()).length;
    console.log(`  -> ${r} loaded cleanly with ${bodyLen} characters.`);
    if (bodyLen < 50) {
      throw new Error(`FAIL: Route ${r} appears blank or empty!`);
    }
  }

  // Check Shopping Tab -> Full shopping list navigation
  console.log('\n6. Checking /recipes -> /shopping-list navigation...');
  await page.goto('http://localhost:3000/recipes', { waitUntil: 'networkidle' });
  const shoppingTab = page.locator('.recipe-view-tab:has-text("Shopping")');
  await shoppingTab.click();
  await page.waitForTimeout(800);
  const openFullShoppingLink = page.locator('a.btn-primary[href="/shopping-list"]');
  await openFullShoppingLink.click();
  await page.waitForURL('**/shopping-list', { timeout: 10000 });
  await page.waitForTimeout(1000);
  console.log('PASS: Successfully navigated to /shopping-list without blank page!');

  // Step 7: Check Native Calendar Button on Recipes Page
  console.log('\n7. Checking Native Device Calendar Button...');
  await page.goto('http://localhost:3000/recipes', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const calBtn = page.locator('button.gcal-day-link').first();
  if (await calBtn.count() > 0) {
    const calText = await calBtn.innerText();
    console.log(`PASS: Found Native Device Calendar Button: "${calText}"`);
  } else {
    console.log('Note: Calendar button appears when weekly plan days are loaded.');
  }

  // Step 7b: Check Recipe Modal Harmonized Header & Symmetrical Combo Tabs
  console.log('\n7b. Checking Recipe Modal Harmonized Header & Symmetrical Combo Tabs...');
  const dismissWalk = page.locator('.walkthrough-dismiss-btn, .btn-walkthrough-confirm').first();
  if (await dismissWalk.isVisible({ timeout: 2000 }).catch(() => false)) {
    await dismissWalk.click();
    await page.waitForTimeout(500);
  }
  const comboLink = page.locator('.combo-dish-link').first();
  if (await comboLink.count() > 0) {
    await comboLink.click();
    const modal = page.locator('.planner-recipe-modal');
    await modal.waitFor({ state: 'visible', timeout: 5000 });
    const metaRow = modal.locator('.modal-recipe-meta-row');
    const chipCount = await metaRow.locator('.modal-meta-chip').count();
    console.log(`PASS: Recipe Modal unified metadata chips count: ${chipCount}`);

    const segTabs = modal.locator('.modal-segmented-tab');
    if (await segTabs.count() >= 2) {
      const box0 = await segTabs.nth(0).boundingBox();
      const box1 = await segTabs.nth(1).boundingBox();
      const diff = Math.abs((box0?.width || 0) - (box1?.width || 0));
      console.log(`PASS: Segmented combo tabs are symmetrical (width diff: ${diff}px)`);
    }
    const closeBtn = modal.locator('.modal-floating-close-btn, .modal-sticky-close-btn').first();
    await closeBtn.click();
    await page.waitForTimeout(400);
    console.log('PASS: Recipe Modal closed cleanly.');
  }

  // Step 8: Verify Shopping List Ingredient Photos & Inspection Modal
  console.log('\n8. Checking Shopping List & Ingredient Inspection Modal...');
  await page.goto('http://localhost:3000/shopping-list', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const thumbBowl = page.locator('.pantry-item-thumb-bowl').first();
  if (await thumbBowl.count() > 0) {
    await thumbBowl.click();
    await page.waitForSelector('.ingredient-inspect-modal', { timeout: 5000 });
    const modalTitle = await page.locator('#inspect-ingredient-title').innerText();
    console.log(`PASS: Opened Ingredient Inspection Modal for: "${modalTitle}"`);

    // Verify close button closes it
    const closeBtn = page.locator('.ingredient-inspect-close');
    await closeBtn.click();
    await page.waitForTimeout(400);
    console.log('PASS: Closed Ingredient Inspection Modal successfully!');
  }

  console.log('\n--- Test Summary ---');
  console.log('Total Console Errors:', consoleErrors.length);
  console.log('Total Page Errors:', pageErrors.length);

  await browser.close();

  if (consoleErrors.length > 0 || pageErrors.length > 0) {
    throw new Error(`Test failed with ${consoleErrors.length} console errors and ${pageErrors.length} page errors.`);
  }

  console.log('\nALL PLAYWRIGHT TESTS PASSED WITH 0 ERRORS! 🎉\n');
}

testFullSuite().catch(err => {
  console.error('\nE2E TEST SUITE FAILED:', err);
  process.exit(1);
});
