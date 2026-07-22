# Units of Work - Artistic Template Presentation Redesign

## Decomposition Model

The redesign remains one React/Vite application and one GitHub Pages deployment. The following units are logical development modules, not independently deployable services. One workspace owner completes them sequentially with contract checkpoints between units.

## Unit Summary

| Unit | Name | Primary Capability | Primary Stories | Dependency |
|---|---|---|---|---|
| ATR-U1 | Template Shell and Configuration Foundation | Presentation architecture and shared state integration | US-01, US-03, US-04, US-12 | Existing application baseline |
| ATR-U2 | Artistic Exhibition and Interaction System | Distinct visitor-facing artistic experience | US-02, US-05 through US-11 | ATR-U1 |
| ATR-U3 | Verification and Student Enablement | Maintainable, documented, release-ready delivery | US-13 | ATR-U1 and ATR-U2 |

## ATR-U1: Template Shell and Configuration Foundation

### Purpose

Expand the existing template registry into a typed page-composition boundary and establish the configuration, navigation, and route integration required by the artistic experience without changing engineering behavior.

### Responsibilities

- Extend `PortfolioTemplate` with Shell, journal-view, and chapter-label capabilities.
- Define `PortfolioShellProps` and adapt App to render the active Shell.
- Add `EngineeringShell` as a behavior-preserving adapter.
- Add `ArtisticShell`, `ArtisticHeader`, and `ArtisticVisualIndex`.
- Preserve existing `SectionId` values, navigation enablement, layout modes, and direct hashes.
- Add stable project IDs and typed optional artistic presentation configuration.
- Add pure resolvers for creative statement, featured projects, gallery treatment, and accent fallbacks.
- Add foundation tests for contract completeness, metadata resolution, shell selection, index behavior, engineering regression, and direct navigation.

### Primary Stories

- **US-01**: Select and configure the artistic template.
- **US-03**: Navigate through a full-screen visual index.
- **US-04**: Maintain chapter awareness.
- **US-12**: Use both layout modes and direct routes.

### Supporting Stories

- **US-02**: Supplies the shell for the editorial opening.
- **US-11**: Establishes motion preference inputs used by later presentation.
- **US-13**: Establishes typed isolation and engineering regression foundations.

### Primary Requirements

- FR-01, FR-02, FR-04 through FR-07, FR-19 through FR-26
- NFR-01, NFR-02, NFR-10, NFR-13, NFR-15, NFR-16, NFR-17

### Inputs

- Existing App layout and journal orchestration.
- Existing template registry and section maps.
- Existing Navbar and engineering section components.
- Approved application-design contracts.
- Shared profile, navigation, project, gallery, and journal data.

### Outputs

- Complete typed template and shell contracts.
- Working engineering and artistic shells.
- Accessible artistic header and visual index.
- Stable artistic chapter labels over existing route IDs.
- Student-editable artistic presentation configuration and complete resolver output.
- Unit-level automated tests and updated template test helpers.

### Component Ownership

- `src/App.tsx` shell integration.
- `src/templates/types.ts` expanded contracts.
- `src/templates/index.ts` registry compatibility.
- `src/templates/engineering/EngineeringShell.tsx`.
- `src/templates/artistic/ArtisticShell.tsx`.
- `src/templates/artistic/ArtisticHeader.tsx`.
- `src/templates/artistic/ArtisticVisualIndex.tsx`.
- `src/templates/artistic/chapters.ts`.
- `src/templates/artistic/presentation.ts`.
- `src/data/artistic.ts`.
- Stable project identity in shared types/data.
- Foundation-focused tests.

### Boundaries

- Does not implement final artistic chapter compositions beyond what is needed to integrate the shell.
- Does not implement horizontal rail behavior.
- Does not redesign shared data content.
- Does not change GitHub Pages infrastructure.
- Does not add an animation dependency.

### Design Stages

- **Functional Design**: Execute for shell events, index focus/navigation, chapter mapping, routing integration, and metadata fallbacks.
- **NFR Requirements**: Execute for index accessibility, shell responsiveness, engineering isolation, and static compatibility.
- **NFR Design**: Execute for focus management, contrast/state, responsive shell, and test patterns.
- **Infrastructure Design**: Skip.
- **Code Generation**: Execute after design approvals.

