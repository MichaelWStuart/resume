# Resume Renderer — Build Specification (V1.0)
Owner: Michael Stuart  
Purpose: One-page résumé as HTML → pixel-perfect PDF export.

---

## 1. Overview

Build a web application that renders a single-page résumé using HTML and CSS with print-perfect dimensions, then exports it as a PDF.  
Content should be easily editable for rapid iteration.  
Primary target: desktop print/export.

---

## 2. Tech Stack

| Category   | Choice                                |
|-----------|----------------------------------------|
| Framework | Vite + React + TypeScript             |
| Styling   | Tailwind CSS (preferred) or SCSS      |
| Fonts     | Inter (Google Fonts)                  |
| PDF Export| html2canvas + jsPDF or react-to-print |
| Output    | Web app that exports to a PDF file    |

Notes:
- Choose whichever PDF export approach (html2canvas + jsPDF vs react-to-print) yields sharper, more reliable output.
- No backend required.

---

## 3. Goals & Constraints

- Default page size: **US Letter** (8.5" × 11").
- Optional toggle for **A4** support.
- Layout must fit **exactly one page** (no vertical scrolling in the print layout).
- Print preview must match the exported PDF layout exactly.
- Fonts should be embedded or otherwise configured so that the PDF does not fall back to a different font.
- All textual content should live in a single config object or JSON file to make future copy changes trivial.

---

## 4. File & Component Structure

Suggested structure (can be adjusted if needed, but keep it simple and modular):

```text
src/
  main.tsx
  App.tsx
  components/
    ResumePage.tsx
    Header.tsx
    Summary.tsx
    ExperienceSection.tsx
      ExperienceItem.tsx
    Skills.tsx
    ReferenceBlock.tsx
  lib/
    pdf.ts           # PDF export utility / hooks
  content/
    resume.ts        # or resume.json — all editable content here
```

Requirements:
- All strings for the résumé (summary text, job titles, bullets, skills, footer text) should come from `content/resume.ts` or `content/resume.json`.
- Components should be presentational and accept data via props.

---

## 5. Layout Rules

### 5.1 Section Order

The page should contain the following sections in this order:

1. Header
2. Summary
3. Experience
4. Skills
5. Reference footer

### 5.2 Header

- Display name prominently at the top (left-aligned).
- Contact info (email, phone) on the same horizontal line or just beneath it.
- Keep links minimal in V1 (GitHub/LinkedIn can be added later, but not required for this build).

### 5.3 Summary

- Short paragraph or two.
- This will later be rewritten to emphasize a transition from:
  - early front-end focus → full-stack work → agentic / AI-driven development.
- For now, use placeholder text loaded from the content file.

### 5.4 Experience

- Each role should be rendered as an `ExperienceItem`.
- Include:
  - Job title
  - Company
  - Date range
  - Location or "Remote"
  - Bullet list of achievements (placeholder bullets for now)

The **most recent role** should be:

- Title: `Engineering Lead`
- Company: `Third Ear`
- Dates: `Feb 2025 – Present`
- Location: `Remote`
- Use placeholder bullets; actual content will be revised later.

All other roles and dates should come from the existing résumé content and be wired through the content file.

### 5.5 Skills

- Render skills as a compact list or grid of tags.
- Keep it visually dense but legible.

### 5.6 Reference Footer

- Single line at the bottom of the page, e.g.:

  `Reference available upon request (active collaborator).`

---

## 6. Visual & Layout Design

- Monochrome (black/greys) for V1; no color accents required yet.
- Use Inter font for body and headings.
- Keep vertical spacing tight to maximize information density while maintaining readability.
- Section titles:
  - Small caps or slightly increased letter spacing.
  - Modest font size change (subtle, not huge banners).

Margins:
- Ensure safe printable margins (~0.4–0.5 inches on all sides) so nothing gets clipped.
- No header/footer added by the browser should overlap résumé content.

The layout should be designed so that:
- There is no vertical scrolling in the main résumé container when viewing at 100% zoom in a reasonably sized desktop window.
- When printing, the content fits entirely on one page.

---

## 7. Interactions & PDF Export

- Place a button in a non-printing area (e.g., above or beside the résumé) labeled **“Download PDF”**.
- Clicking the button should:
  - Generate a PDF of the résumé page.
  - Trigger a download (e.g., `Michael-Stuart-Resume.pdf`).

Implementation details:
- Use a dedicated `lib/pdf.ts` module or hook to encapsulate the export logic.
- Ensure that the PDF output:
  - Preserves fonts.
  - Preserves layout and spacing.
  - Has no unintended scaling or clipping.

If using `react-to-print`:
- Configure a dedicated print component or ref that targets only the résumé page.
- Hide the export button and any non-resume UI in print mode via `@media print` styles.

If using html2canvas + jsPDF:
- Render at sufficiently high resolution to keep text sharp.
- Match the canvas dimensions to the chosen page size and DPI.

---

## 8. Print Styles

Use `@media print` to:
- Hide any UI that is not part of the résumé (buttons, toggles, debug info).
- Ensure the résumé content is centered and fits the page.
- Remove any background colors not desired in the printout (start simple with white background and dark text).

Test:
- Print preview in Chrome (or similar) should show exactly one page.
- The PDF created using the browser’s built-in "Save as PDF" and the in-app "Download PDF" button should both produce clean, readable output.

---

## 9. Acceptance Criteria

A. **Layout & Print**
- The résumé appears as a single page with no scrolling.
- Print preview shows exactly one page with no clipped text.
- The PDF generated via the in-app export matches the on-screen layout.

B. **Content Wiring**
- All résumé content (text) is defined in one content file/module (`content/resume.ts` or `.json`).
- Changing values in that file updates the rendered résumé without code changes in components.

C. **Code Quality**
- TypeScript compiles without errors.
- No runtime errors or React warnings in the console for normal usage paths.
- Components are reasonably small and focused (Header, Summary, Experience, Skills, ReferenceBlock).

---

## 10. Out of Scope for V1

These items are intentionally deferred for later iterations and DO NOT need to be implemented in this version:

- Fancy visual theming (colors, gradients, icons, etc.).
- Multiple résumé versions or layouts.
- Dark mode.
- QR codes or additional links (portfolio, GitHub, etc.).
- Any backend services or user auth.

---

## 11. Definition of Done

The project is considered complete when:

1. Running `npm run dev` or `pnpm dev` serves a single-page app showing the résumé.
2. The résumé renders within a single page in print preview (US Letter) with no clipping.
3. Clicking **“Download PDF”** triggers a PDF download that visually matches the on-screen résumé.
4. All resume text is controlled via a single content file.
5. There are no blocking TypeScript or runtime errors.
