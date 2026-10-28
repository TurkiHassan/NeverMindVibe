# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: the owner (Turki), who builds and keeps this folder as a library of landing-page templates to reuse across real projects. Secondary: designers or developers who browse the catalog to pick a domain template, open it, and swap the content for their own client.

Each domain page is read in two ways at once: as a believable landing page for a fictional brand in that domain, and as a template whose structure and content are easy to replace.

## Product Purpose

Landscape Lab is a catalog of 20 landing-page templates, one per domain (architecture, space, climate, health, fintech, fashion, music, furniture, travel, AI, food, education, photography, civic, energy, creator tools, hospitality, nonprofit, agriculture, games). Each has its own visual identity and an Arabic (RTL) twin under `/ar/<slug>`. Success: someone opens a domain page, believes it is a real site for that world, and can lift its structure and swap the content without redesigning.

## Positioning

Not a design-system showcase and not a UI kit: each template is a full landing page whose sections come from its domain (a project grid for architecture, a lookbook for fashion, a mission log for space). Domain first, style second.

## Operating Context

React 19 + Vite, one route per domain plus `/ar/<slug>`, content and tokens held in typed data objects in `src/pages/atlas/Atlas.tsx`. Hero videos per domain are in `public/assets/domain-heroes`. Landing CSS is in `src/index-landing.css`.

## Capabilities and Constraints

- English and Arabic for every page; Arabic is a real translation, RTL, with proper Arabic faces.
- Content must be data-driven so a template can be re-skinned by editing one object.
- Each template needs a real call to action for its domain (a form, link or contact target is a placeholder the buyer replaces).
- Undecided: whether CTAs submit anywhere. For now they are placeholders.

## Brand Commitments

Name "Landscape Lab". Hero videos and per-domain palettes already exist and are kept. Copy voice in the existing hero statements is good and is kept.

## Evidence on Hand

All brands, project names, figures, prices and quotes are fictional. They must be written to feel plausible and be marked as sample content (visible footer/notice per page), never presented as real clients or real results. Absent and not to be fabricated as real: logos of real companies, real testimonials, real statistics.

## Product Principles

1. Every page is a believable site for its domain first; the template mechanics stay out of the visitor's way.
2. Structure comes from the domain: no section ships unless this domain needs it.
3. Content is replaceable: one data object per domain drives copy, tokens and sections.
4. Sample content is honest: labelled as sample, never passed off as real.
5. Arabic is first-class, not a mirrored afterthought.

## Accessibility & Inclusion

WCAG AA contrast for all text including text on accent colours; visible focus; reduced-motion respected everywhere (including marquees); touch targets at least 44px on mobile; correct `lang`/`dir` per route.
