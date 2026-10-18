# NUS Career Talk - Code Generation Plan

Status: all twelve generation steps complete; generated-code review pending.

This document is the single source of truth for generation of the `nus-career-talk` unit. Execute numbered steps in sequence and update each checkbox immediately on completion. Modify existing files in place; create only files that do not exist. Application code belongs under the workspace source tree, never under aidlc-docs.

## Unit context and readiness

Workspace: `/Users/nhamquochung/nhamhung.github.io`. Brownfield, one React/TypeScript/Vite application deployed statically on GitHub Pages. Requirements, US01–US09, personas, M01–M11, Application Design, Functional Design and Q01–Q15/NFR Design are approved. Separate Units Generation and Infrastructure Design are intentionally skipped. No other unit, backend, external API or database dependency exists.

Contracts: exact `#/talks/nus-cs` route; existing PortfolioApp preserved; App-level lazy talk entry and failure/loading fallback; typed Vietnamese content with eleven stable area IDs; nine narrative scenes; shared in-memory talk mode/slide/topic state; local deterministic demo state; scoped browser hooks and styles. Existing template/layout/colour preferences retain their current ownership.

Before each step, load its relevant approved artifacts. Before any new file, validate content/code syntax and escaping; validate SVG/diagram structures where applicable. Check nested AGENTS.md instructions if encountered. Dependencies are retained; do not install/upgrade packages unless a demonstrated implementation need requires it.

## Part 1 preparation

- [x] Load Code Generation rules, unit scope, stage state and existing package scripts.
- [x] Identify source paths, sequence, contracts and story coverage below.
- [x] Prepare and log whole-plan approval prompt.
- [x] Receive explicit approval covering all twelve generation steps.

## Part 2 numbered generation steps

### Step 1 - Verify sources and create typed teaching content

- [x] Recheck official NUS undergraduate CS, Computer Engineering and focus-area pages; record actual source verification dates and cohort caveats. Create `src/features/nus-talk/types.ts` and `src/features/nus-talk/content.ts` with nine narrative scenes, comparison, eleven complete area records, interests, applications, at least two English-titled/Vietnamese-explained careers per area, sources and closing challenge. Create `src/features/nus-talk/content.test.ts` to verify required entries, references and coverage. Document findings in `aidlc-docs/construction/nus-career-talk/code/content-sources.md`. Coverage: US03, US04, US09, FR1–FR4/FR7, Q12/Q15.

### Step 2 - Implement deterministic models and session transitions

- [x] Create `src/features/nus-talk/models.ts` with bounded computations/fixtures for M01–M11, validation and session transitions, and `src/features/nus-talk/models.test.ts` with meaningful known-result, boundary/reset and invalidation coverage. Follow the approved functional model (Dijkstra, nearest neighbour, diffuse shading, toy XOR, scan/index, HCI task, colour similarity, BFS, worker scheduling, fixed expression steps and test/release states). No dynamic code evaluation. Coverage: US02, US05–US07, M01–M11, Q14.

### Step 3 - Create shared visual and interaction primitives

- [x] Create `src/features/nus-talk/demos/DemoFrame.tsx` and `src/features/nus-talk/demos/Diagram.tsx` for labelled controls/results, reset support and reusable accessible SVG geometry. Create the initial scoped `src/features/nus-talk/talk.css` with dark navy surfaces, field accents, readable type, focus states and reduced-motion rules. Decorative imagery is code-native; no bitmap generation is required. Coverage: US05, US06, US08, Q01–Q06/Q13.

### Step 4 - Build the three featured demos

- [x] Create `src/features/nus-talk/demos/AlgorithmsDemo.tsx`, `AIDemo.tsx` and `GraphicsDemo.tsx` with meaningful local input/output/reset interactions and diagrams. Algorithms highlights a computed path/cost; AI displays toy classified points; Graphics changes scene lighting from the bounded model. Include text equivalents and assumptions. Coverage: US05, US06, M01–M03.

### Step 5 - Build security, database, HCI and retrieval demos

- [x] Create `src/features/nus-talk/demos/SecurityDemo.tsx`, `DatabaseDemo.tsx`, `HCIDemo.tsx` and `RetrievalDemo.tsx`. Show sent/received toy encoding, actual lookup steps, an operable timetable task with observed action count, and ranked colour-feature matches. Include reset and stale-result clearing as designed. Coverage: US06, M04–M07.

### Step 6 - Build networking, parallel, languages and software demos

- [x] Create `src/features/nus-talk/demos/NetworksDemo.tsx`, `ParallelDemo.tsx`, `LanguagesDemo.tsx` and `SoftwareDemo.tsx`, plus `src/features/nus-talk/demos/DemoHost.tsx` with a complete typed mapping. Handle alternate/no route, ideal worker timelines, bounded expression steps and failing-test/release blocking. Mount one selected demo at a time. Coverage: US06, M08–M11, Q07/Q14.

### Step 7 - Implement scoped browser behaviour

- [x] Create `src/features/nus-talk/useTalkBrowser.ts` for keyboard filtering, fullscreen capability/state/rejection handling, focus transitions, motion preference/manual pause and visibility-aware lifecycle. Create `src/features/nus-talk/useTalkBrowser.test.tsx` for meaningful browser fallback, keyboard conflict and cleanup cases. Avoid unnecessary continuously running JavaScript animations. Coverage: US02, US07, US08, Q01/Q02/Q04/Q07/Q10.

