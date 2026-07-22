# Component Methods - Artistic Template Presentation Redesign

Detailed behavioral rules are deferred to per-unit Functional Design. These signatures define high-level contracts and ownership boundaries.

## Template and Shell Contracts

### `PortfolioTemplate`

```ts
type PortfolioTemplate = {
  id: PortfolioTemplateId
  label: string
  description: string
  ShellComponent: ComponentType<PortfolioShellProps>
  JournalPostComponent: ComponentType<JournalPostPageProps>
  chapterLabels: Record<SectionId, string>
  sectionComponents: Record<SectionId, ComponentType>
}
```

- **Purpose**: Define all template-substitutable presentation surfaces.
- **Output**: A complete template definition checked at compile time and in registry tests.

### `PortfolioShellProps`

```ts
type PortfolioShellProps = {
  activeSection: SectionId
  layoutMode: LayoutMode
  navigationItems: EnabledNavigationItem[]
  getNavigationHref: (sectionId: SectionId) => string
  onNavigate: (sectionId: SectionId) => void
  onToggleLayoutMode: () => void
  children: ReactNode
}
```

- **Purpose**: Pass shared App state and rendered content into either template shell.
- **Ownership Rule**: Shells may present and invoke these values but do not parse hashes or mutate layout storage directly.

### `EngineeringShell(props: PortfolioShellProps): JSX.Element`

- **Purpose**: Adapt the current Navbar and main region to the new shell contract.
- **Input**: Shared shell props and App-rendered children.
- **Output**: Existing engineering presentation.

### `ArtisticShell(props: PortfolioShellProps): JSX.Element`

- **Purpose**: Render artistic header, visual index, and editorial main region.
- **Input**: Shared shell props and App-rendered children.
- **Output**: Artistic page shell for section or journal content.

## App Orchestration

### `renderTemplateContent(template: PortfolioTemplate, visibleSectionIds: SectionId[], journalSlug?: string): ReactNode`

- **Purpose**: Select template-specific journal or section content.
- **Input**: Active template, visible section IDs, and optional local journal slug.
- **Output**: One journal page, one routed section, or the continuous section sequence.

### `getShellActiveSection(activeSection: SectionId, journalSlug?: string): SectionId`

- **Purpose**: Keep Journal active while rendering a local post.
- **Input**: Layout-derived section and optional slug.
- **Output**: `journal` for a local post, otherwise the layout-derived section.

## Artistic Navigation

### `ArtisticHeader(props: ArtisticHeaderProps): JSX.Element`

```ts
type ArtisticHeaderProps = {
  activeSection: SectionId
  chapterLabels: Record<SectionId, string>
  onOpenIndex: () => void
}
```

- **Purpose**: Present identity, active chapter label, and visual-index trigger.

### `ArtisticVisualIndex(props: ArtisticVisualIndexProps): JSX.Element`

```ts
type ArtisticVisualIndexProps = {
  open: boolean
  activeSection: SectionId
  layoutMode: LayoutMode
  navigationItems: EnabledNavigationItem[]
  chapterLabels: Record<SectionId, string>
  getNavigationHref: (sectionId: SectionId) => string
  onNavigate: (sectionId: SectionId) => void
  onToggleLayoutMode: () => void
  onClose: () => void
}
```

- **Purpose**: Render the accessible full-screen chapter index and display controls.

### `handleIndexNavigate(sectionId: SectionId): void`

- **Purpose**: Invoke shared navigation and close the index after a destination is chosen.
- **Input**: Existing route-compatible section ID.
- **Output**: No return value; delegates route behavior to App-provided callback.

## Artistic Chapter Components

### `ArtisticChapterFrame(props: ArtisticChapterFrameProps): JSX.Element`

```ts
type ArtisticChapterFrameProps = {
  id: SectionId
  chapterNumber: string
  chapterLabel: string
  title: string
  intro?: string
  nextSectionId?: SectionId
  children: ReactNode
}
```

- **Purpose**: Provide stable section identity, editorial framing, and motion-safe reveal behavior.

### Section Signatures

```ts
ArtisticOpeningStatement(): JSX.Element
ArtisticStudioStatement(): JSX.Element
ArtisticFormation(): JSX.Element
ArtisticPractice(): JSX.Element
ArtisticRecognition(): JSX.Element
ArtisticSelectedWorks(): JSX.Element
ArtisticVisualArchive(): JSX.Element
ArtisticProcessNotes(): JSX.Element
ArtisticMaterials(): JSX.Element
ArtisticClosingContact(): JSX.Element
```

- **Purpose**: Render the shared data associated with each stable `SectionId` through artistic compositions.
- **Input**: No props in the initial design; imports typed static data like existing sections.
- **Output**: One route-compatible section root.

