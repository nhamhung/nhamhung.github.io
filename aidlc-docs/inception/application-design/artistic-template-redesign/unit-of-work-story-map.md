# Unit Story Map - Artistic Template Presentation Redesign

## Mapping Rules

- Every user story has exactly one primary implementation unit.
- Supporting units may provide contracts, integration, or verification but do not duplicate primary ownership.
- ATR-U3 supports acceptance verification for all stories while owning only the maintainability and delivery story.

## Story-to-Unit Map

| Story | Primary Unit | Supporting Units | Primary Deliverable |
|---|---|---|---|
| US-01 Select and Configure the Artistic Template | ATR-U1 | ATR-U3 | Typed template selection, optional artistic config, stable IDs, and deterministic fallbacks |
| US-02 Encounter a Distinct Editorial Opening | ATR-U2 | ATR-U1, ATR-U3 | Artistic Opening and Studio Statement compositions |
| US-03 Navigate Through a Full-Screen Visual Index | ATR-U1 | ATR-U2, ATR-U3 | Artistic header, accessible visual index, and shared navigation delegation |
| US-04 Maintain Chapter Awareness | ATR-U1 | ATR-U2, ATR-U3 | Stable chapter labels, active state, and route-compatible mapping |
| US-05 Browse Selected Works Horizontally | ATR-U2 | ATR-U1, ATR-U3 | Project rail, controls, snap behavior, and preserved project actions |
| US-06 Explore the Visual Archive | ATR-U2 | ATR-U1, ATR-U3 | Gallery rail, image treatment, preview, captions, and focus return |
| US-07 Explore Formation and Practice | ATR-U2 | ATR-U1, ATR-U3 | Formation, Practice, and Recognition editorial chapters |
| US-08 Follow Process Notes and Journal Writing | ATR-U2 | ATR-U1, ATR-U3 | Process Notes and artistic local journal detail/fallback views |
| US-09 Inspect Materials, Capabilities, and Evidence | ATR-U2 | ATR-U3 | Materials chapter with skill and certificate behavior |
| US-10 Reach the Closing Contact Canvas | ATR-U2 | ATR-U3 | Closing composition with resume, social, email, and contact actions |
| US-11 Receive an Equivalent Reduced-Motion Experience | ATR-U2 | ATR-U1, ATR-U3 | Motion preference, reveal primitives, and reduced-motion behavior |
| US-12 Use Both Layout Modes and Direct Routes | ATR-U1 | ATR-U2, ATR-U3 | App/Shell integration for layouts, sections, and journal hashes |
| US-13 Maintain and Publish Both Templates Safely | ATR-U3 | ATR-U1, ATR-U2 | Integrated regression, visual verification, docs, and release gates |

## Primary Story Coverage by Unit

### ATR-U1: Template Shell and Configuration Foundation

- US-01: Student configuration and fallback safety.
- US-03: Full-screen visual index and template-specific navigation.
- US-04: Active artistic chapter awareness.
- US-12: Layout modes and direct routes.

### ATR-U2: Artistic Exhibition and Interaction System

- US-02: Editorial opening.
- US-05: Selected Works rail.
- US-06: Visual Archive rail.
- US-07: Formation and Practice.
- US-08: Process Notes and journal reading.
- US-09: Materials and evidence.
- US-10: Closing Contact.
- US-11: Motion and reduced-motion equivalence.

### ATR-U3: Verification and Student Enablement

- US-13: Maintainability, documentation, regression, and static delivery.

## Functional Requirement Map

| Requirement | Primary Unit | Supporting Unit | Rationale |
|---|---|---|---|
| FR-01 | ATR-U1 | ATR-U3 | Registry and EngineeringShell preserve engineering; Unit 3 verifies regression |
| FR-02 | ATR-U1 | ATR-U2, ATR-U3 | Shared data contract is foundational; artistic chapters consume and tests verify it |
| FR-03 | ATR-U2 | ATR-U3 | Editorial exhibition is implemented in artistic chapters and visually verified |
| FR-04 | ATR-U1 | ATR-U3 | Typed Shell contract enables template-specific framing |
| FR-05 | ATR-U1 | ATR-U2, ATR-U3 | Header and labels are foundational; chapters and tests consume them |
| FR-06 | ATR-U1 | ATR-U3 | Visual index and controls belong to shell foundation |
| FR-07 | ATR-U1 | ATR-U3 | Focus, dismissal, and current-state behavior belong to visual index |
| FR-08 | ATR-U2 | ATR-U1, ATR-U3 | Opening consumes Unit 1 resolved statement and Unit 3 verifies it |
| FR-09 | ATR-U2 | ATR-U1, ATR-U3 | Selected Works consumes stable IDs/resolver and receives integrated checks |
| FR-10 | ATR-U2 | ATR-U1, ATR-U3 | Process Notes consumes shared routes and receives route verification |
| FR-11 | ATR-U2 | ATR-U3 | Closing composition preserves contact actions and receives regression checks |
| FR-12 | ATR-U2 | ATR-U3 | Artistic chapters preserve all existing information; Unit 3 verifies completeness |
| FR-13 | ATR-U2 | ATR-U3 | Rail primitive implements native scrolling and snap |
| FR-14 | ATR-U2 | ATR-U3 | Rail controls, keyboard, touch, and continuation state are interaction behavior |
| FR-15 | ATR-U2 | ATR-U3 | No wheel hijacking is implemented and verified in rail behavior |
| FR-16 | ATR-U2 | ATR-U3 | Artistic motion primitives implement editorial effects |
| FR-17 | ATR-U2 | ATR-U3 | Progressive enhancement is owned by reveal/chapter components |
| FR-18 | ATR-U2 | ATR-U3 | Reduced-motion service and CSS implement equivalent behavior |
| FR-19 | ATR-U1 | ATR-U2, ATR-U3 | Shell contract supports both layouts; chapters and tests validate it |
| FR-20 | ATR-U1 | ATR-U2, ATR-U3 | App and active-section services own continuous layout behavior |
| FR-21 | ATR-U1 | ATR-U2, ATR-U3 | App/Shell integration owns routed layout behavior |
| FR-22 | ATR-U1 | ATR-U2, ATR-U3 | Shared hash behavior remains foundational and is consumed/verified later |
| FR-23 | ATR-U1 | ATR-U2, ATR-U3 | Template journal-view contract is foundational; artistic view is Unit 2 |
| FR-24 | ATR-U1 | ATR-U2, ATR-U3 | Optional metadata type/config belongs to foundation |
| FR-25 | ATR-U1 | ATR-U2, ATR-U3 | Resolver fallbacks belong to foundation and are consumed/verified later |
| FR-26 | ATR-U1 | ATR-U3 | Template remains selected through student-editable config |
| FR-27 | ATR-U2 | ATR-U1, ATR-U3 | Artistic components preserve actions using Unit 1 contracts; Unit 3 verifies |
| FR-28 | ATR-U3 | ATR-U1, ATR-U2 | Documentation describes the final implemented contracts and experience |

