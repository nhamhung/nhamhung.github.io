# Code Generation Plan - ATR-U1 Template Shell and Configuration Foundation

## Plan Authority

This document is the single source of truth for ATR-U1 Code Generation. Application code is modified only under `/Users/nhamhhung/my-portfolio`, primarily in `src/`. Markdown implementation evidence is stored under `aidlc-docs/construction/atr-u1-template-shell-configuration/code/`.

No application-code step may begin until this entire plan is explicitly approved.

## Unit Context

- **Unit ID**: ATR-U1
- **Unit name**: Template Shell and Configuration Foundation
- **Project type**: Brownfield static React/Vite application
- **Workspace root**: `/Users/nhamhhung/my-portfolio`
- **Primary stories**: US-01, US-03, US-04, US-12
- **Supporting stories**: US-02, US-11, US-13
- **Upstream dependency**: Existing template registry, shared data, App orchestration, `usePortfolioLayout`, `useActiveSection`, journal hash routing, Navbar, Chakra provider, and approved ATR-U1 designs
- **Downstream dependency**: ATR-U2 consumes the shell contract, chapter labels, stable project IDs, resolved artistic presentation, and route/focus behavior
- **Infrastructure Design**: Skipped; no infrastructure or deployment architecture changes

## Approved Interfaces

### Expanded Template Contract

`PortfolioTemplate` will provide:

- `id`, `label`, and `description`
- `ShellComponent: ComponentType<PortfolioShellProps>`
- `JournalPostComponent: ComponentType<JournalPostPageProps>`
- `chapterLabels: Record<SectionId, string>`
- `sectionComponents: Record<SectionId, ComponentType>`

### Shell Contract

`PortfolioShellProps` will provide:

- Shared `activeSection` and `layoutMode`
- Enabled navigation items
- Mode-aware href resolver
- Shared navigation and layout callbacks
- App-selected section or journal `children`

### Presentation Contract

- `ProjectEntry` gains a unique stable `id`.
- `ArtisticPresentationConfig` contains optional statement, featured project IDs, gallery treatments, and accent token.
- `ResolvedArtisticPresentation` contains complete deterministic values.
- Resolver functions remain pure, synchronous, immutable, and linear at the approved student content scale.

## File Scope

### Existing Files Expected to Change

- `src/App.tsx`
- `src/App.css`
- `src/App.test.tsx`
- `src/types/portfolio.ts`
- `src/data/projects.ts`
- `src/data/portfolio.test.ts`
- `src/hooks/usePortfolioLayout.ts`
- `src/hooks/usePortfolioLayout.test.ts`
- `src/templates/types.ts`
- `src/templates/index.ts`
- `src/templates/engineering/index.ts`
- `src/templates/artistic/index.ts`
- `src/templates/templateRegistry.test.ts`
- `src/test/setup.ts` only if installed Chakra Dialog or focus tests require a missing browser stub

### New Application Files Expected

- `src/data/artistic.ts`
- `src/templates/engineering/EngineeringShell.tsx`
- `src/templates/artistic/ArtisticShell.tsx`
- `src/templates/artistic/ArtisticHeader.tsx`
- `src/templates/artistic/ArtisticVisualIndex.tsx`
- `src/templates/artistic/chapters.ts`
- `src/templates/artistic/presentation.ts`
- `src/templates/artistic/presentation.test.ts`
- `src/templates/artistic/ArtisticShell.test.tsx`

The exact test split may use a focused `ArtisticVisualIndex.test.tsx` if that keeps interaction tests clearer; no duplicate production component variants may be created.

### Documentation Expected

- `aidlc-docs/construction/atr-u1-template-shell-configuration/code/implementation-summary.md`
- `aidlc-docs/construction/atr-u1-template-shell-configuration/code/verification-evidence.md`

## Story Completion Tracking

