# NFR Design Patterns - ATR-U1 Template Shell and Configuration Foundation

## Purpose

Define concrete patterns that satisfy the approved ATR-U1 requirements for resilience, accessibility, client scalability, performance, security, responsive behavior, isolation, and verification.

## Approved Pattern Decisions

| Area | Approved Answer | Pattern Impact |
|---|---|---|
| Resilience | A | Use deterministic local fallbacks and guarded browser boundaries; do not add distributed-system recovery machinery. |
| Post-navigation focus | A | Hold one pending focus intent in ArtisticShell and complete it after React renders the destination. |
| Client scalability | A | Use `Map`, `Set`, bounded linear passes, and immutable resolver output. |
| Performance measurement | A | Compare summed Vite JavaScript gzip output before and after ATR-U1. |
| Static security | A | Use closed tokens, React text rendering, pure runtime guards, and no validation dependency. |
| Logical components | A | Keep orchestration and presentation boundaries local; add no backend, cache, queue, service worker, or monitoring component. |
| Responsive behavior | A | Use Chakra responsive props and scoped CSS grid/flex constraints without layout-changing JavaScript. |
| Verification | A | Separate pure and component tests, reuse fixtures, and retain a manual browser checklist. |

## Resilience Patterns

### Deterministic Boundary Fallback

Recover only where the domain already defines a valid substitute.

| Boundary | Invalid Input or Failure | Fallback |
|---|---|---|
| Template Registry | Unknown runtime template ID | Complete engineering template. |
| Route resolution | Unknown, malformed, or disabled section ID | First enabled section. |
| Journal route | Unknown local slug | Selected template's journal not-found view with return action. |
| Layout storage | Unavailable, invalid, or throwing read/write | Existing in-memory/default layout behavior. |
| Creative statement | Missing or blank override | About intro, Hero intro, profile summary, then stable default. |
| Featured projects | Unknown/duplicate IDs or no valid result | Ignore unknown IDs, retain first duplicate, then all projects in shared order when empty. |
| Gallery treatment | Missing or unsupported treatment | Stable position-based treatment. |
| Artistic accent | Missing or unsupported token | Default artistic accent token. |
| Destination focus | Chapter heading unavailable after navigation | Artistic main landmark. |

This pattern does not catch and hide arbitrary rendering defects. Developer contract failures remain visible through TypeScript, tests, lint, and build output.

### Fail Before Release Pattern

Invalid developer-owned structure is not a runtime recovery case.

- `PortfolioTemplate` capabilities are compile-time required.
- Registry tests assert complete label and component maps.
- Portfolio tests reject empty or duplicate project IDs.
- Resolver tests name fallback invariant failures.
- Engineering regression tests reject shell-extraction regressions.
- Any failed test, type check, lint check, or production build blocks unit completion.

### Guarded Browser Boundary

Browser APIs remain behind existing guarded helpers or framework primitives.

- `usePortfolioLayout` owns guarded `localStorage` access and History/hash updates.
- Chakra Dialog owns modal focus containment and dismissal mechanics.
- ArtisticShell checks a focus target before calling `.focus()`.
- A missing focus target falls back once to the main landmark and clears the intent.
- No retry loop, polling loop, circuit breaker, or general recovery service is introduced.

### No Silent Template Substitution After Render

The engineering fallback applies only when resolving an unknown template ID. An unexpected error inside an already selected artistic component must remain diagnosable rather than silently replacing the visitor's presentation with engineering. A general error boundary is outside ATR-U1 unless implementation reveals an existing app-wide requirement and returns to design review.

## Focus and Accessibility Patterns

### Pending Focus Intent

ArtisticShell coordinates focus through a single-use intent.

```ts
type PendingFocusIntent =
  | { kind: 'chapter'; sectionId: SectionId }
  | { kind: 'main' }
  | null
```

#### Keyboard Chapter Selection

1. Visual Index reports keyboard activation and selected `sectionId`.
2. ArtisticShell stores `{ kind: 'chapter', sectionId }`.
3. Shared `onNavigate(sectionId)` updates hash, scroll, or routed content.
4. The index closes without forcing normal trigger return focus over the pending destination.
5. A React effect runs after the relevant content render.
6. It locates the destination root and designated `[data-chapter-heading]` target.
7. It focuses that target or the main landmark fallback.
8. It clears the intent unconditionally after the attempt.

#### Pointer Chapter Selection

- Invoke navigation and close the index.
- Do not create a pending focus intent.
- Preserve natural pointer/browser focus behavior.

#### Layout Toggle

1. Store `{ kind: 'main' }`.
2. Invoke the shared layout callback, which preserves the current section.
3. Close the index.
4. After the new layout content renders, focus the artistic main landmark.
5. Clear the intent.

