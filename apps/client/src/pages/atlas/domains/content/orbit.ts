import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'Mission planning and flight operations for payloads that travel 1.5 million kilometres from home.', ar: 'تخطيط مهمات وعمليات طيران للحمولات التي تبتعد 1.5 مليون كيلومتر عن الأرض.' },
  hero: "full",
  secondary: { en: "See the flight log", ar: "اطّلع على سجل الرحلة" },
  sections: [
    {
      kind: "timeline",
      id: "flight-log",
      nav: { en: "Flight log", ar: "سجل الرحلة" },
      title: { en: "Vesper-1, from the pad to Lagrange point two", ar: "فيسبر-1، من منصة الإطلاق إلى نقطة لاغرانج الثانية" },
      lede: {
        en: "Every entry below is taken from the mission log, in the order the flight controllers lived it.",
        ar: "كل بند أدناه مأخوذ من سجل المهمة، بالترتيب الذي عاشه مراقبو الرحلة.",
      },
      items: [
        {
          when: { en: "T-minus 04:00", ar: "قبل الإطلاق بـ 04:00" },
          title: { en: "Propellant load complete", ar: "اكتمال تعبئة الدافع" },
          note: { en: "Tanks topped off, all 23 flight controllers polled, and the weather officer called the upper winds acceptable.", ar: "امتلأت الخزانات، واستُطلع رأي مراقبي الرحلة الثلاثة والعشرين، وأعلن ضابط الأرصاد أن الرياح العليا مقبولة." },
        },
        {
          when: { en: "T+00:31", ar: "بعد الإطلاق بـ 00:31" },
          title: { en: "Separation and first signal", ar: "الانفصال وأول إشارة" },
          note: { en: "Vesper-1 left the upper stage on schedule and the ground station at Kourou held its carrier for the full pass.", ar: "انفصلت فيسبر-1 عن المرحلة العليا في موعدها، وحافظت محطة كورو الأرضية على حامل الإشارة طوال العبور." },
        },
        {
          when: { en: "Day 3", ar: "اليوم 3" },
          title: { en: "Sunshield fully deployed", ar: "انتشار الدرع الشمسي بالكامل" },
          note: { en: "Five layers unfurled over nine hours, with the cold side dropping below 60 kelvin by evening.", ar: "انفردت خمس طبقات خلال تسع ساعات، وهبطت حرارة الجانب البارد دون 60 كلفن مع المساء." },
        },
        {
          when: { en: "Day 29", ar: "اليوم 29" },
          title: { en: "Insertion burn at L2", ar: "إشعال محرك الإدخال عند L2" },
          note: { en: "A 41-second burn placed the observatory on its halo orbit, 1.5 million km from Earth.", ar: "أدخل إشعال استمر 41 ثانية المرصد في مداره الهالي على بُعد 1.5 مليون كم من الأرض." },
        },
        {
          when: { en: "Day 112", ar: "اليوم 112" },
          title: { en: "First light, all four instruments", ar: "الضوء الأول للأجهزة الأربعة" },
          note: { en: "The mid-infrared camera returned its first calibrated frame, a field of 3,000 faint galaxies.", ar: "أعادت الكاميرا تحت الحمراء المتوسطة أول إطار معايَر، حقلًا من 3,000 مجرة خافتة." },
        },
        {
          when: { en: "Day 214", ar: "اليوم 214" },
          title: { en: "Science operations begin", ar: "بدء العمليات العلمية" },
          note: { en: "Commissioning closed with 98% of the planned checks passed and the first public observing queue opened.", ar: "اختُتمت التهيئة بنجاح 98% من الفحوص المخطط لها، وفُتحت أول قائمة رصد مفتوحة للعموم." },
        },
      ],
    },
    {
      kind: "specs",
      id: "vehicle",
      nav: { en: "Vehicle systems", ar: "أنظمة المركبة" },
      title: { en: "What flies, and what keeps it flying", ar: "ما يحلّق، وما يُبقيه محلّقًا" },
      lede: {
        en: "Vesper-1 is sized for twelve years at L2 with no servicing visit and a small operations team.",
        ar: "صُمّمت فيسبر-1 لاثني عشر عامًا عند L2 دون زيارة صيانة، وبفريق عمليات صغير.",
      },
      still: 1,
      rows: [
        { k: { en: "Launch mass", ar: "كتلة الإطلاق" }, v: same("2,840 kg") },
        { k: { en: "Delivered power", ar: "الطاقة المتاحة" }, v: same("1,150 W") },
        { k: { en: "Delta-v budget", ar: "ميزانية دلتا-ف" }, v: same("410 m/s") },
        { k: { en: "Station-keeping", ar: "الحفاظ على المدار" }, v: { en: "12 years", ar: "12 عامًا" } },
        { k: { en: "Comms band", ar: "نطاق الاتصال" }, v: { en: "X-band up, Ka-band down", ar: "وصلة صاعدة بنطاق X، وهابطة بنطاق Ka" } },
        { k: { en: "Downlink rate", ar: "معدل الوصلة الهابطة" }, v: { en: "26 Mbit/s", ar: "26 ميغابت/ث" } },
        { k: { en: "Payload", ar: "الحمولة" }, v: { en: "4 instruments", ar: "4 أجهزة" } },
        { k: { en: "Crew", ar: "الطاقم" }, v: { en: "Uncrewed, 3 on console", ar: "بلا طاقم، 3 على لوحة التحكم" } },
      ],
    },
  ],
  proof: {
    nav: { en: "The team", ar: "الفريق" },
    title: { en: "What the flight team says", ar: "ما يقوله فريق الرحلة" },
    quote: {
      en: "At 1.5 million km you stop trusting your instincts and start trusting your log. This one never lied to us.",
      ar: "على بُعد 1.5 مليون كم تكفّ عن الثقة بحدسك وتبدأ بالثقة بسجلّك. وهذا السجل لم يكذب علينا قط.",
    },
    who: { en: "Dr. Adaeze Okonkwo, Flight Director, Vesper-1", ar: "د. أداييزي أوكونكوو، مديرة الرحلة، فيسبر-1" },
    facts: [
      { k: { en: "Distance from Earth", ar: "البعد عن الأرض" }, v: { en: "1.5 million km", ar: "1.5 مليون كم" } },
      { k: { en: "One-way signal time", ar: "زمن الإشارة باتجاه واحد" }, v: { en: "5.0 seconds", ar: "5 ثوانٍ" } },
      { k: { en: "Days on orbit", ar: "أيام في المدار" }, v: same("412") },
      { k: { en: "Operations staff", ar: "العاملون في العمليات" }, v: { en: "41 people", ar: "41 شخصًا" } },
    ],
  },
  cta: {
    title: { en: "Ask for a mission briefing.", ar: "اطلب إحاطة عن المهمة." },
    lede: {
      en: "Tell us what you are planning to fly or fund. A flight dynamics lead will answer within two working days.",
      ar: "أخبرنا بما تنوي إطلاقه أو تمويله. سيردّ عليك أحد قادة ديناميكا الطيران خلال يومَي عمل.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      { name: "organisation", type: "text", label: { en: "Organisation", ar: "الجهة" } },
      {
        name: "interest",
        type: "select",
        label: { en: "Area of interest", ar: "مجال الاهتمام" },
        options: [
          { en: "Mission planning", ar: "تخطيط المهمات" },
          { en: "Payload hosting", ar: "استضافة الحمولات" },
          { en: "Press", ar: "الصحافة" },
          { en: "Investment", ar: "الاستثمار" },
        ],
      },
    ],
    success: { en: "Request logged. A flight dynamics lead will contact you within two working days.", ar: "سُجّل طلبك. سيتواصل معك أحد قادة ديناميكا الطيران خلال يومَي عمل." },
  },
};

export default content;
