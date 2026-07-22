# Functional Design Plan - ATR-U2 Artistic Exhibition and Interaction System

> **Status: Superseded on 2026-07-19.** The user replaced the exhibition-system scope with a simpler three-template model: Engineering, Neutral, and Business. No ATR-U2 application code was generated from this plan. Replacement requirements: `aidlc-docs/inception/requirements/three-template-simplification-requirements.md`.

## Plan Authority

This plan governs Functional Design for ATR-U2. It defines the detailed behavior of the artistic chapters, reusable rails, motion primitives, media previews, artistic journal reader, materials evidence, and closing contact experience. Application code will not change during this stage.

## Unit Context

- **Unit ID**: ATR-U2
- **Unit name**: Artistic Exhibition and Interaction System
- **Dependency**: Approved ATR-U1 shell, route, chapter-label, stable-ID, and presentation-resolver contracts
- **Primary stories**: US-02, US-05, US-06, US-07, US-08, US-09, US-10, US-11
- **Supporting stories**: US-03, US-04, US-12, US-13
- **Infrastructure Design**: Skipped; no infrastructure changes
- **Extensions**: Security Baseline and Property-Based Testing remain disabled

## Planning Checklist

### Step 1: Analyze Unit Context

- [x] Read the ATR-U2 unit definition, responsibilities, boundaries, entry gate, and exit gate.
- [x] Read ATR-U2 primary and supporting story ownership.
- [x] Read approved artistic component, method, service, and requirement contracts.
- [x] Confirm ATR-U1 exit evidence satisfies the ATR-U2 entry gate.
- [x] Confirm application code remains unchanged during Functional Design.

### Step 2: Resolve Functional Decisions

- [ ] Collect one valid answer for every question in this plan.
- [ ] Validate answers for completeness, ambiguity, and contradiction.
- [ ] Create targeted clarification questions if any response remains ambiguous.
- [ ] Record resolved rail, motion, preview, journal, evidence, and contact decisions.

### Step 3: Model Business Logic

- [ ] Define chapter composition workflows for all ten stable section IDs.
- [ ] Define deterministic rail target selection, boundary state, resize handling, and native-scroll behavior.
- [ ] Define motion preference, reveal-state, and progressive-enhancement workflows.
- [ ] Define image and certificate preview open, close, dismissal, and focus-return workflows.
- [ ] Define local/external writing selection, local article rendering, return navigation, and unknown-slug behavior.
- [ ] Define Closing Contact submission and preserved action behavior.

### Step 4: Define Domain Entities and Rules

- [ ] Define chapter metadata, rail item state, boundary state, activation intent, reveal state, and preview-origin entities.
- [ ] Define stable identity and ordering rules over shared portfolio data.
- [ ] Define accessibility, content completeness, reduced-motion equivalence, and no-wheel-hijacking rules.
- [ ] Define fallbacks for unavailable observers, missing media geometry, empty collections, and unsupported browser APIs.

### Step 5: Define Frontend Components

- [ ] Specify `ArtisticChapterFrame` props, semantics, focus targets, and layout behavior.
- [ ] Specify all ten artistic route components and their shared-data mappings.
- [ ] Specify generic `ArtisticRail`, rail controls, and `useHorizontalRail` contracts.
- [ ] Specify `ArtisticReveal`, motion-preference, and optional visibility-observer contracts.
- [ ] Specify `ArtisticJournalPostPage` and shared Markdown-rendering boundaries.
- [ ] Specify gallery and certificate Dialog contracts with origin focus restoration.
- [ ] Specify focused unit-test boundaries and deterministic browser-API stubs.

### Step 6: Generate and Validate Artifacts

- [ ] Create `business-logic-model.md`.
- [ ] Create `business-rules.md`.
- [ ] Create `domain-entities.md`.
- [ ] Create `frontend-components.md`.
- [ ] Validate Markdown, Mermaid diagrams if used, code blocks, traceability, and text alternatives.
- [ ] Update this plan's checkboxes immediately as each task is completed.
- [ ] Update `aidlc-docs/aidlc-state.md` and append stage events to `aidlc-docs/audit.md`.
- [ ] Present the standardized two-option Functional Design review gate without starting NFR Requirements.

## Functional Design Questions

Complete every `[Answer]:` tag with one letter. Choose `X` and add a short description when none of the listed choices fits.

## Question 1

How should each previous or next rail action choose its destination?

A) Move exactly one item and align it to the nearest snap position (recommended)
B) Move approximately one visible viewport while allowing the browser to choose the final snap position
C) Move to the previous or next named group of items
X) Other (please describe after the `[Answer]:` tag below)

[Answer]:

## Question 2

