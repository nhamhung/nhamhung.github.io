# Services and Orchestration

## Client-only orchestration

No server or service layer is introduced. React state and small browser hooks coordinate the feature. Static content and local toy computations provide all required teaching behaviour.

## Route coordination

App reads the current hash and subscribes to browser navigation. It chooses one mounted experience: PortfolioApp or lazy TalkPage. Browser history remains authoritative. App remembers the last valid non-talk portfolio hash for the return callback; direct visits return to home. Existing provider/storage mechanisms retain colour, template and layout preferences across the portfolio remount.

Avoid mounting portfolio layout/scroll machinery inside the talk. The inspected `usePortfolioLayout` currently normalises only one-segment section hashes; an App-level boundary further separates lifecycles rather than teaching that hook about talk slides.

## Presentation coordination

TalkPage's session controller drives slide progress, exploration mode and selected field. PresentationView and ExplorationView emit callbacks; neither rewrites browser history for every interaction. Internal slide/topic state is in-memory during the mounted visit; persistent deep links to individual slides and cross-visit demo persistence are outside the approved scope.

On exploration entry, keep the presentation position and select the relevant field where applicable. On resume, return to the preserved position. Demo state can reset on unmount; that does not discard the required topic/slide context.

## Demo orchestration

DemoHost mounts one chosen field component. Each component owns its toy data/inputs and output and provides explanation and relevant reset/replay actions. It does not mutate session navigation or portfolio preferences. Shared motion policy passes down from TalkPage. Exact data transformations and invariant checks are deferred to Functional Design.

## Browser lifecycle and fallback

The talk scope owns keyboard, focus, media-query and fullscreen listeners. Hooks clean up on exit/unmount, including React StrictMode setup/cleanup cycles. Unsupported/rejected fullscreen leaves normal presentation working; external fullscreen exit updates controls. Reduced/paused motion retains text and final/stepwise results. Asynchronous lazy loading has a readable fallback; load failure handling is defined in NFR Design.

## Content/source responsibility

Store source links and verification dates beside content. Finalise programme claims using official NUS references; keep career mappings illustrative and personal speaker claims absent unless supplied. No runtime content-fetch service, analytics, authentication or live AI inference is required.

## Extension compliance

Security Baseline and Property-Based Testing: N/A; both explicitly disabled in state (Q7 B, Q8 C). Full rules skipped. No enabled extension has a blocking finding.
