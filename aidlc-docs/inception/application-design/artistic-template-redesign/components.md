# Components - Artistic Template Presentation Redesign

## Architectural Boundary

`App` remains the owner of browser state, hash parsing, enabled sections, layout mode, and active-section calculation. A selected `PortfolioTemplate` supplies the page shell, section components, chapter labels, and local journal presentation. This keeps routing behavior shared while allowing engineering and artistic experiences to differ at the page-composition level.

## Core Orchestration Components

### App Orchestrator

- **Location**: `src/App.tsx`
- **Purpose**: Resolve shared application state and pass it into the active template shell.
- **Responsibilities**:
  - Resolve enabled navigation and section IDs.
  - Own single/multi-page layout state and browser hash synchronization.
  - Resolve local journal slugs.
  - Select template-specific section and journal components.
  - Render the active template's Shell component with shared shell props and content.
- **Interface**: No public props; consumes registry, data, hooks, and browser state.

### PortfolioTemplate Contract

- **Location**: `src/templates/types.ts`
- **Purpose**: Define every capability a presentation template may replace.
- **Responsibilities**:
  - Identify and describe the template.
  - Supply a `ShellComponent`.
  - Supply a complete `sectionComponents` map.
  - Supply a `JournalPostComponent`.
  - Supply chapter labels for all route-compatible section IDs.
- **Interface**: Typed `PortfolioTemplate` object resolved by the existing registry.

### PortfolioShell Contract

- **Location**: `src/templates/types.ts`
- **Purpose**: Standardize communication between App and template-specific shells.
- **Responsibilities**:
  - Receive active section, layout mode, navigation items, navigation helpers, and rendered content.
  - Frame content without owning browser routing or portfolio data mutation.
  - Expose consistent test attributes for template and layout state.
- **Interface**: `PortfolioShellProps` with `children` as the rendered section or journal content.

## Engineering Template Components

### EngineeringShell

- **Location**: Proposed `src/templates/engineering/EngineeringShell.tsx`
- **Purpose**: Preserve the existing engineering Navbar and main-content behavior behind the new shell contract.
- **Responsibilities**:
  - Render the existing `Navbar` with current props.
  - Apply existing multi-page top spacing and main-region attributes.
  - Render App-provided content unchanged.
- **Interface**: Implements `PortfolioShellProps`.

### Existing Engineering Sections

- **Location**: `src/components/*.tsx`
- **Purpose**: Preserve the existing engineering presentation.
- **Responsibilities**: Continue rendering the current Hero, About, Education, Experience, Awards, Projects, Gallery, Journal, Skills, and Contact sections.
- **Interface**: Continue implementing `ComponentType` with stable root section IDs.

## Artistic Shell and Navigation Components

### ArtisticShell

- **Location**: Proposed `src/templates/artistic/ArtisticShell.tsx`
- **Purpose**: Provide the artistic template's page-level editorial composition.
- **Responsibilities**:
  - Render `ArtisticHeader` and `ArtisticVisualIndex`.
  - Apply artistic main-region spacing and layout-mode behavior.
  - Provide chapter progress/context for App-rendered content.
  - Keep the visual index available on sections and local journal pages.
  - Scope artistic classes, variables, and motion behavior.
- **Interface**: Implements `PortfolioShellProps`.

### ArtisticHeader

- **Location**: Proposed `src/templates/artistic/ArtisticHeader.tsx`
- **Purpose**: Show student identity, current artistic chapter, and index trigger.
- **Responsibilities**:
  - Display profile identity from shared data.
  - Resolve the current chapter label from template configuration.
  - Open the visual index.
  - Remain compact, responsive, and keyboard accessible.
- **Interface**: Receives active section, chapter labels, and index-open callback.

### ArtisticVisualIndex

- **Location**: Proposed `src/templates/artistic/ArtisticVisualIndex.tsx`
- **Purpose**: Present all enabled chapters in a full-screen accessible index.
- **Responsibilities**:
  - Render every enabled navigation destination with artistic labels.
  - Indicate the current chapter visually and programmatically.
  - Host theme and layout controls.
  - Close on selection or Escape.
  - Use Chakra Dialog focus management and return focus to the trigger.
- **Interface**: Receives open state, navigation items, chapter labels, layout mode, href resolver, navigate callback, layout-toggle callback, and close callback.

## Artistic Chapter Components

Every existing `SectionId` remains routable. The artistic template maps each ID to a distinct chapter component:

| Section ID | Artistic Component | Editorial Role |
|---|---|---|
| `home` | `ArtisticOpeningStatement` | Identity, creative statement, profile media, and primary actions |
| `about` | `ArtisticStudioStatement` | Extended biography, values, and metrics |
| `education` | `ArtisticFormation` | Education as a formation sequence |
| `experience` | `ArtisticPractice` | Work and leadership as evolving practice |
| `awards` | `ArtisticRecognition` | Awards as selected recognition |
| `projects` | `ArtisticSelectedWorks` | Horizontal project rail |
| `gallery` | `ArtisticVisualArchive` | Horizontal image archive and preview |
| `journal` | `ArtisticProcessNotes` | Local and external writing as process documentation |
| `skills` | `ArtisticMaterials` | Skills and certificates as materials and capabilities |
| `contact` | `ArtisticClosingContact` | Resume, social, email, and contact actions |

### ArtisticChapterFrame

