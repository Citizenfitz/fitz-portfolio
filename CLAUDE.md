# CLAUDE.md — citizenfitz.com portfolio

<!-- ********** HOW TO USE THIS FILE ********** -->
<!-- Lines marked ▲ are blanks for Fitz to fill in before the first session. -->
<!-- Keep this file short. Add a rule only after Claude gets something wrong. -->

## Project

Personal portfolio for Michael "Fitz" Fitzgerald, live at citizenfitz.com.
This is a revamp: the site must reflect his current work and focus, not his 2013–2024 agency years alone.

- Stack: hand-coded static HTML, CSS (currently compiled from Sass in `styles/`), vanilla JS in `js/`
- Hosting / deploy: Bluehost (Apache shared hosting). Redirects go in `.htaccess` in the site root. Append to the existing `.htaccess`; never overwrite or reorder Bluehost's own rules. Fitz uploads; Claude never deploys.
- Repo: github.com/Citizenfitz/▲

## Commands

- Dev server: ▲ (e.g. `npx serve .`)
- Build: ▲ (Sass compile command, if Sass is kept)
- Accessibility check: ▲ (e.g. `npx @axe-core/cli http://localhost:3000`)

## Migration to the new conventions (one-time)

The old site predates the conventions. Use the refactor-site skill; it holds the process, the rules, and the done criteria. Project specifics only:

- Expected folder moves: `img/` → `assets-img/`, `js/` → `assets-scripts/`, `fonts/` → `assets-fonts/`. Asset file names never change, including the resume PDFs.
- The CSS may be rewritten to the new conventions, as long as the site looks identical.
- Edit the Sass/CSS source, never a compiled file. Delete `styles.css.map` and any compiled CSS that no longer has a source. Sass stays; partials follow the Sass section of the conventions.
- Leave `backups/` alone: don't rename, edit or read it.

## Audience and positioning

Primary readers: hiring managers and recruiters for AI design engineer / AI solutions roles, and govcon digital services shops (Ad Hoc, Nava, Coforma, Guidehouse Digital and the like).

The story, in order of weight:

1. AI design engineer: builds AI-assisted tools with React/TypeScript, authors Claude skills and CLAUDE.md files, evaluates output with benchmarks.
2. Accessibility-first UX/UI engineer: Section 508 / WCAG, 20+ years, federal modernization (CPSC, HRSA).
3. Product designer and maker: FitzaCo and QuoDrox, physical products designed and shipped end to end.

Featured work: ▲ (candidates: FitzaCo Opportunity Evaluator, QuoDrox store and tiles, QuestRex React apps, CPSC dashboards, HRSA component library)

## Voice and copy

- Keep Fitz's wording. Fix typos and clear errors; do not rewrite his copy into simpler or "friendlier" language.
- No em dashes in visible copy.
- No invented metrics, clients, or claims. If a case study needs a number Claude doesn't have, leave `▲ TODO` in place and flag it.
- Never put client-confidential or PII details on the site. Federal work is described at the level Fitz supplies.

## Accessibility (non-negotiable)

- WCAG 2.2 AA minimum on every page. This site is itself a 508 portfolio piece.
- Semantic HTML first; ARIA only when no native element works.
- Every interactive element reachable and operable by keyboard, with a visible focus state.
- Color contrast 4.5:1 for body text, 3:1 for large text and UI components.
- Respect `prefers-reduced-motion`; no autoplaying motion without a pause control.
- All images have meaningful alt text or `alt=""` if decorative.
- Run the accessibility check before calling any page done.

## Code conventions

@~/.claude/skills/refactor-site/references/conventions.md

Project exceptions: none.

## Design

- Bold, modernist, typographically driven. Distinctive, not a template.
- ▲ Type choices, palette, and any existing brand assets to carry over.

## How to work in this repo

- Plan before building. For any change touching more than one file, propose the plan and wait for approval.
- Work one page or section at a time. Stop after each and summarize what changed.
- Do not deploy, push, or touch DNS or hosting settings. Fitz does those himself.
- Do not delete old pages; move retired pages to `archive/` instead. (Exception: obsolete compiled CSS and map files, per the migration section.)
- Commit messages: short imperative summary line, e.g. `Add CPSC case study page`.
