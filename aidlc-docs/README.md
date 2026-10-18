# AI-DLC Documentation Index

## Active Change

- **Change**: Vietnamese NUS CS career guidance presentation.
- **Requirements**: [Requirements](inception/requirements/nus-career-talk-requirements.md).
- **Execution plan**: [Plan](inception/plans/nus-career-talk-execution-plan.md).
- **Implementation plan**: [Code generation](construction/plans/nus-career-talk-code-generation-plan.md).
- **Implementation and verification**: [Summary](construction/nus-career-talk/code/code-generation-summary.md).
- **Build and Test**: [Results and instructions](construction/build-and-test/nus-career-talk/build-and-test-summary.md).
- **Current amendment**: [Header and photo introduction](construction/nus-career-talk/code/header-intro-summary.md), implemented and verified; [generated-code review pending](construction/nus-career-talk/code/header-intro-review-questions.md).
- **Baseline status**: Complete; no deployment performed.
- **State and audit**: `aidlc-state.md`, `audit.md`.

## Previous Change

- **Change**: Business Color and Two-Theme Refresh
- **Requirement questions**: `inception/requirements/business-youthful-color-refresh-requirement-questions.md`
- **Requirements**: `inception/requirements/business-youthful-color-refresh-requirements.md`
- **Execution plan**: `inception/plans/business-youthful-color-refresh-execution-plan.md`
- **Code-generation plan**: `construction/plans/business-youthful-color-refresh-code-generation-plan.md`
- **Code-generation summary**: `construction/business-youthful-color-refresh/code/code-generation-summary.md`
- **Current reverse engineering**: `inception/reverse-engineering/`
- **Build and Test guidance**: `construction/build-and-test/`
- **State**: `aidlc-state.md`
- **Append-only audit history**: `audit.md`

## Current Product Boundary

- Engineering and Business are the complete supported template set.
- Business uses the approved background and text palettes.
- Shared content, routes, layout modes, color mode, and GitHub Pages behavior remain authoritative.

## Documentation Controls

- Update active artifacts instead of creating duplicate revisions.
- Keep implementation details in application code and tests; documentation records scope, decisions, and verification evidence.
- Keep `aidlc-state.md` focused on the active workflow and concise historical status.
- Keep `audit.md` append-only and complete; it is the required immutable historical record.
- Create additional design artifacts only when an approved stage requires them.
