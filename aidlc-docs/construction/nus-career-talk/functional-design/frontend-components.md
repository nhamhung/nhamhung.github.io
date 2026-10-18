# Frontend Components and Interaction Flows

## Hierarchy and ownership

App route boundary mounts PortfolioApp or TalkPage. Portfolio headers link through shared lightweight talk-route metadata. TalkPage renders a shared toolbar plus PresentationView or ExplorationView. PresentationView renders current SlideContent and optional DemoHost. ExplorationView renders eleven area choices and FocusAreaDetails with DemoHost. DemoHost mounts one of the eleven field demos.

## Props and state

App owns current hash and a valid remembered return hash; exit callback is passed to TalkPage. TalkPage owns mode, slide ID, selected area and manual motion pause. PresentationControls receives progress, boundary flags and explicit callbacks. Views receive read-only content and motion policy and emit navigation callbacks. AreaDetails receives one complete area record. Each demo owns inputs/result/progress described in `business-logic-model.md`; it receives motion policy only and does not mutate session state.

## Main flows

1. Header link/direct URL opens the talk at the opening scene.
2. Presenter advances through ten narrative scenes, including the CV-backed speaker/photo introduction second; input controls retain their own keys.
3. Featured scene exploration opens the same field; a map choice opens its chosen field.
4. Student selects any area, sees complete details and operates that area's demo.
5. Resume restores the unchanged presentation position, including when a non-featured field was explored.
6. Closing offers the project challenge and further exploration.
7. Exit goes to a valid remembered portfolio location or #home, restoring existing persisted preferences through the portfolio's current mechanisms.

## Forms and interaction validation

Use finite select/button choices and labelled bounded sliders; no personal-information forms. Demos with discrete Run clear old results when inputs change. HCI contains a real bounded task with completion and observed action count. Fullscreen status is understandable in Vietnamese. Result explanations remain visible with paused/reduced motion. Exact layout tokens, accessible focus mechanics and lifecycle implementation follow in NFR Design.

## API integration

None. Content/datasets are bundled. Source links open official information when followed but are not runtime dependencies for the loaded demos. No new router, state framework, backend or student persistence is required by this design.

## Coverage

US01 route/header integration; US02 bounded slide controls; US03 comparison scene; US04 NUS/map/content; US05 three featured demos; US06 all eleven exploration demos; US07 mode/topic state; US08 accessible browser/visual behaviour; US09 closing. All M01–M11 models appear in `business-logic-model.md`.

## Extension compliance

Security Baseline and PBT: N/A; explicitly disabled in state. Full extension rules skipped. No enabled blocking findings.
