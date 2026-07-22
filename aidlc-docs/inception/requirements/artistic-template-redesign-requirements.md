# Artistic Template Presentation Redesign Requirements

> **Status: Superseded on 2026-07-19.** The exhibition-style Artistic scope was replaced by the simpler Engineering, Neutral, and Business model. Active requirements: `aidlc-docs/inception/requirements/three-template-simplification-requirements.md`.

## Intent Analysis

- **User request**: Make the artistic template present the same portfolio information in a fundamentally different way so students can choose a genuinely diverse outlook, including horizontal galleries, animation, distinct navigation, and new sections.
- **Request type**: Brownfield user-facing presentation architecture and interaction enhancement.
- **Scope estimate**: Multiple components spanning the template contract, App shell, navigation, artistic sections, data types, styling, responsive interaction, accessibility, tests, and student documentation.
- **Complexity estimate**: Complex. The artistic template needs a different information architecture and shell while preserving shared data, direct links, static deployment, local journal routing, and two layout modes.
- **Requirements depth**: Comprehensive.

## Product Goal

The artistic template must feel like a refined editorial exhibition rather than a recolored engineering portfolio. It must organize the same student information into a visually led narrative with curated pacing, horizontal work rails, deliberate motion, and a template-specific navigation model. Students must retain one source of truth for their content and may optionally provide artistic presentation metadata.

## Users and Outcomes

### Student or Portfolio Owner

- Selects the artistic template from project configuration.
- Maintains profile, career, project, gallery, journal, skill, and contact information once.
- May add optional artistic presentation metadata without making it mandatory.
- Receives sensible visual fallbacks when optional metadata is absent.

### Portfolio Visitor

- Encounters a presentation that is structurally and behaviorally distinct from the engineering template.
- Can understand the student's identity, formation, practice, work, process, capabilities, and contact channels.
- Can navigate using a compact editorial header and full-screen visual index.
- Can operate galleries and navigation with mouse, keyboard, or touch.
- Can reduce or disable nonessential motion through operating-system preferences.

## Functional Requirements

| ID | Requirement |
|---|---|
| FR-01 | The existing `engineering` template must remain available and retain its current presentation and behavior. |
| FR-02 | The redesigned `artistic` template must consume the same core portfolio data as the engineering template and must not require duplicated profile, project, gallery, journal, or career content. |
| FR-03 | The artistic presentation must use an editorial exhibition concept with strong typography, curated pacing, media-led composition, and clear chapter transitions. |
| FR-04 | The template architecture must allow the artistic template to provide its own page shell and navigation rather than always using the shared engineering-oriented Navbar. |
| FR-05 | The artistic navigation must use a compact editorial header showing the student's identity and current chapter. |
| FR-06 | The artistic navigation must provide a full-screen visual index containing every enabled destination and controls needed for theme and layout modes. |
| FR-07 | The visual index must close after navigation, support keyboard dismissal, manage focus correctly, and indicate the current chapter. |
| FR-08 | The artistic template must introduce an Opening Statement derived from profile, hero, and about data. |
| FR-09 | The artistic template must introduce a Selected Works horizontal rail derived from project data. |
| FR-10 | The artistic template must introduce a Process and Journal sequence derived from local journal and external writing data. |
| FR-11 | The artistic template must introduce a Closing Contact canvas derived from profile, social, resume, and contact data. |
| FR-12 | Education, experience, awards, gallery media, skills, and certificates must remain discoverable in the artistic experience even when reorganized into artistic chapters or compositions. |
| FR-13 | Horizontal project and gallery rails must use native horizontal scrolling and scroll snapping. |
| FR-14 | Every horizontal rail must provide visible previous and next controls, keyboard operation, touch gestures, a meaningful reading order, and an indication that additional content is available. |
| FR-15 | Horizontal rails must not convert ordinary vertical wheel scrolling into forced horizontal movement. |
| FR-16 | The artistic template must use moderate editorial motion, including entrance reveals, restrained image parallax where appropriate, hover or focus detail, and smooth chapter transitions. |
| FR-17 | Motion must be decorative and progressive: content and navigation must remain functional if animation does not run. |
| FR-18 | The artistic template must provide a complete reduced-motion mode based on `prefers-reduced-motion`, removing parallax, continuous motion, and large spatial transitions. |
| FR-19 | The artistic template must support both existing layout modes with an artistic shell adapted to each mode. |
| FR-20 | In single-page mode, artistic chapters must form one continuous exhibition with active chapter tracking. |
| FR-21 | In multi-page mode, the artistic shell must render one routed destination while retaining its distinct header, visual index, and direct-link behavior. |
| FR-22 | Existing section and local journal hashes must remain GitHub Pages-safe and directly loadable. |
| FR-23 | Local journal post detail and not-found states must remain available under the artistic template and should visually belong to the artistic shell. |
| FR-24 | The artistic template may accept optional metadata such as featured work selection, a short creative statement, image orientation, and accent color. |
| FR-25 | Every optional artistic metadata field must have a documented fallback derived from existing portfolio data. |
| FR-26 | The configured template must remain selectable from a student-editable data/configuration file; no runtime template switcher is required. |
| FR-27 | Resume download, external links, project actions, certificate previews, video links, and mailto contact behavior must remain functional. |
| FR-28 | Student documentation must explain how to select the artistic template, customize optional artistic metadata, choose suitable images, and verify both layout modes. |

