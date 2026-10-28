# BRIEF: ledger, the cash table that reconciles under your scroll

**Self-authored under explicit creative delegation.** No interview. Everything below is an authored decision, not a quotation. Evidence used: `apps/client/src/pages/atlas/domains/content/ledger.ts` (EN and AR copy and the sample figures), `domains/base.ts` (palette, nav tree), `domains/type.ts` (font pairs). ledger is a fictional brand; every figure on the page is sample content and the page says so.

## The eight topics

1. **Vibe.** Tactical, high-trust, dense, calm hands. References from other media: a bank reconciliation screen at month end, an airport baggage reclaim board settling to empty, a cash-register Z report. Not a brochure.
2. **Journey.** You land inside the morning cash table with four lines flagged as unmatched. You scroll and the run reconciles them one line at a time until the total is exactly 0.00. The surface then moves through its other two tabs (Risk radar, Playbooks) and hands you a first-run stepper with a real field in it.
3. **Energy curve.** Held, then one sustained run, a long exhale, a lightly busy middle, a quiet input.
4. **Feeling curve and the ONE moment.** Below. The moment: the unmatched total reaches exactly 0.00.
5. **What no other site does.** A running reconcile: the unreconciled total ticks down line by line as you scroll, computed from the table's own data.
6. **Range.** Dense, brutalist-adjacent, tool-first. Small type, tabular numerals, hairlines instead of cards. The taste floor holds (contrast, focus, spacing scale).
7. **One world or distinct scenes.** Neither: one surface that holds still while its state advances (Live surface).
8. **Assets.** Owner's project has the 4 s `ledger-hero.mp4` and four stills. **None are used.** The film is a painted 3D bar chart: an image posing as a surface, which the Live-surface honesty rule forbids, and its bars cannot be tied to the table. Every visual on the page is markup computing from the page's data.

## Subject

Treasury software that reconciles every bank account overnight so finance sees one true number each morning. Visitor must believe: this tool gets the numbers to zero without anyone asking which one is right. One action, one label: **Open an account** (chrome and heading) with the committing button **Connect your first bank** inside the stepper.

## The derivation of the unmatched total (reproducible by hand from ledger.ts)

ledger.ts has balances and 24h change percentages, not statement lines. The demo scenario is stated on the page: *the 24h movement of each entity is the line waiting to be matched.*

- movement = balance x change / (100 + change), in integer cents, absolute value shown.
- GBP 4,218,330 at +1.2% gives 50,019.72. EUR 1,904,075 at -0.4% gives 7,646.89. USD 7,560,912 at +3.1% gives 227,340.71. AED 2,310,448 at +0.0% gives 0.00 (already matched, not flagged). USD 12,880,200 at +2.2% gives 277,264.58.
- Total at the start: 562,271.90 (sum of the five amounts at face value, **no FX conversion**, stated on the page). Per-currency totals (GBP, EUR, USD, AED) are shown under it so the number is never a hidden mix.
- Cleared in table order, one line at a time; each line ticks down to 0.00 over its own scroll segment. All arithmetic is in integer cents so the end is exactly 0.00, not rounded to it.

## Page grammar: Live surface

Why the other seven lost:

- **Filmic one-shot:** the only film is a painted chart, and a carried-by-camera story would fake a product that is really a table.
- **Chaptered editorial:** a printed feature forbids a running state; the honest pitch is "watch it reconcile".
- **Continuous world:** no geography, and it needs a long unbroken flight of assets that do not exist.
- **Typographic poster:** the asset is a number that moves, not a sentence.
- **Gallery / catalog:** there are five accounts, not a collection to walk.
- **Split stage:** the argument is not two sides; it is one state resolving.
- **Rhythmic cutlist:** a finance buyer is not looking for a pulse, and nothing here is held for it to pulse against.

## Fingerprint (copied from PLAN.json, ledger row)

| Dimension | This build |
|---|---|
| Grammar | Live surface |
| Nav treatment | App chrome: top account tabs (Cash positions, Risk radar, Playbooks) and a status line |
| Hero device | The reconcile table already populated with unmatched lines flagged |
| Act-sequence shape | One 8vh pinned surface cycling three tabs, then a 1.2vh pinned first-run close; 9.2vh |
| Close pattern | A first-run stepper (connect a bank, pick entities, confirm) with a real field at step one |
| Signature move | A running reconcile: the unreconciled total ticks to 0.00 as you scroll, one line clearing at a time, computed from the table data |
| Peak (plan) | The unmatched total counts down to exactly zero while you scroll. |

