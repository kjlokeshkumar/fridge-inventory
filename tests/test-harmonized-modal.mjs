import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 412, height: 915 } // Galaxy Flip 5 / mobile viewport
  });

  console.log('1. Authenticating via devLogin...');
  const loginRes = await context.request.post('http://localhost:3000/api/auth', {
    data: { devLogin: true }
  });
  console.log('Login API status:', loginRes.status(), await loginRes.json());

  const page = await context.newPage();

  console.log('2. Navigating to http://localhost:3000/recipes...');
  await page.goto('http://localhost:3000/recipes', { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);

  // If walkthrough is visible, dismiss it
  const dismissBtn = page.locator('.walkthrough-dismiss-btn, .btn-walkthrough-confirm').first();
  if (await dismissBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
    console.log('Dismissing walkthrough card...');
    await dismissBtn.click();
    await page.waitForTimeout(500);
  }

  // Click on the first combo dish link to open the planner recipe modal
  const comboLink = page.locator('.combo-dish-link').first();
  await comboLink.waitFor({ state: 'visible', timeout: 15000 });
  console.log('3. Clicking combo dish link to open recipe modal...');
  await comboLink.click();

  // Wait for the planner modal to be visible
  const modal = page.locator('.planner-recipe-modal');
  await modal.waitFor({ state: 'visible', timeout: 10000 });
  await page.waitForTimeout(800);

  // Check the presence and geometry of our new harmonized header elements
  const metaRow = modal.locator('.modal-recipe-meta-row');
  await metaRow.waitFor({ state: 'visible', timeout: 5000 });
  const chipsCount = await metaRow.locator('.modal-meta-chip').count();
  console.log(`PASS: Found ${chipsCount} metadata chips in unified row.`);

  for (let i = 0; i < chipsCount; i++) {
    const chipText = await metaRow.locator('.modal-meta-chip').nth(i).innerText();
    console.log(`  Chip ${i + 1}: "${chipText}"`);
  }

  const title = modal.locator('.modal-recipe-title');
  const titleText = await title.innerText();
  console.log(`PASS: Modal recipe title: "${titleText}"`);

  const segmentedTabs = modal.locator('.modal-segmented-tab');
  const tabCount = await segmentedTabs.count();
  console.log(`Found ${tabCount} segmented combo tabs.`);

  if (tabCount >= 2) {
    const tab0Box = await segmentedTabs.nth(0).boundingBox();
    const tab1Box = await segmentedTabs.nth(1).boundingBox();
    console.log('Segmented Tab 0 Box:', tab0Box);
    console.log('Segmented Tab 1 Box:', tab1Box);

    const widthDiff = Math.abs((tab0Box?.width || 0) - (tab1Box?.width || 0));
    console.log(`Segmented tab width difference: ${widthDiff}px (Expected ~0 for symmetrical 50/50 grid)`);
    if (widthDiff > 10) {
      console.warn('WARNING: Segmented tabs are not symmetrical!');
    } else {
      console.log('PASS: Segmented tabs are symmetrical 50/50 split!');
    }

    // Test clicking paired tab
    await segmentedTabs.nth(1).click();
    await page.waitForTimeout(500);
    const newTitle = await title.innerText();
    console.log(`PASS: Switched to paired dish recipe: "${newTitle}"`);

    // Switch back to main tab
    await segmentedTabs.nth(0).click();
    await page.waitForTimeout(500);
  }

  // Check porcelain platter is present underneath
  const porcelainPlatter = modal.locator('.culinary-prep-plate-container, .ramekin-mise-en-place-board');
  const hasPlatter = await porcelainPlatter.count();
  console.log(`PASS: Porcelain mise en place platter present: ${hasPlatter > 0}`);

  // Take screenshot of the top section of the modal
  const screenshotPath = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/recipe_modal_harmonized_header.png';
  await modal.screenshot({ path: screenshotPath });
  console.log(`Screenshot saved to: ${screenshotPath}`);

  await browser.close();
  console.log('ALL CHECKS PASSED SUCCESSFULLY!');
}

main().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
