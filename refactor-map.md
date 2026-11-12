# Refactor map: citizenfitz.com

Conventions: `~/.claude/skills/refactor-site/references/conventions.md`.
Project exceptions (CLAUDE.md): none. CLAUDE.md migration notes applied: `img/`, `js/`, `fonts/` move to `assets-*`; asset file names never change; Sass stays and follows the Sass section; `styles.css.map` is deleted; `backups/` untouched.

Build after the refactor: `sass --no-source-map styles/index.scss styles.css`.

## Files and folders

| Old | New | Reason |
|---|---|---|
| `img/` | `assets-img/` | Asset folder convention (CLAUDE.md). File names unchanged. |
| `img-portfolio/` | `assets-img/portfolio/` | Inside the image folder, but kept separate from site images so portfolio images are easy to find and update (your call at review). File names unchanged. |
| `img-portfolio/resume-fitz-2025.pdf` | `assets-media/resume-fitz-2025.pdf` | PDFs aren't images. Unreferenced by any page. Name unchanged. |
| `js/` | `assets-scripts/` | Asset folder convention (CLAUDE.md). `main.js` unchanged. |
| `fonts/Edelgotisch/` | `assets-fonts/` | Asset folder convention (CLAUDE.md); flattened because `Edelgotisch/` isn't kebab case. Font files unchanged. Not referenced by the site. |
| `styles.css.map` | (deleted) | CLAUDE.md: delete the source map. The rebuild drops the `sourceMappingURL` comment. |
| `styles/_header-and-footer.scss` | `styles/_component-header.scss` + `styles/_component-footer.scss` | One component per partial, `_component-[name]`. |
| `styles/_hero.scss` | `styles/_component-hero.scss` | Component partial naming. |
| `styles/_portfolio.scss` | `styles/_page-portfolio.scss` | Page-specific partial naming. |
| `index.html` | — | Already kebab case. |
| `launchworks.html` | — | Already kebab case. |
| `portfolio.html` | — | Already kebab case. No page renames, so no redirects needed. |
| `styles.css` | — | Compiled output linked by every page; name is fine. |
| `styles/` | — | Required location for Sass source (conventions). |
| `styles/_base.scss`, `_variables.scss`, `_mixins.scss`, `_utilities.scss`, `index.scss` | — | Already the convention's foundation and entry names. |
| `2026-Fitzgerald-Resume.pdf`, `2026-Fitzgerald-Resume-bak.pdf` | — | Asset names never change. Left at the site root: moving them would break any public links to the resume. |
| `resources/cf-hero.af` | — | Affinity design source, not served. Conventions have no folder for it; left alone. |
| `htaccess` | — | Server config; name is a tool/host concern. No redirects needed. |
| `CLAUDE.md`, `.gitignore` | — | Tool-defined names. |

## Sass structure (moves within the Sass source, no name changes)

These follow the conventions' Sass section. Compiled CSS keeps the same rules in the same cascade order, so the site renders the same. The screenshot check verifies this. (This table uses From/To headers on purpose: it describes moves, not renamed names, so the names check skips it.)

| From | To | Reason |
|---|---|---|
| `@import` (index.scss) | `@use` | `@import` is deprecated in Dart Sass. Each partial loads `@use "variables" as *;` and `@use "mixins" as *;` itself. |
| Google Fonts + Font Awesome `@import url(...)` in `_variables.scss` | top of `_base.scss` | `_variables.scss` holds Sass-only values and must not emit CSS. Still the first CSS in the output. |
| `fluid-size`, `fluid-space` mixins in `_variables.scss` | `_mixins.scss` | Partials organized by function. The size/spacing maps stay in `_variables.scss`. |
| `.btn` rules in `_base.scss` | `styles/_component-button.scss` | Component partial. |
| `.main-content`, `.section-inner` in `_base.scss` | `styles/_component-main-content.scss` | Component partial. |
| `.dropcap` in `_base.scss` | `styles/_component-dropcap.scss` | Component partial. |
| `.headshot` in `_base.scss` | `styles/_component-headshot.scss` | Component partial. |
| `.resume-download` (empty rule) in `_base.scss` | `styles/_page-portfolio.scss` | Used only on the portfolio page. |
| — | `_tokens.scss` not created | The site has no CSS custom properties yet. Converting Sass variables to custom properties is a design-system change, not a rename. |