- **Location**: Proposed replacement/evolution of `ArtisticSectionShell.tsx`
- **Purpose**: Provide shared editorial chapter heading, numbering, spacing, reveal behavior, and optional next-chapter action.
- **Responsibilities**:
  - Keep root IDs and test attributes stable.
  - Render chapter label, title, introduction, and content.
  - Adapt spacing between single-page and multi-page layouts.
  - Apply progressive reveal behavior with reduced-motion fallback.
- **Interface**: Receives section ID, chapter metadata, layout options, children, and optional next section.

### ArtisticJournalPostPage

- **Location**: Proposed `src/templates/artistic/ArtisticJournalPostPage.tsx`
- **Purpose**: Render local journal details and not-found states in the artistic visual language.
- **Responsibilities**:
  - Reuse existing local post lookup and hash behavior.
  - Display title, metadata, topics, image, and Markdown content.
  - Provide a return path to Journal/Process Notes.
  - Preserve accessible article structure and responsive reading width.
- **Interface**: Receives the same `slug` prop as the existing `JournalPostPage`.

## Reusable Artistic Interaction Components

### ArtisticRail

- **Location**: Proposed `src/templates/artistic/components/ArtisticRail.tsx`
- **Purpose**: Provide native horizontal scrolling for projects and gallery media.
- **Responsibilities**:
  - Render ordered items in a scroll-snap container.
  - Provide previous/next icon controls and accessible labels.
  - Track start/end availability without hijacking vertical wheel behavior.
  - Support keyboard, touch, and pointer use.
  - Expose a meaningful list/region structure.
- **Interface**: Generic item collection, stable item key resolver, item renderer, rail label, and optional item sizing mode.

### ArtisticReveal

- **Location**: Proposed `src/templates/artistic/components/ArtisticReveal.tsx`
- **Purpose**: Apply optional entrance and parallax behavior progressively.
- **Responsibilities**:
  - Observe visibility only when motion is allowed.
  - Add stable state classes rather than hiding content indefinitely.
  - Disable parallax and large transforms for reduced-motion users.
- **Interface**: Receives children, motion variant, delay token, and optional parallax strength.

## Data and Resolver Components

### Artistic Presentation Configuration

- **Location**: Proposed `src/data/artistic.ts`
- **Purpose**: Give students one optional presentation-only configuration file.
- **Responsibilities**:
  - Store creative statement override, featured project IDs, gallery treatments, and accent color.
  - Reference stable project and gallery identifiers.
  - Remain optional and independent from core portfolio content.
- **Interface**: Exports an object satisfying `ArtisticPresentationConfig`.

### Artistic Presentation Resolver

- **Location**: Proposed `src/templates/artistic/presentation.ts`
- **Purpose**: Resolve optional artistic configuration into complete deterministic presentation data.
- **Responsibilities**:
  - Derive creative statement fallback.
  - Resolve featured projects and ignore unknown IDs safely.
  - Resolve gallery orientation/treatment defaults.
  - Validate or normalize accent color into supported tokens.
- **Interface**: Pure typed functions consumed by artistic components.

### Stable Project Identity

- **Location**: `src/types/portfolio.ts` and `src/data/projects.ts`
- **Purpose**: Allow presentation config to reference projects without title coupling.
- **Responsibilities**: Add a stable `id` field to `ProjectEntry` and each configured project.
- **Interface**: Unique non-empty string validated by portfolio tests.

## Hooks and Existing Services

### usePortfolioLayout

- **Location**: `src/hooks/usePortfolioLayout.ts`
- **Purpose**: Continue owning layout persistence, section hashes, and navigation transitions.
- **Design Change**: Expose existing state through `PortfolioShellProps`; do not fork layout logic per template.

### useActiveSection

- **Location**: `src/utils/scroll.ts`
- **Purpose**: Continue deriving current section in single-page mode.
- **Design Change**: Artistic labels resolve from the same active `SectionId`.

### useHorizontalRail

- **Location**: Proposed `src/templates/artistic/hooks/useHorizontalRail.ts`
- **Purpose**: Encapsulate rail measurement, scroll actions, and boundary state.
- **Responsibilities**: Hold a rail ref, compute previous/next availability, scroll to a stable target, and update after scroll or resize.

### useMotionPreference

- **Location**: Proposed `src/templates/artistic/hooks/useMotionPreference.ts`
- **Purpose**: Expose reduced-motion preference and safe observer behavior to artistic motion components.
- **Responsibilities**: Read `prefers-reduced-motion`, respond to changes, and avoid browser access during non-browser evaluation.

## Test Boundaries

- **Template contract tests**: Require every template to supply Shell, JournalPost, chapter labels, and section components.
- **Engineering regression tests**: Render the engineering shell and assert existing Navbar and layout behavior.
- **Artistic shell tests**: Verify header, visual index, chapter labels, layout controls, focus, and navigation.
- **Rail tests**: Verify controls, boundary state, item ordering, and keyboard activation.
- **Presentation resolver tests**: Verify complete, partial, unknown, and absent metadata fallbacks.
- **Route tests**: Verify single-page, multi-page, direct section, direct journal, and unknown-slug behavior.
- **Motion tests**: Verify reduced-motion classes/state and content availability.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Disabled during Requirements Analysis; no security extension constraints apply. |
| Property-Based Testing | Disabled | Disabled during Requirements Analysis; no PBT extension constraints apply. |
