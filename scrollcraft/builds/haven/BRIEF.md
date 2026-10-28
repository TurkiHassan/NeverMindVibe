# BRIEF: Haven, a day you can turn

**Self-authored under explicit creative delegation.** No interview; every decision below is authored, not quoted. Evidence: `haven.ts` (EN and AR copy and figures, all sample content), `base.ts` (palette: paper #1f1a17, ink #fff5e3, accent #eabf7a), `type.ts` (EN Gilda Display + Mulish, AR Aref Ruqaa + Noto Naskh Arabic), the 4 s candle film and the PLAN.json row. Nothing generated. The page says on its face that brand, imagery and figures are sample.

## The eight topics

1. **Vibe.** Hushed, warm, unhurried. A stove, a bowl of water, a tide table chalked on a wall. Not a hotel site.
2. **Journey.** Arrive in a quiet frame, see four of the nine rooms, live one day at the house, say when you would like to come.
3. **Energy curve.** Very low, a gentle lift, one long slow swell, a held stop.
4. **Feeling and the ONE moment.** Below. The moment: you turn the day to dusk and the whole house lights its stoves.
5. **What no other site does.** One handle (the dial in the top bar) is the time of day. It regrades the film, the stills, the ground, the soft ink, the accent and the house together, and the page turns it for you as you scroll.
6. **Range.** Premium-minimal, warm, low density.
7. **One world or scenes.** Four acts of one filmic one-shot, joined by the single time value.
8. **Assets.** The Haven hero film (scrubbed, re-encoded dense GOP, desktop and phone) and its poster; the four stills, cropped four ways (they are the same bowl, and the page says so). The real copy in `haven.ts`.

Subject: a nine-room stay by the sea. The visitor should believe the house is slow on purpose. One action, one label everywhere: **Make it yours** (AR «اجعلها لك», the last item of the domain tree).

## Page grammar

Filmic one-shot, as planned. Four acts, 9.4 viewport-heights (desktop; the figure moves 9.3 to 9.6 with flow height and viewport):

| Act | Device | Span |
|---|---|---|
| Hero | scrub, poster first, slow lerp 0.1 | 2.0 |
| The rooms | flow, native rail | about 1.0 |
| The ritual (peak) | pin, time-driven | 4.9 |
| Close | pin, stay dates, magnetic CTA | 1.4 |

## Signature move

**The time-of-day handle.** `T` (6 to 23 hours) is the one state. Scroll writes it along the journey (dawn on load, morning through the rooms, the day in the ritual, night in the close); the dial overrides it until the reader scrolls 0.3 viewport-heights away. The ritual list, the large clock, the sun and moon, and the nine stoves all read `T`, so dragging the dial and scrolling give the same frame. Stoves catch one by one from 17:12 and are all lit by 18:30.

## Feeling curve (written before the acts)

| # | Feeling | Cause on screen |
|---|---|---|
| 1 | Hush | Poster first: one candle on a bowl, the ripple moves only as far as your hand, headline lower start, the dial in dawn grey |
| 2 | Curiosity | Four rooms on a rail, each with its price and its weather |
| 3 | Settling (the quiet before the peak) | The day begins at 08:00, the house is a dark outline under a pale sky, nothing lit |
| 4 | Warmth, then awe (peak) | 13:00 to 18:30: the ground cools toward ember, the sun drops, nine windows fill with light one by one |
| 5 | Held resolve | Night ground, one form, the CTA that follows the pointer |

## The peak

*"I turned the day to dusk and the whole house lit its stoves."* Lives in act 3 (the ritual), the largest span (4.9 of 9.4), with about 1 viewport-height of scroll owned by 17:00 to 18:30. The rooms act before it is the quieter one.

## Tell-someone sentence

It's the site where you turn the hour of the day with your thumb and a small house by the sea lights its nine stoves.

## Authored silence

The first 0 to 0.08 of the ritual (08:00 hold) and the whole close hold still on purpose: only the clock, or nothing, changes. `data-sc-verify-state` on the ritual stage carries `T|entry|stovesLit` so the harness can tell it from dead scroll.

## Fingerprint (as planned, not edited here)

Grammar Filmic one-shot. Nav: fixed top bar with a live dial and one CTA (no menu). Hero: slow poster-first scrub, greet headline lower start. Sequence: scrub, flow, pin, pinned close, 4 acts, 9.4vh. Close: pinned, stay-dates input, magnetic CTA. Signature: the time-of-day handle.

## Taste decisions

Flat single accent that shifts hue with the hour (peach, straw, ember, candle), never a gradient or a glow. Grounds stay dark so ink holds 6:1 or better at every point of the dial (swept in node, not only at the stops). No eyebrows, no counters, no scroll cue, no em dashes, no invented statistics. Phone is composed separately: the dial thumb and clock stay in the bar, the ritual notes shrink to the active entry, the form drops the free-text field.
