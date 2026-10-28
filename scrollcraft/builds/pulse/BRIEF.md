# BRIEF: Pulse, one care plan read two ways

**Self-authored under explicit creative delegation.** No interview. Every decision below is authored, not quoted. Evidence used: `apps/client/src/pages/atlas/domains/content/pulse.ts` (EN and AR copy and figures, all sample content), `base.ts` (palette: ink #10223d, paper #eff6ff, accent #ff8a65, border #cbdcf5), `type.ts` (EN Red Hat Display + Red Hat Text, AR Cairo), the 4 s hero film and `pulse-4.webp`. Nothing generated. The page says on its face that brand and figures are sample content.

## The eight topics

1. **Vibe.** Clinical but warm. Two grounds that never blend: paper and deep navy, one apricot accent. References from other media: an ECG monitor at a bedside, a two-sided printed leaflet, a split-flap board that settles.
2. **Journey.** Two readings of one plan, the plan point by point, what changed across 41 clinics, the research behind it, then the two columns become one and the page asks for one action.
3. **Energy curve.** Calm, steady build, a held quiet, one long swell, a resolved stop.
4. **Feeling curve and the ONE moment.** Below. The moment: the divider slides away and one heartbeat carries both sides of care.
5. **What no other site does.** A single heartbeat trace crosses the divider, its sweep speeds up with scroll speed, and each beat lights the next item in the plan, left column then right.
6. **Range.** Premium-minimal and clinical, light on one side, dark on the other. Not brutalist, not playful.
7. **One world or distinct scenes.** Neither. One held stage with two halves (Split stage).
8. **Assets.** Owned: the Pulse hero film and four stills, plus the real figures in `pulse.ts`. Used: the film as a small loop in the close (desktop, motion allowed only), `pulse-4.webp` as its poster and the phone still. Stills 1 to 3 unused on purpose.

Subject: Pulse is care infrastructure for health teams. The visitor must believe the person and the clinician look at the same plan. One action, one label everywhere: **Bring Pulse** (AR: «أدخل «نبض»»).

## Journey

1. Two readings (the plan for a person, the changes for a clinician, side by side)
2. The plan, item by item (4 for people, 3 for clinicians)
3. Outcomes (98.4, 43, 76, 92, two per side)
4. Research (the quote on one side, the study facts on the other)
5. One line (the divider leaves; the seven items sit on one waveform)
6. Bring Pulse (the clinician column takes the full width and holds the form)

Grammar beats in the one 9vh pin: 1+2 hero and plan (p 0 to 0.22), 3+4 evidence (0.22 to 0.50), 5 peak (0.50 to 0.88, 38% of the pin), 6 close.

## Feeling curve (written before the acts)

| # | Feeling | Cause on screen |
|---|---|---|
| 1 | Recognition, calm | Both headlines readable at once, 50/50, one low heartbeat running under the seam |
| 2 | Curiosity | The seven plan items appear in reading order, each lit by the beat as it passes |
| 3 | Conviction | Four real figures count up in their own halves |
| 4 | Intimacy, quiet | One quote and four facts, nothing else moves, the trace dips lower |
| 5 | Relief, awe (peak) | The divider slides away, the trace swells to fill the screen, items from both sides land on the same line |
| 6 | Resolve | One column, one form, the heartbeat settled back under it |

## The peak

What a visitor would say: *"The wall between the two columns slid away and it turned out to be one heartbeat carrying what the patient gets and what the clinician gets."* Lives in beat 5, the largest span on the page. Beat 4 is the silence in front of it.

## Tell-someone sentence

It's the site where a heartbeat crosses the wall between patient and clinician, speeds up as you scroll, and then the wall slides away.

## Authored silence

p 0 to 0.08 (the hero is read) and p 0.44 to 0.50 (research held, trace dips) and p 0.9 to 1 (the resolved close). All three set `data-sc-verify-hold` on the stage. Everything else reports a real painted state in `data-sc-verify-state`.

## Why the other six grammars lost (and the filmic one-shot)

Why Split stage: the product is one plan with two readers, so the comparison is the argument.
- Filmic one-shot: one 4 s clip would be stretched into a film and the product is not a single arc, it is a pair.
- Chaptered editorial: forbids the held surface, and the pair would become two chapters read one after the other instead of at once.
- Live surface: the sample content has no state to compute besides the bars, and a fake care dashboard breaks the honesty rule.
- Continuous world: needs a long unbroken flight of assets that do not exist.
- Typographic poster: the copy is long and factual, not one claim.
- Gallery or catalog: nothing here is a collection of objects.
- Rhythmic cutlist: the tone is calm care, not a pulse of cuts (the heartbeat is the only rhythm and it is a rhythm inside one stage).

## Fingerprint (copied from PLAN.json)

| Dimension | Value |
|---|---|
| Grammar | Split stage |
| Nav | The divider is the chrome: labels For people and For clinicians plus argument progress |
| Hero | 50/50 first screen, both headlines readable at once |
| Seq | One long pin (9vh, four beats) with the divider driven from --sc-p |
| Close | The collapse: the divider travels to the left edge and the clinician column takes the full width holding the CTA |
| Sig | One heartbeat trace that crosses the divider and speeds up with scroll speed, linking both columns' content |
| Peak | The divider slides away and one waveform ends up carrying both sides of care |

Phone and RTL realisations of the same plan: on phones the seam is horizontal (people above, clinicians below), the heartbeat runs down the end edge, and the collapse travels to the top. On the Arabic page everything is mirrored with logical properties: the people column and the divider start at the right, the trace sweeps right to left, the divider collapses to the right edge.

## Taste decisions

Two families per language (Red Hat Display and Text; Cairo). Two grounds with theme-matched focus rings (navy on paper, apricot on navy). No eyebrows, section numbers, scroll cue, em dash, gradient text, glow or cards. Contrast measured on the render: minimum 5.77:1 across 340 resting text samples. Reduced motion: no autonomous sweep, no pulses, the divider becomes a crossfade at p 0.52 to 0.62, labels still arrive one by one.
