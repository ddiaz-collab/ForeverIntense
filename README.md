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

## Accessibility Audit - Issues Found and Fixed

I ran WAVE directly on my live, styled pages and documented three of the issues it caught, why they matter, and what I changed in the code to fix them.

### Issue 1: Broken stylesheet link (page rendered unstyled)
- **Page/Element:** All three pages (`index.html`, `about.html`, `projects.html`) - the `<link>` tag in the `<head>`.
- **What WAVE reported:** With the stylesheet pointed at a nonexistent `ccs/site.css` path, WAVE showed the page in its unstyled, default-browser state and contrast/structure results that didn't match my actual design, because none of my CSS was loading.
- **Why it matters:** If the stylesheet never loads, none of my color, spacing, or layout choices exist for the visitor. A screen reader user isn't affected by missing colors, but a low-vision user relying on my (checked) contrast ratios gets none of that benefit, and a sighted user just sees broken, default HTML - the whole design and every accessibility decision built into the CSS stops applying.
- **Fix:** I corrected the path in every page to `<link rel="stylesheet" href="site.css">`, matching the exact file name and location in the repo root, and deleted the old broken `ccs/` reference entirely.

### Issue 2: Missing form labels on the contact form
- **Page/Element:** `about.html` - the contact form inputs (`fullName`, `email`, `message`, service checkboxes, budget radios).
- **What WAVE reported:** "Missing form label" errors on the form controls, since they had placeholder text but no associated `<label>` elements.
- **Why it matters:** A screen reader announces a form field by its label, not its placeholder - placeholder text disappears the moment you start typing and isn't reliably read by assistive tech. Without a real label, a screen reader user hears something like "edit text, blank," with no idea what to type there.
- **Fix:** I added an explicit `<label for="...">` tied to each input's `id`, plus `<fieldset>`/`<legend>` around the service and budget groups, so every control now has a clear, permanent accessible name.

### Issue 3: Redundant links with identical destinations
- **Page/Element:** `index.html` and `about.html` - the "View Projects" call-to-action links, which pointed to the exact same URL as the "Projects" link in the main nav.
- **What WAVE reported:** "Redundant link" alert, flagging two links on the same page going to the identical destination.
- **Why it matters:** Screen reader users often pull up a list of all links on a page to navigate quickly. Two links with different wording going to the exact same place adds confusing, duplicate noise to that list and makes the page harder to scan efficiently.
- **Fix:** I changed the call-to-action links to point to `projects.html#project-grid-heading` instead of duplicating the nav link's exact URL, so each link now has a distinct, purposeful destination.

## WAVE Fixes (One Sentence Per Fix)

1. I removed the broken `ccs/site.css` and `../ccs/site.css` stylesheet paths that pointed to a folder that never existed, so every page now loads `site.css` and renders styled instead of falling back to the browser default.
2. I deleted the duplicate homework files, extra CSS files, and the second `home.html` copy that were competing with the real site, leaving one canonical version of each page.
3. I added a skip link on every page so keyboard users can jump directly to the main content region.
4. I kept one clear `h1` per page and a logical heading order (h1 to h4) so screen readers can parse the page structure correctly.
5. I used semantic landmarks (`header`, `nav`, `main`, `footer`) with a labeled `nav` so assistive technology can identify each region.
6. I rebuilt the contact form with explicit `label` elements, `fieldset`/`legend` grouping, and `aria-describedby` error text so every control has a clear accessible name.
7. I fixed WAVE's "Redundant link" alert on the Home and About pages by pointing each call-to-action link to `projects.html#project-grid-heading` instead of duplicating the exact URL already used by the Projects nav link.

**Result after fixing all of the above:** running WAVE on all three live URLs returns **0 Errors, 0 Contrast Errors, and 0 Alerts** on every page (AIM Score 10/10).

## Design Direction (One Palette, No Contradictions)

