import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'A studio that makes public services easier to find and fairer to use, neighbourhood by neighbourhood.', ar: 'استوديو يجعل الخدمات العامة أسهل في الوصول وأعدل في الاستعمال، حيًّا بعد حي.' },
  hero: "split",
  secondary: { en: "Read the city signals", ar: "اقرأ إشارات المدينة" },
  sections: [
    {
      kind: "bars",
      id: "signals",
      nav: { en: "City signals", ar: "إشارات المدينة" },
      title: { en: "How long residents take to find a service", ar: "كم يستغرق السكان في العثور على خدمة" },
      lede: {
        en: "Median minutes from a resident deciding they need help to reaching the right counter, line or form. Measured in five of our 22 neighbourhoods.",
        ar: "الوسيط بالدقائق من لحظة قرار الساكن أنه يحتاج مساعدة حتى وصوله إلى الشباك أو الطابور أو النموذج الصحيح. قيس في خمسة من أحيائنا الاثنين والعشرين.",
      },
      unit: { en: "minutes", ar: "دقيقة" },
      rows: [
        { label: { en: "Eastgate", ar: "إيستغيت" }, value: 9, max: 40, unit: { en: "minutes", ar: "دقائق" }, note: { en: "Was 31 before the single repair form and the library kiosk.", ar: "كانت 31 قبل نموذج الإصلاح الموحّد وكشك المكتبة." } },
        { label: { en: "Marlow Quay", ar: "مارلو كواي" }, value: 14, max: 40, note: { en: "Most of the wait is still the phone queue for housing repairs.", ar: "معظم الانتظار ما زال في طابور الهاتف لإصلاحات السكن." } },
        { label: { en: "Old Mill", ar: "الطاحونة القديمة" }, value: 18, max: 40, note: { en: "Services moved twice in a year; residents kept going to the old address.", ar: "انتقلت الخدمات مرتين في عام، وبقي السكان يذهبون إلى العنوان القديم." } },
        { label: { en: "Hartley Heights", ar: "هارتلي هايتس" }, value: 26, max: 40, note: { en: "No library or service point within a 20 minute walk.", ar: "لا مكتبة ولا نقطة خدمة ضمن عشرين دقيقة سيرًا." } },
        { label: { en: "Canal Row", ar: "صف القناة" }, value: 33, max: 40, note: { en: "Forms came in only two languages until the 2024 rewrite, in a ward where residents speak seven.", ar: "كانت النماذج بلغتين فقط قبل إعادة صياغتها عام 2024، في حي يتحدث سكانه سبع لغات." } },
      ],
    },
    {
      kind: "gallery",
      layout: "rows",
      id: "cases",
      nav: { en: "Case studies", ar: "دراسات الحالة" },
      title: { en: "Four services made easier to use", ar: "أربع خدمات صارت أسهل استخدامًا" },
      lede: {
        en: "Each project began in a library, a clinic waiting room or a bus shelter, with the people who needed the service.",
        ar: "بدأ كل مشروع في مكتبة أو غرفة انتظار عيادة أو محطة حافلات، مع من يحتاجون الخدمة.",
      },
      items: [
        {
          title: { en: "One door for housing repairs", ar: "باب واحد لطلبات إصلاح السكن" },
          meta: { en: "2024 · Eastgate · 6 months", ar: "2024 · إيستغيت · 6 أشهر" },
          note: { en: "Five phone numbers became one form that works on paper, text message and a library kiosk.", ar: "تحوّلت خمسة أرقام هاتف إلى نموذج واحد يعمل ورقيًا وبالرسائل ومن كشك المكتبة." },
          tags: [{ en: "Housing", ar: "السكن" }],
          still: 0,
        },
        {
          title: { en: "Bus stops that say where to go", ar: "محطات حافلات تدلّك إلى وجهتك" },
          meta: { en: "2023 · Marlow Quay · 4 months", ar: "2023 · مارلو كواي · 4 أشهر" },
          note: { en: "Stop signs now list the nearest clinic, school and food pantry, with the walking time to each.", ar: "تذكر لافتات المحطات الآن أقرب عيادة ومدرسة وبنك طعام مع زمن المشي إلى كل منها." },
          tags: [{ en: "Transit", ar: "النقل" }, { en: "Signage", ar: "اللافتات" }],
          still: 1,
        },
        {
          title: { en: "Permit forms in seven languages", ar: "نماذج التصاريح بسبع لغات" },
          meta: { en: "2024 · Canal Row · 8 months", ar: "2024 · صف القناة · 8 أشهر" },
          note: { en: "Rewritten with residents at a community kitchen, then tested with a stopwatch and a cup of tea.", ar: "أُعيدت صياغتها مع السكان في مطبخ مجتمعي، ثم جُرّبت بساعة توقيت وكوب شاي." },
          tags: [{ en: "Permits", ar: "التصاريح" }],
          still: 2,
        },
        {
          title: { en: "The clinic queue, made visible", ar: "طابور العيادة بعد أن صار مرئيًا" },
          meta: { en: "2022 · Old Mill · 5 months", ar: "2022 · الطاحونة القديمة · 5 أشهر" },
          note: { en: "A wall display shows each visit's stage, so no one has to ask the receptionist where they stand.", ar: "تعرض شاشة جدارية مرحلة كل زيارة، فلا يحتاج أحد أن يسأل موظف الاستقبال عن دوره." },
          tags: [{ en: "Health", ar: "الصحة" }],
          still: 3,
        },
      ],
    },
  ],
  proof: {
    nav: { en: "The brief", ar: "الموجز" },
    title: { en: "What the city has said", ar: "ما قالته المدينة" },
    quote: {
      en: "They sat in our waiting room for two weeks before they drew anything. The new form shows it.",
      ar: "جلسوا في غرفة انتظارنا أسبوعين قبل أن يرسموا شيئًا. والنموذج الجديد يشهد بذلك.",
    },
    who: { en: "Rosa Delgado, Deputy Director of Neighbourhood Services, Eastgate", ar: "روزا دلغادو، نائبة مدير خدمات الأحياء، إيستغيت" },
    facts: [
      { k: { en: "Neighbourhoods", ar: "الأحياء" }, v: same("22") },
      { k: { en: "Faster service discovery", ar: "اكتشاف الخدمة أسرع بنسبة" }, v: same("68%") },
      { k: { en: "Shared brief", ar: "موجز مشترك" }, v: { en: "1", ar: "1" } },
      { k: { en: "Languages tested", ar: "لغات جرى اختبارها" }, v: same("7") },
    ],
  },
  cta: {
    title: { en: "Bring us a service that is hard to find.", ar: "اعرض علينا خدمة يصعب العثور عليها." },
    lede: {
      en: "Tell us who is struggling to use it. We start by listening in the places where people already wait.",
      ar: "أخبرنا من يعاني في استخدامها. نبدأ بالإصغاء في الأماكن التي ينتظر فيها الناس أصلًا.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      { name: "organisation", type: "text", label: { en: "Organisation", ar: "الجهة" } },
      {
        name: "role",
        type: "select",
        label: { en: "Your role", ar: "صفتك" },
        options: [
          { en: "City official", ar: "مسؤول في المدينة" },
          { en: "Nonprofit", ar: "منظمة غير ربحية" },
          { en: "Researcher", ar: "باحث" },
          { en: "Resident", ar: "ساكن" },
        ],
      },
      { name: "service", type: "textarea", wide: true, label: { en: "Which service is hard to find or use, and for whom?", ar: "ما الخدمة التي يصعب العثور عليها أو استخدامها، ولمن؟" } },
    ],
    success: { en: "Thank you. A member of the team will reply within five working days.", ar: "شكرًا لك. سيردّ عليك أحد أعضاء الفريق خلال خمسة أيام عمل." },
  },
};

export default content;
