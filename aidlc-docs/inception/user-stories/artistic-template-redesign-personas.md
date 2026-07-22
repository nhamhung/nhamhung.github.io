# Personas - Artistic Template Presentation Redesign

## Persona P-01: Student Portfolio Owner

### Profile

- **Role**: Student, recent graduate, or early-career creator building a public portfolio.
- **Technical confidence**: Beginner to intermediate with Git, data files, and Markdown; may not be comfortable editing React components.
- **Typical disciplines**: Art, design, media, creative technology, research, education, or interdisciplinary practice.

### Goals

- Choose an artistic outlook that feels genuinely different from a technical portfolio.
- Maintain profile, education, experience, projects, media, writing, skills, and contact details in one place.
- Feature selected work and communicate a creative point of view.
- Publish a professional result to GitHub Pages without a backend.

### Needs

- A simple template setting and clear student documentation.
- Optional artistic metadata with understandable examples and reliable defaults.
- Immediate feedback when an image, link, or data field is invalid.
- Assurance that switching templates does not delete or duplicate content.

### Behaviors

- Starts from existing sample content and replaces entries incrementally.
- Tests changes in the local Vite preview.
- Uses a mixture of portrait and landscape images of varying quality.
- May switch between engineering and artistic templates while deciding what fits.

### Constraints and Accessibility Considerations

- May use only a laptop and free development tools.
- Needs documentation that distinguishes content edits from advanced layout edits.
- Benefits from deterministic fallbacks because optional presentation settings may be omitted or mistyped.
- Needs responsive previews because visitors will use both phones and desktops.

### Relevant Story Groups

- US-01: Select and configure the artistic template.
- US-13: Maintain, verify, and publish the template safely.

## Persona P-02: Portfolio Visitor

### Profile

- **Role**: Recruiter, reviewer, mentor, educator, peer, collaborator, or prospective client.
- **Technical confidence**: Irrelevant to the experience; expects familiar web interactions.
- **Visit pattern**: Often arrives through a direct link and scans before deciding where to spend attention.

### Goals

- Understand the student's identity and point of view quickly.
- Browse selected work and supporting evidence without losing context.
- Move between chapters confidently and know where they are.
- Read process writing, inspect credentials, download a resume, or make contact.

### Needs

- A clear opening statement and legible editorial hierarchy.
- A visual index that exposes the entire portfolio structure.
- Horizontal galleries that communicate how to continue browsing.
- Direct links that open the expected chapter or journal post.

### Behaviors

- Skims headings and images before reading detailed text.
- Uses mouse, trackpad, touch, or keyboard depending on device.
- Opens project links, certificates, journal posts, and contact actions selectively.
- May enter the site through a project, journal, or other routed section instead of the homepage.

### Constraints and Accessibility Considerations

- May have limited time and an unfamiliar device.
- Needs controls and captions to remain visible without hover.
- Expects no forced wheel hijacking or disorienting navigation.
- Requires layout and text to remain stable while media loads.

### Relevant Story Groups

- US-02 through US-10: Discover and explore the artistic exhibition.
- US-12: Use either layout mode and direct links.

## Persona P-03: Accessibility-Conscious Visitor

### Profile

- **Role**: Any portfolio visitor who uses keyboard navigation, touch access, zoom, high contrast, or reduced-motion preferences.
- **Assistive context**: May use one or several browser or operating-system accessibility settings.
- **Visit pattern**: Expects the same information and actions without relying on animation, hover, or precision gestures.

### Goals

- Navigate every artistic chapter in a predictable order.
- Open and close the visual index without losing focus.
- Browse horizontal work using visible controls and keyboard input.
- consume all content without parallax, continuous motion, or animation-dependent meaning.

### Needs

- Visible focus indicators and meaningful labels.
- Correct focus entry, containment, dismissal, and return for the full-screen index.
- Reduced-motion behavior that removes large spatial movement while preserving context.
- Text alternatives, sufficient contrast, and layouts that tolerate zoom and reflow.

