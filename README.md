# Brand-New Accessibility and Design Update

## WAVE-Style Error Fixes (One Sentence Per Fix)

1. I added a skip link on every page so keyboard users can jump directly to the main content region.
2. I kept one clear `h1` per page and maintained logical heading levels so screen readers can parse the page structure correctly.
3. I used semantic landmarks (`header`, `nav`, `main`, `footer`) and descriptive navigation labels so assistive technologies identify each major region.
4. I removed dead placeholder links and replaced them with meaningful destinations so all links are functional and keyboard-usable.
5. I improved focus visibility with a high-contrast `:focus-visible` outline so interactive elements remain easy to track while tabbing.
6. I rebuilt the contact form with explicit labels, grouped controls, and `aria-invalid` states so errors are announced and correctable.
7. I added a live error summary and focused the first invalid control after submit so users can recover from errors quickly.

## WCAG AA Contrast Validation (WebAIM)

1. I validated key text/background pairs with WebAIM Contrast Checker API and each tested pair passed WCAG AA for normal text.
2. `#1B2632` on `#FFFAF2` returned `14.7:1` (AA/AAA pass).
3. `#31485D` on `#FFFAF2` returned `9.12:1` (AA/AAA pass).
4. `#FFFFFF` on `#0D3B66` returned `11.4:1` (AA/AAA pass).
5. `#FFFFFF` on `#082742` returned `15.2:1` (AA/AAA pass).
6. The same palette is applied across `home.html`, `about.html`, and `projects.html` to keep contrast and branding consistent.

## Gestalt Principles Used

1. Proximity: I grouped related information into repeated card regions so visitors perceive each topic and project as a single unit.
2. Similarity: I repeated the same card styling, heading treatment, and button style to create a consistent visual language across pages.

## Accessible Form Checklist

1. I included proper `label` elements for every text input and textarea so each control has a clear accessible name.
2. I used `fieldset` and `legend` for service and budget choices so grouped controls are announced in context.
3. I implemented accessible error states using inline error text, `aria-describedby`, `aria-invalid`, and an alert summary for form-level feedback.
