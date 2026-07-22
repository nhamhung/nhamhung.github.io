# User Stories - Artistic Template Presentation Redesign

## Story Organization

The stories use the approved hybrid user-journey and feature approach. They begin with student configuration, follow the visitor through the artistic exhibition, and end with accessibility, routing, regression, and delivery safeguards.

## US-01: Select and Configure the Artistic Template

**As a** student portfolio owner,  
**I want** to select the artistic template and optionally tune its presentation,  
**so that** I can create a distinctive portfolio without duplicating my content or editing React components.

### Acceptance Criteria

- [ ] The student can select `artistic` from the documented template configuration file.
- [ ] The artistic and engineering templates consume the same profile, career, project, gallery, journal, skill, and contact data.
- [ ] Optional artistic metadata supports a creative statement, featured work, image treatment, and accent color.
- [ ] Every optional field has a deterministic fallback derived from existing data or the artistic default palette.
- [ ] Existing student data remains valid when all artistic metadata is absent.
- [ ] The site does not expose a visitor-facing runtime template switcher.

### Selected Scenario: Missing Optional Metadata

**Given** a student selects the artistic template without adding artistic metadata,  
**When** the portfolio renders,  
**Then** it derives the creative statement and featured work from existing data and uses stable visual defaults.

### Requirement Mapping

- FR-01, FR-02, FR-24, FR-25, FR-26
- NFR-15, NFR-17

### Personas

- Primary: P-01 Student Portfolio Owner, P-04 Student Template Maintainer
- Indirect: P-02 Portfolio Visitor, P-03 Accessibility-Conscious Visitor

### INVEST Check

- **Independent**: Configuration and fallback behavior can be tested separately from final visual composition.
- **Negotiable**: Exact optional field names and storage location remain design decisions.
- **Valuable**: Keeps artistic customization approachable for students.
- **Estimable**: Bounded to typed configuration, fallback resolution, and documentation.
- **Small**: Focused on selection and presentation metadata.
- **Testable**: Tests can render with complete, partial, and absent metadata.

## US-02: Encounter a Distinct Editorial Opening

**As a** portfolio visitor,  
**I want** an editorial opening that introduces the student's identity and creative perspective,  
**so that** I immediately understand that this is a curated artistic portfolio rather than the engineering layout.

### Acceptance Criteria

- [ ] The artistic first viewport is structurally distinct from the engineering Hero.
- [ ] The opening derives identity, role, statement, and primary actions from shared profile, hero, and about data.
- [ ] Typography, image composition, and pacing establish the editorial exhibition concept.
- [ ] The student's name or identity is a clear first-viewport signal on mobile and desktop.
- [ ] Resume and primary work actions remain available without obscuring the introduction.
- [ ] Text and media maintain readable contrast, meaningful alternatives, and stable responsive dimensions.

### Requirement Mapping

- FR-03, FR-08, FR-27
- NFR-03, NFR-04, NFR-07, NFR-08, NFR-09

### Personas

- Primary: P-02 Portfolio Visitor
- Supporting: P-03 Accessibility-Conscious Visitor, P-04 Student Template Maintainer

### INVEST Check

- **Independent**: The opening can be designed and verified separately from later chapters.
- **Negotiable**: Exact image placement and typographic scale remain design choices.
- **Valuable**: Communicates the template's artistic purpose immediately.
- **Estimable**: Bounded to one opening composition and shared data mapping.
- **Small**: Focused on first-viewport introduction.
- **Testable**: DOM and visual checks can verify content, actions, and responsive framing.

## US-03: Navigate Through a Full-Screen Visual Index

**As a** portfolio visitor,  
**I want** a compact editorial header and full-screen visual index,  
**so that** I can see the whole exhibition and move directly to any enabled chapter.

### Acceptance Criteria

