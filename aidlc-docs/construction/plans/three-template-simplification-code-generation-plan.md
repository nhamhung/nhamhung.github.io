# Code Generation Plan - Three Template Portfolio Simplification

> **Status: Review revisions complete on 2026-07-19T15:41:09Z; awaiting review.** This is the single source of truth for the implementation unit. Application changes followed these steps in order, with each checkbox updated immediately after completion.

## Unit Context

- **Unit ID**: TPL-U1
- **Unit name**: Three Template Portfolio Simplification
- **Application**: Brownfield React, TypeScript, Chakra UI, and Vite portfolio
- **Application root**: `/Users/nhamhhung/my-portfolio`
- **Primary requirements**: TPL-01 through TPL-13 and TPL-NFR-01 through TPL-NFR-09
- **User stories**: Skipped by the approved workflow; requirements and acceptance criteria provide traceability.
- **Dependency**: Reuse the completed ATR-U1 registry, Shell contract, App orchestration, hash routing, layout hook, shared data, and Engineering template.
- **Owned boundary**: Template IDs, registry entries, Neutral and Business presentation components, template-scoped styles, focused tests, and student template-selection documentation.
- **Not owned**: Shared portfolio content, persistence, APIs, databases, infrastructure, deployment workflow, or runtime template switching.

## Interfaces and Constraints

- Keep `PortfolioTemplate`, `PortfolioShellProps`, `SectionId`, layout modes, and hash routes as the shared contracts.
- Keep App and `usePortfolioLayout` responsible for route, navigation, and layout state.
- Preserve Engineering component mappings and behavior.
- Reuse shared data and action components; do not create per-template content copies.
- Expose exactly `engineering`, `neutral`, and `business` in the active registry with Engineering fallback.
- Migrate the obsolete configured value `artistic` to `neutral`, its closest approved replacement, because `artistic` is no longer a valid template ID.
- Remove superseded Artistic runtime files and styles after their replacements are wired; Git history remains the historical record.
- Add no runtime dependency, backend, database entity, API layer, repository layer, migration, or deployment artifact.

## Planning Record

- [x] Reviewed the approved requirements and minimal execution plan.
- [x] Reviewed the brownfield code structure, registry, Shell contract, App boundary, tests, styles, data, and student documentation.
- [x] Confirmed the completed ATR-U1 dependency is available.
- [x] Confirmed skipped design stages do not block generation because no new business logic, persistence, API, or infrastructure is required.
- [x] Validated this document as Markdown with sequential checkboxes and no embedded diagrams.

## Generation Steps

### Step 1 - Update Template Contracts and Registry

- [x] Change `PortfolioTemplateId` in `src/templates/types.ts` to `engineering | neutral | business` without changing the Shell or section-map interfaces.
- [x] Update `src/templates/index.ts` to register exactly Engineering, Neutral, and Business and retain deterministic Engineering fallback.
- [x] Migrate `src/data/template.ts` from the retired `artistic` value to `neutral`.
- [x] Preserve `src/templates/engineering/index.ts` and `src/templates/engineering/EngineeringShell.tsx` behavior.
- [x] Trace: TPL-01, TPL-02, TPL-04, TPL-12; acceptance criteria 1 and 5.

### Step 2 - Generate the Neutral Editorial Layout

- [x] Create `src/templates/neutral/NeutralShell.tsx` with a desktop editorial side rail, ordinary vertical navigation, theme/layout controls, and a compact mobile header.
- [x] Create `src/templates/neutral/NeutralHero.tsx` for an offset identity, statement, portrait, and shared actions.
- [x] Create `src/templates/neutral/NeutralProjects.tsx` for a restrained editorial project sequence using shared project data and actions.
- [x] Create `src/templates/neutral/index.ts` with complete labels and section mappings, reusing shared section components where a custom composition adds no meaningful difference.
- [x] Keep controls keyboard-accessible and automation-friendly with stable test IDs.
- [x] Trace: TPL-03, TPL-05, TPL-07 through TPL-10, TPL-13; TPL-NFR-01 through TPL-NFR-04 and TPL-NFR-09.

### Step 3 - Generate the Business Executive Layout

- [x] Create `src/templates/business/BusinessShell.tsx` with an executive masthead, horizontal desktop navigation, responsive mobile navigation, and theme/layout controls.
- [x] Create `src/templates/business/BusinessHero.tsx` with a two-column value proposition, shared calls to action, and a credibility evidence band.
- [x] Create `src/templates/business/BusinessAbout.tsx` for concise outcome and capability evidence using shared biography and metric data.
- [x] Create `src/templates/business/BusinessProjects.tsx` for outcome-oriented case-study grids using shared project data and actions.
- [x] Create `src/templates/business/index.ts` with complete labels and section mappings, reusing shared components for remaining content.
- [x] Keep controls keyboard-accessible and automation-friendly with stable test IDs.
- [x] Trace: TPL-03, TPL-06 through TPL-10, TPL-13; TPL-NFR-01 through TPL-NFR-04 and TPL-NFR-09.