### `ArtisticJournalPostPage({ slug }: JournalPostPageProps): JSX.Element`

```ts
type JournalPostPageProps = { slug: string }
```

- **Purpose**: Render the local post or not-found state using artistic article composition.

## Horizontal Rail

### `ArtisticRail<T>(props: ArtisticRailProps<T>): JSX.Element`

```ts
type ArtisticRailProps<T> = {
  label: string
  items: readonly T[]
  getItemKey: (item: T) => string
  renderItem: (item: T, index: number) => ReactNode
  itemSize?: 'feature' | 'gallery' | 'compact'
}
```

- **Purpose**: Render an accessible, reusable native horizontal rail.

### `useHorizontalRail(): HorizontalRailState`

```ts
type HorizontalRailState = {
  railRef: RefObject<HTMLElement | null>
  canScrollPrevious: boolean
  canScrollNext: boolean
  scrollPrevious: () => void
  scrollNext: () => void
  handleRailKeyDown: (event: KeyboardEvent<HTMLElement>) => void
}
```

- **Purpose**: Encapsulate rail movement and boundary state.
- **Rule Deferred**: Exact target measurement and tolerance are defined during Functional Design.

### `getRailScrollTarget(direction: 'previous' | 'next', rail: HTMLElement): number`

- **Purpose**: Resolve a stable native scroll target based on the current viewport and snap items.
- **Input**: Direction and rail element.
- **Output**: Horizontal scroll position.

## Motion

### `useMotionPreference(): MotionPreference`

```ts
type MotionPreference = {
  reduceMotion: boolean
  motionEnabled: boolean
}
```

- **Purpose**: Expose live reduced-motion preference safely.

### `ArtisticReveal(props: ArtisticRevealProps): JSX.Element`

```ts
type ArtisticRevealProps = {
  children: ReactNode
  variant?: 'fade' | 'rise' | 'image'
  delay?: 'none' | 'short' | 'medium'
  parallaxStrength?: 'none' | 'subtle'
}
```

- **Purpose**: Apply progressive artistic motion without making content availability depend on animation.

### `useInViewReveal(enabled: boolean): InViewRevealState`

- **Purpose**: Observe an element only when motion is enabled.
- **Output**: Element ref and stable revealed state.

## Presentation Configuration and Resolution

### `ArtisticPresentationConfig`

```ts
type ArtisticPresentationConfig = {
  creativeStatement?: string
  featuredProjectIds?: string[]
  galleryTreatments?: Record<string, GalleryTreatment>
  accent?: ArtisticAccent
}
```

- **Purpose**: Define optional student-editable artistic presentation metadata.

### `resolveArtisticPresentation(config: ArtisticPresentationConfig, portfolio: Portfolio): ResolvedArtisticPresentation`

- **Purpose**: Produce complete presentation data with deterministic fallbacks.
- **Input**: Optional artistic config and shared portfolio aggregate.
- **Output**: Resolved statement, featured projects, gallery treatments, and accent token.

### `resolveFeaturedProjects(projects: readonly ProjectEntry[], requestedIds?: readonly string[]): ProjectEntry[]`

- **Purpose**: Select configured projects in order, ignore unknown IDs, and fall back to configured project order.

### `resolveGalleryTreatment(item: GalleryItem, index: number, configured?: GalleryTreatment): GalleryTreatment`

- **Purpose**: Return explicit treatment or a stable position-based default.

### `resolveArtisticAccent(accent?: ArtisticAccent): ArtisticAccent`

- **Purpose**: Return a supported accent token and avoid arbitrary unsafe style values.

## Existing Shared Services

### `usePortfolioLayout(enabledSectionIds, scrollActiveSection): PortfolioLayoutState`

- **Purpose**: Continue owning layout persistence, hash generation, direct routes, and navigation callbacks.

### `parseJournalPostHash(hash: string): string | undefined`

- **Purpose**: Continue resolving local journal routes without template-specific duplication.

### `getEnabledNavigationItems(items): EnabledNavigationItem[]`

- **Purpose**: Continue filtering destinations before shell presentation.

## Test Helpers

### `renderPortfolioWithTemplate(templateId: PortfolioTemplateId, options?: RenderOptions): RenderResult`

- **Purpose**: Render either shell with optional hash, layout storage, and motion preference setup.

### `mockReducedMotion(reduceMotion: boolean): void`

- **Purpose**: Provide deterministic `matchMedia` behavior for motion tests.

### `mockRailGeometry(element: HTMLElement, geometry: RailGeometry): void`

- **Purpose**: Provide deterministic overflow and position values for rail unit tests.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Disabled during Requirements Analysis; no security extension constraints apply. |
| Property-Based Testing | Disabled | Disabled during Requirements Analysis; no PBT extension constraints apply. |
