# Integration Test Instructions - NUS Career Talk

This is one static application unit; integrations are between App, portfolio templates, talk views, browser APIs and local demos. No backend endpoints or separate services must be started for the automated suite.

## Automated checks

Run `npm test -- src/TalkRoute.test.tsx src/App.test.tsx src/features/nus-talk/TalkPage.test.tsx src/features/nus-talk/useTalkBrowser.test.tsx src/features/nus-talk/demos/demos.test.tsx`.

Expected outcomes:

1. Direct talk hash renders; history transitions remount the portfolio; explicit return uses the remembered valid route. Both template headers expose the talk entry.
2. The nine-scene narrative is bounded at both ends. Exploration opens the featured field and preserves the presentation position when a different field is explored.
3. Every M01–M11 input/action produces its distinct result and reset behaviour. Failed tests block the toy release; failed network destinations report no route.
4. Input arrow keys do not advance slides; keyboard listeners clean up on unmount. Unsupported/rejected fullscreen preserves content.
5. A talk render/load-subtree failure offers reload/return independent of the talk bundle. Existing portfolio layout, content and theme regressions remain passing.

Tests use jsdom, Testing Library and local fixtures, not live services. Their cleanup unmounts components and restores route/mocks. Console errors from an intentional boundary failure are suppressed within that test only.

Current complete regression suite passed 114 tests; focused integration cases are included in that total. Tests do not replace manual native fullscreen, responsive composition, actual browser history and screen-reader review. Follow `e2e-test-instructions.md` for those browser tasks.
