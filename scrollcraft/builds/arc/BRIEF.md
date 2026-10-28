# BRIEF: Arc, a walkable collection

**Self-authored under explicit creative delegation.** No interview was possible. Every answer below is an authored decision, not a quotation. Evidence used: `apps/client/src/pages/atlas/domains/content/arc.ts` (sample copy EN and AR, sample figures), `base.ts` (palette), `type.ts` (font pairs), the 4 s hero film and four stills of the Landscape Lab project. Nothing was generated. Brand, buildings and figures are fictional sample content and the page says so on its face (rail note, plate footer, image captions "Sample image" / "Sample footage").

Files: `apps/client/public/experiences/arc/index.html` (EN), `.../arc/ar/index.html` (AR twin, real markup, `hreflang` switch in the rail), shared `assets/arc.css` and `assets/arc.js`. The engine is linked, never edited; it supplies only the pinned stage.

## The eight topics

1. **Vibe.** Quiet, measured, daylit. A room with white walls and museum labels. References: a municipal gallery's wall plaques, an architect's section drawing on tracing paper, a printed plate index.
2. **Journey.** You arrive already standing in front of the first building. You walk the wall past five buildings, each one labelled with fact, each with its section drawn under it. At the end the wall turns into an inquiry plate set like one more label.
3. **Energy curve.** Low, a gentle step, one long hold, a quickening, then two quiet objects and a calm close. It is never loud.
4. **Feeling curve and the ONE moment.** Below. The moment: the seven stairs drawing themselves in the long hold at the Court.
5. **What no other site does.** A section drawing builds itself under each object as it reaches the reading line, and its dimension callouts arrive only after the line is finished.
6. **Range.** Editorial and grounded, dense in labels, airy in space. The domain's own palette (bone paper, oxide accent) is used as given; the cream-and-brass trap is acknowledged and accepted because the palette is the domain's.
7. **One world or distinct scenes.** Distinct objects on one wall (gallery / catalog grammar). Not a continuous world.
8. **Assets.** Existing only: `arc-hero.mp4` plays once in object one (fetched from JS, only on desktop with motion allowed, never on phones), stills `arc-1..4.webp` as sample imagery for the five objects exactly as `arc.ts` maps them (still index 0 is reused for North Light Archive with a different crop; the stills are all one sample pavilion and are captioned as sample).

## Subject, belief, action

Arc is an architecture studio for libraries, courts and station halls. The visitor should believe: these people watch how a place is used before they draw it. One action, one label everywhere: **Start a conversation** (rail link and plate submit; the plate heading is the arc.ts line "Tell us about the site.").

## Grammar: Gallery / catalog

Why the other seven lost:

- Filmic one-shot: the project has one 4 s clip and the brief is a range of five buildings, not one argument. One shot would hide the objects the visitor came to compare.
- Chaptered editorial: reads as a feature article. The visitor's question is "what have you built", not "what do you think".
- Live surface: the studio has no operable product. A fake surface would break the honesty rule.
- Continuous world: no flight assets exist and the five buildings share no geography.
- Typographic poster: the asset is the buildings, not a sentence.
- Split stage: there is no two-sided argument.
- Rhythmic cutlist: the opposite pace. Buildings drawn "to last a century" cannot be shown at one cut a second.

**Label schema, identical for all five:** title, Year, Place, Type, one-line note. The tags that only the first object has in `arc.ts` are dropped so the schema stays uniform. Notes are the studio's own sentences, no persuasion added. Approach and Practice (three questions, four facts, one client quote) are set as labels on the same wall in the plate act, so nothing in arc.ts is lost.

## Journey (four to seven beats)

1. Arrival: object one already in view, no title treatment.
2. Discovery: the drawing under it builds itself.
3. The long look: Court of the Seven Stairs, widest panel, longest dwell.
4. Quickening: the station, sized for Friday.
5. Warmth then hush: the bathhouse, the archive.
6. Method and proof: three questions, four facts, one quote.
7. Intent: the inquiry plate.

## Feeling curve (intent, recorded in this file after the build)

| # | Where | Feeling | Cause on screen |
|---|---|---|---|
| 1 | Harbour Reading Room | Composure | Object one is already there with its label; the film builds a pavilion from a plan in four seconds and holds, the drawing completes itself |
| 2 | The bare wall to the Court | Anticipation (authored silence) | A long stretch of empty wall, one slow lateral travel, nothing else drawn |
| 3 | Court of the Seven Stairs (the peak) | Wonder | Widest panel, tallest picture, 27% of the whole walk; the seven treads draw one by one and each is lit |
| 4 | Kiln Street Station | Momentum | Shorter dwell, faster travel, a vault with a crowd, Friday against Tuesday |
| 5 | House of Slow Water | Warmth | Stone masses fill in, three warm lines rise in each |
| 6 | North Light Archive | Hush | The sparest drawing, a ray stopped by the roof, readers under diffuse light |
| 7 | The plate | Intent | The wall becomes a label with fields; the cursor goes in a field |

## The peak