- [x] **US-01** - Artistic template selection/configuration has typed optional metadata and deterministic fallbacks.
- [x] **US-03** - Artistic compact header and accessible full-screen visual index support all approved interactions.
- [x] **US-04** - Shared active `SectionId` maps to a meaningful artistic chapter in both layout modes.
- [x] **US-12** - Both layouts, section hashes, local journal hashes, and invalid-route behavior work through the selected shell.
- [x] **Supporting US-02** - Opening receives shell and resolved-statement foundations for ATR-U2.
- [x] **Supporting US-11** - Shell structure does not add animation infrastructure and remains compatible with later motion preferences.
- [x] **Supporting US-13** - Engineering behavior, typed isolation, tests, and static build foundations remain intact.

## Execution Plan

### Step 1: Preserve Worktree and Record Baseline

- [x] Re-read `git status --short` and relevant diffs; preserve all existing user and earlier workflow changes.
- [x] Confirm no duplicate `_new`, `_modified`, or alternate production files exist for planned components.
- [x] Run the existing test, lint, and production build commands before ATR-U1 edits; distinguish baseline failures from new regressions.
- [x] Record every Vite JavaScript asset gzip size and summed JavaScript gzip baseline in `verification-evidence.md`.
- [x] Record the current runtime dependency list; ATR-U1 must not modify it.

**Traceability**: NFR-10, NFR-13, NFR-16; ATR1-NFR-PERF-01, PERF-04, REL-07, REL-08.

### Step 2: Add Stable Project Identity and Artistic Configuration Types

- [x] Add required `id: string` to `ProjectEntry` in `src/types/portfolio.ts`.
- [x] Add stable, readable, unique IDs to every existing project in `src/data/projects.ts` without changing titles, descriptions, actions, or order.
- [x] Add closed `GalleryTreatment` and `ArtisticAccent` token unions plus optional and resolved presentation types in the artistic presentation boundary.
- [x] Add `src/data/artistic.ts` with a minimal student-editable object satisfying `ArtisticPresentationConfig`; keep all fields optional and do not duplicate core content.
- [x] Preserve the current value in `src/data/template.ts`; this unit enables both templates but does not override the student's active selection.

**Traceability**: US-01; FR-02, FR-24, FR-26; NFR-15, NFR-17; ATR1-BR-31 through BR-33.

### Step 3: Implement Pure Artistic Presentation Resolution

- [x] Create `src/templates/artistic/presentation.ts` with supported token guards and exported pure resolver functions.
- [x] Resolve creative statement in the approved order: explicit non-blank value, About intro, Hero intro, profile summary, stable default.
- [x] Resolve featured projects with one project `Map`, one seen-ID `Set`, configured order, unknown-ID filtering, first-duplicate retention, and all-project fallback.
- [x] Resolve one gallery treatment per shared gallery item using an explicit valid token or stable position-based fallback.
- [x] Resolve a supported accent token or the artistic default.
- [x] Return complete new collections without mutating shared data and without React, DOM, storage, History, or network access.

**Traceability**: US-01; FR-24, FR-25; NFR-17; ATR1-BR-34 through BR-42; ATR1-NFR-SCAL-04, SCAL-05, PERF-03, REL-05, SEC-04, SEC-05.

### Step 4: Test Data Identity and Presentation Resolution

- [x] Extend `src/data/portfolio.test.ts` to validate non-empty unique project IDs.
- [x] Create `src/templates/artistic/presentation.test.ts` for explicit, partial, absent, blank, unknown, duplicate, and unsupported configuration.
- [x] Assert configured order, first-duplicate behavior, all-project fallback, gallery completeness, supported accents, and fixed statement fallback order.
- [x] Assert input collections are not mutated.
- [x] Add representative 100-project and 100-gallery-item cases to confirm correct bounded behavior without adding property-based testing or timing-fragile microbenchmarks.
- [x] Mark US-01 complete when config, resolver, and focused tests satisfy its acceptance criteria.

**Traceability**: US-01; FR-24, FR-25; ATR1-NFR-SCAL-04, SCAL-05, TEST-02; Property-Based Testing extension remains disabled.

### Step 5: Expand Template, Shell, Journal, and Chapter Contracts

