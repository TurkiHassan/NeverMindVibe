import type { DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'An architecture studio for libraries, courts and station halls, drawn for the people who use them every day.', ar: 'استوديو عمارة للمكتبات والمحاكم وقاعات المحطات، يرسمها لمن يستخدمها كل يوم.' },
  hero: "stack",
  secondary: { en: "See selected work", ar: "شاهد أعمالًا مختارة" },
  sections: [
    {
      kind: "gallery",
      layout: "asym",
      id: "work",
      nav: { en: "Selected work", ar: "أعمال مختارة" },
      title: { en: "Buildings drawn to last a century", ar: "مبانٍ رُسمت لتبقى قرنًا" },
      lede: {
        en: "Five recent buildings, each started by watching how people actually move through the site.",
        ar: "خمسة مبانٍ حديثة، بدأ كلٌّ منها بمراقبة كيف يتحرك الناس فعلًا في الموقع.",
      },
      items: [
        {
          title: { en: "Harbour Reading Room", ar: "قاعة قراءة الميناء" },
          meta: { en: "2023 · Rotterdam · Public library", ar: "2023 · روتردام · مكتبة عامة" },
          note: { en: "Long timber windows that follow the tide table, so the room is brightest when the water is highest.", ar: "نوافذ خشبية طويلة تتبع جدول المد، فتكون القاعة أكثر إشراقًا حين يعلو الماء." },
          tags: [{ en: "Civic", ar: "مدني" }, { en: "Timber", ar: "خشب" }],
          still: 0,
        },
        {
          title: { en: "Court of the Seven Stairs", ar: "محكمة الدرجات السبع" },
          meta: { en: "2021 · Lisbon · Courthouse", ar: "2021 · لشبونة · محكمة" },
          note: { en: "Seven stairs and no waiting rooms. Daylight does the queueing.", ar: "سبع درجات بلا غرف انتظار. الضوء هو من يرتّب الصفوف." },
          still: 1,
        },
        {
          title: { en: "Kiln Street Station", ar: "محطة شارع الفرن" },
          meta: { en: "2024 · Leeds · Transit hall", ar: "2024 · ليدز · قاعة عبور" },
          note: { en: "A brick concourse sized for the Friday rush, not the Tuesday average.", ar: "ردهة من الطوب بمقاس زحام الجمعة لا متوسط الثلاثاء." },
          still: 2,
        },
        {
          title: { en: "House of Slow Water", ar: "بيت الماء البطيء" },
          meta: { en: "2019 · Kyoto · Bathhouse", ar: "2019 · كيوتو · حمّام عام" },
          note: { en: "Stone that holds the warmth until midnight.", ar: "حجر يحتفظ بالدفء حتى منتصف الليل." },
          still: 3,
        },
        {
          title: { en: "North Light Archive", ar: "أرشيف الضوء الشمالي" },
          meta: { en: "2022 · Tromsø · Archive", ar: "2022 · ترومسو · أرشيف" },
          note: { en: "Rooms for paper that sees no direct sun, and readers who see plenty.", ar: "غرف للورق لا تصله الشمس المباشرة، وللقراء الذين يرونها كثيرًا." },
          still: 0,
        },
      ],
    },
    {
      kind: "steps",
      id: "approach",
      nav: { en: "Approach", ar: "المنهج" },
      title: { en: "Three questions before any line is drawn", ar: "ثلاثة أسئلة قبل أن نرسم أي خط" },
      lede: {
        en: "We answer these on site, with the people who will use the building, before we open a drawing.",
        ar: "نجيب عنها في الموقع مع من سيستخدمون المبنى، قبل أن نفتح أي رسم.",
      },
      items: [
        {
          title: { en: "Who stands here at eight in the morning?", ar: "من يقف هنا في الثامنة صباحًا؟" },
          note: { en: "We sit on the site at rush hour and draw the people before the walls.", ar: "نجلس في الموقع وقت الذروة ونرسم الناس قبل الجدران." },
          time: { en: "Weeks 1 to 3", ar: "الأسابيع 1 إلى 3" },
        },
        {
          title: { en: "Where does the light go?", ar: "إلى أين يذهب الضوء؟" },
          note: { en: "A year of sun paths becomes a plan: what is bright, what is shaded, what is allowed to be dim.", ar: "عام كامل من مسارات الشمس يصير مخططًا: ما يُضاء وما يُظلَّل وما يُسمح له أن يخفت." },
          time: { en: "Weeks 4 to 8", ar: "الأسابيع 4 إلى 8" },
        },
        {
          title: { en: "What will it look like after fifty winters?", ar: "كيف سيبدو بعد خمسين شتاءً؟" },
          note: { en: "We choose materials that improve with wear and detail every joint for the repair it will need.", ar: "نختار خامات تتحسن بالاستعمال، ونفصّل كل وصلة بحسب الإصلاح الذي ستحتاجه." },
          time: { en: "Weeks 9 to 14", ar: "الأسابيع 9 إلى 14" },
        },
      ],
    },
  ],
  proof: {
    nav: { en: "Practice", ar: "الممارسة" },
    title: { en: "A client on working with us", ar: "عميل يتحدث عن العمل معنا" },
    quote: {
      en: "They drew the building we described in the first meeting, and by the last meeting the one we needed.",
      ar: "رسموا المبنى الذي وصفناه في الاجتماع الأول، وفي الأخير رسموا المبنى الذي كنا نحتاجه.",
    },
    who: { en: "Marta Oliveira, Director, Harbour Library Trust", ar: "مارتا أوليفيرا، مديرة، مؤسسة مكتبة الميناء" },
    facts: [
      { k: { en: "Civic projects", ar: "مشاريع مدنية" }, v: { en: "17", ar: "17" } },
      { k: { en: "Countries", ar: "دول" }, v: { en: "9", ar: "9" } },
      { k: { en: "Years in practice", ar: "سنوات الممارسة" }, v: { en: "24", ar: "24" } },
      { k: { en: "Studio", ar: "الاستوديو" }, v: { en: "34 people", ar: "34 شخصًا" } },
    ],
  },
  cta: {
    title: { en: "Tell us about the site.", ar: "حدّثنا عن الموقع." },
    lede: {
      en: "A short note is enough. We reply within three working days, with questions rather than a quote.",
      ar: "يكفي سطران. نردّ خلال ثلاثة أيام عمل، بأسئلة لا بعرض سعر.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      {
        name: "type",
        type: "select",
        label: { en: "Project type", ar: "نوع المشروع" },
        options: [
          { en: "Library", ar: "مكتبة" },
          { en: "Courthouse", ar: "محكمة" },
          { en: "Transit", ar: "محطات ومواصلات" },
          { en: "Housing", ar: "إسكان" },
          { en: "Something else", ar: "شيء آخر" },
        ],
      },
      { name: "site", type: "text", label: { en: "Where is the site?", ar: "أين الموقع؟" } },
      { name: "brief", type: "textarea", wide: true, label: { en: "What should it do for the people who use it?", ar: "ماذا ينبغي أن يقدّم لمن يستخدمه؟" } },
    ],
    success: { en: "Thank you. A studio partner will write back within three working days.", ar: "شكرًا لك. سيكتب لك أحد شركاء الاستوديو خلال ثلاثة أيام عمل." },
  },
};

export default content;
