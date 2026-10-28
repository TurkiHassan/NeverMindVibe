// Frame: one generator, two pages. Run: node build.mjs  (writes frame/index.html and frame/ar/index.html)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(here, "../../../apps/client/public/experiences/frame");

const SERIES = [
  { en: "The Wind Keeps Its Own Hours", ar: "الريح لها مواعيدها", y: "2022", n: 36, place: { en: "Patagonia", ar: "باتاغونيا" }, note: { en: "Sheep fences, shearing sheds and a road that disappears every afternoon at four.", ar: "أسيجة غنم وحظائر جزّ وطريق يختفي كل عصر عند الرابعة." }, still: 1, pos: "50% 50%", ar_: "16/10", m: "1/8", t: "9/13", g: "soft" },
  { en: "Salt Season", ar: "موسم الملح", y: "2021", n: 28, place: { en: "Camargue", ar: "الكامارغ" }, note: { en: "Harvesters on the pans at dawn, when the water holds the sky.", ar: "حصّادون على أحواض الملح عند الفجر حين يحتفظ الماء بالسماء." }, still: 2, pos: "50% 50%", ar_: "4/3", m: "6/13", t: "1/6", g: "deep" },
  { en: "Hours After Snow", ar: "ساعات بعد الثلج", y: "2023", n: 40, place: { en: "Hokkaido", ar: "هوكايدو" }, note: { en: "Village streets in the first quiet morning, before the ploughs.", ar: "شوارع قرية في أول صباح هادئ، قبل أن تمرّ كاسحات الثلج." }, still: 3, pos: "50% 60%", ar_: "2/1", m: "1/9", t: "10/13", g: "paper" },
  { en: "Lamps of the Night Ferry", ar: "مصابيح عبّارة الليل", y: "2019", n: 32, place: { en: "Lofoten", ar: "لوفوتن" }, note: { en: "A crossing of forty minutes, photographed over three winters.", ar: "عبور مدته أربعون دقيقة، صُوّر على مدى ثلاثة شتاءات." }, still: 4, pos: "50% 50%", ar_: "1/1", m: "8/13", t: "2/7", g: "soft" },
  { en: "What the Tide Left", ar: "ما تركه المدّ", y: "2020", n: 24, place: { en: "Hebrides", ar: "الهبريدس" }, note: { en: "Rope, glass, bone and one blue boot, laid out on grey sand.", ar: "حبال وزجاج وعظام وحذاء أزرق واحد على رمل رمادي." }, still: 1, pos: "100% 45%", ar_: "21/9", m: "3/12", t: "3/9", g: "deep", under: true },
];
const PRINTS = [
  [{ en: "Wind, Estancia Road", ar: "الريح، طريق المزرعة" }, "40 × 50 cm", { en: "Edition of 12", ar: "12 نسخة" }, "€680"],
  [{ en: "Pan at Dawn", ar: "الحوض عند الفجر" }, "60 × 75 cm", { en: "Edition of 8", ar: "8 نسخ" }, "€1,150"],
  [{ en: "First Morning, Biei", ar: "الصباح الأول، بييي" }, "50 × 60 cm", { en: "Edition of 10", ar: "10 نسخ" }, "€890"],
  [{ en: "Ferry, 23:40", ar: "العبّارة، 23:40" }, "30 × 40 cm", { en: "Edition of 15", ar: "15 نسخة" }, "€420"],
  [{ en: "Blue Boot", ar: "الحذاء الأزرق" }, "40 × 40 cm", { en: "Edition of 12", ar: "12 نسخة" }, "€540"],
];
const C = {
  title: { en: "Frame · Hold the light a little longer (sample brand)", ar: "إطار · أمسِك الضوء لحظةً أطول (علامة تجريبية)" },
  desc: { en: "A scroll-driven look at Frame, a sample photography practice: a light meter sets the exposure as you read five series. Commission a story.", ar: "نظرة تفاعلية على «إطار»، ممارسة تصوير تجريبية: يضبط مقياس الضوء التعريض وأنت تقرأ خمس سلاسل. كلّفنا بقصة." },
  skip: { en: "Skip to selected work", ar: "انتقل إلى الأعمال المختارة" },
  brand: { en: "Frame", ar: "إطار" },
  h1: { en: "Hold the light a little longer.", ar: "أمسِك الضوء لحظةً أطول." },
  lede: { en: "A photography practice of fourteen series on three continents, open for commissions and prints.", ar: "ممارسة تصوير من أربع عشرة سلسلة في ثلاث قارات، مفتوحة للتكليفات والطبعات." },
  cta: { en: "Commission a story", ar: "كلّفنا بقصة" },
  sec: { en: "View selected work", ar: "شاهد الأعمال المختارة" },
  workTitle: { en: "Fourteen series, shot on film and patience", ar: "أربع عشرة سلسلة، بالفيلم والصبر" },
  workLede: { en: "Long stays in a few places. Each series is the result of returning until the light behaved.", ar: "إقامات طويلة في أماكن قليلة. كل سلسلة ثمرة العودة إلى أن يستقيم الضوء." },
  emptyCap: { en: "Nothing exposed yet.", ar: "لم يُلتقط شيء بعد." },
  fine: { en: "Frame is a fictional photography practice. Every series, print, quote and figure on this page is sample content.", ar: "«إطار» علامة خيالية لممارسة تصوير. كل سلسلة وطبعة واقتباس ورقم في هذه الصفحة محتوى تجريبي." },
  no: { en: "No.", ar: "رقم" },
  frames: { en: "frames", ar: "لقطة" },
  sample: { en: "Sample image", ar: "صورة تجريبية" },
  alt: { en: "Sample still: empty picture frames hung on a plaster wall, crossed by window light.", ar: "لقطة تجريبية: إطارات صور فارغة معلّقة على جدار جصي يعبره ضوء النافذة." },
  edgeLabel: { en: "Series and frame counter. The counter runs from 1 to 160 across the five series shown.", ar: "السلاسل وعدّاد اللقطات. يمتد العدّاد من 1 إلى 160 عبر السلاسل الخمس المعروضة." },
  tickLabel: { en: "Series: ", ar: "السلسلة: " },
  langHref: { en: "ar/", ar: "../" }, langText: { en: "AR", ar: "EN" }, langLabel: { en: "العربية", ar: "English" }, langCode: { en: "ar", ar: "en" },
  aboutTitle: { en: "How the work is made", ar: "كيف يُصنع العمل" },
  quote: { en: "She waited three winters for one ferry crossing, and the picture is exactly as patient as that sounds.", ar: "انتظرت ثلاثة شتاءات من أجل عبور عبّارة واحد، والصورة صبورة بقدر ما يوحي ذلك." },
  who: { en: "Eilidh Ward, curator, Northern Lights Gallery", ar: "إيليد وورد، قيّمة، معرض الأضواء الشمالية" },
  filmCap: { en: "Sample footage: the light crossing an empty wall.", ar: "لقطات تجريبية: الضوء يعبر جدارًا فارغًا." },
  facts: [
    [{ en: "Series", ar: "سلاسل" }, "14"], [{ en: "Continents", ar: "قارات" }, "3"],
    [{ en: "Format", ar: "قياس الفيلم" }, { en: "35mm", ar: "35 مم" }], [{ en: "Based in", ar: "المقر" }, { en: "Edinburgh", ar: "إدنبرة" }],
  ],
  printsTitle: { en: "Editioned prints, made one at a time", ar: "طبعات محدودة تُصنع واحدة تلو الأخرى" },
  printsLede: { en: "Printed by hand from the original negatives. Each print is signed, numbered and stamped on the back.", ar: "تُطبع يدويًا من النيجاتيف الأصلي. كل طبعة موقّعة ومرقّمة ومختومة على ظهرها." },
  cols: [{ en: "Print", ar: "الطبعة" }, { en: "Size", ar: "المقاس" }, { en: "Edition", ar: "عدد النسخ" }, { en: "Price", ar: "السعر" }],
  printsFoot: { en: "Archival cotton rag paper, unframed, shipped flat in a rigid box within 10 working days. Tracked and insured worldwide; duties are paid by the buyer.", ar: "ورق قطني أرشيفي بلا إطار، يُشحن مسطّحًا في صندوق صلب خلال 10 أيام عمل. الشحن مؤمَّن ويمكن تتبعه إلى أي بلد، والرسوم الجمركية على المشتري." },
  plateCap: { en: "Plate. Prints are made one at a time; commissions are limited to six a year.", ar: "اللوحة. تُصنع الطبعات واحدة تلو الأخرى، والتكليفات محدودة بستة في السنة." },
  ctaTitle: { en: "Tell us the story worth waiting for.", ar: "أخبرنا بالقصة التي تستحق الانتظار." },
  ctaLede: { en: "Commissions are limited to six a year. Tell us about the place and the people, and we will reply within a week.", ar: "التكليفات محدودة بستة في السنة. حدّثنا عن المكان والناس، وسنردّ خلال أسبوع." },
  fName: { en: "Your name", ar: "اسمك" }, fEmail: { en: "Email", ar: "البريد الإلكتروني" }, fType: { en: "Project type", ar: "نوع المشروع" },
  fLoc: { en: "Where will we be working?", ar: "أين سنعمل؟" }, fStory: { en: "What is the story, and who should see it?", ar: "ما القصة، ومن ينبغي أن يراها؟" },
  types: [{ en: "Editorial story", ar: "قصة صحفية" }, { en: "Book or monograph", ar: "كتاب أو إصدار مصوّر" }, { en: "Organisation or brand", ar: "مؤسسة أو علامة" }, { en: "Private commission", ar: "تكليف خاص" }],
  err: { en: "Add your name and a valid email.", ar: "أضف اسمك وبريدًا إلكترونيًا صالحًا." },
  ok: { en: "Thank you. We will read your note carefully and write back within a week.", ar: "شكرًا لك. سنقرأ رسالتك بعناية ونكتب لك خلال أسبوع." },
  okSample: { en: "Sample form: nothing was sent.", ar: "نموذج تجريبي: لم يُرسل شيء." },
  foot: { en: "Frame is a fictional brand. This form is a sample: nothing is sent or stored.", ar: "«إطار» علامة خيالية. هذا النموذج تجريبي: لا يُرسل ولا يُخزَّن شيء." },
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function build(lang) {
  const ar = lang === "ar";
  const iso = (s) => esc(s).replace(/(?:€\s?)?\d[\d.,:]*(?:\s*×\s*\d[\d.,:]*)?(?:\s*cm)?/g, (m) => (ar ? `<bdi dir="ltr">${m}</bdi>` : m));
  const t = (o) => (typeof o === "string" ? iso(o) : iso(o[lang]));
  const plain = (o) => esc(typeof o === "string" ? o : o[lang]);
  const L = (n) => (ar ? `<bdi dir="ltr">${n}</bdi>` : n);
  const asset = ar ? "../assets/" : "assets/";
  const cum = SERIES.map((s, i) => 1 + SERIES.slice(0, i).reduce((a, b) => a + b.n, 0));
  const meta = (s) => `${L(s.y)} · ${L(s.n)} ${plain(C.frames)} · ${plain(s.place)}`;
  const fonts = ar
    ? "family=El+Messiri:wght@400;600&family=Tajawal:wght@300;400"
    : "family=Italiana&family=Jost:wght@300;400;500";

  const ticks = SERIES.map((s, i) => `<li><a href="#s${i + 1}" aria-label="${plain(C.tickLabel)}${plain(s)}"><i></i></a></li>`).join("");
  const chapters = SERIES.map((s, i) => `
<section class="ser g-${s.g}${s.under ? " ser--under" : ""}" id="s${i + 1}" data-sc-act="flow" aria-labelledby="h-s${i + 1}" style="--m:${s.m};--t:${s.t};--ar:${s.ar_};--pos:${s.pos}">
  <header class="ser__head" data-sc-reveal="up" data-sc-reveal-at="0.03 0.2"><h2 id="h-s${i + 1}">${plain(s)}</h2></header>
  <figure class="fig" data-sc-in><div class="mat"><div class="pic fx"><img src="/assets/domain-stills/frame-${s.still}.webp" width="960" height="540" alt="${plain(C.alt)}"${i ? ' loading="lazy"' : ""} data-sc-parallax="0.5"></div></div><figcaption><span>${meta(s)}</span><span>${plain(C.sample)}</span></figcaption></figure>
  <div class="ser__txt" data-sc-in><p class="note">${t(s.note)}</p></div>
</section>`).join("\n");

  const rows = PRINTS.map((r) => `<tr><th scope="row">${t(r[0])}</th><td>${ar ? `<bdi dir="ltr">${esc(r[1])}</bdi>` : esc(r[1])}</td><td>${t(r[2])}</td><td>${ar ? `<bdi dir="ltr">${esc(r[3])}</bdi>` : esc(r[3])}</td></tr>`).join("");
  const facts = C.facts.map((f) => `<div><dt>${plain(f[0])}</dt><dd>${t(f[1])}</dd></div>`).join("");
  const opts = C.types.map((o) => `<option>${plain(o)}</option>`).join("");
  const apHref = C.langHref[lang];

  return `<!doctype html>
<html lang="${lang}" dir="${ar ? "rtl" : "ltr"}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${plain(C.title)}</title>
<meta name="description" content="${plain(C.desc)}">
<link rel="alternate" hreflang="en" href="${ar ? "../" : "./"}">
<link rel="alternate" hreflang="ar" href="${ar ? "./" : "ar/"}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='4' fill='%231c1a19'/><rect x='7' y='6' width='18' height='20' fill='none' stroke='%23d8c3a7' stroke-width='3'/></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?${fonts}&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${ar ? "../../" : "../"}_engine/scrollcraft.css">
<style>
:root{
  --paper:#1c1a19; --soft:#2d2927; --deep:#141211; --mould:#413a35; --linen:#f8f3ed; --sand:#d8c3a7;
  --ink:#f8f3ed; --mute:#b9afa4; --ring:#d8c3a7; --pit:#0e0d0c;
  --bg:var(--paper); --fg:var(--ink); --fg2:var(--mute);
  --edge:84px; --gut:clamp(1.25rem,4.6vw,5.5rem); --ds:1; --dir:1;
  --sc-canvas:var(--paper); --sc-surface:var(--soft); --sc-ink:var(--ink); --sc-ink-soft:var(--mute);
  --sc-accent:var(--sand); --sc-accent-ink:var(--paper);
  --sc-font-display:var(--fd); --sc-font-text:var(--ft);
}
html[lang="en"]{ --fd:"Italiana",Georgia,serif; --ft:"Jost",system-ui,sans-serif; }
html[lang="ar"]{ --fd:"El Messiri",system-ui,sans-serif; --ft:"Tajawal",system-ui,sans-serif; --ds:.8; --dir:-1; }
html{ background:var(--paper); }
body{ margin:0; background:var(--paper); color:var(--fg); font-family:var(--ft); font-weight:400; font-size:calc(1.0625rem*var(--ds,1)*1); line-height:1.6; padding-inline-start:var(--edge); overflow-x:clip; }
html[lang="ar"] body{ font-size:1.1875rem; line-height:1.85; }
html[lang="ar"] *{ letter-spacing:0 !important; }
bdi{ unicode-bidi:isolate; }
:focus-visible{ outline:3px solid var(--ring); outline-offset:3px; border-radius:3px; }
.sr{ position:absolute; width:1px; height:1px; overflow:hidden; clip-path:inset(50%); white-space:nowrap; }
.skip{ position:fixed; z-index:60; inset-block-start:.5rem; inset-inline-start:.5rem; padding:.7rem 1rem; min-height:44px; background:var(--linen); color:var(--paper); text-decoration:none; font-weight:500; transform:translateY(-200%); display:inline-flex; align-items:center; }
.skip:focus{ transform:none; outline-color:var(--sand); }
h1,h2,h3,p,ul,ol,dl,dd,figure,blockquote,table{ margin:0; padding:0; }
ul,ol{ list-style:none; }
a{ color:inherit; }
.g-paper{ background:var(--paper); } .g-soft{ background:var(--soft); } .g-deep{ background:var(--deep); }
.lbl{ font-family:var(--ft); font-weight:500; font-size:.78rem; letter-spacing:.09em; text-transform:uppercase; color:var(--fg2); }
html[lang="ar"] .lbl{ font-family:var(--fd); font-weight:600; font-size:.95rem; text-transform:none; }
.cta{ display:inline-flex; align-items:center; min-height:48px; padding-block:.55rem; font-family:var(--ft); font-weight:500; font-size:1.1rem; color:var(--fg); text-decoration:none; border:0; border-block-end:2px solid var(--sand); background:none; cursor:pointer; transition:border-color .2s ease, color .2s ease; }
html[lang="ar"] .cta{ font-family:var(--fd); font-weight:600; font-size:1.2rem; }
.cta:hover{ border-color:var(--fg); }
.tx{ display:inline-flex; align-items:center; min-height:44px; min-width:44px; color:var(--fg2); text-decoration:underline; text-underline-offset:.28em; text-decoration-thickness:1px; }
.tx:hover{ color:var(--fg); }

/* ---------------------------------------------------------- film edge (nav) */
.edge{ position:fixed; inset-block:0; inset-inline-start:0; width:var(--edge); z-index:30; background:#0b0a09; color:var(--ink); --ring:var(--sand); display:flex; flex-direction:column; align-items:center; padding:8px 0 12px; border-inline-end:1px solid var(--mould); overflow:hidden; --sh:clamp(70px,15vh,130px); }
.edge::before,.edge::after{ content:""; position:absolute; inset-block:-36px; width:12px; background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='18'%3E%3Crect x='2' y='4' width='8' height='10' rx='2.5' fill='%23413a35'/%3E%3C/svg%3E") repeat-y; transform:translate3d(0,calc(var(--sy,0px)*-1),0); }
.edge::before{ inset-inline-start:6px; } .edge::after{ inset-inline-end:6px; }
.edge > *{ position:relative; z-index:1; }
.edge__lang{ display:grid; place-items:center; width:44px; min-height:44px; font:500 .82rem var(--ft); letter-spacing:.06em; color:var(--ink); text-decoration:none; border:1px solid var(--mould); }
html[lang="ar"] .edge__lang{ font-family:var(--ft); letter-spacing:0; }
.edge__lang:hover{ border-color:var(--sand); }
.edge__no{ display:grid; justify-items:center; margin-top:12px; line-height:1.1; color:var(--mute); font-size:.7rem; }
.edge__no b{ font:500 1.15rem var(--ft); color:var(--ink); font-variant-numeric:tabular-nums; }
.edge__ticks{ display:flex; flex-direction:column; margin-top:6px; }
.edge__ticks a{ display:grid; place-items:center; width:44px; height:44px; text-decoration:none; }
.edge__ticks i{ display:block; width:22px; height:15px; border:1.5px solid var(--mute); transition:background-color .2s ease, border-color .2s ease; }
.edge__ticks a:hover i{ border-color:var(--ink); }
.edge__ticks a.is-seen i{ border-color:var(--sand); }
.edge__ticks a[aria-current] i{ background:var(--sand); border-color:var(--sand); }
.edge__meter{ margin-top:auto; display:flex; flex-direction:column; align-items:center; gap:10px; }
.edge__scale{ position:relative; width:9px; height:var(--sh); border-inline-start:1.5px solid var(--mute); background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9' height='13'%3E%3Cpath d='M0 .5h6' stroke='%23b9afa4' stroke-width='1'/%3E%3C/svg%3E") repeat-y; }
.edge__scale i{ position:absolute; inset-block-start:0; inset-inline-start:-6px; width:19px; height:3px; background:var(--sand); transform:translate3d(0,calc((1 - var(--u,0))*(var(--sh) - 3px)),0); }
.edge__read{ display:grid; justify-items:center; gap:1px; font:500 .74rem/1.25 var(--ft); color:var(--ink); font-variant-numeric:tabular-nums; }
.edge__read b{ font-weight:500; }

/* ------------------------------------------------------------------ hero */
.hero{ min-height:100svh; display:grid; grid-template-columns:repeat(12,minmax(0,1fr)); grid-template-rows:auto 1fr auto; column-gap:clamp(1rem,2vw,2rem); padding:clamp(1.25rem,3.5vh,2.5rem) var(--gut) clamp(1.5rem,4vh,2.5rem); background:var(--paper); }
.hero__top{ grid-column:1/-1; display:flex; justify-content:space-between; align-items:center; min-height:44px; }
.brand{ font-family:var(--fd); font-size:calc(1.5rem*var(--ds)); line-height:1; }
.hero__lang{ display:none; }
.hero__main{ grid-column:1/9; grid-row:2; align-self:center; padding-block:3vh; }
h1{ font:400 calc(clamp(3.1rem,8.2vw,8.2rem)*var(--ds))/1.02 var(--fd); max-width:11ch; text-wrap:balance; }
html[lang="ar"] h1{ line-height:1.2; max-width:13ch; }
.hero__lede{ margin-top:clamp(1.5rem,4vh,2.75rem); max-width:34ch; font-size:clamp(1.1rem,1.5vw,1.4rem); color:var(--fg2); }
.hero__links{ margin-top:1.25rem; display:flex; flex-wrap:wrap; gap:.25rem 2rem; align-items:center; }
.hero__frame{ grid-column:9/13; grid-row:2/4; align-self:end; max-width:380px; width:100%; justify-self:end; }
.empty{ border:clamp(10px,1.2vw,16px) solid var(--mould); background:var(--pit); aspect-ratio:4/5; position:relative; }
.empty::after{ content:""; position:absolute; inset:clamp(.7rem,1.6vw,1.4rem); border:1px solid var(--mould); }
.hero__frame figcaption{ margin-top:.9rem; font-size:.95rem; color:var(--fg2); }
.hero__frame figcaption b{ display:block; font-weight:400; font-family:var(--fd); font-size:calc(1.35rem*var(--ds)); color:var(--fg); line-height:1.25; }
.hero__fine{ grid-column:1/9; grid-row:3; font-size:.9rem; color:var(--fg2); max-width:60ch; }

/* ------------------------------------------------------------ series chapters */
.ser{ min-height:100svh; padding:clamp(3.5rem,9vh,6rem) var(--gut); display:grid; grid-template-columns:repeat(12,minmax(0,1fr)); column-gap:clamp(1rem,2vw,2rem); row-gap:clamp(1.5rem,4vh,3rem); align-content:center; color:var(--ink); }
.ser__head{ grid-column:1/11; grid-row:1; }
.ser h2{ font:400 calc(clamp(2.5rem,5.4vw,5.3rem)*var(--ds))/1.04 var(--fd); text-wrap:balance; }
html[lang="ar"] .ser h2{ line-height:1.3; }
.fig{ grid-column:var(--m); grid-row:2; align-self:center; }
.ser__txt{ grid-column:var(--t); grid-row:2; align-self:end; }
.ser--under .ser__txt{ grid-row:3; }
.mat{ padding:clamp(.5rem,.9vw,.85rem); background:var(--pit); border:1px solid var(--mould); }
.pic{ position:relative; overflow:hidden; aspect-ratio:var(--ar,16/10); background:var(--pit); }
.pic img{ position:absolute; inset-inline:0; top:-8%; width:100%; height:116%; object-fit:cover; object-position:var(--pos,50% 50%); }
.fx{ filter:brightness(var(--b,1)) contrast(var(--k,1)); }
.fig figcaption{ margin-top:.7rem; display:flex; justify-content:space-between; gap:1rem; flex-wrap:wrap; font-size:.92rem; color:var(--fg2); }
.note{ font-size:calc(clamp(1.1rem,1.4vw,1.35rem)*1); line-height:1.6; max-width:34ch; }
html[lang="ar"] .note{ line-height:1.9; }

/* ------------------------------------------------------------------- peak */
#peak{ --bg:var(--paper); --fg:var(--ink); --fg2:var(--mute); background:var(--bg); color:var(--fg); }
#peak[data-g="1"]{ --bg:#2d2927; } #peak[data-g="2"]{ --bg:#413a35; } #peak[data-g="3"]{ --bg:#564d45; --fg2:#e4dbd0; }
#peak[data-g="4"]{ --bg:var(--linen); --fg:#1c1a19; --fg2:#554d46; --ring:#1c1a19; }
.peak__stage{ display:grid; align-content:center; grid-template-columns:repeat(12,minmax(0,1fr)); column-gap:clamp(1rem,2vw,2rem); align-items:center; padding:clamp(1.25rem,4vh,3rem) var(--gut); }
.peak__film{ grid-column:1/8; }
.peak__film .mat{ background:var(--pit); }
#peak[data-g="4"] .mat{ background:#fffdf9; border-color:#cdc3b6; }
.peak__film figcaption{ margin-top:.7rem; font-size:.92rem; color:var(--fg2); }
.peak__text{ grid-column:9/13; }
.peak__text h2{ font:400 calc(clamp(2.3rem,4.4vw,4.4rem)*var(--ds))/1.06 var(--fd); }
html[lang="ar"] .peak__text h2{ line-height:1.3; }
blockquote{ margin-top:clamp(1.25rem,3vh,2rem); font-size:calc(clamp(1.15rem,1.65vw,1.55rem)*1); line-height:1.5; font-family:var(--ft); font-weight:400; }
html[lang="ar"] blockquote{ font-family:var(--fd); }
html[lang="ar"] blockquote{ line-height:1.8; }
.cite{ margin-top:.9rem; font-size:.95rem; color:var(--fg2); font-style:normal; display:block; }
.peak__after{ padding:clamp(2rem,6vh,4rem) var(--gut) clamp(3rem,8vh,5rem); }
.facts{ display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:1rem clamp(1rem,2vw,2rem); border-block-start:1px solid var(--fg2); padding-block-start:1.1rem; }
.facts dt{ font-size:.92rem; color:var(--fg2); }
.facts dd{ font:300 calc(clamp(1.8rem,3vw,3rem)*var(--ds))/1.15 var(--ft); margin-top:.2rem; }
html[lang="ar"] .facts dd{ font-weight:400; }

/* ------------------------------------------------------------------ plate */
.plate{ --bg:var(--linen); --fg:#1c1a19; --fg2:#554d46; --ring:#1c1a19; background:var(--linen); color:var(--fg); padding:clamp(3rem,8vh,6rem) var(--gut) 1.5rem; min-height:100svh; }
.plate .mat{ background:#fffdf9; border-color:#cdc3b6; }
.plate .pic{ --ar:3/1; background:#e6ded3; }
.plate__cap{ margin-top:1.1rem; display:grid; grid-template-columns:minmax(0,1.15fr) minmax(0,1fr); gap:clamp(2rem,5vw,6rem); border-block-start:1px solid var(--fg); padding-block-start:1.1rem; }
.plate h2{ font:400 calc(clamp(1.9rem,3.2vw,3.2rem)*var(--ds))/1.1 var(--fd); }
html[lang="ar"] .plate h2{ line-height:1.35; }
.plate__lede{ margin-top:.8rem; max-width:44ch; color:var(--fg2); }
.platecap{ margin-top:.7rem; font-size:.92rem; color:var(--fg2); max-width:60ch; }
table{ width:100%; border-collapse:collapse; margin-top:1.4rem; font-size:.98rem; font-variant-numeric:tabular-nums; }
th,td{ text-align:start; padding:.62rem .8rem .62rem 0; border-block-end:1px solid #cdc3b6; font-weight:400; vertical-align:top; }
html[lang="ar"] th, html[lang="ar"] td{ padding:.62rem 0 .62rem .8rem; }
thead th{ font-size:.82rem; color:var(--fg2); }
td:nth-child(2),td:nth-child(4){ white-space:nowrap; }
tbody th{ font-weight:500; }
html[lang="ar"] tbody th{ font-family:var(--fd); font-weight:600; }
.foot{ margin-top:1rem; font-size:.92rem; color:var(--fg2); max-width:56ch; }
form{ margin-top:1.4rem; display:grid; grid-template-columns:1fr 1fr; gap:.6rem 1.25rem; }
.fld{ display:grid; gap:.1rem; } .fld--wide{ grid-column:1/-1; }
.fld label{ font-size:.82rem; color:var(--fg2); }
.fld input,.fld select,.fld textarea{ font:400 1rem var(--ft); color:var(--fg); background:transparent; border:0; border-block-end:1.5px solid var(--fg); border-radius:0; min-height:44px; padding:.5rem 0; width:100%; }
html[lang="ar"] .fld input, html[lang="ar"] .fld select, html[lang="ar"] .fld textarea{ font-size:1.1rem; }
.fld select{ appearance:none; background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%231c1a19' stroke-width='1.6'/%3E%3C/svg%3E") no-repeat; background-position:right .2rem center; padding-inline-end:1.6rem; }
html[dir="rtl"] .fld select{ background-position:left .2rem center; }
.fld textarea{ min-height:84px; resize:vertical; }
.fld input[aria-invalid="true"]{ border-block-end-width:3px; }
.fld input:focus-visible,.fld select:focus-visible,.fld textarea:focus-visible{ outline-offset:2px; }
.err{ grid-column:1/-1; min-height:1.4em; color:#8a2b1c; font-weight:500; }
.plate .cta{ grid-column:1/-1; justify-self:start; border-block-end-color:var(--fg); }
.okmsg{ margin-top:1.4rem; font-family:var(--fd); font-size:calc(1.4rem*var(--ds)); line-height:1.4; }
.okmsg small{ display:block; margin-top:.6rem; font:400 .92rem var(--ft); color:var(--fg2); }
.colo{ margin-top:clamp(2rem,5vh,3.5rem); padding-block:.8rem 1rem; border-block-start:1px solid #cdc3b6; display:flex; flex-wrap:wrap; gap:.4rem 2rem; justify-content:space-between; align-items:center; font-size:.9rem; color:var(--fg2); }

/* ------------------------------------------------------------------ phone */
@media (max-width:860px){
  .hero{ grid-template-columns:1fr; grid-template-rows:auto auto auto auto; }
  .hero__main,.hero__frame,.hero__fine{ grid-column:1; grid-row:auto; }
  .hero__frame{ max-width:none; justify-self:start; width:min(56vw,240px); margin-top:1rem; }
  .hero__frame figcaption{ width:calc(100vw - 2*var(--gut)); }
  .ser{ grid-template-columns:1fr; align-content:start; min-height:100svh; }
  .ser__head,.fig,.ser__txt{ grid-column:1; grid-row:auto; }
  .ser--under .ser__txt{ grid-row:auto; }
  .peak__stage{ grid-template-columns:1fr; align-content:center; row-gap:.4rem; }
  .peak__film,.peak__text{ grid-column:1; }
  .facts{ grid-template-columns:1fr 1fr; }
  .plate .pic{ --ar:16/10; }
  .plate__cap{ grid-template-columns:1fr; }
  form{ grid-template-columns:1fr; }
}
@media (max-width:720px){
  body{ padding-inline-start:0; padding-block-end:calc(56px + env(safe-area-inset-bottom)); }
  .edge{ inset-block:auto 0; inset-inline:0; width:auto; height:calc(56px + env(safe-area-inset-bottom)); flex-direction:row; align-items:center; justify-content:space-between; padding:0 8px env(safe-area-inset-bottom); border-inline-end:0; border-block-start:1px solid var(--mould); overflow:visible; }
  .edge::before,.edge::after{ display:none; }
  .edge__lang{ display:none; }
  .hero__lang{ display:inline-flex; }
  .edge__no{ margin:0; min-width:48px; }
  .edge__ticks{ flex-direction:row; margin:0; }
  .edge__meter{ margin:0; flex-direction:row; position:static; }
  .edge__scale{ position:absolute; inset-block-start:0; inset-inline:0; width:auto; height:4px; border:0; background:var(--deep); }
  .edge__scale i{ inset-inline-start:0; inset-block-start:0; width:18px; height:4px; transform:translate3d(calc(var(--dir)*var(--u,0)*(100vw - 18px)),0,0); }
  .edge__read{ min-width:46px; }
}

/* ----------------------------------------------------------- reduced motion */
@media (prefers-reduced-motion: reduce){
  .edge__ticks i,.cta{ transition:none; }
}
</style>
</head>
<body>
<a class="skip" href="#s1">${plain(C.skip)}</a>

<nav class="edge" id="edge" aria-label="${plain(C.edgeLabel)}" data-sc-verify-state="">
  <a class="edge__lang" href="${apHref}" hreflang="${C.langCode[lang]}" lang="${C.langCode[lang]}" aria-label="${plain(C.langLabel)}">${plain(C.langText)}</a>
  <p class="edge__no" aria-hidden="true"><span>${plain(C.no)}</span><b id="no"><bdi dir="ltr">000</bdi></b></p>
  <ol class="edge__ticks">${ticks}</ol>
  <div class="edge__meter" aria-hidden="true"><span class="edge__scale"><i></i></span><p class="edge__read"><b id="ap" dir="ltr">f/16</b><b id="sh" dir="ltr">1/1000</b></p></div>
</nav>

<main id="main">

<section class="hero" id="top" aria-labelledby="h-top">
  <div class="hero__top"><p class="brand">${plain(C.brand)}</p><a class="tx hero__lang" href="${apHref}" hreflang="${C.langCode[lang]}" lang="${C.langCode[lang]}">${plain(C.langLabel)}</a></div>
  <div class="hero__main">
    <h1 id="h-top">${plain(C.h1)}</h1>
    <p class="hero__lede">${plain(C.lede)}</p>
    <p class="hero__links"><a class="cta" href="#order">${plain(C.cta)}</a><a class="tx" href="#s1">${plain(C.sec)}</a></p>
  </div>
  <figure class="hero__frame"><div class="empty" role="img" aria-label="${ar ? "إطار صورة فارغ" : "An empty picture frame"}"></div><figcaption><b>${plain(C.workTitle)}</b>${plain(C.workLede)}<br>${plain(C.no)} ${L("000")}. ${plain(C.emptyCap)}</figcaption></figure>
  <p class="hero__fine">${plain(C.fine)}</p>
</section>
${chapters}

<section class="peak" id="peak" data-g="0" aria-labelledby="h-peak">
  <div id="film" data-sc-act="scrub" data-sc-span="2.5" data-sc-dwell="0.3">
    <div data-sc-stage class="peak__stage">
      <figure class="peak__film"><div class="mat"><div class="pic fx" id="filmPic" style="--ar:16/9"><img class="sc-stage__poster" src="/assets/domain-stills/frame-4.webp" width="960" height="540" alt="${plain(C.alt)}"><video data-sc-scrub data-sc-src="${asset}frame-film.mp4" data-sc-src-mobile="${asset}frame-film-m.mp4" muted playsinline preload="none" aria-hidden="true" tabindex="-1"></video></div></div><figcaption>${plain(C.filmCap)}</figcaption></figure>
      <div class="peak__text">
        <h2 id="h-peak">${plain(C.aboutTitle)}</h2>
        <blockquote><p>${plain(C.quote)}</p><cite class="cite">${plain(C.who)}</cite></blockquote>
      </div>
    </div>
  </div>
  <div class="peak__after"><dl class="facts" data-sc-in data-sc-stagger="90">${facts}</dl></div>
</section>

<section class="plate" id="order" data-sc-act="flow" aria-labelledby="h-order">
  <figure><div class="mat"><div class="pic fx" style="--b:1.06;--pos:50% 78%"><img src="/assets/domain-stills/frame-3.webp" width="960" height="540" alt="${plain(C.alt)}" loading="lazy"></div></div><figcaption class="platecap">${plain(C.plateCap)} ${plain(C.sample)}.</figcaption></figure>
  <div class="plate__cap">
    <div data-sc-in>
      <h2>${plain(C.printsTitle)}</h2>
      <p class="plate__lede">${plain(C.printsLede)}</p>
      <table><thead><tr>${C.cols.map((c) => `<th scope="col">${plain(c)}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table>
      <p class="foot">${plain(C.printsFoot)}</p>
    </div>
    <div data-sc-in>
      <h2 id="h-order">${plain(C.ctaTitle)}</h2>
      <p class="plate__lede">${plain(C.ctaLede)}</p>
      <form id="form" novalidate data-err="${plain(C.err)}">
        <div class="fld"><label for="f-name">${plain(C.fName)}</label><input id="f-name" name="name" type="text" autocomplete="name" aria-invalid="false" aria-describedby="err"></div>
        <div class="fld"><label for="f-email">${plain(C.fEmail)}</label><input id="f-email" name="email" type="email" inputmode="email" autocomplete="email" dir="ltr" aria-invalid="false" aria-describedby="err"></div>
        <div class="fld"><label for="f-type">${plain(C.fType)}</label><select id="f-type" name="type">${opts}</select></div>
        <div class="fld"><label for="f-loc">${plain(C.fLoc)}</label><input id="f-loc" name="location" type="text"></div>
        <div class="fld fld--wide"><label for="f-story">${plain(C.fStory)}</label><textarea id="f-story" name="story" rows="3"></textarea></div>
        <p class="err" id="err" role="alert"></p>
        <button class="cta" type="submit">${plain(C.cta)}</button>
      </form>
      <p class="okmsg" id="ok" role="status" tabindex="-1" hidden>${plain(C.ok)}<small>${plain(C.okSample)}</small></p>
    </div>
  </div>
  <div class="colo"><p>${plain(C.foot)}</p><a class="tx" href="${apHref}" hreflang="${C.langCode[lang]}" lang="${C.langCode[lang]}">${plain(C.langLabel)}</a></div>
</section>
</main>

<script src="${ar ? "../../" : "../"}_engine/scrollcraft.js"></script>
<script>ScrollCraft.mount(document.body);</script>
<script>
/* Frame. One light meter. A single render() reads scroll and writes: the exposure of each still (a
   brightness grade that lifts toward the middle of the screen and falls at the edges), the edge
   counter, the f-stop and shutter readout, the needle, and the ground of the peak chapter, which
   steps (never fades) until the light opens. The same values go to data-sc-verify-state. */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  var edge = $("#edge"), noEl = $("#no"), apEl = $("#ap"), shEl = $("#sh");
  var ticks = $$(".edge__ticks a");
  var sers = $$(".ser"), peak = $("#peak"), film = $("#film"), filmPic = $("#filmPic"), plate = $("#order");
  var FR = [${SERIES.map((s) => s.n).join(",")}], START = [${cum.join(",")}], TOTAL = ${SERIES.reduce((a, s) => a + s.n, 0)};
  var AP = ["22", "16", "11", "8", "5.6", "4", "2.8", "2", "1.4"];
  var SH = ["1000", "500", "250", "125", "60", "30", "15", "8", "4", "2"];
  var vh = innerHeight, S = [], P = {}, last = {};
  var clamp = function (v) { return v < 0 ? 0 : v > 1 ? 1 : v; };
  var smooth = function (t) { return t * t * (3 - 2 * t); };
  var abs = function (el) { return el.getBoundingClientRect().top + scrollY; };

  function measure() {
    vh = innerHeight;
    S = sers.map(function (s) {
      var pic = $(".pic", s);
      return { el: s, pic: pic, top: abs(s), h: s.offsetHeight, ft: abs(pic), fh: pic.offsetHeight };
    });
    P = { top: abs(peak), h: peak.offsetHeight, ft: abs(film), fh: film.offsetHeight, plate: abs(plate) };
    last.sig = "";
    render();
  }

  function render() {
    var y = scrollY, mid = y + vh * 0.5, i, u = 0.04, k = -1;
    var su = 0;
    for (i = 0; i < S.length; i++) {
      var c = clamp(1 - Math.abs(S[i].ft + S[i].fh / 2 - y - vh / 2) / (vh * 0.8));
      var sm = smooth(c);
      S[i].c = sm;
      if (mid >= S[i].top && mid < S[i].top + S[i].h) k = i;
      var g = 0.1 + 0.5 * sm;
      if (g > su) su = g;
    }
    var pp = P.fh > vh ? clamp((y - P.ft) / (P.fh - vh)) : 0;
    var inPeakOrAfter = y >= P.ft;
    var pu = inPeakOrAfter ? 0.4 + 0.6 * clamp(pp / 0.74) : 0;
    if (reduce) { u = mid < P.top ? (k >= 0 ? 0.35 : 0.04) : 1; }
    else { u = Math.max(0.04, su, pu); }
    var gnd = reduce ? 4 : (!inPeakOrAfter ? 0 : pp < 0.13 ? 0 : pp < 0.27 ? 1 : pp < 0.40 ? 2 : pp < 0.52 ? 3 : 4);
    var n;
    if (mid < S[0].top) n = 0;
    else if (k >= 0) { n = START[k] + Math.round(clamp((mid - S[k].top) / S[k].h) * (FR[k] - 1)); }
    else n = TOTAL;
    var hold = y >= P.ft + 0.76 * Math.max(1, P.fh - vh) || (reduce && mid >= P.top);
    var ai = Math.round(u * 8), si = Math.round(u * 9);
    var sig = [n, ai, si, gnd, Math.round(u * 100), reduce ? 0 : Math.round(y / 24)].join(":") + ":" + S.map(function (s) { return Math.round(s.c * 25); }).join(",");
    if (sig === last.sig) return;
    last.sig = sig;

    S.forEach(function (s) {
      var b = reduce ? 1 : 0.42 + 0.58 * s.c;
      s.pic.style.setProperty("--b", b.toFixed(3));
      s.pic.style.setProperty("--k", (0.9 + 0.1 * s.c).toFixed(3));
    });
    filmPic.style.setProperty("--b", (reduce ? 1 : 0.55 + 0.75 * clamp(pp / 0.74)).toFixed(3));
    if (String(gnd) !== peak.getAttribute("data-g")) peak.setAttribute("data-g", gnd);

    noEl.firstChild.textContent = ("00" + n).slice(-3);
    apEl.textContent = "f/" + AP[ai];
    shEl.textContent = "1/" + SH[si];
    edge.style.setProperty("--u", u.toFixed(3));
    edge.style.setProperty("--sy", (reduce ? 0 : (y * 0.5) % 18).toFixed(1) + "px");
    ticks.forEach(function (a, j) {
      if (j === k) a.setAttribute("aria-current", "location"); else a.removeAttribute("aria-current");
      a.classList.toggle("is-seen", k >= 0 ? j < k : mid >= S[0].top);
    });
    edge.setAttribute("data-sc-verify-state", [k, n, ai, si, gnd].join(":"));
    if (hold) edge.setAttribute("data-sc-verify-hold", "true"); else edge.removeAttribute("data-sc-verify-hold");
  }

  var queued = false;
  addEventListener("scroll", function () { if (queued) return; queued = true; requestAnimationFrame(function () { queued = false; render(); }); }, { passive: true });
  addEventListener("resize", function () { requestAnimationFrame(measure); }, { passive: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  addEventListener("load", measure);
  if ("ResizeObserver" in window) { var rt = 0; new ResizeObserver(function () { cancelAnimationFrame(rt); rt = requestAnimationFrame(measure); }).observe(document.body); }
  measure();

  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var t = document.getElementById(a.getAttribute("href").slice(1));
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", "#" + t.id);
    });
  });

  /* the form is local only: it validates, sends nothing, shows the success string */
  var form = $("#form");
  var ok = $("#ok"), err = $("#err"), nameEl = $("#f-name"), mailEl = $("#f-email");
  var re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/;
  var bad = function (el, b) { el.setAttribute("aria-invalid", b ? "true" : "false"); };
  [nameEl, mailEl].forEach(function (el) {
    el.addEventListener("input", function () {
      if (el.getAttribute("aria-invalid") === "true") {
        bad(el, el === nameEl ? !el.value.trim() : !re.test(el.value.trim()));
        if (nameEl.getAttribute("aria-invalid") !== "true" && mailEl.getAttribute("aria-invalid") !== "true") err.textContent = "";
      }
    });
  });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var nb = !nameEl.value.trim(), mb = !re.test(mailEl.value.trim());
    bad(nameEl, nb); bad(mailEl, mb);
    if (nb || mb) { err.textContent = form.getAttribute("data-err"); (nb ? nameEl : mailEl).focus(); return; }
    err.textContent = ""; form.hidden = true; ok.hidden = false; ok.focus();
  });
})();
</script>
</body>
</html>
`;
}

fs.mkdirSync(path.join(OUT, "ar"), { recursive: true });
fs.writeFileSync(path.join(OUT, "index.html"), build("en"));
fs.writeFileSync(path.join(OUT, "ar", "index.html"), build("ar"));
console.log("built", OUT);
