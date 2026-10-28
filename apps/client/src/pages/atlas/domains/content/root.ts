import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'Live learning rooms where 8,400 learners follow a question instead of a syllabus.', ar: 'غرف تعلّم مباشرة يتبع فيها 8,400 متعلم سؤالًا بدل منهج.' },
  hero: "stack",
  secondary: { en: "See the cohorts", ar: "شاهد المجموعات" },
  sections: [
    {
      kind: "gallery",
      layout: "rail",
      id: "cohorts",
      nav: { en: "Cohorts", ar: "المجموعات" },
      title: { en: "Small groups that start with a question", ar: "مجموعات صغيرة تبدأ من سؤال" },
      lede: {
        en: "Each cohort meets live twice a week, shares its notes in the open, and ends with something you can show.",
        ar: "تلتقي كل مجموعة لقاءً مباشرًا مرتين في الأسبوع، وتشارك ملاحظاتها علنًا، وتنتهي بشيء يمكنك عرضه.",
      },
      items: [
        {
          title: { en: "How do rivers decide where to go?", ar: "كيف تقرر الأنهار وجهتها؟" },
          meta: { en: "Starts 14 Jan · 8 weeks · live", ar: "تبدأ 14 يناير · 8 أسابيع · مباشر" },
          note: { en: "Walk a real watershed on maps, build a small stream table, and write up what surprised you.", ar: "تتتبع مستجمعًا مائيًا حقيقيًا على الخرائط، وتبني نموذج مجرى صغيرًا، وتكتب ما فاجأك." },
          tags: [{ en: "Earth science", ar: "علوم الأرض" }, { en: "Beginner", ar: "مبتدئ" }],
          still: 0,
        },
        {
          title: { en: "Reading a balance sheet for the first time", ar: "قراءة الميزانية العمومية لأول مرة" },
          meta: { en: "Starts 21 Jan · 6 weeks · live", ar: "تبدأ 21 يناير · 6 أسابيع · مباشر" },
          note: { en: "Take apart one local bakery's published accounts line by line until each number makes sense.", ar: "تفكّك قوائم مالية منشورة لمخبز محلي سطرًا سطرًا حتى يصير لكل رقم معنى." },
          tags: [{ en: "Money", ar: "المال" }],
          still: 1,
        },
        {
          title: { en: "Why does this code fail only on Tuesdays?", ar: "لماذا تفشل هذه الشيفرة أيام الثلاثاء فقط؟" },
          meta: { en: "Starts 28 Jan · 8 weeks · live", ar: "تبدأ 28 يناير · 8 أسابيع · مباشر" },
          note: { en: "Debug five broken programs together and learn to ask smaller, better questions of each one.", ar: "تصلح مع المجموعة خمسة برامج معطوبة، وتتعلم أن تطرح على كل منها أسئلة أصغر وأدق." },
          tags: [{ en: "Programming", ar: "البرمجة" }, { en: "Intermediate", ar: "متوسط" }],
          still: 2,
        },
        {
          title: { en: "Writing a letter that gets answered", ar: "كتابة رسالة تلقى ردًّا" },
          meta: { en: "Starts 4 Feb · 5 weeks · live", ar: "تبدأ 4 فبراير · 5 أسابيع · مباشر" },
          note: { en: "Draft, send and follow up on three real letters to people whose work you admire.", ar: "تكتب وترسل وتتابع ثلاث رسائل حقيقية إلى أشخاص تُعجب بأعمالهم." },
          tags: [{ en: "Writing", ar: "الكتابة" }],
          still: 3,
        },
      ],
    },
    {
      kind: "gallery",
      layout: "rows",
      id: "mentors",
      nav: { en: "Mentors", ar: "المرشدون" },
      title: { en: "People who answer a question with a question", ar: "مرشدون يردّون على السؤال بسؤال" },
      lede: {
        en: "Every learner is paired with one mentor for the length of a cohort. Here is what each will ask you first.",
        ar: "يُقرن كل متعلم بمرشد واحد طوال مدة المجموعة. وهذا ما سيسألك عنه كل منهم أولًا.",
      },
      items: [
        {
          title: { en: "Dr. Amara Okafor", ar: "د. أمارا أوكافور" },
          meta: { en: "Hydrologist, 15 years in river basin research", ar: "عالمة هيدرولوجيا، 15 عامًا في أبحاث الأحواض النهرية" },
          note: { en: "She will ask which river you grew up near, and what you remember it doing.", ar: "ستسألك عن النهر الذي نشأت بقربه، وماذا تتذكر من حركته." },
          still: 0,
        },
        {
          title: { en: "Tomás Vidal", ar: "توماس فيدال" },
          meta: { en: "Former bakery owner, now teaches small-business finance", ar: "مالك مخبز سابق، يدرّس مالية المشاريع الصغيرة" },
          note: { en: "He will ask what you would do with an extra month of rent money.", ar: "سيسألك ماذا ستفعل بإيجار شهر إضافي." },
          still: 1,
        },
        {
          title: { en: "Meera Iyer", ar: "ميرا آيير" },
          meta: { en: "Staff engineer, maintains two open-source libraries", ar: "مهندسة برمجيات رئيسية، تصون مكتبتين مفتوحتي المصدر" },
          note: { en: "She will ask you to explain your bug to a rubber duck, then to her.", ar: "ستطلب منك أن تشرح خطأك لبطة مطاطية، ثم لها." },
          still: 2,
        },
        {
          title: { en: "Ingrid Lindqvist", ar: "إنغريد ليندكفيست" },
          meta: { en: "Editor and essayist, runs a letters column", ar: "محررة وكاتبة مقالات، تدير زاوية رسائل" },
          note: { en: "She will ask who you are writing to, and what you want them to do on Monday.", ar: "ستسألك لمن تكتب، وماذا تريد منه أن يفعل صباح الاثنين." },
          still: 3,
        },
      ],
    },
  ],
  proof: {
    nav: { en: "Learners", ar: "المتعلمون" },
    title: { en: "What learners say", ar: "ما يقوله المتعلمون" },
    quote: {
      en: "I joined to learn about rivers and stayed because nobody here pretends to have the final answer.",
      ar: "انضممت لأتعلم شيئًا عن الأنهار، وبقيت لأن أحدًا هنا لا يدّعي امتلاك الجواب الأخير.",
    },
    who: { en: "Daniel Mwangi, learner, river cohort", ar: "دانيال مْوانغي، متعلم، مجموعة الأنهار" },
    facts: [
      { k: { en: "Learners", ar: "المتعلمون" }, v: same("8,400") },
      { k: { en: "Live rooms", ar: "غرف مباشرة" }, v: same("64") },
      { k: { en: "Return for a second question", ar: "يعودون لسؤال ثانٍ" }, v: same("92%") },
      { k: { en: "Cohort size", ar: "حجم المجموعة" }, v: { en: "12 learners", ar: "12 متعلمًا" } },
    ],
  },
  cta: {
    title: { en: "Tell us what you are stuck on.", ar: "أخبرنا بما تعثّرت عنده." },
    lede: {
      en: "A real question is the best application. A mentor reads every one and suggests a cohort within two days.",
      ar: "السؤال الحقيقي هو أفضل طلب انضمام. يقرأ مرشد كل سؤال ويقترح مجموعة خلال يومين.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      {
        name: "interest",
        type: "select",
        label: { en: "What are you curious about?", ar: "ما الذي يثير فضولك؟" },
        options: [
          { en: "Science and nature", ar: "العلوم والطبيعة" },
          { en: "Money and work", ar: "المال والعمل" },
          { en: "Programming", ar: "البرمجة" },
          { en: "Writing and language", ar: "الكتابة واللغة" },
          { en: "Something else", ar: "شيء آخر" },
        ],
      },
      {
        name: "hours",
        type: "select",
        label: { en: "Hours per week", ar: "الساعات في الأسبوع" },
        options: [
          { en: "2 to 3 hours", ar: "من 2 إلى 3 ساعات" },
          { en: "4 to 6 hours", ar: "من 4 إلى 6 ساعات" },
          { en: "7 or more", ar: "7 ساعات أو أكثر" },
        ],
      },
      { name: "question", type: "textarea", wide: true, label: { en: "What question are you stuck on?", ar: "ما السؤال الذي تعثّرت عنده؟" } },
    ],
    success: { en: "Thank you. A mentor will write back within two days with a cohort that fits your question.", ar: "شكرًا لك. سيكتب لك أحد المرشدين خلال يومين مقترحًا مجموعة تناسب سؤالك." },
  },
};

export default content;
