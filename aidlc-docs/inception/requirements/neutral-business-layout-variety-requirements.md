# Requirements - Neutral and Business Layout Variety

> **Status: Approved on 2026-07-20.** This document supersedes only the Neutral and Business presentation details in the approved Three Template Portfolio Simplification requirements.

## Intent Analysis

- **User request**: Keep the existing three-template model and improve the layout variety of Neutral and Business; do not add another Artistic template.
- **Request type**: Brownfield user-facing presentation enhancement.
- **Scope**: Neutral and Business shells, navigation, Hero, About, Projects, scoped styles, and focused regression tests.
- **Complexity**: Moderate, bounded to existing template contracts and browser-native layout behavior.
- **Requirements depth**: Standard, based on six validated requirement answers.

## Product Goal

Students can express the same portfolio content through three clearly different structures. Engineering remains technical and unchanged. Neutral becomes a contemporary magazine. Business becomes a consulting report. The alternatives must differ through navigation, first-viewport composition, content hierarchy, and section layout rather than color alone.

## Functional Requirements

| ID | Requirement |
|---|---|
| NBV-01 | The registry must continue to expose exactly `engineering`, `neutral`, and `business`; no Artistic template is added. |
| NBV-02 | Engineering presentation and behavior must remain unchanged. |
| NBV-03 | Neutral must replace its desktop side-rail structure with a full-width magazine masthead and compact responsive navigation. |
| NBV-04 | Neutral must use a featured opening story, modular multi-column About composition, editorial project layouts, and a compact visual archive derived from shared content. |
| NBV-05 | Business must replace its current executive-dashboard structure with a consulting-report shell and sticky desktop contents rail. |
| NBV-06 | Business must present numbered chapters, evidence-oriented profile content, and recommendation-style project summaries derived from existing data. |
| NBV-07 | Neutral and Business may customize their Shell, navigation, Hero, About, and Projects components; shared section order and remaining section components must stay stable. |
| NBV-08 | Both templates must consume the existing shared portfolio data without duplicate student content or new required fields. |
| NBV-09 | Existing single-page and multi-page modes, section hashes, local journal routes, theme controls, resume downloads, project actions, contact actions, and external links must remain functional. |
| NBV-10 | `src/data/template.ts` remains the student-facing template selection point and unknown IDs continue to fall back to Engineering. |

## Layout Requirements

### Neutral: Contemporary Magazine

- Use a full-width masthead rather than a persistent desktop side rail.
- Establish a featured first viewport with clear identity, portrait or primary media, statement, and actions.
- Compose About as an editorial spread with stable responsive columns and readable line lengths.
- Present projects through varied but repeatable magazine modules, not a uniform Engineering-style card grid.
- Present gallery media as a compact visual archive within normal vertical document flow.
- Collapse cleanly into a compact header and single-column reading order on small screens.

### Business: Consulting Report

- Use a report header and sticky desktop contents rail distinct from both Engineering and Neutral navigation.
- Make section numbering and chapter context visible without duplicating navigation semantics.
- Organize About around executive summary, capabilities, experience evidence, and outcomes supported by existing data.
- Present projects as concise case recommendations: context, contribution, evidence, and relevant action.
- Use restrained tables, evidence rows, and structured dividers only where they improve scanning.
- Collapse the contents rail into a compact mobile header/menu while preserving document order.

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| NBV-NFR-01 | Use responsive CSS and existing motion utilities only; add no runtime dependency or custom scrolling system. |
| NBV-NFR-02 | Keyboard navigation, visible focus, semantic headings, labels, image alternatives, and reduced-motion behavior must remain available. |
| NBV-NFR-03 | Mobile, tablet, laptop, and wide-desktop layouts must avoid overlapping controls, clipped text, unintended horizontal overflow, and layout shifts caused by dynamic content. |
| NBV-NFR-04 | Sticky elements must not obscure content and must degrade to normal flow where viewport space is limited. |
| NBV-NFR-05 | Template styles must remain scoped so Neutral and Business rules cannot change Engineering. |
| NBV-NFR-06 | The application must remain a static Vite site deployable through the existing GitHub Pages workflow. |
| NBV-NFR-07 | Focused tests must cover template registry behavior, both layout modes, route behavior, controls, and explicit Engineering regression. |
| NBV-NFR-08 | Tests, ESLint, TypeScript checks, and the production build must pass before completion. |

## Out of Scope

- A fourth Artistic template or runtime visitor template picker.
- Reordering or grouping shared sections differently by template.
- Custom components for every Neutral and Business section.
- Horizontal scrolling galleries, parallax, custom wheel behavior, or a new animation framework.
- New mandatory portfolio content, business metrics, backend services, or deployment infrastructure.
- Revival of the superseded Artistic Exhibition ATR-U2/ATR-U3 plans.

## Acceptance Criteria

1. Neutral, Business, and Engineering are still the only supported template IDs.
2. Neutral uses a full-width magazine masthead and modular editorial composition instead of its current side rail.
3. Business uses a consulting-report shell with a sticky desktop contents rail and numbered evidence chapters instead of its current executive dashboard.
4. Neutral and Business have visibly different navigation placement, first viewport, content width, hierarchy, and Projects presentation from each other and from Engineering.
5. The shared section order, data files, actions, routes, and layout modes continue to work in all templates.
6. Engineering remains visually and behaviorally unchanged.
7. Neutral and Business reflow into coherent mobile layouts with no overlaps or unintended horizontal overflow.
8. No new runtime dependency, custom scrolling system, or duplicated student content is introduced.
9. Automated checks and production build pass.

## Extension Configuration

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | The user selected B; the change is a static presentation enhancement with no new data boundary. |
| Property-Based Testing | Disabled | The user selected C; the change contains no significant algorithmic or serialization logic. |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown tables | Valid simple pipe tables |
| Code identifiers | Escaped with inline code formatting |
| Application/document boundary | Application code remains outside `aidlc-docs/` |
