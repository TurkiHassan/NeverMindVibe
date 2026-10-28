import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'One studio for makers: ideas, drafts and releases in a single place, so fewer tabs stand between you and shipping.', ar: 'استوديو واحد للمبدعين: الأفكار والمسودات والإصدارات في مكان واحد، فتقلّ علامات التبويب بينك وبين النشر.' },
  hero: "split",
  secondary: { en: "Tour your studio", ar: "تجوّل في استوديوك" },
  sections: [
    {
      kind: "gallery",
      layout: "grid",
      id: "studio",
      nav: { en: "Your studio", ar: "استوديوك" },
      title: { en: "Six tools that share one desk", ar: "ست أدوات تتشارك مكتبًا واحدًا" },
      lede: {
        en: "Sketch, draft, review and ship from the same place. Nothing here asks you to leave the piece you are working on.",
        ar: "ارسم وصُغ وراجع وانشر من المكان نفسه. لا شيء هنا يطلب منك مغادرة العمل الذي تعمل عليه.",
      },
      items: [
        {
          title: { en: "Scratchpad", ar: "الدفتر السريع" },
          note: { en: "Catch a half-formed idea in two taps and file it against the project it belongs to.", ar: "التقط فكرة غير مكتملة بنقرتين واحفظها في المشروع الذي تنتمي إليه." },
          tags: [{ en: "Capture", ar: "التقاط" }, { en: "Voice", ar: "صوت" }],
          still: 0,
        },
        {
          title: { en: "Moodwall", ar: "جدار الإلهام" },
          note: { en: "Pin references, palettes and clips on an infinite board that keeps its own history.", ar: "ثبّت المراجع والألوان والمقاطع على لوحة لا نهائية تحتفظ بتاريخها." },
          tags: [{ en: "Reference", ar: "مراجع" }],
          still: 1,
        },
        {
          title: { en: "Draft Room", ar: "غرفة المسودات" },
          note: { en: "Keep every version of a piece side by side and bring back the one you liked on Tuesday.", ar: "احتفظ بكل نسخ العمل جنبًا إلى جنب واسترجع النسخة التي أعجبتك يوم الثلاثاء." },
          tags: [{ en: "Versions", ar: "نسخ" }, { en: "Writing", ar: "كتابة" }],
          still: 2,
        },
        {
          title: { en: "Review Link", ar: "رابط المراجعة" },
          note: { en: "Send a private link and collect notes pinned to the exact frame, bar or line.", ar: "أرسل رابطًا خاصًا واجمع الملاحظات مثبتة على اللقطة أو الميزان أو السطر بدقة." },
          tags: [{ en: "Feedback", ar: "ملاحظات" }],
          still: 3,
        },
        {
          title: { en: "Rhythm Calendar", ar: "تقويم الإيقاع" },
          note: { en: "Plan releases around your real energy, with gentle reminders instead of red deadlines.", ar: "خطّط لإصداراتك بحسب طاقتك الفعلية، بتذكيرات لطيفة بدل المواعيد الحمراء." },
          tags: [{ en: "Planning", ar: "تخطيط" }],
          still: 1,
        },
        {
          title: { en: "Launch Pad", ar: "منصة الإطلاق" },
          note: { en: "Export once and publish to your shop, newsletter and social feeds in the right sizes.", ar: "صدّر مرة واحدة وانشر في متجرك ونشرتك وحساباتك بالمقاسات الصحيحة." },
          tags: [{ en: "Publish", ar: "نشر" }, { en: "Shop", ar: "متجر" }],
          still: 0,
        },
      ],
    },
    {
      kind: "timeline",
      id: "releases",
      nav: { en: "Release notes", ar: "ملاحظات الإصدار" },
      title: { en: "What changed in the last five releases", ar: "ما الذي تغيّر في آخر خمسة إصدارات" },
      lede: {
        en: "Most of these started as a request in the community forum.",
        ar: "بدأ معظمها طلبًا في منتدى المجتمع.",
      },
      items: [
        {
          when: { en: "v2.0 · October", ar: "v2.0 · أكتوبر" },
          title: { en: "Moodwall opens to collaborators", ar: "جدار الإلهام ينفتح أمام المتعاونين" },
          note: { en: "Invite up to ten people to a board, with a cursor for each.", ar: "ادعُ حتى عشرة أشخاص إلى لوحة، بمؤشر لكل واحد منهم." },
        },
        {
          when: { en: "v2.1 · December", ar: "v2.1 · ديسمبر" },
          title: { en: "Audio takes in Scratchpad", ar: "تسجيلات صوتية في الدفتر السريع" },
          note: { en: "Hum a melody or read a line aloud and it lands transcribed next to the recording.", ar: "دندن لحنًا أو اقرأ سطرًا بصوت عالٍ فيصل مكتوبًا بجانب التسجيل." },
        },
        {
          when: { en: "v2.2 · January", ar: "v2.2 · يناير" },
          title: { en: "Draft Room compares any two versions", ar: "غرفة المسودات تقارن بين أي نسختين" },
          note: { en: "Changes are highlighted line by line for text and layer by layer for artwork.", ar: "تُظهر التغييرات سطرًا بسطر للنصوص وطبقة بطبقة للأعمال الفنية." },
        },
        {
          when: { en: "v2.3 · February", ar: "v2.3 · فبراير" },
          title: { en: "Review Link adds timestamps", ar: "رابط المراجعة يضيف الطوابع الزمنية" },
          note: { en: "Reviewers can leave a note at 01:42 of your cut and you jump straight there.", ar: "يستطيع المراجع ترك ملاحظة عند 01:42 من عملك فتنتقل إليها مباشرة." },
        },
        {
          when: { en: "v2.4 · March", ar: "v2.4 · مارس" },
          title: { en: "Launch Pad schedules for you", ar: "منصة الإطلاق تجدول عنك" },
          note: { en: "Pick a day and it posts to every channel you connected, in the time zone of your audience.", ar: "اختر يومًا وستنشر في كل قناة ربطتها، بتوقيت جمهورك." },
        },
      ],
    },
  ],
  proof: {
    nav: { en: "Community", ar: "المجتمع" },
    title: { en: "What makers say after a season", ar: "ما يقوله المبدعون بعد موسم كامل" },
    quote: {
      en: "I used to lose half a day just finding the right file. Now the album went from sketch to release in six weeks.",
      ar: "كنت أضيّع نصف يوم فقط لأجد الملف المناسب. الآن انتقل الألبوم من المسودة إلى الإصدار في ستة أسابيع.",
    },
    who: { en: "Dalia Moreno, songwriter and zine maker, Valencia", ar: "داليا مورينو، كاتبة أغانٍ وصانعة مجلات مستقلة، فالنسيا" },
    facts: [
      { k: { en: "Makers", ar: "مبدعون" }, v: { en: "18k", ar: "18 ألف" } },
      { k: { en: "Ideas shipped", ar: "أفكار منشورة" }, v: { en: "72k", ar: "72 ألف" } },
      { k: { en: "More work in flow", ar: "عمل أكثر في التدفق" }, v: same("2.6×") },
      { k: { en: "Release cadence", ar: "وتيرة الإصدارات" }, v: { en: "Roughly monthly", ar: "تقريبًا كل شهر" } },
    ],
  },
  cta: {
    title: { en: "Start a loop with your next piece.", ar: "ابدأ حلقة مع عملك القادم." },
    lede: {
      en: "Free for solo makers. Tell us what you make and we will set up your studio before you log in.",
      ar: "مجاني للمبدعين الأفراد. أخبرنا ماذا تصنع وسنجهّز استوديوك قبل أن تسجّل الدخول.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      {
        name: "craft",
        type: "select",
        label: { en: "What do you make?", ar: "ماذا تصنع؟" },
        options: [
          { en: "Illustration", ar: "رسم" },
          { en: "Music", ar: "موسيقى" },
          { en: "Video", ar: "فيديو" },
          { en: "Writing", ar: "كتابة" },
          { en: "Something else", ar: "شيئًا آخر" },
        ],
      },
      {
        name: "team",
        type: "select",
        label: { en: "Team size", ar: "حجم الفريق" },
        options: [
          { en: "Just me", ar: "أنا وحدي" },
          { en: "2 to 5", ar: "من 2 إلى 5" },
          { en: "6 to 15", ar: "من 6 إلى 15" },
        ],
      },
      { name: "piece", type: "textarea", wide: true, label: { en: "What are you working on right now?", ar: "ما الذي تعمل عليه الآن؟" } },
    ],
    success: { en: "You're in. Check your inbox for the link to your new studio.", ar: "تم تسجيلك. تفقّد بريدك لتجد رابط استوديوك الجديد." },
  },
};

export default content;
