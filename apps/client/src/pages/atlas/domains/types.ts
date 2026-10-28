// Content model for one domain landing page.
// A domain file (./<slug>.ts) exports a DomainContent; DomainPage renders it.
// Every visible string is an L (English + Arabic). Numbers that read the same
// in both languages can use `same("24")`.

export type Lang = "en" | "ar";
export type L = { en: string; ar: string };
export const same = (value: string): L => ({ en: value, ar: value });

/** Which of the four stills extracted from the domain's hero film to show. */
export type Still = 0 | 1 | 2 | 3;

export type Item = {
  title: L;
  /** One short line: year · place, price, duration, level... */
  meta?: L;
  note?: L;
  still?: Still;
  tags?: L[];
  /** Used by the "archive" layout: small key/value stats under the title. */
  facts?: { k: L; v: L }[];
};

type Base = {
  /** Anchor id, unique inside the page (also the nav target). */
  id: string;
  /** Short label for the header nav, in the domain's own voice. */
  nav: L;
  title: L;
  lede?: L;
};

export type GalleryLayout = "asym" | "rows" | "rail" | "grid" | "editorial" | "archive";

export type Section =
  | (Base & { kind: "gallery"; layout: GalleryLayout; items: Item[] })
  | (Base & { kind: "timeline"; items: { when: L; title: L; note: L }[] })
  | (Base & { kind: "specs"; rows: { k: L; v: L }[]; still?: Still })
  | (Base & { kind: "bars"; unit: L; rows: { label: L; value: number; max: number; note?: L; unit?: L }[] })
  | (Base & { kind: "table"; columns: L[]; rows: L[][]; foot?: L })
  | (Base & { kind: "pricing"; plans: { name: L; price: L; per: L; points: L[]; featured?: boolean }[] })
  | (Base & { kind: "tracks"; items: { title: L; meta: L; length: string }[] })
  | (Base & { kind: "workflow"; nodes: L[]; codeLabel: L; code: string })
  | (Base & { kind: "switch"; options: { label: L; title: L; body: L; points: L[] }[] })
  | (Base & { kind: "stories"; items: { quote: L; who: L; role?: L; still?: Still }[] })
  | (Base & { kind: "calendar"; months: L[]; rows: { label: L; from: number; to: number; note?: L }[] })
  | (Base & { kind: "steps"; items: { title: L; note: L; time?: L }[] });

export type Field = {
  name: string;
  label: L;
  type: "text" | "email" | "select" | "date" | "textarea";
  options?: L[];
  placeholder?: L;
  /** Spans the full form width. */
  wide?: boolean;
};

export type DomainContent = {
  /** Hero paragraph in the brand's own voice (replaces the catalog description on the page). */
  lede?: L;
  /** Hero composition: copy beside the film, film behind the copy, or copy above a wide film. */
  hero: "split" | "full" | "stack";
  /** Label of the secondary hero link (scrolls to the first section). */
  secondary: L;
  sections: [Section, Section];
  proof: {
    nav: L;
    title: L;
    quote: L;
    who: L;
    /** 3-4 plain facts, rendered as a ruled list rather than big numbers. */
    facts: { k: L; v: L }[];
  };
  cta: {
    title: L;
    lede: L;
    fields: Field[];
    /** Form button label when it should differ from the nav/hero label (the catalog's last tree item). */
    submit?: L;
    /** Shown in place of the form after a (sample) submit. */
    success: L;
  };
};
