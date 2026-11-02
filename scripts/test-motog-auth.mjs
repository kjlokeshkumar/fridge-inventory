import { chromium } from 'playwright';

async function testMotoGWithProfile() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 360, height: 800 },
    deviceScaleFactor: 2
  });

  const page = await context.newPage();
  
  // Login via API to get real session with household profile
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Call dev login
  await page.evaluate(async () => {
    await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ devLogin: true })
    });
    window.location.reload();
  });

  await page.waitForNavigation({ waitUntil: 'networkidle' }).catch(() => {});
  await page.waitForTimeout(1000);

  const metrics = await page.evaluate(() => {
    const navContent = document.querySelector('.nav-content');
    const logo = document.querySelector('.logo');
    const logoIcon = document.querySelector('.logo-icon');
    const logoText = document.querySelector('.logo-text');
    const navControls = document.querySelector('.nav-controls');
    const langSelect = document.querySelector('.lang-selector-container');
    const userBadge = document.querySelector('.user-auth-badge');
    const profileBtn = document.querySelector('.profile-badge-btn');

    return {
      windowWidth: window.innerWidth,
      navContentRect: navContent ? navContent.getBoundingClientRect() : null,
      logoRect: logo ? logo.getBoundingClientRect() : null,
      logoTextRect: logoText ? logoText.getBoundingClientRect() : null,
      logoIconRect: logoIcon ? logoIcon.getBoundingClientRect() : null,
      navControlsRect: navControls ? navControls.getBoundingClientRect() : null,
      userBadgeRect: userBadge ? userBadge.getBoundingClientRect() : null,
      profileBtnRect: profileBtn ? profileBtn.getBoundingClientRect() : null,
      langSelectRect: langSelect ? langSelect.getBoundingClientRect() : null,
    };
  });

  console.log('Metrics with logged in user on 360px screen:');
  console.log(JSON.stringify(metrics, null, 2));

  const screenshotPath = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/motog_header_authenticated.png';
  await page.screenshot({ path: screenshotPath, clip: { x: 0, y: 0, width: 360, height: 120 } });
  console.log('Saved screenshot to:', screenshotPath);

  await browser.close();
}

testMotoGWithProfile().catch(console.error);