### Entry Gate

- Application Design and unit decomposition approved.
- Existing tests and current template selection understood.
- Unit plan identifies stable contracts and story ownership.

### Exit Gate

- Both templates satisfy the expanded typed contract.
- Engineering shell preserves current behavior.
- Artistic header and visual index work with keyboard and layout controls.
- Single-page, multi-page, direct section, and direct journal routing remain functional.
- Optional metadata produces deterministic fallbacks.
- Unit tests, TypeScript, lint, and build pass before ATR-U2 integration.

## ATR-U2: Artistic Exhibition and Interaction System

### Purpose

Implement the distinct editorial exhibition, reusable horizontal interactions, progressive motion, and artistic journal reading experience on top of the stable Unit 1 contracts.

### Responsibilities

- Evolve `ArtisticSectionShell` into `ArtisticChapterFrame`.
- Implement artistic route components for all ten existing section IDs.
- Implement Opening, Studio Statement, Formation, Practice, Recognition, Selected Works, Visual Archive, Process Notes, Materials, and Closing compositions.
- Implement generic `ArtisticRail` and `useHorizontalRail` with native scroll snap and explicit controls.
- Implement motion preference and reveal primitives without a new dependency.
- Implement `ArtisticJournalPostPage` using shared slug/content behavior.
- Preserve resume, project, external writing, certificate, video, social, and mailto actions.
- Add chapter, rail, motion, article, and content-completeness tests.

### Primary Stories

- **US-02**: Encounter a distinct editorial opening.
- **US-05**: Browse Selected Works horizontally.
- **US-06**: Explore the Visual Archive.
- **US-07**: Explore Formation and Practice.
- **US-08**: Follow Process Notes and journal writing.
- **US-09**: Inspect materials, capabilities, and evidence.
- **US-10**: Reach the Closing Contact canvas.
- **US-11**: Receive an equivalent reduced-motion experience.

### Supporting Stories

- **US-03**: Integrates chapters with visual-index navigation.
- **US-04**: Provides stable root IDs and active chapter behavior.
- **US-12**: Ensures every chapter works in both layout modes and direct routes.
- **US-13**: Provides behavior-preserving actions and testability.

### Primary Requirements

- FR-03, FR-08 through FR-18, FR-27
- NFR-03 through NFR-09, NFR-11, NFR-12

### Inputs

- Approved ATR-U1 template contracts and shell props.
- Resolved artistic presentation data.
- Shared portfolio data and existing action helpers.
- Stable section IDs, chapter labels, layout callbacks, and journal routes.

### Outputs

- Ten distinct artistic route components.
- Reusable horizontal rail and controller.
- Reusable motion preference and reveal primitives.
- Artistic local journal detail and not-found presentation.
- Scoped artistic styles for dark/light and single/multi-page modes.
- Unit-level interaction, accessibility, content, and motion tests.

### Component Ownership

- Artistic chapter components under `src/templates/artistic/`.
- `src/templates/artistic/components/ArtisticRail.tsx`.
- `src/templates/artistic/components/ArtisticReveal.tsx`.
- `src/templates/artistic/hooks/useHorizontalRail.ts`.
- `src/templates/artistic/hooks/useMotionPreference.ts`.
- `src/templates/artistic/hooks/useInViewReveal.ts` if required by the approved functional design.
- `src/templates/artistic/ArtisticJournalPostPage.tsx`.
- Artistic-scoped styles and related tests.

### Boundaries

- Does not alter the engineering components or their visual system.
- Does not change route ID formats or layout storage ownership.
- Does not duplicate core portfolio data.
- Does not convert wheel movement into forced horizontal scrolling.
- Does not introduce deployment or backend changes.

### Design Stages

- **Functional Design**: Execute for rail targets/boundaries, chapter composition behavior, motion state, preview focus return, and article navigation.
- **NFR Requirements**: Execute for keyboard/touch access, reduced motion, responsive overflow, lazy media, visual stability, and contrast.
- **NFR Design**: Execute for reusable rail semantics, motion-safe patterns, stable sizing, and responsive compositions.
- **Infrastructure Design**: Skip.
- **Code Generation**: Execute after design approvals.

