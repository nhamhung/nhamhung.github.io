# Services - Artistic Template Presentation Redesign

This static React application does not need network or backend services. The term service here describes pure resolvers and hooks that coordinate state across presentation components.

## Template Registry Service

- **Location**: `src/templates/index.ts`
- **Purpose**: Resolve the selected presentation template.
- **Responsibilities**:
  - Register engineering and artistic template definitions.
  - Return the matching `PortfolioTemplate`.
  - Fall back to engineering for an unknown ID.
  - Expose a complete active template to App.
- **Interactions**: Reads `selectedTemplateId`; returns shell, journal, chapter label, and section component contracts.
- **Design Constraint**: The registry must not branch inside App or shared components based on template ID.

## App Composition Service

- **Location**: `src/App.tsx`
- **Purpose**: Coordinate browser state with template-provided presentation.
- **Responsibilities**:
  - Build enabled navigation and section collections.
  - Obtain layout and active section state from `usePortfolioLayout` and `useActiveSection`.
  - Synchronize browser hash state for local journal routing.
  - Render template-specific journal or section content.
  - Pass shared callbacks and rendered content to the template Shell.
- **Interactions**: Template registry, layout service, scroll service, journal route service, and template shell.
- **Design Constraint**: App owns orchestration but does not own artistic visual decisions.

## Layout and Route Service

- **Location**: `src/hooks/usePortfolioLayout.ts`
- **Purpose**: Preserve shared single-page and multi-page navigation behavior.
- **Responsibilities**:
  - Read and write layout preference.
  - Generate anchor and routed hashes.
  - Resolve active routed section.
  - Navigate through callbacks consumed by either shell.
  - Retain current destination when layout mode changes.
- **Interactions**: Browser history, local storage, App, EngineeringShell, and ArtisticShell.
- **Design Constraint**: Template shells do not call history or storage directly.

## Active Section Service

- **Location**: `src/utils/scroll.ts`
- **Purpose**: Resolve the current `SectionId` from single-page scroll position.
- **Responsibilities**:
  - Filter enabled navigation.
  - Smooth-scroll to route-compatible sections.
  - Observe viewport geometry and expose active section.
- **Interactions**: App and layout service.
- **Design Constraint**: Artistic chapter labels are presentation mappings over the returned `SectionId`.

## Journal Route and Content Service

- **Location**: `src/utils/journal.ts` and `src/data/journalPosts.ts`
- **Purpose**: Keep local post routing and static content shared across templates.
- **Responsibilities**:
  - Create and parse GitHub Pages-safe journal hashes.
  - Resolve local post content by slug.
  - Preserve unknown-slug fallback behavior.
- **Interactions**: App, existing `JournalPostPage`, and `ArtisticJournalPostPage`.
- **Design Constraint**: Templates may replace post presentation but not duplicate slug parsing or content registration.

## Artistic Presentation Resolver

- **Location**: Proposed `src/templates/artistic/presentation.ts`
- **Purpose**: Convert optional student configuration into complete presentation data.
- **Responsibilities**:
  - Resolve creative statement from override or shared hero/about content.
  - Resolve featured projects from stable IDs and shared project order.
  - Resolve gallery treatments from explicit configuration or deterministic defaults.
  - Resolve a supported accent token.
  - Ignore unknown references safely and never mutate shared portfolio data.
- **Interactions**: `src/data/artistic.ts`, `src/data/portfolio.ts`, and artistic chapter components.
- **Design Constraint**: Pure functions only; no DOM access or React state.

## Artistic Chapter Label Service

- **Location**: Artistic template definition and optional helper in `src/templates/artistic/chapters.ts`
- **Purpose**: Map stable section IDs to editorial labels and sequence metadata.
- **Responsibilities**:
  - Provide one label for every `SectionId`.
  - Preserve existing navigation enablement and order.
  - Provide chapter numbering for the visual index and chapter frames.
- **Interactions**: ArtisticHeader, ArtisticVisualIndex, and ArtisticChapterFrame.
- **Design Constraint**: Route IDs remain unchanged; labels are presentation-only.

## Horizontal Rail Controller

- **Location**: Proposed `src/templates/artistic/hooks/useHorizontalRail.ts`
- **Purpose**: Coordinate native horizontal rail behavior.
- **Responsibilities**:
  - Hold the rail element reference.
  - Calculate start/end availability after mount, scroll, and resize.
  - Resolve previous/next native scroll targets.
  - Support explicit keyboard behavior without trapping focus.
  - Respect reduced motion when selecting smooth versus immediate scroll behavior.
- **Interactions**: ArtisticRail, Selected Works, Visual Archive, and motion preference service.
- **Design Constraint**: Does not intercept ordinary vertical wheel events.

## Motion Preference and Reveal Service

- **Location**: Proposed `src/templates/artistic/hooks/useMotionPreference.ts` and `useInViewReveal.ts`
- **Purpose**: Coordinate progressive motion and reduced-motion equivalence.
- **Responsibilities**:
  - Read and subscribe to `prefers-reduced-motion`.
  - Enable observers only when motion is permitted.
  - Expose stable revealed state so content is not permanently hidden.
  - Select motion-safe behavior for rails and chapter transitions.
- **Interactions**: ArtisticReveal, ArtisticChapterFrame, ArtisticRail, and artistic CSS.
- **Design Constraint**: No new animation library and no motion-dependent information.

## Theme Service

- **Location**: Existing Chakra color mode helpers and CSS variables.
- **Purpose**: Preserve light/dark mode while allowing artistic palette tokens.
- **Responsibilities**:
  - Expose the existing color mode control in both shells.
  - Scope artistic variables to `.portfolio-template-artistic`.
  - Apply resolved accent tokens through supported classes or data attributes.
- **Interactions**: ArtisticShell, ArtisticVisualIndex, and `src/App.css` or a dedicated artistic stylesheet.
- **Design Constraint**: Arbitrary raw style injection is unnecessary; supported accent tokens are sufficient.

## Test Orchestration Service

- **Location**: Test helpers near App/template tests.
- **Purpose**: Provide deterministic setup for shell, route, motion, and rail scenarios.
- **Responsibilities**:
  - Render either template with a controlled hash and layout preference.
  - Mock `matchMedia` reduced-motion values.
  - Mock rail geometry unavailable in jsdom.
  - Keep engineering regression assertions separate from artistic interaction assertions.
- **Interactions**: App tests, template tests, rail tests, resolver tests, and browser visual verification.

## Service Interaction Summary

1. The Template Registry returns a complete template definition.
2. App obtains layout, route, and active-section state from shared services.
3. App renders template-specific content and passes it with shared callbacks to the template Shell.
4. ArtisticShell uses chapter labels and visual-index state but delegates navigation back to App callbacks.
5. Artistic chapters consume shared data plus pure resolved presentation metadata.
6. Rails and reveals use local hooks for interaction state and motion preferences.
7. Journal presentation varies by template while route parsing and static content remain shared.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Disabled during Requirements Analysis; no security extension constraints apply. |
| Property-Based Testing | Disabled | Disabled during Requirements Analysis; no PBT extension constraints apply. |
