# Domingo Diaz Portfolio

Submitted GitHub Pages URL: https://ddiaz-collab.github.io/ForeverIntense/

## Site Structure

- `index.html` - Home page
- `about.html` - About page and contact form
- `projects.html` - Project examples
- `assets/css/site.css` - Shared styles
- `assets/js/script.js` - About-page interactions and form validation
- `assets/images/avatar.svg` - Profile illustration

## Gestalt Principles Applied

- Proximity: Related blocks of content are grouped into sections and cards so the eye can quickly understand what belongs together.
- Similarity: Repeated colors, button styles, heading treatment, and spacing create a consistent visual language across all three pages.

## Accessibility Improvements Documented

- Added a skip link so keyboard users can jump directly to the main content.
- Kept a logical heading order across every page (`h1` to `h2` to `h3`) with no skipped levels.
- Used semantic landmarks (`header`, `nav`, `main`, `section`, `footer`) so screen readers can navigate the page reliably.
- Added visible error messages for the contact form and kept each message connected to its input through `aria-describedby` and `aria-invalid` states.
- Kept focus states visible and keyboard-friendly for the Show process details button and the form controls.
- Verified that the page uses strong text/background contrast combinations so the interface supports WCAG AA readability.

## JavaScript Features

- The About page has a Show process details button. It uses `querySelector()` and `addEventListener()` to show or hide text without reloading the page.
- The contact form checks the name, email, service, budget, and message fields before submission.
- Validation errors appear in the page and are connected to their fields with accessible attributes.
- Errors clear when the user starts correcting a field.
- The form and the Show process details button use standard keyboard-accessible controls.

The JavaScript is stored in the separate `assets/js/script.js` file and is loaded by `about.html`.