- [ ] The artistic template provides its own compact header instead of the engineering Navbar.
- [ ] The header displays the student's identity, current chapter, and a clearly labeled index trigger.
- [ ] The full-screen index includes every enabled destination plus theme and layout controls.
- [ ] The current chapter is identified visually and programmatically.
- [ ] Opening the index moves focus into it; closing returns focus to the trigger.
- [ ] Escape closes the index, keyboard focus cannot move behind it while open, and navigation closes it after selection.
- [ ] Focus indicators, labels, contrast, and mobile touch targets remain clear.

### Selected Scenario: Keyboard Index Navigation

**Given** a visitor is focused on the index trigger,  
**When** they open the index, choose a chapter using the keyboard, and activate it,  
**Then** the index closes, the destination becomes active, and focus or reading context moves predictably to that chapter.

### Selected Scenario: Dismiss the Index

**Given** the visual index is open,  
**When** the visitor presses Escape,  
**Then** the index closes and focus returns to the trigger without changing the current chapter.

### Requirement Mapping

- FR-04, FR-05, FR-06, FR-07
- NFR-01, NFR-02, NFR-04, NFR-07, NFR-08

### Personas

- Primary: P-02 Portfolio Visitor, P-03 Accessibility-Conscious Visitor
- Supporting: P-04 Student Template Maintainer

### INVEST Check

- **Independent**: Index interaction can be built and tested against the existing navigation contract.
- **Negotiable**: Menu composition and transition details remain flexible.
- **Valuable**: Makes the new information architecture discoverable.
- **Estimable**: Bounded to artistic header, overlay, focus, and destination behavior.
- **Small**: Focused on global artistic navigation.
- **Testable**: Interaction tests can verify focus, dismissal, destinations, and active state.

## US-04: Maintain Chapter Awareness

**As a** portfolio visitor,  
**I want** the artistic shell to show which chapter I am viewing,  
**so that** the exhibition remains understandable while I scroll or open a routed page directly.

### Acceptance Criteria

- [ ] Single-page scrolling updates the current chapter as the visitor enters each artistic composition.
- [ ] Multi-page routes show the routed chapter as current immediately after direct loading.
- [ ] Grouped information such as Formation and Practice still exposes the relevant education, experience, and awards destinations.
- [ ] Chapter labels remain meaningful when existing section IDs are retained for compatibility.
- [ ] Current-state presentation does not depend only on color.

### Requirement Mapping

- FR-05, FR-12, FR-20, FR-21
- NFR-01, NFR-04, NFR-07

### Personas

- Primary: P-02 Portfolio Visitor
- Supporting: P-03 Accessibility-Conscious Visitor, P-04 Student Template Maintainer

### INVEST Check

- **Independent**: Active chapter derivation can be verified separately from gallery interactions.
- **Negotiable**: Chapter naming and grouping can be refined during design.
- **Valuable**: Prevents visitors from becoming lost in a nontraditional layout.
- **Estimable**: Bounded to section-to-chapter mapping and active state.
- **Small**: Focused on orientation.
- **Testable**: Tests can assert current labels for scroll and direct-route states.

## US-05: Browse Selected Works Horizontally

**As a** portfolio visitor,  
**I want** to browse selected projects through an accessible horizontal rail,  
**so that** I can inspect work in a visually led sequence without losing project evidence or actions.

### Acceptance Criteria

- [ ] Selected Works is derived from shared project data and optional featured-work metadata.
- [ ] The rail uses native horizontal scrolling and stable scroll-snap positions.
- [ ] Visible previous and next controls move by a predictable item or viewport interval.
- [ ] Keyboard and touch users can reach every project without precision gestures.
- [ ] The interface communicates when more work exists before or after the current position.
- [ ] Vertical wheel scrolling is not hijacked into forced horizontal movement.
- [ ] Project descriptions, technologies, repository/demo actions, and meaningful image alternatives remain available.
- [ ] Offscreen project media uses lazy loading where it does not break rail behavior.