### Step 4 - Add Scoped Responsive Presentation Styles

- [x] Replace superseded Artistic blocks in `src/App.css` with `.portfolio-template-neutral` and `.portfolio-template-business` styles.
- [x] Define stable desktop/mobile shell dimensions, responsive grids, readable content widths, visible focus, and overflow protection.
- [x] Keep palettes restrained and distinct without relying on color as the structural differentiator.
- [x] Preserve global and Engineering selectors unless a verified shared fix is required.
- [x] Trace: TPL-04, TPL-05, TPL-06, TPL-11, TPL-13; TPL-NFR-01 through TPL-NFR-05 and TPL-NFR-09.

### Step 5 - Retire Superseded Artistic Runtime Files

- [x] Remove `src/templates/artistic/` and `src/data/artistic.ts` after Neutral and Business compile against the active registry.
- [x] Verify no imports, template IDs, CSS selectors, tests, or student instructions still depend on `artistic`.
- [x] Verify no `_new`, `_modified`, copied application tree, or duplicate content files were created.
- [x] Trace: TPL-01, TPL-03, TPL-NFR-05; approved simplification boundaries.

### Step 6 - Update Focused Automated Tests

- [x] Update `src/templates/templateRegistry.test.ts` to assert the exact three IDs, complete section maps, and Engineering fallback.
- [x] Update `src/App.test.tsx` to cover all three Shell compositions, controls, single/multi layout behavior, and local journal routes without Artistic-only expectations.
- [x] Replace or remove superseded Artistic tests and add focused Neutral/Business Shell tests only where App tests do not cover behavior.
- [x] Keep Engineering regression assertions explicit.
- [x] Trace: TPL-04, TPL-07 through TPL-12; TPL-NFR-07 and TPL-NFR-08; acceptance criteria 5, 7, and 9.

### Step 7 - Update Student Documentation

- [x] Update `README.md` to describe Engineering, Neutral, and Business, including their different structures and valid `src/data/template.ts` values.
- [x] Remove Artistic selection and troubleshooting instructions while retaining the one-source-of-truth content guidance.
- [x] Update `aidlc-docs/README.md` only if the active artifact index changes.
- [x] Trace: TPL-02, TPL-03, and the approved documentation-concision policy.

### Step 8 - Verify Generation and Record Evidence

- [x] Run focused template/App tests during implementation, then run the complete test suite, lint, and production build before presenting generated code.
- [x] Inspect representative narrow and wide layouts for overlap, overflow, route behavior, control availability, and structural differentiation.
- [x] Run `git diff --check` and confirm unrelated dirty-worktree changes remain intact.
- [x] Create one concise implementation summary at `aidlc-docs/construction/three-template-simplification/code/code-generation-summary.md`.
- [x] Mark every completed checkbox immediately and update `aidlc-docs/aidlc-state.md` and `aidlc-docs/audit.md`.
- [x] Trace: all acceptance criteria and TPL-NFR-01 through TPL-NFR-09.

## Completion Boundary

Code Generation is complete only when all eight steps are checked, all three active templates compile and render from shared data, Engineering remains unchanged, verification is green, and the concise implementation summary is recorded. Formal Build and Test instructions remain the next AI-DLC stage after code approval.

## Review Revision - Visual Polish

- [x] Strengthen the Neutral side rail and first viewport with more deliberate editorial hierarchy and composition.
- [x] Add an authored Neutral About section and image-led project stories while continuing to use shared data.
- [x] Strengthen the Business first viewport, evidence system, and project presentation into a more confident executive composition.
- [x] Refine scoped Neutral and Business styles without changing Engineering selectors or adding dependencies.
- [x] Update focused tests only where component mappings or stable contracts change.
- [x] Re-run tests, lint, build, diff checks, and wide/mobile visual inspection for both revised templates.
- [x] Update the concise implementation summary, state, and audit trail, then return to the Code Generation review gate.

## Extension Rule Compliance

| Extension              | Status   | Rationale                                          |
| ---------------------- | -------- | -------------------------------------------------- |
| Security Baseline      | Disabled | Existing approved configuration remains unchanged. |
| Property-Based Testing | Disabled | Existing approved configuration remains unchanged. |