### Effect Trigger Pattern

The focus-completion effect depends on the pending intent plus state that proves the destination context changed, such as `activeSection`, `layoutMode`, or rendered children. It must not use an arbitrary fixed timeout. If React rendering and browser scrolling require a frame boundary, use one scheduled animation frame with cleanup, not a duration guess.

### Programmatic Focus Target

- Chapter headings and the main landmark use semantic elements.
- Add `tabIndex={-1}` only to programmatic targets.
- Do not add these targets to normal tab order.
- Use `focus({ preventScroll: true })` only when shared navigation already positions the viewport; otherwise allow normal focus scrolling where needed.
- Tests assert `document.activeElement` after the effect completes.

### Dialog Primitive Pattern

Use the installed Chakra 3 Dialog API after verifying the local version's current composition model.

- Provide a programmatic dialog title.
- Focus an appropriate first control when opening.
- Contain Tab and Shift+Tab while open.
- Close on Escape and explicit close action.
- Return focus to the trigger only for non-navigation dismissal.
- Render current destination with `aria-current="page"` or equivalent.
- Pair active color with a non-color marker.

## Client Scalability Patterns

### Linear Featured Project Resolution

```ts
const projectsById = new Map(projects.map((project) => [project.id, project]))
const seenIds = new Set<string>()
```

Then iterate requested IDs once:

1. Skip an ID already in `seenIds`.
2. Add the first occurrence to `seenIds`.
3. Read the project from `projectsById`.
4. Append only known projects.
5. Return all projects in original order when no requested project resolves.

Expected complexity is `O(P + R)`, where `P` is project count and `R` is requested-ID count.

### Linear Gallery Resolution

Iterate gallery items once and resolve each treatment through direct record lookup plus a stable index fallback. Expected complexity is `O(G)`, where `G` is gallery count.

### Immutable Output Pattern

- Do not sort, splice, or annotate shared data arrays in place.
- Create new ordered arrays and treatment records.
- Treat resolved output as readonly at component boundaries.
- Tests freeze or snapshot input references where helpful to prove no mutation.

### Deferred Optimization Pattern

At the approved scale of approximately 100 projects and 100 gallery items:

- Do not add virtualization.
- Do not add a global cache.
- Do not add resolver memoization by default.
- Reconsider only after measured repeated resolution or content volume exceeds the approved boundary.

## Performance Patterns

### Event-Driven Shell

- Index state changes only in response to user events or shared state updates.
- Focus completion runs only while an intent exists.
- Route synchronization continues using existing browser events.
- No polling, continuous timers, or shell measurement loop is added.

### Minimal Rendering

| Layout | Pattern |
|---|---|
| Single-page | Render enabled template sections in shared navigation order. |
| Multi-page | Render only the active routed template section. |
| Local journal | Render only the selected template's journal component. |

Shell extraction must frame App-selected content and must not duplicate or pre-render an alternate template tree.

### No New Runtime Dependency

Use installed React, Chakra UI, next-themes integration, current CSS tooling, and browser APIs. A discovered dependency need returns to NFR review before modifying `package.json`.

### Bundle Evidence Pattern

1. Immediately before ATR-U1 code generation, run the production build.
2. Record every Vite JavaScript asset gzip size and their sum in code-generation evidence.
3. Repeat after implementation.
4. Calculate `(new total - baseline total) / baseline total`.
5. Growth at or below `0.15` passes this review trigger.
6. Growth above `0.15` requires documented cause and reduction or explicit approval.

The comparison uses JavaScript gzip totals, not source lines or uncompressed output.

## Static Security and Privacy Patterns

### Closed Presentation Tokens

- `ArtisticAccent` and `GalleryTreatment` are TypeScript unions.
- Runtime guard functions recognize the same finite sets.
- Internal maps convert valid tokens to scoped CSS variables/classes.
- Unknown runtime values resolve to defaults.
- Arbitrary configuration strings never become CSS declarations.

### React Text Rendering

- Trim configured statement strings for fallback decisions.
- Render statement, chapter label, and other student text as ordinary React children.
- Do not use `dangerouslySetInnerHTML`.
- Do not add an HTML sanitizer because HTML input is not supported.

### Narrow Persistence and No Tracking

- Keep only the existing layout-mode key in `localStorage`.
- Do not persist artistic configuration, route history, or visitor data.
- Add no analytics, error-reporting SDK, remote configuration, or telemetry.
- Resolver and shell behavior performs no runtime fetch.

## Responsive and Compatibility Patterns

### CSS-First Layout Adaptation

