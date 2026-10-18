# Build and Test Summary - NUS Career Talk

Verification date: 2026-10-18. Stage: complete; results approved and Operations placeholder acknowledged. Generated code has been explicitly approved. No application code changed during this stage.

## Results

| Check | Result |
| --- | --- |
| Complete Vitest regression suite | Passed: 114 tests across 16 files; zero failures; 6.10s reported suite duration. |
| TypeScript and Vite production build | Passed; Vite bundling phase 1.79s. |
| Static artifacts | `dist/index.html` and assets generated. |
| Talk chunk separation | JS 42.74 kB / 13.98 kB gzip; CSS 9.37 kB / 2.66 kB gzip. |
| Whitespace validation | `git diff --check` passed. |
| Coverage percentage | Not collected. |
| Browser/visual evidence | Reused unchanged-code Chrome checks from code generation; not a fresh multi-browser run. |
| Contract/backend load tests | N/A: static single-unit feature with no runtime API. |
| Optional security/PBT extensions | N/A: explicitly disabled; no scanner/PBT pass is claimed. |

All automated model, UI and integration cases are included in the 114-test total, not separate additive suite totals. The existing large main-chunk warning remains; production build succeeds. Testing used Node 22.14.0 in the temporary runtime and the repository's locked dependencies. No install or dependency update was required for this stage.

## Browser and educational verification limits

Prior Chrome evidence covers 1440×900 desktop, 1280×720 projection, 360px exploration for all eleven fields, all nine scenes, keyboard, fullscreen, reduced motion and selected contrast calculations. A single route action measured about 33.1ms to two frames on the local development setup. Actual 200% zoom, Safari/Firefox, physical devices, screen-reader review and a timed live rehearsal remain unverified. See the E2E/performance instructions for repeatable procedures and exact limits. No new claim of complete accessibility, universal performance or cross-browser certification is made.

## Instruction artifacts

- [Build](build-instructions.md).
- [Unit tests](unit-test-instructions.md).
- [Integration tests](integration-test-instructions.md).
- [Performance checks](performance-test-instructions.md).
- [Manual browser/E2E checks](e2e-test-instructions.md).

These scoped files preserve the previous workflow's build-and-test artifacts in the parent directory.

## Outcome and next gate

The implemented page is at `#/talks/nus-cs`; local build and automated tests pass. Review the results and instructions using `review-questions.md` before advancing to Operations. The supplied Operations stage is a placeholder, not an automatic publishing action. Nothing was committed, pushed or deployed.

Security Baseline and PBT: disabled and N/A; full rule files skipped. No enabled extension has a blocking finding.
