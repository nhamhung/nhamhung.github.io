# NFR Requirements - ATR-U1 Template Shell and Configuration Foundation

## Purpose

Define measurable quality requirements for the typed template boundary, template shells, artistic visual index, shared route integration, and artistic presentation resolver.

## Approved NFR Decisions

| Area | Approved Answer | Requirement Impact |
|---|---|---|
| Deployment load | A | Keep one static Vite/GitHub Pages deployment; hosting owns visitor traffic capacity. |
| Content capacity | A | Support ten stable sections and student-scale collections of up to approximately 100 projects and 100 gallery items without virtualization. |
| Performance | A | Add no runtime dependency and review any ATR-U1 JavaScript gzip growth above 15 percent. |
| Accessibility | A | Target practical WCAG 2.1 AA behavior with semantic, keyboard, focus, state, and contrast verification. |
| Compatibility | A | Support current evergreen desktop browsers and current mobile Safari/Chrome at representative widths. |
| Reliability | A | Preserve a usable portfolio through deterministic template, route, storage, journal, and metadata fallbacks. |
| Security and privacy | A | Keep static and unauthenticated, add no analytics or raw HTML, and restrict configuration to typed values. |
| Technology stack | A | Reuse React, TypeScript, Chakra UI, existing hooks, CSS, and browser APIs with no new runtime package. |
| Verification | A | Use existing automated checks plus manual desktop/mobile keyboard checks. |
| Maintainability | A | Keep contracts and resolvers focused, preserve engineering isolation, and add no production telemetry. |

## Scalability and Capacity

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| ATR1-NFR-SCAL-01 | ATR-U1 must remain a single statically built client application. | Production output consists only of static assets; no application server, database, queue, autoscaling policy, or runtime content service is introduced. |
| ATR1-NFR-SCAL-02 | Visitor traffic capacity must remain the responsibility of GitHub Pages static delivery. | No application-managed traffic scaling or load-test infrastructure is added for ATR-U1. |
| ATR1-NFR-SCAL-03 | Shell navigation must support the fixed ten-member `SectionId` map without alternate route indexes. | Every section remains present in the typed component and chapter-label maps; enabled sections render in configured order. |
| ATR1-NFR-SCAL-04 | Presentation resolution must support up to approximately 100 projects and 100 gallery items without a separate optimization layer. | Resolver tests with representative 100-item collections complete synchronously and produce correct ordered, deduplicated output without virtualization or network access. |
| ATR1-NFR-SCAL-05 | Featured-project and gallery treatment resolution must scale linearly with input and configured references. | Implementation uses bounded passes and lookup structures; it contains no nested full-collection scan for every configured item. |

## Performance

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| ATR1-NFR-PERF-01 | ATR-U1 must add no runtime package. | `package.json` runtime dependencies are unchanged by ATR-U1. |
| ATR1-NFR-PERF-02 | Opening, closing, chapter selection, and layout-toggle actions in the visual index must have no intentional delay. | Event handlers update local state or invoke shared callbacks in the activating interaction; destination focus may wait only for the next content render. |
| ATR1-NFR-PERF-03 | Pure presentation resolvers must not trigger React state updates, browser reads, or network work. | Resolver unit tests call functions directly with deterministic synchronous results. |
| ATR1-NFR-PERF-04 | ATR-U1 production JavaScript gzip growth above 15 percent requires written review and justification. | Record the pre-unit Vite JavaScript gzip total, compare it with the completed ATR-U1 build, and document the cause if `(new - baseline) / baseline` exceeds `0.15`. |
| ATR1-NFR-PERF-05 | Multi-page mode must not render hidden section component trees. | App tests show one routed section in multi-page mode and all enabled sections only in single-page mode. |
| ATR1-NFR-PERF-06 | Shell integration must not add continuous timers, polling, or layout-measurement loops. | Code inspection and tests show event-driven state, existing passive active-section tracking, and no shell polling. |

## Accessibility and Usability

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| ATR1-NFR-A11Y-01 | The visual index must expose an accessible modal dialog with a programmatic name. | Rendered output has dialog semantics, a title/label relationship, modal behavior, and no unlabeled icon-only commands. |
| ATR1-NFR-A11Y-02 | Every visual-index destination and control must be keyboard reachable and operable. | Tab/Shift+Tab reaches all enabled destinations and theme/layout/close controls; Enter or Space activates applicable controls. |
| ATR1-NFR-A11Y-03 | Focus must remain contained while the visual index is open. | Manual and component checks show focus cannot move to content behind the dialog. |
| ATR1-NFR-A11Y-04 | Non-navigation dismissal must restore focus to the index trigger. | Escape, close action, and supported backdrop dismissal close the index and focus the trigger. |
| ATR1-NFR-A11Y-05 | Keyboard chapter selection must move reading context to the destination. | After navigation, the destination chapter heading receives focus; if unavailable, the artistic main landmark receives focus. |
| ATR1-NFR-A11Y-06 | Layout changes from the index must focus the new main content context. | After switching layout and closing the index, focus is on the artistic main landmark or current chapter heading. |
| ATR1-NFR-A11Y-07 | Current chapter state must not rely on color alone. | The active destination exposes `aria-current` or equivalent and includes a text, icon, weight, underline, or shape cue in addition to color. |
| ATR1-NFR-A11Y-08 | Interactive focus indicators must be visible in both color modes. | Manual checks confirm keyboard focus is not clipped or hidden and meets WCAG 2.1 AA non-text contrast expectations where applicable. |
| ATR1-NFR-A11Y-09 | Text, controls, overlays, and state indicators must meet WCAG 2.1 AA contrast targets. | Normal text is at least 4.5:1, large text at least 3:1, and meaningful control/state boundaries at least 3:1 against adjacent colors. |
| ATR1-NFR-A11Y-10 | Programmatically focused headings and main landmarks must not enter the normal tab order. | Focus targets use semantic structure and `tabIndex={-1}` only where programmatic focus is required. |
| ATR1-NFR-A11Y-11 | Accessibility claims must remain evidence-based. | Release notes may state WCAG-aligned implementation and checks but must not claim formal certification without an independent audit. |