### Selected Scenario: Keyboard Rail Browsing

**Given** focus is within the Selected Works rail,  
**When** the visitor activates the next control or supported arrow-key behavior,  
**Then** the next project becomes visible at a stable snap position and focus remains predictable.

### Selected Scenario: Rail Boundary

**Given** the rail is positioned at its final project,  
**When** the visitor reaches the end,  
**Then** the interface indicates there is no later item while keeping previous navigation available.

### Requirement Mapping

- FR-09, FR-13, FR-14, FR-15, FR-27
- NFR-01, NFR-03, NFR-06, NFR-07, NFR-08, NFR-09, NFR-11

### Personas

- Primary: P-02 Portfolio Visitor, P-03 Accessibility-Conscious Visitor
- Supporting: P-04 Student Template Maintainer

### INVEST Check

- **Independent**: A reusable rail can be developed using project data before final gallery styling.
- **Negotiable**: Card width, snap interval, and control placement remain design decisions.
- **Valuable**: Gives creative work a presentation model distinct from engineering cards.
- **Estimable**: Bounded to one data-backed horizontal interaction.
- **Small**: Focused on project browsing.
- **Testable**: DOM and browser checks can verify controls, overflow, snap, and content reachability.

## US-06: Explore the Visual Archive

**As a** portfolio visitor,  
**I want** a horizontal visual archive with inspectable images and captions,  
**so that** I can experience the student's media as a curated sequence rather than a conventional grid.

### Acceptance Criteria

- [ ] Gallery data renders in an artistic horizontal archive with native scrolling and snap behavior.
- [ ] Visible controls, touch gestures, and keyboard operation can reach every item.
- [ ] Portrait and landscape treatments use optional metadata or stable fallbacks without clipping essential content.
- [ ] Every image retains its configured alternative text, title, and description.
- [ ] Opening an image preview is keyboard operable and returns focus to the originating item when closed.
- [ ] Media dimensions remain stable during loading and offscreen images are lazy loaded where appropriate.
- [ ] The archive does not trap focus or force vertical wheel movement horizontally.

### Selected Scenario: Open and Close an Archive Image

**Given** a visitor has focused an archive item,  
**When** they open and then close its preview,  
**Then** the full image and caption are available and focus returns to the same archive item.

### Requirement Mapping

- FR-12, FR-13, FR-14, FR-15
- NFR-01, NFR-03, NFR-06, NFR-07, NFR-08, NFR-09, NFR-11

### Personas

- Primary: P-02 Portfolio Visitor, P-03 Accessibility-Conscious Visitor
- Supporting: P-04 Student Template Maintainer

### INVEST Check

- **Independent**: The archive can reuse rail behavior while retaining separate media preview criteria.
- **Negotiable**: Image proportions and caption placement remain design choices.
- **Valuable**: Creates a gallery-led artistic identity.
- **Estimable**: Bounded to gallery data, horizontal browsing, and preview behavior.
- **Small**: Focused on visual archive exploration.
- **Testable**: Tests can verify reachability, captions, previews, and focus return.

## US-07: Explore Formation and Practice

**As a** portfolio visitor,  
**I want** education, experience, and awards presented as an editorial narrative,  
**so that** I can understand how the student's practice developed without reading engineering-style card sections.

### Acceptance Criteria

- [ ] All enabled education, experience, and award entries remain discoverable.
- [ ] Formation and Practice use a composition distinct from the engineering cards or timeline.
- [ ] Dates, institutions, organizations, roles, descriptions, and supporting logos remain accurate.
- [ ] Visual grouping preserves a logical reading order on mobile, desktop, and assistive technology.
- [ ] The chapter remains usable without hover or animation.

### Requirement Mapping

- FR-03, FR-12
- NFR-03, NFR-04, NFR-07, NFR-08, NFR-09

### Personas

- Primary: P-02 Portfolio Visitor
- Supporting: P-03 Accessibility-Conscious Visitor, P-04 Student Template Maintainer

