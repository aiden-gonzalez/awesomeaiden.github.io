# Technical spec

## Recommended stack

**Framework: Astro**

Reasoning: this site is 95% static content with two islands of interactivity (scroll transition, cassette). Astro renders almost everything to static HTML at build time and lets you opt into JavaScript only where needed. It's faster than Next.js for this use case, has zero hydration cost for the static sections, and pairs naturally with vanilla SVG/Canvas where you need it.

Alternatives considered:
- **Next.js** — overkill for a single-page site, ships too much JS by default
- **Vanilla HTML/CSS/JS** — viable, but you lose component reuse, scoped styles, and dev ergonomics
- **SvelteKit** — also good; pick this if you already know Svelte

**Animation: GSAP + ScrollTrigger**

Reasoning: the contour-to-chain transition and cassette scroll mechanic both need scroll-linked animation with `scrub` and `pin`. ScrollTrigger handles this cleanly, has battle-tested mobile behavior, and the API is stable. The GSAP business license is free for personal sites.

Alternatives considered:
- **Framer Motion** — great, but built for React state-driven motion, not scroll-linked
- **Lenis + raw IntersectionObserver** — works for simpler effects, struggles with phase-based animation like the contour transition
- **CSS scroll-driven animations** — modern, native, but Safari support is still partial as of this writing; not yet production-ready as a primary tool

**Styling: Tailwind CSS + CSS custom properties**

Reasoning: Tailwind for layout and one-off styling; custom properties for the design tokens (colors, typography). Don't try to put the design tokens into `tailwind.config.js` and call it done — the palette is small enough that CSS variables in `:root` are clearer and let you reference them in inline SVG attributes too.

**Hosting: Vercel or Cloudflare Pages**

Either is fine. Both give you a free tier, automatic HTTPS, push-to-deploy from GitHub, and edge caching. Cloudflare's analytics are nicer if you care about that.

## Project structure

```
aidengonzalez-dev/
├── public/
│   ├── fonts/                    # Self-hosted fonts (don't use Google Fonts CDN — privacy + speed)
│   └── og-image.png              # Social preview card
├── src/
│   ├── components/
│   │   ├── Hero.astro            # Section 1
│   │   ├── ContourTransition.astro  # Section 2 — has client:load island
│   │   ├── Cassette.astro        # Section 3 — has client:load island
│   │   ├── ElevationProfile.astro   # Section 4
│   │   ├── RideLog.astro         # Section 5
│   │   └── TrailRegister.astro   # Section 6
│   ├── lib/
│   │   ├── cassette-cogs.js      # Cog geometry math
│   │   ├── contour-paths.js      # SVG path interpolation for transition
│   │   └── design-tokens.css     # All :root custom properties
│   ├── layouts/
│   │   └── Layout.astro          # Base HTML + meta tags
│   └── pages/
│       └── index.astro           # Single-page site composes all sections
├── astro.config.mjs
├── tailwind.config.js
├── package.json
└── README.md
```

## Build order

Don't try to build everything in parallel. Each step depends on the previous one's design system being settled.

**Step 1: Tokens + typography (½ day)**
- Set up Astro + Tailwind
- Define color/spacing/type tokens in `design-tokens.css`
- Create a single test page that displays the palette and type scale
- Self-host fonts via `@font-face`

**Step 2: Static sections (1–2 days)**
- Build Hero, RideLog, TrailRegister, ElevationProfile as static Astro components
- No JS yet, no scroll effects, no fancy SVG
- Get the layout responsive on mobile and desktop
- This locks in the visual system before you spend time on the interactive parts

**Step 3: The cassette (1–2 days)**
- Build the SVG cog generator in `cassette-cogs.js`
- Wire up the scroll-linked rotation with GSAP ScrollTrigger
- Get the panel transitions working
- Desktop layout: text panel on the left, cassette on the right, chain wrapping around from the right side. This matches a real bike's drive side — getting it backwards reads wrong to anyone who rides.
- Mobile: stack the panel below the cassette, shrink the SVG to ~70%

