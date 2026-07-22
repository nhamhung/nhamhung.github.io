# Tech Stack Decisions - ATR-U1 Template Shell and Configuration Foundation

## Decision Summary

| Area | Decision | Rationale |
|---|---|---|
| Application runtime | Existing React 19 and React DOM | Preserves the current application architecture and component model. |
| Language and contracts | TypeScript 5.9 | Enforces complete template maps, shell props, stable IDs, and closed artistic tokens. |
| Build and static delivery | Existing Vite 7 build and GitHub Pages workflow | Retains static hash-compatible deployment without server changes. |
| UI primitives | Existing Chakra UI 3 primitives | Supplies installed accessible dialog/focus behavior and theme integration. |
| Styling | Existing Chakra style props, scoped CSS, and current Tailwind setup where already used | Avoids another styling system and keeps artistic rules isolated. |
| State management | React local state plus existing `usePortfolioLayout` and `useActiveSection` hooks | Keeps browser/layout ownership shared and index state local. |
| Routing | Existing native History/hash utilities | Preserves direct static links without a router dependency. |
| Persistence | Existing guarded `localStorage` layout preference | Stores only a non-sensitive display preference and already degrades safely. |
| Presentation resolution | Pure TypeScript functions and `Map`/`Set` lookup structures | Produces deterministic linear-time output without state or network coupling. |
| Testing | Existing Vitest, JSDOM, Testing Library, TypeScript, ESLint, and Vite build | Covers contracts, DOM interaction, focus, routes, and release checks without a new framework. |
| Production diagnostics | No telemetry or monitoring SDK | Matches the approved static privacy boundary and project scale. |

## Application Runtime Decision

**Decision**: Continue using the installed React and React DOM runtime.

**Accepted because**:

- App and all template sections already use React components.
- `ShellComponent` and `JournalPostComponent` fit standard typed component boundaries.
- Local visual-index state is small and does not need an external state manager.
- React rendering supports the approved post-navigation focus effect.

**Rejected alternatives**:

- A new frontend framework would duplicate the application runtime and invalidate current components.
- A global state library would add runtime cost for state already owned cleanly by App, hooks, and ArtisticShell.

## TypeScript Contract Decision

**Decision**: Expand the existing TypeScript types and enforce complete definitions with `satisfies`.

**Required uses**:

- `PortfolioTemplate` requires shell, journal, chapter-label, and section-component capabilities.
- `Record<SectionId, ...>` enforces complete route-compatible maps.
- `ProjectEntry.id` provides stable project identity.
- `ArtisticPresentationConfig` keeps fields optional.
- `GalleryTreatment` and `ArtisticAccent` remain closed unions.
- Resolver output uses complete non-optional values.

**Rejected alternative**:

- Runtime-only loose objects would make missing template capabilities and unsupported style values harder for students to diagnose before deployment.

## UI and Dialog Decision

**Decision**: Implement the full-screen visual index with the installed Chakra UI dialog primitives and existing color-mode integration.

**Accepted because**:

- Chakra UI is already a runtime dependency.
- Its dialog primitives provide semantic modal structure, focus containment, Escape handling, and trigger return-focus behavior.
- Theme controls already belong to the Chakra/next-themes integration.
- Styling can remain scoped to the artistic shell while using established tokens.

**Implementation constraints**:

- Supply a programmatic dialog name.
- Keep an explicit close command.
- Use the existing index trigger as the return-focus target for dismissal.
- Override only the post-navigation focus path needed to focus destination content.
- Verify actual installed Chakra 3 component APIs during code generation rather than relying on older Chakra signatures.

**Rejected alternative**:

- A second headless dialog package would duplicate focus infrastructure and violate the no-new-runtime-package requirement.

## State Ownership Decision

**Decision**: Keep browser, route, active-section, and layout state in App and existing hooks; keep only visual-index state in ArtisticShell.

**Ownership**:

| State | Owner |
|---|---|
| Active single-page section | Existing `useActiveSection` |
| Layout mode and routed section | Existing `usePortfolioLayout` |
| Current hash and journal classification | App/shared journal utility |
| Active artistic label | Derived from shell `activeSection` and chapter labels |
| Visual index open/closed | ArtisticShell local state |
| Pending post-navigation focus | ArtisticShell local state or ref |
| Theme mode | Existing Chakra/next-themes integration |

**Rejected alternatives**:

- Shell-owned hash or storage parsing would duplicate shared behavior.
- Artistic-only active-section observation would allow templates to disagree about route state.

## Routing and Static Hosting Decision

**Decision**: Continue using native hash and History APIs through the existing layout and journal utilities.

**Accepted because**:

- `#section`, `#/section`, and `#/journal/{slug}` links work on GitHub Pages without server rewrites.
- Current layout behavior and direct links already depend on these formats.
- The feature needs a fixed section map rather than a general route tree.

**Constraints**:

- Journal-prefix classification occurs before invalid-section fallback.
- Existing stable `SectionId` values remain canonical.
- Invalid section hashes resolve to the first enabled section.
- Unknown journal slugs reach the selected template journal view.

**Rejected alternatives**:

- React Router would add a dependency without improving the fixed hash model.
- Path routing would require deployment fallback changes outside approved scope.

## Presentation Resolver Decision

**Decision**: Use pure TypeScript functions with linear passes and lookup structures.

**Implementation approach**:

