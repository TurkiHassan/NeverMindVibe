import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'A spatial audio studio: 24 spatial mixes and 11 vinyl cuts so far, made with artists who build worlds in sound.', ar: 'استوديو صوت مكاني: 24 مزيجًا مكانيًا و11 أسطوانة فينيل حتى الآن، مع فنانين يبنون عوالم من الصوت.' },
  hero: "full",
  secondary: { en: "Hear the sessions", ar: "استمع إلى الجلسات" },
  sections: [
    {
      kind: "tracks",
      id: "sessions",
      nav: { en: "Sessions", ar: "الجلسات" },
      title: { en: "Recorded in the room, mixed around you", ar: "مسجّلة في الغرفة وممزوجة من حولك" },
      items: [
        { title: { en: "Low Tide Archive", ar: "أرشيف الجَزر" }, meta: { en: "Orla Venn · 8.4 spatial mix", ar: "أورلا فين · مزيج مكاني 8.4" }, length: "4:12" },
        { title: { en: "Glass Choir", ar: "جوقة الزجاج" }, meta: { en: "Mateo Sarr · 8.4 spatial mix", ar: "ماتيو سار · مزيج مكاني 8.4" }, length: "6:48" },
        { title: { en: "Night Bus, Line 9", ar: "حافلة الليل، خط 9" }, meta: { en: "Imke Doyle · live to tape", ar: "إمكه دويل · تسجيل حي على شريط" }, length: "3:37" },
        { title: { en: "Seven Rooms Away", ar: "على بُعد سبع غرف" }, meta: { en: "Orla Venn · binaural mix", ar: "أورلا فين · مزيج ثنائي الأذن" }, length: "5:21" },
        { title: { en: "Copper Wind", ar: "ريح نحاسية" }, meta: { en: "The Halden Trio · vinyl cut, 12 inch", ar: "ثلاثي هالدن · أسطوانة فينيل 12 بوصة" }, length: "8:03" },
        { title: { en: "Small Hours", ar: "ساعات الفجر الأولى" }, meta: { en: "Kofi Aldane · 8.4 spatial mix", ar: "كوفي ألدان · مزيج مكاني 8.4" }, length: "4:55" },
      ],
    },
    {
      kind: "specs",
      id: "room",
      nav: { en: "The room", ar: "الغرفة" },
      title: { en: "A room built to disappear", ar: "غرفة بُنيت لتختفي" },
      lede: {
        en: "Nothing in Studio One colours the sound. It is a quiet box with twelve speakers placed where your ears expect them.",
        ar: "لا شيء في الاستوديو الأول يلوّن الصوت. صندوق هادئ فيه اثنا عشر مكبّر صوت وُضعت حيث تتوقعها أذناك.",
      },
      still: 2,
      rows: [
        { k: { en: "Dimensions", ar: "الأبعاد" }, v: { en: "9.2 × 6.8 × 4.1 m", ar: "9.2 × 6.8 × 4.1 م" } },
        { k: { en: "Loudspeakers", ar: "مكبّرات الصوت" }, v: { en: "12 full-range, 2 subwoofers", ar: "12 مكبّر صوت كامل النطاق ومكبّرا صوت للترددات المنخفضة" } },
        { k: { en: "Channel format", ar: "صيغة القنوات" }, v: { en: "House format 8.4: eight at ear level and four overhead, plus the two subwoofers", ar: "صيغة الاستوديو 8.4: ثمانية عند مستوى الأذن وأربعة علوية، إضافة إلى مكبّري الترددات المنخفضة" } },
        { k: { en: "Monitoring", ar: "المراقبة" }, v: { en: "Calibrated to 79 dB per channel", ar: "معايَرة عند 79 ديسيبل لكل قناة" } },
        { k: { en: "Treatment", ar: "المعالجة الصوتية" }, v: { en: "Broadband traps, no reflective surfaces", ar: "مصائد عريضة النطاق وبلا أسطح عاكسة" } },
        { k: { en: "Tape machines", ar: "آلات الشريط" }, v: { en: "Two 24-track machines, one half-inch stereo", ar: "آلتان بـ24 مسارًا وآلة ستيريو نصف بوصة" } },
        { k: { en: "Noise floor", ar: "مستوى الضجيج" }, v: { en: "Below 18 dB, with the machines off", ar: "أقل من 18 ديسيبل والآلات متوقفة" } },
        { k: { en: "Minimum booking", ar: "أدنى مدة حجز" }, v: { en: "One day, 10:00 to 22:00", ar: "يوم واحد، من 10:00 إلى 22:00" } },
      ],
    },
  ],
  proof: {
    nav: { en: "Artists", ar: "الفنانون" },
    title: { en: "What artists hear in the room", ar: "ما يسمعه الفنانون في الغرفة" },
    quote: {
      en: "I stopped imagining the mix and started walking around it. The second night I left the headphones in the car.",
      ar: "توقفت عن تخيّل المزيج وبدأت أتجول داخله. في الليلة الثانية تركت السماعات في السيارة.",
    },
    who: { en: "Orla Venn, composer and producer", ar: "أورلا فين، مؤلفة موسيقية ومنتجة" },
    facts: [
      { k: { en: "Spatial mixes", ar: "مزيجات مكانية" }, v: same("24") },
      { k: { en: "Vinyl cuts", ar: "أسطوانات فينيل" }, v: same("11") },
      { k: { en: "Channel format", ar: "صيغة القنوات" }, v: same("8.4") },
      { k: { en: "Sessions per year", ar: "جلسات في السنة" }, v: same("60") },
    ],
  },
  cta: {
    title: { en: "Bring a sound. We will build the room around it.", ar: "أحضر صوتك ونحن نبني الغرفة حوله." },
    lede: {
      en: "Tell us what you are making and when. We reply within two days with an open date and an engineer.",
      ar: "أخبرنا بما تصنعه ومتى. نردّ خلال يومين بموعد متاح ومهندس صوت.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      { name: "date", type: "date", label: { en: "Preferred date", ar: "التاريخ المفضل" } },
      {
        name: "type",
        type: "select",
        label: { en: "Session type", ar: "نوع الجلسة" },
        options: [
          { en: "Spatial mix", ar: "مزج مكاني" },
          { en: "Recording to tape", ar: "تسجيل على شريط" },
          { en: "Vinyl mastering", ar: "ماسترينغ للفينيل" },
          { en: "Listening only", ar: "استماع فقط" },
        ],
      },
      {
        name: "project",
        type: "textarea",
        wide: true,
        label: { en: "What are you making?", ar: "ما الذي تصنعه؟" },
      },
    ],
    success: {
      en: "Received. An engineer will write back within two days with open dates.",
      ar: "وصلنا طلبك. سيكتب لك مهندس صوت خلال يومين بالمواعيد المتاحة.",
    },
  },
};

export default content;