### INVEST Check

- **Independent**: Career evidence can be composed separately from project and gallery rails.
- **Negotiable**: Editorial timeline or sequence treatment remains a design decision.
- **Valuable**: Preserves professional credibility inside the artistic narrative.
- **Estimable**: Bounded to three existing data groups.
- **Small**: Focused on formation and practice evidence.
- **Testable**: Content and responsive reading order can be verified.

## US-08: Follow Process Notes and Journal Writing

**As a** portfolio visitor,  
**I want** local and external writing presented as part of the student's creative process,  
**so that** I can understand the thinking behind the visible work.

### Acceptance Criteria

- [ ] Process Notes derives content from local journal posts and external writing entries.
- [ ] Local and external sources remain clearly distinguishable before activation.
- [ ] Local posts open in an artistic reading view with title, metadata, topics, image, and full content.
- [ ] External posts retain their original external destinations.
- [ ] Direct local journal hashes render the correct post and unknown slugs retain a graceful not-found state.
- [ ] The visitor can return to Process Notes or Journal without losing the artistic shell.
- [ ] Reading layouts remain responsive, keyboard accessible, and readable with reduced motion.

### Requirement Mapping

- FR-10, FR-12, FR-22, FR-23, FR-27
- NFR-01, NFR-03, NFR-04, NFR-05, NFR-07, NFR-08, NFR-19

### Personas

- Primary: P-02 Portfolio Visitor, P-03 Accessibility-Conscious Visitor
- Supporting: P-01 Student Portfolio Owner, P-04 Student Template Maintainer

### INVEST Check

- **Independent**: Writing presentation can be tested against existing journal routes.
- **Negotiable**: Card and reading-page composition remain design choices.
- **Valuable**: Connects creative output to process and reflection.
- **Estimable**: Bounded to existing writing data and route behavior.
- **Small**: Focused on process writing discovery and reading.
- **Testable**: Tests can cover source labels, local routes, external URLs, and fallback states.

## US-09: Inspect Materials, Capabilities, and Evidence

**As a** portfolio visitor,  
**I want** skills and certificates framed as materials and capabilities,  
**so that** I can understand what the student works with and inspect supporting evidence.

### Acceptance Criteria

- [ ] Every enabled skill group remains available in the artistic presentation.
- [ ] Skill and technology language is presented as part of practice rather than an engineering dashboard.
- [ ] Certificate metadata, issuer, description, and preview/download behavior remain functional.
- [ ] Certificate controls have meaningful labels, visible focus, and non-hover access.
- [ ] Missing or unsupported PDF previews retain a clear fallback action.

### Requirement Mapping

- FR-12, FR-27
- NFR-01, NFR-04, NFR-07, NFR-08

### Personas

- Primary: P-02 Portfolio Visitor
- Supporting: P-03 Accessibility-Conscious Visitor, P-04 Student Template Maintainer

### INVEST Check

- **Independent**: Capabilities and certificate behavior can be verified separately from navigation.
- **Negotiable**: Grouping and visual vocabulary remain design decisions.
- **Valuable**: Preserves evidence important to reviewers and employers.
- **Estimable**: Bounded to existing skills and certificate data.
- **Small**: Focused on capabilities and credentials.
- **Testable**: Tests can assert labels, metadata, and preview fallback actions.

## US-10: Reach the Closing Contact Canvas

**As a** portfolio visitor,  
**I want** a clear closing composition with contact, social, and resume actions,  
**so that** I can respond after exploring the student's work.

### Acceptance Criteria

- [ ] The Closing Contact canvas is visually distinct from the engineering Contact section.
- [ ] It derives the student's name, email, social links, location, and resume from shared data.
- [ ] Resume download preserves its configured filename.
- [ ] Social and project-adjacent external actions use correct destinations and accessible labels.
- [ ] The mailto contact workflow remains functional without a backend.
- [ ] All actions remain reachable by keyboard and touch and do not rely on hover.

