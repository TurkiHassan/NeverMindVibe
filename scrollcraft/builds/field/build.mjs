// Generates apps/client/public/experiences/field/index.html and ar/index.html from the domain content file.
import fs from "node:fs";
import path from "node:path";
const root = path.resolve(new URL("../../..", import.meta.url).pathname);
const here = path.resolve(new URL(".", import.meta.url).pathname);
const src = fs.readFileSync(path.join(root, "apps/client/src/pages/atlas/domains/content/field.ts"), "utf8")
  .replace(/^import .*$/m, "").replace("const content: DomainContent", "const content").replace("export default content;", "export default content;");
const content = (await import("data:text/javascript;base64," + Buffer.from(src).toString("base64"))).default;
const css = fs.readFileSync(path.join(here, "style.css"), "utf8");
const js = fs.readFileSync(path.join(here, "page.js"), "utf8");
const [stories, cal] = content.sections;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const UI = {
  en: {
    lang: "en", dir: "ltr", other: { href: "../index.html", hl: "en", label: "العربية", ol: "ar" },
    self: "index.html", otherHref: "ar/index.html",
    title: "Field agriculture: a farming year (sample)",
    desc: "A grounded system for growers and makers who care about the whole field, not just the harvest.",
    skip: "Skip to content", name: "Field", tag: "Grow what the future needs.", cta: "Grow with us",
    monthsLabel: "Months", nothing: "nothing in the ground",
    sample: "Sample content. Farms, crops and figures are illustrative.",
    stage: { wait: "Not yet sown", sow: "Sow", grow: "Grow", harvest: "Harvest", done: "Harvested", stand: "Standing" },
    when: (a, b) => `Sow ${a}, harvest ${b}`, whenStand: (a, b) => `Sow ${a}, standing to ${b}`, range: (a, b) => `${a} to ${b}`,
    none: "Not in the sample calendar. It covers five crops.", cropHint: "Your crop in the ground",
    err: "Add your name and a valid email.", okS: "Sample site: nothing was sent.",
    back: "Back to the Field page", year: "A farming year", sampleFoot: "Sample site. Names, farms and figures are sample content.",
    imgs: "", board: "Crop stories",
    fonts: "Bitter:wght@600;800&family=Source+Sans+3:wght@400;500;600",
  },
  ar: {
    lang: "ar", dir: "rtl", other: { href: "../index.html", hl: "en", label: "English", ol: "en" },
    self: "index.html", otherHref: "../index.html",
    title: "حقل الزراعة: سنة زراعية (تجريبي)",
    desc: "نظام راسخ للمزارعين والصنّاع الذين يهتمون بالحقل كله لا بالحصاد فقط.",
    skip: "تخطَّ إلى المحتوى", name: "حقل", tag: "ازرع ما يحتاجه المستقبل.", cta: "ازرع معنا",
    monthsLabel: "الأشهر", nothing: "لا شيء في الأرض",
    sample: "محتوى تجريبي. المزارع والمحاصيل والأرقام توضيحية.",
    stage: { wait: "لم يُبذر بعد", sow: "بذر", grow: "نمو", harvest: "حصاد", done: "تم الحصاد", stand: "قائم" },
    when: (a, b) => `بذر ${a}، حصاد ${b}`, whenStand: (a, b) => `بذر ${a}، قائم حتى ${b}`, range: (a, b) => `${a} إلى ${b}`,
    none: "غير موجود في التقويم التجريبي. يغطي خمسة محاصيل.", cropHint: "محصولك في الأرض",
    err: "أضف اسمك وبريدًا إلكترونيًا صالحًا.", okS: "موقع تجريبي: لم يُرسل شيء.",
    back: "العودة إلى صفحة حقل", year: "سنة زراعية", sampleFoot: "موقع تجريبي. الأسماء والمزارع والأرقام محتوى تجريبي.",
    board: "قصص المحاصيل",
    fonts: "Noto+Naskh+Arabic:wght@400;700",
  },
};
const MAP = [[1, 4], [0], [3], [], [0, 1, 2, 3, 4]]; // authored: crop option -> calendar rows (see BRIEF)