## Responsive Design and Browser Compatibility

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| ATR1-NFR-RESP-01 | The artistic header, visual index, controls, and main landmark must remain usable around 320, 768, 1024, and 1440 CSS pixels. | Manual viewport checks show no overlapping controls, clipped labels, inaccessible actions, or unintended page-level horizontal overflow. |
| ATR1-NFR-RESP-02 | Index destinations and controls must fit mobile widths without shrinking text below readable UI sizing. | At 320 CSS pixels, labels wrap when needed and controls remain operable without text occlusion. |
| ATR1-NFR-RESP-03 | Touch controls should provide at least 44 by 44 CSS pixel targets where practical. | Index trigger, close, theme, layout, and chapter actions meet the target or document a layout-constrained equivalent with adequate spacing. |
| ATR1-NFR-RESP-04 | Header and main spacing must remain stable in single-page and multi-page layouts. | Neither mode places content beneath the fixed artistic header, and switching mode does not leave engineering-specific spacing. |
| ATR1-NFR-COMPAT-01 | ATR-U1 must support current evergreen Chrome, Firefox, Safari, and Edge. | Implementation uses APIs supported by current releases or existing framework abstractions; manual smoke checks cover available representative browsers. |
| ATR1-NFR-COMPAT-02 | ATR-U1 must support current mobile Safari and mobile Chrome behavior. | Touch, viewport, visual-index scrolling, and focus behavior receive mobile manual checks. |
| ATR1-NFR-COMPAT-03 | Browser API failures must degrade without a blank page. | Existing guarded storage behavior remains; missing focus target falls back to the main landmark; route fallback remains deterministic. |

## Availability and Reliability

ATR-U1 has no application-owned uptime SLA, failover system, or disaster-recovery service. GitHub Pages is the runtime availability boundary. Reliability within the client is release-blocking.

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| ATR1-NFR-REL-01 | Unknown runtime template IDs must resolve to engineering. | Registry tests pass an unmatched value and receive the complete engineering definition. |
| ATR1-NFR-REL-02 | Invalid section hashes must render the first enabled section. | App/layout tests cover malformed, unknown, and disabled section values without throwing or rendering blank content. |
| ATR1-NFR-REL-03 | Unknown local journal slugs must retain the journal context and render a template-specific not-found view. | App passes the slug to the selected journal component, active shell context is `journal`, and a return action is available. |
| ATR1-NFR-REL-04 | Layout storage read or write failure must not prevent navigation or rendering. | Tests simulate throwing or unavailable storage; in-memory/default layout behavior remains usable. |
| ATR1-NFR-REL-05 | Invalid optional artistic metadata must resolve to complete values. | Resolver tests cover blank text, unknown/duplicate project IDs, unknown gallery IDs/treatments, and unsupported accents. |
| ATR1-NFR-REL-06 | A partial template contract must be rejected before release. | TypeScript or registry contract tests fail when shell, journal, label, or section capabilities are missing. |
| ATR1-NFR-REL-07 | Engineering behavior must remain available after shell extraction. | Engineering regression tests cover Navbar composition, layout attributes, section rendering, and journal routing. |
| ATR1-NFR-REL-08 | Test, type, lint, or production build failure must block ATR-U1 completion. | `npm test`, TypeScript build checking, `npm run lint`, and `npm run build` all exit successfully before the unit exit gate. |

## Security and Privacy

