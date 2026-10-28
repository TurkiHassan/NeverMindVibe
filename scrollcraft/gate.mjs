// Fingerprint gate over PLAN.json: every pair must differ on >= 4 of the 6 dimensions.
// A dimension "differs" when its text is not identical; PLAN.md rules say the texts must also
// describe genuinely different things (reviewed by hand).
import fs from "node:fs";
const rows = JSON.parse(fs.readFileSync(new URL("./PLAN.json", import.meta.url), "utf8"));
const dims = ["grammar", "nav", "hero", "seq", "close", "sig"];
let bad = 0, min = 6;
for (let i = 0; i < rows.length; i++) {
  for (let j = i + 1; j < rows.length; j++) {
    const diff = dims.filter((d) => rows[i][d].trim().toLowerCase() !== rows[j][d].trim().toLowerCase()).length;
    min = Math.min(min, diff);
    if (diff < 4) { bad++; console.log("FAIL", rows[i].slug, rows[j].slug, diff); }
  }
}
console.log(`${rows.length} rows, ${rows.length * (rows.length - 1) / 2} pairs, minimum differing dimensions: ${min}, failures: ${bad}`);
const g = {}; rows.forEach((r) => (g[r.grammar] = (g[r.grammar] || []).concat(r.slug)));
console.log(g);