## Non-Functional Requirement Map

| Requirement | Primary Unit | Supporting Unit | Rationale |
|---|---|---|---|
| NFR-01 | ATR-U1 | ATR-U2, ATR-U3 | Shell/index establish keyboard conventions; artistic interactions and final tests extend them |
| NFR-02 | ATR-U1 | ATR-U3 | Visual-index Dialog owns focus containment and return |
| NFR-03 | ATR-U2 | ATR-U3 | Artistic media and chapter semantics preserve alternatives |
| NFR-04 | ATR-U2 | ATR-U1, ATR-U3 | Artistic components own contrast; shell and final visual checks support |
| NFR-05 | ATR-U2 | ATR-U3 | Reduced-motion implementation and verification |
| NFR-06 | ATR-U2 | ATR-U3 | Rail reachability and no focus/touch traps |
| NFR-07 | ATR-U2 | ATR-U1, ATR-U3 | Chapter/rail responsiveness with shell foundation and final checks |
| NFR-08 | ATR-U2 | ATR-U1, ATR-U3 | Mobile chapter controls with shell and final touch-target verification |
| NFR-09 | ATR-U2 | ATR-U3 | Stable media/card dimensions and layout-shift verification |
| NFR-10 | ATR-U1 | ATR-U3 | Architecture remains one static app and final build confirms it |
| NFR-11 | ATR-U2 | ATR-U3 | Artistic media uses appropriate lazy loading |
| NFR-12 | ATR-U2 | ATR-U3 | Motion uses transform/opacity and receives visual/performance checks |
| NFR-13 | ATR-U1 | ATR-U3 | Foundation confirms no animation dependency; Unit 3 checks package/build impact |
| NFR-14 | ATR-U3 | ATR-U1, ATR-U2 | Final production build and bundle warning assessment |
| NFR-15 | ATR-U1 | ATR-U3 | Typed contracts isolate shell behavior |
| NFR-16 | ATR-U1 | ATR-U2, ATR-U3 | Foundation establishes isolation, presentation scopes CSS, final tests verify |
| NFR-17 | ATR-U1 | ATR-U3 | Pure deterministic resolver and fallback tests |
| NFR-18 | ATR-U3 | ATR-U1, ATR-U2 | Final regression gate includes existing validation tests |
| NFR-19 | ATR-U3 | ATR-U1, ATR-U2 | Integrated test suite covers shell, rails, motion, layouts, and journal |
| NFR-20 | ATR-U3 | ATR-U1, ATR-U2 | Desktop/mobile visual verification owns final overlap/media checks |

## Application Design Component Map

| Design Component or Service | Owning Unit |
|---|---|
| App shell integration | ATR-U1 |
| PortfolioTemplate and PortfolioShell contracts | ATR-U1 |
| EngineeringShell | ATR-U1 |
| ArtisticShell, ArtisticHeader, ArtisticVisualIndex | ATR-U1 |
| Chapter labels and artistic presentation resolver | ATR-U1 |
| Stable project identity and artistic config | ATR-U1 |
| ArtisticChapterFrame and all ten artistic route components | ATR-U2 |
| ArtisticRail and useHorizontalRail | ATR-U2 |
| Motion preference, reveal, and observer hooks | ATR-U2 |
| ArtisticJournalPostPage | ATR-U2 |
| Cross-template integration helpers | ATR-U3 |
| Responsive visual verification | ATR-U3 |
| Student README and build/test evidence | ATR-U3 |

## Coverage Validation

- **Stories**: 13 of 13 have exactly one primary unit.
- **Functional Requirements**: FR-01 through FR-28 have a primary unit.
- **Non-Functional Requirements**: NFR-01 through NFR-20 have a primary unit.
- **Application Design Components**: Every designed component/service has an owning unit.
- **Unassigned Scope**: None.

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Disabled during Requirements Analysis; no security extension constraints apply. |
| Property-Based Testing | Disabled | Disabled during Requirements Analysis; no PBT extension constraints apply. |
