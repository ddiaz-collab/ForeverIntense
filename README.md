# Domingo Diaz Portfolio - Accessibility and Design Milestone

## Site Structure

The live site is three flat HTML files sharing one stylesheet, all committed directly to the repository root (no zip archives, no duplicate copies):

- [index.html](index.html) - Home
- [about.html](about.html) - About, skills, and the accessible contact form
- [projects.html](projects.html) - Project showcase
- [site.css](site.css) - The single stylesheet, linked by every page as `<link rel="stylesheet" href="site.css">`
- [wireframe.html](wireframe.html) / [WIREFRAME_DRAWING.txt](WIREFRAME_DRAWING.txt) - Planning documents for the layout above

Live URLs (all verified to render fully styled with the navy/cream palette):
- https://ddiaz-collab.github.io/ForeverIntense/
- https://ddiaz-collab.github.io/ForeverIntense/about.html
- https://ddiaz-collab.github.io/ForeverIntense/projects.html

## WAVE Fixes (One Sentence Per Fix)

1. I removed the broken `ccs/site.css` and `../ccs/site.css` stylesheet paths that pointed to a folder that never existed, so every page now loads `site.css` and renders styled instead of falling back to the browser default.
2. I deleted the duplicate homework files, extra CSS files, and the second `home.html` copy that were competing with the real site, leaving one canonical version of each page.
3. I added a skip link on every page so keyboard users can jump directly to the main content region.
4. I kept one clear `h1` per page and a logical heading order (h1 to h4) so screen readers can parse the page structure correctly.
5. I used semantic landmarks (`header`, `nav`, `main`, `footer`) with a labeled `nav` so assistive technology can identify each region.
6. I rebuilt the contact form with explicit `label` elements, `fieldset`/`legend` grouping, and `aria-describedby` error text so every control has a clear accessible name.
7. I fixed WAVE's "Redundant link" alert on the Home and About pages by pointing each call-to-action link to `projects.html#project-grid-heading` instead of duplicating the exact URL already used by the Projects nav link.

**Result after fixing all of the above:** running WAVE on all three live URLs returns **0 Errors, 0 Contrast Errors, and 0 Alerts** on every page (AIM Score 10/10).

## WCAG AA Contrast Validation (WebAIM Contrast Checker)

1. `#1B2632` on `#FFFAF2` returned `14.7:1` (AA/AAA pass).
2. `#31485D` on `#FFFAF2` returned `9.12:1` (AA/AAA pass).
3. `#FFFFFF` on `#0D3B66` returned `11.4:1` (AA/AAA pass).
4. `#FFFFFF` on `#082742` returned `15.2:1` (AA/AAA pass).
5. The same palette (defined once as CSS custom properties in `site.css`) is applied to `index.html`, `about.html`, and `projects.html`, so contrast and branding stay consistent across the whole site.

## Gestalt Principles Used

1. **Proximity** - On the About page, the three skill cards (Front-End Development, Design Systems, Accessibility Practices) and on the Projects page, the four project cards are grouped tightly inside a shared `.card-grid` container with consistent internal spacing, so visitors perceive each card's heading and description as one unit and each grid as one related set.
2. **Similarity** - Every page reuses the same header/nav treatment, the same `.card` and `.highlight` box styling, and the same `.button-link` style, so the repeated shape, color, and border pattern signal that these elements belong to the same system as the user moves between pages.

## Accessible Form Checklist (About Page)

1. Every text input and textarea has a matching `label` element, so each control has a clear accessible name.
2. `fieldset` and `legend` group the Preferred Service and Project Budget choices, so grouped controls are announced in context.
3. Inline error text, `aria-describedby`, `aria-invalid`, and a `role="alert"` error summary give accessible, actionable error feedback.
