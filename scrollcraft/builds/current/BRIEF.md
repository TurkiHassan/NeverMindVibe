# BRIEF: current, five project names stretched to 3.1 gigawatts

**Self-authored under explicit creative delegation.** No interview. Every decision below is authored, not quoted. Evidence used: `apps/client/src/pages/atlas/domains/content/current.ts` (EN and AR copy and figures, all sample content), `base.ts` (palette: black #10150e, ink #eff9e7, voltage #c4ff3d; CTA label "Connect the next site" from the domain tree), `type.ts` (EN Big Shoulders Display + Chivo, AR Changa). No video or stills used, nothing generated: the page is type only. It says on its face that brand, projects and figures are sample content.

## The eight topics

1. **Vibe.** Bold, infrastructural, flat. Black ground, one voltage accent. References from other media: a substation warning sign, a bar chart in a printed annual report, a ship's draught mark.
2. **Journey.** One figure (3.1 GW), what the grid did quarter by quarter, one operator's voice, the five projects as five words stretched to their capacity, one plain line to connect.
3. **Energy curve.** Loud, plain, silent, loudest, quiet.
4. **Feeling curve and the ONE moment.** Below. The moment: five project names stretch until their lengths add up to 3.1 GW.
5. **What no other site does.** The bars of the chart are the project names themselves, stretched in width in proportion to their real planned megawatts, with the live share filled in voltage inside the letters, while a unit readout on the page edge counts the capacity up to 3.1.
6. **Range.** Brutalist-leaning poster, but with real data. Not playful, not premium-minimal.
7. **One world or distinct scenes.** Neither. Typographic poster: five acts, each one a hard cut of ground.
8. **Assets.** Only the sample content. Hero film and stills deliberately unused (the figure is the picture).

Subject: current is grid-scale clean energy. The visitor must believe the 3.1 GW is a sum of five named, measurable sites. One action, one label everywhere: **Connect the next site** (AR: «اربط موقعك القادم»).

## Journey

1. The figure (3.1 GW)
2. What the grid did (five dated milestones)
3. A voice from the control room and four facts
4. The five projects stretched to capacity (the sum)
5. Connect the next site

## Feeling curve (written before the acts)

| # | Feeling | Cause on screen |
|---|---|---|
| 1 | Impact | "3.1 GW" in voltage at 40vw; no nav, only a lede and one underlined link |
| 2 | Steady trust | Voltage ground, small black type, five dated rows with heavy rules |
| 3 | Quiet, intimacy | Black, lots of room, one quote and four facts |
| 4 | Awe, then proof (peak) | Five names lengthen one after another, the edge readout counts 0.0 to 3.1, the live share fills each name |
| 5 | Resolve | Page inverts to pale, smallest type, a plain underlined line |

## The peak

What a visitor would say: *"The project names got longer until they were the size of the capacity, and the counter at the side landed on 3.1 gigawatts."* Lives in act 4, 3.4 of 7.5 viewport-heights (45%), the largest span. Act 3 is the silence in front of it.

## Tell-someone sentence

It's the site where the project names are the bar chart: they stretch to their megawatts until they add up to 3.1 GW.

## Authored silence

Hero p 0.2 to 0.5 (the figure is read) and peak p 0 to the first stretch and p 0.86 to 1 (the sum held). Marked `data-sc-verify-hold` on the stage.

## Fingerprint (copied from PLAN.json)

| Dimension | Value |
|---|---|
| Grammar | Typographic poster |
| Nav | None; one huge unit readout (GW) rides the inline-start edge, live count in the peak |
| Hero | The figure 3.1 GW at 40vw |
| Seq | Five acts, 7.5vh: word, paragraph, paragraph, word (peak), close |
| Close | Page inverts to pale, smallest type, CTA a plain underlined line |
| Sig | Type as chart: each project name stretched in width to its planned MW |
| Peak | Five names stretch until together they add up to 3.1 GW |

Chart rules: every width and count comes from the content file. Planned MW: 900, 600, 400, 800, 400 (sum 3,100). Live MW: 720, 410, 240, 450, 160 (sum 1,980, shown as plain arithmetic on the page). The words start at their natural width and are sized so the narrowest capacity fits its name at natural width; all others lengthen (scaleX of the whole word, never letter-spacing).

Phone and RTL realisations: on phones the five names stand as vertical columns (rotated, bars grow upward) because horizontal names cannot reach legible size in 350px; the readout strip narrows. In Arabic everything is mirrored with logical properties (the readout rides the right edge, words grow leftward from the right) and Arabic words are only scaled whole, so letter joining is untouched.

## Taste decisions

Two families per language (Big Shoulders Display and Chivo; Changa). Three flat grounds (black, voltage, pale), hard cuts, focus rings matched to ground. No eyebrows, section numbers, scroll cue, em dash, gradient, glow. Planned share of each name is #7d9a5a on black (5.85:1). Reduced motion: no scrubbing, names shown fully stretched and filled, readout fixed at 3.1.
