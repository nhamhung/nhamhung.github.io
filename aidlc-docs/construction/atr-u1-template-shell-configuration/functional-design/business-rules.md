# Business Rules - ATR-U1 Template Shell and Configuration Foundation

## Template Contract Rules

| ID | Rule | Traceability |
|---|---|---|
| ATR1-BR-01 | Every registered template must provide `id`, `label`, `description`, `ShellComponent`, `JournalPostComponent`, `chapterLabels`, and `sectionComponents`. | US-01, US-12; FR-01, FR-04; NFR-15 |
| ATR1-BR-02 | `chapterLabels` and `sectionComponents` must each contain every stable `SectionId`. | US-04, US-12; FR-20, FR-21 |
| ATR1-BR-03 | The registry must return the engineering template when a runtime template ID does not match a registered template. | US-01, US-13; FR-01, FR-26; NFR-17 |
| ATR1-BR-04 | App must select presentation behavior through the template contract, not through scattered template-ID conditionals. | US-01, US-13; FR-04; NFR-15, NFR-16 |
| ATR1-BR-05 | EngineeringShell must preserve the existing Navbar props, main spacing, data attributes, section components, and local journal component. | US-13; FR-01; NFR-16 |
| ATR1-BR-06 | Shell components may present shared state and invoke callbacks but must not parse hashes or read/write layout storage directly. | US-12; FR-19 through FR-22; NFR-15 |
| ATR1-BR-07 | The student-selected template remains a build-time typed configuration; no visitor-facing template switcher is added. | US-01; FR-26 |

## Section and Chapter Rules

| ID | Rule | Traceability |
|---|---|---|
| ATR1-BR-08 | Existing section IDs remain the canonical route and DOM identities for both templates. | US-04, US-12; FR-02, FR-20 through FR-22 |
| ATR1-BR-09 | Artistic chapter names are labels mapped over canonical section IDs and must not create alternate route IDs. | US-04; FR-05, FR-20, FR-21 |
| ATR1-BR-10 | Only enabled navigation destinations appear in the artistic visual index. | US-03; FR-06 |
| ATR1-BR-11 | The active chapter is the shared `activeSection` mapped through the selected template's `chapterLabels`. | US-04; FR-05, FR-20, FR-21 |
| ATR1-BR-12 | The current destination must be exposed programmatically and visually without relying only on color. | US-03, US-04; FR-07; NFR-01 |
| ATR1-BR-13 | Single-page mode renders all enabled sections in navigation order; multi-page mode renders only the active routed section. | US-12; FR-19 through FR-21 |
| ATR1-BR-14 | A disabled section cannot become a visual-index destination or active routed section. | US-03, US-12; FR-06, FR-21 |

## Visual Index and Focus Rules

| ID | Rule | Traceability |
|---|---|---|
| ATR1-BR-15 | Opening the visual index must move focus inside an accessible full-screen dialog and prevent focus from moving behind it. | US-03; FR-06, FR-07; NFR-01, NFR-02 |
| ATR1-BR-16 | Escape, backdrop dismissal, and the explicit close action must close the index without changing section or layout. | US-03; FR-07; NFR-02 |
| ATR1-BR-17 | Non-navigation dismissal must return focus to the index trigger. | US-03; FR-07; NFR-02 |
| ATR1-BR-18 | Selecting an enabled chapter must invoke the shared navigation callback and close the index. | US-03; FR-07 |
| ATR1-BR-19 | After keyboard chapter selection, focus must move to the destination chapter heading; if unavailable, it must move to the artistic main landmark. | US-03; FR-07; NFR-01, NFR-02 |
| ATR1-BR-20 | After pointer chapter selection, the browser's natural focus behavior is retained. | US-03; FR-07 |
| ATR1-BR-21 | Changing layout from the index must preserve the current section, close the index, and focus the new main content context. | US-03, US-12; FR-06, FR-19 through FR-21 |
| ATR1-BR-22 | Visual-index theme and layout controls must use their existing application owners and must not duplicate color or layout state. | US-03, US-12; FR-06; NFR-15 |

## Route Rules

| ID | Rule | Traceability |
|---|---|---|
| ATR1-BR-23 | Section and local journal hashes must remain compatible with static GitHub Pages hosting. | US-12; FR-22; NFR-10 |
| ATR1-BR-24 | Valid `#/section` hashes directly select the matching multi-page destination. | US-04, US-12; FR-21, FR-22 |
| ATR1-BR-25 | Valid `#section` hashes retain single-page anchor behavior. | US-04, US-12; FR-20, FR-22 |
| ATR1-BR-26 | Invalid section hashes resolve to the first enabled section and do not render a generic route error. | US-12; FR-22; NFR-17 |
| ATR1-BR-27 | A hash with the local journal prefix must be classified as a journal route before section fallback. | US-12; FR-22, FR-23 |
| ATR1-BR-28 | A known local journal slug renders the selected template's journal component. | US-12; FR-23 |
| ATR1-BR-29 | An unknown local journal slug renders the selected template's not-found view with a return action to Journal. | US-12; FR-23; NFR-17 |
| ATR1-BR-30 | A local journal page exposes `journal` as the shell's active section. | US-04, US-12; FR-05, FR-23 |

