# AI-DLC State Tracking

## Active Workflow

- **Change**: Vietnamese NUS CS career guidance presentation.
- **Current phase**: INCEPTION.
- **Current stage**: Application Design - artifact review gate.
- **Workspace**: `/Users/nhamquochung/nhamhung.github.io`.
- **Depth**: Standard proposed for requirements; moderate multi-component feature.
- **Plan**: `aidlc-docs/inception/plans/nus-career-talk-application-design-plan.md`.
- **Execution plan**: `aidlc-docs/inception/plans/nus-career-talk-execution-plan.md`.
- **Active question file**: `aidlc-docs/inception/application-design/nus-career-talk/review-questions.md`.
- **Next action**: Await generated application-design approval, then begin Functional Design for nus-career-talk.
- **Active requirements**: `aidlc-docs/inception/requirements/nus-career-talk-requirements.md`.
- **Approval file**: `aidlc-docs/inception/application-design/nus-career-talk/review-questions.md`.
- **Prior workflow**: Retained below; its Code Generation review is still pending.

## NUS Career Talk Stage Progress

- [x] Workspace Detection.
- [x] Reverse Engineering refresh.
- [x] Reverse Engineering approval.
- [x] Requirements Analysis.
  - [x] Load architecture and analyse intent at standard depth.
  - [x] Prepare clarification and extension opt-in questions.
  - [x] Receive answers and check contradictions.
  - [x] Generate requirements.
  - [x] Approve generated requirements.
- [x] User Stories assessment and generation.
  - [x] Assess need and prepare story-generation plan.
  - [x] Approve story approach.
  - [x] Generate personas, stories and acceptance matrix.
  - [x] Approve generated stories.
- [x] Workflow Planning.
  - [x] Generate execution plan and workflow diagram.
  - [x] Approve execution plan.
- [ ] Application Design - execute.
  - [x] Prepare component/state-ownership plan.
  - [x] Approve design approach.
  - [x] Generate application-design artifacts.
  - [ ] Approve generated application design.
- Units Generation - skip; one cohesive unit.
- [ ] Construction.
  - [ ] Functional Design - execute.
  - [ ] NFR Requirements - execute.
  - [ ] NFR Design - execute.
  - Infrastructure Design - skip; hosting unchanged.
  - [ ] Code Generation - planning and generation.
- [ ] Build and Test.

## Previous Workflow - Business Colour Refresh

- **Project**: Brownfield React/Vite static portfolio
- **Workspace**: `/Users/nhamhhung/nhamhung.github.io`
- **Change**: Business Color and Two-Theme Refresh
- **Current phase**: CONSTRUCTION
- **Current stage**: Code Generation Part 2 - eighteen-step review gate
- **Workflow status**: Active
- **Active requirement questions**: `aidlc-docs/inception/requirements/business-youthful-color-refresh-requirement-questions.md`
- **Active requirements**: `aidlc-docs/inception/requirements/business-youthful-color-refresh-requirements.md`
- **Active execution plan**: `aidlc-docs/inception/plans/business-youthful-color-refresh-execution-plan.md`
- **Active code-generation plan**: `aidlc-docs/construction/plans/business-youthful-color-refresh-code-generation-plan.md`
- **Active approval question**: `aidlc-docs/construction/plans/business-youthful-color-refresh-step-18-approval-questions.md`
- **Active code-generation summary**: `aidlc-docs/construction/business-youthful-color-refresh/code/code-generation-summary.md`
- **Next action**: Await explicit Code Generation review before the final Build and Test rerun

## Current Scope

- Apply the approved blue/mint/cream background palette and taupe/cream/orange text palette to Business.
- Preserve Business layout, typography, content, routes, interactions, responsive behavior, and certificate previews.
- Support exactly Engineering and Business across types, registry, selector, persistence, routes, and tests.
- Remove the retired theme implementation and all non-audit documentation references.
- Preserve the append-only audit as the required immutable historical record.
- Make the Business contact email smaller, fully visible, and clearly bordered.
- Remove the Business video and certificate sequence labels.
- Brighten dark-mode supporting text toward the approved cream palette.
- Remove all decorative Business sequence numbering while preserving meaningful numeric content.
- Replace all three project-cover imports with the supplied PNG assets and accurate alternative text.
- Keep the supplied PNGs unchanged and display their cover crop from the left edge.
- Add consistent horizontal padding to Business left-rail navigation labels.
- Center the bordered Business contact email within its card.
- Reduce and center the displayed Business profile record without changing the source portrait.
- Center all Direct Contact card content for optical balance.
- Reduce the profile record to `20rem` and shorten the portrait frame to `4 / 3`.
- Lengthen the compact portrait frame slightly to `4 / 3.5`.
- Add highlighted surfaces and hover feedback to the contact email and three social links.
- Rewrite the README for a reader making their first-ever VS Code, Git, npm, GitHub Actions, and GitHub Pages contribution.
- Normalize the Direct Contact card's blue, cream, and mint color roles across light and dark modes.
- Match the Direct Contact card to the Send message button's background and text colors while retaining readable highlighted email and social controls.
- Reorder the README into the requested template-first GitHub Pages, trusted instructor collaboration, local-editing, first-push, and deployment-verification journey.

## Extension Configuration

| Extension              | Enabled | Decision                                              |
| ---------------------- | ------- | ----------------------------------------------------- |
| Security Baseline      | No      | NUS Career Talk Requirements Analysis (Q7 B) |
| Property-Based Testing | No      | NUS Career Talk Requirements Analysis (Q8 C) |

## Active Stage Progress

### Business Color and Two-Theme Refresh

- [x] Workspace Detection - Brownfield React/Vite workspace and isolated Business style boundary confirmed on 2026-08-25
- [x] Requirements Analysis - Background palette, text palette, layout preservation, and complete theme-removal requirements approved on 2026-08-25
- [x] Workflow Planning - Focused execution plan approved on 2026-08-25
- [x] Code Generation Part 1 - All eighteen steps approved
- [x] Code Generation Part 2 - All eighteen approved steps implemented and verified
- [ ] Build and Test - Final eighteen-step rerun required after Code Generation approval
- [ ] Operations - Placeholder

## Reused Foundation

- App owns browser hash, active section, journal route, runtime template selection, and layout state.
- Template definitions provide shells, journals, chapter labels, and section maps.
- Shared data, components, routes, layout modes, color mode, and GitHub Pages behavior remain authoritative.

## Documentation Controls

- Active index: `aidlc-docs/README.md`.
- Update active artifacts instead of creating duplicate revisions.
- Keep application code at the workspace root and documentation under `aidlc-docs/`.
- Keep `audit.md` append-only and complete.
