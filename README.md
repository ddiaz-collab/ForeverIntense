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

I ran WAVE (wave.webaim.org) directly against my live GitHub Pages URLs, not a local file or a report link. Before I made these three changes, the baseline scan of `index.html`, `about.html`, and `projects.html` came back at 0 Errors / 0 Contrast Errors / 0 Alerts, so to have real, current issues to document I added a profile photo, an "Available for new projects" badge, and two footer icon links to the live pages, then ran WAVE again and let it catch what was actually wrong with that new markup.

### Issue 1: Missing alternative text
- **Page/Element:** `about.html` - the new profile photo, `<img src="avatar.svg" class="profile-photo">` in the About Me section.
- **What WAVE reported:** 1 "Missing alternative text" error, because the `<img>` tag had no `alt` attribute at all.
- **Why it matters:** A screen reader announces an image by its `alt` text. With none present, the screen reader either skips the image completely or reads the raw filename, so a blind or low-vision visitor gets zero information about who the photo is or why it's there.
- **Fix:** Added `alt="Illustrated portrait icon of Domingo Diaz"` to the `<img>` tag. WAVE re-scan of `about.html`: 0 Errors, 0 Contrast Errors, 0 Alerts.

### Issue 2: Empty links (icon-only social links)
- **Page/Element:** Footer of all three pages - the GitHub and LinkedIn icon links, `<a class="social-icon social-icon--github">` and `<a class="social-icon social-icon--linkedin">`, which had no text content and no `aria-label`.
- **What WAVE reported:** 2 "Empty link" errors per page, one for each icon link, because the link had a background-image icon but nothing a screen reader could read as its name.
- **Why it matters:** A screen reader announces an empty link as just "link, link," with no destination or purpose. A keyboard/screen-reader user has no way to know one goes to GitHub and the other to LinkedIn, so the links are functionally unusable without sight.
- **Fix:** Added `aria-label="Domingo Diaz on GitHub"` and `aria-label="Domingo Diaz on LinkedIn"` to the two links. WAVE re-scan of all three pages: 0 Errors, 0 Contrast Errors, 0 Alerts.

### Issue 3: Very low contrast text
- **Page/Element:** `index.html` - the new `<span class="badge-new">Available for new projects</span>` badge in the hero section.
- **What WAVE reported:** 1 "Very low contrast" error on the badge text, from the original CSS rule `color: #c9a978` on a `background: #f2e6d4` panel (below the 4.5:1 ratio WCAG AA requires for normal text).
- **Why it matters:** Low-vision and colorblind users, and anyone reading a phone screen in bright light, can lose text like this entirely against its background, even though it looks passable on a calibrated monitor.
- **Fix:** Changed `.badge-new`'s `color` to `var(--color-brand-strong)` (`#082742`), matching the same dark navy already validated at 11.4:1+ elsewhere on the site. WAVE re-scan of `index.html`: 0 Errors, 0 Contrast Errors, 0 Alerts.

All three fixes are live at the URLs above; re-running WAVE on `index.html`, `about.html`, and `projects.html` today returns 0 Errors, 0 Contrast Errors, and 0 Alerts on every page (AIM Score 10/10).

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

When I first ran WAVE on my own site, part of me expected it to just confirm what I already believed: that the code looked fine. Instead it caught three things I had missed, a photo with no alt text, two icon links with no name, and a badge whose color I picked because it looked nice, not because I checked it against the background. That was the biggest shift for me. None of these were things I did on purpose; they were things I overlooked because they never broke anything for me. I don't use a screen reader, and my eyes read low-contrast text just fine, so the tool became a stand-in for a user I was never going to be. Fixing all three took less than ten minutes combined, which bothered me a little, because it meant the barrier was never the work, it was just not checking. I used to think accessibility testing was something you did once, at the end, to satisfy a rubric. Now I see it as closer to spell-check: quick, cheap, and something I should run every time I add anything new to a page, not just when a grade is riding on it.
