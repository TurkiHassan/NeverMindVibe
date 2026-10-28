import { same, type DomainContent } from "../types";

const code = `import { workflow } from "@kernel/sdk";

export default workflow("invoice-triage", async (run) => {
  const doc = await run.ingest({ source: "inbox/invoices" });
  const facts = await run.retrieve(doc, { index: "vendors", topK: 5 });

  const draft = await run.reason({
    model: "kern-m",
    task: "Match to purchase order and flag mismatches",
    context: facts,
    schema: { po: "string", total: "number", flags: "string[]" },
  });

  const approved = await run.review(draft, { when: draft.flags.length > 0 });
  return run.ship(approved, { to: "erp.bills" });
});`;

const content: DomainContent = {
  lede: { en: 'An applied AI platform for teams that want models inside real workflows, with the guardrails already in place.', ar: 'منصة ذكاء اصطناعي تطبيقي للفرق التي تريد النماذج داخل سير عمل حقيقي، مع ضوابط الأمان جاهزة.' },
  hero: "split",
  secondary: { en: "See a workflow", ar: "شاهد سير عمل" },
  sections: [
    {
      kind: "workflow",
      id: "workflows",
      nav: { en: "Workflows", ar: "سير العمل" },
      title: { en: "From a raw document to a booked invoice", ar: "من مستند خام إلى فاتورة مسجّلة" },
      lede: {
        en: "A workflow is plain code with five steps you can read, test and replay. Every run is logged with its inputs, so a wrong answer can be traced.",
        ar: "سير العمل شيفرة عادية من خمس خطوات تقرؤها وتختبرها وتعيد تشغيلها. كل تشغيل يُسجَّل بمدخلاته، فيمكن تتبّع أي إجابة خاطئة.",
      },
      nodes: [
        { en: "Ingest", ar: "الاستقبال" },
        { en: "Retrieve", ar: "الاسترجاع" },
        { en: "Reason", ar: "الاستدلال" },
        { en: "Review", ar: "المراجعة" },
        { en: "Ship", ar: "الإرسال" },
      ],
      codeLabel: { en: "invoice-triage.js", ar: "invoice-triage.js" },
      code,
    },
    {
      kind: "gallery",
      layout: "grid",
      id: "models",
      nav: { en: "Model cards", ar: "بطاقات النماذج" },
      title: { en: "Four models, each with its limits written down", ar: "أربعة نماذج، وحدود كل منها مكتوبة" },
      lede: {
        en: "Pick by the job, not the hype. Every card lists context length, typical latency and the jobs it is built for.",
        ar: "اختر بحسب المهمة لا بحسب الضجة. كل بطاقة تذكر طول السياق والزمن المعتاد والمهام التي صُمّم لها.",
      },
      items: [
        {
          title: { en: "Kern S", ar: "Kern S" },
          meta: { en: "32K context · 180 ms", ar: "سياق 32 ألف · 180 مللي ثانية" },
          note: { en: "Small and fast. Routing, labelling and short extraction where cost per call matters most.", ar: "صغير وسريع. للتوجيه والتصنيف والاستخراج القصير حيث تهم كلفة الطلب." },
          tags: [{ en: "Classify", ar: "تصنيف" }, { en: "Extract", ar: "استخراج" }],
          still: 0,
        },
        {
          title: { en: "Kern M", ar: "Kern M" },
          meta: { en: "128K context · 620 ms", ar: "سياق 128 ألف · 620 مللي ثانية" },
          note: { en: "The default for documents. Reads contracts and tables and returns structured output that validates.", ar: "الخيار الافتراضي للمستندات. يقرأ العقود والجداول ويعيد مخرجات منظمة تجتاز التحقق." },
          tags: [{ en: "Documents", ar: "مستندات" }, { en: "Structured output", ar: "مخرجات منظمة" }],
          still: 1,
        },
        {
          title: { en: "Kern L", ar: "Kern L" },
          meta: { en: "200K context · 1.8 s", ar: "سياق 200 ألف · 1.8 ثانية" },
          note: { en: "For long reasoning chains, code review and questions that need several sources held in mind at once.", ar: "لسلاسل الاستدلال الطويلة ومراجعة الشيفرة والأسئلة التي تحتاج عدة مصادر في آن واحد." },
          tags: [{ en: "Reasoning", ar: "استدلال" }, { en: "Code", ar: "شيفرة" }],
          still: 2,
        },
        {
          title: { en: "Kern Vision", ar: "Kern Vision" },
          meta: { en: "64K context · 950 ms", ar: "سياق 64 ألف · 950 مللي ثانية" },
          note: { en: "Reads scans, receipts and charts. Returns the text and where on the page it found it.", ar: "يقرأ المستندات الممسوحة ضوئيًا والإيصالات والرسوم البيانية، ويعيد النص وموضعه في الصفحة." },
          tags: [{ en: "Images", ar: "صور" }, { en: "OCR", ar: "التعرّف الضوئي على الحروف" }],
          still: 3,
        },
      ],
    },
  ],
  proof: {
    nav: { en: "Safety", ar: "السلامة" },
    title: { en: "Review is a step, not an afterthought", ar: "المراجعة خطوة أساسية لا فكرة لاحقة" },
    quote: {
      en: "Every low-confidence answer lands in a queue with a person's name on it. In six months nothing went out unreviewed that should have been.",
      ar: "كل إجابة منخفضة الثقة تصل إلى طابور باسم شخص محدد. ولم يخرج خلال ستة أشهر شيء كان ينبغي مراجعته دون أن يُراجَع.",
    },
    who: { en: "Dev Anand, Head of Platform, Orchard Payments", ar: "ديف أناند، رئيس المنصة، أورتشارد للمدفوعات" },
    facts: [
      { k: { en: "Uptime, 12 months", ar: "التوافر، 12 شهرًا" }, v: same("99.98%") },
      { k: { en: "Workflows in production", ar: "سير عمل قيد التشغيل" }, v: same("41,000") },
      { k: { en: "Tokens orchestrated, last 30 days", ar: "رموز جرت إدارتها خلال 30 يومًا" }, v: { en: "1.2B", ar: "1.2 مليار" } },
      { k: { en: "Run logs kept", ar: "سجلات التشغيل محفوظة" }, v: { en: "90 days", ar: "90 يومًا" } },
    ],
  },
  cta: {
    title: { en: "Start with one workflow.", ar: "ابدأ بسير عمل واحد." },
    lede: {
      en: "Tell us the job you want off your team's desk. We will set up a workspace with a starter workflow and test credits.",
      ar: "أخبرنا بالمهمة التي تريد إزاحتها عن كاهل فريقك. سنجهّز لك مساحة عمل بسير عمل أولي ورصيد تجريبي.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Work email", ar: "بريد العمل" } },
      {
        name: "usecase",
        type: "select",
        label: { en: "Use case", ar: "حالة الاستخدام" },
        options: [
          { en: "Document processing", ar: "معالجة المستندات" },
          { en: "Support triage", ar: "فرز طلبات الدعم" },
          { en: "Internal search", ar: "بحث داخلي" },
          { en: "Code and data tasks", ar: "مهام الشيفرة والبيانات" },
          { en: "Something else", ar: "شيء آخر" },
        ],
      },
      {
        name: "team",
        type: "select",
        label: { en: "Team size", ar: "حجم الفريق" },
        options: [
          { en: "1 to 5", ar: "من 1 إلى 5" },
          { en: "6 to 25", ar: "من 6 إلى 25" },
          { en: "26 to 100", ar: "من 26 إلى 100" },
          { en: "More than 100", ar: "أكثر من 100" },
        ],
      },
      { name: "job", type: "textarea", wide: true, label: { en: "What should the first workflow do?", ar: "ماذا ينبغي أن يفعل أول سير عمل؟" } },
    ],
    success: { en: "Your workspace is being prepared. We'll email a sign-in link within the hour.", ar: "نجهّز مساحة عملك. سنرسل رابط الدخول بالبريد خلال ساعة." },
  },
};

export default content;
