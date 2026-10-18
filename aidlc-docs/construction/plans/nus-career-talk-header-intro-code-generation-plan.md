# Header and Photo Introduction - Code Generation Plan

Status: all seven generation steps complete; generated-code review pending.

Single source of truth for this amendment. Unit: existing `nus-career-talk` in `/Users/nhamquochung/nhamhung.github.io`. Requirements R1–R3 and the existing application/functional/NFR design supply the context. Stories US01/US02/US07/US10. No backend/repository/API/database/deployment generation applies.

## Numbered generation steps

### Step 1 - Responsive header action

- [x] Modify `src/components/Navbar.tsx` and `src/templates/business/BusinessShell.tsx` in place: add non-wrapping, non-shrinking, padded NUS CS action; reserve usable space for controls/identity; show compact navigation before full links become crowded. Engineering's container/breakpoint may widen together so switching to full navigation actually has enough space. Preserve mobile entry/drawer behaviour and both theme choices. R1 / US01.

### Step 2 - CV-backed introduction content

- [x] Modify `src/features/nus-talk/content.ts`: insert speaker scene immediately after opening and store the approved short Vietnamese CV highlights as editable content. Use the verified CV facts, especially ongoing UT Austin study. Reuse the original `src/assets/profile.jpeg` through the existing profile record or asset import; do not alter the source photo. R2 / US10.

### Step 3 - Photo slide rendering and layout

- [x] Modify `src/features/nus-talk/PresentationView.tsx` and `talk.css` for the speaker scene: responsive portrait/text composition, descriptive alt, existing dark visual style, readable short highlights. Extend `types.ts` only if typed content requires it. Reuse current views; no new standalone route. R2 / US10.

### Step 4 - Content-driven narrative navigation

- [x] Modify `src/features/nus-talk/models.ts` to derive last position and featured field from slide content instead of fixed nine-scene bounds or numeric field indexes. Keep invalid-input handling, default selected area and resume semantics. Make any small necessary matching change in `TalkPage.tsx`. R3 / US02/US07.

### Step 5 - Relevant regression checks

- [x] Update `content.test.ts`, `models.test.ts`, `TalkPage.test.tsx` and relevant header coverage in `src/TalkRoute.test.tsx`: introduction second, photo source/alt and key CV content, ten-scene boundaries, all featured-area mappings and resume position. Avoid tests that merely repeat CSS; verify header geometry in browser instead. Keep the eleven demo tests unchanged unless a genuine regression requires a fix.

### Step 6 - Verify and refine

- [x] Run affected tests, complete `npm test` suite and `npm run build`; fix failures within scope and rerun affected checks. Inspect headers at 360px, screenshot-like 1110px, 1280px, 1440px and a wide desktop, and photo slide at projection/phone sizes with local browser tools when available. Check no label wrapping or overlap and that photo/text remain readable. Record limits if any. Run `git diff --check`.

### Step 7 - Documentation and generated-code handoff

- [x] Update the existing talk source/design/count references where the amendment makes them stale; retain clearly dated historical verification as history. Record source changes, current test/build/browser evidence and any limits in `aidlc-docs/construction/nus-career-talk/code/header-intro-summary.md`. Update active index/state and plan/story checkboxes in the same interaction. Present Request Changes / Continue to Next Stage for generated-code review before formal Build and Test. No commit, push or publish.

## Approval and tracking

- [x] Explicit approval of this entire numbered sequence, the linked workflow and its bounded story amendment.
- [x] R1 / US01 responsive entry complete.
- [x] R2 / US10 speaker/photo scene complete.
- [x] R3 / US02/US07 navigation and context complete.

Approval is recorded through the focused execution-plan review question file. Implementation may refine internal names within these exact source boundaries, but material scope changes require a plan amendment. Code and tests stay under src; documentation stays under aidlc-docs. Existing extension choices remain disabled and N/A.

## Explicitly requested generated-code review revisions

The user requested these changes directly at the review gate; this is authorisation to implement the following within the existing page, not a new unapproved scope proposal.

- [x] Revise all audience-facing Vietnamese copy to address “các em”, use Nhâm Quốc Hùng consistently, and remove presentation references to the CV.
- [x] Position speaker expertise through supported CS engineering experience and student advising/mentorship; keep study status accurate.
- [x] Balance CS/CE columns with matching hierarchy and labelled explanatory flows in place of unexplained symbols.
- [x] Frame NUS as the speaker's familiar curriculum used to introduce CS rather than a university promotion; revise related slides and closing professionally.
- [x] Apply a friendly professional light palette throughout the talk and teaching visuals, preserving contrast, controls and portfolio themes.
- [x] Update affected copy/semantic regressions, run full tests/build and inspect comparison, NUS, speaker, mobile and representative demo visuals.
- [x] Record evidence and return to the generated-code review gate.

## Additional speaker background requested in review

- [x] Add 12 years in Singapore, separate four-year ASEAN secondary and undergraduate scholarships, and the four named global employers; preserve CS and advising expertise.
- [x] Run affected presentation tests and production build; update review evidence.

## Audience address revision

- [x] Remove presenter first-person wording and standardise student address as các em.
- [x] Verify affected tests/build and record review evidence.

## Fitted fullscreen review revision

- [x] Fit complete presentation scenes to available viewport while retaining interactive controls; keep exploration scrollable.
- [x] Support native fullscreen, fitted-window fallback, Escape exit and Page Up/Down navigation.
- [x] Verify scaling, keyboard/fallback lifecycle and regression/build; record review evidence.

## Demo fullscreen layout correction

- [x] Correct grid placement of the actual demo wrapper and enlarge the visualization column.
- [x] Check demo and career geometry in Chrome and rerun tests/build; update evidence.

- [x] Add an enlarged demo overlay with working controls, Escape/close return, focus containment and preserved results; verify browser screenshot and regression.

## CS overview revision

- [x] Add a clear Vietnamese overview scene before CS/CE with core questions and a relatable example; preserve audience address and presentation fitting.
- [x] Update narrative/navigation regressions, run tests/build and record evidence.

## Career wording clarification

- [x] Replace abstract data/platform labels with concrete actions and relatable examples, retaining exploration targets.
- [x] Run affected checks and record evidence.

## Full Vietnamese editorial review

- [x] Review narrative, all eleven field descriptions and demo/interface copy; revise unnatural slogans and phrasing in consistent Vietnamese.
- [x] Update affected text expectations, run regression/build and record editorial evidence.

## Five simulation scenes

- [x] Remove the NUS introduction scene and unused render branch; add database and security featured scenes, updating section numbers.
- [x] Verify all five featured exploration mappings, narrative bounds, tests and build; record evidence.

## Replace database featured demo

- [x] Replace the database presentation scene with network delivery/failure simulation; remove misleading sample-index label from optional exploration.
- [x] Verify five-feature navigation and tests/build, record evidence.

## Graph label readability

- [x] Confirm correct binary-search terminology and offset the two vertical-edge weights away from their lines.
- [x] Run demo regressions/build and record verification.
