import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'Furniture made in small batches, built around six materials we know by touch.', ar: 'أثاث يُصنع على دفعات صغيرة، قوامه ست خامات نعرفها باللمس.' },
  hero: "stack",
  secondary: { en: "See the collection", ar: "شاهد المجموعة" },
  sections: [
    {
      kind: "gallery",
      layout: "grid",
      id: "collection",
      nav: { en: "The collection", ar: "المجموعة" },
      title: { en: "Six objects from the current batch", ar: "ست قطع من الدفعة الحالية" },
      lede: {
        en: "Each piece is made by one maker in our Porto workshop, signed underneath, and never made in a run larger than forty.",
        ar: "تُصنع كل قطعة على يد صانع واحد في ورشتنا ببورتو، وتُوقَّع من الأسفل، ولا تزيد دفعتها على أربعين قطعة.",
      },
      items: [
        {
          title: { en: "Haru Dining Chair", ar: "كرسي هارو للطعام" },
          meta: { en: "From £640 · 6 weeks", ar: "من 640 £ · 6 أسابيع" },
          note: { en: "Steam-bent ash frame with a woven paper-cord seat that tightens as it settles.", ar: "هيكل من الدردار المنحني بالبخار ومقعد من حبل ورقي منسوج يشتدّ مع الاستعمال." },
          tags: [{ en: "Ash", ar: "دردار" }, { en: "Paper cord", ar: "حبل ورقي" }],
          still: 0,
        },
        {
          title: { en: "Low Table No. 4", ar: "الطاولة المنخفضة رقم 4" },
          meta: { en: "From £1,240 · 8 weeks", ar: "من 1,240 £ · 8 أسابيع" },
          note: { en: "A thick slab of oak on a rust-patinated steel base, oiled until it feels warm.", ar: "لوح سميك من البلوط على قاعدة فولاذية بصدأ مصطنع، مدهونة بالزيت حتى تبدو دافئة." },
          tags: [{ en: "Oak", ar: "بلوط" }, { en: "Steel", ar: "فولاذ" }],
          still: 1,
        },
        {
          title: { en: "Salt Bench", ar: "مقعد الملح" },
          meta: { en: "From £980 · 7 weeks", ar: "من 980 £ · 7 أسابيع" },
          note: { en: "Two metres of solid walnut with a gently dished seat, built to sit three at a table.", ar: "متران من خشب الجوز الصلب بمقعد مقعّر برفق، يتسع لثلاثة أشخاص إلى المائدة." },
          tags: [{ en: "Walnut", ar: "جوز" }],
          still: 2,
        },
        {
          title: { en: "Dune Lounge Chair", ar: "كرسي الكثيب" },
          meta: { en: "From £2,150 · 10 weeks", ar: "من 2,150 £ · 10 أسابيع" },
          note: { en: "Deep and low, upholstered in undyed wool boucle over horsehair and coir.", ar: "عميق ومنخفض، مكسوّ بصوف بوكليه غير مصبوغ فوق حشوة من شعر الخيل وألياف جوز الهند." },
          tags: [{ en: "Wool", ar: "صوف" }, { en: "Coir", ar: "ألياف جوز الهند" }],
          still: 3,
        },
        {
          title: { en: "Kiln Stool", ar: "مقعد فرن الفخار" },
          meta: { en: "From £320 · 4 weeks", ar: "من 320 £ · 4 أسابيع" },
          note: { en: "Thrown in stoneware, glazed in iron oxide, and fired twice, so no two are the same colour.", ar: "مشكّل من الفخار الحجري ومطلي بأكسيد الحديد ومحروق مرتين، فلا يتطابق لونان منهما." },
          tags: [{ en: "Stoneware", ar: "فخار حجري" }],
          still: 1,
        },
        {
          title: { en: "Reed Sideboard", ar: "خزانة القصب" },
          meta: { en: "From £2,780 · 12 weeks", ar: "من 2,780 £ · 12 أسبوعًا" },
          note: { en: "Hand-woven rattan doors on a solid oak carcass, with brass pulls cast in Porto.", ar: "أبواب من الروطان المنسوج يدويًا على هيكل من البلوط الصلب، بمقابض من النحاس الأصفر صُبّت في بورتو." },
          tags: [{ en: "Oak", ar: "بلوط" }, { en: "Rattan", ar: "روطان" }],
          still: 0,
        },
      ],
    },
    {
      kind: "specs",
      id: "materials",
      nav: { en: "Materials", ar: "الخامات" },
      title: { en: "Six materials we know by heart", ar: "ست خامات نعرفها عن ظهر قلب" },
      lede: {
        en: "We buy from the same few suppliers every year, and we can tell you which forest, which flock and which kiln.",
        ar: "نشتري من المورّدين القلّة أنفسهم كل عام، ونستطيع أن نخبرك بأي غابة وأي قطيع وأي فرن.",
      },
      still: 2,
      rows: [
        { k: { en: "European oak", ar: "البلوط الأوروبي" }, v: { en: "Slow-grown in the Morvan, France. Hardwax oil, matte.", ar: "ينمو ببطء في مورفان بفرنسا. زيت شمعي صلب بلمسة مطفية." } },
        { k: { en: "American walnut", ar: "الجوز الأمريكي" }, v: { en: "Sawn in Pennsylvania, kiln-dried in Porto. Natural oil.", ar: "يُنشر في بنسلفانيا ويُجفَّف في بورتو. زيت طبيعي." } },
        { k: { en: "Ash", ar: "الدردار" }, v: { en: "Coppiced in Devon, steam-bent by hand. Clear satin lacquer.", ar: "يُقطع من غابة مُدارة في ديفون ويُحنى بالبخار يدويًا. ورنيش شفاف نصف لامع." } },
        { k: { en: "Undyed wool", ar: "الصوف غير المصبوغ" }, v: { en: "Spun in Biella, Italy, from one flock. Untreated.", ar: "يُغزل في بييلا بإيطاليا من قطيع واحد. دون معالجة." } },
        { k: { en: "Patinated steel", ar: "الفولاذ المُصدَّأ" }, v: { en: "Cut in Braga, rusted by hand in three days. Sealed with wax.", ar: "يُقطع في براغا ويُصدَّأ يدويًا خلال ثلاثة أيام. يُحمى بطبقة شمع." } },
        { k: { en: "Stoneware", ar: "الفخار الحجري" }, v: { en: "Dug in Aveiro, fired to 1,240 °C. Iron-oxide glaze.", ar: "يُستخرج من أفيرو ويُحرق عند 1,240 درجة مئوية. طلاء من أكسيد الحديد." } },
      ],
    },
  ],
  proof: {
    nav: { en: "In the home", ar: "في المنزل" },
    title: { en: "How they sit in a real home", ar: "كيف تبدو في بيت حقيقي" },
    quote: {
      en: "We bought the bench for the hallway. A year on, it is where everyone ends up, in every season.",
      ar: "اشترينا المقعد للممر، وبعد عام صار المكان الذي يجتمع عنده الجميع في كل فصل.",
    },
    who: { en: "Anneke Voss, Haarlem", ar: "أنيكه فوس، هارلم" },
    facts: [
      { k: { en: "Objects in the range", ar: "قطع في المجموعة" }, v: same("31") },
      { k: { en: "Largest batch", ar: "أكبر دفعة" }, v: { en: "40 pieces", ar: "40 قطعة" } },
      { k: { en: "Makers in the workshop", ar: "صنّاع في الورشة" }, v: same("9") },
      { k: { en: "Repairs", ar: "الإصلاح" }, v: { en: "Free for 20 years", ar: "مجاني لمدة 20 عامًا" } },
    ],
  },
  cta: {
    title: { en: "Tell us about the room.", ar: "حدّثنا عن الغرفة." },
    lede: {
      en: "A few lines about the space are enough. A maker will reply within two working days with pieces that fit.",
      ar: "تكفي بضعة أسطر عن المكان. سيردّ عليك أحد الصنّاع خلال يومي عمل بقطع تناسبه.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      {
        name: "room",
        type: "select",
        label: { en: "Which room?", ar: "أي غرفة؟" },
        options: [
          { en: "Living room", ar: "غرفة المعيشة" },
          { en: "Dining room", ar: "غرفة الطعام" },
          { en: "Bedroom", ar: "غرفة النوم" },
          { en: "Hallway", ar: "الممر" },
          { en: "Studio or office", ar: "استوديو أو مكتب" },
        ],
      },
      {
        name: "material",
        type: "select",
        label: { en: "Favourite material", ar: "الخامة المفضلة" },
        options: [
          { en: "Oak", ar: "بلوط" },
          { en: "Walnut", ar: "جوز" },
          { en: "Ash", ar: "دردار" },
          { en: "Wool", ar: "صوف" },
          { en: "Not sure yet", ar: "لم أحسم بعد" },
        ],
      },
      {
        name: "space",
        type: "textarea",
        wide: true,
        label: { en: "What is the room like, and who uses it?", ar: "كيف تبدو الغرفة ومن يستخدمها؟" },
      },
    ],
    submit: { en: "Write to a maker", ar: "اكتب إلى أحد الصنّاع" },
    success: {
      en: "Thank you. One of our makers will write back within two working days.",
      ar: "شكرًا لك. سيكتب لك أحد صنّاعنا خلال يومي عمل.",
    },
  },
};

export default content;