### Requirement Mapping

- FR-11, FR-27
- NFR-01, NFR-04, NFR-07, NFR-08, NFR-10

### Personas

- Primary: P-01 Student Portfolio Owner, P-02 Portfolio Visitor, P-03 Accessibility-Conscious Visitor
- Supporting: P-04 Student Template Maintainer

### INVEST Check

- **Independent**: Closing actions can be implemented using existing profile and contact behavior.
- **Negotiable**: Composition and action hierarchy remain design choices.
- **Valuable**: Converts portfolio interest into a practical next step.
- **Estimable**: Bounded to one closing chapter and existing actions.
- **Small**: Focused on contact and response.
- **Testable**: Tests can assert hrefs, labels, downloads, and keyboard reachability.

## US-11: Receive an Equivalent Reduced-Motion Experience

**As an** accessibility-conscious visitor,  
**I want** artistic motion to respect my reduced-motion preference,  
**so that** I can consume the same information without parallax, continuous motion, or disorienting transitions.

### Acceptance Criteria

- [ ] Normal mode may use entrance reveals, restrained parallax, hover/focus detail, and chapter transitions.
- [ ] Essential content and controls are present before and after animation and do not depend on motion to become operable.
- [ ] `prefers-reduced-motion: reduce` removes parallax, continuous animation, and large spatial transitions.
- [ ] Reduced-motion mode preserves chapter context, rail controls, previews, and navigation feedback.
- [ ] Animation favors transform and opacity and avoids continuous layout-triggering work.
- [ ] Motion does not automatically advance galleries or take control away from the visitor.

### Selected Scenario: Reduced Motion on Initial Load

**Given** the visitor has enabled reduced motion at the operating-system level,  
**When** the artistic portfolio loads and they navigate between chapters,  
**Then** all content and controls remain available without parallax, continuous animation, or large spatial transitions.

### Requirement Mapping

- FR-16, FR-17, FR-18
- NFR-05, NFR-12

### Personas

- Primary: P-03 Accessibility-Conscious Visitor
- Supporting: P-02 Portfolio Visitor, P-04 Student Template Maintainer

### INVEST Check

- **Independent**: Motion preference can be represented as a cross-template artistic behavior and tested separately.
- **Negotiable**: Exact easing and duration remain design choices for normal mode.
- **Valuable**: Makes the artistic experience comfortable and inclusive.
- **Estimable**: Bounded to motion tokens, CSS media queries, and interaction fallbacks.
- **Small**: Focused on motion equivalence.
- **Testable**: Browser and style checks can emulate the media preference and inspect behavior.

## US-12: Use Both Layout Modes and Direct Routes

**As a** portfolio visitor,  
**I want** artistic navigation to work in continuous and routed layouts,  
**so that** I can browse freely or open a shared chapter or journal link directly.

### Acceptance Criteria

- [ ] Single-page mode renders the continuous artistic exhibition and updates active chapter state.
- [ ] Multi-page mode renders one destination with the artistic header and visual index.
- [ ] Theme and layout controls remain available from the artistic index in both modes.
- [ ] Existing section hashes and local journal hashes remain GitHub Pages-safe.
- [ ] Loading a valid direct hash renders the expected destination without first visiting Home.
- [ ] Invalid section and journal hashes preserve existing safe fallback behavior.
- [ ] Switching layout mode retains the most relevant current destination.

### Selected Scenario: Switch to Multi-Page Mode

**Given** a visitor is viewing Selected Works in single-page mode,  
**When** they switch to multi-page mode,  
**Then** the URL becomes the corresponding routed hash and Selected Works remains the visible destination inside the artistic shell.

### Selected Scenario: Direct Journal Link

**Given** a visitor opens a valid local journal hash directly,  
**When** the app initializes with the artistic template,  
**Then** the artistic reading view renders the requested post and provides a working return path.