The sentence a visitor would say: *"I stopped at the courthouse and the seven stairs drew themselves one at a time while the daylight came down on them."* It lives in the Court dwell (scroll share 0.27 of the 6.5 viewport-heights of travel against 0.08 for every other object), with the widest panel (57vw against 30 to 40vw), a taller picture and a larger drawing.

## Tell-someone sentence

It's the site where you walk past five buildings and each one draws its own cross-section under you, and the seven stairs of the courthouse come last, one tread at a time.

## Signature move

**A section drawing that draws itself under each object as it crosses the reading line** (SVG stroke offset driven from scroll, five hand-built drawings), then **dimension callouts arrive after the line**. In the Court the draw window spans the whole dwell and each tread has its own lit stroke. Nothing in the engine does this.

## Authored silence

1. **The bare wall between Harbour and the Court**: a 14vw empty stretch plus a slow travel segment (0.16 of the walk) where the only motion is the rail itself. The stage reports `data-sc-verify-state` (rail position and every drawing's progress) so the harness can tell this from dead scroll.
2. Inside every dwell the rail creeps slowly rather than parking, so a hold is never a freeze.

## Sequence

Act 1: one pan spine (`data-sc-act="pan"`, span 7.5 = 6.5 viewport-heights of travel plus the stage): five objects, scroll shares Harbour 0.08, travel 0.16, Court 0.27, travel 0.09, Kiln 0.08, travel 0.08, Water 0.08, travel 0.08, North 0.08. Act 2: the inquiry plate, one flow screen (min-height 100svh, taller on phones). Measured total 8.5 viewport-heights on desktop, 9.7 on phone.

Devices used: pan (own maths, because the engine pan is not RTL aware), reveal (picture wipe per object as it enters), flow `in` (plate blocks), line-draw (page-local), index jump. No scrub, pin copy, kinetic, spotlight or magnet.

## Mobile, reduced motion, Arabic

- Phone (390x844) is composed separately: top bar (wordmark, language, one CTA), the index becomes a 48px edge column of vertical object names, panels re-sized to the column (Court widest), the lede moves into object one, no video request at all.
- Reduced motion: the walk becomes a plain vertical stack in the same order, drawings fully drawn, no wipe, the index becomes plain anchors. Nothing deleted, everything reachable by ordinary scroll.
- Arabic: `lang="ar" dir="rtl"`, logical properties throughout, rail on the right, travel and wipe direction mirrored, drawings mirrored by `scaleX(-1)`, numerals isolated with `<bdi dir="ltr">`, letter-spacing zero, Noto Kufi Arabic and Noto Naskh Arabic only. UI strings that are not in arc.ts (skip link, captions, callout labels, error line, "Start a conversation") were written for this page in plain MSA and need a native proofread.

## Fingerprint (copied from PLAN.json, unchanged)

| Dimension | This build |
|---|---|
| Grammar | Gallery / catalog |
| Nav treatment | Left-edge index of the five projects (names, jumps to the object) |
| Hero device | Object one (Harbour Reading Room) already in view with its museum label, no title treatment |
| Act sequence | One lateral pan spine of five objects, 6.5vh, plus a 1vh inquiry plate; 8.5vh, 2 acts |
| Close pattern | Inquiry plate typeset exactly like an object label (Site, Brief, Reply within three working days) holding the form |
| Signature move | A section drawing that draws itself under each object as it crosses the centre (SVG stroke driven by --sc-p), dimension callouts arriving after the line |

Peak (plan): Court of Seven Stairs is the widest panel with the longest dwell; the seven stairs draw themselves under the light.

## Feel check (NOT a cold check)

This file was written in one pass after the page was built, so the curve above is authored intent recorded after the fact, not a curve fixed before the acts. The feel check was run by the same agent that built the page, by reading the contact sheets and shot sequences while holding that intent in mind. No one-word-per-act pass was written down before reading the curve, and no human scrolled the page. Read that way, the sheets agree with the intent on every act (composure, patience, wonder, momentum, warmth, hush, intent). Two things looked wrong on the sheets and were fixed: the Court did not read as the biggest thing (its drawing matched the others), so it got a taller picture and a larger drawing; and on phones the Court panel was wider than the screen, so phone panel widths were re-set. On the sheets the peak is the largest visual change and holds the most scroll room, the act before it is the quietest, and the last screen is a full form that holds. A real phone and a human cold scroll remain unverified.

## Deviations and disclosures against PLAN.json

- The plate act also carries Approach (three questions) and Practice (four facts, one quote) as labels beside the form, so no arc.ts content is dropped. The form block keeps the label rule and a tinted ground; it is the one filled block on the page.
- The index is on the inline-start edge, so it sits on the right in the Arabic twin. On phones it is a 48px edge column of vertical names, and each shows only the first word of the title (the full title is the accessible name).
- Total length is 8.5vh on desktop as planned; the phone measures 9.7vh because the plate stacks and is taller than one phone screen.
- Contrast was not graded by the harness (it grades only `data-sc-cue` elements and this page has none). A separate audit of computed colour pairs against the nearest opaque ancestor found a worst text pair of 5.33:1 (button ink on accent). It ignores opacity and fades. The oxide accent is 2.77:1 on the paper, so it is used only for decorative strokes, fills and the button ground, never for text, and the focus ring is ink for that reason.
