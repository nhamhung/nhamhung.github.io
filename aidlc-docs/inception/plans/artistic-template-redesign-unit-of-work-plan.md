# Unit of Work Plan - Artistic Template Presentation Redesign

## Purpose

Decompose the approved artistic template redesign into manageable logical modules within the existing single React/Vite application, with explicit dependencies and complete story ownership.

## Context Review

- [x] Read the approved requirements and all thirteen user stories.
- [x] Read the approved execution plan and three-unit recommendation.
- [x] Read the approved application design and component dependencies.
- [x] Confirm the repository is a brownfield single application package, not independently deployable services.
- [x] Confirm Infrastructure Design remains skipped and GitHub Pages delivery remains shared.

## Decomposition Categories Evaluated

- **Story Grouping**: Foundation stories, visitor exhibition stories, and verification/enablement stories have different implementation affinities.
- **Dependencies**: Shell contracts and presentation resolvers block chapter integration; integrated verification depends on both implementation units.
- **Team Alignment**: Work occurs in one shared workspace and must preserve sequential contract compatibility.
- **Technical Considerations**: All units compile and deploy as one static application; units are logical modules, not services.
- **Business Domain**: Template foundation, artistic visitor experience, and student maintenance/release readiness form coherent capabilities.
- **Code Organization**: Greenfield-only category is not applicable because this is a brownfield repository with established `src/templates`, `src/data`, test, and documentation locations.

## Unit Decomposition Questions

### Question 1

How should stories be grouped into units?

A) Three units: template shell/configuration foundation; artistic exhibition/interactions; verification/student enablement (recommended)
B) Two units: all application implementation together, followed by verification/documentation
C) Four units: shell/navigation; data/configuration; artistic chapters/interactions; verification/documentation
D) One unit containing the complete redesign
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2

What dependency sequence should govern the units?

A) Complete Unit 1 contracts first, then Unit 2 presentation, then Unit 3 integrated verification; allow only internal chapter work to proceed independently after Unit 1 (recommended)
B) Develop Units 1 and 2 in parallel and reconcile contracts before Unit 3
C) Start artistic chapter visuals first, then retrofit shell contracts and finish with verification
D) Treat all units as independent with no required ordering
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

How should ownership and coordination be modeled?

A) One sequential workspace owner with explicit contract checkpoints between units (recommended)
B) Separate shell, artistic-component, and quality teams working concurrently
C) One owner for Units 1 and 2, with an independent reviewer owning Unit 3
D) Organize ownership by individual artistic chapter rather than unit
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4

What deployment boundary should each unit have?

A) Logical modules inside one application build; no unit is independently deployed (recommended)
B) Each unit should become an independently buildable frontend package in a monorepo
C) The artistic template should become a separately deployed application
D) Verification and documentation should move into a separate package while UI remains one application
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 5

Which business-capability boundary should drive unit definitions?

A) Presentation foundation, visitor exhibition experience, and maintainable student delivery (recommended)
B) Student author capabilities, visitor capabilities, and maintainer capabilities
C) Navigation, content display, and media interactions
D) Divide units by existing section groups rather than cross-cutting capabilities
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Unit Outline

## Approved Decomposition

- **Unit count**: Three logical modules.
- **Sequence**: Unit 1 contracts, then Unit 2 presentation, then Unit 3 integrated verification.
- **Ownership**: One sequential workspace owner with explicit contract checkpoints.
- **Deployment**: One React/Vite application build; units are not independently deployed.
- **Capability boundaries**: Presentation foundation, visitor exhibition experience, and maintainable student delivery.
- **Approval**: Explicitly approved on 2026-07-18T07:48:18Z.

### Unit 1: Template Shell and Configuration Foundation

- Typed template and shell contracts.
- Engineering and artistic shell integration.
- Artistic header and visual index.
- Stable project identity, optional artistic config, and presentation fallbacks.
- App integration and foundation regression tests.

### Unit 2: Artistic Exhibition and Interaction System

- Artistic chapter components for every existing route.
- Native horizontal rails and controls.
- Motion and reduced-motion primitives.
- Artistic local journal reading treatment.
- Chapter and interaction tests.

### Unit 3: Verification and Student Enablement

- Cross-template, layout, route, motion, and content regression verification.
- Desktop/mobile and light/dark visual checks.
- Student documentation and final integrated quality fixes.

## Generation Checklist

### Step 1: Validate Decomposition Decisions

- [x] Read every completed `[Answer]:` tag.
- [x] Validate answers for ambiguity and contradiction.
- [x] Add follow-up questions if boundaries or dependencies remain unclear. No ambiguities were found, so no follow-up questions were required.
- [x] Obtain explicit approval of the resolved unit plan.

### Step 2: Generate Unit Definitions

- [x] Generate `unit-of-work.md` with unit purposes, responsibilities, inputs, outputs, boundaries, and acceptance gates.
- [x] Ensure units remain logical modules in the existing application package.
- [x] Validate every application design component has an owning unit.

### Step 3: Generate Unit Dependencies

- [x] Generate `unit-of-work-dependency.md` with dependency matrix and update sequence.
- [x] Include validated diagrams and matching text alternatives where useful.
- [x] Define contract checkpoints and integration gates.

### Step 4: Generate Story Mapping

- [x] Generate `unit-of-work-story-map.md` mapping all thirteen stories to one primary unit and any supporting units.
- [x] Map requirement groups to units.
- [x] Verify every story and requirement is assigned.

### Step 5: Validate and Track Completion

- [x] Validate unit boundaries, dependencies, and full story coverage.
- [x] Mark every completed plan checkbox immediately.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Append plan approval, generation, and review events to `aidlc-docs/audit.md`.

## Mandatory Artifacts

- [x] `aidlc-docs/inception/application-design/artistic-template-redesign/unit-of-work.md`
- [x] `aidlc-docs/inception/application-design/artistic-template-redesign/unit-of-work-dependency.md`
- [x] `aidlc-docs/inception/application-design/artistic-template-redesign/unit-of-work-story-map.md`

## Approval Gate

All five decomposition questions must be answered and validated. The resulting unit plan must receive explicit approval before unit artifacts are generated.

## Extension Rule Compliance

| Extension              | Status   | Rationale                                                                       |
| ---------------------- | -------- | ------------------------------------------------------------------------------- |
| Security Baseline      | Disabled | Disabled during Requirements Analysis; no security extension constraints apply. |
| Property-Based Testing | Disabled | Disabled during Requirements Analysis; no PBT extension constraints apply.      |
