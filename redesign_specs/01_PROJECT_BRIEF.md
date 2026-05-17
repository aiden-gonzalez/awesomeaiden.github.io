# Personal site, project brief

**Owner:** Aiden Gonzalez
**Domain:** aidengonzalez.dev
**Status:** Design complete, ready to build

---

## The one-sentence pitch

A topographic field journal that becomes a bike ride, a personal site for a senior backend developer who climbs mountains on weekends, treating his career as terrain you scroll through and shift through.

## Core design principles

**One metaphor, sustained.** Cycling-through-terrain runs underneath the entire site without ever announcing itself. Every section earns its place inside this metaphor. No section breaks the frame.

**Restrained palette.** Bone (`#f5f1ea`), forest green (`#3a5a4a`), clay red (`#8b3a2b`), ink (`#2c2416`). Clay red is reserved as an accent, used only for waypoints and active states. Forest green carries structure. Ink carries content.

**Two type voices in opposition.**
- Sans-serif (Inter, IBM Plex Sans, or system sans), body content, headings, navigation
- Monospace (JetBrains Mono, Berkeley Mono, or system mono), labels, coordinates, metadata, anything "systematic"
- Serif italic (Source Serif, EB Garamond), handwritten content only: the summit register quote, visitor signatures, the field-journal moments

The voices map onto a real distinction: monospace is the field guide, serif italic is the field journal. The site is both.

**One "wow" moment, fully committed.**
1. The cassette gear-shift mechanic for the career timeline

Everything else earns its place quietly, through typography, restraint, and the topographic field-journal frame. A single mechanic gets all the attention.

## Section breakdown

| # | Section | Purpose | Visual |
|---|---------|---------|--------|
| 1 | Hero | Establish voice, location, identity | Topographic map with coordinates, contour lines, summit marker |
| 2 | Timeline (cassette) | Career arc as a sequential journey | Stacked cogs, scroll = shift, derailleur tracks the chain |
| 3 | Projects (ride log) | Portfolio detail | Strava-style cards with route-sketch SVGs |
| 4 | Contact (trail register) | Get in touch | Form styled as a summit logbook |

## Personality anchors

These are the hobbies the site weaves in. They're not given their own sections, they show up as texture throughout:

- **Cycling**, the chain, the cassette, the elevation profile, the "ride" framing, the cadence/rpm readouts
- **Hiking**, the topographic hero, coordinates, summit markers, the trail register, "elevation gained" as a metric
- **Coffee**, referenced in copy (espresso, flat whites, cortados, the morning ritual), not visually depicted
- **Basketball**, light touch; could appear as a single line in an "off the keyboard" sidebar or as an Easter egg

## What this site is NOT

- Not a dark-mode terminal portfolio (that was concept 1, we moved past it)
- Not a Patagonia ad (the topographic restraint matters; resist literal mountain photography)
- Not a one-trick site (every section pulls its weight; the metaphor isn't just decoration)
- Not a CMS-driven blog (this is a single page, not a content system; if you ever want a blog, it's a separate sub-site at /writing)

## Success criteria

A visitor should:
1. Land on the hero and immediately understand: *this person is technical and has a sense of place*
2. Scroll through the cassette and remember the mechanic two days later
3. Be able to email you without ever leaving the page
4. Want to send the URL to a friend who likes design

The site should:
1. Load in under 2 seconds on a mid-range phone
2. Be readable end-to-end on a 375px-wide screen (iPhone SE) without horizontal scroll
3. Pass Lighthouse accessibility audit at 95+
4. Work without JavaScript for core content (graceful degradation; the scroll mechanics are progressive enhancement)