## Artistic Information Architecture

The implementation may preserve existing section IDs for compatibility while composing them into a distinct visitor narrative:

| Artistic Chapter | Existing Information Source |
|---|---|
| Opening Statement | Profile, hero, and about |
| Formation | Education |
| Practice | Experience and awards |
| Selected Works | Projects and project technologies |
| Visual Archive | Gallery media |
| Process Notes | Local journal and external blog posts |
| Materials and Capabilities | Skills and certificates |
| Closing Contact | Profile, resume, social links, and contact form |

This chapter model is a presentation mapping, not a second content model. Existing content must remain available even if several current sections are visually grouped.

## Optional Artistic Metadata

The detailed data design will be decided during Application Design, but it must support these behaviors:

| Metadata | Required Fallback |
|---|---|
| Creative statement | Derive from the existing hero introduction or about introduction. |
| Featured work | Use the first available projects in their configured order. |
| Image orientation or treatment | Infer a stable default presentation from item position or image dimensions when practical. |
| Accent color | Use the professional artistic template palette. |

Optional metadata must not make existing student data files invalid.

## Non-Functional Requirements

### Accessibility

| ID | Requirement |
|---|---|
| NFR-01 | All artistic navigation and gallery interactions must be keyboard operable with visible focus states. |
| NFR-02 | Full-screen navigation must follow accessible dialog/menu focus behavior and return focus to its trigger when closed. |
| NFR-03 | Images must retain meaningful alternative text from shared data. |
| NFR-04 | Text, controls, overlays, and focus indicators must meet WCAG 2.1 AA contrast targets. |
| NFR-05 | Reduced-motion users must receive an equivalent, readable experience without parallax or essential animated transitions. |
| NFR-06 | Horizontal content must remain reachable without precision gestures and must not trap keyboard or touch users. |

### Responsive Design

| ID | Requirement |
|---|---|
| NFR-07 | The artistic shell, index, chapters, and rails must be usable at mobile, tablet, laptop, and wide-desktop widths. |
| NFR-08 | Mobile layouts must preserve readable type, reachable controls, and touch targets of at least 44 by 44 CSS pixels where practical. |
| NFR-09 | Horizontal cards and media must use stable responsive dimensions so captions, hover states, and loading do not cause disruptive layout shifts. |

### Performance

