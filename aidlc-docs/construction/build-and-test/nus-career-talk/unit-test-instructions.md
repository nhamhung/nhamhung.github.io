# Unit Test Instructions - NUS Career Talk

Run from the repository root with installed locked dependencies.

- Complete regression command: `npm test`.
- Focused model/content/route-helper command: `npm test -- src/features/nus-talk/models.test.ts src/features/nus-talk/content.test.ts src/utils/talkRoute.test.ts`.

The focused group checks weighted paths and disconnected destinations, classification samples, lookup steps, encoding, similarity ranking, ideal worker distribution, bounded narrative transitions and content/reference coverage. Rendered interactions and reset behaviour are covered separately in the integration instructions.

Current complete-suite result: 114 passed, zero failed, across 16 files. This total includes both model and rendered integration tests; do not add focused rerun counts to it. No line/branch coverage percentage was collected. Vitest prints its result to the terminal; no persistent JUnit or coverage report is configured by these commands.

On failure, inspect the failing scenario, compare with approved model rules, correct the implementation or an invalid test assumption, then rerun affected tests. Rerun the full suite after changes with possible integration impact. Keep assertions about meaningful user outcomes rather than copying implementation formulas.
