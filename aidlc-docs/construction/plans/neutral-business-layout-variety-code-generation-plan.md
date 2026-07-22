# Code Generation Plan - Neutral and Business Layout Variety

> **Status: Section-content and test-organization refinement generated on 2026-07-22; awaiting review.** Student-editable copy, test organization, all three templates, regression, contrast, spacing, lint, TypeScript, and production-build verification is green. Manual responsive browser review remains because the environment blocked additional headless-browser captures after its approval quota was reached.

## Unit Context

- **Unit**: Neutral and Business Presentation Enhancement.
- **Workspace root**: `/Users/nhamhhung/my-portfolio`.
- **Project type**: Brownfield React 19, TypeScript, Chakra UI, and Vite application.
- **Stories**: NBV-US-01, NBV-US-02, NBV-US-03, and NBV-US-04.
- **Owned behavior**: Neutral and Business shells, navigation, Hero, About, Projects, scoped CSS, and focused UI tests.
- **Dependencies**: Existing template contract, App route/layout ownership, shared data, shared actions, Chakra UI, React Icons, and CSS variables.
- **Preserved interfaces**: `PortfolioTemplate`, `PortfolioShellProps`, `SectionId`, shared data types, hashes, layout modes, and Engineering presentation.
- **Database and services**: None.
- **New runtime dependencies**: None.

## Planned File Scope

### Modify In Place

- `src/templates/neutral/NeutralShell.tsx`
- `src/templates/neutral/NeutralHero.tsx`
- `src/templates/neutral/NeutralAbout.tsx`
- `src/templates/neutral/NeutralProjects.tsx`
- `src/templates/business/BusinessShell.tsx`
- `src/templates/business/BusinessHero.tsx`
- `src/templates/business/BusinessAbout.tsx`
- `src/templates/business/BusinessProjects.tsx`
- `src/App.css`
- `src/App.test.tsx`
- `README.md` only if its template descriptions no longer match the implemented structures

### Create

- `aidlc-docs/construction/neutral-business-layout-variety/code/code-generation-summary.md`

No copied, suffixed, or parallel application components will be created.

## Generation Steps

### Step 1: Establish the Baseline and Protect Contracts

**Stories**: NBV-US-03, NBV-US-04

- [x] Confirm the current focused App and registry tests pass before presentation edits.
- [x] Record the existing Engineering structure and template-registry behavior as immutable regression boundaries.
- [x] Confirm the affected files exist and no duplicate Neutral or Business component variants are present.

### Step 2: Replace the Neutral Shell with a Magazine Masthead

**Stories**: NBV-US-01, NBV-US-03

- [x] Replace the fixed desktop side rail with a full-width magazine masthead.
- [x] Provide stable desktop navigation, active-section state, theme control, and layout control.
- [x] Keep a compact mobile header and accessible drawer using stable `data-testid` values.
- [x] Remove the desktop main-content offset and provide a full-width constrained editorial canvas.

### Step 3: Reshape Neutral into Magazine Modules

**Stories**: NBV-US-01

- [x] Recompose Hero as a featured opening story with identity, media, statement, actions, and issue metadata.
- [x] Recompose About as a modular multi-column editorial spread with readable line lengths.
- [x] Recompose Projects into varied repeatable magazine modules while preserving project links and shared data.
- [x] Use scoped styling to make the shared Gallery read as a compact visual archive without creating a new Gallery component.

### Step 4: Replace the Business Shell with a Consulting Report

**Stories**: NBV-US-02, NBV-US-03

- [x] Replace the current two-tier top navigation with a concise report header and sticky desktop contents rail.
- [x] Include stable numbered navigation, active-section context, contact, theme, and layout controls.
- [x] Collapse the contents rail into an accessible compact mobile header and drawer.
- [x] Ensure the sticky rail cannot obscure content and the main document retains normal vertical flow.

### Step 5: Reshape Business into Evidence Chapters

**Stories**: NBV-US-02

- [x] Recompose Hero as a report cover and executive brief rather than an outcome dashboard.
- [x] Recompose About around executive summary, capabilities, evidence, and supported outcomes.
- [x] Recompose Projects as recommendation-style cases with context, contribution, evidence, and actions.
- [x] Derive all labels and evidence from existing data without introducing required metrics.

### Step 6: Replace Scoped Layout Styles

**Stories**: NBV-US-01, NBV-US-02, NBV-US-03, NBV-US-04

- [x] Remove obsolete Neutral side-rail and Business executive-dashboard selectors.
- [x] Add isolated magazine and report layout rules with stable grid constraints and readable content widths.
- [x] Add responsive reflow for mobile, tablet, laptop, and wide desktop without unintended horizontal overflow.
- [x] Preserve visible focus, reduced-motion behavior, image dimensions, and Engineering CSS.
- [x] Scan the resulting palettes and hierarchy to avoid one-note styling and template leakage.

### Step 7: Update Tests and Student Guidance

**Stories**: NBV-US-03, NBV-US-04

- [x] Update App tests for the new Neutral masthead and Business contents-rail navigation test IDs.
- [x] Add structural assertions that distinguish the new shells from their previous layouts.
- [x] Retain coverage for all three templates, both layout modes, section hashes, journal routes, controls, fallback, and Engineering regression.
- [x] Update README template descriptions if required by the new structures.
- [x] Run focused App and registry tests after the test updates.

### Step 8: Verify Scope and Record Generation Evidence

**Stories**: NBV-US-01, NBV-US-02, NBV-US-03, NBV-US-04

