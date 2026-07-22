# Requirements - Three Template Portfolio Simplification

> **Status: Approved on 2026-07-19.** This is the active requirements authority for the three-template change.

## Intent Analysis

- **User request**: Replace the increasingly complex artistic redesign with three straightforward portfolio presentations: Engineering, Neutral, and Business.
- **Request type**: Brownfield scope correction and presentation enhancement.
- **Scope**: Template registry, three template definitions, presentation components, scoped styling, configuration, and focused regression tests.
- **Complexity**: Moderate, with a deliberately simple implementation model.
- **Requirements depth**: Minimal. The desired template categories and simplification goal are clear enough to avoid another question round.

## Product Goal

Students can choose one of three clearly differentiated presentations while maintaining portfolio content in one shared set of data files. Each template must have a different overall layout structure, not merely different colors or typography, while remaining comparable in implementation and interaction complexity to the existing Engineering template.

## Template Definitions

### Engineering

- Preserve the existing technical, code-oriented presentation and Navbar behavior.
- Keep the fixed top navigation and centered, full-width vertical section stack.
- Retain the existing engineering sections, actions, layout modes, theme control, and route behavior.
- Treat engineering regression as release-blocking.

### Neutral

- Replace the elaborate artistic-exhibition direction with a clean, slightly artistic portfolio.
- Use restrained editorial typography, generous whitespace, image emphasis, and subtle transitions.
- Use a desktop editorial side rail for identity, navigation, theme, and layout controls beside a narrower continuous content column.
- Collapse the side rail into a straightforward compact top header on smaller screens.
- Use asymmetrical but readable media/text arrangements within the normal vertical page flow.
- Remain suitable for students across creative and non-technical disciplines without appearing informal or experimental.

### Business

- Present the same content through a professional, outcome-oriented composition.
- Emphasize role, value proposition, experience, achievements, project outcomes, credentials, and contact actions.
- Use an executive masthead with horizontal navigation, a structured overview, full-width evidence bands, and case-study grids.
- Use clear hierarchy, concise evidence blocks, metrics where existing data supports them, and strong calls to action.
- Avoid requiring new business metrics or duplicated content; derive the presentation from existing portfolio data.

## Layout Structure Matrix

| Template | Desktop shell | Opening structure | Section rhythm | Mobile adaptation |
|---|---|---|---|---|
| Engineering | Existing fixed top Navbar | Technical hero in the existing centered container | Full-width stacked technical sections and cards | Existing responsive Navbar and stacked sections |
| Neutral | Persistent editorial side rail plus content column | Offset identity, statement, portrait, and selected actions | Narrower continuous reading column with alternating media/text compositions | Compact top header and single reading column |
| Business | Executive masthead with horizontal navigation | Two-column value proposition, credibility evidence, and primary calls to action | Full-width evidence bands, outcome summaries, and case-study grids | Stacked masthead, metrics, evidence blocks, and actions |

All three structures retain familiar links, buttons, vertical document scrolling, and normal responsive reflow. Structural variation must not depend on horizontal scrolling, parallax, complex dialogs, or custom navigation gestures.

## Functional Requirements

| ID | Requirement |
|---|---|
| TPL-01 | The registry must expose exactly three supported template IDs: `engineering`, `neutral`, and `business`. |
| TPL-02 | Students must select the active template in `src/data/template.ts`; no visitor-facing runtime template switcher is required. |
| TPL-03 | All three templates must consume the same profile, education, experience, award, project, gallery, journal, skill, certificate, and contact data. |
| TPL-04 | Engineering must preserve its existing top-navigation, centered full-width section stack, presentation, and behavior. |
| TPL-05 | Neutral must use an editorial side-rail/content-column structure on desktop and a compact top-header/single-column structure on smaller screens. |
| TPL-06 | Business must use an executive masthead, structured overview, full-width evidence bands, and case-study grid structure. |
| TPL-07 | Every enabled section ID must remain available in single-page and multi-page layouts for every template. |
| TPL-08 | Existing `#section`, `#/section`, and `#/journal/{slug}` hashes must remain directly loadable. |
| TPL-09 | Resume downloads, project links, external writing, local journal posts, certificates, social links, and mailto contact behavior must remain functional. |
| TPL-10 | Theme and layout controls must remain available in all three templates. |
| TPL-11 | Template-specific styling must be scoped and must not leak into another template. |
| TPL-12 | Unknown runtime template IDs must continue to fall back to Engineering. |
| TPL-13 | Template differentiation must be structural and visible through navigation placement, first-viewport composition, content width, and section rhythm rather than color changes alone. |

