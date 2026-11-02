import { chromium } from 'playwright';

async function testMotoGLargeFont() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 360, height: 800 },
    deviceScaleFactor: 2
  });

  const page = await context.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Simulate Android Large font scale (1.15x) and presence of both badges
  await page.evaluate(() => {
    document.documentElement.style.fontSize = '18.4px'; // 16px * 1.15
  });

  await page.waitForTimeout(500);

  const screenshotPath = 'C:/Users/reksl/.gemini/antigravity-cli/brain/c13f3cc0-5a81-439a-9ed4-41539aa80d40/motog_large_font.png';
  await page.screenshot({ path: screenshotPath, clip: { x: 0, y: 0, width: 360, height: 120 } });
  console.log('Saved screenshot to:', screenshotPath);

  await browser.close();
}

testMotoGLargeFont().catch(console.error);
