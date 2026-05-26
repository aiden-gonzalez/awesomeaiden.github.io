# aidengonzalez.dev

Single-page personal site built with Astro + Tailwind. Deployed to GitHub Pages via the `docs/` directory.

## Commands

- `npm run dev` — local dev server at http://localhost:4321
- `npm run build` — produce static output in `docs/`
- `npm run preview` — preview the production build

## Page structure

`src/pages/index.astro` composes five section components in order:

1. **`Hero.astro`** — name, title, layered topographic ridge background
2. **`Intro.astro`** — bio, skills, headshot
3. **`Cassette.astro`** — career timeline as a scroll-pinned bike cassette (GSAP ScrollTrigger). Rotation + chain motion are driven by scroll progress
4. **`Projects.astro`** — work and personal project cards
5. **`Contact.astro`** — links (email click-to-copy, GitHub, LinkedIn, resume), Mt. Rainier illustration

Design tokens (colors, typography, spacing, motion) live in `src/styles/design-tokens.css` and are referenced as CSS custom properties throughout. Don't duplicate them into `tailwind.config`.

## Copy / tone rules

These shape every piece of visible text on the site:

- **No em dashes (—) or en dashes (–) anywhere in user-facing copy.** The user considers em dashes an AI tell. Use commas, colons, parentheses, or "and" instead. For date ranges, use a regular hyphen (`-`); for section labels that span a timeline, use an arrow (`→`) as in "2019 → 2026".
- **Never use exclamation points.** The voice is dry, observational, slightly literary. Field journal, not corporate blog.
- **Sentence case everywhere.** "Software developer" not "Software Developer." Goes for headings, buttons, labels. The hero title and the bio's "Senior Software Engineer" are exceptions (proper titles).
- **Specifics over abstractions.** "double cortado, 9 a.m." not "I like coffee." "80–90% perf boost" not "improved performance."
- **No "I love" or "I'm passionate about."** Show, don't tell.
- **Cycling vocabulary is OK in moderation.** "Big ring," "tempo," "cadence," "KOM" — they reward attentive readers. Don't translate them.

## Static assets

- Resume PDF: `public/files/aiden_gonzalez_resume.pdf`
- Headshot: `public/images/headshot.webp` (latin-treated cutout, ~215KB)
- Self-hosted fonts (latin only): `public/fonts/inter-latin-wght-normal.woff2`, `jetbrains-mono-latin-wght-normal.woff2`, `source-serif-4-latin-wght-italic.woff2`

## Deploying

The build outputs to `docs/`, which GitHub Pages serves. After a build, commit the `docs/` changes alongside source changes. `CNAME` in `public/` keeps the `aidengonzalez.dev` domain bound on every build.
