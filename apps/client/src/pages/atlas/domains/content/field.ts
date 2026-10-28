import type { DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'Four hundred and ten farms growing for the whole field, not only the harvest.', ar: 'أربعمئة وعشر مزارع تزرع من أجل الحقل كله لا الحصاد وحده.' },
  hero: "split",
  secondary: { en: "Read the crop stories", ar: "اقرأ قصص المحاصيل" },
  sections: [
    {
      kind: "stories",
      id: "crops",
      nav: { en: "Crop stories", ar: "قصص المحاصيل" },
      title: { en: "Growers on what the field gave back", ar: "مزارعون يروون ما ردّه عليهم الحقل" },
      lede: {
        en: "Three farms in their own words, after two or more crop cycles on our rotation plan.",
        ar: "ثلاث مزارع بلسان أصحابها، بعد دورتين محصوليتين أو أكثر على خطة التناوب لدينا.",
      },
      items: [
        {
          quote: {
            en: "We undersowed our oats with clover and stopped buying nitrogen by year three. The hedgerows filled with partridge, which I had not seen since I was a boy.",
            ar: "زرعنا البرسيم مع الشوفان وتوقفنا عن شراء النيتروجين في السنة الثالثة. وامتلأت الأسيجة بطيور الحجل التي لم أرها منذ كنت صبيًّا.",
          },
          who: { en: "Hana Petrov", ar: "هانا بيتروف" },
          role: { en: "Oat and clover grower, 140 acres", ar: "مزارعة شوفان وبرسيم، 140 فدانًا" },
          still: 0,
        },
        {
          quote: {
            en: "The margins around my sunflowers hum all July. My yield did not drop, and the honey from my neighbour's hives is now on my label.",
            ar: "تطنّ حواف حقل دوار الشمس عندي طوال يوليو. لم ينخفض محصولي، وصار عسل خلايا جاري على ملصق منتجي.",
          },
          who: { en: "Mateus Okonkwo", ar: "ماتيوس أوكونكو" },
          role: { en: "Sunflower and bean grower, 85 acres", ar: "مزارع دوار الشمس والفول، 85 فدانًا" },
          still: 1,
        },
        {
          quote: {
            en: "A cover rye after harvest kept the topsoil on the slope through a wet winter. I had lost a trailer load of it every year before.",
            ar: "حافظ محصول الجاودار الغطائي بعد الحصاد على التربة السطحية في المنحدر طوال شتاء ماطر. كنت أفقد حمولة مقطورة منها كل عام قبل ذلك.",
          },
          who: { en: "Elif Danielsson", ar: "إليف دانيلسون" },
          role: { en: "Barley and potato grower, 220 acres", ar: "مزارعة شعير وبطاطس، 220 فدانًا" },
          still: 2,
        },
      ],
    },
    {
      kind: "calendar",
      id: "seasons",
      nav: { en: "Seasonal notes", ar: "ملاحظات الموسم" },
      title: { en: "What goes in the ground, and when", ar: "ما يُزرع في الأرض ومتى" },
      lede: {
        en: "A typical year on a Field rotation, from sowing to harvest, with the habitat note we ask growers to keep.",
        ar: "سنة نموذجية على تناوب حقل، من البذر إلى الحصاد، مع ملاحظة الموئل التي نطلب من المزارعين تدوينها.",
      },
      months: [
        { en: "Jan", ar: "يناير" },
        { en: "Feb", ar: "فبراير" },
        { en: "Mar", ar: "مارس" },
        { en: "Apr", ar: "أبريل" },
        { en: "May", ar: "مايو" },
        { en: "Jun", ar: "يونيو" },
        { en: "Jul", ar: "يوليو" },
        { en: "Aug", ar: "أغسطس" },
        { en: "Sep", ar: "سبتمبر" },
        { en: "Oct", ar: "أكتوبر" },
        { en: "Nov", ar: "نوفمبر" },
        { en: "Dec", ar: "ديسمبر" },
      ],
      rows: [
        { label: { en: "Faba beans", ar: "فول الحقل" }, from: 2, to: 8, note: { en: "Sown into cold soil; leave the headlands uncut for ground-nesting bees.", ar: "يُبذر في تربة باردة؛ اترك أطراف الحقل دون حصاد للنحل الأرضي." } },
        { label: { en: "Spring oats", ar: "شوفان الربيع" }, from: 3, to: 8, note: { en: "Undersown with clover so the next crop starts before this one ends.", ar: "يُبذر معه البرسيم ليبدأ المحصول التالي قبل أن ينتهي هذا." } },
        { label: { en: "Clover ley", ar: "مرج البرسيم" }, from: 4, to: 10, note: { en: "Cut once in July, never at night when the hares are out.", ar: "يُقص مرة واحدة في يوليو، وليس ليلًا حين تخرج الأرانب البرية." } },
        { label: { en: "Sunflowers", ar: "دوار الشمس" }, from: 4, to: 9, note: { en: "Wide rows and a flowering strip along every edge.", ar: "صفوف متباعدة وشريط أزهار على كل حافة." } },
        { label: { en: "Cover rye", ar: "الجاودار الغطائي" }, from: 8, to: 12, note: { en: "Drilled straight after harvest and left standing through winter to hold the slope.", ar: "يُبذر مباشرة بعد الحصاد ويبقى قائمًا طوال الشتاء ليثبّت التربة في المنحدر." } },
      ],
    },
  ],
  proof: {
    nav: { en: "The system", ar: "النظام" },
    title: { en: "What the rotation adds up to", ar: "ما يُسفر عنه التناوب" },
    quote: {
      en: "Field never told me to farm less. It told me to look at the whole farm, and the numbers followed.",
      ar: "لم يطلب مني حقل أن أزرع أقل. طلب أن أنظر إلى المزرعة كلها، وجاءت الأرقام بعد ذلك.",
    },
    who: { en: "Jonas Whitcombe, farm manager, Ashby Mill", ar: "يوناس ويتكومب، مدير مزرعة، أشبي ميل" },
    facts: [
      { k: { en: "Farms in the network", ar: "مزارع في الشبكة" }, v: { en: "410", ar: "410" } },
      { k: { en: "Crop cycles recorded", ar: "دورات محصولية مسجلة" }, v: { en: "18", ar: "18" } },
      { k: { en: "Habitat per acre", ar: "الموئل لكل فدان" }, v: { en: "4.7× more", ar: "4.7 أضعاف" } },
      { k: { en: "Bought nitrogen, average", ar: "متوسط النيتروجين المشترى" }, v: { en: "down 38%", ar: "أقل بنسبة 38%" } },
    ],
  },
  cta: {
    title: { en: "Walk the field with us.", ar: "امشِ في الحقل معنا." },
    lede: {
      en: "Tell us about your land. An agronomist will visit in the next growing season, at no charge, and draw up a first rotation.",
      ar: "حدّثنا عن أرضك. سيزورك مهندس زراعي في موسم الزراعة القادم دون مقابل، ويرسم لك أول خطة تناوب.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      {
        name: "size",
        type: "select",
        label: { en: "Farm size", ar: "مساحة المزرعة" },
        options: [
          { en: "Under 50 acres", ar: "أقل من 50 فدانًا" },
          { en: "50 to 199 acres", ar: "من 50 إلى 199 فدانًا" },
          { en: "200 to 999 acres", ar: "من 200 إلى 999 فدانًا" },
          { en: "1,000 acres or more", ar: "1,000 فدان أو أكثر" },
        ],
      },
      {
        name: "crop",
        type: "select",
        label: { en: "Main crop", ar: "المحصول الرئيس" },
        options: [
          { en: "Cereals", ar: "الحبوب" },
          { en: "Pulses and beans", ar: "البقوليات والفول" },
          { en: "Oilseeds", ar: "البذور الزيتية" },
          { en: "Vegetables and potatoes", ar: "الخضار والبطاطس" },
          { en: "Mixed", ar: "مختلط" },
        ],
      },
      { name: "land", type: "textarea", wide: true, label: { en: "What is the hardest part of your land right now?", ar: "ما أصعب ما في أرضك الآن؟" } },
    ],
    success: { en: "Thank you. An agronomist will call to book a visit before the next sowing.", ar: "شكرًا لك. سيتصل بك مهندس زراعي لتحديد موعد زيارة قبل البذر القادم." },
  },
};

export default content;
