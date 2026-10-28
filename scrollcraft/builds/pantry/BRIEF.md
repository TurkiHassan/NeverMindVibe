# BRIEF: pantry, twelve cuts and a kitchen timer that totals the week

**Self-authored under explicit creative delegation.** No interview. Every decision is authored. Evidence: `content/pantry.ts` (EN and AR copy, six recipe times, three producer quotes, four facts, all sample content), `base.ts` (statement, metric, palette: ink #342119, paper #fff4e8, tomato #f05d3b, soft #ffe0d6), `type.ts` (EN Gabarito + Nunito Sans, AR Baloo Bhaijaan 2), the hero film and four stills. Nothing generated. The page says on its face that brand, recipes and figures are sample content.

## The eight topics

1. **Vibe.** Playful, generous, loud. References: a recipe-card box, a kitchen timer ticking over, a till receipt.
2. **Journey.** One screen of the promise, six recipes as cuts, the receipt of them, three producers, a home cook, the box.
3. **Energy curve.** Fast from the first cut, loudest across the six recipes, one long held receipt, then three slower producer cuts, abrupt stop.
4. **Feeling curve and the ONE moment.** Below. The moment: six dinners pass and the timer totals them.
5. **What no other site does.** A kitchen timer in the fixed chrome jumps to each recipe's own cooking time (read from that cut's time chip), keeps a running receipt of the minutes, and after the sixth recipe totals them.
6. **Range.** Playful-maximal flat grounds (cream, tomato, cocoa, blush), recipe-card tiles, no gradients.
7. **One world or distinct scenes.** Distinct scenes, twelve hard cuts, no pin.
8. **Assets.** Owned film (hero card) and four stills mapped as the content maps them. No stats beyond the sample figures; 137 and 2 h 17 min are the sum of the six listed times.

Subject: a pantry-and-recipes brand. The visitor must believe a Tuesday dinner is short. One action, one label everywhere: **Stock the good stuff** (AR «خزّن الأفضل»). The form is local only.

## Fingerprint (PLAN.json, built as written except where noted)

Rhythmic cutlist. Nav: loud bar with a basket counter that adds each recipe as its cut passes. Hero: one screen of the promise that hard-cuts to the first recipe. Seq: twelve cuts, no pin, recipe-card tiles, 10.9vh measured. Close: abrupt full-bleed with a household-size input. Sig: kitchen timer plus running receipt. Deviation: six recipes exist in the content, so "a week of dinners" is six dinners.

## Cuts (heights in svh)

hero 1.0, six recipes 0.85 each (the sixth is the peak, 1.2 with the receipt), three producers 0.8, home cook 0.95, close 0.95.

## Feeling curve

| # | Feeling | Cause on screen |
|---|---|---|
| 1 | Appetite, brisk | Promise, the film, timer idle at 0 |
| 2 to 6 | Rush | New ground and layout every cut, the timer jumps to 20, 25, 12, 15, 35, the basket counts up |
| 7 | Satisfaction (peak) | Last recipe at 30, then the timer turns tomato and reads 137, the receipt stamps its total |
| 8 to 10 | Warmth | Three producers on slower grounds, timer holds the total |
| 11 | Trust | One cook, four facts on cocoa |
| 12 | Resolve | Tomato full-bleed, household chips, one button |

## The peak

"I scrolled past six dinners and the timer added them up for me." Lives in cut 7, the longest cut (1.2). Cut 6 (35 min) and the stories after it are quieter.

## Tell-someone sentence

It's the site where a kitchen timer jumps to every recipe you scroll past and then tells you what the whole week costs.

## Authored silence

None. Every cut changes the chrome state; `data-sc-verify-state` on the timer carries the state and scroll bucket.

## Taste decisions

Accent never used as text on cream (3.0:1); accent carries ink text (4.6:1) or sits as a numeral on cocoa. Measured DOM contrast minimum 4.6:1. Reduced motion: timer still jumps, no flip, bump, press or hand easing, hero shows its poster.
