import { chromium } from 'playwright';

async function testMotoGNavbar() {
  const browser = await chromium.launch({ headless: true });
  // Standard Moto G viewport: 360 x 800, scale factor 2 or 3
  const context = await browser.newContext({
    viewport: { width: 360, height: 800 },
    deviceScaleFactor: 2
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
  await page.waitForTimeout(1000);

  // Measure the navbar elements
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
      navContent: navContent ? { width: navContent.getBoundingClientRect().width, scrollWidth: navContent.scrollWidth } : null,
      logo: logo ? { width: logo.getBoundingClientRect().width, text: logo.innerText } : null,
      logoIcon: logoIcon ? { width: logoIcon.getBoundingClientRect().width, height: logoIcon.getBoundingClientRect().height } : null,
      logoText: logoText ? { width: logoText.getBoundingClientRect().width, text: logoText.innerText } : null,
      navControls: navControls ? { width: navControls.getBoundingClientRect().width } : null,
      langSelect: langSelect ? { width: langSelect.getBoundingClientRect().width } : null,
      userBadge: userBadge ? { width: userBadge.getBoundingClientRect().width } : null,
      profileBtn: profileBtn ? { width: profileBtn.getBoundingClientRect().width } : null,
    };
  });

  console.log('Metrics on 360px screen:', JSON.stringify(metrics, null, 2));

  const screenshotPath = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/motog_header_debug.png';
  await page.screenshot({ path: screenshotPath, clip: { x: 0, y: 0, width: 360, height: 120 } });
  console.log('Saved screenshot to:', screenshotPath);

  await browser.close();
}

testMotoGNavbar().catch(console.error);
