// Renders each carousel slide to an exact 1080x1350 PNG.
// Usage: node render.js
const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const OUT = path.join(ROOT, "slides");
const COUNT = 7;
const W = 1080, H = 1350;

(async () => {
  fs.mkdirSync(OUT, { recursive: true });

  // Inline the avatar so the page is fully self-contained when rendered.
  const avatarB64 = fs.readFileSync(path.join(ROOT, "gabe-profile.jpg")).toString("base64");
  const avatarURI = `data:image/jpeg;base64,${avatarB64}`;
  const fileURL = "file://" + path.join(ROOT, "carousel.html");

  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: W, height: H },
    deviceScaleFactor: 2, // 2x for crisp text; output is 2160x2700
  });

  for (let i = 1; i <= COUNT; i++) {
    await page.addInitScript((uri) => { window.__AVATAR__ = uri; }, avatarURI);
    await page.goto(`${fileURL}?slide=${i}`, { waitUntil: "networkidle" });
    const el = await page.$(".slide.active");
    const file = path.join(OUT, `slide-${i}.png`);
    await el.screenshot({ path: file });
    console.log("wrote", path.relative(ROOT, file));
  }

  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });
