import type { CSSProperties } from "react";
import type { Lang } from "./types";

// One Latin pair and one Arabic pair per domain. Each face is loaded only on
// its own page (see fontHref), so the weight of 20 identities is not paid by
// every visitor.

type Face = { name: string; weights: number[]; fallback: "serif" | "sans-serif" };
type Pair = { display: Face; body: Face };
type DomainType = { en: Pair; ar: Pair; mono?: Face };

const f = (name: string, weights: number[], fallback: Face["fallback"] = "sans-serif"): Face => ({ name, weights, fallback });

const TYPE: Record<string, DomainType> = {
  arc: { en: { display: f("Familjen Grotesk", [500, 600]), body: f("Hanken Grotesk", [400, 500, 600]) }, ar: { display: f("Noto Kufi Arabic", [500, 700]), body: f("Noto Naskh Arabic", [400, 600], "serif") } },
  orbit: { en: { display: f("Unbounded", [400, 600]), body: f("Geologica", [300, 400, 500]) }, ar: { display: f("Readex Pro", [400, 600]), body: f("Readex Pro", [300, 400]) } },
  moss: { en: { display: f("Young Serif", [400], "serif"), body: f("Onest", [400, 500, 600]) }, ar: { display: f("Amiri", [400, 700], "serif"), body: f("Almarai", [400, 700]) } },
  pulse: { en: { display: f("Red Hat Display", [500, 700, 800]), body: f("Red Hat Text", [400, 500, 700]) }, ar: { display: f("Cairo", [600, 800]), body: f("Cairo", [400, 500]) } },
  ledger: { en: { display: f("Sora", [500, 600, 700]), body: f("Schibsted Grotesk", [400, 500, 600]) }, ar: { display: f("Tajawal", [500, 800]), body: f("Tajawal", [400, 500]) } },
  atelier: { en: { display: f("Bodoni Moda", [500, 700], "serif"), body: f("Jost", [400, 500]) }, ar: { display: f("Markazi Text", [500, 700], "serif"), body: f("Noto Naskh Arabic", [400, 600], "serif") } },
  signal: { en: { display: f("Anybody", [500, 800]), body: f("Epilogue", [400, 500, 600]) }, ar: { display: f("Lalezar", [400]), body: f("Almarai", [400, 700]) } },
  tactile: { en: { display: f("Instrument Serif", [400], "serif"), body: f("Work Sans", [400, 500, 600]) }, ar: { display: f("Amiri", [700], "serif"), body: f("Amiri", [400], "serif") } },
  drift: { en: { display: f("Bricolage Grotesque", [500, 700]), body: f("Figtree", [400, 500, 600]) }, ar: { display: f("Alexandria", [500, 700]), body: f("Alexandria", [300, 400]) } },
  kernel: { en: { display: f("Geist", [500, 600]), body: f("Geist", [400, 500]) }, ar: { display: f("Rubik", [500, 600]), body: f("Rubik", [400, 500]) }, mono: f("Geist Mono", [400, 500]) },
  pantry: { en: { display: f("Gabarito", [600, 800]), body: f("Nunito Sans", [400, 600]) }, ar: { display: f("Baloo Bhaijaan 2", [600, 800]), body: f("Baloo Bhaijaan 2", [400, 500]) } },
  root: { en: { display: f("Literata", [500, 700], "serif"), body: f("Public Sans", [400, 500, 600]) }, ar: { display: f("Noto Naskh Arabic", [600, 700], "serif"), body: f("Almarai", [400, 700]) } },
  frame: { en: { display: f("Italiana", [400], "serif"), body: f("Jost", [300, 400, 500]) }, ar: { display: f("El Messiri", [400, 600]), body: f("Tajawal", [300, 400]) } },
  civic: { en: { display: f("Archivo", [600, 700, 800]), body: f("Public Sans", [400, 500, 600]) }, ar: { display: f("Tajawal", [700, 800]), body: f("Tajawal", [400, 500]) } },
  current: { en: { display: f("Big Shoulders Display", [600, 800]), body: f("Chivo", [400, 500, 600]) }, ar: { display: f("Changa", [600, 800]), body: f("Changa", [400, 500]) } },
  loop: { en: { display: f("Rethink Sans", [600, 800]), body: f("Rethink Sans", [400, 500]) }, ar: { display: f("Cairo", [600, 800]), body: f("Cairo", [400, 500]) } },
  haven: { en: { display: f("Gilda Display", [400], "serif"), body: f("Mulish", [300, 400, 500]) }, ar: { display: f("Aref Ruqaa", [400, 700], "serif"), body: f("Noto Naskh Arabic", [400, 600], "serif") } },
  spark: { en: { display: f("Bowlby One", [400]), body: f("Albert Sans", [400, 500, 600]) }, ar: { display: f("Almarai", [700, 800]), body: f("Almarai", [400, 700]) } },
  field: { en: { display: f("Bitter", [600, 800], "serif"), body: f("Source Sans 3", [400, 500, 600]) }, ar: { display: f("Noto Naskh Arabic", [700], "serif"), body: f("Noto Naskh Arabic", [400], "serif") } },
  cinder: { en: { display: f("Bungee", [400]), body: f("Barlow", [400, 500, 600]) }, ar: { display: f("Changa", [700, 800]), body: f("Cairo", [400, 500]) }, mono: f("JetBrains Mono", [400, 500]) },
};

// Heavy or very wide display faces are fine for headlines but tiring for a long testimonial.
const QUOTE_IN_BODY = new Set(["spark", "cinder", "signal", "orbit", "current"]);

const family = (face: Face) => `${face.name.replace(/ /g, "+")}:wght@${face.weights.join(";")}`;

/** Single Google Fonts stylesheet URL for a domain page, both languages. */
export function fontHref(slug: string): string | null {
  const type = TYPE[slug];
  if (!type) return null;
  const faces = [type.en.display, type.en.body, type.ar.display, type.ar.body, ...(type.mono ? [type.mono] : [])];
  const seen = new Map<string, Face>();
  for (const face of faces) {
    const known = seen.get(face.name);
    seen.set(face.name, known ? { ...known, weights: [...new Set([...known.weights, ...face.weights])].sort((a, b) => a - b) } : face);
  }
  return `https://fonts.googleapis.com/css2?${[...seen.values()].map((face) => `family=${family(face)}`).join("&")}&display=swap`;
}

const quote = (face: Face) => `"${face.name}"`;

/** CSS font variables for the page; the active language's face comes first. */
export function fontVars(slug: string, lang: Lang): CSSProperties {
  const type = TYPE[slug];
  if (!type) return {};
  const [first, second] = lang === "ar" ? [type.ar, type.en] : [type.en, type.ar];
  const stack = (key: "display" | "body") =>
    [quote(first[key]), quote(second[key]), first[key].fallback === "serif" ? "Georgia, serif" : "system-ui, sans-serif"].join(", ");
  const serif = type.en.display.fallback === "serif";
  const code = type.mono ? `${quote(type.mono)}, ui-monospace, monospace` : "ui-monospace, SFMono-Regular, Menlo, monospace";
  return {
    "--display": stack("display"),
    "--body": stack("body"),
    // Labels set in a mono face have no Arabic glyphs, so Arabic pages use the body face instead.
    "--mono": lang === "ar" ? stack("body") : type.mono ? code : `${quote(first.body)}, system-ui, sans-serif`,
    "--code": code,
    "--track": serif ? "-0.005em" : "-0.02em",
    "--track-hero": serif ? "-0.015em" : "-0.03em",
    "--quote": QUOTE_IN_BODY.has(slug) ? stack("body") : stack("display"),
  } as CSSProperties;
}

export const hasMono = (slug: string) => Boolean(TYPE[slug]?.mono);

/** Human-readable face names for the identity sheet. */
export function faceNames(slug: string) {
  const type = TYPE[slug];
  if (!type) return null;
  return {
    en: { display: type.en.display.name, body: type.en.body.name },
    ar: { display: type.ar.display.name, body: type.ar.body.name },
  };
}
