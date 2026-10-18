# Logical Components - nus-career-talk

All logical components are client-side. No queue, cache service, circuit breaker, database or new cloud resource is required by the approved workload.

| Component | Responsibility and lifetime | Dependencies |
| --- | --- | --- |
| App route coordinator | Current hash, valid remembered return route, browser-event subscription; lives above either experience. | Existing PortfolioApp, lightweight talk route metadata. |
| Talk loading/failure boundary | Independent loading/error UI, user reload and portfolio-return actions; resets on leaving talk. | React lazy/Suspense/error boundary, route callback; must not require failed talk bundle. |
| Talk session controller | Valid mode/slide/area, preserved narrative position and manual pause during mounted talk visit. | Typed content and pure transitions. |
| Focus/keyboard coordinator | Ignore interactive shortcut targets; focus meaningful heading after navigation; remove listeners on exit. | Current mode, transition callbacks, visible heading refs. |
| Motion coordinator | Combine reduced motion, manual pause, visibility and active status; cleanup subscriptions/resources. | matchMedia, visibilitychange, mounted demo. |
| Fullscreen adapter | Capability, ownership, actual active state, handled async actions and status; stop listening on exit. | Talk root, document fullscreen state/events. |
| DemoHost | Mount exactly one selected demo with motion policy; reset local lifetime on area changes. | Complete typed area-to-component mapping. |
| Model functions/fixtures | Deterministic finite computations and validation, no DOM or network side effects. | Bundled graphs, points, catalogue and trusted expressions. |
| Content/coverage layer | Separately editable Vietnamese teaching copy, official names, sources, careers and stable IDs. | Typed records and completeness checks. |
| Scoped visual layer | Readable colour/layout tokens, projection/mobile typography, motion/focus styling and diagrams. | Talk root class, system fonts, CSS/SVG and semantic HTML. |

## Ownership constraints

UI callbacks coordinate session actions, never directly mutate history from demos. Static data does not import React rendering. Headers must not import content/demo bundles. Preference persistence remains in existing portfolio/provider code. Demo computations do not fetch external content, collect responses or execute arbitrary input.

## Lifecycle sequence

Open talk: route coordinator selects the lazy entry; loading/failure boundary is available immediately. On mount, initialise session and scoped browser hooks. Render one scene or exploration detail and at most one demo. On internal navigation, preserve session context and unmount obsolete local demo state. On pause/visibility changes, stop continuous motion without dropping results. On route exit, cleanup browser/animation work and remount portfolio at the valid destination.

## Deferred stage and verification

Infrastructure Design stays skipped under the approved execution plan. After NFR Design approval, Code Generation Part 1 will produce the concrete file/implementation checklist, followed by its required approval before application edits. No components described here have been implemented or tested yet.

## Extension compliance

Security Baseline and PBT: N/A, disabled by explicit choices; full rules skipped. No enabled extension has a blocking finding.