function page(L) {
  const u = UI[L], t = (o) => (typeof o === "string" ? o : o[L]);
  const b = (s) => (L === "ar" ? String(s).replace(/(\d[\d.,%]*)/g, '<bdi dir="ltr">$1</bdi>') : s);
  const mon = cal.months.map(t);
  const crops = cal.rows.map((r) => {
    const n = r.to - r.from + 1;
    return { name: t(r.label), f: r.from, t: r.to, n, range: u.range(mon[r.from - 1], mon[r.to - 1]), note: t(r.note) };
  });
  const E = { crops, mon, stage: u.stage, map: MAP, none: u.none, err: u.err, ok: t(content.cta.success), sample: u.okS };
  const stillOf = ["/assets/domain-stills/field-1.webp", "/assets/domain-stills/field-2.webp", "/assets/domain-stills/field-4.webp"];

  const monthNav = mon.map((m, i) => {
    const inG = crops.map((c) => i + 1 >= c.f && i + 1 <= c.t);
    const names = crops.filter((c, k) => inG[k]).map((c) => c.name).join(", ") || u.nothing;
    return `<li><a href="#year" aria-label="${esc(m + ": " + names)}"><span>${m}</span><span class="tk" aria-hidden="true">${inG.map((x) => `<i class="${x ? "on" : ""}"></i>`).join("")}</span></a></li>`;
  }).join("");

  const lanes = crops.map((c, i) => {
    const whenTxt = c.t === 12 ? u.whenStand(mon[c.f - 1], mon[c.t - 1]) : u.when(mon[c.f - 1], mon[c.t - 1]);
    const mini = Array.from({ length: 12 }, (_, k) => `<i class="${k + 1 >= c.f && k + 1 <= c.t ? "on" : ""}"></i>`).join("");
    return `<li class="lane"><article class="crop" id="crop-${i}" data-stage="wait" style="--f:${c.f - 1};--n:${c.n}" aria-labelledby="c${i}">
<div class="in"><div class="ph">${stillOf.map((s) => `<img src="${s}" width="960" height="540" alt=""${i ? ' loading="lazy"' : ""}>`).join("")}</div>
<div class="tx"><h2 id="c${i}">${esc(c.name)}</h2><p class="when">${esc(whenTxt)}</p><p class="st"><span class="chip">${esc(u.stage.wait)}</span></p></div>
<p class="nt">${esc(c.note)}</p>
<div class="mini-c" aria-hidden="true"><span class="mb">${mini}</span></div></div></article></li>`;
  }).join("\n");

  const cols = mon.map((m) => `<li><span>${m}</span></li>`).join("");

  const steps = stories.items.map((it, i) => `<li class="${i ? "" : "on"}"><b>${esc(t(it.who))}</b><span>${b(esc(t(it.role)))}</span><i></i></li>`).join("");
  const cardsB = stories.items.map((it, i) => `<article class="card${i ? "" : " on"}" aria-label="${esc(t(it.who))}">
<div class="shot"><img src="/assets/domain-stills/field-${it.still + 1}.webp" width="960" height="540" alt=""${i ? ' loading="lazy"' : ""}></div>
<blockquote><p>${esc(t(it.quote))}</p><cite><b>${esc(t(it.who))}</b><span>${b(esc(t(it.role)))}</span></cite></blockquote></article>`).join("\n");

  const f = content.cta.fields;
  const fld = (x) => {
    const lab = esc(t(x.label)), id = "f-" + x.name, w = x.wide ? " wide" : "";
    if (x.type === "select") return `<div class="row${w}"><label for="${id}">${lab}</label><select id="${id}" name="${x.name}">${x.options.map((o) => `<option>${esc(t(o))}</option>`).join("")}</select></div>` + (x.name === "crop" ? `\n<div class="mini" id="mini" role="status" aria-label="${esc(u.cropHint)}"></div>` : "");
    if (x.type === "textarea") return `<div class="row${w}"><label for="${id}">${lab}</label><textarea id="${id}" name="${x.name}" rows="3"></textarea></div>`;
    const extra = x.type === "email" ? ' inputmode="email" autocomplete="email" dir="ltr"' : ' autocomplete="name"';
    return `<div class="row${w}"><label for="${id}">${lab}</label><input id="${id}" name="${x.name}" type="${x.type}"${extra}></div>`;
  };
  const facts = content.proof.facts.map((x) => `<div><dt>${esc(t(x.k))}</dt><dd>${b(esc(t(x.v)))}</dd></div>`).join("");

  return `<!doctype html>
<html lang="${u.lang}" dir="${u.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(u.title)}</title>
<meta name="description" content="${esc(u.desc)}">
<link rel="alternate" hreflang="en" href="${L === "en" ? "index.html" : "../index.html"}">
<link rel="alternate" hreflang="ar" href="${L === "en" ? "ar/index.html" : "index.html"}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='6' fill='%23f3f3e5'/><path d='M16 27V9M16 9c-4 0-6 3-6 6M16 14c4 0 6 3 6 6' fill='none' stroke='%2324351f' stroke-width='3' stroke-linecap='round'/><circle cx='16' cy='6' r='3' fill='%23a5c957'/></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=${u.fonts}&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${L === "en" ? "" : "../"}../_engine/scrollcraft.css">
<style>
${css}
</style>
</head>
<body>
<a class="skip" href="#year">${u.skip}</a>

<header class="top">
  <div class="bar-a">
    <h1 class="mark"><span>${u.name}</span><small>${u.tag}</small></h1>
    <a class="lang" href="${u.other.href}" hreflang="${u.other.hl}" lang="${u.other.ol}">${u.other.label}</a>
    <a class="btn" href="#plan" data-to-plan>${u.cta}</a>
  </div>
  <nav class="months" aria-label="${u.monthsLabel}"><ol>${monthNav}</ol><span class="prog" id="prog" aria-hidden="true"></span></nav>
</header>

<main id="main">
  <!-- ACT 1: the year. Pinned; scroll is Jan to Dec and one line sweeps the calendar. -->
  <section id="year" data-sc-act="pan" data-sc-span="5.5" aria-label="${u.year}">
    <div class="stage" id="stage" data-sc-stage data-sc-verify-state="">
      <div class="head"><p class="lede">${esc(t(content.lede))}</p><p class="smp">${u.sample}</p></div>
      <div class="win" id="win">
        <div class="track" id="track">
          <ol class="cols" aria-hidden="true">${cols}</ol>
          <ol class="lanes">
${lanes}
          </ol>
        </div>
        <div class="sweep" id="sweep" aria-hidden="true"><span class="flag" id="flag">${mon[0]}</span></div>
      </div>
    </div>
  </section>

  <!-- ACT 2: the rotation board. Pinned; scroll rotates which grower's field is in the ground. -->
  <section id="board" data-sc-act="pin" data-sc-span="2" aria-label="${u.board}">
    <div class="stage board" id="bstage" data-sc-stage data-sc-verify-state="">
      <div class="bwrap">
        <div class="bl"><h2>${esc(t(stories.title))}</h2><p>${esc(t(stories.lede))}</p><ol class="step" aria-hidden="true">${steps}</ol></div>
        <div class="panel">
${cardsB}
        </div>
      </div>
    </div>
  </section>

  <!-- ACT 3: one flow row. The system in four lines, then the sowing plan. -->
  <section id="plan" class="plan" data-sc-act="flow" aria-label="${u.cta}">
    <div class="pin" data-sc-in>
      <h2>${esc(t(content.proof.title))}</h2>
      <figure class="pq-w"><blockquote class="pq"><p>${esc(t(content.proof.quote))}</p></blockquote><figcaption><cite>${b(esc(t(content.proof.who)))}</cite></figcaption></figure>
      <dl class="facts">${facts}</dl>
    </div>
    <div class="close"><div class="cin">
      <div data-sc-in><h2>${esc(t(content.cta.title))}</h2><p class="lead">${esc(t(content.cta.lede))}</p></div>
      <form id="sow" novalidate data-sc-in>
${f.map(fld).join("\n")}
        <div class="sub"><button class="btn" type="submit">${u.cta}</button><p class="reply" id="reply" role="status"></p></div>
      </form>
    </div></div>
    <div class="colo"><span>${u.sampleFoot}</span><a href="/field">${u.back}</a></div>
  </section>
</main>

<script>window.FIELD=${JSON.stringify(E)};</script>
<script src="${L === "en" ? "" : "../"}../_engine/scrollcraft.js"></script>
<script>ScrollCraft.mount(document.body);</script>
<script>
${js}
</script>
</body>
</html>
`;
}
const out = path.join(root, "apps/client/public/experiences/field");
fs.mkdirSync(path.join(out, "ar"), { recursive: true });
fs.writeFileSync(path.join(out, "index.html"), page("en"));
fs.writeFileSync(path.join(out, "ar/index.html"), page("ar"));
console.log("built", fs.statSync(path.join(out, "index.html")).size, fs.statSync(path.join(out, "ar/index.html")).size);