- [x] Extend `src/templates/types.ts` with `JournalPostPageProps`, `PortfolioShellProps`, and the complete `PortfolioTemplate` contract.
- [x] Keep shell callbacks typed around stable `SectionId`, existing `LayoutMode`, and enabled navigation items.
- [x] Add a complete artistic chapter-label record in `src/templates/artistic/chapters.ts` for Opening, Studio Statement, Formation, Practice, Recognition, Selected Works, Visual Archive, Process Notes, Materials, and Closing.
- [x] Add a complete engineering chapter-label record aligned with current section names.
- [x] Update `getPortfolioTemplate` to retain deterministic engineering fallback for unknown runtime string input while keeping configured IDs typed.
- [x] Update registry tests to require shell, journal, label, and section capabilities for every template and every stable section ID.

**Traceability**: US-01, US-04, US-12; FR-01, FR-04, FR-05, FR-20, FR-21, FR-23, FR-26; NFR-15, NFR-17.

### Step 6: Extract the Engineering Shell Without Behavior Change

- [x] Create `src/templates/engineering/EngineeringShell.tsx` implementing `PortfolioShellProps`.
- [x] Move the existing Navbar composition and main-region spacing/attributes from App into EngineeringShell.
- [x] Preserve existing Navbar callbacks, responsive behavior, `data-layout-mode`, `data-template-id`, and `data-testid="portfolio-main"`.
- [x] Keep existing engineering section components and `JournalPostPage` unchanged.
- [x] Update `src/templates/engineering/index.ts` with EngineeringShell, shared journal component, complete labels, and existing section map.
- [x] Add or update regression assertions proving engineering modules import no artistic configuration/components and existing behavior remains visible.

**Traceability**: US-12, supporting US-13; FR-01, FR-19 through FR-23; NFR-16; ATR1-NFR-REL-07, MAINT-04, MAINT-05.

### Step 7: Build the Artistic Header and Full-Screen Visual Index

- [x] Create `ArtisticHeader.tsx` with shared student identity, current artistic chapter, and stable `artistic-index-trigger` control.
- [x] Create `ArtisticVisualIndex.tsx` using the installed Chakra 3 Dialog API with a title, modal semantics, focus containment, Escape handling, backdrop behavior, and explicit close control.
- [x] Render every enabled destination in shared order using artistic labels and stable test IDs such as `artistic-index-link-{sectionId}`.
- [x] Expose current chapter through `aria-current` plus a non-color-only marker.
- [x] Add the existing `ColorModeButton` with an artistic index test ID.
- [x] Present single/multi layout as an accessible two-state control; invoke only the shared toggle callback.
- [x] Detect keyboard versus pointer chapter activation without adding global listeners; report selection intent to ArtisticShell handlers.
- [x] Use stable test IDs for trigger, close, theme, layout modes, and destination actions.

**Traceability**: US-03, US-04; FR-05 through FR-07; NFR-01, NFR-02; ATR1-NFR-A11Y-01 through A11Y-09.

### Step 8: Implement ArtisticShell and Focus Coordination

- [x] Create `ArtisticShell.tsx` implementing `PortfolioShellProps` and importing the complete artistic chapter labels.
- [x] Compose ArtisticHeader, controlled ArtisticVisualIndex, artistic root scope, and semantic main landmark.
- [x] Keep only index open/closed state and one pending focus intent inside ArtisticShell.
- [x] For keyboard chapter selection, store the chapter intent, invoke shared navigation, close without trigger restoration overriding the destination, and focus the designated chapter heading after render.
- [x] Fall back once to the artistic main landmark when the destination heading is unavailable, then clear the intent.
- [x] For pointer selection, navigate and close without programmatic destination focus.
- [x] For layout changes, preserve the current section through the shared callback, close the index, and focus the new main context after render.
- [x] For Escape/close/backdrop dismissal, allow Dialog to return focus to the index trigger.
- [x] Use a React effect and at most one cleaned-up animation frame if needed; add no fixed delay, polling, or focus retry loop.
- [x] Keep the artistic shell available around shared local journal content until ATR-U2 supplies its dedicated journal component.

**Traceability**: US-03, US-04, US-12; FR-04 through FR-07, FR-19 through FR-23; NFR-01, NFR-02; ATR1-NFR-PERF-02, PERF-06, A11Y-04 through A11Y-10.

### Step 9: Integrate Complete Templates with App and Shared Routes