- [x] Run the complete automated test suite, ESLint, TypeScript checks, and production build.
- [ ] Inspect Neutral and Business at representative desktop and mobile viewport sizes. Neutral desktop passed; remaining captures were blocked by the environment approval quota and require manual review.
- [x] Check controls, wrapping, sticky behavior, image framing, and page overflow in both layout modes through source inspection and automated component coverage.
- [x] Confirm Engineering remains unchanged and no Artistic runtime or duplicate generated files were added.
- [x] Run `git diff --check` and review the scoped diff.
- [x] Create the concise code-generation summary and mark all story coverage complete.

### Step 9: Harden Spacing and Contrast

**Stories**: NBV-US-01, NBV-US-02, NBV-US-03

- [x] Audit Neutral and Business foreground/background pairs against WCAG contrast thresholds.
- [x] Audit section, panel, navigation, image-caption, and control edge clearance at responsive breakpoints.
- [x] Apply focused token or layout fixes without changing the template structures or Engineering presentation.
- [x] Add deterministic regression checks for critical contrast pairs and spacing safeguards.
- [x] Rerun the focused and complete verification suites and update generation evidence.

### Step 10: Synchronize Internship Experience from Resume

**Stories**: NBV-US-04

- [x] Extract the Sea Limited/Shopee Finance and PSA International internship details from the bundled resume.
- [x] Add both internships to the shared chronological experience data and align the existing Sea full-time period with the resume.
- [x] Add deterministic data assertions for internship titles, employers, periods, and populated descriptions.
- [x] Rerun focused and complete verification and update generation evidence.

### Step 11: Add School Awards and Achievements

**Stories**: NBV-US-04

- [x] Add the 2017 Saint Andrew's Model Student Award and 2015 Zhonghua Singapore Youth Festival Choir Silver Award to shared data.
- [x] Support an accessible text mark when an award has no accurate local logo asset.
- [x] Add deterministic assertions for both awards and their display metadata.
- [x] Rerun focused and complete verification and update generation evidence.

### Step 12: Add the Zhonghua Crest Asset

**Stories**: NBV-US-04

- [x] Store the supplied official Zhonghua crest as an optimized local application asset.
- [x] Replace the Zhonghua text mark with the crest while preserving accessible alternative text and generic fallback support.
- [x] Update deterministic asset assertions and run focused rendering checks.
- [x] Rerun complete verification and update generation evidence.

### Step 13: Centralize Section Descriptions and Relocate Data Tests

**Stories**: NBV-US-03, NBV-US-04

- [x] Add one typed student-facing data source for every non-home section's eyebrow, title, and description.
- [x] Wire shared Engineering sections and Neutral/Business custom sections to the centralized copy with visible descriptions below headings.
- [x] Relocate all test scripts out of `src/data` into `src/test/data` while preserving coverage.
- [x] Update student guidance and deterministic assertions for complete, non-empty section copy.
- [x] Run focused and complete verification, confirm `src/data` contains no tests, and update generation evidence.

### Step 14: Preserve Full Local Journal Images

**Stories**: NBV-US-04

- [x] Render local journal images without cropping in both the Journal listing and local post page.
- [x] Preserve stable media dimensions and retain the existing treatment for external WordPress thumbnails.
- [x] Add deterministic rendering assertions for the local image-fit behavior.
- [x] Run focused and complete verification and update generation evidence.

### Step 15: Render Local Journal Markdown Correctly

**Stories**: NBV-US-04

- [x] Replace the partial local Markdown parser with a maintained CommonMark renderer.
- [x] Style semantic journal elements consistently with all three templates and preserve safe link behavior.
- [x] Add deterministic rendering assertions for bold text and representative Markdown structures.
- [x] Update student guidance, run focused and complete verification, and update generation evidence.

### Step 16: Align Local Journal Overview Thumbnails

**Stories**: NBV-US-04

- [x] Use the shared compact cropped thumbnail treatment for local and external cards on the Journal overview.
- [x] Preserve complete, non-cropping image rendering inside the opened local journal post.
- [x] Update deterministic assertions, run complete verification, and update generation evidence.

## Story Traceability

| Story | Generation steps |
|---|---|
| NBV-US-01 Neutral Magazine Expression | 2, 3, 6, 8, 9 |
| NBV-US-02 Business Consulting-Report Expression | 4, 5, 6, 8, 9 |
| NBV-US-03 Predictable Visitor Navigation | 1, 2, 4, 6, 7, 8, 9 |
| NBV-US-04 Shared Content and Regression Stability | 1, 6, 7, 8, 9 |

## Generation Constraints

- Modify existing application files in place.
- Preserve user changes outside the approved scope.
- Keep template selection and shared content contracts unchanged.
- Keep all interactive controls semantic and automation-friendly.
- Use existing Chakra and React Icons components; add no hand-drawn interface icons.
- Add no custom scrolling behavior, visitor template switcher, backend, or infrastructure.
- Update each checkbox immediately when its work is completed.

## Verification Gates

- Focused tests after component and test updates.
- Full test, lint, TypeScript, and production-build checks before generation completion.
- Desktop and mobile visual inspection of both redesigned templates.
- Explicit Engineering regression and scoped-diff review.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown structure | Valid headings, checkboxes, tables, and paths |
| Application/document boundary | Application code remains outside `aidlc-docs/` |

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Confirmed during Requirements Analysis. |
| Property-Based Testing | Disabled | Confirmed during Requirements Analysis. |
