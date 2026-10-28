// Page-specific audit: horizontal scroll, tap targets, clipped text, contrast, tab order, focus ring.
// usage: node audit.mjs <url> <width> <height> [reduced]
import { createRequire } from "node:module";
import fs from "node:fs";
const require = createRequire("/Users/turki/Downloads/website-01a176aa-1d42-7193-b341-3e4f029f3972/scrollcraft/package.json");
const { chromium } = require("playwright-core");
const [url, W, H, red] = [process.argv[2], +process.argv[3], +process.argv[4], process.argv[5] === "reduced"];
const b = await chromium.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true });
const page = await b.newPage({ viewport: { width: W, height: H }, reducedMotion: red ? "reduce" : "no-preference", hasTouch: W < 760 });
const errs = []; page.on("console", m => m.type() === "error" && errs.push(m.text())); page.on("pageerror", e => errs.push(String(e)));
await page.goto(url, { waitUntil: "domcontentloaded" });
await page.waitForSelector("html.sc-ready"); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(600);
const total = await page.evaluate(() => document.documentElement.scrollHeight);
const issues = { hscroll: [], tap: new Set(), clip: new Set(), contrast: new Map() };
const probe = () => page.evaluate(() => {
  const out = { hs: document.documentElement.scrollWidth > innerWidth + 1, tap: [], clip: [], con: [] };
  const vis = (el) => { const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.display !== "none" && +cs.opacity > 0.05 && r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth; };
  document.querySelectorAll("a,button,input,select,textarea").forEach(el => { if (!vis(el)) return; const r = el.getBoundingClientRect(); if (r.width < 43.5 || r.height < 43.5) out.tap.push((el.className || el.tagName) + ":" + el.textContent.trim().slice(0, 12) + " " + Math.round(r.width) + "x" + Math.round(r.height)); });
  document.querySelectorAll(".crop").forEach(c => { if (!vis(c)) return; const cr = c.getBoundingClientRect();
    c.querySelectorAll(".tx *, .nt, .chip, .ph").forEach(k => { const r = k.getBoundingClientRect(); if (!r.width) return; if (r.bottom > cr.bottom + 1 || r.top < cr.top - 1) out.clip.push("vert:" + c.id + ":" + k.className + " " + Math.round(r.bottom - cr.bottom)); }); });
  const hdr = document.querySelector(".top").getBoundingClientRect().bottom;
  document.querySelectorAll("#bstage h2, #bstage .card.on *, .head *").forEach(k => { if (!vis(k)) return; const r = k.getBoundingClientRect(); const st = k.closest(".stage").getBoundingClientRect(); if (r.bottom > st.bottom + 1 && Math.abs(st.top) <= 1) out.clip.push("stagebottom:" + k.tagName + "." + k.className + " " + Math.round(r.bottom - innerHeight)); if (r.top < hdr - 1 && Math.abs(st.top) <= 1 && r.height) out.clip.push("underheader:" + k.tagName); });
  // contrast
  const parse = (s) => { const m = s.match(/[\d.]+/g).map(Number); return { r: m[0], g: m[1], b: m[2], a: m[3] ?? 1 }; };
  const lum = ({ r, g, b }) => { const f = (v) => { v /= 255; return v <= .03928 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }; return .2126 * f(r) + .7152 * f(g) + .0722 * f(b); };
  const bgOf = (el) => { let e = el; while (e) { const c = parse(getComputedStyle(e).backgroundColor); if (c.a > .9) return c; e = e.parentElement; } return { r: 243, g: 243, b: 229 }; };
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const seen = new Set();
  while (w.nextNode()) { const n = w.currentNode; if (!n.textContent.trim()) continue; const el = n.parentElement; if (seen.has(el) || !vis(el)) continue; seen.add(el);
    if (el.closest(".ph, script, style, .skip")) continue;
    const cs = getComputedStyle(el); const fg = parse(cs.color); const bg = bgOf(el);
    let op = 1; for (let e = el; e; e = e.parentElement) op *= +getComputedStyle(e).opacity; if (op < .95) continue;
    const [l1, l2] = [lum(fg), lum(bg)].sort((a, b) => b - a); const ratio = (l1 + .05) / (l2 + .05);
    const size = parseFloat(cs.fontSize), big = size >= 24 || (size >= 18.66 && +cs.fontWeight >= 700);
    if (ratio < (big ? 3 : 4.5)) out.con.push(el.tagName + "." + el.className + " '" + n.textContent.trim().slice(0, 18) + "' " + ratio.toFixed(2)); }
  return out; });
const steps = red ? 14 : 30;
for (let i = 0; i <= steps; i++) {
  await page.evaluate((y) => scrollTo(0, y), Math.round((total - H) * i / steps)); await page.waitForTimeout(red ? 60 : 350);
  const o = await probe(); if (o.hs) issues.hscroll.push(i); o.tap.forEach(x => issues.tap.add(x)); o.clip.forEach(x => issues.clip.add(x)); o.con.forEach(x => issues.contrast.set(x.replace(/ [\d.]+$/, ""), x));
}
// tab order
await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(300);
await page.evaluate(() => document.activeElement && document.activeElement.blur());
const tabs = [];
for (let i = 0; i < 40; i++) { await page.keyboard.press("Tab"); await page.waitForTimeout(1200);
  const d = await page.evaluate(() => { const e = document.activeElement; if (!e || e === document.body) return null; const cs = getComputedStyle(e); const r = e.getBoundingClientRect(); return { n: e.tagName.toLowerCase() + (e.id ? "#" + e.id : "") + ":" + (e.getAttribute("aria-label") || e.textContent || e.name || "").trim().slice(0, 14), ring: cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) >= 2, inview: r.bottom > 0 && r.top < innerHeight && r.right > 0 && r.left < innerWidth }; });
  if (!d) break; tabs.push(d); }
console.log(JSON.stringify({ url, W, H, red, total: (total / H).toFixed(2) + "vh", console: errs, hscroll: issues.hscroll, tap: [...issues.tap], clip: [...issues.clip], contrast: [...issues.contrast.values()], tabCount: tabs.length, tabOrder: tabs.map(t => t.n).join(" > "), noRing: tabs.filter(t => !t.ring).map(t => t.n), offscreenFocus: tabs.filter(t => !t.inview).map(t => t.n) }, null, 1));
await b.close();
