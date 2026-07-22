# Personas - Neutral and Business Layout Variety

## Persona 1: Student Portfolio Author

### Profile

A student or early-career professional who maintains portfolio content in the shared data files and selects a presentation that supports their intended professional identity.

### Goals

- Choose a layout that communicates either broad creative range or structured business thinking.
- Maintain one set of profile, project, experience, journal, and contact information.
- Publish a polished portfolio without learning advanced animation or layout systems.

### Needs

- Neutral must feel like a contemporary magazine rather than an Engineering page with different colors.
- Business must feel like a consulting report rather than a conventional corporate dashboard.
- Template selection must remain simple, typed, and documented through `src/data/template.ts`.
- Existing routes, actions, layout modes, and responsive behavior must remain dependable.

### Relevant Stories

- NBV-US-01: Express a profile through the Neutral magazine layout.
- NBV-US-02: Express a profile through the Business consulting-report layout.
- NBV-US-04: Maintain shared content and template stability.

## Persona 2: Portfolio Visitor

### Profile

A recruiter, mentor, educator, collaborator, or peer who opens the portfolio on desktop or mobile and wants to understand the student quickly.

### Goals

- Identify the student's background, strengths, projects, evidence, and contact options.
- Move predictably between sections and journal content.
- Read comfortably with keyboard, touch, reduced-motion, or smaller-screen preferences.

### Needs

- Each template must have clear identity and navigation without hiding shared information.
- Sticky or compact controls must not cover content or disrupt reading order.
- Links, downloads, theme controls, and layout controls must remain recognizable and operable.
- Content must not overlap, clip, or create unintended horizontal scrolling.

### Relevant Stories

- NBV-US-01: Read the Neutral magazine layout.
- NBV-US-02: Read the Business consulting-report layout.
- NBV-US-03: Navigate and act consistently across both layouts.

## Maintainer Constraints

Maintainer concerns are represented as acceptance constraints rather than a third persona:

- Keep shared data contracts, section IDs, routes, and App ownership stable.
- Scope template CSS and preserve Engineering behavior.
- Add no runtime dependency or custom scrolling system.
- Keep automated checks and production build green.

## Content Validation

| Check | Result |
|---|---|
| Mermaid diagrams | Not used |
| ASCII diagrams | Not used |
| Markdown structure | Valid headings, lists, and table |

## Extension Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Confirmed during Requirements Analysis. |
| Property-Based Testing | Disabled | Confirmed during Requirements Analysis. |
