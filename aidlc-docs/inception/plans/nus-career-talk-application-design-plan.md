# NUS Career Talk - Application Design Plan

Status: completed; generated application design approved.

## Context and decisions already approved

One cohesive `nus-career-talk` unit in the existing React/TypeScript/Vite application. Dedicated `#/talks/nus-cs` route, visible entry links in both portfolio templates, a 10–15 minute Vietnamese presentation with three featured demos and complete eleven-area exploration. Existing GitHub Pages hosting and portfolio preferences remain authoritative.

## Proposed component boundaries

- App route boundary: recognise the talk hash and load the talk feature on demand. Keep routing ownership outside the talk and preserve existing portfolio section/journal behaviour. Inspect the current layout hook before finalising placement so it cannot rewrite a talk hash as a portfolio section.
- Talk page: own presentation/exploration mode, selected area and remembered slide position during a visit. Returning to a presentation resumes its previous slide; opening exploration from a featured slide selects its area.
- Presentation view: render the opening, CS/CE comparison, NUS overview, focus-area map, featured demos and closing, with shared navigation controls.
- Exploration view: expose all eleven areas and show the selected area's description, application, career examples, interests and demo.
- Content module: hold typed Vietnamese copy, stable area/slide IDs, official English names, career examples and source metadata, separate from visual rendering.
- Demo host: select one of eleven demo components through stable area IDs; each demo owns its local interaction state and reset/replay. Reuse visual primitives where useful without replacing distinct teaching outcomes with generic animation.
- Browser interaction helpers/hooks: coordinate fullscreen, keyboard handling, focus and motion policy with cleanup on leaving the talk. Specify interfaces here; detailed transition rules and performance patterns follow in Functional/NFR Design.
- Existing headers: use one shared talk-link definition where practical; Engineering's actual navigation is in `src/components/Navbar.tsx`, and Business's is in `src/templates/business/BusinessShell.tsx`. Include desktop/mobile behaviour without adding the talk to the portfolio `SectionId` union.

## Proposed ownership and communication

Route changes flow from browser events to App; the talk receives the current entry/return contract. Talk state flows down as props; views emit explicit callbacks. Demo state remains local. Static content does not import rendering components. Demo modules do not mutate portfolio storage or global navigation.

The only service-like orchestration needed is client-side presentation and browser interaction coordination. No backend service, global state framework or new runtime API is proposed. Keep the two registered portfolio templates unchanged as template choices.

## Interface scope

The design artifacts will define conceptual TypeScript signatures for route recognition, the page entry/return contract, mode switching, slide navigation, area selection, demo host props, motion policy and fullscreen actions. Functional Design will determine exact models, transition edge cases and demo computations. Implementation may refine names while preserving the reviewed responsibilities.

## Question-category review

Component identification, methods, service boundaries, dependencies and design patterns are covered by the proposal above. The approved scope resolves product choices; only approval or changes to this bounded design approach are requested. Do not ask again about duration, style or field coverage.

## Preparation checklist

- [x] Load application-design rules and approved execution context.
- [x] Inspect App routing and existing header integration boundaries.
- [x] Propose component ownership, communication and client-side orchestration.
- [x] Evaluate design question categories and prepare one consolidated approach question.
- [x] Receive the approach answer and plan approval.
- [x] Validate the answer; resolve any contradictions before artifact generation.

## Artifact-generation checklist - after approach approval

All artifacts belong under `aidlc-docs/inception/application-design/nus-career-talk/`.

- [x] Generate `components.md`: purpose, responsibilities and interfaces for every component boundary above.
- [x] Generate `component-methods.md`: conceptual method/prop signatures, input/output types and high-level responsibilities; leave detailed algorithms to Functional Design.
- [x] Generate `services.md`: client-side orchestration, browser lifecycle ownership and absence of backend services.
- [x] Generate `component-dependency.md`: dependency matrix, communication patterns and validated data-flow diagram with a text alternative.
- [x] Generate `application-design.md`: consolidate the four design artifacts into one reviewable design.
- [x] Validate completeness against US01–US09, M01–M11 and FR1–FR8/NFR1–NFR5; identify any unresolved design issues.
- [x] Validate Markdown and diagrams, record extension compliance and update plan/state checkboxes.
- [x] Present application-design artifacts and a dedicated review question for explicit approval.
- [x] Receive application-design approval before starting Functional Design in Construction.

## Question 1 - Design approach

How should we proceed with this component and state-ownership proposal?

A) Approve the proposal and generate the five application-design artifacts (recommended).
B) Request changes to the proposed boundaries or ownership; describe after [Answer]:.
X) Other (describe after [Answer]:).

[Answer]: A

## Extension compliance

Security Baseline: N/A, explicitly disabled by Q7 B. Property-Based Testing: N/A, explicitly disabled by Q8 C. Full extension rules remain unloaded. Approved accessibility, correctness and regression requirements still apply. No enabled extension has a blocking finding.