### Behaviors

- Uses Tab, Shift+Tab, Enter, Space, Escape, and arrow keys.
- May enable `prefers-reduced-motion` before loading the site.
- May zoom text or use a narrow viewport even on desktop hardware.
- Relies on explicit controls rather than hidden gestures.

### Constraints and Accessibility Considerations

- Horizontal regions must not trap focus or hide reachable content.
- Reading order must remain meaningful when the visual layout is asymmetrical.
- Motion cannot be required to reveal essential information.
- Touch targets and interactive states must remain distinct at small sizes.

### Relevant Story Groups

- US-03: Operate the visual index.
- US-05 and US-06: Browse horizontal project and gallery rails.
- US-08 through US-10: Read process content and use closing actions.
- US-11: Receive an equivalent reduced-motion experience.
- US-12: Navigate layout modes and direct routes predictably.

## Persona P-04: Student Template Maintainer

### Profile

- **Role**: Student contributor, educator, mentor, or developer maintaining the reusable repository.
- **Technical confidence**: Intermediate to advanced TypeScript and React knowledge.
- **Responsibility**: Protect the beginner customization path while extending presentation capabilities.

### Goals

- Keep engineering and artistic templates isolated and reliable.
- Represent shell and navigation differences through typed template contracts.
- Preserve GitHub Pages, local journal routes, and static builds.
- Maintain focused tests and clear instructions for future students.

### Needs

- Traceability from requirements to stories, design, code, and verification.
- Reusable interaction primitives for rails, motion preferences, and artistic sections.
- Regression tests for both templates and layout modes.
- Visual verification across mobile and desktop viewports.

### Behaviors

- Reads types, tests, and AI-DLC artifacts before modifying shared contracts.
- Prefers existing React, Chakra, and CSS capabilities before adding dependencies.
- Runs tests, TypeScript checks, lint, and production builds before publishing.
- Reviews changes in both color modes and both layout modes.

### Constraints and Accessibility Considerations

- Must preserve existing uncommitted work and avoid unrelated refactors.
- Cannot introduce a backend, database, or server-only routing requirement.
- Must keep optional artistic metadata backward compatible.
- Must test focus behavior, reduced motion, and horizontal access rather than relying only on visual review.

### Relevant Story Groups

- US-01: Provide typed template and metadata configuration.
- US-11 and US-12: Preserve accessible motion and routing behavior.
- US-13: Protect engineering, tests, documentation, performance, and static delivery.

## Persona-to-Story Map

| Story | P-01 Student Owner | P-02 Visitor | P-03 Accessibility Visitor | P-04 Maintainer |
|---|---|---|---|---|
| US-01 Artistic configuration | Primary | Indirect | Indirect | Primary |
| US-02 Editorial opening | Indirect | Primary | Supporting | Supporting |
| US-03 Visual index | Indirect | Primary | Primary | Supporting |
| US-04 Chapter awareness | Indirect | Primary | Supporting | Supporting |
| US-05 Selected Works rail | Indirect | Primary | Primary | Supporting |
| US-06 Visual Archive rail | Indirect | Primary | Primary | Supporting |
| US-07 Formation and Practice | Indirect | Primary | Supporting | Supporting |
| US-08 Process Notes | Indirect | Primary | Primary | Supporting |
| US-09 Materials and evidence | Indirect | Primary | Supporting | Supporting |
| US-10 Closing Contact | Primary | Primary | Primary | Supporting |
| US-11 Motion equivalence | Indirect | Supporting | Primary | Primary |
| US-12 Layout and direct routes | Indirect | Primary | Primary | Primary |
| US-13 Maintenance and delivery | Primary | Indirect | Indirect | Primary |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Disabled during Requirements Analysis; no security extension constraints apply. |
| Property-Based Testing | Disabled | Disabled during Requirements Analysis; no PBT extension constraints apply. |