| ID | Requirement |
|---|---|
| NFR-10 | The redesign must remain a static Vite application deployable to GitHub Pages without a backend. |
| NFR-11 | Offscreen artistic media should use browser-native lazy loading where compatible with the interaction. |
| NFR-12 | Animation must favor transform and opacity and avoid continuous layout-triggering work. |
| NFR-13 | A new animation dependency may be introduced only if the approved design cannot be implemented maintainably with React and CSS already in the project. |
| NFR-14 | The production build must complete successfully; existing bundle-size warnings must not materially worsen without documentation. |

### Maintainability and Reliability

| ID | Requirement |
|---|---|
| NFR-15 | Template-specific shell behavior must be represented through typed contracts rather than conditionals scattered across unrelated components. |
| NFR-16 | Artistic styling and motion behavior must be scoped so it does not alter the engineering template. |
| NFR-17 | Optional metadata and template resolution must have deterministic fallbacks. |
| NFR-18 | Existing content validation tests must continue to pass. |
| NFR-19 | Tests must cover artistic shell resolution, navigation/index behavior, horizontal rail controls, reduced-motion behavior where testable, both layout modes, and local journal routing. |
| NFR-20 | Desktop and mobile visual verification must check for overlap, clipping, blank media, inaccessible offscreen content, and incoherent motion. |

## Constraints

- The application remains frontend-only and statically hosted.
- No database, authentication, CMS, or runtime API will be introduced.
- The existing dirty worktree and completed artistic-template work must be extended rather than reverted.
- Existing shared data remains the source of truth.
- Direct GitHub Pages-safe hashes and deployment base-path behavior must remain intact.
- The selected template remains `artistic` unless the student changes `src/data/template.ts`.

## Out of Scope

- Browser-based editing or a content management system.
- A public visitor control for switching between engineering and artistic templates.
- Automatic generation of missing portfolio content with AI.
- Backend storage, user accounts, analytics, or comments.
- Rewriting the engineering template to use the artistic information architecture.

## Acceptance Criteria

1. With `selectedTemplateId` set to `artistic`, the first viewport, navigation, chapter composition, project presentation, gallery, and closing experience are visibly and structurally distinct from engineering.
2. The artistic template uses its own compact header and full-screen visual index.
3. All information available in the engineering template remains discoverable in the artistic presentation.
4. Project and gallery rails support native scrolling, snap behavior, visible controls, keyboard input, and touch interaction.
5. Motion enriches the experience in normal mode and is removed or simplified when reduced motion is requested.
6. Both single-page and multi-page modes work with the artistic shell and preserve direct hashes.
7. Local journal posts open, return to Journal, and show not-found states correctly.
8. Optional artistic metadata changes presentation when present and produces stable fallbacks when absent.
9. Engineering rendering and behavior remain unaffected.
10. Automated tests, TypeScript checks, lint, and production build pass.
11. Desktop and mobile verification show no overlapping controls, clipped text, inaccessible horizontal content, or blank media.

## Requirements Traceability

| Decision Source | Requirements |
|---|---|
| Question 1: Editorial exhibition | FR-03, FR-08 through FR-12 |
| Question 2: Editorial header and visual index | FR-04 through FR-07 |
| Question 3: Native accessible horizontal rails | FR-13 through FR-15, NFR-06, NFR-09 |
| Question 4: New derived artistic sections | FR-08 through FR-12 |
| Question 5: Moderate motion with reduced-motion mode | FR-16 through FR-18, NFR-05, NFR-12 |
| Question 6: Both layout modes | FR-19 through FR-23 |
| Question 7: Optional artistic metadata | FR-24, FR-25, NFR-17 |
| Question 8: Security extension disabled | Extension configuration |
| Question 9: Property-based testing disabled | Extension configuration |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | The user selected Question 8 option B. Full security extension rules were not loaded or enforced. |
| Property-Based Testing | Disabled | The user selected Question 9 option C. Full property-based testing rules were not loaded or enforced. |
