import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'A community movement of 48,000 people turning small local actions into something the whole city can see.', ar: 'حركة مجتمعية من 48 ألف شخص تحوّل الأفعال المحلية الصغيرة إلى شيء تراه المدينة كلها.' },
  hero: "split",
  secondary: { en: "See how to help", ar: "تعرّف على طرق المساعدة" },
  sections: [
    {
      kind: "steps",
      id: "actions",
      nav: { en: "Take action", ar: "تحرّك" },
      title: { en: "Three ways to help this week", ar: "ثلاث طرق للمساعدة هذا الأسبوع" },
      lede: {
        en: "None of them needs experience. Pick the one that fits your evening and we will handle the rest.",
        ar: "لا تحتاج أيٌّ منها إلى خبرة. اختر ما يناسب مساءك ونحن نتكفّل بالباقي.",
      },
      items: [
        {
          title: { en: "Cook a double batch for a neighbour", ar: "اطبخ حصة مضاعفة لجارك" },
          note: { en: "We match you with a household on your street that has a new baby, a hospital stay or a hard month.", ar: "نوصلك بأسرة في شارعك لديها مولود جديد أو مريض في المستشفى أو شهر عصيب." },
          time: { en: "45 minutes", ar: "45 دقيقة" },
        },
        {
          title: { en: "Staff a Saturday repair table", ar: "تطوّع على طاولة إصلاح يوم السبت" },
          note: { en: "Bring a screwdriver and patience. People bring toasters, bikes and school bags, and leave with them fixed.", ar: "أحضر مفكًّا وبعض الصبر. يأتي الناس بمحمصات ودراجات وحقائب مدرسية ويغادرون وقد أُصلحت." },
          time: { en: "2 hours", ar: "ساعتان" },
        },
        {
          title: { en: "Call five voters before the council vote", ar: "اتصل بخمسة ناخبين قبل تصويت المجلس" },
          note: { en: "We give you a short script and a list from your own district. Most calls take under three minutes.", ar: "نعطيك نصًّا قصيرًا وقائمة من حيّك. تستغرق معظم المكالمات أقل من ثلاث دقائق." },
          time: { en: "10 minutes", ar: "10 دقائق" },
        },
      ],
    },
    {
      kind: "stories",
      id: "stories",
      nav: { en: "Stories", ar: "قصص" },
      title: { en: "What happened after someone said yes", ar: "ماذا حدث بعد أن قال أحدهم نعم" },
      items: [
        {
          quote: {
            en: "I signed up to carry chairs at a food night. Eight months later I run the Thursday kitchen for sixty families.",
            ar: "سجّلت لأحمل الكراسي في أمسية طعام. وبعد ثمانية أشهر صرت أدير مطبخ الخميس لستين أسرة.",
          },
          who: { en: "Dalia Mensah", ar: "داليا مانسا" },
          role: { en: "Volunteer, Eastfield Road kitchen", ar: "متطوعة، مطبخ طريق إيستفيلد" },
          still: 0,
        },
        {
          quote: {
            en: "The landlord ignored three letters from me. Then forty of us stood in the lobby with the repair list, and the boiler was fixed in nine days.",
            ar: "تجاهل المالك ثلاث رسائل مني. ثم وقفنا أربعين شخصًا في المدخل ومعنا قائمة الإصلاحات، فأُصلح السخان في تسعة أيام.",
          },
          who: { en: "Ibrahim Salvesen", ar: "إبراهيم سالفسن" },
          role: { en: "Tenant, Barley Court", ar: "مستأجر، بارلي كورت" },
          still: 1,
        },
        {
          quote: {
            en: "My daughter and I swept the whole canal path on a Sunday. Now she knows every neighbour who walks a dog there.",
            ar: "كنست أنا وابنتي ممر القناة كله يوم الأحد. والآن تعرف كل جار يتمشى هناك مع كلبه.",
          },
          who: { en: "Priya Nandakumar", ar: "بريا نانداكومار" },
          role: { en: "Neighbour, Canal Quarter", ar: "جارة، حي القناة" },
          still: 2,
        },
      ],
    },
  ],
  proof: {
    nav: { en: "The movement", ar: "الحركة" },
    title: { en: "The people already in motion", ar: "الناس الذين بدأوا التحرّك بالفعل" },
    quote: {
      en: "Nobody asked me to change the city. They asked me to bring a ladder on Saturday. That was the easiest yes of my life.",
      ar: "لم يطلب مني أحد أن أغيّر المدينة. طلبوا مني أن أحضر سلّمًا يوم السبت. كانت أسهل «نعم» في حياتي.",
    },
    who: { en: "Tomasz Brandt, volunteer team lead", ar: "توماش براندت، قائد فريق المتطوعين" },
    facts: [
      { k: { en: "People in the movement", ar: "أشخاص في الحركة" }, v: same("48,000") },
      { k: { en: "Neighbourhood chapters", ar: "فروع الأحياء" }, v: same("212") },
      { k: { en: "Volunteer hours last year", ar: "ساعات التطوع العام الماضي" }, v: same("390,000") },
      { k: { en: "Share of income spent on programmes", ar: "حصة الدخل المنفقة على البرامج" }, v: same("91%") },
    ],
  },
  cta: {
    title: { en: "Say yes to one small thing.", ar: "قل نعم لشيء صغير واحد." },
    lede: {
      en: "Tell us where you live and how you would like to help. An organiser from your neighbourhood will call within two days.",
      ar: "أخبرنا أين تسكن وكيف تحب أن تساعد. سيتصل بك منسّق من حيّك خلال يومين.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Email", ar: "البريد الإلكتروني" } },
      { name: "neighbourhood", type: "text", label: { en: "Your neighbourhood", ar: "حيّك" } },
      {
        name: "help",
        type: "select",
        label: { en: "How you want to help", ar: "كيف تود أن تساعد" },
        options: [
          { en: "Cook or deliver meals", ar: "الطبخ أو توصيل الوجبات" },
          { en: "Fix and repair", ar: "الإصلاح والصيانة" },
          { en: "Make calls and knock on doors", ar: "الاتصال وطرق الأبواب" },
          { en: "Give a few hours a month", ar: "تخصيص ساعات كل شهر" },
        ],
      },
      { name: "why", type: "textarea", wide: true, label: { en: "Anything we should know about you?", ar: "هل من شيء تحب أن نعرفه عنك؟" } },
    ],
    success: { en: "Thank you. Someone from your neighbourhood chapter will call you within two days.", ar: "شكرًا لك. سيتصل بك أحد من فرع حيّك خلال يومين." },
  },
};

export default content;
