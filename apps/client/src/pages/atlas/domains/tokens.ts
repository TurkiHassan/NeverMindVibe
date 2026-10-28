import type { CSSProperties } from "react";
import type { Domain } from "./base";

type RGB = [number, number, number];

const parse = (hex: string): RGB => {
  const value = hex.replace("#", "");
  const full = value.length === 3 ? value.split("").map((c) => c + c).join("") : value;
  return [parseInt(full.slice(0, 2), 16), parseInt(full.slice(2, 4), 16), parseInt(full.slice(4, 6), 16)];
};

const toHex = ([r, g, b]: RGB) =>
  "#" + [r, g, b].map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, "0")).join("");

const channel = (v: number) => {
  const c = v / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};

const luminance = (hex: string) => {
  const [r, g, b] = parse(hex);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};

export const contrast = (a: string, b: string) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const mix = (a: string, b: string, t: number) => {
  const [ar, ag, ab] = parse(a);
  const [br, bg, bb] = parse(b);
  return toHex([ar + (br - ar) * t, ag + (bg - ag) * t, ab + (bb - ab) * t]);
};

/** Nudge `fg` toward `toward` until it reaches `min` contrast on `bg`. */
const ensure = (fg: string, bg: string, toward: string, min: number) => {
  for (let t = 0; t <= 1.001; t += 0.04) {
    const candidate = mix(fg, toward, t);
    if (contrast(candidate, bg) >= min) return candidate;
  }
  return toward;
};

/** True when the page background is dark enough to need light text. */
export const isDarkPaper = (paper: string) => luminance(paper) < 0.3;

/** Like ensure, but the result must clear `min` on every background in `bgs`. */
const ensureAll = (fg: string, bgs: string[], toward: string, min: number) => {
  for (let t = 0; t <= 1.001; t += 0.04) {
    const candidate = mix(fg, toward, t);
    if (bgs.every((bg) => contrast(candidate, bg) >= min)) return candidate;
  }
  return toward;
};

const best = (bg: string, options: string[]) =>
  options.reduce((winner, option) => (contrast(option, bg) > contrast(winner, bg) ? option : winner));

/**
 * Colour roles for one domain page, derived from its five source colours so
 * every text role clears WCAG AA on the surface it sits on.
 */
export function tokensFor(domain: Domain): CSSProperties {
  const { ink, paper, accent, accentSoft } = domain;
  const surface = mix(paper, ink, 0.05);
  const muted = ensureAll(mix(ink, paper, 0.34), [paper, surface], ink, 4.8);
  const accentInk = ensureAll(accent, [paper, surface], ink, 4.6);
  const onAccent = best(accent, [ink, paper, "#0b0b0b", "#ffffff"]);
  const accentGraphic = ensureAll(accent, [paper, surface], ink, 3.1);
  const accentBtn =
    contrast(onAccent, accent) >= 4.6 ? accent : ensureAll(accent, [onAccent], luminance(onAccent) > 0.5 ? "#000000" : "#ffffff", 4.6);
  const line = mix(paper, ink, 0.16);
  const onSoft = ensure(ink, accentSoft, luminance(accentSoft) > 0.4 ? "#000000" : "#ffffff", 7);
  return {
    colorScheme: isDarkPaper(paper) ? "dark" : "light",
    "--ink": ink,
    "--paper": paper,
    "--accent": accent,
    "--accent-soft": accentSoft,
    "--accent-ink": accentInk,
    "--accent-graphic": accentGraphic,
    "--accent-btn": accentBtn,
    "--on-accent": onAccent,
    "--on-soft": onSoft,
    "--muted": muted,
    "--surface": surface,
    "--line": line,
  } as CSSProperties;
}
