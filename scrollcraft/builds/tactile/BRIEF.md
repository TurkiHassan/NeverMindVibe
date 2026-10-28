# BRIEF: tactile, a wall that changes temperature

**Self-authored under explicit creative delegation.** No interview. Evidence: `apps/client/src/pages/atlas/domains/content/tactile.ts` (EN and AR copy, figures, all sample content), `base.ts` (sand #f2eadf, ink #2b211b, rust #b96d4f, border #ddcbbb), `type.ts` (EN Instrument Serif + Work Sans, AR Amiri), `tactile-1..4.webp` (stacked material slabs, so every frame is captioned as a sample material study, never as the piece). Nothing generated, the hero film is unused. The page says on its face that brand, prices, figures and quote are sample content.

## The eight topics

1. **Vibe.** Quiet, tactile, considered. A museum wall label, a swatch drawer, a lookbook for a workshop. Premium-minimal, editorial.
2. **Journey.** Six objects hung one by one (Low Table first), the six materials, then one plate where a material picker lists the objects and the inquiry line sits beside it.
3. **Energy curve.** Even and low all the way, one swell when the wall changes temperature, a held resolve.
4. **Feeling curve and the ONE moment.** Below. The moment: the whole wall goes warm or cool under your hand.
5. **What no other site does.** A material strip regrades the entire wall (ground, ink, rules, every photograph) as the pointer crosses it, warm for wood, cool for steel and stoneware.
6. **Range.** Premium-minimal, light, one rust accent. No dark ground.
7. **One world or distinct scenes.** Distinct objects on one wall (Gallery / catalog, vertical).
8. **Assets.** Owned: four sample stills (reused with different crops), the real copy. No video, no generation.

Subject: small-batch furniture in six materials. The visitor must believe each piece is made of something specific that they can compare by touch. One action, one label everywhere: **Write to a maker** (AR «اكتب إلى أحد الصنّاع»).

## Journey

1 Object one, already labelled. 2 to 6 Five more objects, identical label schema (Made of, Price, Lead time, Made in). 7 Six materials, with the quote and four real facts. 8 Final plate: picker lists objects by material, then the inquiry line.

## Feeling curve (written before the acts)

| # | Feeling | Cause on screen |
|---|---|---|
| 1 | Arrival, calm | One framed object and its label, nothing else to read |
| 2 | Looking | Frame leans slightly toward you as it passes, label rows stagger in |
| 3 | Comparing | Same schema, different crop and side, so the eye reads differences |
| 4 | Warmth | Dune is wool, the strip marks it, the wall can be graded to match |
| 5 | Weight | Kiln Stool, the coolest material, a tall quiet frame |
| 6 | Familiarity | Reed Sideboard repeats oak, the strip's oak dot lights again |
| 7 | Trust | Six sources, a quote, four facts, no motion beyond the reveal |
| 8 | Resolve | Pick a material, the list re-sorts, the line to write opens |

## The peak

What a visitor would say: *"I slid my cursor across the materials and the whole room went from warm walnut to cool stoneware, even the photographs."* It lives in the strip, which is on screen from the first frame to the close, so the peak is available on every act rather than in one span. This is a deviation from the "largest span" rule, forced by the grammar (no pin).

## Tell-someone sentence

It's the site where you run your hand across six materials and the whole wall changes temperature under it.

## Authored silence

Acts 7 and 8 (no scroll-linked motion, only the one-shot reveal). The first object has no reveal at all, it is already there.

## Why the other grammars lost

- Filmic one-shot: no continuous footage, and the stills are slabs, not a journey.
- Chaptered editorial: the point is comparing objects at once, not reading chapters.
- Split stage: no two-sided argument.
- Live surface: the only state is a temperature and a filter, small next to the objects.
- Continuous world, Typographic poster, Rhythmic cutlist: no assets and no single claim; tone is calm.

## Fingerprint (copied from PLAN.json)

| Dimension | Value |
|---|---|
| Grammar | Gallery / catalog |
| Nav | Fixed bottom strip of six materials, choosing one jumps to the next object made of it |
| Hero | Object one (Low Table) framed and labelled with the same schema, no pitch |
| Seq | Vertical museum wall, flow acts, staggered reveal and tilt per object, no pan, no pin, 9vh, 8 short flow acts |
| Close | Final plate where a material picker re-sorts which objects are listed, then the inquiry line |
| Sig | Material temperature control regrades the whole wall |
| Peak | The wall changes temperature under your hand as you move across the materials |

## Taste decisions

EN: Instrument Serif + Work Sans. AR: Amiri only. Logical CSS, RTL via `dir` on `<html>` (same as Pulse), the grid mirrors itself, Latin and figures in `<bdi dir="ltr">`. Accent: rust #b96d4f for marks and rings, a darker shade of the same hue (#8a4a30) for text and fills so contrast holds. No eyebrows, numbers, scroll cue, em dash, gradient or glow (the one tinted overlay on photographs is a flat multiply). Temperature is one registered number, `--t`, from 0 (walnut) to 1 (stoneware). Measured text contrast across 160+ text nodes at t 0, .18, .5, .76, 1: minimum 5.06:1.