- [x] Update `src/templates/artistic/index.ts` with ArtisticShell, shared `JournalPostPage` as the ATR-U1 journal adapter, complete labels, presentation exports as appropriate, and the existing artistic/mixed section map.
- [x] Refactor `src/App.tsx` so the selected template provides shell, journal view, labels, and section components while App retains hash/layout/navigation ownership.
- [x] Keep the default App component prop-free; expose a narrow named orchestrator accepting a template only if needed to test both definitions without module mocking.
- [x] Compute App-selected content once and pass it as shell children.
- [x] Expose `journal` as shell active section for known and unknown local journal slugs.
- [x] Preserve single-page all-enabled rendering and multi-page one-section rendering.
- [x] Update `src/hooks/usePortfolioLayout.ts` only as needed so invalid slash section routes resolve the first enabled section while local journal hashes continue to render through App.
- [x] Preserve `#section`, `#/section`, and `#/journal/{slug}` GitHub Pages-safe behavior and existing guarded storage.
- [x] Do not add a router, global state library, backend, or runtime content request.

**Traceability**: US-04, US-12; FR-04, FR-19 through FR-23; NFR-10, NFR-15, NFR-17; ATR1-BR-23 through BR-30.

### Step 10: Add Scoped Artistic Shell and Index Styles

- [x] Extend `src/App.css` only within artistic-scoped selectors for shell/header/index surfaces, supported accent token mappings, current state, and focus indicators.
- [x] Use existing Chakra responsive props and scoped CSS grid/flex rules; do not add viewport-width font scaling or JavaScript layout branching.
- [x] Define stable compact header/main offsets for both layout modes.
- [x] Keep controls at least 44 by 44 CSS pixels where practical and allow long labels to wrap.
- [x] Provide constrained dialog scrolling for short viewports and prevent unintended page-level horizontal overflow.
- [x] Preserve existing engineering variables/selectors and avoid changing current section presentation owned by ATR-U2.
- [x] Retain existing motion classes unchanged except where shell/index focus or dialog behavior requires a non-animated state; reduced-motion chapter work remains ATR-U2.

**Traceability**: US-03, US-04, supporting US-11/US-13; FR-05 through FR-07, FR-19; NFR-01, NFR-02, NFR-16; ATR1-NFR-RESP-01 through RESP-04, COMPAT-01, COMPAT-02.

### Step 11: Add Shell, Index, Focus, and Registry Tests

- [x] Create focused artistic shell/index tests using React Testing Library and the existing Provider.
- [x] Cover header identity/current label, dialog name, enabled-only destinations, stable hrefs, current-state semantics, theme/layout controls, and close behavior.
- [x] Cover Escape/non-navigation trigger focus, keyboard chapter destination focus, pointer selection without forced destination focus, layout-toggle main focus, and missing-heading main fallback.
- [x] Cover both single and multi shell props without relying on broad snapshots.
- [x] Verify EngineeringShell retains existing Navbar/main behavior.
- [x] Update test setup only for missing standards-based APIs required by installed Chakra components; keep stubs minimal and reusable.
- [x] Mark US-03 complete when visual-index and focus acceptance criteria pass.
- [x] Mark US-04 complete when active chapter mapping passes for scroll-derived and routed section state.

**Traceability**: US-03, US-04; FR-05 through FR-07, FR-20, FR-21; ATR1-NFR-TEST-01, TEST-03, A11Y-01 through A11Y-10.

### Step 12: Expand App and Layout Regression Coverage

- [x] Update `src/App.test.tsx` for the shell-based main region without weakening existing content, resume, layout, and journal assertions.
- [x] Verify both template definitions can drive App composition through a focused injected test boundary or equivalent stable test harness.
- [x] Verify single-page and multi-page rendering, direct valid section hashes, invalid section hashes, valid journal slugs, and unknown journal slugs.
- [x] Verify journal routes keep the selected shell and `journal` active context.
- [x] Update `usePortfolioLayout.test.ts` for invalid slash route fallback and preserve storage/hash helper coverage.
- [x] Confirm no hidden alternate section tree renders in multi-page mode.
- [x] Mark US-12 complete when both layouts and all route classes pass.
- [x] Mark supporting US-02, US-11, and US-13 complete when their ATR-U1 foundation criteria are satisfied.

