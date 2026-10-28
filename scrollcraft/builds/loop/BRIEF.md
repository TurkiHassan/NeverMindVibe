# BRIEF: loop, eight cuts that hand back to the first

**Self-authored under explicit creative delegation.** No interview. Every decision is authored. Evidence: `content/loop.ts` (EN and AR copy, six tools, five release notes, one quote, four facts, all sample content), `base.ts` (palette: ink #2a214a, paper #f6f0ff, coral #ff756e, soft #ffe0e1, line #e0d4f2), `type.ts` (EN Rethink Sans, AR Cairo), the hero film and four stills. Nothing generated. The page says on its face that brand, releases, figures and quote are sample content.

## The eight topics

1. **Vibe.** Bright, modular, a little relentless. References: a tape loop, a stamp card, a drum machine pattern that comes round again.
2. **Journey.** The promise on a film, six tools as hard cuts, one maker's quote and the real figures, one form, then the page begins again.
3. **Energy curve.** Brisk from frame one, steady through the tools, a held dark cut for the quote, abrupt coral close, then the re-entry.
4. **Feeling curve and the ONE moment.** Below. The moment: you scroll past the end and the page starts again with a new release note.
5. **What no other site does.** The page is a loop. Scrolling past the last cut re-enters the first with the next release note in focus, so it never hits a footer. The five release notes take turns, one per lap; the note in focus fills its slip in the hero, lights its box in its tool's cut and marks that tool's tab.
6. **Range.** Playful-modular, flat grounds, rounded blocks, no gradients.
7. **One world or distinct scenes.** Distinct scenes, hard cuts, no pin.
8. **Assets.** Owned film (hero) and four stills mapped as the content maps them. Only figures in `loop.ts`.

Subject: a studio for makers. The visitor must believe their work can keep moving. One action, one label everywhere: **Start a loop** (AR «ابدأ حلقة»). The form is local only.

## Fingerprint (PLAN.json, built as written except where noted)

Rhythmic cutlist. Nav: loud toolbar, the six tools as full-width coral tabs that jump to their cut. Hero: the tagline on the looped film, cutting to the first tool (Scratchpad) inside one viewport on desktop. Seq: eight cuts, no pin, 8.75vh measured at 1440x900 (9.1 to 9.4 on a phone). Close: abrupt coral CTA cut, the button restarts the loop, email field. Sig: the infinite loop page. Peak: past the end the page starts again with a new note.

Cuts (min-height, svh): hero + Scratchpad 1.0, Moodwall 1.1, Draft Room 1.1, Review Link 1.1, Rhythm Calendar 1.1, Launch Pad 1.1, quote and facts 1.0, close 1.25. The five release notes and the quote ride inside those cuts, so there are exactly eight.

## How the loop works, and how to leave it

After the close the page holds an inert, aria-hidden, id-free copy of the first two cuts (built by JS, only while the loop is on). When the reader scrolls into it, the page jumps back by exactly the height of the real pass and the next note replaces the old one. The copy is pixel-identical to the real cut and its film is time-synced, so there is no visible seam. The jump is forward only.

Exits:
- **Loop switch** in the bar (a real button, `aria-pressed`, third in tab order). Off: no copy, the page ends at the form. Remembered for the session.
- **End** (and Cmd+Down) with the loop on goes to the form, not into the copy, so keyboard users cannot be carried round by it.
- **Screen readers and Tab** see one linear pass: the copy is `inert` and `aria-hidden`, so there is nothing to read or focus after the button; Tab leaves the page.
- **Reduced motion**: the loop starts off and there is no copy. The page is finite. The Start a loop button is then a user-initiated jump to the top with the next note (focus moves to the h1). The user may switch the loop on.
- Each wrap or restart is announced once in a polite live region with the note now in focus.
- `?loop=off` starts with the loop off (used by the verification harness, whose last sample would otherwise land in the copy).

## Feeling curve (written before the acts)

| # | Feeling | Cause on screen |
|---|---|---|
| 1 | Recognition, brisk | The ring film, the tagline, the first tool and a coral note slip in one screen |
| 2 to 6 | Rush, with a different composition per cut | Five tools, five grounds and layouts, a hard cut each time, the active tab inverts |
| 7 | Quiet, held | One quote and four facts on ink, nothing else |
| 8 | Abruptness | Coral, huge type, one field, one button |
| 9 (peak) | Delighted vertigo | Scrolling on, the film hero returns and the slip now carries the next release; the tab dot moves |

## The peak

What a visitor would say: *"I scrolled past the end and the page started over, with a new release note this time."* It lives in the re-entry after the close; the close is the largest cut (1.25) and the quiet quote cut sits before it.

## Tell-someone sentence

It's the site where you scroll past the end and the page starts again, with the next release note waiting.

## Authored silence

None declared. `data-sc-verify-state` on the tab bar publishes which cuts are on screen and where (sixths of a viewport), the lap's note, and the loop state, so every scrolled position reports a different state.

## Why the other seven grammars lost

The product is a rhythm of independent tools, and the plan asks for a cycle. Filmic one-shot needs a long clip; Chaptered editorial reads in one direction and ends; Split stage and Live surface have no pair or state to show; Continuous world has no assets; Typographic poster has too much copy; Gallery has no objects to browse. A cutlist that returns to cut one is the only one where the ending can be a beginning.

## Taste decisions

Two families (Rethink Sans; Cairo). Coral is a fill only (never text on paper, 2.3:1): ink on coral is 5.7:1, coral on ink 5.7:1. Hero text sits on an opaque ink plate so contrast does not depend on a film frame. No eyebrows, section numbers, lap or cut counters, scroll cue, em dash, gradient or glow. Reduced motion: no film, no stamp, no toast fade, no wrap.