- Build a project `Map` keyed by stable ID.
- Use a `Set` to retain only the first requested duplicate.
- Iterate requested IDs once and fall back to shared project order when none resolve.
- Iterate gallery items once to produce one supported treatment per item.
- Normalize blank statement input before applying the fixed fallback chain.
- Resolve accent and treatment values through closed token guards.

**Accepted because**:

- It supports the approved student-scale collections with predictable behavior.
- It is easy to test with complete, partial, unknown, duplicate, and absent settings.
- It prevents fallback logic from spreading across artistic components.

**Rejected alternatives**:

- Runtime schema or data-fetching libraries would add weight without a dynamic input source.
- Per-component lookup logic would duplicate rules and weaken deterministic fallback guarantees.

## Styling and Browser Compatibility Decision

**Decision**: Use existing Chakra style props and artistic-scoped CSS with current browser capabilities.

**Constraints**:

- Artistic selectors remain under the artistic template root or local component scope.
- Engineering shell spacing and styles remain unchanged.
- Index layouts provide stable mobile and desktop constraints around 320, 768, 1024, and 1440 CSS pixels.
- Current evergreen Chrome, Firefox, Safari, and Edge plus current mobile Safari and Chrome are the support target.
- Focus rings, active state, and overlays meet approved contrast requirements in both color modes.
- No arbitrary student string becomes a CSS value; token maps produce scoped CSS variables.

**Rejected alternatives**:

- A new CSS-in-JS or design-system package would duplicate installed capabilities.
- Legacy-browser polyfills are not required by the approved compatibility target.

## Performance Budget Decision

**Decision**: Add no runtime dependency and compare Vite JavaScript gzip totals before and after ATR-U1.

**Measurement procedure**:

1. Run a production build immediately before ATR-U1 code generation and record each JavaScript asset's gzip size.
2. Sum the JavaScript gzip sizes to establish the baseline.
3. Repeat after ATR-U1 implementation.
4. Compute `(new total - baseline total) / baseline total`.
5. When the result is greater than `0.15`, document which shell code caused the growth and why it is acceptable or reduce the change before unit completion.

The threshold is a review trigger, not permission to skip functional, accessibility, or reliability requirements.

## Testing Decision

**Decision**: Use the existing local test and build stack.

**Automated tools**:

- Vitest for resolvers, registry behavior, and deterministic helpers.
- React Testing Library and JSDOM for shells, visual-index semantics/events, routing composition, and focus.
- TypeScript project build for contract completeness.
- ESLint for code and hook rules.
- Vite production build for static output and gzip reporting.

**Manual checks**:

- Keyboard open, focus containment, current state, dismissal, chapter selection, and layout change.
- Representative 320, 768, 1024, and 1440 CSS pixel layouts.
- Current available desktop and mobile evergreen browser smoke checks.
- Light and dark contrast/focus behavior.

**Rejected alternatives**:

- A new end-to-end framework is deferred because ATR-U1 behavior can be covered through the installed stack plus manual browser verification.
- Property-based testing is not introduced because its extension is disabled and focused examples cover the approved resolver boundary.

## Security, Privacy, and Diagnostics Decision

**Decision**: Preserve static, local, non-tracking behavior.

**Constraints**:

- No authentication, authorization, secrets, backend, analytics, telemetry, or error-reporting SDK.
- No student-configured raw HTML rendering.
- Only the existing `single` or `multi` layout value is persisted.
- External URLs remain explicit user-activated links from trusted static data.
- Development feedback comes from named tests, TypeScript, lint, and build failures.

**Rejected alternatives**:

- Production telemetry and analytics add privacy and operational scope without an approved need.
- Runtime editing/accounts would change the product and deployment architecture.

## Dependency Decision

**Decision**: Do not modify runtime dependencies for ATR-U1.

The installed relevant capabilities are sufficient:

- `react` and `react-dom` for composition and state.
- `@chakra-ui/react` for dialog and UI primitives.
- `next-themes` through the existing color-mode setup.
- Existing CSS/Tailwind tooling for styles already used by the project.
- Browser History, hash, focus, and storage APIs through existing guarded helpers.

Any discovered need for a new runtime package must return to the NFR approval gate rather than being added during implementation.

## Decision Traceability

| Decision | NFR Requirements |
|---|---|
| Static Vite/GitHub Pages | ATR1-NFR-SCAL-01, SCAL-02, SEC-01 |
| No runtime dependency | ATR1-NFR-PERF-01, PERF-04 |
| Chakra dialog | ATR1-NFR-A11Y-01 through A11Y-06 |
| Existing hooks and hash utilities | ATR1-NFR-REL-02 through REL-04, MAINT-02 |
| Pure TypeScript resolvers | ATR1-NFR-SCAL-04, SCAL-05, PERF-03, MAINT-03 |
| Scoped existing styles | ATR1-NFR-RESP-01 through RESP-04, MAINT-05 |
| Existing verification stack | ATR1-NFR-TEST-01 through TEST-06 |
| No telemetry/raw HTML | ATR1-NFR-SEC-02, SEC-05 |

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no diagrams included. |
| ASCII diagrams | Not applicable; no diagrams included. |
| Markdown tables | Valid simple pipe tables. |
| Formula formatting | Bundle comparison formula is inline code. |
| Technology references | Match the current `package.json` and approved application design. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | No full extension rules apply; approved product-level security decisions remain documented. |
| Property-Based Testing | Disabled | Existing example-based testing tools remain the approved verification stack. |