Earlier drafts of this project had three different color plans in three different files (a navy/blue/gold plan in an old site-plan wireframe page, a dark-gray/gold plan in `WIREFRAME_DRAWING.txt`, and a teal/gold/sky-blue plan in an old `HOMEWORK2ccs.css`), and none of them were actually implemented on the live site. I picked one direction - the deep navy and warm cream palette - implemented it as CSS custom properties in `site.css`, and updated every other planning document to match those exact hex values so there is only one palette referenced anywhere in this repository:

- Page background: `#f5f0e7`, card/panel surface: `#fffaf2`
- Primary brand / accent: `#0d3b66` (deep navy)
- Secondary accent: `#b4572b` (warm terracotta)
- Body text: `#1b2632`, muted text: `#31485d`

`wireframe.html` and `WIREFRAME_DRAWING.txt` now use these same hex values instead of the old, contradicting palettes.

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

## Contact Form Validation Walkthrough (JavaScript, in my own words)

All of this lives in the `<script>` block at the bottom of `about.html`.

- `const form = ...`, `const fullName = ...`, `const email = ...`, `const message = ...` grab references to the form and its three single-value fields by ID, plus `serviceInputs`/`budgetInputs` grab the checkbox and radio groups with `querySelectorAll` wrapped in `Array.from()` so I can use array methods like `.some()` and `.forEach()` on them.
- `fullNameError`, `emailError`, `serviceError`, `budgetError`, `messageError` grab each field's own error `<p>`, and `formErrors`/`successMessage` grab the whole-form summary and success messages.
- `setFieldError(field, errorNode, hasError)` is my reusable helper for one input: it sets `aria-invalid` to `"true"` or `"false"` based on `hasError`, and sets `errorNode.hidden = !hasError` - this is exactly where an error message gets unhidden, since `hidden` flips to `false` the moment `hasError` is `true`.
- `markGroup(inputs, hasError)` does the same job for a group of checkboxes/radios: it sets `aria-invalid="true"` on every input in the group when there's an error, or removes the attribute entirely when the group is valid, since `aria-invalid="false"` on every passing checkbox would be redundant noise.
- Inside `form.addEventListener("submit", ...)`, `event.preventDefault()` stops the page from reloading so my script stays in control.
- `nameInvalid`, `messageInvalid` check `.value.trim().length === 0` to catch empty fields; `emailInvalid` reads the browser's own `email.validity.valid`; `serviceInvalid`/`budgetInvalid` use `.some()` to check whether at least one input in each group is `.checked`, negated so `true` means nothing was selected.
- I call `setFieldError` once per single field and `markGroup` once per group, which is what actually shows/hides each error message and sets/clears `aria-invalid` on submit, every time, for every field, based on its current state.
- `hasErrors` ORs all five checks together; `formErrors.hidden`/`successMessage.hidden` are set from that so the right whole-form message shows.
- If `hasErrors` is `true`, I use `.find()` on the first input of each field/group to locate whichever one currently has `aria-invalid="true"`, and call `.focus()` on it so the user (and a screen reader) lands directly on the first problem.

## Reflection

Running WAVE on my own actual pages taught me way more than reading about accessibility ever did. Before this, I treated accessibility like a checklist you add at the end, not something baked into the code from the start. The redundant link alert was the one that surprised me most - I never thought about the fact that two links going to the same URL with different wording actually confuses screen reader users, since their software often lists all links on a page out of context, and two identical destinations with different names just adds noise. Fixing the stylesheet path was a good reminder that accessibility means nothing if the page isn't even rendering the way I designed it, since a broken `<link>` tag silently falls back to unstyled HTML with no warning. Rebuilding the contact form with real `label` elements, `fieldset`/`legend` grouping, and `aria-describedby` errors made me realize how much invisible structure goes into a form that "looks fine" visually but is unusable to someone who can't see the layout. Going forward, I want to run WAVE while I'm building, not after, and treat 0 errors as the baseline, not the finish line. This project changed how I think about who my code is actually for.
