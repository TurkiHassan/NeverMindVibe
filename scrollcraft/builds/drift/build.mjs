// Generates experiences/drift/index.html (EN) and experiences/drift/ar/index.html (AR)
// from one data object so the twins cannot drift apart. Copy comes from
// apps/client/src/pages/atlas/domains/content/drift.ts; strings marked (mine) are UI glue.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(here, "../../../apps/client/public/experiences/drift");
const css = fs.readFileSync(path.join(here, "src/style.css"), "utf8");
const js = fs.readFileSync(path.join(here, "src/script.js"), "utf8");

// Chronological by month so the page reads as one travel year. Days are the days stated in the content.
const J = [
  { id: "lofoten", days: 11, still: 3, v: "v1", wipe: "left",
    mon: ["February", "فبراير"], title: ["Sleeper Train to Lofoten", "قطار النوم إلى لوفوتن"],
    meta: [["11 days", "February", "10 guests"], ["11 يومًا", "فبراير", "10 ضيوف"]],
    note: ["Rail north from Oslo, then a fishing boat between islands, chasing the green light without a schedule.", "بالقطار شمالًا من أوسلو ثم بقارب صيد بين الجزر، نطارد الضوء الأخضر بلا جدول."],
    tags: [["Rail", "Winter"], ["قطار", "شتاء"]], ground: "paper" },
  { id: "rize", days: 7, still: 2, v: "v2",
    mon: ["May", "مايو"], title: ["Tea Terraces of Rize", "مدرجات الشاي في ريزه"],
    meta: [["7 days", "May", "6 guests"], ["7 أيام", "مايو", "6 ضيوف"]],
    note: ["Stay with two harvesting families on the Black Sea slopes and learn why the first flush is picked by hand.", "أقم عند أسرتين تقطفان الشاي على سفوح البحر الأسود، وتعرّف لماذا يُقطف الحصاد الأول باليد."],
    tags: [["Mountain", "Food"], ["جبلي", "طعام"]], ground: "soft" },
  { id: "ohrid", days: 8, still: 1, v: "v3",
    mon: ["June", "يونيو"], title: ["Lake and Monasteries of Ohrid", "بحيرة وأديرة أوهريد"],
    meta: [["8 days", "June", "8 guests"], ["8 أيام", "يونيو", "8 ضيوف"]],
    note: ["Swim before breakfast, hike to hillside churches after, and spend evenings with a woodcarver who still takes apprentices.", "سباحة قبل الفطور، وصعود مشيًا إلى كنائس التلال بعده، وأمسيات عند نحّات خشب ما زال يقبل المتدربين."],
    tags: [["Lakeside", "Slow hikes"], ["بحيري", "مشي هادئ"]], ground: "paper" },
  { id: "algarve", days: 9, still: 3, v: "v4",
    mon: ["September", "سبتمبر"], title: ["Salt Roads of the Algarve", "دروب الملح في الغارف البرتغالية"],
    meta: [["9 days", "September", "8 guests"], ["9 أيام", "سبتمبر", "8 ضيوف"]],
    note: ["Walk between salt pans and fishing villages, then sleep in a family-run quinta above the estuary.", "امشِ بين ملاحات الملح وقرى الصيد، ثم نَم في مزرعة عائلية تطل على المصب."],
    tags: [["Coastal", "Walking"], ["ساحلي", "مشي"]], ground: "soft" },
  { id: "ahsa", days: 5, still: 4, v: "v5",
    mon: ["November", "نوفمبر"], title: ["Date Groves and Dune Camps of Al Ahsa", "نخيل وكثبان الأحساء"],
    meta: [["5 days", "November", "8 guests"], ["5 أيام", "نوفمبر", "8 ضيوف"]],
    note: ["Spring-fed oases by day, a quiet dune camp by night, and breakfast with the family who tends the palms.", "واحات تسقيها العيون نهارًا، ومخيم هادئ بين الكثبان ليلًا، وفطور مع الأسرة التي تعتني بالنخيل."],
    tags: [["Desert", "Culture"], ["صحراء", "ثقافة"]], ground: "paper" },
];
const TOTAL = J.reduce((a, j) => a + j.days, 0);

