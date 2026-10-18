# Browser and End-to-End Instructions - NUS Career Talk

## Manual workflow

Start a local production preview after building; use its printed Local URL.

1. From each Engineering/Business template, open the NUS CS entry on desktop and in the mobile menu. Check menu close, direct URL refresh, back/forward and portfolio return, including saved template/layout/colour preferences.
2. Present all nine scenes. Verify first/last bounds, keyboard controls, progress and no accidental slide change while operating a select/range control.
3. Open exploration from a featured demo and the field map. Visit all eleven fields, try every meaningful control and reset, and resume the retained presentation position.
4. Verify native fullscreen enter/exit and browser Escape where supported; ensure normal presentation stays usable if permission is rejected or the API is absent.
5. Check pause, system reduced-motion preference, hidden-tab behaviour, visible focus, text equivalents, readable result announcements and keyboard-only operation.
6. Inspect 360px phone, 1280×720 projection and 1440×900 desktop layouts; then perform an actual 200% browser-zoom walkthrough. Essential names and controls must remain reachable. Vertical scrolling is permitted.
7. Inspect the CS/CE comparison, NUS source section and cohort caveat. Check the closing challenge and rehearse the narrative aloud against the 10–15 minute target.
8. Stop owned local servers/browser profiles afterwards.

## Evidence already available

Headless Chrome QA during code generation checked all nine scenes and eleven exploration topics for horizontal overflow, native fullscreen activation, keyboard navigation, reduced motion, selected contrast pairs and screenshots. The phone field selector was refined for readability. The formal stage reused this evidence because application code is unchanged, and reran all automated tests/build.

## Remaining manual checks

Actual 200% browser zoom, Safari, Firefox, physical mobile devices, screen-reader operation and timed speaker rehearsal remain unverified. An effective 640×360 reflow viewport was checked; it is not actual zoom testing. Do not label this manual checklist or full cross-browser E2E coverage as passed until each action is actually performed. No persistent browser-automation suite was added to the repository.