- Use existing Chakra responsive props and artistic-scoped CSS.
- Use explicit grid/flex tracks, `minmax()`, wrapping, stable gaps, and max-width constraints.
- Keep the compact header and main offset coordinated through shared scoped variables or matching tokens.
- Use stable control dimensions and at least 44 by 44 CSS pixel practical targets.
- Let long chapter labels wrap; do not shrink fonts with viewport units.
- Do not render separate mobile and desktop shell trees.
- Do not add JavaScript viewport-width branching for layout.

### Representative Viewport Matrix

| Width | Primary Check |
|---|---|
| 320 CSS px | Labels wrap, controls remain reachable, no horizontal page overflow. |
| 768 CSS px | Index transitions cleanly to intermediate layout without overlap. |
| 1024 CSS px | Desktop tracks and header context remain balanced. |
| 1440 CSS px | Content remains constrained and controls do not drift into excessive empty space. |

### Browser Primitive Pattern

Target current evergreen desktop browsers and current mobile Safari/Chrome. Prefer framework-managed dialog behavior and broadly supported CSS. Any direct browser API use retains a feature/failure fallback already defined by the functional design.

## Isolation and Maintainability Patterns

### Shell Adapter Pattern

- EngineeringShell wraps existing Navbar/main behavior with no artistic imports.
- ArtisticShell owns only artistic framing and local index/focus state.
- Both implement the same `PortfolioShellProps` contract.
- App is unaware of template-specific visual decisions.

### Pure Resolver Boundary

- Configuration normalization stays in `presentation.ts`.
- Artistic components receive complete resolved data.
- Engineering code never imports the resolver or artistic config.
- Resolver functions have no React, DOM, storage, History, or network dependency.

### Stable Identity Pattern

- Existing `SectionId` remains the route and DOM identity.
- Artistic chapter labels are presentation aliases.
- Project IDs are stable, unique, non-empty, and independent of titles.
- Gallery continues using existing stable item IDs.

## Verification Patterns

### Focused Test Layers

| Layer | Test Scope |
|---|---|
| Pure unit | Registry fallback, token guards, statement fallback, project ordering/deduplication, gallery treatments, immutability, 100-item representative inputs. |
| Component | EngineeringShell, ArtisticHeader, Visual Index semantics/events, focus containment integration where JSDOM supports it, pending focus completion. |
| App integration | Active shell, both layouts, valid/invalid section hashes, valid/unknown journal slugs, active chapter context. |
| Static validation | Project ID uniqueness, complete labels/maps, no unexpected runtime dependency. |
| Manual browser | Focus trap/return/destination, contrast, responsive widths, touch reachability, current browser smoke checks. |

### Reusable Fixture Pattern

- Create minimal complete template fixtures that satisfy the expanded contract.
- Reuse enabled/disabled navigation fixtures.
- Provide stable route/hash setup and cleanup helpers.
- Provide chapter heading and main landmark fixtures for focus tests.
- Avoid broad snapshots; assert accessible names, states, callbacks, active elements, and rendered section counts.

### Manual Evidence Pattern

Record viewport, color mode, input method, browser, expected behavior, and result in the code-generation or build/test evidence. Manual checks cover behavior JSDOM cannot prove, not scenarios already fully covered by deterministic unit tests.

## Pattern Traceability

| Pattern | NFR Coverage |
|---|---|
| Deterministic Boundary Fallback | ATR1-NFR-REL-01 through REL-05, ATR1-NFR-COMPAT-03 |
| Fail Before Release | ATR1-NFR-REL-06 through REL-08, MAINT-07 |
| Pending Focus Intent | ATR1-NFR-A11Y-04 through A11Y-06, A11Y-10 |
| Dialog Primitive | ATR1-NFR-A11Y-01 through A11Y-04, A11Y-07 |
| Linear Resolver | ATR1-NFR-SCAL-04, SCAL-05, PERF-03 |
| Event-Driven Shell | ATR1-NFR-PERF-02, PERF-06 |
| Bundle Evidence | ATR1-NFR-PERF-01, PERF-04 |
| Closed Presentation Tokens | ATR1-NFR-SEC-04, SEC-05 |
| CSS-First Layout | ATR1-NFR-RESP-01 through RESP-04, ATR1-NFR-COMPAT-01, ATR1-NFR-COMPAT-02 |
| Shell Adapter and Pure Resolver | ATR1-NFR-MAINT-01 through MAINT-05 |
| Focused Test Layers | ATR1-NFR-TEST-01 through TEST-06 |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no diagrams included. |
| ASCII diagrams | Not applicable; no diagrams included. |
| TypeScript blocks | Balanced fences and syntactically illustrative typed declarations. |
| Markdown tables | Valid simple pipe tables. |
| Formula formatting | Bundle formula is inline code. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Full extension patterns do not apply; approved static token/text/privacy patterns are included. |
| Property-Based Testing | Disabled | Resolver invariants use focused representative examples, including approved scale inputs. |
