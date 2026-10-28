import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'An independent studio building one strange world with fourteen playable factions. Wishlist the next build.', ar: 'استوديو مستقل يبني عالمًا غريبًا واحدًا بأربعة عشر فصيلًا قابلًا للّعب. أضف الإصدار القادم إلى قائمة أمنياتك.' },
  hero: "full",
  secondary: { en: "Open the archive", ar: "افتح الأرشيف" },
  sections: [
    {
      kind: "gallery",
      layout: "archive",
      id: "characters",
      nav: { en: "Characters", ar: "الشخصيات" },
      title: { en: "Pick a faction before the ash settles", ar: "اختر فصيلك قبل أن يهدأ الرماد" },
      lede: {
        en: "Fourteen factions live in the Cinder Basin. These are the ones players ask about first.",
        ar: "أربعة عشر فصيلًا تعيش في حوض الجمرة. هذه أول ما يسأل عنه اللاعبون.",
      },
      items: [
        {
          title: { en: "The Lamplit Wardens", ar: "حرّاس المصباح" },
          note: { en: "Tunnel guards who trade silence for safe passage.", ar: "حرس أنفاق يبيعون الصمت مقابل عبور آمن." },
          tags: [{ en: "Stealth", ar: "تسلل" }, { en: "Support", ar: "دعم" }],
          still: 0,
          facts: [
            { k: { en: "Origin", ar: "الأصل" }, v: { en: "Lower Vents", ar: "الفتحات السفلى" } },
            { k: { en: "Weapon", ar: "السلاح" }, v: { en: "Shuttered lantern", ar: "فانوس مغلق" } },
            { k: { en: "Weakness", ar: "نقطة الضعف" }, v: { en: "Open flame", ar: "اللهب المكشوف" } },
          ],
        },
        {
          title: { en: "Ma Ketterick's Salvage Crew", ar: "طاقم خردة أم كيتريك" },
          note: { en: "Scrap haulers who rebuild anything, mostly in the wrong order.", ar: "ناقلو خردة يعيدون بناء أي شيء، وغالبًا بترتيب خاطئ." },
          tags: [{ en: "Builder", ar: "بنّاء" }, { en: "Chaotic", ar: "فوضوي" }],
          still: 1,
          facts: [
            { k: { en: "Origin", ar: "الأصل" }, v: { en: "The Slag Market", ar: "سوق الخبث" } },
            { k: { en: "Weapon", ar: "السلاح" }, v: { en: "Bolt-cannon", ar: "مدفع براغٍ" } },
            { k: { en: "Weakness", ar: "نقطة الضعف" }, v: { en: "Rust", ar: "الصدأ" } },
          ],
        },
        {
          title: { en: "The Quiet Choir", ar: "الجوقة الصامتة" },
          note: { en: "Singers whose voices open doors and wake things behind them.", ar: "مغنّون تفتح أصواتهم الأبواب وتوقظ ما وراءها." },
          tags: [{ en: "Caster", ar: "ساحر" }, { en: "Risky", ar: "محفوف بالمخاطر" }],
          still: 2,
          facts: [
            { k: { en: "Origin", ar: "الأصل" }, v: { en: "Ember Cathedral", ar: "كاتدرائية الجمر" } },
            { k: { en: "Weapon", ar: "السلاح" }, v: { en: "Resonant bell", ar: "جرس رنّان" } },
            { k: { en: "Weakness", ar: "نقطة الضعف" }, v: { en: "Sudden noise", ar: "الضجيج المفاجئ" } },
          ],
        },
        {
          title: { en: "Tarn of the Hollow Road", ar: "تارن من الطريق الأجوف" },
          note: { en: "A lone courier who knows which maps are lying.", ar: "ساعٍ وحيد يعرف أي الخرائط تكذب." },
          tags: [{ en: "Scout", ar: "كشّاف" }, { en: "Fast", ar: "سريع" }],
          still: 3,
          facts: [
            { k: { en: "Origin", ar: "الأصل" }, v: { en: "Unknown", ar: "مجهول" } },
            { k: { en: "Weapon", ar: "السلاح" }, v: { en: "Hooked chain", ar: "سلسلة معقوفة" } },
            { k: { en: "Weakness", ar: "نقطة الضعف" }, v: { en: "Debts", ar: "الديون" } },
          ],
        },
        {
          title: { en: "The Glass Furnace Order", ar: "رهبنة الفرن الزجاجي" },
          note: { en: "Monks who melt the old world down and pour it into something sharper.", ar: "رهبان يصهرون العالم القديم ويسكبونه في شيء أحدّ." },
          tags: [{ en: "Tank", ar: "مدرّع" }, { en: "Fire", ar: "نار" }],
          still: 0,
          facts: [
            { k: { en: "Origin", ar: "الأصل" }, v: { en: "The Kiln Ring", ar: "حلقة الأتون" } },
            { k: { en: "Weapon", ar: "السلاح" }, v: { en: "Molten staff", ar: "عصا منصهرة" } },
            { k: { en: "Weakness", ar: "نقطة الضعف" }, v: { en: "Cold water", ar: "الماء البارد" } },
          ],
        },
      ],
    },
    {
      kind: "timeline",
      id: "archive",
      nav: { en: "The archive", ar: "الأرشيف" },
      title: { en: "Dev log and lore, in the order we found it", ar: "سجل التطوير والحكايات بترتيب اكتشافنا لها" },
      items: [
        {
          when: { en: "Build 0.4", ar: "الإصدار 0.4" },
          title: { en: "The Basin gets a floor", ar: "أخيرًا، للحوض أرضية" },
          note: { en: "The first playable room: a collapsed foundry where every door opens onto a different decade.", ar: "أول غرفة قابلة للعب: مسبك منهار يفتح كل باب فيه على عقد مختلف." },
        },
        {
          when: { en: "Build 0.6", ar: "الإصدار 0.6" },
          title: { en: "Ash starts remembering", ar: "الرماد يبدأ بالتذكّر" },
          note: { en: "Footprints now stay for a day. Lore reason: the Basin never forgets who crossed it.", ar: "صارت آثار الأقدام تبقى يومًا كاملًا. وفي الحكاية: الحوض لا ينسى من عبره." },
        },
        {
          when: { en: "Build 0.9", ar: "الإصدار 0.9" },
          title: { en: "Wardens meet the Choir", ar: "الحرّاس يلتقون بالجوقة" },
          note: { en: "Two factions with a shared secret and one locked door. Neither will say who has the key.", ar: "فصيلان يتشاركان سرًّا وبابًا مقفلًا. ولا أحد منهما يقول من يملك المفتاح." },
        },
        {
          when: { en: "Build 1.0", ar: "الإصدار 1.0" },
          title: { en: "Fourteen factions, one clock", ar: "أربعة عشر فصيلًا وساعة واحدة" },
          note: { en: "Every faction now reacts to the 03:17 event, though none of them agree on what it is.", ar: "صار كل فصيل يتفاعل مع حدث 03:17، ولا يتفقون على ماهيته." },
        },
        {
          when: { en: "Next build", ar: "الإصدار القادم" },
          title: { en: "What the Furnace Order found underneath", ar: "ما وجدته رهبنة الفرن في الأسفل" },
          note: { en: "We are not describing it. Wishlist the build and be the first down the stairs.", ar: "لن نصفه. أضف الإصدار إلى قائمة أمنياتك وكن أول من ينزل الدرج." },
        },
      ],
    },
  ],
  proof: {
    nav: { en: "Community", ar: "المجتمع" },
    title: { en: "What players keep telling us", ar: "ما يردّده اللاعبون لنا" },
    quote: {
      en: "I opened a door in the first hour, lost three hours to what was behind it, and was annoyed to find it was fair.",
      ar: "فتحت بابًا في الساعة الأولى، وضاعت ثلاث ساعات فيما وراءه، وانزعجت حين وجدت أنه عادل.",
    },
    who: { en: "Okoro_Vex, Basin Discord, level 61", ar: "Okoro_Vex، ديسكورد الحوض، المستوى 61" },
    facts: [
      { k: { en: "Playable factions", ar: "فصائل قابلة للعب" }, v: same("14") },
      { k: { en: "Wishlists", ar: "قوائم الأمنيات" }, v: same("212,400") },
      { k: { en: "Discord members", ar: "أعضاء ديسكورد" }, v: same("38,900") },
      { k: { en: "Fan-found secrets", ar: "أسرار اكتشفها المعجبون" }, v: same("1,106") },
    ],
  },
  cta: {
    title: { en: "Be there when the plot flips.", ar: "كن حاضرًا حين تنقلب الحبكة." },
    lede: {
      en: "Join the wishlist for the next build. We send one email on release day and one when the playtest keys go out.",
      ar: "انضم إلى قائمة الأمنيات للإصدار القادم. نرسل رسالة واحدة يوم الإطلاق وأخرى حين تُوزَّع مفاتيح الاختبار التجريبي.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Player name", ar: "اسم اللاعب" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      {
        name: "platform",
        type: "select",
        label: { en: "Platform", ar: "المنصة" },
        options: [{ en: "PC", ar: "الحاسوب" }, { en: "Console", ar: "جهاز الألعاب" }, { en: "Both", ar: "كلاهما" }],
      },
      {
        name: "faction",
        type: "select",
        label: { en: "Favourite faction", ar: "فصيلك المفضل" },
        options: [
          { en: "The Lamplit Wardens", ar: "حرّاس المصباح" },
          { en: "Ma Ketterick's Salvage Crew", ar: "طاقم خردة أم كيتريك" },
          { en: "The Quiet Choir", ar: "الجوقة الصامتة" },
          { en: "Tarn of the Hollow Road", ar: "تارن من الطريق الأجوف" },
          { en: "The Glass Furnace Order", ar: "رهبنة الفرن الزجاجي" },
          { en: "Still deciding", ar: "لم أقرر بعد" },
        ],
      },
      { name: "theory", type: "textarea", wide: true, label: { en: "What do you think happens at 03:17?", ar: "ماذا تظن أنه يحدث عند 03:17؟" } },
    ],
    success: { en: "You are on the list. Watch your inbox on release day, and keep your theory to yourself.", ar: "أنت على القائمة. راقب بريدك يوم الإطلاق، واحتفظ بنظريتك لنفسك." },
  },
};

export default content;