The optional Security Baseline extension is disabled. The following product requirements still define ATR-U1's approved static security and privacy boundary.

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| ATR1-NFR-SEC-01 | ATR-U1 must remain unauthenticated and backend-free. | No accounts, credentials, API secrets, server storage, or authorization logic is added. |
| ATR1-NFR-SEC-02 | ATR-U1 must add no analytics, tracking identifiers, or production telemetry. | No event data leaves the visitor's browser and no monitoring SDK is introduced. |
| ATR1-NFR-SEC-03 | Browser persistence must remain limited to the existing layout mode value. | No profile, route history, journal content, artistic settings, or personal visitor data is stored. |
| ATR1-NFR-SEC-04 | Student artistic settings must use closed typed tokens for style-sensitive values. | Accent and gallery treatment inputs are unions resolved to known tokens; arbitrary strings are not written directly to style properties. |
| ATR1-NFR-SEC-05 | ATR-U1 must not render student-configured raw HTML. | Creative statements and labels render as React text content; no `dangerouslySetInnerHTML` is introduced. |
| ATR1-NFR-SEC-06 | Runtime presentation resolution must not fetch remote content. | Resolver and shell tests require no network mocks or requests. Existing explicit external links remain ordinary user-activated destinations. |

## Maintainability and Isolation

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| ATR1-NFR-MAINT-01 | Template-specific capabilities must be expressed in one typed `PortfolioTemplate` contract. | App consumes shell, journal, chapter-label, and section capabilities through the selected definition. |
| ATR1-NFR-MAINT-02 | Browser and layout state must remain owned by App and shared hooks. | Shells receive values and callbacks; they do not parse hashes or read/write layout storage. |
| ATR1-NFR-MAINT-03 | Artistic fallback logic must be centralized in pure resolver functions. | Artistic components consume complete resolved output and do not duplicate fallback chains. |
| ATR1-NFR-MAINT-04 | Engineering code must remain isolated from artistic configuration and components. | Import-boundary inspection shows no engineering module imports from artistic modules or `src/data/artistic.ts`. |
| ATR1-NFR-MAINT-05 | Artistic styling must be scoped to the artistic template boundary. | Engineering rendering tests do not receive artistic classes or changed visual state attributes. |
| ATR1-NFR-MAINT-06 | New modules and public contracts must use clear domain names and concise comments only where behavior is non-obvious. | Review confirms file and symbol names match the approved component/resolver design and avoid duplicated orchestration. |
| ATR1-NFR-MAINT-07 | Development failures must identify the invalid contract or data invariant. | Tests name missing template capabilities, duplicate project IDs, and fallback scenarios explicitly. |

## Testability and Release Verification

| ID | Requirement | Acceptance Criteria |
|---|---|---|
| ATR1-NFR-TEST-01 | Template registry tests must cover complete contracts and runtime fallback. | Both known templates and one unknown ID scenario pass. |
| ATR1-NFR-TEST-02 | Resolver tests must cover explicit, partial, absent, blank, unknown, and duplicate inputs. | Expected statement, project order, gallery treatments, and accent are asserted without mutating inputs. |
| ATR1-NFR-TEST-03 | Visual-index tests must cover open, close, Escape, enabled destinations, current state, keyboard selection, pointer selection, layout toggle, and focus. | React Testing Library assertions cover callbacks, state, accessible queries, and focus destinations. |
| ATR1-NFR-TEST-04 | App tests must cover both shells, both layouts, valid/invalid section hashes, valid/unknown journal slugs, and active chapter context. | All route and composition scenarios render expected content without uncaught errors. |
| ATR1-NFR-TEST-05 | Manual verification must cover desktop and mobile keyboard behavior. | A release checklist records representative 320, 768, 1024, and 1440 CSS pixel checks, visual-index focus containment, dismissal, and destination focus. |
| ATR1-NFR-TEST-06 | ATR-U1 must use the existing local verification stack. | Tests use Vitest, JSDOM, and React Testing Library; no new end-to-end framework is required for this unit. |

## Base Requirement Traceability

| Base Requirement | ATR-U1 Requirements |
|---|---|
| NFR-01 | ATR1-NFR-A11Y-02, A11Y-05 through A11Y-10, TEST-03 |
| NFR-02 | ATR1-NFR-A11Y-01, A11Y-03 through A11Y-06 |
| NFR-10 | ATR1-NFR-SCAL-01, SCAL-02, SEC-01 |
| NFR-13 | ATR1-NFR-PERF-01 and approved technology stack |
| NFR-15 | ATR1-NFR-MAINT-01 through MAINT-03 |
| NFR-16 | ATR1-NFR-REL-07, MAINT-04, MAINT-05 |
| NFR-17 | ATR1-NFR-REL-01 through REL-06, TEST-01, TEST-02 |

## Out of Scope

- Backend scaling, uptime SLAs, failover, disaster recovery, and server monitoring.
- Thousands-item catalog optimization or virtualization.
- Formal accessibility certification.
- New analytics, error-reporting, routing, state-management, animation, dialog, or end-to-end testing packages.
- ATR-U2 horizontal rail performance, reduced-motion behavior, and final chapter-media loading requirements.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not applicable; no diagrams included. |
| ASCII diagrams | Not applicable; no diagrams included. |
| Markdown tables | Valid simple pipe tables. |
| Formula formatting | Bundle comparison formula is inline code. |
| Requirement format | Every requirement has an ID and verifiable acceptance criteria. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Full extension rules were not loaded; the approved product boundary is captured under Security and Privacy. |
| Property-Based Testing | Disabled | Focused example-based tests satisfy the approved verification approach. |
