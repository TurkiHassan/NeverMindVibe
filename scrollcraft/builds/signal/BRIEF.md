# BRIEF: Signal, a silent spatial mixer

**Self-authored under explicit creative delegation.** No interview. Every decision below is authored, not quoted. Evidence used: `apps/client/src/pages/atlas/domains/content/signal.ts` (EN and AR copy and figures, all sample content), `base.ts` (palette: paper #170d1c, ink #f8edff, accent #e592ff), `type.ts` (EN Anybody + Epilogue, AR Lalezar + Almarai), the 4 s ripple film `signal-hero.mp4`. Nothing generated. The page says on its face that the brand and figures are sample content, that the preview is silent, and that the form sends nothing.

## The eight topics

1. **Vibe.** Nocturnal, kinetic, hushed. From other media: a listening-room door closing, a level meter at rest, a pebble in still water.
2. **Journey.** A ripple opens (hero), six tracks laid across a stereo field, the room that was built to disappear, the room opening around you with one artist's sentence, then one booking.
3. **Energy curve.** Low and held, playful, quiet, one long swell, a resolved stop.
4. **Feeling curve and the ONE moment.** Below. The moment: the ripple film opens under your hand until it fills the frame.
5. **What no other site does.** A spatial mixer: the pointer (or the puck, or the arrow keys) is your listening position. Six tracks sit at fixed places in a drawn stereo field and their L/R meters follow where you stand. The bottom bar's now-playing title is whichever meter is loudest. Silent on purpose.
6. **Range.** Premium-minimal with a nocturnal edge. Flat plates, one accent, no glow.
7. **One world or distinct scenes.** Distinct scenes that share one film (Filmic one-shot grammar, scored as two scrubs around a pin and a flow).
8. **Assets.** Owned: the hero film (re-cut as two non-overlapping scrub clips, 0 to 1.6 s and 2.4 to 4.0 s, dense-GOP encodes plus phone variants and posters) and the real figures in `signal.ts`. Nothing generated.

Subject: Signal is a spatial audio studio for artists. The visitor must believe the room adds nothing of its own. One action, one label everywhere: **Book a session** (AR: «احجز جلسة»).

## Feeling curve (written before the acts)

| # | Act | Feeling | Cause on screen |
|---|---|---|---|
| 1 | Scrub, hero | Held breath | Greet headline in the start corner, ripple small and bright under the hand |
| 2 | Pin, tracks | Play | Six meters moving with your pointer, the list leaning toward where you stand |
| 3 | Flow, room | Hush, trust | A ruled spec sheet and a plan, no film, nothing moves but the wipe |
| 4 | Scrub, peak | Awe | The film opens until the room fills the frame, then one sentence, then four real figures |
| 5 | Pin, close | Resolve | A flat disc follows the pointer, one form, one button |

## The peak

What a visitor would say: *"The room opened around me as I scrolled."* Lives in act 4, the largest span (3.2 vh declared). Act 3 is the quiet in front of it.

## Tell-someone sentence

It's the site where you stand inside a stereo field, the meters lean toward you, and the room opens around you as you scroll.

## Authored silence

Act 3 (the room spec) carries no film and no cue; it is a flow act and scrolls as a document. Cues are absent in act 5 by design (the close holds from the first frame).

## Why the other seven grammars lost (Filmic one-shot is the grammar every earlier build used)

- Chaptered editorial: Moss already owns printed chapters; Signal's product is a place you hear, not a text you read.
- Live surface: Orbit and Ledger own it; the mixer here is one device, not the whole page.
- Split stage, Typographic poster, Gallery: Pulse, Spark and Arc own them, and nothing in the content is a pair, one line, or a collection of objects.
- Continuous world: needs a flight of assets that do not exist; the single 4 s clip would be stretched.
- Rhythmic cutlist: the tone is hush, not cuts.
Filmic won because the owned asset is one film and the pitch is a feeling of space, so scrub is the honest hero. To avoid the template trap it is limited to two scrubs, with a pin and a flow between them.

## Fingerprint (copied from PLAN.json)

| Dimension | Value |
|---|---|
| Grammar | Filmic one-shot |
| Nav | Fixed minimal bar at the bottom centre: now-playing title plus one CTA |
| Hero | Full-bleed scrub of the ripple film, corner-anchored greet headline |
| Seq | scrub, pin (track list), flow (room specs), scrub, pinned close; 5 acts. As built 10.0 vh (declared spans 2.2 + 2.4 + flow + 3.2 + 1.2) |
| Close | Pinned spotlight close with a date input for Book a session |
| Sig | Spatial mixer: pointer position pans the track list across a drawn stereo field, moving each track's level meters |
| Peak | The room opens around you as the ripple film scrubs under your hand |

## Taste decisions and notes

- Two families per language. Lalezar has one weight, so Arabic display is set at 400 (no faux bold). Arabic letter-spacing is 0.
- Left and right in the field are physical in both languages (stereo is not reading order); the field and meters carry `dir=ltr`. Everything else is mirrored with logical properties. `lang=ar dir=rtl` sit on `<html>` as in the Pulse twin (the skill is silent on this).
- Latin runs and figures in Arabic are wrapped in `<bdi dir="ltr">`. Western digits are used throughout, as in the content file.
- Text over film sits on flat canvas-coloured plates, never a gradient scrim. The close spotlight is a hard-edged flat disc (`clip-path: circle()` at `--sc-mx/--sc-my`, centred fallback when the pointer is inert).
- Content-file success line promises a reply in two days; the page appends "This is a sample studio, so nothing was sent."
- Phone: the textarea of the form is hidden to keep the pinned close inside one screen; track metadata is hidden; the pointer is replaced by the puck (a real `input type=range`, 44 px).
- Reduced motion: clips are never fetched; the peak is a crossfade (driven by `--sc-p`) between two stills, the mixer reacts to direct input only.
