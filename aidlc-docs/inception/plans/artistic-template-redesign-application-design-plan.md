# Application Design Plan - Artistic Template Presentation Redesign

## Purpose

Define the high-level component architecture, interfaces, orchestration services, and dependencies required for a template-specific artistic shell, editorial chapters, horizontal rails, motion behavior, and optional presentation metadata.

## Context Review

- [x] Read the approved redesign requirements and requirement answers.
- [x] Read the approved personas and thirteen user stories.
- [x] Read the approved three-unit execution plan.
- [x] Read the refreshed architecture and component inventory.
- [x] Inspect the current `PortfolioTemplate`, registry, `App`, shared Navbar, layout hook, journal routing, and artistic components.
- [x] Identify the current architectural limitation: templates select section components but cannot select a shell or navigation composition.

## Design Scope

- Template-level shell and navigation composition.
- App-to-template shell contract.
- Artistic chapter labels mapped to existing route-compatible section IDs.
- Optional artistic metadata and deterministic fallback resolution.
- Full-screen visual index and focus lifecycle.
- Reusable native horizontal rail behavior.
- Motion preference and progressive animation boundary.
- Artistic journal reading treatment without duplicated routing.
- Engineering isolation and shared-data reuse.

## Application Design Questions

### Question 1

How should templates control the top-level page shell?

A) Each template supplies a typed Shell component that receives shared navigation, layout, routing, and rendered-content inputs while App continues to own browser state (recommended)
B) Each template supplies only a Navbar component while App keeps the same main-content structure
C) Each template supplies a complete App renderer responsible for navigation, routing, and content orchestration
D) Keep App unchanged and branch on the active template ID inside Navbar and main content
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2

How should artistic chapters relate to the existing section IDs and direct hashes?

A) Preserve every existing SectionId and hash, but give each one an artistic chapter label and template-specific composition; related chapters may flow together visually in single-page mode (recommended)
B) Replace the ten existing section IDs with the eight artistic chapter IDs and add compatibility redirects
C) Keep existing section IDs internally but expose only four large artistic destinations in navigation
D) Use separate section maps for single-page and multi-page modes
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

Where should optional artistic presentation metadata live?

A) Use a separate typed `src/data/artistic.ts` configuration that references stable project and gallery identifiers, adding stable IDs where current models lack them (recommended)
B) Add optional artistic fields directly to each existing profile, project, and gallery data entry
C) Add one optional `artistic` object to the root portfolio aggregate and keep all presentation metadata there
D) Derive metadata at render time and do not create a student-editable artistic configuration file
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4

How should rail and motion behavior be structured?

A) Build small local React/CSS primitives using native scrolling, browser observers, and reduced-motion media preferences; add no animation dependency (recommended)
B) Add a dedicated animation library and use it for reveals, parallax, chapter transitions, and rail state
C) Keep motion entirely in CSS and avoid browser observers or React motion state
D) Implement separate interaction logic inside each artistic section rather than shared primitives
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Planned Artifacts

All artifacts will be created under `aidlc-docs/inception/application-design/artistic-template-redesign/`.

## Approved Design Approach

- **Shell ownership**: Each template supplies a typed Shell component; App retains browser hash, layout, and active-section state.
- **Chapter routing**: Existing `SectionId` values and hashes remain stable while the artistic template supplies editorial chapter labels and compositions.
- **Metadata ownership**: A separate typed `src/data/artistic.ts` configuration references stable content identifiers and uses deterministic fallbacks.
- **Interaction architecture**: Native horizontal scrolling, small React helpers, browser observers, CSS motion, and reduced-motion preferences; no new animation dependency.
- **Approval**: Explicitly approved on 2026-07-17T01:21:35Z.

### Step 1: Validate Design Decisions

- [x] Read every completed `[Answer]:` tag.
- [x] Validate answers for ambiguity and contradiction.
- [x] Add follow-up questions if any design boundary remains unclear. No ambiguities were found, so no follow-up questions were required.
- [x] Record explicit approval of the resolved design approach.

### Step 2: Define Components and Interfaces

- [x] Generate `components.md` with component purposes, responsibilities, and interfaces.
- [x] Generate `component-methods.md` with high-level method signatures and input/output types.
- [x] Include shell, navigation/index, chapter, rail, motion, metadata, journal, and test boundaries.

### Step 3: Define Services and Dependencies

- [x] Generate `services.md` with orchestration and resolver responsibilities.
- [x] Generate `component-dependency.md` with dependency matrix, communication patterns, and validated diagrams plus text alternatives.
- [x] Keep detailed business rules for per-unit Functional Design.

### Step 4: Consolidate and Validate

- [x] Generate `application-design.md` consolidating the approved design.
- [x] Validate every requirement and story group has an owning component or service.
- [x] Validate engineering isolation, static deployment, layout modes, and journal routing.
- [x] Validate all Markdown and Mermaid content before file creation.

### Step 5: Update Workflow Tracking

- [x] Mark each completed plan checkbox immediately.
- [x] Update `aidlc-docs/aidlc-state.md`.
- [x] Append plan approval, design generation, and review prompt events to `aidlc-docs/audit.md`.

## Mandatory Artifacts

- [x] `components.md`
- [x] `component-methods.md`
- [x] `services.md`
- [x] `component-dependency.md`
- [x] `application-design.md`

## Approval Gate

All four design questions must be answered and validated. The resolved application design approach must be explicitly approved before the design artifacts are generated.

## Extension Rule Compliance

| Extension              | Status   | Rationale                                                                       |
| ---------------------- | -------- | ------------------------------------------------------------------------------- |
| Security Baseline      | Disabled | Disabled during Requirements Analysis; no security extension constraints apply. |
| Property-Based Testing | Disabled | Disabled during Requirements Analysis; no PBT extension constraints apply.      |
