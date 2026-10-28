import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'Grid-scale clean energy: 3.1 GW moving from fossil to clean, watched around the clock.', ar: 'طاقة نظيفة على نطاق الشبكة: 3.1 جيجاواط تنتقل من الوقود الأحفوري إلى مصادر نظيفة، تحت المراقبة على مدار الساعة.' },
  hero: "full",
  secondary: { en: "See the projects", ar: "شاهد المشاريع" },
  sections: [
    {
      kind: "bars",
      id: "projects",
      nav: { en: "Projects", ar: "المشاريع" },
      title: { en: "3.1 GW planned, and how much is live", ar: "3.1 جيجاواط مخططة، وكم منها يعمل" },
      lede: {
        en: "Five sites across wind, solar, storage and transmission. Each bar shows megawatts online against megawatts planned, updated at the end of every quarter.",
        ar: "خمسة مواقع في الرياح والشمس والتخزين والنقل. يعرض كل شريط الميجاواط العاملة مقابل المخططة، ويُحدَّث في نهاية كل ربع سنة.",
      },
      unit: { en: "MW", ar: "ميجاواط" },
      rows: [
        {
          label: { en: "Calder Moor Wind", ar: "مزرعة رياح كالدر مور" },
          value: 720,
          max: 900,
          note: { en: "Northumberland, UK · 2023", ar: "نورثمبرلاند، المملكة المتحدة · 2023" },
        },
        {
          label: { en: "Sable Plains Solar", ar: "محطة سهول سيبل الشمسية" },
          value: 410,
          max: 600,
          note: { en: "Andalusia, Spain · 2024", ar: "الأندلس، إسبانيا · 2024" },
        },
        {
          label: { en: "Harrow Quay Storage", ar: "محطة تخزين هارو كواي" },
          value: 240,
          max: 400,
          note: { en: "Teesside, UK · 2025", ar: "تيسايد، المملكة المتحدة · 2025" },
        },
        {
          label: { en: "Northline Interconnector", ar: "خط نورثلاين للربط الكهربائي" },
          value: 450,
          max: 800,
          note: { en: "Jutland to Lincolnshire · 2024", ar: "يوتلاند إلى لينكولنشاير · 2024" },
        },
        {
          label: { en: "Ostrava Ridge Wind", ar: "مزرعة رياح أوسترافا ريدج" },
          value: 160,
          max: 400,
          note: { en: "Moravia, Czechia · 2025", ar: "مورافيا، التشيك · 2025" },
        },
      ],
    },
    {
      kind: "timeline",
      id: "signals",
      nav: { en: "Signals", ar: "الإشارات" },
      title: { en: "Grid milestones, in the order they happened", ar: "محطات الشبكة بترتيب حدوثها" },
      lede: {
        en: "What the network did, quarter by quarter. Figures come from the metered feed, not from forecasts.",
        ar: "ما أنجزته الشبكة ربعًا بعد ربع. الأرقام من القراءات المقيسة لا من التوقعات.",
      },
      items: [
        {
          when: { en: "Q2 2025", ar: "الربع الثاني 2025" },
          title: { en: "Calder Moor reaches 720 MW", ar: "كالدر مور يبلغ 720 ميجاواط" },
          note: { en: "The 96th of 120 turbines was synchronised on a night of record demand in the north.", ar: "رُبطت التوربينة السادسة والتسعون من أصل 120 بالشبكة في ليلة بلغ فيها الطلب أعلى مستوياته في الشمال." },
        },
        {
          when: { en: "Q3 2025", ar: "الربع الثالث 2025" },
          title: { en: "Harrow Quay holds the evening peak", ar: "هارو كواي يغطي ذروة المساء" },
          note: { en: "First 120 MW battery block carried the regional peak for two hours without a gas start.", ar: "أول كتلة بطاريات بقدرة 120 ميجاواط غطت ذروة المنطقة ساعتين دون تشغيل محطة غاز." },
        },
        {
          when: { en: "Q4 2025", ar: "الربع الرابع 2025" },
          title: { en: "Northline completes its first full month", ar: "نورثلاين يكمل أول شهر كامل" },
          note: { en: "The cable ran at 450 MW for 31 days straight, with 1.9 percent losses over the sea leg.", ar: "عمل الكابل بقدرة 450 ميجاواط على مدى 31 يومًا متواصلة، وبفاقد 1.9 في المئة في المقطع البحري." },
        },
        {
          when: { en: "Q1 2026", ar: "الربع الأول 2026" },
          title: { en: "Sable Plains passes 400 MW", ar: "سهول سيبل تتجاوز 400 ميجاواط" },
          note: { en: "Tracking panels held output above 80 percent of nameplate across a clear January midday.", ar: "حافظت الألواح المتتبعة للشمس على إنتاج فوق 80 في المئة من القدرة الاسمية خلال ظهيرة صافية في يناير." },
        },
        {
          when: { en: "Q2 2026", ar: "الربع الثاني 2026" },
          title: { en: "Ostrava Ridge connects to the grid", ar: "أوسترافا ريدج يتصل بالشبكة" },
          note: { en: "The first 160 MW of the ridge line is online, with the second phase cleared for construction.", ar: "أول 160 ميجاواط من خط التلال تعمل الآن، والمرحلة الثانية حصلت على إذن البناء." },
        },
      ],
    },
  ],
  proof: {
    nav: { en: "People", ar: "الأشخاص" },
    title: { en: "What the people running the grid say", ar: "ما يقوله من يشغّلون الشبكة" },
    quote: {
      en: "When the cable tripped at 3 a.m., their control room called us before our own alarm did. That is the whole relationship.",
      ar: "حين انفصل الكابل عن الخدمة في الثالثة فجرًا، اتصلت بنا غرفة التحكم لديهم قبل أن يدوّي إنذارنا. هذه هي العلاقة كلها.",
    },
    who: { en: "Dr. Ruth Ellison, Head of Operations, Tyne Valley Network", ar: "د. روث إليسون، رئيسة العمليات، شبكة وادي تاين" },
    facts: [
      { k: { en: "Capacity planned", ar: "القدرة المخططة" }, v: { en: "3.1 GW", ar: "3.1 جيجاواط" } },
      { k: { en: "Sites live", ar: "مواقع عاملة" }, v: same("5") },
      { k: { en: "Control room", ar: "غرفة التحكم" }, v: { en: "Staffed 24/7", ar: "مأهولة على مدار الساعة" } },
      { k: { en: "Availability, 2025", ar: "التوافر، 2025" }, v: same("98.7%") },
    ],
  },
  cta: {
    title: { en: "Tell us what you want to connect.", ar: "أخبرنا ما الذي تريد ربطه." },
    lede: {
      en: "Describe the site and the load. An engineer replies within five working days with connection options, not a brochure.",
      ar: "صف الموقع والحمل. يردّ مهندس خلال خمسة أيام عمل بخيارات الربط لا بكتيّب دعائي.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Work email", ar: "بريد العمل" } },
      { name: "organisation", type: "text", label: { en: "Organisation", ar: "الجهة" } },
      {
        name: "site",
        type: "select",
        label: { en: "Site type", ar: "نوع الموقع" },
        options: [
          { en: "Generator", ar: "منتج للطاقة" },
          { en: "Utility", ar: "شركة مرافق" },
          { en: "Industrial site", ar: "منشأة صناعية" },
          { en: "Municipality", ar: "بلدية" },
        ],
      },
      {
        name: "brief",
        type: "textarea",
        wide: true,
        label: { en: "Where is it, and how many megawatts?", ar: "أين يقع، وكم ميجاواط؟" },
      },
    ],
    success: { en: "Received. A grid engineer will write back within five working days.", ar: "وصلتنا رسالتك. سيكتب لك مهندس شبكات خلال خمسة أيام عمل." },
  },
};

export default content;
