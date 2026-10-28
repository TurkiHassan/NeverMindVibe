import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'Treasury software that reconciles every bank account overnight, so finance sees one true number each morning.', ar: 'برنامج خزينة يطابق كل حساب بنكي ليلًا، ليرى فريق المالية رقمًا واحدًا صحيحًا كل صباح.' },
  hero: "full",
  secondary: { en: "See the cash table", ar: "شاهد جدول النقد" },
  sections: [
    {
      kind: "table",
      id: "positions",
      nav: { en: "Cash positions", ar: "المراكز النقدية" },
      title: { en: "Every account in one table, before your coffee cools", ar: "كل الحسابات في جدول واحد قبل أن تبرد قهوتك" },
      lede: {
        en: "A morning view of cash across entities and currencies, reconciled overnight and sorted by what needs a decision.",
        ar: "نظرة صباحية على النقد عبر الكيانات والعملات، تمت مطابقتها ليلًا ورُتّبت بحسب ما يحتاج قرارًا.",
      },
      columns: [
        { en: "Entity", ar: "الكيان" },
        { en: "Currency", ar: "العملة" },
        { en: "Balance", ar: "الرصيد" },
        { en: "24h change", ar: "تغيّر 24 ساعة" },
        { en: "Runway", ar: "مدة التغطية" },
      ],
      rows: [
        [{ en: "Northgate Freight Ltd", ar: "نورثجيت للشحن" }, same("GBP"), same("4,218,330"), same("+1.2%"), { en: "14.2 months", ar: "14.2 شهرًا" }],
        [{ en: "Northgate Freight GmbH", ar: "نورثجيت للشحن ألمانيا" }, same("EUR"), same("1,904,075"), same("-0.4%"), { en: "9.8 months", ar: "9.8 شهرًا" }],
        [{ en: "Harbour Logistics Inc.", ar: "هاربر للوجستيات" }, same("USD"), same("7,560,912"), same("+3.1%"), { en: "21.0 months", ar: "21.0 شهرًا" }],
        [{ en: "Delta Cold Chain", ar: "دلتا لسلسلة التبريد" }, same("AED"), same("2,310,448"), same("+0.0%"), { en: "7.4 months", ar: "7.4 شهرًا" }],
        [{ en: "Group treasury pool", ar: "مجمّع خزينة المجموعة" }, same("USD"), same("12,880,200"), same("+2.2%"), { en: "n/a", ar: "لا ينطبق" }],
      ],
      foot: { en: "Sample figures for illustration.", ar: "أرقام تجريبية للتوضيح." },
    },
    {
      kind: "pricing",
      id: "plans",
      nav: { en: "Plans", ar: "الباقات" },
      title: { en: "Priced by entities, never by seats", ar: "التسعير بعدد الكيانات لا بعدد المقاعد" },
      lede: {
        en: "Everyone in finance, audit and the board can look. You pay for what is reconciled.",
        ar: "يستطيع الجميع في المالية والتدقيق ومجلس الإدارة الاطلاع. تدفع فقط مقابل ما تتم مطابقته.",
      },
      plans: [
        {
          name: { en: "Operator", ar: "المشغّل" },
          price: same("$480"),
          per: { en: "per month", ar: "شهريًا" },
          points: [
            { en: "Up to 3 entities", ar: "حتى 3 كيانات" },
            { en: "Daily reconciliation", ar: "مطابقة يومية" },
            { en: "Email support", ar: "دعم عبر البريد الإلكتروني" },
          ],
        },
        {
          name: { en: "Treasury", ar: "الخزينة" },
          price: same("$1,900"),
          per: { en: "per month", ar: "شهريًا" },
          featured: true,
          points: [
            { en: "Up to 20 entities", ar: "حتى 20 كيانًا" },
            { en: "Risk radar and alerts", ar: "رادار المخاطر والتنبيهات" },
            { en: "Playbooks for FX and sweeps", ar: "خطط عمل لصرف العملات وتجميع الأرصدة" },
            { en: "Named finance engineer", ar: "مهندس مالي مخصّص" },
          ],
        },
        {
          name: { en: "Group", ar: "المجموعة" },
          price: { en: "Custom", ar: "مخصّص" },
          per: { en: "per quote", ar: "حسب العرض" },
          points: [
            { en: "Unlimited entities", ar: "كيانات غير محدودة" },
            { en: "Private deployment", ar: "نشر خاص" },
            { en: "Audit-ready exports", ar: "تصدير جاهز للتدقيق" },
          ],
        },
      ],
    },
  ],
  proof: {
    nav: { en: "Customers", ar: "العملاء" },
    title: { en: "What finance teams say", ar: "ما يقوله فرق المالية" },
    quote: { en: "We closed the month in two days instead of nine, and nobody had to ask which number was right.", ar: "أقفلنا الشهر في يومين بدل تسعة، ولم يضطر أحد إلى أن يسأل: أي رقم هو الصحيح؟" },
    who: { en: "Ines Haddad, CFO, Northgate Freight", ar: "إنيس حداد، المديرة المالية، نورثجيت للشحن" },
    facts: [
      { k: { en: "Reconciled this quarter", ar: "ما تمت مطابقته هذا الربع" }, v: same("$4.2B") },
      { k: { en: "Median close time", ar: "متوسط زمن الإقفال" }, v: { en: "2.1 days", ar: "2.1 يومًا" } },
      { k: { en: "Banks connected", ar: "البنوك المرتبطة" }, v: same("312") },
      { k: { en: "Uptime, 12 months", ar: "التوافر، 12 شهرًا" }, v: same("99.99%") },
    ],
  },
  cta: {
    title: { en: "Open an account in ten minutes.", ar: "افتح حسابًا في عشر دقائق." },
    lede: { en: "Connect one bank, watch the first night reconcile, then decide.", ar: "اربط بنكًا واحدًا، وشاهد أول ليلة مطابقة، ثم قرّر." },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Work email", ar: "بريد العمل" } },
      { name: "company", type: "text", label: { en: "Company", ar: "الشركة" } },
      {
        name: "entities",
        type: "select",
        label: { en: "Entities to reconcile", ar: "عدد الكيانات" },
        options: [{ en: "1 to 3", ar: "من 1 إلى 3" }, { en: "4 to 20", ar: "من 4 إلى 20" }, { en: "More than 20", ar: "أكثر من 20" }],
      },
      { name: "first", type: "textarea", wide: true, label: { en: "What should reconcile first?", ar: "ما الذي يجب أن يُطابَق أولًا؟" } },
    ],
    submit: { en: "Connect your first bank", ar: "اربط أول بنك" },
    success: { en: "Request received. We'll send a secure link to connect your first bank.", ar: "وصلنا طلبك. سنرسل رابطًا آمنًا لربط أول بنك." },
  },
};

export default content;
