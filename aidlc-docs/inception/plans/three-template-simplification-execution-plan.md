# Execution Plan - Three Template Portfolio Simplification

## Scope and Impact

- **Transformation**: Brownfield presentation enhancement inside one React/Vite application.
- **User impact**: Three structurally different template choices over the same portfolio content.
- **Structural impact**: Extend the existing template registry from Engineering and superseded Artistic to Engineering, Neutral, and Business.
- **Data impact**: No new required content and no duplicated data model.
- **Infrastructure impact**: None.
- **Risk**: Medium. The main risks are accidental Engineering regressions, superficial rather than structural differentiation, CSS leakage, and route/layout inconsistencies.

## Component Relationships

- **Existing foundation**: App orchestration, template contracts, layout hook, hash routing, shared data, and EngineeringShell.
- **Neutral**: Editorial side-rail Shell and vertically flowing section compositions.
- **Business**: Executive masthead Shell, evidence bands, and case-study section compositions.
- **Shared quality boundary**: Template registry tests, App route/layout tests, data validation, responsive checks, lint, TypeScript, and Vite build.

## Workflow Visualization

```mermaid
flowchart LR
    Start([Scope approved]) --> WD[Workspace Detection: reused]
    WD --> RE[Reverse Engineering: reused]
    RE --> RA[Requirements: completed]
    RA --> US[User Stories: skipped]
    US --> WP[Workflow Planning: review]
    WP --> AD[Application Design: skipped]
    AD --> UP[Units Planning: skipped]
    UP --> UG[Units Generation: skipped]
    UG --> FD[Functional Design: skipped]
    FD --> NR[NFR Requirements: skipped]
    NR --> ND[NFR Design: skipped]
    ND --> ID[Infrastructure Design: skipped]
    ID --> CG[Code Generation: execute]
    CG --> BT[Build and Test: execute]
    BT --> End([Complete])

    style WD fill:#4CAF50,stroke:#1B5E20,stroke-width:3px,color:#fff
    style RE fill:#4CAF50,stroke:#1B5E20,stroke-width:3px,color:#fff
    style RA fill:#4CAF50,stroke:#1B5E20,stroke-width:3px,color:#fff
    style WP fill:#FFA726,stroke:#E65100,stroke-width:3px,color:#000
    style CG fill:#FFA726,stroke:#E65100,stroke-width:3px,color:#000
    style BT fill:#FFA726,stroke:#E65100,stroke-width:3px,color:#000
    style US fill:#BDBDBD,stroke:#424242,stroke-width:2px,stroke-dasharray:5 5,color:#000
    style AD fill:#BDBDBD,stroke:#424242,stroke-width:2px,stroke-dasharray:5 5,color:#000
    style UP fill:#BDBDBD,stroke:#424242,stroke-width:2px,stroke-dasharray:5 5,color:#000
    style UG fill:#BDBDBD,stroke:#424242,stroke-width:2px,stroke-dasharray:5 5,color:#000
    style FD fill:#BDBDBD,stroke:#424242,stroke-width:2px,stroke-dasharray:5 5,color:#000
    style NR fill:#BDBDBD,stroke:#424242,stroke-width:2px,stroke-dasharray:5 5,color:#000
    style ND fill:#BDBDBD,stroke:#424242,stroke-width:2px,stroke-dasharray:5 5,color:#000
    style ID fill:#BDBDBD,stroke:#424242,stroke-width:2px,stroke-dasharray:5 5,color:#000
```

### Text Alternative

Reuse completed workspace and reverse-engineering context, complete the approved requirements and this workflow plan, skip additional stories and design decomposition, execute one Code Generation stage, then execute Build and Test.

## Stage Decisions

- [x] **Workspace Detection - Reuse**: The existing brownfield workspace is known.
- [x] **Reverse Engineering - Reuse**: Current architecture and component artifacts are sufficient.
- [x] **Requirements Analysis - Complete**: The three structures and simplification boundaries are approved.
- [x] **User Stories - Skip**: Requirements and acceptance criteria are sufficient for this bounded implementation.
- [x] **Workflow Planning - Approved**: Approved on 2026-07-19T10:44:59Z.
- [x] **Application Design - Skip**: The approved template Shell and section-map contracts already support the change.
- [x] **Units Planning and Generation - Skip**: One application package and one implementation unit are sufficient.
- [x] **Functional Design - Skip**: No complex business rules, persistence, or new state machine is introduced.
- [x] **NFR Requirements and Design - Skip**: Accessibility, responsive behavior, isolation, and build constraints are explicit in requirements and use existing patterns.
- [x] **Infrastructure Design - Skip**: Deployment and hosting are unchanged.
- [x] **Code Generation - Generated**: Implementation and verification completed on 2026-07-19T12:40:47Z; awaiting review approval.
- [ ] **Build and Test - Execute**: Run complete tests, lint, production build, diff checks, and responsive smoke checks.

## Implementation Sequence

1. Preserve a clean baseline and the current configured template value.
2. Change the supported registry IDs to `engineering`, `neutral`, and `business` with deterministic Engineering fallback.
3. Preserve EngineeringShell and engineering section mappings unchanged.
4. Implement NeutralShell and enough Neutral section composition to establish the editorial side-rail structure.
5. Implement BusinessShell and enough Business section composition to establish the executive masthead, evidence bands, and case-study grids.
6. Reuse shared content, actions, layout state, route IDs, and journal lookup across all templates.
7. Remove or stop registering superseded full-screen Artistic navigation behavior.
8. Add focused registry, App, route, layout, content, and Engineering regression tests.
9. Update student template-selection documentation and concise AI-DLC evidence.
10. Run Build and Test verification.

## Documentation Plan

- Use `aidlc-docs/README.md` as the active index and documentation-control policy.
- Keep this file as the only active execution plan.
- Create only the mandatory code-generation plan and required completion evidence after approval.
- Preserve `audit.md` as the complete append-only record.
- Leave superseded artifacts in place with banners instead of creating revised copies or extending obsolete plans.

## Success Criteria

- All three template IDs are typed, selectable, and structurally distinct.
- Engineering is unchanged.
- Neutral and Business remain straightforward, responsive, and data-driven.
- Shared actions, both layouts, and all route classes work for every template.
- No new runtime dependency or infrastructure change is introduced.
- Tests, lint, TypeScript/build, responsive checks, and documentation checks pass.

## Content Validation

| Check | Result |
|---|---|
| Mermaid syntax | Valid left-to-right flow with unique alphanumeric node IDs and valid links |
| Mermaid alternative | Matching text alternative included |
| ASCII diagrams | Not used |
| Markdown | Valid headings, lists, checkboxes, table, and fenced diagram |
| Documentation scope | One active plan and one active index |

## Extension Rule Compliance

| Extension | Status | Rationale |
|---|---|---|
| Security Baseline | Disabled | Existing approved configuration remains unchanged. |
| Property-Based Testing | Disabled | Existing approved configuration remains unchanged. |
