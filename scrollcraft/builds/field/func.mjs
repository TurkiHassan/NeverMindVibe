import { createRequire } from "node:module";
const require = createRequire("/Users/turki/Downloads/website-01a176aa-1d42-7193-b341-3e4f029f3972/scrollcraft/package.json");
const { chromium } = require("playwright-core");
const b = await chromium.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true });
for (const [url, red] of [["http://localhost:4618/experiences/field/", false], ["http://localhost:4618/experiences/field/ar/", false], ["http://localhost:4618/experiences/field/", true]]) {
  const page = await b.newPage({ viewport: { width: 1280, height: 800 }, reducedMotion: red ? "reduce" : "no-preference" });
  await page.goto(url); await page.waitForSelector("html.sc-ready"); await page.waitForTimeout(500);
  const r = {};
  await page.click(".months li:nth-child(6) a"); await page.waitForTimeout(2500);
  r.afterJun = await page.evaluate(() => ({ cur: document.querySelector(".months a[aria-current]")?.getAttribute("aria-label"), flag: document.getElementById("flag").textContent, stages: [...document.querySelectorAll(".crop")].map(c => c.dataset.stage).join(","), y: Math.round(scrollY) }));
  await page.evaluate(() => document.getElementById("f-crop").scrollIntoView()); await page.waitForTimeout(1200);
  const before = await page.evaluate(() => document.getElementById("mini").innerText.replace(/\n/g, " | "));
  await page.selectOption("#f-crop", { index: 1 });
  const after = await page.evaluate(() => ({ mini: document.getElementById("mini").innerText.replace(/\n/g, " | "), sel: document.querySelectorAll(".tk i.sel").length }));
  await page.selectOption("#f-crop", { index: 3 }); r.veg = await page.evaluate(() => document.getElementById("mini").innerText);
  await page.click("#sow button[type=submit]"); r.err = await page.evaluate(() => document.getElementById("reply").textContent);
  await page.fill("#f-name", "Test"); await page.fill("#f-email", "t@example.com"); await page.click("#sow button[type=submit]"); r.ok = await page.evaluate(() => document.getElementById("reply").textContent);
  r.before = before; r.after = after;
  // peak state
  if (!red) { await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(800); await page.evaluate(() => { const a = document.getElementById("year"); scrollTo(0, a.offsetTop + (a.offsetHeight - innerHeight) * 0.95); }); await page.waitForTimeout(1500); r.peak = await page.evaluate(() => [...document.querySelectorAll(".crop")].map(c => c.querySelector("h2").textContent + ":" + c.dataset.stage).join(", ")); }
  console.log(url, red ? "reduced" : "", JSON.stringify(r, null, 1)); await page.close();
}
await b.close();
