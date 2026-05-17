# Claude Code kickoff prompt

Paste the entire block below as your first message to Claude Code after you `cd` into an empty project directory. It establishes context, sets expectations, and tells Claude where to find everything.

---

## How to use this

1. Create a new empty directory: `mkdir aidengonzalez-dev && cd aidengonzalez-dev`
2. Copy the four handoff files (`01_PROJECT_BRIEF.md`, `02_TECHNICAL_SPEC.md`, `03_design-tokens.css`, `04_CONTENT.md`) into the directory
3. Start Claude Code: `claude`
4. Paste the prompt below as your first message

---

## The prompt

```
I'm building my personal website. The design is fully scoped and I have four handoff documents in this directory:

- 01_PROJECT_BRIEF.md, design rationale, principles, section breakdown
- 02_TECHNICAL_SPEC.md, stack, project structure, build order, accessibility requirements
- 03_design-tokens.css, exact color, typography, and spacing values
- 04_CONTENT.md, all copy for the site, ready to paste in

Please start by reading all four files in order. Then summarize back to me:
1. The core design concept in one sentence
2. The recommended stack and why
3. The build order, and which step you'd recommend starting with today

Don't write any code yet, I want to confirm we're aligned before you start building. Once I say "go," follow the build order in the technical spec, completing Step 1 (tokens + typography setup) and stopping there so I can review.

Important constraints to remember throughout:
- Static-first. JavaScript only where the interactivity demands it (scroll transition, cassette).
- Sentence case everywhere. Never title case, never all caps except for tag pills.
- The voice is dry and observational. Never marketing-speak.
- prefers-reduced-motion fallbacks are non-negotiable.
- The cassette content must also exist as semantic HTML for screen readers.
- Self-host fonts (don't use Google Fonts CDN).
- Mobile-first responsive, design for 375px width, enhance up.

Tooling notes:
- Use the latest stable Astro
- Tailwind via the official Astro integration
- GSAP from npm, with the free ScrollTrigger plugin
- Commit early and often; meaningful commit messages

When you're ready to start, ask me any clarifying questions about my GitHub handle, deployment target, or anything in the brief that's ambiguous. Then we'll begin.
```

---

## What to expect on day one

Claude Code will read your four docs, summarize the project back to you, and ask a handful of clarifying questions. Likely questions to anticipate:

- **GitHub username**, your repo handle, used in commits and the contact section
- **LinkedIn URL**, for the direct channels panel
- **Real Strava integration**, yes or no? Adds API setup work
- **Deployment target**, Vercel, Cloudflare Pages, Netlify, or something else
- **Domain status**, is `aidengonzalez.dev` already registered and pointing somewhere?
- **Analytics**, do you want anything (Plausible, Fathom, none)?
- **Newsletter**, does the trail register submit to a real backend? If yes, which (Formspree, Resend, Buttondown)?

Have answers ready for these. The build moves faster when you've decided in advance.

---

## Useful follow-up prompts during the build

Once you're past day one, here are reusable prompts for common moments:

**When a section is done:**
```
This section is working. Before we move on:
1. Take a screenshot or describe the current state
2. Confirm the accessibility checklist for this section is complete
3. Commit with a meaningful message
4. Tell me what the next section is and what you'll start with
```

**When you hit a hard problem:**
```
Stop. Don't keep trying variations. Step back and describe:
1. What you're trying to achieve
2. What you've tried
3. Two or three alternative approaches with tradeoffs

I'll pick the direction.
```

**When the design starts drifting:**
```
This is moving away from the original concept. Re-read 01_PROJECT_BRIEF.md, especially the "core design principles" section. Then propose a revision that pulls us back without losing the progress we've made.
```

**Before deploying:**
```
We're ready to deploy. Run through this checklist:
1. Lighthouse audit on the production build
2. axe-core accessibility scan
3. Cross-browser test (note any issues, even small ones)
4. Mobile real-device test (or BrowserStack)
5. prefers-reduced-motion test
6. Keyboard navigation walkthrough
7. View source, confirm no debug code, no console.log, no commented-out blocks

Report any failures before we ship.
```

---

## Tips that aren't in the docs

**Use a separate branch per section.** `feat/cassette`, `feat/contour-transition`, etc. Merge to main only when each piece is review-ready. Makes it easier to back out a section that isn't working.

**Don't optimize prematurely.** Build the cassette with hardcoded data first. Move it to a JSON config later if you need to.

**Screenshot every milestone.** Drop screenshots into a `_progress/` folder (gitignored). Useful for showing the journey if you ever want to write a blog post about building this.

**Set a budget.** Pick a number of evenings (the spec suggests 7–9 working days). When you hit 1.5x that, stop adding features and ship what you have. Personal sites die in v2-itis.

**The contour-to-chain transition is the one you'll be tempted to over-engineer.** Build it functional first, polish second. A working 80%-good version is infinitely better than a 95%-good version that's still in your local branch six months from now.
```