## Feeling curve (intended, written before the build)

| # | Act | Feeling | Cause on screen |
|---|---|---|---|
| 1 | Cash positions, p 0 to 0.03 | Unease | The table is already populated, four lines flagged Unmatched, the total sitting at 562,271.90 and not moving |
| 2 | Cash positions, p 0.03 to 0.52 (the peak) | Momentum, then relief | Lines clear one at a time, the total ticks down, lands on exactly 0.00 and holds |
| 3 | Risk radar, p 0.52 to 0.74 | Watchfulness | Runway bars settle and a threshold line sweeps down, two alerts remain lit |
| 4 | Playbooks, p 0.74 to 1.0 | Control | Rules evaluate on the data, switches are the visitor's, a customer note lands |
| 5 | First run, 1.2vh pinned | Readiness | A stepper with a cursor in a real field, nothing else |

Pacing: the Cash tab owns 3.3vh of the 8vh surface (the largest share), the close is 1.2vh. The act before the peak is the hold on the unsolved table.

## The peak

The sentence a visitor would say: *"I scrolled and the unmatched total counted itself down line by line until it hit exactly zero."* It lives in act 2 (Cash positions) and has the largest span on the page. The status line keeps the running total visible after the tab changes.

## Tell-someone sentence

It's the site where you scroll and watch the unmatched cash count itself down to 0.00, one line at a time.

## Authored silence

p 0 to 0.03 of the console (about a quarter of a viewport of scroll) holds the unsolved table still. `data-sc-verify-hold` is set only while that hold, and the short hold at exactly 0.00, are active. The rest of the surface publishes painted values (tab, lines cleared, total in cents, threshold, step) in `data-sc-verify-state`.

## Taste decisions

- Type: Sora (display, headings, numbers) and Schibsted Grotesk (text) in English; Tajawal alone in Arabic. All three engine font variables overridden so no third family appears. Figures use tabular numerals.
- Colour: the domain's own palette. Paper `#131613` ground, ink `#f0f2e9`, one flat accent lime `#d5f36b`, accent-soft `#26311a` as the clearing-row highlight. No gradients, no glow, no red: flagged lines carry a text label and a marker shape, never colour alone.
- No eyebrows, no section numbers, no scroll cue, no em dashes, no invented statistics, no fake panels: every readout is computed from the table markup.
- Language switch is a real `<a hreflang>`, not JS translation.

## Feel check (cold, from the contact sheets and live states, before re-reading the curve above)

Felt, one word per act: Cash hold = Attention. Reconcile run = Momentum, then Relief at the lime 0.00. Risk radar = Calm. Playbooks = Busy, then Control. First run = Readiness (a little flat).

Diff against the intended curve: matches on acts 2 to 5 in order. Disagreements and what changed:
- Unease at the hold was only Attention: the 3% hold is short, so the table reads calm before it reads unsolved. Kept (a longer hold would be dead scroll); the flagged markers and the large unmoving total carry it.
- Playbooks felt Busy before Control because rules showed "Not run yet" on arrival from a tab click. Fixed: rules now evaluate earlier in the segment and a tab click lands after the first two have run.
- Phone and short viewports overflowed the pinned stage (cash view cut under the status line). Fixed with a separate phone composition and a short-phone tier; 360x640 still overflows the cash view by about 5px.

## Notes

- Peak: the Cash tab owns 3.3vh of the 8vh surface, the largest share; the 0.00 state turns the readout lime and holds for 0.06 of travel. The running total also stays in the status line after the tab changes.
- Chrome is the only language switch: a plain `<a hreflang>` to `ar/` and back, plus `<link rel="alternate">`.
- Under reduced motion the numbers still count with scroll (they are content), but bars render full, the threshold rests at 12 months, row fill lines and crossfades are removed, and Reconcile jumps instantly.
- Arabic strings not in ledger.ts are authored MSA and unproofread: view titles and ledes, rule titles and descriptions, status and button labels, scenario note, error and demo notices, step titles.
- Not verified: a real phone (iOS Safari, touch scroll, on-screen keyboard), a native Arabic proofread, screen-reader output.
