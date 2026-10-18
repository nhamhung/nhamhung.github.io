# NUS Career Talk - Code Generation Summary

Status: generated code approved by explicit response on 2026-10-18; formal Build and Test results are in `../../build-and-test/nus-career-talk/build-and-test-summary.md`.

## Result

The existing website now has a dedicated `#/talks/nus-cs` page and discoverable links in both Engineering and Business desktop/mobile navigation. A Vietnamese nine-scene presentation covers CS/Computer Engineering, NUS CS, the eleven focus areas, three live examples, career connections and an inspiring practical closing. Exploration exposes every field with a distinct working demo, applications, interests and English-titled careers explained in Vietnamese.

Keyboard controls, previous/next bounds, topic-preserving view switching, fullscreen/fallback, motion pause/reduced motion, local data, reset behaviour, official references and portfolio return are implemented. Source verification is documented in `content-sources.md`. Programme claims use official NUS sources checked 2026-10-18; career maps and toy demonstrations are educational illustrations.

## Created and modified files

- Created `src/features/nus-talk/`: typed content, nine-slide narrative, deterministic models, browser hooks, presentation/exploration views, scoped CSS and eleven demo components plus shared demo primitives/host. There are 28 feature files including five focused test files.
- Created `src/utils/talkRoute.ts` and its test: exact talk route, safe return validation and hash navigation.
- Created `src/components/TalkRouteBoundary.tsx`: independent render/chunk failure recovery.
- Created `src/TalkRoute.test.tsx`: direct-route/history, both header entries and error-boundary integration.
- Modified `src/App.tsx`: lazy App-level talk entry while preserving exported PortfolioApp and existing template/preferences.
- Modified `src/components/Navbar.tsx` and `src/templates/business/BusinessShell.tsx`: desktop/mobile talk links with drawer close behaviour.
- Modified `src/App.test.tsx`: corrected the colour-mode test to verify the actual selected mode survives style changes, rather than assume every toggle selects dark despite the configured dark default. The original assertion also failed in isolation. No theme implementation was changed.
- Updated AI-DLC state, plans, index and append-only audit. Dependencies, lockfile and GitHub Pages workflow remain unchanged.

## Story and demonstration coverage

US01–US09 are implemented. M01–M11 each has a meaningful action/result/reset interaction and automated coverage. Route and source/content completeness are checked. Core story coverage includes the CS/CE overlap, all eleven focus names, featured algorithms/AI/graphics and a school-problem sketch challenge. The handoff from presentation to exploration preserves the current slide and featured topic; exploration selection cannot fabricate a new presentation slide.

## Verification evidence

- Focused initial tests: 23 passing across seven files.
- Complete final regression suite: 114 passing tests across 16 files.
- After the final mobile-label/layout refinement: affected TalkPage tests passed (2 tests); production TypeScript/Vite build passed again.
- `git diff --check` passed.
- Production code splitting: separate talk JavaScript approximately 42.74 kB (13.98 kB gzip), CSS 9.37 kB (2.66 kB gzip). Existing main portfolio bundle remains large and emits Vite's pre-existing chunk-size warning; this feature does not eagerly import the talk through header links.
- Runtime: temporary official Node v22.14.0 on macOS ARM64; locked dependencies installed with npm ci. The environment originally had no npm/node on PATH.
- Headless Chrome 155.0.8059.80: desktop 1440×900, projection 1280×720, all nine scenes and all eleven exploration topics at 360px width had no horizontal document overflow. Inspected generated screenshots and refined mobile navigation into a compact field selector. The final capture confirms root and toolbar top positions at zero.
- Browser keyboard ArrowRight moved to the comparison scene; fullscreen activated; emulated reduced motion set motion permission false. Unsupported/rejected fullscreen and event cleanup have automated coverage.
- Colour pairs checked: primary text/background 17.44:1, supporting text/panel 9.29:1, dark text/mint action 12.50:1, focus yellow/panel 11.41:1, source-link/background 12.49:1. These are selected defined pairs, not a full accessibility certification.
- One local Chrome route-run update to two animation frames took approximately 33.1 ms. This is a single environment observation, not a universal latency guarantee.
- Chrome captures/reports are temporary under `/private/tmp/nus-talk-*`; no screenshot binaries or test scripts were added to the application.

## Verification limits

Safari, Firefox, real mobile devices, assistive-technology testing and an actual 200% browser-zoom walkthrough have not been performed. An effective 640×360 reflow viewport was checked without horizontal overflow; this is not a claim of actual browser zoom testing. No load SLA or universal response benchmark is claimed. Some teaching scenes scroll vertically, as allowed by the approved readability requirement; essential controls/content are reachable rather than clipped.

The nine-scene script has an editorial 10–15 minute target (roughly twelve minutes across opening, comparison, overview, three demos, careers and closing). A live timed speaker rehearsal remains necessary. Official external links need connectivity when opened; loaded demos do not call APIs. No offline installation guarantee is made.

## Local preview and use

With Node/npm available, run `npm ci` if dependencies are absent and `npm run dev`, then open the Vite Local URL with `#/talks/nus-cs` appended. This session used a temporary runtime at `/private/tmp/node-v22.14.0-darwin-arm64/bin` because no system runtime was available. The temporary QA browser and server are stopped at handoff.

Use next/previous or arrow keys outside input controls. Switch to exploration from the toolbar or field map; phone exploration uses the field selector. Reset a demo with “Làm lại”. Sources are in the expandable source section. No code has been committed, pushed or published by this task.

## Next gate and extension compliance

Review generated code using `review-questions.md`: Request Changes or Continue to Next Stage (formal Build and Test). That stage will create the required build/test instruction artifacts; it has not been marked complete here.

Security Baseline and PBT: N/A, explicitly disabled; full extension rules skipped. No enabled extension has a blocking finding. Ordinary correctness/accessibility/regression criteria remain in effect.
