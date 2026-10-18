# NUS Career Talk - NFR Design Plan

## Pattern-category applicability and clarification assessment

- Resilience: applicable, Q09–Q11. Approved requirements settle graceful fullscreen and chunk/render failure behaviour; design local fallback/return, not service retries.
- Scalability: no server scaling pattern needed. Approved static GitHub Pages hosting and finite per-browser demo data provide the evidence. No queues, shared caches or capacity service is required.
- Performance: applicable, Q04 and Q07–Q08. Use route-level loading and one active demo with visibility-aware lifecycle; no throughput ambiguity remains.
- Security: optional extension disabled. Approved no-account/no-collection/no-runtime-secret scope and fixed expression examples settle ordinary data boundaries; no new compliance or authorisation pattern is needed.
- Logical components: applicable as client orchestration, focus/motion/fullscreen and error boundaries; infrastructure components are N/A under the unchanged static architecture.

All categories evaluated explicitly. Approved requirements and component design resolve their user-facing choices; no unanswered pattern question requires user input. Proceed with routine implementation-pattern selection and present artifacts for required review.

## Checklist

- [x] Load approved NFR requirements and stack decisions; review all pattern categories.
- [x] Generate `nfr-design-patterns.md` mapping Q01–Q15 to concrete patterns and verification.
- [x] Generate `logical-components.md` with client responsibilities, ownership and dependency boundaries.
- [x] Validate content and complete quality-criterion coverage; update plan/state/audit.
- [x] Present the two-option NFR Design review.
- [x] Receive explicit approval before Code Generation Part 1; Infrastructure Design remains skipped.

## Extension compliance

Security Baseline and PBT: N/A; disabled in state. Full rule files skipped.
