# NUS Career Talk - Story Generation Plan

Status: completed; generated stories and personas explicitly approved.

## Inputs and scope

Use `aidlc-docs/inception/requirements/nus-career-talk-requirements.md` and the refreshed architecture. Generate stories for a presenter delivering a 10–15 minute Vietnamese talk and a beginner high-school student exploring afterwards. Preserve all eleven focus areas, three featured live demos, both presentation/exploration views and accessibility requirements. Do not reopen decisions already approved.

## Assessment and preparation

- [x] Assess whether stories add value; record the decision in `nus-career-talk-user-stories-assessment.md`.
- [x] Review approved requirements and identify presenter/student journeys.
- [x] Compare story organisation options and propose a bounded approach.
- [x] Prepare one approach approval question using the required answer format.
- [x] Receive the approach choice and explicit plan approval.
- [x] Validate the answer and resolve any ambiguity before generation.

## Organisation options

- Journey-based: follows entering the talk, presenting, discovering, exploring and choosing a next step. Recommended because it makes handoffs between presentation and exploration easy to assess.
- Feature-based: groups controls, demos and content; easy to trace components but less clear about the complete learning experience.
- Persona-based: separates presenter and student needs; clear ownership but duplicates shared navigation and learning outcomes.
- Domain-based: groups by focus area; strong subject coverage but repeats common interaction behaviour.
- Epic-based: groups broad capabilities with smaller stories; useful for a larger programme but adds hierarchy to this bounded page.

Recommended approach: organise by journey; attach persona and FR/NFR references to each story. Use a per-area acceptance matrix for the eleven demos. The matrix supplements shared exploration stories; it does not replace checking each demo's distinct outcome.

## Story format and granularity

Each story has a stable ID, title, “As a / I want / so that” statement, persona mapping, FR/NFR references and Given/When/Then acceptance criteria. Keep stories focused on observable user value and independently assessable behaviours; allow shared foundations as explicit dependencies where unavoidable. Avoid prescribing implementation details or adding sprint plans.

Draft story boundaries to refine during generation:

1. Find, open and leave the talk through either portfolio template or a direct link.
2. Deliver the short presentation with reliable controls and fullscreen fallback.
3. Understand the CS/Computer Engineering distinction through Vietnamese examples.
4. Discover NUS CS and all eleven focus areas using official terminology and sources.
5. Follow the three featured application demos during the live narrative.
6. Explore any area's distinct demonstration, application, interests and career examples.
7. Switch between presenting and exploration while keeping meaningful topic context.
8. Participate using keyboard controls, reduced motion and readable text alternatives.
9. Leave with an exciting reflection and an achievable first project.

## Generation checklist - execute only after approval

- [x] Generate `aidlc-docs/inception/user-stories/nus-career-talk/personas.md` with presenter and student archetypes, goals, constraints and story mapping; avoid invented personal histories.
- [x] Generate `aidlc-docs/inception/user-stories/nus-career-talk/stories.md` following the approved organisation and INVEST criteria.
- [x] Include acceptance criteria for each story covering normal use, relevant boundaries and fallback behaviour.
- [x] Add the eleven-area acceptance matrix with meaningful input/action, observable visual outcome, everyday application and illustrative career coverage for every area.
- [x] Map every story to the relevant persona and requirement IDs; check FR1–FR8 and NFR1–NFR5 for omissions.
- [x] Check stories are Independent, Negotiable, Valuable, Estimable, Small and Testable; document unavoidable dependencies without claiming perfect independence.
- [x] Check scope consistency: 10–15 minute core narrative, all eleven exploration entries, no guaranteed job outcomes and no new backend features.
- [x] Validate Markdown, record extension compliance and update plan/state checkboxes.
- [x] Present generated stories/personas for the required review gate.
- [x] Receive explicit generated-story approval before Workflow Planning.

## Question 1 - Story approach approval

Which story-generation approach should be used?

A) Approve this plan: journey-based stories, two personas, Given/When/Then acceptance criteria, and an eleven-area coverage matrix (recommended).
B) Request a different approach or changes to this plan; describe the desired changes after [Answer]:.
X) Other (describe after [Answer]:).

[Answer]: A

## Extension compliance

Security Baseline and Property-Based Testing: N/A; both explicitly disabled in state. No enabled extension has a blocking finding. Standard accessibility, correctness and regression acceptance criteria remain required by the approved requirements.
