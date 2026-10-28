import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'An independent label cutting twenty-eight looks from one material story. Autumn/winter 2026.', ar: 'علامة مستقلة تفصّل ثماني وعشرين إطلالة من قصة خامة واحدة. مجموعة خريف وشتاء 2026.' },
  hero: "stack",
  secondary: { en: "Browse the lookbook", ar: "تصفّح دليل الإطلالات" },
  sections: [
    {
      kind: "gallery",
      layout: "editorial",
      id: "lookbook",
      nav: { en: "Lookbook", ar: "دليل الإطلالات" },
      title: { en: "Twenty-eight looks, one cloth story", ar: "ثمانٍ وعشرون إطلالة وقصة خامة واحدة" },
      lede: {
        en: "Autumn/winter 2026 was cut from a single mill's wool, dyed in one red, and finished by hand in our Lisbon workroom. Six of the looks are shown here.",
        ar: "قُصّت مجموعة خريف وشتاء 2026 من صوف مصنع نسيج واحد مصبوغ بلون قرمزي واحد، وأُنجزت يدويًا في ورشتنا بلشبونة. نعرض هنا ست إطلالات منها.",
      },
      items: [
        {
          title: { en: "The Quay Coat", ar: "معطف الرصيف" },
          meta: { en: "Look 03 · double-faced wool", ar: "الإطلالة 03 · صوف مزدوج الوجه" },
          note: { en: "A long, square-shouldered coat with no lining, because the cloth is finished on both sides.", ar: "معطف طويل بكتفين مربعين بلا بطانة، لأن وجهي القماش منجزان بالعناية نفسها." },
          still: 0,
        },
        {
          title: { en: "Night Ferry Trouser", ar: "بنطال العبّارة الليلية" },
          meta: { en: "Look 07 · wool crepe", ar: "الإطلالة 07 · كريب صوف" },
          note: { en: "High waist, wide leg, and a hem weighted with lead tape so it swings when you walk.", ar: "خصر مرتفع وساق واسعة، وحاشية مثقَّلة بشريط رصاص لتتمايل مع الخطوة." },
          still: 1,
        },
        {
          title: { en: "Salt Shirt", ar: "قميص الملح" },
          meta: { en: "Look 12 · washed wool poplin", ar: "الإطلالة 12 · بوبلين صوف مغسول" },
          note: { en: "Oversized, cut on the straight grain, with a placket you can fold two ways.", ar: "فضفاض ومقصوص على الخيط المستقيم، بشريط أزرار يُطوى بطريقتين." },
          still: 2,
        },
        {
          title: { en: "Rouge Vest", ar: "صدرية قرمزية" },
          meta: { en: "Look 15 · brushed wool", ar: "الإطلالة 15 · صوف مُوبَّر" },
          note: { en: "Dyed in a single one-hundred-and-twenty-metre batch, so every vest matches.", ar: "قماشها صُبغ في دفعة واحدة من مئة وعشرين مترًا، فتتطابق كل الصدريات." },
          still: 3,
        },
        {
          title: { en: "Harbour Skirt", ar: "تنورة الميناء" },
          meta: { en: "Look 19 · twill, hand-pleated", ar: "الإطلالة 19 · تويل بطيّات يدوية" },
          note: { en: "Forty-two pleats, each pressed and pinned by one person in one afternoon.", ar: "اثنتان وأربعون طيّة، كلٌّ منها كُويت وثُبّتت على يد شخص واحد في ظهيرة واحدة." },
          still: 1,
        },
        {
          title: { en: "Evening Knit", ar: "كنزة المساء" },
          meta: { en: "Look 26 · lambswool", ar: "الإطلالة 26 · صوف حملان" },
          note: { en: "A boxy jumper knitted flat and linked by hand, with seams that sit on the inside.", ar: "كنزة مربعة القصّة، محاكة مسطّحة وموصولة يدويًا، ودرزاتها إلى الداخل." },
          still: 0,
        },
      ],
    },
    {
      kind: "table",
      id: "sizing",
      nav: { en: "Sizing notes", ar: "ملاحظات المقاسات" },
      title: { en: "Measured on bodies, not on charts", ar: "مقاسات أُخذت على أجساد لا على جداول" },
      lede: {
        en: "Body measurements in centimetres. Each size was fitted on three people before it was graded.",
        ar: "قياسات الجسم بالسنتيمتر. جُرّب كل مقاس على ثلاثة أشخاص قبل تدريجه.",
      },
      columns: [
        { en: "Size", ar: "المقاس" },
        { en: "Bust (cm)", ar: "الصدر (سم)" },
        { en: "Waist (cm)", ar: "الخصر (سم)" },
        { en: "Hip (cm)", ar: "الورك (سم)" },
      ],
      rows: [
        [same("XS"), same("82"), same("64"), same("90")],
        [same("S"), same("86"), same("68"), same("94")],
        [same("M"), same("90"), same("72"), same("98")],
        [same("L"), same("95"), same("77"), same("103")],
        [same("XL"), same("101"), same("83"), same("109")],
      ],
      foot: {
        en: "Coats and knits are cut generously: between sizes, take the smaller. Trousers run true to the waist measurement.",
        ar: "المعاطف والحياكة بقصّة واسعة، فإن كنت بين مقاسين فخذ الأصغر. البناطيل مطابقة لقياس الخصر.",
      },
    },
  ],
  proof: {
    nav: { en: "The atelier", ar: "المشغل" },
    title: { en: "Worn, mended and written about", ar: "ملبوسة ومُصلَحة ومكتوب عنها" },
    quote: {
      en: "I have worn the Quay Coat every day since October and it only looks better. Nothing else in my wardrobe has earned that.",
      ar: "ألبس معطف الرصيف كل يوم منذ أكتوبر، ولا يزداد إلا جمالًا. لا شيء آخر في خزانتي استحق ذلك.",
    },
    who: { en: "Helena Brandt, buyer, Galerie Lindqvist, Copenhagen", ar: "هيلينا برانت، مسؤولة مشتريات، غاليري ليندكفيست، كوبنهاغن" },
    facts: [
      { k: { en: "Looks in FW26", ar: "إطلالات خريف وشتاء 26" }, v: same("28") },
      { k: { en: "Made in", ar: "صُنعت في" }, v: { en: "Lisbon, by 11 people", ar: "لشبونة، على يد 11 شخصًا" } },
      { k: { en: "Pieces per style", ar: "قطع لكل تصميم" }, v: { en: "Never more than 120", ar: "لا تزيد على 120" } },
      { k: { en: "Repairs", ar: "الإصلاح" }, v: { en: "Free for life", ar: "مجاني مدى الحياة" } },
    ],
  },
  cta: {
    title: { en: "Be first through the door.", ar: "كن أول من يدخل." },
    lede: {
      en: "The drop opens to the list a day before it opens to everyone. Leave your size and we will hold a place.",
      ar: "يُفتح الإصدار للقائمة قبل الجميع بيوم. اترك مقاسك ونحن نحجز لك مكانًا.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      {
        name: "size",
        type: "select",
        label: { en: "Your usual size", ar: "مقاسك المعتاد" },
        options: [same("XS"), same("S"), same("M"), same("L"), same("XL")],
      },
      { name: "city", type: "text", label: { en: "City", ar: "المدينة" } },
      {
        name: "note",
        type: "textarea",
        wide: true,
        label: { en: "Anything we should know? (optional)", ar: "هل من شيء نعرفه؟ (اختياري)" },
      },
    ],
    submit: { en: "Join the list", ar: "انضم إلى القائمة" },
    success: {
      en: "You are on the list. We will write the evening before the drop opens.",
      ar: "أنت الآن في القائمة. سنراسلك مساء اليوم السابق لفتح الإصدار.",
    },
  },
};

export default content;
