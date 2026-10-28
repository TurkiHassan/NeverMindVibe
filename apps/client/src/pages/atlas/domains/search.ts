// Extra words people type when looking for a template, in English and Arabic.
// Card names stay short ("Ledger / Fintech"); this is what lets "finance" or "مالية" find them.
export const searchTerms: Record<string, string> = {
  arc: "architecture building design studio عمارة مباني تصميم معماري",
  orbit: "space aerospace satellite mission فضاء مركبات اقمار",
  moss: "climate environment nature sustainability مناخ بيئة طبيعة استدامة",
  pulse: "health healthcare medical clinic صحة رعاية طب عيادة",
  ledger: "finance fintech banking money treasury مالية بنك مال خزينة",
  atelier: "fashion clothing brand label ازياء ملابس موضة",
  signal: "music audio sound studio موسيقى صوت استوديو",
  tactile: "furniture home interior design اثاث منزل ديكور",
  drift: "travel tourism trips journeys سفر سياحة رحلات",
  kernel: "ai artificial intelligence software saas ذكاء اصطناعي برمجيات",
  pantry: "food cooking recipes grocery طعام طبخ وصفات",
  root: "education learning school courses تعليم تعلم دورات",
  frame: "photography photographer gallery portfolio تصوير مصور معرض",
  civic: "city government public services urban مدينة حكومة خدمات عامة",
  current: "energy power electricity renewable طاقة كهرباء متجددة",
  loop: "creator tools makers productivity مبدعين ادوات",
  haven: "hospitality hotel stay rooms ضيافة فندق اقامة",
  spark: "nonprofit charity community donate غير ربحي خيري مجتمع تبرع",
  field: "agriculture farming crops food زراعة مزارع محاصيل",
  cinder: "gaming games studio worldbuilding العاب",
};

/** Lower-case and fold Arabic letter variants so "الأزياء" finds "الازياء". */
export const normalize = (value: string) =>
  value
    .toLowerCase()
    .replace(/[ً-ْٰـ]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه");