### Step 8 - Implement presentation and exploration views

- [x] Create `src/features/nus-talk/TalkPage.tsx`, `PresentationView.tsx`, `ExplorationView.tsx` and `FocusAreaDetails.tsx`. Implement the nine-scene live narrative, comparison visual, NUS overview, eleven-area map, three featured demo scenes, career connections and exciting closing. Add controls for slide progress, mode, pause, fullscreen and exit. Preserve presentation position and meaningful selected topic across mode changes; include Vietnamese language scope, source access and accessible focus. Finish responsive styling in `talk.css`. Coverage: US02–US09, Q01–Q08/Q11–Q15.

### Step 9 - Integrate routing, entry links and load/render fallback

- [x] Create `src/utils/talkRoute.ts` with lightweight route/return helpers and `src/utils/talkRoute.test.ts`. Modify `src/App.tsx` in place to add a lazy App-level boundary above the existing exported PortfolioApp; add independent loading/error recovery UI via `src/components/TalkRouteBoundary.tsx`. Modify `src/components/Navbar.tsx` and `src/templates/business/BusinessShell.tsx` to expose the talk link on desktop/mobile and close mobile drawers appropriately. Preserve existing template/SectionId contracts, portfolio routes/preferences, base-path handling and browser history. Coverage: US01, US02, Q07/Q09/Q10/Q13.

### Step 10 - Add user-facing interaction and integration checks

- [x] Create `src/features/nus-talk/TalkPage.test.tsx`, `src/features/nus-talk/demos/demos.test.tsx` and `src/TalkRoute.test.tsx`. Cover mode/topic retention, slide boundaries, distinct demo input/result/reset scenarios, accessible controls, route history/return, header entry and loading/error fallback. Extend `src/App.test.tsx` only where existing tests need an integration regression. Use stable `data-testid` attributes on interactive elements as required by Code Generation rules, while preferring semantic role/name assertions where meaningful. Tests must verify behaviour rather than mirror implementation.

### Step 11 - Verify and refine the completed experience

- [x] Run focused relevant tests, then the existing regression suite (`npm test`) and production build (`npm run build`). Fix observed failures within this approved scope and rerun affected checks. Inspect production talk chunk separation and defined contrast pairs. Read Sites local-preview guidance before browser QA; if supported, inspect 360px mobile, 1280×720 projection, 1440×900 desktop and 200% zoom, motion, keyboard and fullscreen fallbacks; otherwise record the exact browser-verification limit. Record environment/evidence for performance observations; do not claim unmeasured timing or cross-browser coverage. Review Vietnamese copy and source claims and perform an editorial pacing assessment; human rehearsal remains the final duration check.

### Step 12 - Document and present generated code

- [x] Create `aidlc-docs/construction/nus-career-talk/code/code-generation-summary.md` with changed/created files, story/scenario coverage, verification results and limitations, and local preview/use instructions. Update `aidlc-docs/README.md` with links to the active workflow artifacts. Update plan/story checkboxes and state in the same interaction. Present the required Request Changes / Continue to Next Stage review before formal Build and Test. Retain existing GitHub Pages deployment artifacts; no commit, push or publish is part of this step.

## Story implementation tracking

Mark only when functionality and relevant checks support completion; update during generation.

- [x] US01 Enter/leave talk - Steps 9–11.
- [x] US02 Short controlled narrative - Steps 2, 7–11.
- [x] US03 CS/CE comparison - Steps 1, 8, 11.
- [x] US04 NUS and focus map - Steps 1, 8, 11.
- [x] US05 Three live demos - Steps 2–4, 8, 10–11.
- [x] US06 Complete exploration - Steps 1–6, 8, 10–11.
- [x] US07 View/topic continuity - Steps 2, 7–8, 10–11.
- [x] US08 Accessible participation - Steps 3, 7–11.
- [x] US09 Exciting next step - Steps 1, 8, 11.

## Non-applicable layers and deployment

API/repository/service generation, database migrations and greenfield setup are N/A: the approved feature is static/client-only. Preserve existing package inputs and GitHub Pages workflow. No additional deployment artifact is necessary unless production verification identifies an in-scope build-path issue. Formal Build and Test follows generated-code approval and produces its required instruction files.

## Scope and quality constraints

All FR1–FR8, NFR1–NFR5, Q01–Q15 and M01–M11 remain authoritative. Keep familiar teaching examples, labelled toy limitations and illustrative careers; no admissions/salary claims, student collection or live AI. Use CSS/SVG/native controls within the retained stack. Routine internal refinements may stay within the listed feature files; a material scope change requires updating the plan rather than silently inventing new work.

Security Baseline and PBT: N/A, explicitly disabled. Full rules skipped. Ordinary correctness/accessibility/regression checks remain required. No enabled extension has a blocking finding.

## Whole-plan approval question

Approve all twelve generation steps and their sequence?

A) Approve the entire plan and begin implementation.
B) Request changes; describe after [Answer]:.
X) Other (describe after [Answer]:).

[Answer]: A
