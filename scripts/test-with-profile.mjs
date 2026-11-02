import { chromium } from 'playwright';

async function testWithHouseholdProfile() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 360, height: 800 },
    deviceScaleFactor: 2.625
  });

  const page = await context.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Simulate authenticated state with household profile button visible
  await page.evaluate(() => {
    const navControls = document.querySelector('.nav-controls');
    if (navControls) {
      const btn = document.createElement('button');
      btn.className = 'profile-badge-btn';
      btn.innerHTML = '<span class="profile-avatar">🏠</span>';
      navControls.insertBefore(btn, navControls.children[1]);
    }
  });

  await page.waitForTimeout(500);

  const screenshotPath = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/motog_with_household_profile.png';
  await page.screenshot({ path: screenshotPath, clip: { x: 0, y: 0, width: 360, height: 120 } });
  console.log('Saved screenshot to:', screenshotPath);

  await browser.close();
}

testWithHouseholdProfile().catch(console.error);
