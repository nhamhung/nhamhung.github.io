# NFR Design Patterns - nus-career-talk

Status: approved by explicit “approve and continue” on 2026-10-18; these patterns are not yet implemented or tested.

## Route isolation and progressive loading - Q07, Q09, Q11, Q13

Keep lightweight route constants outside the talk feature. App selects a lazy TalkPage above PortfolioApp so portfolio layout/scroll hooks are unmounted during the talk. Headers import only the route constant. Bundle demo rendering/content behind the lazy entry; every demo can ship in the talk chunk because the approved datasets/scenes are small, but only the selected demo is mounted. A loading fallback has Vietnamese status text and a portfolio return action.

Subscribe to hashchange and popstate with symmetrical cleanup. The route boundary remembers valid section/journal return destinations; direct entries default to #home. Avoid duplicate history entries when the requested hash already matches. Keep existing preferences/provider ownership; no talk state is written to their keys.

## Fault containment and fullscreen fallback - Q09–Q11

Wrap the lazy talk subtree in a small render-error boundary inside the route boundary, with Suspense for loading. Its fallback is independent of talk imports/styles so a rejected chunk can still show Vietnamese text, a browser reload action and a normal portfolio-return action. Reload is user-initiated; do not promise that resetting the same rejected lazy promise retries the chunk. Returning to the portfolio remains available even when the talk cannot render. Reset error state when leaving the talk.

Fullscreen uses the mounted talk root, checks capability and catches request/exit rejection. Listen for fullscreenchange to derive state from the actual fullscreen element. If unsupported, hide or disable the fullscreen control with a readable explanation; normal presentation stays available. Status messages do not replace scene content. Native Escape remains untouched. Exit fullscreen only if the talk owns it when navigating away; handle rejection without blocking route exit.

## Focus and keyboard ownership - Q01–Q02, Q09, Q13

Use native buttons, links, select and range inputs with Vietnamese labels. Presentation shortcuts run only in presentation mode and ignore defaultPrevented events, modifiers, composition and interactive/editable targets (including contenteditable and ARIA widgets using arrow keys). Do not capture Escape. Semantic control activation must not also advance a slide.

Focus a visible scene/detail heading with tabindex -1 after a slide, mode or selected-area transition. Do not move focus when an input changes or a demo frame advances. Headings and controls stay in document order. Unmounted controls cannot retain focus; choose a destination on each view switch. Add visible focus outlines and a skip-to-content action where the toolbar otherwise adds repetitive navigation.

Scope `lang=vi` to the talk root and use English language spans where useful for official names. Use semantic text adjacent to diagrams; purely decorative fragments are hidden from assistive technology. Use polite status for completed demo results and fullscreen fallback, never per-frame announcements.

## Motion and lifecycle policy - Q04, Q07–Q08

Compute continuous-motion permission from all of: no system reduced-motion preference, no manual pause, document visible, selected demo active. CSS animations/transitions use scoped pause/reduced-motion rules; JavaScript animation frames/timers are started only while permitted and cancelled on preference, visibility, selected topic or unmount changes. Every subscription removes itself during cleanup, including StrictMode's setup/cleanup cycles.

Prefer finite state changes and CSS interpolation over always-running loops for these small scenes. Explicit Run/Step may compute a final/next state immediately under reduced motion, preserving the educational result. Pausing never clears inputs/results. Remounting a different demo resets only its local state. Paused presentation remains visually appealing through colour, geometry and hierarchy rather than required movement.

## Visual readability and responsiveness - Q02–Q06

Use a talk-root class and scoped variables for a deep navy canvas, bright text and field-specific accents. Keep a system font fallback supporting Vietnamese. Contrast checks use actual foreground/background pairs, including disabled/status/focus states. Do not rely on translucent glows behind essential text. Add textual field names, legends and result labels so accents are supplementary.

Presentation layouts allow vertical scrolling rather than enforcing an unscrollable viewport. At projection size, target 24px main teaching body; use concise copy and separate deeper exploration detail. Exploration body is at least 16px on phone layouts. Flexible grids collapse on small screens; controls wrap and avoid overflow. Target 44px control hit areas. SVGs use viewBox scaling plus adjacent text, keeping labels legible. Inspect 360px, 1280×720 and 1440×900, plus 200% zoom; decorative geometry may crop but essential text/controls may not.

## Bounded models and content contracts - Q08, Q12, Q14–Q15

Use pure deterministic model functions or trusted finite fixtures for calculations, separate from JSX. Validate finite input choices and ranges; reset/invalid-input rules follow Functional Design. Never execute expression text as code. Index/search/parallel model counts are computed from the actual local algorithm or stated fixture, not invented runtime benchmarks.

Keep typed content/IDs separate from demo components. A complete area-to-demo mapping prevents missing cases. Content checks verify all eleven entries, source references and career descriptions. Source verification dates must reflect actual official-page inspection. Learner-facing copy distinguishes the weak security encoding, nearest-neighbour toy, colour similarity, ideal worker model and limited test coverage from production claims.

## Verification mapping

| Criteria | Primary evidence after implementation |
| --- | --- |
| Q01–Q02 | Keyboard, focus, semantic/lang and result-status behaviour checks. |
| Q03 | Defined colour-pair contrast calculations and visual inspection. |
| Q04 | Reduced-motion, pause, hidden-tab and cleanup checks. |
| Q05–Q06 | Representative viewport/zoom review and timed narrative rehearsal. |
| Q07 | Production import/chunk review and one-active-demo lifecycle checks. |
| Q08 | Bounded model tests; record browser/environment performance observation if tooling permits. |
| Q09 | Direct hash/history/return and portfolio preference regressions. |
| Q10 | Loading/error and fullscreen absence/rejection/external-exit tests. |
| Q11 | Network-dependency review; loaded-page offline check when browser tools permit. |
| Q12 | Type/content coverage for eleven IDs, scenes, sources and career records. |
| Q13 | Scoped-style/listener review and existing portfolio tests. |
| Q14 | Model edge cases and meaningful UI action/result/reset checks for M01–M11. |
| Q15 | Official-source and Vietnamese editorial review with actual verification dates. |

No runtime evidence is claimed at this stage. Browser/tool limits must be stated rather than replaced by invented pass results.

## Extension compliance

Security Baseline and PBT: N/A; explicitly disabled in state. Full extension rules skipped. No enabled blocking findings. Functional, accessibility and regression checks remain required.