## Artistic Configuration Rules

| ID | Rule | Traceability |
|---|---|---|
| ATR1-BR-31 | Artistic presentation settings are optional and must not duplicate or replace core portfolio content. | US-01; FR-02, FR-24 |
| ATR1-BR-32 | Every project must have a unique, non-empty stable ID independent of its title. | US-01; FR-24, FR-25; NFR-17 |
| ATR1-BR-33 | Gallery treatment settings reference the existing unique gallery item IDs. | US-01; FR-24, FR-25 |
| ATR1-BR-34 | A non-empty configured creative statement takes precedence over shared-data fallbacks. | US-01, US-02; FR-24, FR-25 |
| ATR1-BR-35 | A missing or blank creative statement falls back in this order: About introduction, Hero introduction, profile summary, stable template default. | US-01, US-02; FR-25; NFR-17 |
| ATR1-BR-36 | Featured project IDs are evaluated in configured order. | US-01, US-05; FR-24, FR-25 |
| ATR1-BR-37 | Unknown featured project IDs are ignored and repeated IDs retain only their first occurrence. | US-01, US-05; FR-25; NFR-17 |
| ATR1-BR-38 | When featured IDs are absent or resolve to no projects, all projects are returned in shared-data order. | US-01, US-05; FR-25; NFR-17 |
| ATR1-BR-39 | Every gallery item receives either a supported explicit treatment or a deterministic position-based fallback. | US-01, US-06; FR-24, FR-25; NFR-17 |
| ATR1-BR-40 | Accent configuration accepts only supported tokens; missing or unsupported values resolve to the artistic default. | US-01; FR-24, FR-25; NFR-17 |
| ATR1-BR-41 | Presentation resolution must be pure and must not mutate shared project, gallery, profile, hero, or about data. | US-01, US-13; FR-02; NFR-15, NFR-17 |
| ATR1-BR-42 | Artistic components consume resolved presentation values instead of independently implementing fallback rules. | US-01, US-13; FR-25; NFR-15, NFR-17 |

## Static and Isolation Rules

| ID | Rule | Traceability |
|---|---|---|
| ATR1-BR-43 | ATR-U1 must remain frontend-only and must not add a backend, runtime content API, or deployment route rewrite. | US-12, US-13; NFR-10 |
| ATR1-BR-44 | ATR-U1 must not add an animation dependency; shell and index behavior use React, Chakra, CSS, and existing browser APIs. | US-11, US-13; NFR-13 |
| ATR1-BR-45 | Artistic styles and state classes must be scoped under the artistic template boundary. | US-13; FR-01; NFR-16 |
| ATR1-BR-46 | Engineering modules must not import artistic configuration or artistic presentation components. | US-13; FR-01; NFR-16 |

## Validation Rules

| ID | Rule | Validation Evidence |
|---|---|---|
| ATR1-BR-47 | Registry tests must prove every template satisfies the complete contract and an unknown runtime ID falls back to engineering. | Template registry tests. |
| ATR1-BR-48 | Portfolio data tests must prove project IDs are non-empty and unique. | Shared data validation tests. |
| ATR1-BR-49 | Resolver tests must cover complete, partial, absent, unknown, and duplicate artistic configuration. | Presentation resolver unit tests. |
| ATR1-BR-50 | Artistic shell tests must cover index opening, Escape dismissal, current state, chapter selection, layout change, and required focus destinations. | React interaction tests. |
| ATR1-BR-51 | App tests must cover engineering and artistic shell selection, both layout modes, valid section hashes, invalid section hashes, valid journal slugs, and unknown journal slugs. | App integration tests. |
| ATR1-BR-52 | TypeScript, lint, existing tests, and production build must pass before ATR-U1 exits. | Unit exit gate and Build/Test evidence. |

## Rule Precedence

1. Stable route and shared-data compatibility rules take precedence over artistic presentation choices.
2. Explicit valid student configuration takes precedence over fallback values.
3. Accessibility and focus rules take precedence over decorative transition behavior.
4. Engineering behavior preservation takes precedence over shared visual refactoring.
5. When no rule resolves a presentation value, the documented deterministic default applies.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Disabled during Requirements Analysis; no security extension constraints apply. |
| Property-Based Testing | Disabled | Disabled during Requirements Analysis; standard example-based validation remains required. |
