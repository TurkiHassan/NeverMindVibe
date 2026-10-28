# BRIEF: Kernel, scroll is the debugger

**Self-authored under explicit creative delegation.** No interview. Evidence: `kernel.ts` (EN and AR copy, figures, all sample content), `base.ts` (white + hyperblue: ink #111827, paper #f5f7fb, accent soft #dfe6ff), `type.ts` (EN Geist + Geist Mono, AR Rubik). `base.ts` also lists Space Grotesk and Inter; `type.ts` was followed. No generated assets, and the hero film and stills are deliberately unused: the hero is an editor, not a picture. The page says on its face that brand, invoice and figures are sample content, and that the run happens in the browser and nothing is sent.

Token note: hyperblue #3c6cff measures 4.39:1 on white and 4.10:1 on paper, so it cannot carry small text. The single accent is nudged to #2f5be8 (5.55:1 on white). It is used for the current-line bar, current-step marker, keywords on white, and the one button. It never sits behind small text on the soft tint (4.47:1); the current line there is ink.

## The eight topics

1. **Vibe.** Modular, exact, quiet. A debugger, a build log, a bank statement that never lies. References from other media: a stepping debugger paused on a breakpoint, a railway signal box diagram, a printed ledger with a ruler under the current line.
2. **Journey.** An editor already running, five steps read as code, a flag raised and reviewed, a bill booked, then your own text run through the same code.
3. **Energy curve.** Steady and exact for four steps, a held quiet at Review, one long confident climb to the booking, a resolved stop.
4. **Feeling curve and the ONE moment.** Below. The moment: you scroll and a workflow runs one line at a time until the bill is booked.
5. **What no other site does.** Scroll is the debugger. It steps execution line by line, the current line highlights, variables fill in, and the log trace grows. Every value is computed by one `runWorkflow(text)` from the sample invoice, not painted.
6. **Range.** Premium-minimal, dense. Light ground, white editor, one dark log. Not brutalist, not playful.
7. **One world or distinct scenes.** Neither. One held surface (Live surface), one pinned editor, then one pinned console.
8. **Assets.** None generated. Real figures and copy from `kernel.ts`: the Kern M card inside the Reason step, the safety quote inside Review, the four facts inside Ship.

Subject: Kernel is an applied AI platform. The visitor must believe a workflow is code you can read and replay, with review as a step. One action, one label everywhere: **Start with one workflow** (AR «ابدأ بسير عمل واحد»).

## Journey

1. Already running (the editor mid-run on line 4, a live log, hero)
2. Ingest and Retrieve (the document becomes `doc`, the vendors index returns `facts`)
3. Reason (six lines, one at a time, `draft` fills, one flag)
4. Review (the quiet beat: queued for a named reviewer, approved)
5. Ship, the peak (booking slip assembles, the total counts, BILL-2209 booked)
6. Your turn (the same logic on pasted text, with a real button)

## Feeling curve (written before the acts)

| # | Feeling | Cause on screen |
|---|---|---|
| 1 | Recognition, calm | The editor is already executing line 4 with three log lines and a blinking caret |
| 2 | Curiosity | Ingest then Retrieve: each variable flips from `undefined` to a value as its line passes |
| 3 | Conviction | Reason walks six lines one by one, the log names the model and its real figures |
| 4 | Doubt, quiet | A flag is raised. Nothing moves for a beat, then a named reviewer approves |
| 5 | Awe, relief (peak) | Ship: the slip fills row by row, the total counts to 278.00, the bill is booked |
| 6 | Agency | The same five steps on text you paste, ending in a plain verdict |

## The peak

What a visitor would say: *"I scrolled and a workflow ran one line at a time until the invoice was booked."* Lives in beat 5, p 0.56 to 0.97 of the 7vh pin (41%, about 2.9vh), the largest span by a wide margin (Reason is 22%). Beat 4 (p 0.49 to 0.555) is the silence in front of it.

## Tell-someone sentence

It's the site where scrolling steps through an AI workflow like a debugger, one line at a time, until the bill is booked.

## Authored silence

p 0 to 0.04 (the hero is read), p 0.49 to 0.555 (Review is held), p 0.965 to 1 (resolved), and the whole close console (waiting for your click). All set `data-sc-verify-hold`. Everything else reports a real painted state in `data-sc-verify-state`.

## Why the other seven grammars lost

Why Live surface: the product is a thing you run, so the proof is running it.
- Filmic one-shot: the assets would be generated film of a metaphor, and the truth is a trace of code.
- Chaptered editorial: five steps read as chapters lose the single held surface that makes stepping legible.
- Split stage: there is no pair to compare. There is one execution.
- Continuous world: no flight, no assets.
- Typographic poster: the copy is long and factual.
- Gallery or catalog: the four model cards are folded into one step instead of becoming a grid.
- Rhythmic cutlist: the tone is exact and unhurried.
Kernel is the third Live surface. Against Orbit and Ledger: no top bar, no bottom rail or playhead, no tabs, no stepper, no command-line prompt. Its chrome is a left sidebar of the five steps; its close is a textarea plus a Run button on pasted text.

## Fingerprint (copied from PLAN.json)

| Dimension | Value |
|---|---|
| Grammar | Live surface |
| Nav | App chrome: left sidebar of the five workflow steps (Ingest, Retrieve, Reason, Review, Ship), clickable |
| Hero | A code editor already executing the invoice-triage workflow with a live log |
| Seq | One 7vh pinned editor stepping through the five steps, then a 1.2vh pinned run console; 8.2vh |
| Close | A real Run button that executes the workflow on pasted invoice text in the browser (labelled sample logic) |
| Sig | Scroll is the debugger: steps execution line by line, current line highlights, variables fill in, log trace grows |
| Peak | You scroll and a workflow runs one line at a time until the bill is booked |

Phone and RTL realisations: on phones the sidebar becomes a top strip of five 44px buttons under a brand and CTA row, the editor wraps long lines and windows to the current line, the variables and slip panels collapse into a one-line state under the editor, and the Arabic switch moves to the close footer. On the Arabic page the layout mirrors with logical properties (sidebar on the right, run column on the left) while the code, identifiers and figures stay LTR in `<bdi dir="ltr">`.

## Taste decisions

Two families per language (Geist and Geist Mono; Rubik and Geist Mono). White card on paper, one dark log. Flat accent, no gradient, glow, eyebrow, section number, scroll cue or em dash. Reduced motion: no pulsing dot, no blinking caret, no smooth jumps; scroll still steps the run because the visitor drives it. Run console rows appear at once.

## Verification (see lab/)

`lab/qa.mjs` checks text contrast on the composited page at six scroll positions, tap targets, tab order with focus ring, a sidebar step click, and the Run button on sample, no-flag and junk text, in EN and AR at 1440x900, 390x844 and reduced motion. `shoot.mjs` contact sheets and `report.json` are in `lab/*-desktop`, `lab/*-phone`, `lab/*-reduced`. `src/` holds the template and generator that write both HTML files.
