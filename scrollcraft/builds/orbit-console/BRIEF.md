# BRIEF: Orbit, Vesper-1 flight console

**Self-authored under explicit creative delegation.** The owner chose "one domain page" and "use your artistic judgment" and asked no interview. Everything below is an authored decision, not a quotation. The owner's asset answer was a question about what a KIE key is, so no generation is used: this build uses only the footage and figures already in the Landscape Lab project.

Evidence used: `apps/client/src/pages/atlas/domains/content/orbit.ts` (sample mission data for the fictional Vesper-1) and `apps/client/public/assets/domain-heroes/orbit-hero.mp4`. Everything on the page is sample content and says so on its face.

## The eight topics

1. **Vibe.** Quiet, exact, nocturnal. References from other media: the flight-computer screens in a space-flight game, the Endurance telemetry in a space film, a printed test-pattern sleeve. Not a website.
2. **Journey.** The visitor is dropped into a mission console already running at T-minus 04:00 and scrolls the mission forward: separation, the long cruise, the burn, first light, the handover to science.
3. **Energy curve.** Low and attentive, a release, a long quiet, one sharp spike, a wide calm, a resolved close.
4. **Feeling curve and the ONE moment.** See below. The moment: the 41-second insertion burn.
5. **What no other site does.** Scroll is the mission clock, and a trace rail along the bottom edge is the playhead: it records every phase you pass and doubles as the navigation.
6. **Range.** Brutalist-adjacent and dense on purpose (a tool, not a brochure), but with the quiet of premium-minimal in the cruise. Dense type is set from the taste floor, not from habit.
7. **One world or distinct scenes.** Neither: one surface that holds still while its state advances (live surface grammar).
8. **Assets.** Owner's project: the Orbit hero film (4 s, 1280x720, planet and ring) used as an optical feed panel, and the real figures in `orbit.ts`. Nothing generated.

## Subject

What is this, and for whom: Orbit plans and flies missions for payloads that travel 1.5 million km from Earth, for agencies and funders. Visitor must believe: the people who run this mission can be trusted with distance. One action, one label used everywhere: **Request a briefing**.

## Page grammar

**Live surface.** Why the other seven lost:

- Filmic one-shot: the project has one 4 s clip. A film would be a single device stretched over a page, which is the template trap this skill warns about.
- Chaptered editorial: a mission log reads as a feature, but the honest pitch here is "watch what we do", and a printed page forbids the running state.
- Continuous world: needs a long unbroken flight of assets that do not exist. Fragile and expensive.
- Typographic poster, gallery, split stage, rhythmic cutlist: none of them has a reason to exist for a mission whose product is an operating picture.

The honesty rule holds: every panel is markup computing its state from data arrays in the page (the mission log, the 41 s burn, the five sunshield layers, the speed of light). The page says on its face that it is a sample mission. The only non-computed thing is the optical feed, which is labelled sample footage.

## Signature move

**Scroll as playhead over a persistent trace rail.** A thin rail fixed to the bottom edge draws the whole mission as the distance curve. Scroll position is the playhead. Passing a phase stamps a marker that stays. By the end the rail is a complete record of the flight and clicking any marker jumps there. Nothing in the engine does this.

## Feeling curve (before the acts)

| # | Phase | Feeling | Cause on screen |
|---|---|---|---|
| 1 | T-minus 04:00 | Attention | The console is already running and the clock counts before the visitor touches it |
| 2 | T+00:31 | Release | A first signal lands, the link light turns, the log writes its first line |
| 3 | Day 3 to Day 28 | Solitude | Five sunshield layers open, then nothing but distance and signal delay growing in the corner |
| 4 | Day 29 | Dread, then awe (the peak) | The burn: a 41 second timer, the thrust bar, the distance reaching 1,500,000 km, the delay reaching 5.0 s |
| 5 | Day 112 | Wonder | Four instruments come online one by one; the first frame holds 3,000 faint galaxies |
| 6 | Day 214 | Resolve | The console hands over: a command line with a cursor in it |

## The peak

The sentence a visitor would say: *"I scrolled through the burn that parks a telescope 1.5 million km away, and the signal delay counter stopped at exactly five seconds."* It lives in act 4 and has the largest share of scroll by a visible margin. Act 3 is the silence in front of it.

## Tell-someone sentence

It's the site where you fly a telescope to 1.5 million kilometres under your own scroll and watch the signal delay climb to five seconds.

## Authored silence

Day 3 to Day 28 (the cruise) is deliberately near-empty: only the distance and the delay move. `data-sc-verify-state` carries the rounded distance so the harness can tell it from dead scroll.

## Fingerprint (registry empty, gate trivially clear)

| Dimension | This build |
|---|---|
| Grammar | Live surface |
| Nav treatment | App chrome: a status bar and the trace rail, both clickable |
| Hero device | The surface already in a state (T-minus 04:00), no title stage |
| Act sequence | One long pinned console act of six phases, then one short pinned close |
| Close pattern | A real command line input, not a button |
| Signature move | Scroll playhead over a persistent trace rail that stamps markers |

## Taste decisions

- Fonts: Geist (display and text) and Geist Mono (data). Two families.
- Colour: Orbit's own palette (canvas #0c0b14, ink #f6f2ff, one accent lilac #b8a5ff). The page uses it as a flat accent. No gradients, no glow, no violet-to-blue.
- No eyebrows, no section numbers, no scroll cue, no em dashes, no invented statistics: every number is in `orbit.ts` or computed from one (distance / c).
- Mobile is composed separately: the console reflows to a single column with the trace rail as a thin footer.
