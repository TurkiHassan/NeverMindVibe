import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'Nine rooms by the sea, kept slow on purpose: a refuge rather than a hotel.', ar: 'تسع غرف قرب البحر، بإيقاع بطيء مقصود: ملاذ لا فندق.' },
  hero: "full",
  secondary: { en: "See the rooms", ar: "شاهد الغرف" },
  sections: [
    {
      kind: "gallery",
      layout: "rail",
      id: "rooms",
      nav: { en: "The rooms", ar: "الغرف" },
      title: { en: "Nine rooms, each with its own weather", ar: "تسع غرف، لكل منها طقسها" },
      lede: {
        en: "Four of them below. All are warmed by wood or a hot stone, and none has a television.",
        ar: "أربع منها أدناه. تُدفَّأ كلها بالخشب أو بحجر ساخن، ولا تلفاز في أي منها.",
      },
      items: [
        {
          title: { en: "The Lookout", ar: "المطلّ" },
          meta: { en: "Sleeps 2 · from £210 a night", ar: "تتسع لشخصين · من 210 جنيهات إسترلينية للّيلة" },
          note: { en: "Under the eaves, with a window seat that faces the harbour wall and the first boats.", ar: "تحت السقف المائل، بمقعد عند النافذة يطل على سور الميناء وأولى القوارب." },
          tags: [{ en: "Sea view", ar: "إطلالة بحرية" }, { en: "Wood stove", ar: "موقد خشب" }],
          still: 0,
        },
        {
          title: { en: "The Salt Room", ar: "غرفة الملح" },
          meta: { en: "Sleeps 2 · from £175 a night", ar: "تتسع لشخصين · من 175 جنيهًا إسترلينيًا للّيلة" },
          note: { en: "A low bed, limewashed walls and a bath deep enough to read in.", ar: "سرير منخفض وجدران مطلية بالكلس وحوض استحمام عميق يكفي للقراءة فيه." },
          tags: [{ en: "Soaking tub", ar: "حوض عميق" }],
          still: 1,
        },
        {
          title: { en: "The Net Loft", ar: "علّية الشباك" },
          meta: { en: "Sleeps 4 · from £290 a night", ar: "تتسع لأربعة · من 290 جنيهًا إسترلينيًا للّيلة" },
          note: { en: "The old fishing loft, with two beds up a ladder and a long table below for supper.", ar: "علّية الصيد القديمة، بسريرين في الأعلى عبر سلّم وطاولة طويلة في الأسفل للعشاء." },
          tags: [{ en: "Family", ar: "عائلية" }, { en: "Long table", ar: "طاولة طويلة" }],
          still: 2,
        },
        {
          title: { en: "The Garden Cell", ar: "خلوة الحديقة" },
          meta: { en: "Sleeps 1 · from £120 a night", ar: "تتسع لشخص · من 120 جنيهًا إسترلينيًا للّيلة" },
          note: { en: "A small room for one, opening onto the herb beds and the morning bread smell.", ar: "غرفة صغيرة لشخص واحد، تفتح على أحواض الأعشاب ورائحة خبز الصباح." },
          tags: [{ en: "Garden", ar: "حديقة" }, { en: "Quiet", ar: "هادئة" }],
          still: 3,
        },
      ],
    },
    {
      kind: "timeline",
      id: "ritual",
      nav: { en: "The ritual", ar: "الطقوس" },
      title: { en: "A day at the house, unhurried", ar: "يوم في البيت، بلا استعجال" },
      lede: {
        en: "Nothing here is compulsory. This is simply how the house tends to move.",
        ar: "لا شيء هنا إلزامي. هذا فقط ما اعتاد البيت أن يسير عليه.",
      },
      items: [
        {
          when: same("07:30"),
          title: { en: "Bread and a kettle at your door", ar: "خبز وإبريق شاي عند بابك" },
          note: { en: "A tray appears on the landing with warm rolls from the village oven and a pot of tea.", ar: "تظهر صينية عند البسطة فيها خبز دافئ من فرن القرية وإبريق شاي." },
        },
        {
          when: same("10:00"),
          title: { en: "The tide table on the kitchen wall", ar: "جدول المدّ والجزر على جدار المطبخ" },
          note: { en: "Chalked each morning, with the best hour for the beach and the safe path home.", ar: "يُكتب بالطباشير كل صباح مع أفضل ساعة للشاطئ والطريق الآمن للعودة." },
        },
        {
          when: same("13:00"),
          title: { en: "Lunch from the honesty shelf", ar: "غداء من رف الأمانة" },
          note: { en: "Soup, cheese and pickles in jars. Leave what you think is fair in the tin.", ar: "حساء وجبن ومخللات في برطمانات. ضع في العلبة ما تراه مناسبًا." },
        },
        {
          when: same("18:30"),
          title: { en: "Stoves lit, lamps low", ar: "إشعال المواقد وخفض المصابيح" },
          note: { en: "Wood is stacked and the stoves are lit by dusk. Candles replace the overhead lights.", ar: "الحطب مرصوص والمواقد مشتعلة عند الغسق. وتحل الشموع محل أضواء السقف." },
        },
        {
          when: same("21:00"),
          title: { en: "One supper, one table", ar: "عشاء واحد على طاولة واحدة" },
          note: { en: "A single set menu for whoever is staying, served at the long table in the kitchen.", ar: "قائمة ثابتة واحدة لمن يقيمون في البيت، تُقدَّم على طاولة المطبخ الطويلة." },
        },
      ],
    },
  ],
  proof: {
    nav: { en: "Guest book", ar: "دفتر الضيوف" },
    title: { en: "From the guest book", ar: "من دفتر الضيوف" },
    quote: {
      en: "We came for a weekend and slept nine hours the first night. The sound of the sea did what the doctor could not.",
      ar: "جئنا لعطلة نهاية أسبوع ونمنا تسع ساعات في الليلة الأولى. فعل صوت البحر ما عجز عنه الطبيب.",
    },
    who: { en: "Hannah and Rowan Pike, stayed in The Salt Room, November", ar: "هانا وروان بايك، أقاما في غرفة الملح، نوفمبر" },
    facts: [
      { k: { en: "Rooms", ar: "الغرف" }, v: same("9") },
      { k: { en: "Steps to the sea", ar: "خطوات إلى البحر" }, v: same("27") },
      { k: { en: "Check-in", ar: "الوصول" }, v: { en: "From 4 pm", ar: "من الرابعة عصرًا" } },
      { k: { en: "Nearest station", ar: "أقرب محطة" }, v: { en: "20 minutes by car", ar: "20 دقيقة بالسيارة" } },
    ],
  },
  cta: {
    title: { en: "Tell us when you would like to arrive.", ar: "أخبرنا متى تودّ الوصول." },
    lede: {
      en: "We keep the house small on purpose. Send your dates and we will write back within a day.",
      ar: "نُبقي البيت صغيرًا عمدًا. أرسل تواريخك وسنرد عليك خلال يوم.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      { name: "arrival", type: "date", label: { en: "Arrival date", ar: "تاريخ الوصول" } },
      {
        name: "nights",
        type: "select",
        label: { en: "Nights", ar: "عدد الليالي" },
        options: [
          { en: "2 nights", ar: "ليلتان" },
          { en: "3 nights", ar: "3 ليالٍ" },
          { en: "4 to 6 nights", ar: "من 4 إلى 6 ليالٍ" },
          { en: "A week or more", ar: "أسبوع أو أكثر" },
        ],
      },
      {
        name: "guests",
        type: "select",
        label: { en: "Guests", ar: "عدد الضيوف" },
        options: [
          { en: "1 guest", ar: "ضيف واحد" },
          { en: "2 guests", ar: "ضيفان" },
          { en: "3 to 4 guests", ar: "من 3 إلى 4 ضيوف" },
        ],
      },
      { name: "note", type: "textarea", wide: true, label: { en: "Anything we should know? A birthday, an early train, a dog.", ar: "هل من شيء نعرفه؟ عيد ميلاد، قطار مبكر، أو كلب." } },
    ],
    success: { en: "Thank you. We have your dates and will write back within a day.", ar: "شكرًا لك. وصلتنا تواريخك وسنرد عليك خلال يوم." },
  },
};

export default content;
