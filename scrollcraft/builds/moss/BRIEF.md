# BRIEF: Moss, a chaptered reading

**Self-authored under explicit creative delegation.** No interview was held. Everything below is an authored decision, not a quotation. Evidence used: `apps/client/src/pages/atlas/domains/content/moss.ts` (sample content for a fictional brand), the colour tokens in `base.ts`, the type pair in `type.ts`, the 4 s hero film and four stills already in the project. Nothing is generated. Everything on the page says it is sample content.

## The eight topics

1. **Vibe.** Printed, patient, soil-dark and lichen-pale. References from other media: a field-guide plate book, a geological survey section drawing, the endpaper of a hardback.
2. **Journey.** A reader opens a title page, then turns five chapters: the thesis, field notes, climate data, partner stories, plant a project. Each chapter lands on its own ground and adds a layer to a soil core in the margin.
3. **Energy curve.** Still, then a held breath, then quiet, then the longest dense stretch, then voices, then a resolved close.
4. **Feeling curve and the ONE moment.** Below. The moment: the core in the margin completing.
5. **What no other site does.** A soil-core strip in the margin grows downward as you read; each chapter adds a labelled layer carrying a real value from the content, and the layer thickness is the chapter's own length.
6. **Range.** Editorial: paper, folios, measure, restraint.
7. **One world or distinct scenes.** Distinct chapters on hard-cut grounds (chaptered editorial). No continuous world.
8. **Assets.** Project-owned only: the Moss hero film (4 s, 1280x720) as the single scrub chapter, stills moss-1 to moss-4. Dense-GOP copies in `experiences/moss/assets/`. Nothing generated.

## Subject

Moss works with farms, cities and schools to bring land back to life, one measured plot at a time (fictional brand, sample figures). The visitor should believe: this team measures the ground, not the promise. One action, one label used everywhere: **Plant a project** (Arabic: ازرع مشروعًا).

## Page grammar

**Chaptered editorial.** Why the other seven lost:

- Filmic one-shot: it is the shape four earlier builds took, and the project has one 4 s clip. A continuous film would stretch one device over a page. Forbids the visible sequence this brand wants (chapters, a core that counts them).
- Live surface: the honest pitch is a measured argument, not a running tool. Nothing here has state worth operating.
- Continuous world: needs a long unbroken flight of assets that do not exist, and "chapter by chapter depth" is the opposite of seamless.
- Typographic poster: the brand's asset is evidence and a photographed field, not one sentence at 40vw.
- Gallery / catalog: there is no collection of objects; five sites are rows of one dataset.
- Split stage: no two-sided argument.
- Rhythmic cutlist: the tone is patient, the content is long-form figures and testimony. A cut a second would flatten it.

## Journey

| # | Beat | Section |
|---|---|---|
| 0 | Recognition | Title page: the statement set in type on paper, no media above the fold |
| 1 | Turn | The thesis: the film scrubs, the quote lands |
| 2 | Substance | Field notes: four real figures set as a ledger |
| 3 | Proof | Climate data: five sites, five measured bars (the longest chapter) |
| 4 | Warmth | Partner stories: three voices, three stills in a parallax column |
| 5 | Commitment | Plant a project: a colophon, the CTA as a line of running text |

## Score (device per beat)

| Beat | Device | Why |
|---|---|---|
| Title page | none (type on paper) | Silence before the first chapter |
| The thesis | `scrub` (the one allowed) | First light and first leaves, under the reader's hand |
| Field notes | `flow` + `in` + `count` | A ledger, read, not performed |
| Climate data | `flow` + `in` + `count` + own bar draw | Data enters in order |
| Partner stories | `flow` + `parallax` plate column | Media in its own column |
| Plant a project | `flow`, own form | Small type, a line of running text |

Chrome: the margin folio and the soil core. No fixed bar.

## Feeling curve (before the acts)

| # | Act | Feeling | Cause on screen |
|---|---|---|---|
| 0 | Title page | Stillness | Five words set huge on paper, nothing else moving |
| 1 | The thesis | Wonder | The sun climbs and seedlings open as the wheel turns, first layer of the core appears |
| 2 | Field notes | Settling | A short ledger of four figures on pale paper, after the dark |
| 3 | Climate data | Weight | Five bars draw in, the thickest core layer grows beside them |
| 4 | Partner stories | Intimacy | Three plain voices, each beside its own sample image |
| 5 | Plant a project | Resolve | Dark ground, small type, one line to act on, the core reaches its end |

## The peak