## JavaScript variables

| Old | New | Reason |
|---|---|---|
| `navToggle` | — | camelCase, general to specific. |
| `navMenu` | — | camelCase, general to specific. |

## CSS selectors

| Old | New | Reason |
|---|---|---|
| `.nav-container` | `.nav-main__container` | BEM element of the `nav-main` block. |
| `.nav-logo` | `.nav-main__logo` | BEM element of the `nav-main` block. |
| `.nav-toggle` | `.nav-main__toggle` | BEM element of the `nav-main` block (also in `main.js`). |
| `.nav-menu` | `.nav-main__menu` | BEM element of the `nav-main` block (also in `main.js` and `_base.scss` `ul:not(...)`). |
| `.main-content__section-alt` | `.main-content__section--alt` | It's a variant of `.main-content__section` (always paired), so a BEM modifier. |
| `.main-content__section-alt-2` | `.main-content__section--alt-2` | Same; currently unused in the HTML. |
| `.nav-main` | — | Block name, general to specific. |
| `.site-header`, `.hero__*`, `.footer__*`, `.portfolio__*`, `.dropcap__letter`, `.btn--resume`, `.h1--main-content` | — | Already BEM, kebab case. |
| `.h1`, `.h2`, `.h3`, `.btn`, `.headshot`, `.section-inner`, `.resume-download`, `.main-content` | — | Kebab case; single-word blocks. |
| `.is-active` | — | State class, follows the `is` prefix rule. |
| `.footer-menu` (in `ul:not(.nav-menu):not(.footer-menu)`) | — | Matches nothing in the HTML (the footer uses `.footer__menu`). Renaming it to `.footer__menu` would change which lists get the diamond bullets, so it is left as is. Flagged below. |
| `fa-*`, `fas` | — | Font Awesome classes; required by the library. |

## IDs

| Old | New | Reason |
|---|---|---|
| (none) | — | The site has no IDs. |

## Design tokens

| Old | New | Reason |
|---|---|---|
| Sass variables (`$color-*`, `$font-*`, `$spacing-*`, `$breakpoint-*`, `$fluid-*`, etc.) | — | Already general to specific, kebab case. No CSS custom properties exist. |
| Mixins `fluid-size`, `fluid-space`, `theme-header-footer`, `theme-main` | — | Already general to specific. |

## Other

| Old | New | Reason |
|---|---|---|
| (none) | — | No dynamically built names: `main.js` uses only literal selectors. |

## Flagged for you (not changed)

- **Resume link case mismatch.** `portfolio.html` links to `2026-fitzgerald-resume.pdf`, but the file is `2026-Fitzgerald-Resume.pdf`. That works on your Mac but returns 404 on Bluehost's case-sensitive Linux servers, unless the live file is lowercase. Fixing it would change the link, so it is left as is.
- **`htaccess` rewrite.** `htaccess` serves `/portfolio-2.html` whenever `/portfolio.html` is requested, but there's no `portfolio-2.html` in the repo. If that file is live on the server, the live portfolio page isn't the one in this repo.
- **Unused CSS:**
  - `.portfolio__grid`, `__project`, `__project-meta`, `__header-divider`, `__project-image-figcaption`
  - `.btn--nav-cta`
  - `.main-content__section-alt-2`
  - `.footer-menu`

  Kept, since removing them isn't a rename.
- **Unused assets:** the Edelgotisch fonts, `img/fitz-headshot.jpeg`, and most of `img-portfolio/` (only 10 of its 41 images are linked). Kept.
- **Image URLs change.** Moving `img/` and `img-portfolio/` changes image URLs, and only pages get redirects. If anything outside the site hotlinks these images, those links will break.
