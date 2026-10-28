import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'A slow-travel club: forty-two routes, eight local hosts, and more texture than itinerary.', ar: 'نادٍ للسفر البطيء: اثنان وأربعون مسارًا وثمانية مضيفين محليين، وملمسًا أكثر من جدول رحلة.' },
  hero: "split",
  secondary: { en: "See the journeys", ar: "شاهد الرحلات" },
  sections: [
    {
      kind: "gallery",
      layout: "rail",
      id: "journeys",
      nav: { en: "Journeys", ar: "الرحلات" },
      title: { en: "Slow routes, small groups, no rush", ar: "مسارات بطيئة ومجموعات صغيرة بلا استعجال" },
      lede: {
        en: "Each journey changes base only every few days, with a local host who lives there and a day left empty on purpose.",
        ar: "لكل رحلة مقرّ واحد كل بضعة أيام، ومضيف محلي يسكن المكان، ويومٌ يُترك فارغًا عمدًا.",
      },
      items: [
        {
          title: { en: "Salt Roads of the Algarve", ar: "دروب الملح في الغارف البرتغالية" },
          meta: { en: "9 days · September · 8 guests", ar: "9 أيام · سبتمبر · 8 ضيوف" },
          note: { en: "Walk between salt pans and fishing villages, then sleep in a family-run quinta above the estuary.", ar: "امشِ بين ملاحات الملح وقرى الصيد، ثم نَم في مزرعة عائلية تطل على المصب." },
          tags: [{ en: "Coastal", ar: "ساحلي" }, { en: "Walking", ar: "مشي" }],
          still: 0,
        },
        {
          title: { en: "Tea Terraces of Rize", ar: "مدرجات الشاي في ريزه" },
          meta: { en: "7 days · May · 6 guests", ar: "7 أيام · مايو · 6 ضيوف" },
          note: { en: "Stay with two harvesting families on the Black Sea slopes and learn why the first flush is picked by hand.", ar: "أقم عند أسرتين تقطفان الشاي على سفوح البحر الأسود، وتعرّف لماذا يُقطف الحصاد الأول باليد." },
          tags: [{ en: "Mountain", ar: "جبلي" }, { en: "Food", ar: "طعام" }],
          still: 1,
        },
        {
          title: { en: "Sleeper Train to Lofoten", ar: "قطار النوم إلى لوفوتن" },
          meta: { en: "11 days · February · 10 guests", ar: "11 يومًا · فبراير · 10 ضيوف" },
          note: { en: "Rail north from Oslo, then a fishing boat between islands, chasing the green light without a schedule.", ar: "بالقطار شمالًا من أوسلو ثم بقارب صيد بين الجزر، نطارد الضوء الأخضر بلا جدول." },
          tags: [{ en: "Rail", ar: "قطار" }, { en: "Winter", ar: "شتاء" }],
          still: 2,
        },
        {
          title: { en: "Date Groves and Dune Camps of Al Ahsa", ar: "نخيل وكثبان الأحساء" },
          meta: { en: "5 days · November · 8 guests", ar: "5 أيام · نوفمبر · 8 ضيوف" },
          note: { en: "Spring-fed oases by day, a quiet dune camp by night, and breakfast with the family who tends the palms.", ar: "واحات تسقيها العيون نهارًا، ومخيم هادئ بين الكثبان ليلًا، وفطور مع الأسرة التي تعتني بالنخيل." },
          tags: [{ en: "Desert", ar: "صحراء" }, { en: "Culture", ar: "ثقافة" }],
          still: 3,
        },
        {
          title: { en: "Lake and Monasteries of Ohrid", ar: "بحيرة وأديرة أوهريد" },
          meta: { en: "8 days · June · 8 guests", ar: "8 أيام · يونيو · 8 ضيوف" },
          note: { en: "Swim before breakfast, hike to hillside churches after, and spend evenings with a woodcarver who still takes apprentices.", ar: "سباحة قبل الفطور، وصعود مشيًا إلى كنائس التلال بعده، وأمسيات عند نحّات خشب ما زال يقبل المتدربين." },
          tags: [{ en: "Lakeside", ar: "بحيري" }, { en: "Slow hikes", ar: "مشي هادئ" }],
          still: 0,
        },
      ],
    },
    {
      kind: "gallery",
      layout: "rows",
      id: "field-guide",
      nav: { en: "Field guide", ar: "دليل الميدان" },
      title: { en: "What our hosts tell you before you land", ar: "ما يخبرك به مضيفونا قبل أن تصل" },
      lede: {
        en: "Short notes from the people who live along our routes. They are the reason the days feel unplanned.",
        ar: "ملاحظات قصيرة ممن يسكنون على مساراتنا، وهم سبب أن تبدو الأيام غير مخطَّطة.",
      },
      items: [
        {
          title: { en: "Eat where the ferry crews eat", ar: "كل حيث يأكل طاقم العبّارة" },
          meta: { en: "Local custom · Ohrid", ar: "تقليد محلي · أوهريد" },
          note: { en: "The lakeside kitchen with no menu opens at six. Ask for whatever came off the boat that morning.", ar: "المطبخ المطل على البحيرة بلا قائمة طعام يفتح في السادسة. اطلب ما وصل من القارب هذا الصباح." },
        },
        {
          title: { en: "Take the 14:10, not the 09:30", ar: "استقل قطار 14:10 لا قطار 09:30" },
          meta: { en: "Tip · Northern Norway", ar: "نصيحة · شمال النرويج" },
          note: { en: "The afternoon train has window seats on the fjord side and nobody in a hurry.", ar: "قطار العصر فيه مقاعد نافذة على جهة الفيورد، ولا أحد فيه مستعجل." },
        },
        {
          title: { en: "Leave the ridge before sunset", ar: "اترك التلة قبل الغروب" },
          meta: { en: "Place · Rize hills", ar: "مكان · تلال ريزه" },
          note: { en: "The best light is on the walk down, when the pickers head home and the valley smells of woodsmoke.", ar: "أجمل ضوء يكون أثناء النزول حين يعود القطّافون وتفوح من الوادي رائحة الحطب." },
        },
        {
          title: { en: "Bring something small from home", ar: "احمل شيئًا صغيرًا من بلدك" },
          meta: { en: "Local custom · Everywhere", ar: "تقليد محلي · في كل مكان" },
          note: { en: "A tin of your local tea or a postcard of your street. Every host asks, and every host remembers.", ar: "علبة شاي من بلدك أو بطاقة لشارعك. كل مضيف يسأل، وكل مضيف يتذكر." },
        },
      ],
    },
  ],
  proof: {
    nav: { en: "Journal", ar: "المجلة" },
    title: { en: "Notes from the road", ar: "ملاحظات من الطريق" },
    quote: {
      en: "On day four I stopped checking my phone. On day six I knew the baker's name, and I still write to her.",
      ar: "في اليوم الرابع توقفت عن تفقّد هاتفي. وفي السادس عرفت اسم الخبّازة، وما زلت أراسلها.",
    },
    who: { en: "Marta Weiss, guest on Salt Roads of the Algarve", ar: "مارتا فايس، ضيفة في دروب الملح" },
    facts: [
      { k: { en: "Slow routes", ar: "مسارات بطيئة" }, v: same("42") },
      { k: { en: "Local hosts", ar: "مضيفون محليون" }, v: same("8") },
      { k: { en: "Guests per journey", ar: "ضيوف لكل رحلة" }, v: { en: "6 to 10", ar: "من 6 إلى 10" } },
      { k: { en: "Nights in one place", ar: "ليالٍ في المكان الواحد" }, v: { en: "3 on average", ar: "3 في المتوسط" } },
    ],
  },
  cta: {
    title: { en: "Tell us where you want to slow down.", ar: "أخبرنا أين تريد أن تتمهّل." },
    lede: {
      en: "Share a month and a mood. A route planner will write back within two working days with one or two journeys, not a catalogue.",
      ar: "أخبرنا بالشهر والمزاج. سيكتب لك منسّق المسارات خلال يومَي عمل برحلة أو اثنتين، لا بكتالوج كامل.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      {
        name: "month",
        type: "select",
        label: { en: "When would you like to go?", ar: "متى تودّ السفر؟" },
        options: [
          { en: "Spring", ar: "الربيع" },
          { en: "Summer", ar: "الصيف" },
          { en: "Autumn", ar: "الخريف" },
          { en: "Winter", ar: "الشتاء" },
          { en: "Flexible", ar: "لا فرق عندي" },
        ],
      },
      {
        name: "travellers",
        type: "select",
        label: { en: "Who is travelling?", ar: "من المسافرون؟" },
        options: [
          { en: "Just me", ar: "أنا فقط" },
          { en: "Two of us", ar: "نحن اثنان" },
          { en: "3 to 5 friends or family", ar: "من 3 إلى 5 أصدقاء أو أقارب" },
          { en: "A larger group", ar: "مجموعة أكبر" },
        ],
      },
      { name: "wish", type: "textarea", wide: true, label: { en: "What would make the trip worth it?", ar: "ما الذي يجعل الرحلة جديرة بالعناء؟" } },
    ],
    success: { en: "Thank you. A route planner will write to you within two working days.", ar: "شكرًا لك. سيكتب لك منسّق المسارات خلال يومَي عمل." },
  },
};

export default content;