const GUIDE = [
  { t: ["Eat where the ferry crews eat", "كل حيث يأكل طاقم العبّارة"], m: ["Local custom · Ohrid", "تقليد محلي · أوهريد"], n: ["The lakeside kitchen with no menu opens at six. Ask for whatever came off the boat that morning.", "المطبخ المطل على البحيرة بلا قائمة طعام يفتح في السادسة. اطلب ما وصل من القارب هذا الصباح."] },
  { t: ["Take the 14:10, not the 09:30", "استقل قطار 14:10 لا قطار 09:30"], m: ["Tip · Northern Norway", "نصيحة · شمال النرويج"], n: ["The afternoon train has window seats on the fjord side and nobody in a hurry.", "قطار العصر فيه مقاعد نافذة على جهة الفيورد، ولا أحد فيه مستعجل."] },
  { t: ["Leave the ridge before sunset", "اترك التلة قبل الغروب"], m: ["Place · Rize hills", "مكان · تلال ريزه"], n: ["The best light is on the walk down, when the pickers head home and the valley smells of woodsmoke.", "أجمل ضوء يكون أثناء النزول حين يعود القطّافون وتفوح من الوادي رائحة الحطب."] },
  { t: ["Bring something small from home", "احمل شيئًا صغيرًا من بلدك"], m: ["Local custom · Everywhere", "تقليد محلي · في كل مكان"], n: ["A tin of your local tea or a postcard of your street. Every host asks, and every host remembers.", "علبة شاي من بلدك أو بطاقة لشارعك. كل مضيف يسأل، وكل مضيف يتذكر."] },
];

