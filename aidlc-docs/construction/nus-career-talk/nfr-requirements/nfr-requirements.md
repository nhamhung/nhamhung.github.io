# NFR Requirements - nus-career-talk

Status: approved by explicit “continue” response on 2026-10-18. These are acceptance criteria, not completed verification results.

## Quality criteria

| ID | Requirement and acceptance | Verification |
| --- | --- | --- |
| Q01 / NFR1 | All talk actions work with keyboard; controls have meaningful accessible names and visible focus; no keyboard trap. Arrow shortcuts do not override editable/control input keys, modifiers or already-handled events. | Keyboard walkthrough plus targeted interaction tests. |
| Q02 / NFR1 | Talk content has Vietnamese language metadata and semantic headings/controls; teaching visuals have equivalent text. Results/errors are announced where useful without live-announcing every animation frame. No essential information relies only on colour. | DOM/semantic review and manual assistive-technology-oriented inspection where available. |
| Q03 / NFR1–NFR2 | Normal text contrast at least 4.5:1; large text and essential control/diagram boundaries at least 3:1. Text, labels and focus indicators remain distinguishable over actual surfaces. | Contrast calculation for defined foreground/background pairs and visual inspection. |
| Q04 / NFR1–NFR3 | System reduced motion or manual pause stops continuous teaching/decorative movement. Explicit stepping and final results remain usable; inactive/unmounted demos and hidden-tab animations do not keep running. | Reduced-motion/pause walkthrough and lifecycle checks. |
| Q05 / NFR2 | Essential content/controls remain reachable at 360px mobile width, 1280×720 projection and 1440×900 desktop, and at 200% browser zoom. Allow vertical scrolling instead of clipping. Projection slide body text targets at least 24 CSS px; mobile exploration body at least 16 CSS px. | Representative viewport/zoom inspection; document any browser QA limitation. |
| Q06 / NFR2 | Prefer control hit areas at least 44×44 CSS px and legible labels; dense focus-area navigation may wrap rather than truncate essential names. Ten-scene live narrative remains concise. | Layout/interaction review and timed rehearsal. |
| Q07 / NFR3 | Only one selected demo is mounted/active at a time. No demo timers, animation frames or talk listeners survive leaving the talk. The full talk code is not eagerly imported by either portfolio header. | Component/lifecycle checks and production import/chunk inspection. |
| Q08 / NFR3 | Bounded local demo inputs produce prompt feedback without network waits. On a stated test machine/browser, changing an input or running a demo should show its immediate state/result within 100ms excluding intentionally staged animation. Avoid long continuous main-thread work; record environment and observations rather than claiming universal speed. | Development performance observation or browser trace if available; investigate visible lag. Automated timing is not a brittle unit-test assertion. |
| Q09 / NFR4 | Direct load, refresh, back/forward and return work with the exact talk hash and repository base path. Existing section/journal routes, template choice, layout and colour persistence remain valid, including browser-storage failure handling already present. | Route/integration tests and production build. |
| Q10 / NFR4 | Unsupported/rejected fullscreen preserves a usable normal view; external fullscreen exit updates controls. Lazy loading has readable progress; chunk/render failure offers a readable retry/reload or portfolio return. | Browser API mocks and manual fallback checks. |
| Q11 / NFR4 | Loaded core content and all demos use bundled local data and need no live API, remote video or network font for comprehension. No offline-install or initial-load-offline guarantee is required. | Network-dependency/source review and loaded-page offline check when browser tools permit. |
| Q12 / NFR5 | Vietnamese content, stable field/slide IDs and source metadata are separate from rendering. Exactly eleven IDs resolve to complete content and demo definitions, with no duplicate IDs or dangling references. | TypeScript/content validation and coverage checks. |
| Q13 / NFR5 | Talk styles/events stay scoped; no new portfolio template or SectionId is added. Component ownership matches approved design. | Code review and existing portfolio regressions. |
| Q14 / NFR4–NFR5 | Each M01–M11 implements its documented deterministic result, input invalidation and reset rules. Invalid finite-option payloads do not produce missing content or NaN results. Current inputs, computed result and explanation agree. | Focused meaningful algorithm/state tests and demo walkthrough. |
| Q15 / FR1–FR4 | Final NUS programme/focus claims have official references and actual verification dates. Illustrative career roles and model assumptions are clearly distinguished from university or measured employment claims. | Editorial/source review before completion. |

The contrast and layout thresholds are selected design targets. This document does not claim a complete accessibility certification. Browser support targets current desktop Chromium, Firefox and Safari and mobile Safari/Chrome through standard APIs; fullscreen is optional and must degrade gracefully. Cross-browser checks should report exactly what was tested.

## Scalability and availability

This remains a static site: visitors do not share runtime application state or require a new server capacity tier. No concurrency/load number, global uptime guarantee or custom recovery-time objective was requested. GitHub Pages retains hosting responsibility. Do not create a synthetic backend load-test requirement; verify static production output, bounded local computation and deployment-path compatibility instead.

## Security and privacy boundaries

The optional Security Baseline is disabled, but approved behaviour still excludes student accounts, collection/tracking, runtime secrets, live inference and arbitrary code execution. The expression demo uses trusted fixed examples; message encoding uses a visibly labelled toy value, never real secrets. No additional consent flow or authentication layer is needed for this scope.

## Maintainability and verification exit

Run relevant model/interaction tests, existing regressions and production TypeScript/Vite build after implementation. Document manual visual/content checks, browser/environment coverage and unresolved verification limits. No checks are represented as passed at this stage. Address failures affecting approved acceptance before marking implementation complete. Do not add dependencies merely to meet the form of a test.

## Extension compliance

Security Baseline: N/A, explicitly disabled (Q7 B). Property-Based Testing: N/A, explicitly disabled (Q8 C). Full rule files skipped. No enabled extension has a blocking finding. Ordinary accessibility, correctness and regression checks remain required.
