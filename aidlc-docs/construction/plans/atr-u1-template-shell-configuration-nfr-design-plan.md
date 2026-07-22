# NFR Design Plan - ATR-U1 Template Shell and Configuration Foundation

## Purpose

Translate the approved ATR-U1 quality requirements into concrete resilience, scalability, performance, security, responsive, focus-management, and verification patterns with explicit logical component ownership.

## Unit Context

- **Unit ID**: ATR-U1
- **Functional design**: `aidlc-docs/construction/atr-u1-template-shell-configuration/functional-design/`
- **NFR requirements**: `aidlc-docs/construction/atr-u1-template-shell-configuration/nfr-requirements/`
- **Application design**: `aidlc-docs/inception/application-design/artistic-template-redesign/`
- **Infrastructure status**: No infrastructure design; the unit remains a static Vite/GitHub Pages client.

## Required Category Assessment

| Category             | Applicability                        | Evidence                                                                                                                                    |
| -------------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Resilience patterns  | Applicable                           | Template, route, storage, focus, journal, and metadata failures require deterministic recovery.                                             |
| Scalability patterns | Applicable at client-data scale      | Resolvers must support approximately 100 projects and gallery items with linear behavior; hosting owns traffic scale.                       |
| Performance patterns | Applicable                           | No new runtime dependency, immediate index events, no polling, and a 15 percent gzip review threshold are approved.                         |
| Security patterns    | Applicable at static-client boundary | Typed tokens, React text rendering, local-only preference storage, and no analytics/raw HTML are required.                                  |
| Logical components   | Applicable                           | Shell, focus coordinator, registry, resolvers, responsive styles, and test harness need explicit ownership; server components are excluded. |

## Execution Checklist

- [x] Load and analyze approved ATR-U1 NFR Requirements.
- [x] Evaluate resilience and recovery design ambiguities.
- [x] Evaluate client scalability design ambiguities.
- [x] Evaluate performance and bundle measurement design ambiguities.
- [x] Evaluate static security design ambiguities.
- [x] Evaluate responsive and compatibility design ambiguities.
- [x] Evaluate logical component and infrastructure applicability.
- [x] Evaluate verification design ambiguities.
- [x] Create targeted NFR Design questions with recommended answers.
- [x] Collect every `[Answer]:` value.
- [x] Validate answers for completeness, ambiguity, and contradiction.
- [x] Create clarification questions if any ambiguity remains; none were required.
- [x] Generate `nfr-design-patterns.md`.
- [x] Generate `logical-components.md`.
- [x] Validate pattern-to-requirement traceability and content structure.
- [x] Update AI-DLC state and audit records.

## Questions

Please answer every question by placing one letter after its `[Answer]:` tag.

### Question 1: Resilience Pattern

How should ATR-U1 contain recoverable client failures?

A) Use deterministic pure fallbacks at registry/resolver/route boundaries, guarded browser API access in existing hooks, and compile/test failures for invalid developer contracts; add no retry, circuit breaker, or runtime recovery service (recommended)
B) Add a general React error boundary that silently replaces any artistic failure with engineering presentation
C) Add retry and circuit-breaker utilities around local shell and resolver operations
X) Other (please describe after the `[Answer]:` tag)

[Answer]: A

### Question 2: Post-Navigation Focus Pattern

How should keyboard destination focus wait for newly rendered section content?

A) Store one pending focus intent in ArtisticShell, complete it in a React effect after route/layout rendering, target a designated chapter heading, fall back to the main landmark, and clear the intent without a fixed delay (recommended)
B) Use a fixed timeout after every index navigation and then query the document
C) Leave focus on the closed dialog trigger for every navigation type
X) Other (please describe after the `[Answer]:` tag)

[Answer]: A

### Question 3: Client Scalability Pattern

How should artistic presentation resolution meet the approved content-capacity target?

A) Use one project `Map`, one seen-ID `Set`, bounded linear passes, immutable outputs, and no memoization or virtualization until measured content exceeds the approved student scale (recommended)
B) Add a client cache and virtualized collection framework now
C) Use repeated array scans because current content is small
X) Other (please describe after the `[Answer]:` tag)

[Answer]: A

### Question 4: Performance Measurement Pattern

How should the 15 percent JavaScript gzip review threshold be operationalized?

