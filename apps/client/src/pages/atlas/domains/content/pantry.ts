import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'Everyday provisions and 148 recipes with no fussy steps, so a Tuesday dinner can take twelve minutes.', ar: 'مؤن يومية و148 وصفة بلا خطوات معقّدة، فيمكن أن يصير عشاء الثلاثاء في اثنتي عشرة دقيقة.' },
  hero: "split",
  secondary: { en: "Browse recipes", ar: "تصفّح الوصفات" },
  sections: [
    {
      kind: "gallery",
      layout: "grid",
      id: "recipes",
      nav: { en: "Quick recipes", ar: "وصفات سريعة" },
      title: { en: "Dinner in 35 minutes or less, one pan at most", ar: "عشاء في 35 دقيقة أو أقل، بمقلاة واحدة على الأكثر" },
      lede: {
        en: "Every recipe uses what a stocked pantry already holds, plus one fresh thing from the shop on the way home.",
        ar: "كل وصفة تعتمد على ما في مؤونة عامرة، مع مكوّن طازج واحد من المتجر في طريق العودة.",
      },
      items: [
        {
          title: { en: "Charred Tomato and Butter Bean Stew", ar: "يخنة الطماطم المشوية والفاصولياء البيضاء" },
          meta: { en: "20 min · serves 4", ar: "20 دقيقة · تكفي 4 أشخاص" },
          note: { en: "Blistered tomatoes, a tin of beans and a spoon of harissa, finished with torn bread to soak it up.", ar: "طماطم محمّرة وعلبة فاصولياء وملعقة هريسة، وتُقدَّم مع خبز ممزّق يتشرب المرق." },
          tags: [{ en: "Vegetarian", ar: "نباتي" }, { en: "One pan", ar: "مقلاة واحدة" }],
          still: 0,
        },
        {
          title: { en: "Lemon Chickpea Rice", ar: "أرز الحمص بالليمون" },
          meta: { en: "25 min · serves 4", ar: "25 دقيقة · تكفي 4 أشخاص" },
          note: { en: "Rice toasted in olive oil, chickpeas, preserved lemon and a handful of parsley.", ar: "أرز محمّص بزيت الزيتون مع الحمص والليمون المخلل وحفنة بقدونس." },
          tags: [{ en: "Vegan", ar: "نباتي صرف" }, { en: "Pantry only", ar: "من المؤونة فقط" }],
          still: 1,
        },
        {
          title: { en: "Sardine Toast with Fennel", ar: "توست السردين بالشمر" },
          meta: { en: "12 min · serves 2", ar: "12 دقيقة · تكفي شخصين" },
          note: { en: "Tinned sardines on buttered sourdough, shaved fennel and a squeeze of lemon.", ar: "سردين معلّب على خبز العجين المخمّر المدهون بالزبدة، مع شمر مشرّح وعصرة ليمون." },
          tags: [{ en: "No cook", ar: "بلا طهي" }, { en: "Fish", ar: "سمك" }],
          still: 2,
        },
        {
          title: { en: "Garlic Chilli Spaghetti", ar: "سباغيتي بالثوم والفلفل الحار" },
          meta: { en: "15 min · serves 4", ar: "15 دقيقة · تكفي 4 أشخاص" },
          note: { en: "Slow-fried garlic, chilli flakes and pasta water whisked into a glossy sauce.", ar: "ثوم مقلي ببطء وفلفل حار مجروش، وماء المعكرونة يُخفق معه ليصير صلصة لامعة." },
          tags: [{ en: "Vegetarian", ar: "نباتي" }, { en: "15 min or less", ar: "15 دقيقة أو أقل" }],
          still: 3,
        },
        {
          title: { en: "Sheet-Pan Harissa Chicken", ar: "دجاج بالهريسة في صينية واحدة" },
          meta: { en: "35 min · serves 4", ar: "35 دقيقة · تكفي 4 أشخاص" },
          note: { en: "Thighs, red onion and carrots roasted together, with yoghurt and mint spooned over.", ar: "أفخاذ دجاج وبصل أحمر وجزر تُشوى معًا، ويُضاف فوقها الزبادي والنعناع." },
          tags: [{ en: "One pan", ar: "صينية واحدة" }, { en: "Family", ar: "عائلي" }],
          still: 0,
        },
        {
          title: { en: "Spiced Lentil Soup", ar: "شوربة العدس بالتوابل" },
          meta: { en: "30 min · serves 6", ar: "30 دقيقة · تكفي 6 أشخاص" },
          note: { en: "Red lentils, cumin and a little tomato paste, blitzed smooth and finished with brown butter.", ar: "عدس أحمر وكمّون وقليل من معجون الطماطم، يُهرس حتى النعومة ويُنهى بزبدة محمّرة." },
          tags: [{ en: "Vegetarian", ar: "نباتي" }, { en: "Freezes well", ar: "يُجمَّد جيدًا" }],
          still: 1,
        },
      ],
    },
    {
      kind: "stories",
      id: "ingredients",
      nav: { en: "Ingredient stories", ar: "قصص المكونات" },
      title: { en: "Who grew it, who pressed it, who packed it", ar: "من زرعه ومن عصره ومن عبّأه" },
      items: [
        {
          quote: {
            en: "We press within six hours of picking. After that the oil starts to lose its green bite, and the green bite is the whole point.",
            ar: "نعصر الزيتون خلال ست ساعات من قطافه. بعدها يبدأ الزيت يفقد حدّته الخضراء، وهذه الحدّة هي الغاية كلها.",
          },
          who: { en: "Eleni Markou", ar: "إيليني ماركو" },
          role: { en: "Olive grower, Messinia, Greece", ar: "مزارعة زيتون، ميسينيا، اليونان" },
          still: 0,
        },
        {
          quote: {
            en: "My grandmother dried tomatoes on this roof every August. We still use it, with the same tomatoes and a better tarp.",
            ar: "كانت جدتي تجفف الطماطم على هذا السطح كل أغسطس. ما زلنا نستخدمه، والطماطم نفسها، لكن بغطاء أفضل.",
          },
          who: { en: "Salvatore Greco", ar: "سالفاتوري غريكو" },
          role: { en: "Tomato drier, Pachino, Sicily", ar: "منتج طماطم مجففة، باتشينو، صقلية" },
          still: 1,
        },
        {
          quote: {
            en: "Good tinned fish is a cooked fish. We pack by hand the same day, and the oil in the tin is part of the recipe.",
            ar: "السمك المعلّب الجيد هو سمك مطبوخ. نعبّئه يدويًا في اليوم نفسه، والزيت داخل العلبة جزء من الوصفة.",
          },
          who: { en: "Ana Ribeiro", ar: "آنا ريبيرو" },
          role: { en: "Cannery owner, Setúbal, Portugal", ar: "صاحبة مصنع تعليب، سيتوبال، البرتغال" },
          still: 2,
        },
      ],
    },
  ],
  proof: {
    nav: { en: "Home cooks", ar: "من البيوت" },
    title: { en: "What home cooks say", ar: "ما يقوله من يطبخون في بيوتهم" },
    quote: {
      en: "Tuesday used to mean cereal for dinner. Now it means a tin, a pan and twelve minutes, and the kids ask for seconds.",
      ar: "كان الثلاثاء يعني حبوب الإفطار على العشاء. اليوم هو علبة ومقلاة واثنتا عشرة دقيقة، والأولاد يطلبون المزيد.",
    },
    who: { en: "Priya Nair, mother of three, Leeds", ar: "بريا ناير، أم لثلاثة أطفال، ليدز" },
    facts: [
      { k: { en: "Recipes", ar: "وصفات" }, v: same("148") },
      { k: { en: "Fussy steps", ar: "خطوات معقّدة" }, v: same("0") },
      { k: { en: "Quickest dinner", ar: "أسرع عشاء" }, v: { en: "12 min", ar: "12 دقيقة" } },
      { k: { en: "Producers we buy from", ar: "منتجون نشتري منهم" }, v: same("63") },
    ],
  },
  cta: {
    title: { en: "Stock the good stuff.", ar: "خزّن الأفضل." },
    lede: {
      en: "Tell us how many you cook for and what you avoid. We will send a first box of staples and five recipes that use them.",
      ar: "أخبرنا لكم شخصًا تطبخ وما الذي تتجنّبه. سنرسل لك أول صندوق من الأساسيات مع خمس وصفات تستخدمها.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      {
        name: "household",
        type: "select",
        label: { en: "Who are you cooking for?", ar: "لكم شخصًا تطبخ؟" },
        options: [
          { en: "Just me", ar: "لي وحدي" },
          { en: "Two", ar: "لشخصين" },
          { en: "3 to 4", ar: "من 3 إلى 4" },
          { en: "5 or more", ar: "5 أشخاص أو أكثر" },
        ],
      },
      {
        name: "diet",
        type: "select",
        label: { en: "Any preferences?", ar: "هل لديك تفضيلات؟" },
        options: [
          { en: "I eat everything", ar: "آكل كل شيء" },
          { en: "Vegetarian", ar: "نباتي" },
          { en: "Vegan", ar: "نباتي صرف" },
          { en: "No gluten", ar: "بلا غلوتين" },
          { en: "No nuts", ar: "بلا مكسرات" },
        ],
      },
      { name: "notes", type: "textarea", wide: true, label: { en: "What does a hard weeknight look like?", ar: "كيف تبدو ليلة صعبة في منتصف الأسبوع عندك؟" } },
    ],
    success: { en: "Thank you. Your first box is being packed and five recipes are on their way to your inbox.", ar: "شكرًا لك. نجهّز صندوقك الأول، وخمس وصفات في طريقها إلى بريدك." },
  },
};

export default content;
