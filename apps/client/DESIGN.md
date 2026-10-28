---
name: Landscape Lab
description: A quiet cream editorial catalog that frames twenty landing-page templates, each dressed by one shared skeleton in its own colour, type and content.
colors:
  catalog-ink: "#211f1d"
  catalog-paper: "#f7f3ee"
  catalog-muted: "#655f59"
  catalog-line: "#ded7cf"
  catalog-rule: "#9a9189"
  catalog-signal: "#a8431f"
  catalog-about-clay: "#e8ddd4"
  engine-ink: "#201d1b"
  engine-paper: "#f4f0eb"
  engine-surface: "#e9e5e1"
  engine-line: "#d2ceca"
  engine-muted: "#65625f"
  engine-accent: "#d97745"
  engine-accent-soft: "#f4e5d9"
  engine-accent-ink: "#8f5334"
  engine-accent-graphic: "#bb693e"
  engine-accent-btn: "#d97745"
  engine-on-accent: "#0b0b0b"
  engine-on-soft: "#201d1b"
typography:
  catalog-display:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(44px, 5.8vw, 88px)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  catalog-headline:
    fontFamily: "Bodoni Moda, Georgia, serif"
    fontSize: "clamp(36px, 4.6vw, 68px)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
  catalog-body:
    fontFamily: "Karla, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
  catalog-label:
    fontFamily: "DM Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
  engine-display:
    fontFamily: "var(--display)"
    fontSize: "clamp(2.6rem, 6.4vw, 5.6rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
  engine-headline:
    fontFamily: "var(--display)"
    fontSize: "clamp(2rem, 4.4vw, 3.7rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.02em"
  engine-title:
    fontFamily: "var(--display)"
    fontSize: "clamp(1.25rem, 2vw, 1.65rem)"
    fontWeight: 600
    lineHeight: 1.06
  engine-body:
    fontFamily: "var(--body)"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  engine-label:
    fontFamily: "var(--mono)"
    fontSize: "0.8125rem"
    fontWeight: 500
rounded:
  control: "10px"
  card-sm: "12px"
  picture: "14px"
  card-lg: "16px"
  film: "20px"
  pill: "999px"
spacing:
  gutter: "max(1.25rem, calc((100vw - 1240px) / 2))"
  section: "clamp(3.5rem, 8vw, 7rem)"
  control-height: "48px"
  touch-min: "44px"
components:
  button-primary:
    backgroundColor: "{colors.engine-accent-btn}"
    textColor: "{colors.engine-on-accent}"
    typography: "{typography.engine-body}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "48px"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.engine-ink}"
    rounded: "{rounded.control}"
    padding: "0 1.5rem"
    height: "48px"
  tag:
    textColor: "{colors.engine-muted}"
    rounded: "{rounded.pill}"
    padding: "0.35rem 0.65rem"
  gallery-card:
    backgroundColor: "{colors.engine-paper}"
    rounded: "{rounded.card-lg}"
    padding: "0.75rem 0.75rem 1.5rem"
  form-field:
    backgroundColor: "{colors.engine-paper}"
    textColor: "{colors.engine-ink}"
    rounded: "{rounded.control}"
    height: "48px"
  catalog-button-dark:
    backgroundColor: "#221f1c"
    textColor: "#ffffff"
    height: "48px"
    padding: "0 20px"
  domain-card:
    backgroundColor: "{colors.catalog-paper}"
    textColor: "{colors.catalog-ink}"
    padding: "18px"
---

# Design System: Landscape Lab

## Overview

**Creative North Star: "The Shared Skeleton"**

The product is one fixed skeleton (hero, two domain-derived sections, proof, call to action, footer) that each of twenty domains dresses with its own colour, type and content. The system therefore has two layers, and they must not be blended. The catalog shell is a quiet editorial layer: cream paper, hairline rules, a high-contrast Didone display with italic emphasis, a humanist sans body and a mono for labels. The domain engine (every class prefixed `dp-`) is a neutral frame that owns no colour or face of its own; it receives five source colours and a type pair per domain and derives every role from them.

