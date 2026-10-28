// Slugs that have a scroll experience under public/experiences/<slug>/ (EN) and /ar/ (AR).
const built = [
  "orbit", "arc", "moss", "ledger", "pulse", "spark", "tactile", "atelier", "signal", "drift",
  "pantry", "root", "kernel", "haven", "frame", "civic", "current", "cinder", "loop", "field",
];

export function experienceHref(slug: string, lang: "en" | "ar"): string | null {
  if (!built.includes(slug)) return null;
  return lang === "ar" ? `/experiences/${slug}/ar/index.html` : `/experiences/${slug}/index.html`;
}
