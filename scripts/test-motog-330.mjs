import { chromium } from 'playwright';

async function testNarrowMotoG() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 330, height: 800 },
    deviceScaleFactor: 2.625
  });

  const page = await context.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  const metrics = await page.evaluate(() => {
    const navContent = document.querySelector('.nav-content');
    const logo = document.querySelector('.logo');
    const logoText = document.querySelector('.logo-text');
    const navControls = document.querySelector('.nav-controls');
    return {
      windowWidth: window.innerWidth,
      navContentScrollWidth: navContent.scrollWidth,
      navContentClientWidth: navContent.clientWidth,
      logoWidth: logo.getBoundingClientRect().width,
      logoTextWidth: logoText.getBoundingClientRect().width,
      navControlsWidth: navControls.getBoundingClientRect().width,
    };
  });

  console.log('Metrics at 330px:', metrics);

  const screenshotPath = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/motog_330px.png';
  await page.screenshot({ path: screenshotPath, clip: { x: 0, y: 0, width: 330, height: 120 } });
  console.log('Saved screenshot to:', screenshotPath);

  await browser.close();
}

testNarrowMotoG().catch(console.error);
