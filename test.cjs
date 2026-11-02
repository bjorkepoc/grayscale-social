// Run: npm install --no-save playwright && npx playwright install chromium && node test.cjs
const assert = require('node:assert');
const { chromium } = require('playwright');

const page = `<!doctype html><style>body{background:#15a}#f{height:99px;background:#0f0}dialog{background:#f0f}</style>
<div id=f></div><dialog id=d>x</dialog><button id=fs onclick=f.requestFullscreen()>f</button>
<button id=m onclick=d.showModal()>m</button>`;

(async () => {
  const context = await chromium.launchPersistentContext('', {
    channel: 'chromium',
    headless: true,
    args: [`--disable-extensions-except=${__dirname}`, `--load-extension=${__dirname}`],
  });
  await context.route(/youtube\.com|example\.com/, (route) => route.fulfill({ contentType: 'text/html', body: page }));
  const worker = context.serviceWorkers()[0] ?? await context.waitForEvent('serviceworker');
  const probe = await context.newPage();

  const isColored = async (tab) => {
    await tab.waitForTimeout(400);
    const base64 = (await tab.screenshot()).toString('base64');
    return probe.evaluate(async (base64) => {
      const bitmap = await createImageBitmap(await (await fetch(`data:image/png;base64,${base64}`)).blob());
      const canvas = new OffscreenCanvas(bitmap.width, bitmap.height).getContext('2d');
      canvas.drawImage(bitmap, 0, 0);
      const { data } = canvas.getImageData(0, 0, bitmap.width, bitmap.height);
      for (let i = 0; i < data.length; i += 4) if (data[i] !== data[i + 1] || data[i + 1] !== data[i + 2]) return true;
      return false;
    }, base64);
  };
  const toggle = () => worker.evaluate(() => chrome.action.onClicked.dispatch({}));

  const social = await context.newPage();
  await social.goto('https://www.youtube.com/');
  assert.equal(await isColored(social), false, 'page');
  await social.click('#m');
  assert.equal(await isColored(social), false, 'modal');
  await social.keyboard.press('Escape');
  await social.click('#fs');
  assert.equal(await isColored(social), false, 'fullscreen');
  await social.evaluate(() => document.exitFullscreen());

  await toggle();
  assert.equal(await isColored(social), true, 'off in open tab');
  assert.equal(await worker.evaluate(() => chrome.action.getBadgeText({})), 'AV');
  await toggle();
  assert.equal(await isColored(social), false, 'on again in open tab');

  const other = await context.newPage();
  await other.goto('https://example.com/');
  assert.equal(await isColored(other), true, 'unlisted site');

  await context.close();
  console.log('ok');
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