**Step 4: Contour-to-chain transition (1 day)**
- This is the hardest piece. Implement it as a separate `<section>` that pins for ~600vh of scroll
- Use GSAP's ScrollTrigger with `scrub: 0.5` for smoothing
- The contour path's `d` attribute is interpolated across four phases — see `contour-paths.js`
- Test on a real phone before declaring it done; trackpad scroll feels different from touch

**Step 5: Polish (1–2 days)**
- Accessibility audit (axe-core, manual keyboard testing, screen reader spot-check)
- Lighthouse run, optimize for performance
- Cross-browser test (Safari, Firefox, Chrome, mobile Safari)
- Add `prefers-reduced-motion` fallbacks for every animation

**Total: ~6–8 working days**

## The hard parts (where to expect friction)

**Contour-to-chain transition.** The SVG path interpolation in the prototype is hand-rolled and works for the demo, but production needs:
- Smooth `scrub` interpolation (GSAP handles this if you give it the start and end `d` values as tween targets)
- A chain texture overlay during phase 3 — use `stroke-dasharray` with a tight repeating pattern
- Mobile: the whole transition needs to be shorter (less scroll distance) on small screens

**Cassette on mobile.** The desktop version has cogs on the right, panel on the left (matching a real bike's drive side, with the chain entering from the right). Mobile has to stack them vertically, which means the active cog needs to be visible *above* the panel — so the layout flips and the cog scaling has to be tuned for a portrait viewport. Plan for this from the start.

**Real chain rendering.** A solid stroke reads as "line" not "chain" at close inspection. The fix is to render the chain as a series of plate-like dashes along the path. SVG `stroke-dasharray` gets you most of the way there. A more elaborate version uses a `<pattern>` with chain link shapes, but `dasharray` is the 80/20 move.

**The contour path interpolation.** When the path morphs from "topographic contour" to "chain wrapping a cog," it has to look continuous. The trick is to keep the *same number of control points* in both states and interpolate them. If the topology of the path changes (different number of `Q`/`C` commands), the morph breaks. Plan path geometry up front, not on the fly.

## Accessibility requirements

These are non-negotiable.

**`prefers-reduced-motion`.** Every animated section needs a static fallback:
- Cassette: show all panels stacked, no scroll-shift mechanic
- Contour transition: skip the animation, jump straight to "chain attached to cassette"

**Keyboard navigation.** Every interactive element (form, links) must be reachable and operable by keyboard. Run through the site with only Tab and Enter; if you can't complete the journey, it's broken.

**Screen reader content.** The SVG sections need:
- `role="img"` on every decorative SVG
- `<title>` and `<desc>` elements describing what the visual shows
- `aria-hidden="true"` on purely decorative elements
- The cassette timeline content must also exist as a `<ol>` of years/roles outside the SVG, hidden visually with `.sr-only`, so screen reader users get the same information

**Color contrast.** Forest green on bone is borderline for WCAG AA at small sizes. Test every text-on-background combination with a contrast checker. Bump to ink (`#2c2416`) for any body text smaller than 16px.

**Form labels.** Every input needs a real `<label>` (not just a placeholder). The trail register form looks handwritten but the underlying HTML must be semantic.

## Performance budget

- First contentful paint: < 1.0s on 4G
- Largest contentful paint: < 2.0s on 4G
- Total JavaScript shipped: < 80kb gzipped (GSAP + ScrollTrigger is ~45kb; budget the rest carefully)
- Total page weight: < 400kb on initial load (fonts are the biggest expense; subset them aggressively)

**Font subsetting.** You don't need every glyph. Use `glyphhanger` or `subfont` to extract just the characters you actually display. Cuts font file size by 60–80%.

**Image strategy.** This site doesn't have photos. Everything is SVG or text. Keep it that way — it's a competitive advantage. If you ever want a photo (a portrait, a trail shot), use Astro's `<Image>` component for automatic optimization.

## What goes in the README

When you push the repo, the README should have:
- One-paragraph project description
- A screenshot or two
- Local development instructions (`npm install`, `npm run dev`)
- Deploy instructions (`npm run build`, then push)
- A "design notes" section linking back to this brief
- License (probably MIT, or "all rights reserved" — your call)

## What goes in .gitignore

The Astro starter handles most of this, but make sure these are present:
- `node_modules/`
- `.env`
- `dist/`
- `.DS_Store`
- `.vercel/` or `.cloudflare/`