The sentence a visitor would say: *"The margin grows a soil core that gets deeper with every chapter you read, and by the end it is a record of everything I read."* The peak is cumulative by design, as the plan row states. It is spent where the core's thickest layer is (chapter 3, the longest chapter and the data) and it resolves when the last layer closes at the colophon and the 30 cm end mark sets. Silence before it: the short, quiet ledger of chapter 2.

## Tell-someone sentence

It's the site where a soil core grows down the margin as you read, one layer per chapter, until it is a record of the whole page.

## Authored silence

The title page holds still on purpose (type on paper, no motion). Chapter 2 is a deliberately quiet, short ledger. The margin carries `data-sc-verify-state` (layers reached and the tip's pixel depth) so the harness can tell a growing core from dead scroll.

## Fingerprint (copied from PLAN.json; the registry file was not touched)

| Dimension | This build |
|---|---|
| Grammar | Chaptered editorial |
| Nav treatment | Margin folio: chapter number and title updating in the left margin |
| Hero device | Title page: the statement set in type on paper, no media above the fold |
| Act sequence | Five chapters on hard-cut grounds, 9vh total, flow plus parallax column, one scrub chapter allowed |
| Close pattern | Colophon: small type, the CTA set as a line of running text |
| Signature move | A soil-core strip in the margin that grows downward as you read, each chapter adding a labelled layer with a real measured value from the content |

## Taste decisions

- Fonts: Young Serif and Onest (English), Amiri and Almarai (Arabic). Two families per page.
- Colour: the Moss tokens (ink #193126, paper #edf3eb, accent #5f9f75, accentSoft #dcebdc, border #cbdac9). The accent at #5f9f75 is only 2.78:1 on paper, so it is used for fills and rules, and a two-stop accent keyed to the ground carries text and focus rings: deep stop on light grounds, light stop on the ink ground. One hue.
- No eyebrows, section numbers (apart from the folio, where sequence is the information), scroll cue, em dash, gradient or glow. No invented statistics: every figure is in `moss.ts`, or the 20 scale and bar widths computed from it.
- Core honesty: the only real depth is 30 cm. Layers carry real values (12,400 hectares, 9,640 cores, 3.8 times, 214 partners, a one-week reply). The colophon says the core is a schematic.
- Arabic: all letter-spacing removed, logical properties, mirrored layout, Latin digits isolated in `<bdi dir="ltr">`.

## Measured result and feel check (added after the build)

Length at 1440x900: English 8.4 viewport-heights, Arabic 8.7 (plan row says 9; the phone runs about 10). Chapter heights in vh: thesis 1.87, field notes 0.84, climate data 2.04, partner stories 1.63, plant a project 1.00, title page 1.00. Chapter 3 is the longest and so owns the thickest core layer, but only by about 0.17vh over chapter 1, which is a thin margin.

**Feel check.** This was not fully cold: BRIEF.md had been written earlier in the same session, so the words below come from the contact sheets and shots, written before re-reading the curve above.

| Act | Felt (one word) | Intended | Verdict |
|---|---|---|---|
| Title page | Calm | Stillness | agrees |
| The thesis | Wonder | Wonder | agrees; it is the loudest moment on the sheet (dark cut, sun rising, seedlings opening) |
| Field notes | Pause | Settling | agrees, though thin |
| Climate data | Steady | Weight | partly: the bars read as calm, not heavy |
| Partner stories | Warm | Intimacy | agrees |
| Plant a project | Closure | Resolve | agrees, stronger since the core now seals |

**Disagreement and what changed.** The largest visual change on the contact sheet is chapter 1 (the one scrub), not the margin core, so the page's visible peak is the film, while the intended peak (the core) is persistent and quiet. The brief was not rewritten. The fix made was to give the core a closing gesture: when the last layer completes, a rule seals across the whole margin and the 30 cm mark goes dark (desktop). The core still reads as a steady companion more than a peak; that is a known weakness, left as an honest finding. A phone shows the same behaviour without the seal rule.

## Verification run (headless Chrome, localhost)

English and Arabic, desktop 1440x900, phone 390x844, reduced motion (desktop): `shoot.mjs` reports no dead scroll, the scrub clip moves whenever on screen, console errors and failed requests empty. Measured: no horizontal scroll at either width; text contrast on the render, all text at least 6.19:1; tap targets at least 44px on the phone (margin widened to 48px after the first audit found the layer links at 43px); tab order follows the DOM and every focused control shows a themed ring (inputs show a 2px accent underline); the form validates, shows the success string, and sends nothing. Not covered: a real phone (iOS decode, Low Power Mode, touch scroll), reduced-motion on the phone, an Arabic proofread by a native reader, and a pointer-hover pass. Pan rails are not used.