const T = {
  en: {
    lang: "en", dir: "ltr", other: { href: "ar/", code: "ar", label: "العربية", aria: "العربية" },
    title: "Drift · Go somewhere that changes you (sample brand)",
    desc: "A scroll-driven look at Drift, a sample slow-travel club: a route line fills along the edge as you read a year of journeys. Plan a drift.",
    fonts: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Figtree:wght@400;500;600&display=swap",
    engine: "../_engine/scrollcraft.js", css: "../_engine/scrollcraft.css",
    skip: "Skip to the journeys", routeLabel: "Journey chapters", days: "days",
    statement: "Go somewhere that changes you.",
    lede: "A slow-travel club: forty-two routes, eight local hosts, and more texture than itinerary.",
    stub: [["Slow routes", "42"], ["Local hosts", "8"]],
    cta: "Plan a drift",
    sample: "Drift is a fictional brand. Every route, host, quote and figure on this page is sample content.",
    alt: "A sample relief map of ridges and valleys with one lit route winding through it.",
    cap: "Sample image, not the place",
    guide: { k: "Field guide", title: "What our hosts tell you before you land", lede: "Short notes from the people who live along our routes. They are the reason the days feel unplanned." },
    jr: { k: "Journal", title: "Notes from the road", quote: "On day four I stopped checking my phone. On day six I knew the baker's name, and I still write to her.", who: "Marta Weiss, guest on Salt Roads of the Algarve",
      facts: [["Slow routes", "42", 42], ["Local hosts", "8", 8], ["Guests per journey", "6 to 10"], ["Nights in one place", "3 on average"]] },
    year: { h: "One slow year, in the order you read it.", p: "Five journeys placed by month. The days are summed from the journeys above.", sofar: "so far", sum: "days on the road" },
    plan: { h: "Tell us where you want to slow down.", p: "Share a month and a mood. A route planner will write back within two working days with one or two journeys, not a catalogue.",
      s: ["My name is ", " and my email is ", ". I would like to go: ", ", travelling as ", ". It will be worth it if ", "."],
      l: ["Your name", "Email", "When would you like to go?", "Who is travelling?", "What would make the trip worth it?"],
      opt1: ["Spring", "Summer", "Autumn", "Winter", "Flexible"], opt2: ["Just me", "Two of us", "3 to 5 friends or family", "A larger group"],
      err: "Add your name and a valid email.", ok: "Thank you. A route planner will write to you within two working days.", okSample: "Sample form: nothing was sent.",
      fine: "Drift is a fictional brand. This form is a sample: nothing is sent or stored." },
    pubStill: (n) => `/assets/domain-stills/drift-${n}.webp`,
  },
  ar: {
    lang: "ar", dir: "rtl", other: { href: "../", code: "en", label: "EN", aria: "English" },
    title: "انجراف · اذهب إلى مكان يغيّرك (علامة تجريبية)",
    desc: "نظرة تفاعلية على «انجراف»، نادٍ تجريبي للسفر البطيء: يمتلئ خط المسار على الحافة وأنت تقرأ سنة من الرحلات. خطط لرحلة.",
    fonts: "https://fonts.googleapis.com/css2?family=Alexandria:wght@300;400;500;700&display=swap",
    engine: "../../_engine/scrollcraft.js", css: "../../_engine/scrollcraft.css",
    skip: "انتقل إلى الرحلات", routeLabel: "فصول الرحلة", days: "يومًا",
    statement: "اذهب إلى مكان يغيّرك.",
    lede: "نادٍ للسفر البطيء: اثنان وأربعون مسارًا وثمانية مضيفين محليين، وملمسًا أكثر من جدول رحلة.",
    stub: [["مسارات بطيئة", "42"], ["مضيفون محليون", "8"]],
    cta: "خطط لرحلة",
    sample: "«انجراف» علامة خيالية. كل مسار ومضيف واقتباس ورقم في هذه الصفحة محتوى تجريبي.",
    alt: "خريطة نافرة تجريبية لسلاسل وأودية يمرّ بينها مسار مضيء واحد.",
    cap: "صورة تجريبية، وليست المكان",
    guide: { k: "دليل الميدان", title: "ما يخبرك به مضيفونا قبل أن تصل", lede: "ملاحظات قصيرة ممن يسكنون على مساراتنا، وهم سبب أن تبدو الأيام غير مخطَّطة." },
    jr: { k: "المجلة", title: "ملاحظات من الطريق", quote: "في اليوم الرابع توقفت عن تفقّد هاتفي. وفي السادس عرفت اسم الخبّازة، وما زلت أراسلها.", who: "مارتا فايس، ضيفة في دروب الملح",
      facts: [["مسارات بطيئة", "42", 42], ["مضيفون محليون", "8", 8], ["ضيوف لكل رحلة", "من 6 إلى 10"], ["ليالٍ في المكان الواحد", "3 في المتوسط"]] },
    year: { h: "سنة بطيئة واحدة، بالترتيب الذي قرأتها به.", p: "خمس رحلات موزعة على الأشهر. وتُجمع الأيام من الرحلات أعلاه.", sofar: "حتى الآن", sum: "يومًا على الطريق" },
    plan: { h: "أخبرنا أين تريد أن تتمهّل.", p: "أخبرنا بالشهر والمزاج. سيكتب لك منسّق المسارات خلال يومَي عمل برحلة أو اثنتين، لا بكتالوج كامل.",
      s: ["اسمي ", " وبريدي ", ". أودّ السفر: ", "، والمسافرون: ", ". وتكون الرحلة جديرة بالعناء إذا ", "."],
      l: ["اسمك", "البريد الإلكتروني", "متى تودّ السفر؟", "من المسافرون؟", "ما الذي يجعل الرحلة جديرة بالعناء؟"],
      opt1: ["الربيع", "الصيف", "الخريف", "الشتاء", "لا فرق عندي"], opt2: ["أنا فقط", "نحن اثنان", "من 3 إلى 5 أصدقاء أو أقارب", "مجموعة أكبر"],
      err: "أضف اسمك وبريدًا إلكترونيًا صحيحًا.", ok: "شكرًا لك. سيكتب لك منسّق المسارات خلال يومَي عمل.", okSample: "نموذج تجريبي: لم يُرسل شيء.",
      fine: "«انجراف» علامة خيالية. هذا النموذج تجريبي: لا يُرسل ولا يُخزَّن شيء." },
    pubStill: (n) => `/assets/domain-stills/drift-${n}.webp`,
  },
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
// AR: isolate every run of digits so figures never reorder inside RTL text.
const fig = (lang, s) => (lang === "ar" ? esc(s).replace(/\d[\d:.,]*/g, (m) => `<bdi dir="ltr">${m}</bdi>`) : esc(s));

function page(L) {
  const i = L.lang === "ar" ? 1 : 0;
  const ar = L.lang === "ar";
  const F = (s) => fig(L.lang, s);
  const stopName = (k) => (k < 5 ? J[k].mon[i] : k === 5 ? L.guide.k : L.jr.k);
  const stopAria = (k) => (k < 5 ? `${J[k].mon[i]}: ${J[k].title[i]}` : k === 5 ? L.guide.title : L.jr.title);

  const stopsHtml = Array.from({ length: 7 }, (_, k) => {
    const id = k < 5 ? `c${k + 1}` : k === 5 ? "c6" : "c7";
    return `<a class="route__stop" href="#${id}" aria-label="${esc(stopAria(k))}"><span class="route__lab" aria-hidden="true">${esc(stopName(k))}</span></a>`;
  }).join("");

  const chapters = J.map((j, k) => {
    const [d, , g] = j.meta[i];
    const [dn, ...du] = d.split(" ");
    const pic = `<figure class="pic"><div class="pic__frame"><img src="${L.pubStill(j.still)}" width="960" height="540" alt="${esc(L.alt)}"${k ? ' loading="lazy"' : ""} data-sc-parallax="0.5"></div><figcaption>${esc(L.cap)}</figcaption></figure>`;
    const txt = `<div class="txt" data-sc-in data-sc-stagger="90"><p class="note">${esc(j.note[i])}</p><ul class="tags">${j.tags[i].map((t) => `<li>${esc(t)}</li>`).join("")}</ul><p class="guests">${F(g)}</p></div>`;
    return `
<section class="ch ${j.v} g-${j.ground}" id="c${k + 1}" data-ch="${k + 1}" data-days="${j.days}" data-ground="light" data-sc-act="flow" aria-labelledby="h-c${k + 1}">
  <header class="band" data-sc-reveal="${ar ? "right" : "left"}" data-sc-reveal-at="0.02 0.17">
    <p class="band__k">${esc(j.mon[i])}</p>
    <h2 id="h-c${k + 1}">${esc(j.title[i])}</h2>
    <p class="band__d"><span class="n">${F(dn)}</span><span class="u">${esc(du.join(" "))}</span></p>
  </header>
  <div class="spread">${pic}${txt}</div>
</section>`;
  });

  // chapter 5 is followed by the peak plate (its own ground)
  let run = 0;
  const yearRows = J.map((j) => {
    run += j.days;
    const [dn, ...du] = j.meta[i][0].split(" ");
    return `<li class="yr"><div class="yr__in"><p class="yr__m">${esc(j.mon[i])}</p><h3>${esc(j.title[i])}</h3><p class="yr__d"><span><b>${F(dn)}</b> ${esc(du.join(" "))}</span><span class="sum">${F(String(run))} ${esc(L.year.sofar)}</span></p></div></li>`;
  }).join("");
  const plate = `
<section class="year g-ink" id="year" data-ground="dark" aria-labelledby="h-year">
  <div class="year__head" data-sc-in data-sc-stagger="90"><h2 id="h-year">${esc(L.year.h)}</h2><p>${esc(L.year.p)}</p></div>
  <div class="year__list" id="yearList"><span class="year__track" aria-hidden="true"></span><span class="year__fill" aria-hidden="true"></span><ol>${yearRows}</ol></div>
  <div class="year__sum" id="yearSum"><b>${F(String(TOTAL))}</b><span>${esc(L.year.sum)}</span></div>
</section>`;

  const guide = `
<section class="ch guide g-paper" id="c6" data-ch="6" data-ground="light" aria-labelledby="h-c6">
  <header class="band"><p class="band__k">${esc(L.guide.k)}</p><h2 id="h-c6">${esc(L.guide.title)}</h2><p class="band__d"></p></header>
  <div class="spread">
    <p class="guide__lede" data-sc-in>${esc(L.guide.lede)}</p>
    <div class="guide__grid" data-sc-in data-sc-stagger="110">${GUIDE.map((g) => `<article class="gnote"><h3>${F(g.t[i])}</h3><p>${esc(g.n[i])}</p><p class="src">${esc(g.m[i])}</p></article>`).join("")}</div>
  </div>
</section>`;

  const jr = `
<section class="ch jr g-soft" id="c7" data-ch="7" data-ground="light" aria-labelledby="h-c7">
  <header class="band"><p class="band__k">${esc(L.jr.k)}</p><h2 id="h-c7">${esc(L.jr.title)}</h2><p class="band__d"></p></header>
  <div class="spread">
    <figure data-sc-in style="margin:0"><blockquote><p>${esc(L.jr.quote)}</p></blockquote><cite>${esc(L.jr.who)}</cite></figure>
    <dl class="facts" data-sc-in data-sc-stagger="90">${L.jr.facts.map((f) => `<div><dt>${esc(f[0])}</dt><dd>${f[2] ? `<span data-sc-count="0 ${f[2]}">${f[1]}</span>` : F(f[1])}</dd></div>`).join("")}</dl>
  </div>
</section>`;

  const p = L.plan, s = p.s;
  // punctuation that follows a blank is glued to it so it can never wrap onto a line of its own
  const lead = (x) => (x.match(/^[.,،]+/) || [""])[0];
  const seg = (n) => esc(n === 0 ? s[0] : s[n].slice(lead(s[n]).length));
  const blank = (cls, ctl, id, label, n) => `<span class="blank ${cls}"><span class="fld"><span class="ctl">${ctl}</span><span class="p">${esc(lead(s[n]))}</span></span><label for="${id}">${esc(label)}</label></span>`;
  const opt = (arr) => arr.map((o) => `<option>${esc(o)}</option>`).join("");
  const plan = `
<section class="plan g-ink" id="plan" data-ground="dark" aria-labelledby="h-plan">
  <h2 id="h-plan" data-sc-in>${esc(p.h)}</h2>
  <p class="lede" data-sc-in>${esc(p.p)}</p>
  <form id="form" novalidate data-err="${esc(p.err)}">
    <p class="sentence">${seg(0)}${blank("b-name", `<input id="f-name" name="name" type="text" autocomplete="name" aria-invalid="false" aria-describedby="err">`, "f-name", p.l[0], 1)}${seg(1)}${blank("b-mail", `<input id="f-email" name="email" type="email" inputmode="email" autocomplete="email" dir="ltr" aria-invalid="false" aria-describedby="err">`, "f-email", p.l[1], 2)}${seg(2)}${blank("b-sel", `<select id="f-month" name="month">${opt(p.opt1)}</select>`, "f-month", p.l[2], 3)}${seg(3)}${blank("b-sel2", `<select id="f-who" name="travellers">${opt(p.opt2)}</select>`, "f-who", p.l[3], 4)}${seg(4)}${blank("b-wide", `<textarea id="f-wish" name="wish" rows="2"></textarea>`, "f-wish", p.l[4], 5)}</p>
    <p class="err" id="err" role="alert"></p>
    <div class="plan__act"><button class="btn" type="submit">${esc(L.cta)}</button></div>
  </form>
  <p class="ok" id="ok" role="status" tabindex="-1" hidden>${esc(p.ok)}<small>${esc(p.okSample)}</small></p>
  <p class="fine">${esc(p.fine)}</p>
</section>`;

  const hero = `
<section class="hero g-paper" id="top" data-ground="light" aria-labelledby="h-top">
  <div class="ticket">
    <div class="ticket__main">
      <p class="brand" lang="${L.lang}">${ar ? "انجراف" : "Drift"}</p>
      <h1 id="h-top">${esc(L.statement)}</h1>
      <p class="lede">${esc(L.lede)}</p>
    </div>
    <div class="ticket__stub">
      <dl class="stubf">${L.stub.map((r) => `<div><dt>${esc(r[0])}</dt><dd>${F(r[1])}</dd></div>`).join("")}</dl>
      <a class="btn" href="#plan">${esc(L.cta)}</a>
    </div>
    <p class="fine">${esc(L.sample)}</p>
  </div>
</section>`;

  const O = L.other;
  return `<!doctype html>
<html lang="${L.lang}" dir="${L.dir}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(L.title)}</title>
<meta name="description" content="${esc(L.desc)}">
<link rel="alternate" hreflang="en" href="${ar ? "../" : ""}">
<link rel="alternate" hreflang="ar" href="${ar ? "" : "ar/"}">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='%23153f45'/><path d='M16 5v22' stroke='%23e6ae48' stroke-width='3' stroke-dasharray='4 3'/><circle cx='16' cy='9' r='3.5' fill='%23e6ae48'/></svg>">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="${L.fonts}" rel="stylesheet">
<link rel="stylesheet" href="${L.css}">
<style>
${css}
</style>
<script>document.documentElement.classList.add("js")</script>
</head>
<body>
<a class="skip" href="#c1">${esc(L.skip)}</a>

<nav class="route" id="route" aria-label="${esc(L.routeLabel)}" data-sc-verify-state="">
  <a class="route__lang" href="${O.href}" hreflang="${O.code}" lang="${O.code}" aria-label="${O.aria}">${O.label}</a>
  <div class="route__line" id="routeLine"><span class="route__track" aria-hidden="true"></span><span class="route__fill" id="routeFill" aria-hidden="true"></span>${stopsHtml}<span class="route__pin" id="routePin" aria-hidden="true"></span></div>
  <p class="route__days" aria-hidden="true"><b id="routeDays">0</b><small>${esc(L.days)}</small></p>
</nav>

<main id="main">
${hero}
${chapters.slice(0, 5).join("\n")}
${plate}
${guide}
${jr}
${plan}
</main>

<script src="${L.engine}"></script>
<script>ScrollCraft.mount(document.body);</script>
<script>
${js}
</script>
</body>
</html>
`;
}

fs.mkdirSync(path.join(OUT, "ar"), { recursive: true });
fs.writeFileSync(path.join(OUT, "index.html"), page(T.en));
fs.writeFileSync(path.join(OUT, "ar/index.html"), page(T.ar));
console.log("built", TOTAL, "days");