A) Record the summed Vite JavaScript gzip output immediately before ATR-U1 code generation, repeat after implementation, store both values in the code-generation/build evidence, and require rationale or reduction only when growth exceeds 15 percent (recommended)
B) Track raw source lines as the bundle-performance proxy
C) Add continuous production performance telemetry and send visitor timings to an external service
X) Other (please describe after the `[Answer]:` tag)

[Answer]: A

### Question 5: Static Security Pattern

How should style and text configuration be constrained at runtime?

A) Model accents/treatments as closed TypeScript unions mapped to internal style tokens, trim and render statements as React text, ignore unknown runtime values through pure guards, and add no schema-validation dependency (recommended)
B) Allow arbitrary CSS color strings and sanitized HTML using a new sanitization package
C) Trust all configuration with type assertions and skip runtime fallback guards
X) Other (please describe after the `[Answer]:` tag)

[Answer]: A

### Question 6: Logical Component Boundary

Which logical component model should ATR-U1 use?

A) Keep App orchestration, shared layout/route hooks, Template Registry, EngineeringShell, ArtisticShell, Focus Coordinator behavior inside ArtisticShell, Visual Index, and pure Presentation Resolver; add no queue, cache, service worker, backend, or monitoring component (recommended)
B) Add a global presentation state store and cache shared by both shells
C) Add a service worker and client-side event bus for shell coordination
X) Other (please describe after the `[Answer]:` tag)

[Answer]: A

### Question 7: Responsive Design Pattern

How should the artistic shell and visual index encode responsive constraints?

A) Use existing Chakra responsive props and scoped CSS grid/flex rules with explicit mobile/desktop tracks, wrapping labels, stable header/main offsets, and at least 44-pixel practical control targets; avoid viewport-scaled font sizes and layout-changing JavaScript (recommended)
B) Measure viewport width in React and render separate mobile and desktop component trees
C) Scale the entire index proportionally with viewport width, including font and control sizes
X) Other (please describe after the `[Answer]:` tag)

[Answer]: A

### Question 8: Verification Component Pattern

How should automated and manual verification responsibilities be divided?

A) Keep pure resolver/registry tests separate from React shell/index/App tests, add reusable focus and route fixtures, and record a manual viewport/keyboard/contrast checklist without adding an end-to-end framework (recommended)
B) Put every scenario in one App test file and use snapshots for all verification
C) Add a new end-to-end framework and replace local component tests
X) Other (please describe after the `[Answer]:` tag)

[Answer]: A

## Recommended Answers

| Question | Recommended | Rationale                                                                            |
| -------- | ----------- | ------------------------------------------------------------------------------------ |
| Q1       | A           | Matches deterministic local failures without inventing distributed-system patterns.  |
| Q2       | A           | Coordinates focus with React rendering and avoids timing-dependent behavior.         |
| Q3       | A           | Meets the approved student scale with simple linear pure functions.                  |
| Q4       | A           | Makes the approved budget measurable using existing Vite output.                     |
| Q5       | A           | Preserves safe static rendering without a new dependency.                            |
| Q6       | A           | Keeps ownership clear and explicitly excludes unnecessary infrastructure components. |
| Q7       | A           | Uses the existing styling stack and stable responsive layout patterns.               |
| Q8       | A           | Gives focused automated evidence plus the browser checks JSDOM cannot prove.         |

## Planned Artifacts

- `aidlc-docs/construction/atr-u1-template-shell-configuration/nfr-design/nfr-design-patterns.md`
- `aidlc-docs/construction/atr-u1-template-shell-configuration/nfr-design/logical-components.md`

## Content Validation

| Check              | Result                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------- |
| Mermaid diagrams   | Not applicable; this question plan contains no diagrams.                                    |
| ASCII diagrams     | Not applicable; this question plan contains no diagrams.                                    |
| Markdown tables    | Valid simple pipe tables.                                                                   |
| Question format    | Eight questions each include meaningful choices, final `X) Other`, and one `[Answer]:` tag. |
| Special characters | Paths, identifiers, and formulas use Markdown code formatting where needed.                 |

## Extension Rule Compliance

| Extension              | Status   | Rationale                                                                                                       |
| ---------------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| Security Baseline      | Disabled | Full extension patterns do not apply; Question 5 addresses the approved product-level static security boundary. |
| Property-Based Testing | Disabled | Question 8 retains the approved focused example-based verification pattern.                                     |
