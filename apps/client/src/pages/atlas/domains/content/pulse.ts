import { same, type DomainContent } from "../types";

const content: DomainContent = {
  lede: { en: 'Care journeys that keep people on their plan and give clinicians the full picture in four minutes.', ar: 'رحلات رعاية تُبقي الناس على خطتهم وتمنح الممارسين الصورة الكاملة في أربع دقائق.' },
  hero: "split",
  secondary: { en: "See how it works", ar: "شاهد كيف يعمل" },
  sections: [
    {
      kind: "switch",
      id: "care-paths",
      nav: { en: "For people", ar: "للأفراد" },
      title: { en: "One care plan, two ways to read it", ar: "خطة رعاية واحدة، وطريقتان لقراءتها" },
      lede: {
        en: "The person sees what to do today. The clinician sees what has changed since the last visit. Both are looking at the same plan.",
        ar: "يرى الفرد ما عليه فعله اليوم، ويرى الممارس الصحي ما تغيّر منذ الزيارة الأخيرة. وكلاهما ينظر إلى الخطة نفسها.",
      },
      options: [
        {
          label: { en: "People", ar: "الأفراد" },
          title: { en: "A plan that fits around your day", ar: "خطة تتكيّف مع يومك" },
          body: {
            en: "Medication, exercise and appointments arrive as a short list each morning, in your language, at the times you actually have.",
            ar: "يصلك الدواء والتمارين والمواعيد في قائمة قصيرة كل صباح، بلغتك، وفي الأوقات التي تناسبك فعلًا.",
          },
          points: [
            { en: "Reminders that move when you reschedule", ar: "تذكيرات تتحرك حين تغيّر موعدك" },
            { en: "Book, move or cancel a visit in two taps", ar: "احجز موعدًا أو انقله أو ألغِه بنقرتين" },
            { en: "Share your readings with family you choose", ar: "شارك قراءاتك مع أفراد من العائلة تختارهم" },
            { en: "Ask a nurse a question and hear back the same day", ar: "اسأل ممرضة سؤالًا واحصل على ردّ في اليوم نفسه" },
          ],
        },
        {
          label: { en: "Clinicians", ar: "الممارسون الصحيون" },
          title: { en: "The changes, before the consultation", ar: "التغيّرات قبل الاستشارة" },
          body: {
            en: "Each patient's readings, missed doses and messages are summarised into three lines, ordered by who needs you first.",
            ar: "تُلخَّص قراءات كل مريض والجرعات الفائتة والرسائل في ثلاثة أسطر، مرتبة بحسب من يحتاجك أولًا.",
          },
          points: [
            { en: "A morning list ranked by clinical risk", ar: "قائمة صباحية مرتبة بحسب الخطر السريري" },
            { en: "Notes and orders written back to the patient record", ar: "الملاحظات والطلبات تُكتب في ملف المريض" },
            { en: "Care plans built from your own protocols", ar: "خطط رعاية مبنية على بروتوكولاتك" },
          ],
        },
      ],
    },
    {
      kind: "bars",
      id: "outcomes",
      nav: { en: "Outcomes", ar: "النتائج" },
      title: { en: "What changed across 41 clinics in a year", ar: "ما تغيّر في 41 عيادة خلال عام" },
      lede: {
        en: "Measured against each clinic's own twelve months before Pulse, across 86,000 patients with a long-term condition.",
        ar: "قيس الأثر مقارنةً بالأشهر الاثني عشر السابقة لكل عيادة قبل نبض، على 86,000 مريض بحالة مزمنة.",
      },
      unit: same("%"),
      rows: [
        {
          label: { en: "Care-plan adherence", ar: "الالتزام بخطة الرعاية" },
          value: 98.4,
          max: 100,
          note: { en: "Patients who completed their plan each week, up from 71.2%.", ar: "المرضى الذين أتمّوا خطتهم أسبوعيًا، ارتفاعًا من 71.2%." },
        },
        {
          label: { en: "Fewer missed appointments", ar: "انخفاض المواعيد الفائتة" },
          value: 43,
          max: 100,
          note: { en: "Reminders that move with the patient's schedule did most of the work.", ar: "التذكيرات التي تتحرك مع جدول المريض أنجزت معظم العمل." },
        },
        {
          label: { en: "Patients reaching blood pressure goal", ar: "مرضى بلغوا هدف ضغط الدم" },
          value: 76,
          max: 100,
          note: { en: "Within six months of enrolment, up from 58%.", ar: "خلال ستة أشهر من التسجيل، ارتفاعًا من 58%." },
        },
        {
          label: { en: "Messages answered the same day", ar: "رسائل أُجيب عنها في اليوم نفسه" },
          value: 92,
          max: 100,
          note: { en: "By a nurse or pharmacist, never by an automated reply.", ar: "على يد ممرضة أو صيدلي، لا بردّ آلي." },
        },
      ],
    },
  ],
  proof: {
    nav: { en: "Research", ar: "البحث" },
    title: { en: "What the published research found", ar: "ما وجدته الأبحاث المنشورة" },
    quote: {
      en: "Adherence rose, and so did the number of patients who told us they felt looked after. We did not expect the second result to be so large.",
      ar: "ارتفع الالتزام، وارتفع معه عدد المرضى الذين قالوا إنهم يشعرون بأن أحدًا يعتني بهم. لم نتوقع أن تكون النتيجة الثانية بهذا الحجم.",
    },
    who: { en: "Prof. Lucía Marchetti, Principal Investigator, Northern Chronic Care Study", ar: "أ.د. لوسيا ماركيتي، الباحثة الرئيسية، دراسة الرعاية المزمنة الشمالية" },
    facts: [
      { k: { en: "Patients in the study", ar: "المرضى في الدراسة" }, v: same("86,000") },
      { k: { en: "Partner clinics", ar: "العيادات الشريكة" }, v: same("41") },
      { k: { en: "Study length", ar: "مدة الدراسة" }, v: { en: "12 months", ar: "12 شهرًا" } },
      { k: { en: "Peer-reviewed papers", ar: "أوراق بحثية محكّمة" }, v: same("6") },
    ],
  },
  cta: {
    title: { en: "Bring Pulse to your clinic.", ar: "أدخل «نبض» إلى عيادتك." },
    lede: {
      en: "Tell us who you care for and where visits slip through. A clinical lead will call within three working days.",
      ar: "أخبرنا بمن ترعاهم وأين تضيع الزيارات. سيتصل بك قائد سريري خلال ثلاثة أيام عمل.",
    },
    fields: [
      { name: "name", type: "text", label: { en: "Your name", ar: "اسمك" } },
      { name: "email", type: "email", label: { en: "Work email", ar: "بريد العمل" } },
      {
        name: "role",
        type: "select",
        label: { en: "Your role", ar: "دورك" },
        options: [
          { en: "Clinic lead", ar: "مدير عيادة" },
          { en: "Clinician", ar: "ممارس صحي" },
          { en: "Payer", ar: "جهة تأمين" },
          { en: "Patient advocate", ar: "ممثل حقوق المرضى" },
        ],
      },
      { name: "organisation", type: "text", label: { en: "Clinic or organisation", ar: "العيادة أو الجهة" } },
      {
        name: "care",
        type: "textarea",
        wide: true,
        label: { en: "Which patients would you start with?", ar: "بأي مرضى تودّ أن تبدأ؟" },
      },
    ],
    success: { en: "Thank you. A clinical lead will call you within three working days.", ar: "شكرًا لك. سيتصل بك قائد سريري خلال ثلاثة أيام عمل." },
  },
};

export default content;