Which keyboard model should supplement native Tab navigation inside project and gallery rails?

A) Make the rail region focusable; Left and Right Arrow move one item, while Tab continues through item actions normally (recommended)
B) Use only visible previous and next buttons; do not add Arrow key behavior to the rail region
C) Use a composite widget model where Arrow keys move focus between every rail item and Tab exits the rail
X) Other (please describe after the `[Answer]:` tag below)

[Answer]:

## Question 3

How should a rail communicate available content and its boundaries?

A) Disable unavailable arrow controls and expose a readable position status such as `2 of 5`, with a subtle nonessential edge cue (recommended)
B) Disable unavailable arrow controls only
C) Keep both controls enabled and loop from the last item to the first
X) Other (please describe after the `[Answer]:` tag below)

[Answer]:

## Question 4

How should Visual Archive image previews behave?

A) Open a Chakra Dialog with the full image and caption; Escape, close, and backdrop dismissal return focus to the originating archive item (recommended)
B) Expand the selected image inline within the archive and move focus to the expanded region
C) Open the raw image asset in a new browser tab
X) Other (please describe after the `[Answer]:` tag below)

[Answer]:

## Question 5

What normal-motion model should ATR-U2 implement?

A) Reveal each chapter element once with restrained opacity/transform transitions, plus CSS hover/focus media movement; avoid continuous scroll-linked parallax (recommended)
B) Add reveal-once transitions and restrained JavaScript scroll-linked parallax to selected opening/archive media
C) Limit motion to simple opacity fades with no spatial movement
X) Other (please describe after the `[Answer]:` tag below)

[Answer]:

## Question 6

What should happen when `prefers-reduced-motion: reduce` is active?

A) Reveal all content immediately, disable parallax and large transforms, use immediate rail scrolling, and retain non-motion focus/current-state cues (recommended)
B) Keep short opacity fades but disable spatial movement and smooth scrolling
C) Remove only continuous motion while retaining reveal and smooth-scroll transitions
X) Other (please describe after the `[Answer]:` tag below)

[Answer]:

## Question 7

Which media composition should anchor the Opening chapter?

A) Use the profile image as the primary portrait with a small curated gallery sequence, preserving identity, statement, resume, and work actions in the first viewport (recommended)
B) Use one gallery image as a full-bleed background with identity and actions overlaid
C) Lead with a horizontal gallery sequence and place the profile portrait later in the chapter
X) Other (please describe after the `[Answer]:` tag below)

[Answer]:

## Question 8

How should the artistic local journal page render the same Markdown content as engineering?

A) Extract a shared pure Markdown parser/renderer boundary and give each template its own surrounding article composition (recommended)
B) Duplicate the current Markdown parsing logic inside the artistic journal page
C) Reuse the complete engineering `JournalPostPage` inside an artistic wrapper
X) Other (please describe after the `[Answer]:` tag below)

[Answer]:

## Question 9

Which interaction should the Closing Contact chapter preserve?

A) Keep the existing name, email, subject, and message form with mailto submission, alongside resume and social actions (recommended)
B) Replace the form with direct email, resume, and social links only
C) Open the existing contact form in a Dialog from a simpler closing canvas
X) Other (please describe after the `[Answer]:` tag below)

[Answer]:

## Question 10

How should certificate evidence open from the Materials chapter?

A) Use an accessible Chakra Dialog preview with explicit open-in-new-tab action and focus return to the originating certificate item (recommended)
B) Open every certificate PDF directly in a new browser tab without an in-site preview
C) Expand the certificate preview inline within Materials
X) Other (please describe after the `[Answer]:` tag below)

[Answer]:

## Planned Artifacts

- `aidlc-docs/construction/atr-u2-artistic-exhibition-interaction/functional-design/business-logic-model.md`
- `aidlc-docs/construction/atr-u2-artistic-exhibition-interaction/functional-design/business-rules.md`
- `aidlc-docs/construction/atr-u2-artistic-exhibition-interaction/functional-design/domain-entities.md`
- `aidlc-docs/construction/atr-u2-artistic-exhibition-interaction/functional-design/frontend-components.md`

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not present in this plan |
| ASCII diagrams | Not present in this plan |
| Markdown structure | Valid headings, lists, tables, and fenced inline identifiers |
| Questions | Ten questions; each has at least two meaningful choices and mandatory final `X` option |
| Answer tags | One empty `[Answer]:` tag per question |
| Paths | Application and documentation boundaries remain valid |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Disabled in approved requirements and state configuration; full extension rules do not apply. |
| Property-Based Testing | Disabled | Disabled in approved requirements and state configuration; focused deterministic tests remain planned. |