**Traceability**: US-12 and supporting US-02, US-11, US-13; FR-01, FR-02, FR-19 through FR-23; NFR-10, NFR-13, NFR-16, NFR-17; ATR1-NFR-TEST-04.

### Step 13: Run Full Verification and Bundle Comparison

- [x] Run focused tests after each affected boundary and fix failures within approved scope.
- [x] Run the complete `npm test` suite.
- [x] Run `npm run lint`.
- [x] Run `npm run build`, which includes TypeScript project checking and Vite production build.
- [x] Confirm runtime dependencies remain unchanged.
- [x] Record post-implementation JavaScript gzip asset sizes and summed total.
- [x] Calculate bundle growth against Step 1; document and resolve or justify growth above 15 percent.
- [x] Run `git diff --check` and verify no duplicate production files or unrelated reversions were introduced.
- [x] Perform available manual smoke checks for artistic index keyboard flow and representative 320, 768, 1024, and 1440 CSS pixel layouts; defer final cross-browser/visual release proof to ATR-U3.

**Traceability**: All ATR-U1 stories; ATR1-NFR-REL-08, TEST-01 through TEST-06, PERF-04, RESP-01 through RESP-04.

### Step 14: Generate Code Summary and Close Unit Generation

- [x] Create `implementation-summary.md` distinguishing modified and created files, implemented contracts, and deliberate ATR-U2/ATR-U3 deferrals.
- [x] Complete `verification-evidence.md` with commands, results, baseline/post bundle values, percentage change, manual checks, and residual limitations.
- [x] Reconcile every primary/supporting story checkbox and every execution checkbox in this plan.
- [x] Update `aidlc-docs/aidlc-state.md` to Code Generation complete and append generation events to `aidlc-docs/audit.md`.
- [x] Present the standardized Code Generation review gate without beginning ATR-U2.

## Non-Applicable Generation Layers

| Layer | Status | Rationale |
|---|---|---|
| API layer | N/A | No backend or runtime API exists. |
| Repository layer | N/A | Shared TypeScript data modules remain the source of truth. |
| Database migrations | N/A | No database or persistent schema is introduced. |
| Infrastructure/deployment artifacts | N/A | Existing Vite/GitHub Pages deployment remains unchanged. |
| Runtime caching/queue/service worker | N/A | Approved scale and synchronous local behavior require none. |
| New package installation | Prohibited for ATR-U1 | Existing runtime and test stack are sufficient. |

## Scope Guardrails

- Do not implement final replacements for all ten artistic chapter components in ATR-U1.
- Do not implement horizontal rails, gallery rail controls, image preview focus restoration, or motion hooks in ATR-U1.
- Do not implement the final artistic local journal article presentation in ATR-U1.
- Do not change shared portfolio prose, assets, actions, or the student's current selected-template value.
- Do not change GitHub Pages workflow, Vite base-path behavior, or runtime dependencies.
- Do not revert existing uncommitted work.

## Completion Criteria

- Every execution and story checkbox is `[x]`.
- Both template definitions satisfy the complete typed contract.
- Engineering behavior remains intact behind EngineeringShell.
- Artistic header/index/focus behavior satisfies approved functional and NFR designs.
- Presentation configuration resolves complete deterministic values.
- Both layouts and route classes work through the selected shell.
- Tests, lint, TypeScript/build, bundle review, diff check, and scoped manual checks pass or have explicit approved evidence.
- Code summaries exist under `aidlc-docs/construction/atr-u1-template-shell-configuration/code/`.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; this plan contains no diagrams. |
| ASCII diagrams | Not applicable; this plan contains no diagrams. |
| Markdown tables | Valid simple pipe tables. |
| Plan checkboxes | Every executable task and story has a checkbox. |
| Paths | Application paths point to the workspace; documentation paths point to `aidlc-docs/`. |
| Sequence | Fourteen numbered steps are executable in dependency order. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Full extension rules do not apply; approved static token/text/privacy constraints remain in Steps 2, 3, 7, and 9. |
| Property-Based Testing | Disabled | Step 4 uses focused representative examples rather than property-based tooling. |
