# Functional Design Plan - ATR-U1 Template Shell and Configuration Foundation

## Unit Context

- **Unit ID**: ATR-U1
- **Primary capability**: Typed template composition, artistic shell/navigation, route integration, and presentation metadata fallbacks.
- **Primary stories**: US-01, US-03, US-04, US-12.
- **Supporting stories**: US-02, US-11, US-13.
- **Dependencies**: Existing App, layout hook, journal routing, template registry, shared portfolio data, and approved application design.

## Functional Areas Evaluated

- **Business Logic Modeling**: Template resolution, content selection, shell composition, index navigation, and metadata fallback workflows.
- **Domain Model**: Template definition, shell props, chapter labels, stable project IDs, artistic configuration, and resolved presentation.
- **Business Rules**: Complete contracts, enabled destinations, unique IDs, fallback order, and engineering isolation.
- **Data Flow**: Shared data plus optional artistic config into pure resolvers; App state into Shell props.
- **Integration Points**: Browser history, layout storage, hash parsing, Chakra Dialog, and static data imports; no backend APIs.
- **Error Handling**: Unknown template IDs, invalid section hashes, unknown journal slugs, unknown metadata IDs, duplicate IDs, and unsupported accents.
- **Business Scenarios**: Direct routes, layout changes, local journal display, disabled sections, partial metadata, and engineering fallback.
- **Frontend State**: Index open/closed state, active section/chapter, focus destination, and layout control events.

## Functional Design Questions

### Question 1

After a keyboard user chooses a chapter from the full-screen visual index, where should focus move?

A) Close the index and focus the destination chapter heading or main content landmark; pointer navigation may keep natural browser focus behavior (recommended)
B) Close the index and always return focus to the index trigger
C) Close the index without moving focus and rely on scroll/route position
D) Keep the index open until the destination finishes rendering, then return focus to the trigger
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 2

How should featured-project configuration handle unknown and duplicate project IDs?

A) Ignore unknown IDs, keep the first occurrence of duplicates, preserve requested order, and fall back to all projects when no valid configured IDs remain (recommended)
B) Treat any unknown or duplicate ID as an error and stop rendering Selected Works
C) Ignore unknown IDs but preserve duplicate project appearances
D) Append unknown IDs as placeholder cards so students can see configuration mistakes
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 3

What should happen when the visitor changes layout mode from inside the artistic visual index?

A) Apply the new mode, preserve the current section, close the index, and move focus to the main content context (recommended)
B) Apply the new mode and keep the index open so the visitor can select another chapter
C) Apply the new mode, close the index, and always navigate to Home
D) Prevent layout switching while the full-screen index is open
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 4

How should invalid direct hashes behave under the artistic shell?

A) Preserve existing behavior: invalid section hashes resolve to the first enabled section, while unknown journal slugs show the artistic not-found view with a return action (recommended)
B) Show one generic artistic not-found page for invalid sections and journal slugs
C) Redirect every invalid hash to the artistic Opening chapter without a not-found state
D) Remove the invalid hash and keep the currently visible content
X) Other (please describe after [Answer]: tag below)

[Answer]: A

### Question 5

How should the artistic header determine the current chapter in single-page mode?

A) Reuse the existing active `SectionId` from `useActiveSection` and map it to the artistic label; keep active-section calculation shared across templates (recommended)
B) Add an artistic-only observer that selects the section occupying the largest viewport area
C) Use the most recently selected visual-index destination until another destination is selected
D) Show only a generic Exhibition label in single-page mode
X) Other (please describe after [Answer]: tag below)

[Answer]: A

## Artifact Generation Checklist

### Step 1: Validate Decisions

- [x] Read every completed `[Answer]:` tag.
- [x] Validate answers for ambiguity and contradiction.
- [x] Create clarification questions if any functional behavior remains unclear; none were required.
- [x] Record the resolved functional approach.

### Step 2: Model Business Logic

- [x] Generate `business-logic-model.md` with shell composition, navigation, route, and metadata workflows.
- [x] Include validated diagrams and matching text alternatives for complex flows.
- [x] Define success and failure paths without infrastructure detail.

### Step 3: Define Business Rules

- [x] Generate `business-rules.md` with contract, navigation, focus, routing, identifier, resolver, and isolation rules.
- [x] Define validation and deterministic fallback behavior.
- [x] Map rules to ATR-U1 stories and requirements.

### Step 4: Define Domain Entities

- [x] Generate `domain-entities.md` with entities, value objects, relationships, invariants, and state transitions.
- [x] Cover template definition, shell context, chapter definition, artistic configuration, and resolved presentation.

### Step 5: Define Frontend Components

- [x] Generate `frontend-components.md` with hierarchy, props, state, user interactions, validation, and browser integration points.
- [x] Define App, EngineeringShell, ArtisticShell, Header, VisualIndex, and resolver boundaries.

### Step 6: Validate and Track

- [x] Verify all primary stories and ATR-U1 functional requirements are covered.
- [x] Validate Markdown and Mermaid content.
- [x] Mark plan checkboxes immediately as work completes.
- [x] Update `aidlc-docs/aidlc-state.md` and append events to `aidlc-docs/audit.md`.

## Mandatory Artifacts

- [x] `aidlc-docs/construction/atr-u1-template-shell-configuration/functional-design/business-logic-model.md`
- [x] `aidlc-docs/construction/atr-u1-template-shell-configuration/functional-design/business-rules.md`
- [x] `aidlc-docs/construction/atr-u1-template-shell-configuration/functional-design/domain-entities.md`
- [x] `aidlc-docs/construction/atr-u1-template-shell-configuration/functional-design/frontend-components.md`

## Approval Gate

All five functional questions must be answered and validated before the four Functional Design artifacts are generated.

## Extension Rule Compliance

| Extension              | Status   | Rationale                                                                       |
| ---------------------- | -------- | ------------------------------------------------------------------------------- |
| Security Baseline      | Disabled | Disabled during Requirements Analysis; no security extension constraints apply. |
| Property-Based Testing | Disabled | Disabled during Requirements Analysis; no PBT extension constraints apply.      |