### Entry Gate

- ATR-U1 exit gate passed.
- Template Shell and chapter-label contracts are stable.
- Presentation resolver returns complete values.
- Engineering regression baseline remains green.

### Exit Gate

- Artistic first viewport, navigation context, chapters, rails, and closing experience are structurally distinct.
- All existing portfolio information remains discoverable.
- Rails are reachable by control, keyboard, pointer, and touch without wheel hijacking.
- Reduced-motion behavior preserves all content and actions.
- Both layout modes and artistic journal routes render correctly.
- Unit tests, TypeScript, lint, and build pass before ATR-U3.

## ATR-U3: Verification and Student Enablement

### Purpose

Prove the integrated redesign across templates, routes, viewports, color/motion preferences, and student customization workflows, then document the supported editing path.

### Responsibilities

- Expand cross-template integration and regression coverage.
- Verify all thirteen story journeys against implemented behavior.
- Verify both layout modes, direct section hashes, local journal hashes, unknown routes, resume, certificates, links, and contact actions.
- Verify reduced-motion, index focus, rail boundaries, and metadata fallbacks.
- Perform desktop/mobile and light/dark visual checks.
- Check for overlap, clipping, blank media, hidden overflow content, layout shift, and incoherent motion.
- Update README with artistic selection, optional metadata, stable IDs, image guidance, layout checks, and verification commands.
- Record build/test evidence and resolve integration defects without adding new feature scope.

### Primary Stories

- **US-13**: Maintain and publish both templates safely.

### Supporting Stories

- **US-01 through US-12**: All user journeys receive integrated acceptance and regression verification.

### Primary Requirements

- FR-28
- NFR-14, NFR-18, NFR-19, NFR-20

### Inputs

- Completed ATR-U1 and ATR-U2 implementations and unit tests.
- Approved requirements, stories, functional designs, and NFR designs.
- Existing build, lint, TypeScript, and deployment configuration.

### Outputs

- Complete automated regression suite for both templates.
- Responsive visual-verification evidence.
- Updated student customization documentation.
- Final integrated code fixes within approved scope.
- Build and test instructions/evidence for the final stage.

### Component Ownership

- Cross-template and App integration tests.
- Template contract and data-validation tests.
- Rail, motion, index, and route test helpers.
- Browser visual-check artifacts or documented commands.
- README and AI-DLC build/test documentation.

### Boundaries

- Does not introduce new artistic capabilities.
- Does not change infrastructure or deployment architecture.
- Does not create a runtime CMS or visitor template switcher.
- Does not add property-based testing because the extension is disabled.

### Design Stages

- **Functional Design**: Skip unless verification discovers new shared logic requiring approved design.
- **NFR Requirements and Design**: Skip as separate stages; verify the approved NFRs from ATR-U1 and ATR-U2.
- **Infrastructure Design**: Skip.
- **Code Generation**: Execute for tests, documentation, and scoped integration fixes.

### Entry Gate

- ATR-U1 and ATR-U2 exit gates passed.
- Automated unit checks are green.
- No unresolved contract mismatch remains.

### Exit Gate

- All primary and supporting story acceptance flows are verified.
- Engineering and artistic templates pass regression tests.
- Desktop/mobile, light/dark, single/multi-page, and reduced-motion checks pass.
- No incoherent overlap, clipping, blank media, or inaccessible horizontal content remains.
- Student documentation accurately describes the final implementation.
- Full test, TypeScript, lint, and production build gates pass.

## Cross-Unit Rules

- Units share one package, dependency graph, version, and deployment artifact.
- Shared contract changes occur in ATR-U1 and must stabilize before ATR-U2.
- ATR-U2 may add artistic-only modules but must not branch inside engineering components.
- ATR-U3 may fix approved behavior but must not expand feature scope without returning to requirements/design.
- Every unit updates its own AI-DLC plan checkboxes and verification evidence immediately.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Disabled during Requirements Analysis; no security extension constraints apply. |
| Property-Based Testing | Disabled | Disabled during Requirements Analysis; no PBT extension constraints apply. |