## Explicit Simplifications

The revised scope does not require:

- Horizontal project or gallery rails.
- Scroll-linked parallax.
- A full-screen visual index.
- Custom wheel or Arrow-key navigation systems.
- New animation hooks or an animation dependency.
- A separate content model for each template.
- New mandatory business metrics or artistic metadata.
- A browser-based template editor or content management system.

Existing ATR-U1 shell and registry work may be reused where it reduces implementation effort, but elaborate artistic interactions should be removed or left unused rather than expanded.

Distinct shell and section composition is still required. Simplicity means each structure uses ordinary responsive grid, flex, and vertical document flow rather than advanced interaction machinery.

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| TPL-NFR-01 | All templates must remain keyboard accessible with visible focus and familiar controls. |
| TPL-NFR-02 | Layouts must remain readable without animation and respect existing reduced-motion behavior where present. |
| TPL-NFR-03 | Mobile, tablet, laptop, and wide-desktop layouts must not overlap or create unintended horizontal overflow. |
| TPL-NFR-04 | Images must retain shared alternative text and stable responsive dimensions. |
| TPL-NFR-05 | No new runtime dependency is needed for the simplified templates. |
| TPL-NFR-06 | The project must remain a static Vite application deployable through the existing GitHub Pages configuration. |
| TPL-NFR-07 | Focused tests must cover registry completeness, all three App compositions, layout modes, route classes, journal presentation, and engineering regression. |
| TPL-NFR-08 | TypeScript, tests, lint, and production build must pass before completion. |
| TPL-NFR-09 | Structural differences must collapse predictably at small widths without hiding content or changing the shared reading order. |

## Implementation Constraints

- Prefer existing shared components and data helpers.
- Add template-specific components only where they create a meaningful presentation difference.
- Give each template its own Shell component and enough template-specific section composition to establish its approved structure.
- Keep navigation and browser-state ownership in App and `usePortfolioLayout`.
- Keep section IDs and shared data contracts stable.
- Keep the student's current configured template value unchanged until they deliberately select another option.
- Preserve unrelated dirty-worktree changes.

## Acceptance Criteria

1. `engineering`, `neutral`, and `business` are valid typed template selections.
2. Each template has a recognizably different shell, first viewport, navigation placement, content width, and section rhythm.
3. Neutral uses an editorial side rail and asymmetrical reading composition while remaining polished and easy to navigate.
4. Business uses an executive masthead, evidence bands, and case-study grids without requiring duplicated content.
5. Engineering remains visually and behaviorally unchanged.
6. All shared information and actions remain discoverable in every template.
7. All three templates support both layout modes and direct section/journal hashes.
8. No horizontal rail, parallax, full-screen index, or new animation framework is introduced.
9. Automated checks and production build pass.
10. Changing only template colors while retaining the same overall page structure does not satisfy completion.

## Workflow Simplification

- Supersede the original ATR-U2 exhibition and ATR-U3 artistic-verification decomposition.
- Reuse the approved ATR-U1 template foundation.
- Use one simplified implementation unit for Neutral and Business templates plus focused regression verification.
- Skip new user stories because these concise requirements and acceptance criteria replace the superseded artistic-exhibition stories.
- Keep remaining design documentation minimal and implementation-oriented.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown tables | Valid simple pipe tables |
| Code identifiers | Escaped with inline code formatting |
| Scope | Application code remains outside `aidlc-docs/` |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Existing approved extension configuration remains unchanged. |
| Property-Based Testing | Disabled | Existing approved extension configuration remains unchanged. |
