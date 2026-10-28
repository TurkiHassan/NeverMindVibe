# BRIEF: spark, small sparks make a wider light

**Self-authored under explicit creative delegation.** No human was interviewed. Every line below is an authored decision, not a quotation. The brand is fictional (a sample brand from Landscape Lab); every figure and story is sample content from `apps/client/src/pages/atlas/domains/content/spark.ts` and says so on the page's face (hero foot, close footer).

Sources used: `content/spark.ts` (copy EN and AR, figures), `domains/base.ts` (palette: ink #23211f, paper #fffaf0, accent #f9b44f, accentSoft #fff0cf, border #ebd8b1), `domains/type.ts` (EN Bowlby One + Albert Sans, AR Almarai). No media is used: the 4 s hero film and the four stills are not on the page (the poster grammar forbids photographic ground and scrub, and the grammar is better without them).

## The eight topics

1. **Vibe.** Printed, loud then hushed, warm. References from other media: a letterpress broadside, a protest placard at 40vw, a halftone newspaper photograph resolving up close.
2. **Journey.** Recognise "small" (the one word the whole page is about), see how little is asked (three small acts), meet people who said yes, hear one quiet voice, watch 48,000 of them gather into a number, then say yes to one small thing.
3. **Energy curve.** Loud, quiet, loud, hush, loudest, quiet.
4. **Feeling and the one moment.** See the curve below. The moment: the number resolving out of 48,000 dots.
5. **What no other site does.** The visitor's scroll gathers the people: 48,000 specks (one per person) drift in from the edges of the page and settle, left to right, into the figure 48,000.
6. **Range.** Poster-brutalist in scale, restrained in finish: flat grounds, one accent, no ornament. Scale contrast does the work a photograph would do.
7. **One world or distinct scenes.** Distinct scenes: each act is a poster with its own ground and hard cuts, no drift between them.
8. **Assets.** None used. Type is the imagery. Nothing generated.

## Subject

spark is a community movement that turns small local actions into something a city can see. The visitor must believe: one small yes is enough to start. One action, one label used everywhere: **Join the spark** (from the domain's own tree).

## Grammar: Typographic poster (fixed by plan)

Why the other seven lost:

- Filmic one-shot: needs footage to carry the arc; there is one 4 s clip, and a film would hide that the asset of this brand is a sentence.
- Chaptered editorial: a printed feature wants long substance; this brand has three acts, three stories and four figures.
- Live surface: spark has no product to operate.
- Continuous world: no geography, no assets for a flight.
- Gallery / catalog: the question is "will you join", not "what are the options".
- Split stage: no two-sided argument.
- Rhythmic cutlist: the page needs a held breath (the peak and the hush before it), which a cutlist bans.

(The task text said "the other six"; the skill defines eight grammars, so seven lost.)

## Journey and score

| # | Act | Device | Ground | Span |
|---|---|---|---|---|
| 1 | WORD: SMALL SPARKS, one line fitted to the page, wordmark and h1 on the same sheet | pin, scale driven from --sc-p | paper | 1.3vh |
| 2 | PARAGRAPH: three ways to help, 16px, a lot of paper | flow + in | paper | ~0.8vh |
| 3 | WORD: YES at 40vw, wiped in across the letterforms, three stories take turns beneath | pin, clip wipe from --sc-p, cues | accentSoft | 1.4vh |
| 4 | PARAGRAPH: one volunteer's voice | flow + in | paper | ~0.7vh |
| 5 | WORD (the peak): 48,000 dots gather into 48,000 | pin, canvas driven from scroll | ink, accent dots | 2.9vh |
| 6 | PARAGRAPH: the close, the smallest type, a plain underlined link | flow | accent | ~0.9vh |

Total about 8.0 viewport-heights (measured 8.0 desktop). Peak span 2.9 is more than twice any other pinned act (next 1.4).

## Feeling curve (written before the acts)

1. **Ignition.** A single line shouts at the full width of the page, then the scroll pushes into it.
2. **Welcome.** Three small asks at reading size on a quiet page, nothing shouting.
3. **Delight.** One word at 40vw wipes in, the only warm ground on the page, and three people answer it in small type.
4. **Hush.** One voice, one paragraph, a field of empty paper. Nothing moves unless you scroll. This is the silence in front of the peak.
5. **Awe (the peak).** Forty-eight thousand specks arrive from the edges and become one number.
6. **Settled intimacy.** The type is at its smallest, the ground is warm and flat, one underlined link.

## The peak

The sentence a visitor would say: *"Forty-eight thousand sparks gather into one number."* Act 5.

## Tell-someone sentence

It's the site where forty-eight thousand specks drift in off the edges of the page as you scroll and settle into the number of people behind it.

## Signature move

The 48,000 specks. Exactly 48,000 dots are drawn on a canvas (seeded generator, so the same scroll position is the same frame), one per person, each with its own delay and curve; targets are sampled from the real glyph mask of the number in the page's own face, after the font has loaded, and resampled on resize. A live count ("2,947 gathered") is computed from the dots that have actually arrived. The real "48,000" lives in the DOM as text (the canvas is `aria-hidden`). Not in the engine, not a kit parameter.

## Authored silence

- Act 4 (the hush) is a flow section with one paragraph; no motion by design.
- Act 5's first tenth: the specks sit scattered and still; the state attribute reports 0 percent gathered and the harness sees the scatter move from the first notch.
- Act 5's resolved hold (the last part of its span, `data-sc-verify-hold` is set only while all 48,000 are home).

## Fingerprint (copied from PLAN.json)

| Dimension | This build |
|---|---|
| Grammar | Typographic poster |
| Nav treatment | No persistent nav; the wordmark is set at composition scale (the only fixed item is a small language switch chip) |
| Hero device | One line at extreme scale (SMALL SPARKS) filling the viewport, real h1 behind |
| Act sequence | Six poster acts alternating 40vw words with 16px paragraphs; 8vh |
| Close pattern | Inverts the page: the smallest type on the site, the CTA a plain underlined link |
| Signature move | The 48,000 (real, from content) is assembled from tiny dots that gather on screen as you scroll until the number resolves |
| Peak | Forty-eight thousand sparks gather into one number. |

## Taste decisions

- Colours: the six roles are the domain's. Accent (#f9b44f) is 1.7:1 on paper, so it is never used as text or underline on paper: it is a ground (the close) and the dot colour on ink (8.9:1). Ink on accent is 8.9:1; soft ink #5b554e is 7.1:1 on paper.
- Fonts: two families per page. EN Bowlby One + Albert Sans; AR Almarai (display 800, text 400/700). Arabic display is not letter-spaced and never split into characters.
- No eyebrows, no section numbers, no scroll cue, no em dash, no gradients or glow, no cards, no invented figures. The "48,000" is withheld from every string before the peak (it first appears as the number itself; the lede that contains it is the caption after it resolves).
- Grounds are opaque per act, hard cuts, no drift.
- Reduced motion: no scale, no wipe, no travel. The dots stand in their final positions and fade in; cues still fade; the page stays complete.
- Phone is composed separately: the hero stacks onto two fitted lines (SMALL / SPARKS), the stories take turns in one slot, the close is a single column, the language chip scrolls away instead of floating over copy.
