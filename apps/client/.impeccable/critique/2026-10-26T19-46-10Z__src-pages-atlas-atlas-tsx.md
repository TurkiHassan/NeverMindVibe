---
target: Landscape Lab catalog and 20 domain pages (Atlas.tsx)
total_score: 18
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 4
target_identity: "file:/Users/turki/Downloads/website-01a176aa-1d42-7193-b341-3e4f029f3972/apps/client/src/pages/atlas/Atlas.tsx"
target_fingerprint: "sha256:bef5423b53e36d9a1a097f4d7f4a40cb3a1c2d097341a85da254b203e0f2b43f"
target_path: /Users/turki/Downloads/website-01a176aa-1d42-7193-b341-3e4f029f3972/apps/client/src/pages/atlas/Atlas.tsx
timestamp: 2026-10-26T19-46-10Z
slug: src-pages-atlas-atlas-tsx
---
# Critique: Landscape Lab (catalog + 20 domain pages)

Method: dual-agent (A: design review, B: detector + browser measurements)

## Design Health Score
| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Active states clear; "Atlas coverage 20/20" is a vanity meter |
| 2 | Match System / Real World | 2 | Builder jargon (grid/ripple/pixels, Eight Display) on visitor cards; "Dark mode" filter is a UI mode |
| 3 | User Control and Freedom | 3 | Mobile menu stays open after in-page link |
| 4 | Consistency and Standards | 1 | Tree buttons look like links but do not navigate; cards promise landing pages, deliver spec pages |
| 5 | Error Prevention | 2 | Arabic and synonym search finds nothing |
| 6 | Recognition Rather Than Recall | 3 | Visual catalog; thin filter vocabulary |
| 7 | Flexibility and Efficiency | n/a | showcase surface |
| 8 | Aesthetic and Minimalist Design | 2 | Domain pages repeat identical filler sections |
| 9 | Error Recovery | 2 | Empty state has no reset |
| 10 | Help and Documentation | n/a | showcase surface |
| **Total** | | **18/32** | **56% Acceptable** (7 and 10 scored n/a) |

## Design Specificity Verdict
Identity lives in the 20 hero videos and palettes; the pages are one template re-skinned. Removing video and colour leaves /ledger and /frame indistinguishable. Detector: 1 CLI finding (codex-grid-background, index-landing.css:116, partial false positive); in-browser overlay found 115 undersized-ui-text and 43 low-contrast on /.

## Priority Issues
- [P1] Domain pages are spec pages, not landing pages (Atlas.tsx:894-925). Fix: per-domain sections + real CTA. Command: shape then layout.
- [P1] Typography not applied: Atlas.tsx:867 forces one stack; Eight Display/KOMission have no @font-face; declared families not imported; no Arabic face. Command: typeset.
- [P1] Contrast: .button-theme ink-on-accent 1.09-1.93 on 7 dark pages; accent text 1.66-2.77 on light pages; 101/204 home elements fail. Command: colorize then audit.
- [P1] Index view unreadable for dark domains (index-landing.css:83). Command: harden.
- [P2] Locale: startsWith("/ar") makes /arc lang=ar dir=rtl (Atlas.tsx:580, :799); Arabic headings keep negative tracking and 0.9 line-height; English chips on /ar; Arabic search unsupported. Command: adapt.

## Persona Red Flags
- Jordan: CTA below fold at 1440x900; arrives on dark page with unreadable only CTA; "Watermelon UI" copy meaningless.
- Riley: index view hides rows; empty search no reset; /arc lang bug; tree buttons inert; search outline 0; no nav landmark, two footers on domain pages; React duplicate-key error (Atlas.tsx:659).
- Casey: home 10,377px tall at 375; 18px filters, 32x32 menu toggle; domain hero video collapses to 224px sliver; full videos autoload on cellular.

## Minor Observations
- 11 of 20 card stages repeat the same motion; Ledger/Current duplicate +18.6%.
- WatermelonTicker ignores reduced motion (Atlas.tsx:786).
- Decorative NYC coordinates and serial; shared generic poster; 44MB of hero video.
- JSON-LD still says Skywork Generated Project; footer prints raw pathname at 9px.
- pages/home/Index.tsx and Demo.tsx are leftover template.

## Questions to Consider
- What distinguishes /ledger from /frame once video and colour are removed?
- Who is the visitor on a domain page: a prospect or a designer studying the template?
- What would Cinder contain if designed only for its player?
