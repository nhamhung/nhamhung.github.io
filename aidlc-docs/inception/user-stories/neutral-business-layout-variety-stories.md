# User Stories - Neutral and Business Layout Variety

## NBV-US-01: Neutral Magazine Expression

**As a** student portfolio author,  
**I want** Neutral to present my shared content as a contemporary magazine,  
**so that** I can communicate a polished, broadly creative identity without maintaining separate content.

**Personas**: Student Portfolio Author, Portfolio Visitor  
**Requirements**: NBV-01, NBV-03, NBV-04, NBV-07, NBV-08

### Acceptance Criteria

- [ ] Neutral uses a full-width magazine masthead and no persistent desktop side rail.
- [ ] The first viewport combines identity, primary media, a concise statement, and clear actions.
- [ ] About uses a stable editorial spread with readable columns rather than the Engineering content composition.
- [ ] Projects use varied, repeatable magazine modules rather than a uniform card grid.
- [ ] Gallery content reads as a compact visual archive in normal vertical flow.
- [ ] Small screens receive a compact header and coherent single-column reading order.
- [ ] All presentation content comes from existing shared data.

## NBV-US-02: Business Consulting-Report Expression

**As a** student portfolio author,  
**I want** Business to organize my evidence as a consulting report,  
**so that** visitors can scan my reasoning, capabilities, and outcomes in a professional structure.

**Personas**: Student Portfolio Author, Portfolio Visitor  
**Requirements**: NBV-01, NBV-05, NBV-06, NBV-07, NBV-08

### Acceptance Criteria

- [ ] Business uses a report header and sticky desktop contents rail instead of the current executive-dashboard shell.
- [ ] Sections expose clear numbering and chapter context without duplicating navigation semantics.
- [ ] About presents an executive summary, capabilities, experience evidence, and supported outcomes.
- [ ] Projects present context, contribution, evidence, and a recommendation-style conclusion or action.
- [ ] Tables, evidence rows, and dividers are used only where they improve scanning.
- [ ] Small screens replace the contents rail with a compact header or menu while preserving content order.
- [ ] No new required business metrics or duplicate content fields are introduced.

## NBV-US-03: Predictable Visitor Navigation

**As a** portfolio visitor,  
**I want** both redesigned templates to retain familiar navigation and actions,  
**so that** I can explore the student's work comfortably on my device and with my preferred input method.

**Personas**: Portfolio Visitor  
**Requirements**: NBV-09, NBV-NFR-01, NBV-NFR-02, NBV-NFR-03, NBV-NFR-04

### Acceptance Criteria

- [ ] Single-page and multi-page modes expose every shared section in the established order.
- [ ] Direct section hashes and local journal routes remain loadable and navigable.
- [ ] Theme, layout, resume, project, certificate, social, journal, and contact actions remain available.
- [ ] Keyboard navigation has visible focus and semantic labels; images retain meaningful alternatives.
- [ ] Existing reduced-motion behavior is respected and no custom scrolling interaction is required.
- [ ] Sticky navigation never obscures content and returns to normal flow where space is limited.
- [ ] Supported viewport sizes show no overlapping controls, clipped text, or unintended horizontal overflow.

## NBV-US-04: Shared Content and Regression Stability

**As a** student portfolio author,  
**I want** the added layout variety to preserve the template's shared maintenance model,  
**so that** choosing a presentation does not make the portfolio harder to update or less reliable.

**Personas**: Student Portfolio Author  
**Requirements**: NBV-01, NBV-02, NBV-07, NBV-08, NBV-10, NBV-NFR-05, NBV-NFR-06, NBV-NFR-07, NBV-NFR-08

### Acceptance Criteria

- [ ] `engineering`, `neutral`, and `business` remain the only supported typed template IDs.
- [ ] Students continue selecting a template through `src/data/template.ts`; unknown IDs fall back to Engineering.
- [ ] Neutral and Business reuse shared data, section IDs, routes, and App-owned browser state.
- [ ] Engineering remains visually and behaviorally unchanged.
- [ ] Neutral and Business styles are scoped and do not leak into one another or Engineering.
- [ ] No new runtime dependency, custom scrolling system, backend, or deployment change is introduced.
- [ ] Registry, route, layout-mode, control, accessibility, responsive, and Engineering regression checks pass.
- [ ] Tests, ESLint, TypeScript checks, and the production build pass.

## INVEST Review

| Story | Independent | Negotiable | Valuable | Estimable | Small | Testable |
|---|---|---|---|---|---|---|
| NBV-US-01 | Yes | Yes | Yes | Yes | Yes | Yes |
| NBV-US-02 | Yes | Yes | Yes | Yes | Yes | Yes |
| NBV-US-03 | Yes | Yes | Yes | Yes | Yes | Yes |
| NBV-US-04 | Yes | Yes | Yes | Yes | Yes | Yes |

Each story owns one observable outcome, stays within the approved component boundary, and has concrete acceptance criteria that can be verified independently.

## Requirements Traceability

| Requirement group | Covered by |
|---|---|
| NBV-01 through NBV-04 | NBV-US-01, NBV-US-04 |
| NBV-05 through NBV-08 | NBV-US-02, NBV-US-04 |
| NBV-09 and NBV-10 | NBV-US-03, NBV-US-04 |
| NBV-NFR-01 through NBV-NFR-04 | NBV-US-03 |
| NBV-NFR-05 through NBV-NFR-08 | NBV-US-04 |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown structure | Valid headings, checklists, and tables |
| Requirement coverage | All approved functional and non-functional requirements mapped |

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Confirmed during Requirements Analysis. |
| Property-Based Testing | Disabled | Confirmed during Requirements Analysis. |
