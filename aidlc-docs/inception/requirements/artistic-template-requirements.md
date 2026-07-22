# Artistic Template Support Requirements

> **Status: Historical foundation.** This document records the original two-template setup. Active scope is defined by `aidlc-docs/inception/requirements/three-template-simplification-requirements.md`; do not extend this file.

## Intent Analysis

- **User request**: Set up support for another student portfolio template that is more artistic than the current engineering-based structure.
- **Request type**: Brownfield user-facing enhancement.
- **Scope estimate**: Multiple components plus documentation and tests.
- **Complexity estimate**: Moderate, because the app needs a reusable template boundary without duplicating student content.

## Functional Requirements

| ID | Requirement |
|---|---|
| FR-01 | The app must support at least two presentation templates: `engineering` and `artistic`. |
| FR-02 | Students must be able to choose the template from a simple data/config file. |
| FR-03 | Both templates must reuse the same portfolio data files so students do not maintain duplicate content. |
| FR-04 | The engineering template must preserve the existing site behavior by default. |
| FR-05 | The artistic template must provide a more visual presentation for hero, projects, and gallery sections. |
| FR-06 | Template selection must work with the existing single-page and multi-page layout modes. |
| FR-07 | Local journal post routing must continue to work regardless of selected template. |
| FR-08 | Student documentation must explain how to switch templates. |

## Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-01 | The template system must remain static-site compatible for GitHub Pages. |
| NFR-02 | The implementation must avoid a second copied application tree. |
| NFR-03 | Tests must verify that supported templates provide all section components. |
| NFR-04 | The default template must avoid surprise visual changes for the current website. |
| NFR-05 | No backend, database, runtime API, or authentication may be introduced. |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | User opted out in existing AI-DLC state. No security rule loading required. |
| Property-Based Testing | Disabled | User opted out in existing AI-DLC state. No PBT rule loading required. |
