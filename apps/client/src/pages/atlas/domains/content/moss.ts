import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'We work with farms, cities and schools to bring 12,400 hectares of land back to life, one measured plot at a time.', ar: 'نعمل مع المزارع والمدن والمدارس لإعادة 12,400 هكتار إلى الحياة، قطعة قطعة وبقياس دقيق.' },
  hero: "split",
  secondary: { en: "Read the climate data", ar: "اقرأ بيانات المناخ" },
  sections: [
    {
      kind: "bars",
      id: "climate-data",
      nav: { en: "Climate data", ar: "بيانات المناخ" },
      title: { en: "Soil carbon gained, five of our 38 sites", ar: "كربون التربة المكتسب في خمسة من مواقعنا الـ 38" },
      lede: {
        en: "Cores are drilled every spring to 30 cm and measured by an independent lab. Across all sites, recovering soil gains 3.8 times as much carbon as neighbouring unmanaged plots.",
        ar: "تُؤخذ العيّنات كل ربيع حتى عمق 30 سم ويقيسها مختبر مستقل. في جميع المواقع، تكتسب التربة المتعافية كربونًا يبلغ 3.8 أضعاف ما تكتسبه الأراضي المجاورة غير المُدارة.",
      },
      unit: { en: "t C/ha over five years", ar: "طن كربون/هكتار خلال خمس سنوات" },
      rows: [
        {
          label: { en: "Alder Fen, Norfolk", ar: "ألدر فين، نورفولك" },
          value: 18.4,
          max: 20,
          note: { en: "Rewetted peat edge with native sedge, 1,150 hectares.", ar: "حافة خث أُعيد ترطيبها بحشائش محلية، 1,150 هكتارًا." },
        },
        {
          label: { en: "Tabor Terraces, Morocco", ar: "مدرجات تابور، المغرب" },
          value: 12.9,
          max: 20,
          note: { en: "Stone-bunded barley and carob on slopes, 2,600 hectares.", ar: "شعير وخروب بين سدود حجرية على المنحدرات، 2,600 هكتار." },
        },
        {
          label: { en: "Las Tres Cruces, Córdoba", ar: "لاس تريس كروسس، قرطبة" },
          value: 9.7,
          max: 20,
          note: { en: "Olive groves under permanent cover crop, 2,100 hectares.", ar: "بساتين زيتون تحت غطاء نباتي دائم، 2,100 هكتار." },
        },
        {
          label: { en: "Kitui Commons, Kenya", ar: "أراضي كيتوي المشتركة، كينيا" },
          value: 7.2,
          max: 20,
          note: { en: "Rotational grazing across eleven village herds, 2,950 hectares.", ar: "رعي دوري بين أحد عشر قطيعًا قرويًا، 2,950 هكتارًا." },
        },
        {
          label: { en: "Dunmore Pasture, Ireland", ar: "مرعى دانمور، أيرلندا" },
          value: 5.1,
          max: 20,
          note: { en: "Dairy fields moved to multi-species sward, 1,800 hectares.", ar: "حقول ألبان تحوّلت إلى مروج متعددة الأنواع، 1,800 هكتار." },
        },
      ],
    },
    {
      kind: "stories",
      id: "partners",
      nav: { en: "Partner stories", ar: "قصص الشركاء" },
      title: { en: "Three partners, three kinds of land", ar: "ثلاثة شركاء وثلاثة أنواع من الأرض" },
      lede: {
        en: "A co-op, a town and a school, in their own words about what changed after the first full season.",
        ar: "جمعية زراعية وبلدة ومدرسة، يروون بكلماتهم ما تغيّر بعد أول موسم كامل.",
      },
      items: [
        {
          quote: {
            en: "The first year we paid for cover seed out of pocket. The second year the same fields held water through a six-week dry spell.",
            ar: "في السنة الأولى دفعنا ثمن بذور التغطية من جيوبنا. وفي الثانية احتفظت الحقول نفسها بمائها طوال ستة أسابيع من الجفاف.",
          },
          who: { en: "Hamid El Idrissi", ar: "حميد الإدريسي" },
          role: { en: "Chair, Tabor Barley Co-op", ar: "رئيس جمعية تابور للشعير" },
          still: 0,
        },
        {
          quote: {
            en: "We had a flooded car park and a failing river bank. Now the bank is willow and the car park is a meadow that nobody mows.",
            ar: "كان لدينا موقف سيارات يغرق وضفة نهر تنهار. اليوم الضفة صفصاف، والموقف مرج لا يجزّه أحد.",
          },
          who: { en: "Siobhán Reilly", ar: "شيفون رايلي" },
          role: { en: "Parks officer, Dunmore Town Council", ar: "مسؤولة الحدائق، بلدية دانمور" },
          still: 1,
        },
        {
          quote: {
            en: "Our pupils take the soil cores themselves each April. They know the number before the scientists do, and they are very proud of it.",
            ar: "يأخذ تلاميذنا عيّنات التربة بأنفسهم كل أبريل. يعرفون الرقم قبل العلماء، ويفخرون به كثيرًا.",
          },
          who: { en: "Mwende Kioko", ar: "مويندي كيوكو" },
          role: { en: "Head teacher, Kitui Hill Primary School", ar: "مديرة مدرسة تلة كيتوي الابتدائية" },
          still: 2,
        },
      ],
    },
  ],
  proof: {
    nav: { en: "The thesis", ar: "الفكرة" },
    title: { en: "Why we measure the ground, not the promise", ar: "لماذا نقيس الأرض لا الوعد" },
    quote: {
      en: "Land recovers on its own timetable. Our job is to be there each spring with a drill and an honest number.",
      ar: "تتعافى الأرض وفق جدولها هي. وعملنا أن نكون هناك كل ربيع بمثقاب ورقم صادق.",
    },
    who: { en: "Dr. Elin Sørensen, Head of Soil Science, Moss", ar: "د. إلين سورنسن، رئيسة علوم التربة، طحلب" },
    facts: [
      { k: { en: "Land in recovery", ar: "أرض قيد التعافي" }, v: { en: "12,400 hectares", ar: "12,400 هكتار" } },
      { k: { en: "Project sites", ar: "مواقع المشاريع" }, v: same("38") },
      { k: { en: "Farm and community partners", ar: "شركاء من المزارعين والمجتمعات" }, v: same("214") },
      { k: { en: "Soil cores taken, 2025", ar: "عيّنات تربة أُخذت عام 2025" }, v: same("9,640") },
    ],
  },
  cta: {
    title: { en: "Tell us about the land.", ar: "حدّثنا عن الأرض." },
    lede: {
      en: "Describe a field, a verge or a hillside. A soil scientist reads every note and writes back within a week.",
      ar: "صف لنا حقلًا أو حافة طريق أو سفح تل. يقرأ عالم تربة كل رسالة ويرد خلال أسبوع.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      {
        name: "region",
        type: "select",
        label: { en: "Region", ar: "المنطقة" },
        options: [
          { en: "Europe", ar: "أوروبا" },
          { en: "Middle East and North Africa", ar: "الشرق الأوسط وشمال أفريقيا" },
          { en: "Sub-Saharan Africa", ar: "أفريقيا جنوب الصحراء" },
          { en: "Americas", ar: "الأمريكتان" },
          { en: "Asia and Pacific", ar: "آسيا والمحيط الهادئ" },
        ],
      },
      {
        name: "hectares",
        type: "select",
        label: { en: "Size of the land", ar: "مساحة الأرض" },
        options: [
          { en: "Under 50 hectares", ar: "أقل من 50 هكتارًا" },
          { en: "50 to 500 hectares", ar: "من 50 إلى 500 هكتار" },
          { en: "500 to 5,000 hectares", ar: "من 500 إلى 5,000 هكتار" },
          { en: "More than 5,000 hectares", ar: "أكثر من 5,000 هكتار" },
        ],
      },
      {
        name: "land",
        type: "textarea",
        wide: true,
        label: { en: "What is the land like today?", ar: "كيف تبدو الأرض اليوم؟" },
      },
    ],
    success: { en: "Thank you. A soil scientist will read your note and write back within a week.", ar: "شكرًا لك. سيقرأ عالم تربة رسالتك ويرد خلال أسبوع." },
  },
};

export default content;
