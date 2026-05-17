# Resume notes, aidengonzalez.dev redesign

**Snapshot date:** 2026-05-16
**Branch:** `redesign`
**Status:** Plan approved, Step 1 not yet started (paused before kickoff).

When picking this back up, hand this file to Claude alongside the other `redesign_specs/` docs. It captures the decisions made during alignment that are NOT written into the spec docs themselves, plus the exact next action.

---

## Alignment decisions (settled in conversation, not in spec)

Re-decide only if you change your mind on one of these.

- **Project location**, Replace the Flask site at the repo root on the `redesign` branch. Flask code stays on `master` as a fallback. Files to delete on `redesign` when Step 1 starts: `app.py`, `templates/`, `static/`, `docs/`, `projects.json`, `requirements.txt`, `build.sh`. Keep `CNAME`. Update `.gitignore` for Astro.
- **Deploy target**, GitHub Pages, build output to `docs/`. Astro config: `outDir: './docs'`. Copy `CNAME` into `docs/` on every build so the domain stays bound.
- **Form backend**, Plain `mailto:` link for the trail-register submit. No Formspree, no serverless function.
- **No extras**, No Strava API integration. No analytics (no Plausible, no Cloudflare Web Analytics).
- **GitHub handle**, `aiden-gonzalez` (already substituted into `04_CONTENT.md`).
- **LinkedIn**, `linkedin.com/in/aiden-gonzalez-712a26170` (already substituted into `04_CONTENT.md`).
- **Email**, `aidenlgonzalez2@gmail.com` (personal, not the work email).

## Font picks (confirmed)

- **Sans** (body, headings): **Inter**, self-host woff2 from rsms.me/fonts
- **Mono** (labels, coordinates, metadata): **JetBrains Mono**, self-host from official Google Fonts repo
- **Serif italic** (field-journal moments only): **Source Serif 4**, self-host

No Google Fonts CDN. `font-display: swap`. Ship full character sets initially; subset during polish (Step 5 in the technical spec).

## Spec edits already applied

The four numbered docs in this folder have already been amended to reflect:

1. **Passport stamp removed** entirely (was Section 7). Section count is now 6; "three wow moments" is now two. Affects all six spec files.
2. **Coffee references** changed from pourover → espresso (flat whites, cortados). Affects `01_PROJECT_BRIEF.md` and `04_CONTENT.md`.
3. **Cassette layout flipped**: text panel on the left, cassette on the right, chain wrapping from the right side. Matches a real bike's drive side. See `02_TECHNICAL_SPEC.md` Step 3 and the "Cassette on mobile" friction note.
4. **Real GitHub/LinkedIn handles** substituted for placeholders in `04_CONTENT.md`.

The spec is otherwise unchanged from the original handoff.

## Next action

Step 1 of the build (per `02_TECHNICAL_SPEC.md`), broken into five concrete tasks:

1. **Remove Flask site from `redesign` branch.** Delete the files listed under "Project location" above. Keep `CNAME` and `redesign_specs/`. Update `.gitignore` for Astro (node_modules/, .env, dist/, .DS_Store).
2. **Scaffold Astro + Tailwind.** `npm create astro@latest` at the repo root (minimal template, TypeScript strict). Add the official `@astrojs/tailwind` integration. Configure `astro.config.mjs` with `outDir: './docs'`. Ensure the build pipeline drops `CNAME` into `docs/` (either a script step or place `CNAME` in `public/` so Astro copies it automatically).
3. **Wire up design tokens.** Move `redesign_specs/03_design-tokens.css` into `src/styles/design-tokens.css` (copy, don't move, keep the spec doc intact). Import from the base layout. Tokens stay authoritative as CSS variables; don't recreate them inside `tailwind.config.js`.
4. **Self-host fonts.** Download Inter, JetBrains Mono, and Source Serif 4 (italic specifically for the serif) as woff2 into `public/fonts/`. Declare `@font-face` in the base layout.
5. **Build palette + type-scale test page.** Single Astro page at `/test` showing every color swatch (with hex + CSS variable name) and every type voice at every size from the tokens file. Mobile-responsive at 375px width. Stop here for review before any feature work.

Keep commits small and granular. Do not deploy until the test page is signed off.

---

## Where things live

- **`redesign_specs/`**, Source of truth for design. Don't drift from it without flagging.
- **`master` branch**, Original Flask site, untouched. Safe fallback.
- **`redesign` branch**, Where the Astro rebuild happens.
- **`CNAME`**, Currently points the domain to `aidengonzalez.dev`. Must survive every build.
