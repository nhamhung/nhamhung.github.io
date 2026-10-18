# Component Methods and Interfaces

These are conceptual TypeScript signatures, not implementation files. Names may be refined during coding while preserving responsibilities. Exact schemas and transition logic follow in Functional Design.

## Route contract

- `isNusTalkHash(hash: string): boolean`: recognise the dedicated exact talk route.
- `getPortfolioReturnHash(lastPortfolioHash?: string): string`: return the last known portfolio destination or a safe home fallback. Only valid local portfolio section/journal hashes qualify.
- `navigateToHash(hash: string): void`: change browser history and notify the route boundary consistently with existing browser behaviour.
- `TalkPage(props: { onExit: () => void }): ReactElement`: lazy feature entry receiving an explicit return action.

App subscribes to hashchange and popstate; the same route decision must apply on direct load, native anchor changes and history navigation. An unknown hash retains existing portfolio fallback behaviour.

## Talk session contract

- `TalkMode`: presentation or exploration.
- `FocusAreaId`: finite union of eleven stable area IDs.
- `SlideId`: stable identifier for a narrative scene.
- `TalkSessionState`: mode, current slide ID, selected area ID and manual motion-pause flag.
- `goToSlide(slideId: SlideId): void`: select a valid scene.
- `previousSlide(): void`, `nextSlide(): void`: bounded narrative navigation.
- `openExploration(areaId?: FocusAreaId): void`: select a meaningful area and change view while preserving slide position.
- `resumePresentation(): void`: restore the retained narrative scene.
- `selectArea(areaId: FocusAreaId): void`: choose exploration details and active demo.
- `setMotionPaused(paused: boolean): void`: control continuous animation without hiding explanations.

## View and data contracts

- `PresentationView({ slide, onExplore, motionPolicy })`: display a scene with optional featured demo.
- `PresentationControls({ progress, canGoBack, canGoNext, onPrevious, onNext, onExplore, fullscreen, onExit })`: accessible navigation surface.
- `ExplorationView({ selectedAreaId, onSelectArea, onResume, motionPolicy })`: field navigation and selected detail view.
- `FocusAreaDetails({ area, motionPolicy })`: explanatory content, illustrative careers, sources and demo.
- `FocusAreaContent`: stable ID, official English name, Vietnamese name/explanation, application, interest connection, at least two illustrative careers, accent identity and source references.
- `SlideContent`: stable ID, scene kind, Vietnamese heading/body and optional focus-area ID.
- `SourceReference`: title, official URL and verification date.

## Demo contracts

- `DemoHost({ areaId, motionPolicy }): ReactElement`: resolve the matching field component.
- `MotionPolicy`: whether continuous movement is allowed, based on preference and manual pause.
- Each demo owns `reset(): void` and meaningful local input actions; replay/step/run controls are exposed only where appropriate.
- Textual result/explanation is part of the demo output contract, including under paused/reduced motion.

## Browser contracts

- `useTalkKeyboard({ enabled, onPrevious, onNext }): void`: scoped listener that leaves editable and interactive input keys available.
- `useTalkFullscreen(targetRef)`: supported/active state, status message and async toggle action with handled rejection.
- `useTalkMotion()`: preference state, manual pause setter and resulting motion policy.
- Focus management receives the destination heading/control ref on mode or topic transitions; it does not repeatedly steal focus during an active demo.

No methods call a backend or write student records. These interfaces do not prescribe algorithms or add capabilities beyond the approved requirements.

## Extension compliance

Security Baseline and Property-Based Testing: N/A; both explicitly disabled in state (Q7 B, Q8 C). Full rules skipped. No enabled extension has a blocking finding.
