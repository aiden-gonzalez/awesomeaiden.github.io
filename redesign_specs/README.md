# Handoff package — aidengonzalez.dev

Five files, designed to be read in order. Drop them all into a new project directory before you start Claude Code.

## Files

1. **`01_PROJECT_BRIEF.md`** — The design rationale. Why each section exists, what the site is and isn't, what success looks like.

2. **`02_TECHNICAL_SPEC.md`** — The build plan. Stack recommendation, project structure, day-by-day build order, accessibility requirements, performance budget.

3. **`03_design-tokens.css`** — The design system, code-ready. Colors, type, spacing, motion as CSS custom properties. Import this in your base layout.

4. **`04_CONTENT.md`** — All the copy for the site, organized by section. Edit this before you build.

5. **`05_CLAUDE_CODE_KICKOFF.md`** — The prompt to paste as your first message to Claude Code. Includes follow-up prompts for common moments during the build.

## Recommended day-one flow

1. Reserve your domain if you haven't (`aidengonzalez.dev`)
2. Create a new GitHub repo (private until you ship)
3. `git clone` it locally
4. Copy these five files into the repo root
5. `claude` to start Claude Code
6. Paste the prompt from `05_CLAUDE_CODE_KICKOFF.md`
7. Answer the clarifying questions
8. Commit the handoff docs to the repo with message "design handoff"
9. Start the build

## Approximate timeline

- **Day 1** — Setup, tokens, type system (½ day if you've done this before)
- **Days 2–3** — Static sections (hero, ride log, register)
- **Days 4–5** — Cassette mechanic
- **Day 6** — Polish
- **Day 7** — Accessibility audit, cross-browser test, deploy

Add 30–50% buffer if this is your first time using Astro or GSAP.

## When you're done

A reasonable victory condition: the site loads in under two seconds on a mid-range phone, scores 95+ on Lighthouse accessibility, and someone unprompted sends you the URL.

Good ride.