The catalog is restrained so the templates can be loud. Its density is airy, its corners are square, its only ornament is thin circles and rules. The engine is flat and structural: hairlines, tonal bands and type carry everything, and what differs between domains is palette, face, hero variant, density and the choice of section kinds, not the grid underneath.

**Key Characteristics:**
- Two layers: a cream editorial catalog shell and a domain engine that adopts a different identity per page.
- One skeleton, many dressings; section kinds are chosen by the domain's content, not by a default card grid.
- Every text colour in the engine is derived to clear AA on the surface it sits on.
- Flat: hairlines and tonal bands, no shadows in the engine.
- Bilingual by construction: English and Arabic share one layout, with Arabic type rules applied per direction.

## Colors

The catalog palette is warm and papery; the engine has no fixed palette, only a fixed set of roles filled per domain.

### Primary
- **Brick Signal** (#a8431f): the catalog's only accent; focus outlines on the catalog shell. Used sparingly.
- **Domain Accent** (engine-accent, shown as the Arc reference value #d97745): the domain's own brand colour. It appears as fills and large graphics, never directly as text.

### Neutral
- **Cream Paper** (#f7f3ee): catalog page background and card ground.
- **Warm Ink** (#211f1d): catalog text, active filter underline, dark buttons (#221f1c).
- **Quiet Taupe** (#655f59): catalog secondary text.
- **Hairline Sand** (#ded7cf) and **Rule Taupe** (#9a9189): catalog dividers and control borders.
- **Clay Band** (#e8ddd4): the single tinted strip in the catalog (about).
- **Domain Paper / Ink / Surface / Line / Muted** (Arc reference: #f4f0eb, #201d1b, #e9e5e1, #d2ceca, #65625f): the engine's page, text, alternate section band, hairline and secondary text.
- **Accent Ink, Accent Graphic, Accent Button, On-Accent, Soft, On-Soft** (Arc reference: #8f5334, #bb693e, #d97745, #0b0b0b, #f4e5d9, #201d1b): the derived accent family, defined below.

### The Twenty Source Sets
Each domain supplies five source colours (accent, accent-soft, ink, paper, border). Seven pages have a dark paper.

| Domain | accent | accent-soft | ink | paper | border |
|---|---|---|---|---|---|
| arc | #d97745 | #f4e5d9 | #201d1b | #f4f0eb | #d9d0c7 |
| orbit (dark) | #b8a5ff | #30245c | #f6f2ff | #0c0b14 | #332e47 |
| moss | #5f9f75 | #dcebdc | #193126 | #edf3eb | #cbdac9 |
| pulse | #ff8a65 | #ffe6da | #10223d | #eff6ff | #cbdcf5 |
| ledger (dark) | #d5f36b | #26311a | #f0f2e9 | #131613 | #30382d |
| atelier | #ce3f46 | #f3d8d7 | #1e1817 | #f8f2ee | #e3d3cd |
| signal (dark) | #e592ff | #32143f | #f8edff | #170d1c | #43264e |
| tactile | #b96d4f | #f0dfd3 | #2b211b | #f2eadf | #ddcbbb |
| drift | #e6ae48 | #f8edcb | #153f45 | #e9f5f1 | #c1dcd7 |
| kernel | #3c6cff | #dfe6ff | #111827 | #f5f7fb | #d7def0 |
| pantry | #f05d3b | #ffe0d6 | #342119 | #fff4e8 | #f0d4c1 |
| root | #e9b949 | #fff0c8 | #20234a | #f6f4ec | #ddd9be |
| frame (dark) | #d8c3a7 | #2d2927 | #f8f3ed | #1c1a19 | #413a35 |
| civic | #2e64d6 | #dbe6ff | #17233f | #edf2f8 | #cbd8e8 |
| current (dark) | #c4ff3d | #263714 | #eff9e7 | #10150e | #33461e |
| loop | #ff756e | #ffe0e1 | #2a214a | #f6f0ff | #e0d4f2 |
| haven (dark) | #eabf7a | #463524 | #fff5e3 | #1f1a17 | #493a2d |
| spark | #f9b44f | #fff0cf | #23211f | #fffaf0 | #ebd8b1 |
| field | #a5c957 | #eaf2cd | #24351f | #f3f3e5 | #d9dfbe |
| cinder (dark) | #e7f04f | #3d3c10 | #f6f6df | #15150f | #454613 |

### Named Rules
**The Derived Roles Rule.** Engine colour is never picked by hand; it is computed from the five source colours. Surface is paper mixed 5% toward ink; line is paper mixed 16% toward ink; muted is the ink/paper blend nudged toward ink until it holds at least 4.8:1 on both paper and surface; accent-ink is the accent nudged toward ink until at least 4.6:1 on paper and surface; accent-graphic is the same nudge to at least 3.1:1; on-accent is whichever of ink, paper, near-black or white contrasts most with the accent; accent-btn is the accent itself when on-accent clears 4.6:1 on it, otherwise it is darkened or lightened until it does; on-soft is the ink nudged until it reaches 7:1 on accent-soft. A new domain supplies five colours and nothing else.

**The Text-On-Accent Rule.** Text or icons sitting on the accent or on accent-soft use on-accent or on-soft, never the page ink or white by assumption. Accent as text (links on hover, step numerals, dates, active tab underline) uses accent-ink; accent as a bar or lane fill uses accent-graphic.

**The One Accent Rule.** Each page carries one accent family. Warm Ink and Cream Paper own the catalog; Brick Signal appears there only as the focus colour.

## Typography

**Catalog Display:** Bodoni Moda (Georgia fallback); Arabic Amiri.
**Catalog Body:** Karla (system-ui fallback); Arabic Almarai.
**Catalog Label:** DM Mono; in Arabic the label face becomes Almarai.
**Engine faces:** one Latin display and body pair and one Arabic display and body pair per domain (for example Familjen Grotesk with Hanken Grotesk for Arc, Bodoni Moda with Jost for Atelier, Geist with Geist Mono for Kernel). Each page loads only its own faces. The engine exposes them as display, body, mono and code variables; the active language's face leads the stack.

**Character:** the catalog is a bookish editorial voice with tight high-contrast headlines and small mono captions. The engine borrows a different voice per page but always sets headlines in the display face, running text in the body face, and numerals, dates and facts in mono.

### Hierarchy
- **Display, engine** (600, clamp(2.6rem, 6.4vw, 5.6rem), line-height 1): the hero h1, capped near 12ch; the stack hero raises the size to clamp(2.8rem, 8vw, 7rem). Tracking is -0.03em for sans faces and -0.015em for serif faces.
- **Headline, engine** (600, clamp(2rem, 4.4vw, 3.7rem), 1.06): section h2; the call-to-action h2 steps up to clamp(2.2rem, 4.8vw, 4.1rem). Tracking is -0.02em, or -0.005em for serif faces.
- **Title, engine** (600, clamp(1.25rem, 2vw, 1.65rem)): item and step h3.
- **Body, engine** (400, 1.0625rem / 1.6, 1rem on phones): running text. Line-height rises to 1.8 in RTL. Supporting copy is limited to 40 to 56 characters per line.
- **Label, engine** (500, 0.8125rem to 0.95rem, mono face): tags, dates, durations, fact lists. Never below 12px.
- **Display, catalog** (500, clamp(44px, 5.8vw, 88px), 0.96, -0.035em): home hero, with italic emphasis at weight 400.
- **Headline, catalog** (500, clamp(36px, 4.6vw, 68px), 1, -0.03em); card titles 32px at -0.02em.
- **Body and label, catalog** (Karla 15 to 18px, line-height 1.5 to 1.55; DM Mono 12px).

### Named Rules
**The Per-Face Tracking Rule.** Negative tracking is part of the face, not the heading: sans display faces take the heavier values, serif display faces the lighter ones.

**The Arabic Reset Rule.** In Arabic, headings and quotes take zero letter-spacing and line-height 1.3 (headings) or 1.6 to 1.7 (quotes), h3 always uses the body face because display faces blur below about 40px, and testimonial quotes use the body face. Emphasis in Arabic is bold, never italic.

**The Bidi Isolation Rule.** Figures with Latin units, brand names inside Arabic sentences and code are wrapped as isolated left-to-right runs so numerals and units never reorder.

**The Mono Fallback Rule.** Where the mono face has no Arabic glyphs, the label face falls back to the Arabic body face.

## Layout

The engine is one column of full-bleed bands inside a shared gutter, `max(1.25rem, (100vw - 1240px) / 2)`, so content never exceeds 1240px and never touches the edge. Sections are separated by a top hairline and alternate to the surface tint (every section after the first). Vertical rhythm is `clamp(3.5rem, 8vw, 7rem)`. Section heads are a two-column grid (heading, one-sentence gloss) that collapses at 1020px.

The hero has three variants: split (copy and a 4:3.3 film), full (film as the background under a paper-to-transparent gradient, copy in a 40rem column) and stack (headline across the page, copy and facts in two columns, a 21:8 film). The call to action must sit near the first screen, so the full hero has a minimum height of 86vh (780px max); split and stack heroes are sized by their content and were checked to show the call to action in a 1440x900 first screen. Twelve section kinds are available: gallery (asymmetric, rows, rail, grid, editorial, archive), timeline, specs, bars, table, pricing, tracks, workflow, switch (tabs), stories, calendar, steps. A domain picks kinds from its content, and counts of 3 to 6 items set the gallery column template.

Breakpoints are 1020px (multi-column grids and the hero collapse to one or two columns), 900px (navigation becomes a menu) and 680px (tables, calendars, tracks, flows and forms stack). Touch targets are at least 44px; controls are 48px.

The catalog shell uses its own proportional padding (5.5vw nav, 7.5vw bands), a 4-column card grid that falls to 3 at 1020px, 2 at 760px and 1 at 420px, and an alternate index view where each card becomes a ruled row. It is an editorial layer with its own scale, not the engine's.

## Elevation & Depth

The engine is flat. Depth comes from hairlines (`line`), the alternate surface band, a paper-coloured card on a tinted band, and the full-bleed accent-soft call-to-action band. There are no box-shadows in the engine. Image zoom (scale 1.04 over 0.9s) and a 2px button lift are the only hover depth.

The catalog is flat too, with one exception: the domain card hover.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 18px 28px #2b21150e` with `translateY(-6px)`): catalog domain card on hover only; removed in the index view, where hover darkens the row by `brightness(.97)`.

### Named Rules
**The Hairline Depth Rule.** Separation is a 1px rule or a tonal band. A new engine component that needs a shadow to be seen is missing a border.

## Shapes

Engine form language is rounded-rectangular, with a clear size ladder: 10px controls (buttons, inputs, menu button), 12px for nested highlights (playing track, flow steps), 14px for pictures, tables and code blocks, 16px for gallery cards and pricing plans, 20px for the hero film. Bars and calendar lanes use 6px; equaliser bars 2px. Pills (999px) are reserved for tags. Playback buttons are circles. Archive pictures use 8px inside a 14px card.

Borders are 1px hairlines for containers and 1.5px for interactive outlines (quiet button, form fields at 55% ink, workflow steps).

The catalog is square: cards, buttons and toggles have no radius; circles are its signature geometry (the wordmark, hero visual, stamp, swatches, orbits).

## Components

### Buttons
Confident and plain.
- **Shape:** 10px radius, 48px minimum height, 0 1.5rem padding, 600 weight.
- **Primary:** accent-btn fill with on-accent text.
- **Quiet:** transparent with a 1.5px ink outline and ink text; on a featured plan it inverts to the primary fill.
- **Hover / Focus:** lifts 2px and brightens 6% over 0.25s on the shared ease; focus is a 2px accent-ink outline at 3px offset.
- **Link:** ink text, 1.5px underline at 0.3em offset, accent-ink on hover, 44px tall. Arrows flip in RTL.
- **Catalog button:** square, dark (#221f1c) fill, white text, 48px, 2px lift on hover.

### Tags
Pill with a 1px line border, muted text, 13px, 0.35rem x 0.65rem padding. Informational only.

### Gallery Items
Picture at 14px radius on a surface ground; hover scales the image 1.04. Rail and grid items sit in a 16px bordered card with 0.75rem inset; archive items add a facts list (mono, ruled rows). The layouts asym, rows, rail, grid, editorial and archive change composition, not the item anatomy.

### Table
Wrapped in a 14px hairline frame, tabular numerals, muted surface header. Under 680px it stacks: the header is visually hidden and each cell shows its label from a data attribute.

### Bars
12px track on the line colour with an accent-graphic fill that grows from the inline start over 1.1s; label and figure sit above, a muted gloss below.

### Tracks
Ruled rows with a 48px circular play button, title, muted artist, duration in mono. The playing row takes accent-soft with on-soft text, a 12px radius and an equaliser of four 4px bars that animates; the equaliser is hidden under 680px.

### Tabs (switch)
A ruled tablist; selected tab is ink with a 3px accent-ink underline; panel is a two-column text and ruled list.

### Form Fields
48px, 10px radius, paper fill, 1.5px border at 55% ink, muted placeholder, two columns on desktop with wide fields spanning both. Focus is a 2px accent-ink outline at 2px offset and a full-ink border. The form lives on the accent-soft call-to-action band.

### Navigation
Sticky, paper-coloured, 4rem high, hairline bottom. Brand in the display face; links muted, ink on hover; a compact primary call to action (40px); language link. Under 900px a 44px bordered menu button opens a stacked panel of 52px rows with the call to action at the end.

### Identity Sheet
A disclosure in the footer: swatches (3.5rem, 10px radius, hairline) with mono hex codes beside a ruled list of faces and roles. It exposes the derived palette on every page.

### Catalog Domain Card and Index Row
A hairline-bordered card in the domain's own paper, 390px minimum, with a mono index and a diagonal arrow, a motion stage (orbit, grid, bars, wave, nodes, sun, ripple, pixels or cards drawn from the domain's accent), the name in the catalog display face, a kind line and a one-sentence statement. In the index view the same card is a grid row: index, name, statement, count, swatches.

## Do's and Don'ts

### Do:
- **Do** build every new domain from the shared skeleton and five source colours, and let the derivation produce the rest.
- **Do** set text on the accent with on-accent, text on accent-soft with on-soft, accent as text with accent-ink, and accent as graphics with accent-graphic.
- **Do** separate surfaces with 1px hairlines and the surface band.
- **Do** keep controls at 10px radius and 48px height, and keep touch targets at least 44px.
- **Do** use the shared ease `cubic-bezier(0.16, 1, 0.3, 1)`; bars grow over 1.1s, buttons lift 2px, and everything animated stops under `prefers-reduced-motion`, including the hero film, which falls back to its still image (it is also a still on phones and in data-saver).
- **Do** choose section kinds from the domain's own content.
- **Do** isolate Latin units and brand names inside Arabic text and mirror directional icons in RTL.
- **Do** keep every label at 12px or larger.

### Don't:
- **Don't** put an eyebrow or kicker line above a heading anywhere in either layer.
- **Don't** use a shared card grid as the default section; kinds derive from the domain.
- **Don't** add shadows to the engine; the catalog card hover is the only shadow the system sanctions.
- **Don't** apply letter-spacing to Arabic, or use italic for Arabic emphasis.
- **Don't** hand-pick a muted, accent or text colour in a domain; derive it.
- **Don't** use pills for anything but tags.
- **Don't** load a domain's faces on another page.
- **Don't** let the catalog's square, cream language leak into a template, or a template's colour into the catalog shell.

### Known deviations
- The catalog motion-stage artwork (orbit sphere, sun core, ripple dot, grid beam and pins, the hero signal disc, the stack card) carries glows and soft shadows. They are illustration inside a thumbnail, not elevation, and are not precedent for UI surfaces.
- The hero film switches to a still at 640px in `DomainPage.tsx` (also for data-saver and reduced motion), a third value beside the 680px and 760px CSS breakpoints.
