import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'A photography practice of fourteen series on three continents, open for commissions and prints.', ar: 'ممارسة تصوير من أربع عشرة سلسلة في ثلاث قارات، مفتوحة للتكليفات والطبعات.' },
  hero: "full",
  secondary: { en: "View selected work", ar: "شاهد الأعمال المختارة" },
  sections: [
    {
      kind: "gallery",
      layout: "asym",
      id: "work",
      nav: { en: "Selected work", ar: "أعمال مختارة" },
      title: { en: "Fourteen series, shot on film and patience", ar: "أربع عشرة سلسلة، بالفيلم والصبر" },
      lede: {
        en: "Long stays in a few places. Each series is the result of returning until the light behaved.",
        ar: "إقامات طويلة في أماكن قليلة. كل سلسلة ثمرة العودة إلى أن يستقيم الضوء.",
      },
      items: [
        {
          title: { en: "The Wind Keeps Its Own Hours", ar: "الريح لها مواعيدها" },
          meta: { en: "2022 · 36 frames · Patagonia", ar: "2022 · 36 لقطة · باتاغونيا" },
          note: { en: "Sheep fences, shearing sheds and a road that disappears every afternoon at four.", ar: "أسيجة غنم وحظائر جزّ وطريق يختفي كل عصر عند الرابعة." },
          still: 0,
        },
        {
          title: { en: "Salt Season", ar: "موسم الملح" },
          meta: { en: "2021 · 28 frames · Camargue", ar: "2021 · 28 لقطة · الكامارغ" },
          note: { en: "Harvesters on the pans at dawn, when the water holds the sky.", ar: "حصّادون على أحواض الملح عند الفجر حين يحتفظ الماء بالسماء." },
          still: 1,
        },
        {
          title: { en: "Hours After Snow", ar: "ساعات بعد الثلج" },
          meta: { en: "2023 · 40 frames · Hokkaido", ar: "2023 · 40 لقطة · هوكايدو" },
          note: { en: "Village streets in the first quiet morning, before the ploughs.", ar: "شوارع قرية في أول صباح هادئ، قبل أن تمرّ كاسحات الثلج." },
          still: 2,
        },
        {
          title: { en: "Lamps of the Night Ferry", ar: "مصابيح عبّارة الليل" },
          meta: { en: "2019 · 32 frames · Lofoten", ar: "2019 · 32 لقطة · لوفوتن" },
          note: { en: "A crossing of forty minutes, photographed over three winters.", ar: "عبور مدته أربعون دقيقة، صُوّر على مدى ثلاثة شتاءات." },
          still: 3,
        },
        {
          title: { en: "What the Tide Left", ar: "ما تركه المدّ" },
          meta: { en: "2020 · 24 frames · Hebrides", ar: "2020 · 24 لقطة · الهبريدس" },
          note: { en: "Rope, glass, bone and one blue boot, laid out on grey sand.", ar: "حبال وزجاج وعظام وحذاء أزرق واحد على رمل رمادي." },
          still: 0,
        },
      ],
    },
    {
      kind: "table",
      id: "prints",
      nav: { en: "Prints", ar: "الطبعات" },
      title: { en: "Editioned prints, made one at a time", ar: "طبعات محدودة تُصنع واحدة تلو الأخرى" },
      lede: {
        en: "Printed by hand from the original negatives. Each print is signed, numbered and stamped on the back.",
        ar: "تُطبع يدويًا من النيجاتيف الأصلي. كل طبعة موقّعة ومرقّمة ومختومة على ظهرها.",
      },
      columns: [
        { en: "Print", ar: "الطبعة" },
        { en: "Size", ar: "المقاس" },
        { en: "Edition", ar: "عدد النسخ" },
        { en: "Price", ar: "السعر" },
      ],
      rows: [
        [{ en: "Wind, Estancia Road", ar: "الريح، طريق المزرعة" }, same("40 × 50 cm"), { en: "Edition of 12", ar: "12 نسخة" }, same("€680")],
        [{ en: "Pan at Dawn", ar: "الحوض عند الفجر" }, same("60 × 75 cm"), { en: "Edition of 8", ar: "8 نسخ" }, same("€1,150")],
        [{ en: "First Morning, Biei", ar: "الصباح الأول، بييي" }, same("50 × 60 cm"), { en: "Edition of 10", ar: "10 نسخ" }, same("€890")],
        [{ en: "Ferry, 23:40", ar: "العبّارة، 23:40" }, same("30 × 40 cm"), { en: "Edition of 15", ar: "15 نسخة" }, same("€420")],
        [{ en: "Blue Boot", ar: "الحذاء الأزرق" }, same("40 × 40 cm"), { en: "Edition of 12", ar: "12 نسخة" }, same("€540")],
      ],
      foot: {
        en: "Archival cotton rag paper, unframed, shipped flat in a rigid box within 10 working days. Tracked and insured worldwide; duties are paid by the buyer.",
        ar: "ورق قطني أرشيفي بلا إطار، يُشحن مسطّحًا في صندوق صلب خلال 10 أيام عمل. الشحن مؤمَّن ويمكن تتبعه إلى أي بلد، والرسوم الجمركية على المشتري.",
      },
    },
  ],
  proof: {
    nav: { en: "About the practice", ar: "عن الممارسة" },
    title: { en: "How the work is made", ar: "كيف يُصنع العمل" },
    quote: {
      en: "She waited three winters for one ferry crossing, and the picture is exactly as patient as that sounds.",
      ar: "انتظرت ثلاثة شتاءات من أجل عبور عبّارة واحد، والصورة صبورة بقدر ما يوحي ذلك.",
    },
    who: { en: "Eilidh Ward, curator, Northern Lights Gallery", ar: "إيليد وورد، قيّمة، معرض الأضواء الشمالية" },
    facts: [
      { k: { en: "Series", ar: "سلاسل" }, v: same("14") },
      { k: { en: "Continents", ar: "قارات" }, v: same("3") },
      { k: { en: "Format", ar: "قياس الفيلم" }, v: { en: "35mm", ar: "35 مم" } },
      { k: { en: "Based in", ar: "المقر" }, v: { en: "Edinburgh", ar: "إدنبرة" } },
    ],
  },
  cta: {
    title: { en: "Tell us the story worth waiting for.", ar: "أخبرنا بالقصة التي تستحق الانتظار." },
    lede: {
      en: "Commissions are limited to six a year. Tell us about the place and the people, and we will reply within a week.",
      ar: "التكليفات محدودة بستة في السنة. حدّثنا عن المكان والناس، وسنردّ خلال أسبوع.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      {
        name: "type",
        type: "select",
        label: { en: "Project type", ar: "نوع المشروع" },
        options: [
          { en: "Editorial story", ar: "قصة صحفية" },
          { en: "Book or monograph", ar: "كتاب أو إصدار مصوّر" },
          { en: "Organisation or brand", ar: "مؤسسة أو علامة" },
          { en: "Private commission", ar: "تكليف خاص" },
        ],
      },
      { name: "location", type: "text", label: { en: "Where will we be working?", ar: "أين سنعمل؟" } },
      { name: "story", type: "textarea", wide: true, label: { en: "What is the story, and who should see it?", ar: "ما القصة، ومن ينبغي أن يراها؟" } },
    ],
    success: { en: "Thank you. We will read your note carefully and write back within a week.", ar: "شكرًا لك. سنقرأ رسالتك بعناية ونكتب لك خلال أسبوع." },
  },
};

export default content;