### Requirement Mapping

- FR-19, FR-20, FR-21, FR-22, FR-23
- NFR-07, NFR-15, NFR-19

### Personas

- Primary: P-02 Portfolio Visitor, P-03 Accessibility-Conscious Visitor
- Supporting: P-04 Student Template Maintainer

### INVEST Check

- **Independent**: Layout and hash behavior can be tested against artistic shell contracts.
- **Negotiable**: Transition treatment between modes remains flexible.
- **Valuable**: Preserves shareable navigation and visitor choice.
- **Estimable**: Bounded to existing layout state and new artistic shell integration.
- **Small**: Focused on layout and routing continuity.
- **Testable**: Integration tests can initialize hashes, switch modes, and inspect visible content.

## US-13: Maintain and Publish Both Templates Safely

**As a** student template maintainer,  
**I want** typed template boundaries, regression tests, documentation, and static delivery checks,  
**so that** the artistic redesign does not damage the engineering template or make the project harder for students to publish.

### Acceptance Criteria

- [ ] Template-specific shell and navigation behavior is represented through typed contracts rather than scattered template ID checks.
- [ ] Artistic CSS, motion, and components remain scoped and do not alter engineering rendering or behavior.
- [ ] Both templates provide every required section or chapter mapping.
- [ ] Existing content validation, navigation, layout, journal, resume, and link tests continue to pass.
- [ ] New tests cover artistic shell resolution, index focus and navigation, rail controls, reduced-motion behavior where testable, both layouts, and journal routes.
- [ ] The production remains a frontend-only Vite build deployable to GitHub Pages.
- [ ] A new animation dependency is added only with documented justification and no unnecessary bundle regression.
- [ ] Test, TypeScript, lint, and production build commands pass.
- [ ] Desktop and mobile visual checks cover both color modes and verify no overlap, clipping, blank media, hidden horizontal content, or incoherent motion.
- [ ] Student documentation explains template selection, optional artistic metadata, image guidance, both layout modes, and verification commands.

### Selected Scenario: Engineering Regression

**Given** the configured template is changed from artistic to engineering,  
**When** the app is rendered and verified,  
**Then** the existing engineering shell, navigation, sections, layout modes, routes, and actions remain functional and free of artistic presentation leakage.

### Requirement Mapping

- FR-01, FR-02, FR-22, FR-26, FR-27, FR-28
- NFR-10, NFR-13, NFR-14, NFR-15, NFR-16, NFR-17, NFR-18, NFR-19, NFR-20

### Personas

- Primary: P-04 Student Template Maintainer, P-01 Student Portfolio Owner
- Indirect: P-02 Portfolio Visitor, P-03 Accessibility-Conscious Visitor

### INVEST Check

- **Independent**: Verification and documentation can be evaluated after each implementation unit.
- **Negotiable**: Exact test partitioning and visual-check tooling remain implementation decisions.
- **Valuable**: Protects the reusable student template and deployment path.
- **Estimable**: Bounded to typed contracts, regression coverage, documentation, and delivery checks.
- **Small**: Focused on maintainability and release readiness rather than artistic feature design.
- **Testable**: Automated commands and viewport checks provide objective evidence.

## Coverage Summary

| Journey Stage | Stories |
|---|---|
| Student setup | US-01 |
| Visitor arrival and orientation | US-02, US-03, US-04 |
| Work and evidence exploration | US-05, US-06, US-07, US-08, US-09 |
| Response and contact | US-10 |
| Accessibility and motion | US-03, US-05, US-06, US-08, US-10, US-11 |
| Layout and direct navigation | US-12 |
| Regression, documentation, and delivery | US-13 |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Disabled during Requirements Analysis; no security extension constraints apply. |
| Property-Based Testing | Disabled | Disabled during Requirements Analysis; no PBT extension constraints apply. |
