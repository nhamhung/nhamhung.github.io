# Vietnamese NUS CS Career Talk - Requirements

Status: approved by explicit user response “approve and continue” on 2026-10-18.


Current amendment: [Header and photo introduction requirements](nus-career-talk-header-intro-requirements.md) add the speaker as scene two and update navigation to ten scenes. The original requirement record below remains the baseline.

## Intent and scope

Create a Vietnamese presentation page within the existing portfolio for a 10–15 minute high-school career guidance talk. Explain Computer Science versus Computer Engineering, introduce NUS CS focus areas, connect each to applications and possible careers through beautiful interactive visuals, and close with an exciting, achievable first step.

Type: new user-facing feature. Scope: multiple components within one static React/TypeScript/Vite application. Complexity: moderate. Requirements depth: standard. Presenter and student exploration are the two main user journeys.

## Confirmed decisions

Question answers: 1 B; 2 A; 3 A; 4 A; 5 A; 6 A; 7 B; 8 C.

- Main talk: 10–15 minutes excluding Q&A.
- Slide-like presentation with next/previous controls, keyboard navigation, optional fullscreen, and a separate exploration view.
- All eleven NUS CS focus areas receive an application visual and career examples.
- Dark science-exhibition aesthetic with colourful diagrams and distinct field accents.
- Each area includes a click-to-run or adjustable local demonstration.
- Dedicated `#/talks/nus-cs` route and visible links from Engineering and Business headers, including mobile navigation.
- Security Baseline and Property-Based Testing extensions disabled for this change.

## Answer validation and pacing

All eight answers are valid and complete. Short duration and complete coverage are compatible because the user selected highlighting selected demos in the live talk and a separate exploration view. The presentation gives an overview of every area, then features three demos; exploration exposes all eleven in depth. This does not require the speaker to operate every demo during the timed talk.

Proposed live sequence, to be refined during design:

| Segment | Approximate time | Purpose |
| --- | --- | --- |
| Opening question | 1 minute | Start with a familiar technology problem. |
| CS versus Computer Engineering | 2 minutes | Explain different emphases and overlap through a shared example. |
| NUS CS and focus-area map | 2 minutes | Introduce the degree and show all eleven directions. |
| Three selected application demos | 5 minutes | Connect concepts to daily life and careers. |
| Careers, reflection and closing challenge | 2 minutes | Help students choose one question or project to explore. |

Target is approximately twelve minutes; exploration has no time limit. Featured areas proposed: Algorithms & Theory, Artificial Intelligence, and Computer Graphics and Games, chosen for immediate visual clarity. All other areas remain accessible in both the overview and exploration.

## Functional requirements and acceptance criteria

### FR1 - Vietnamese teaching content

Use natural, beginner-friendly Vietnamese with official English focus-area names and recognisable English job titles alongside Vietnamese explanations. Assume no coding background. Explain technical terms on first use. Each teaching segment communicates one main idea and uses relatable examples.

Acceptance: a student can follow the content without reading code or knowing university course codes.

### FR2 - CS and Computer Engineering distinction

Compare the disciplines through their goals, common study topics and example work, and explain the overlap. Use a shared system such as a robot to illustrate algorithms/software, hardware, embedded control and their collaboration. Avoid reducing the distinction to an absolute software-versus-hardware split. Ground NUS-specific degree statements in official CS and Computer Engineering pages before implementation content is finalised.

Acceptance: the comparison describes both distinct emphases and shared skills and includes an explanatory visual with a text alternative.

### FR3 - NUS CS introduction and source accuracy

Introduce NUS and its undergraduate CS programme concisely before the focus-area map. Explain “Focus Areas” as “hướng chuyên sâu”; distinguish these from separate degree programmes and formal specialisation titles. Include official source links and a content verification date. Do not invent speaker experiences or NUS endorsement.

Official focus-area reference: [NUS CS Focus Areas](https://www.comp.nus.edu.sg/programmes/ug/focus/), checked during discovery on 2026-10-17. Recheck curriculum and relevant cohort qualifications when finalising educational content.

### FR4 - Eleven complete exploration entries

Every area must have its official name, Vietnamese explanation, a distinct working visual, an everyday application, at least two illustrative career roles, and a short “you may enjoy this if...” connection to interests. Career mappings are educational examples, not official NUS placement claims or employment guarantees.

The following are proposed teaching concepts and illustrative roles, not university claims or fixed technical designs:

| Official focus area | Proposed visual or interaction | Illustrative careers |
| --- | --- | --- |
| Algorithms & Theory | Find a short route across a small map; change the destination. | Algorithms engineer; optimisation engineer. |
| Artificial Intelligence | Classify a toy dataset and observe the effect of changing an input. | ML engineer; applied AI engineer. |
| Computer Graphics and Games | Change lighting or viewing angle in a rendered scene. | Graphics engineer; game developer. |
| Computer Security | Send a toy message through a channel and toggle protection. | Security engineer; security analyst. |
| Database Systems | Search a small dataset and compare a scan with an index. | Database engineer; data engineer. |
| Human-Computer Interaction | Compare interface choices and their effect on a simple task. | UX engineer; UX researcher. |
| Multimedia Information Retrieval | Choose a sample and retrieve similar items from a local collection. | Search engineer; multimedia retrieval engineer. |
| Networking and Distributed Systems | Route packets across nodes and simulate a failed node. | Distributed systems engineer; network engineer. |
| Parallel Computing | Compare a task queue handled by one worker and several workers. | Parallel computing engineer; GPU software engineer. |
| Programming Languages | Step through a tiny expression being parsed or evaluated. | Compiler engineer; developer tools engineer. |
| Software Engineering | Follow a change through development, tests and release, including a failing test. | Software engineer; test automation engineer. |

Acceptance: all eleven areas are reachable, each demo responds meaningfully to an action, and its visual output matches its explanatory text. Toy models are labelled as simplified demonstrations; fabricated metrics are not presented as measured results.

### FR5 - Presentation controls

Provide previous/next controls, current-slide progress, keyboard navigation and a fullscreen toggle when supported. Bound navigation at the first and last slides. Do not intercept arrow keys while someone is operating a form control. Handle unavailable or rejected fullscreen requests gracefully; normal presentation remains usable. Provide a clear exit to the portfolio.

Acceptance: the full main narrative can be presented using keyboard or visible controls without getting trapped. Native fullscreen Escape remains available.

### FR6 - Exploration and demonstration behaviour

Provide a clear switch between presentation and exploration. Exploration exposes every area's description, application, demo and career roles. Switching views should retain a sensible location rather than discard the user's current topic. Provide replay/reset where stateful demos require it. Run demonstrations locally without accounts, live APIs or external video dependencies.

Acceptance: students can revisit any of the eleven areas independently after the talk. Essential explanations remain understandable when motion is reduced or paused.

### FR7 - Closing remark and action

End in Vietnamese with excitement rooted in agency and curiosity, a reflection prompt and an achievable first project. Suggested direction: “Em không cần biết hết hôm nay. Hãy chọn một vấn đề em quan tâm — rồi bắt đầu tạo ra lời giải của mình.” Pair it with a concrete small challenge, such as choosing one field and sketching a solution for a school problem.

Acceptance: the final scene connects the application examples to something students can try, and offers access to exploration and official learning references.

### FR8 - Website integration

Direct opening, refresh, back and forward navigation must work with the talk hash route on GitHub Pages. Both existing portfolio templates expose the entry link. Keep talk styling scoped, and preserve existing section/journal routes, portfolio template choice, colour preference and layout behaviour. Include a return action to the portfolio.

## Non-functional requirements

- NFR1 Accessibility: semantic controls, visible keyboard focus, accessible names, readable contrast, Vietnamese language metadata for the talk, and text equivalents for teaching visuals. Information must not rely on colour alone. Honour reduced-motion preferences and provide a way to pause continuous teaching animations.
- NFR2 Readability: large headings, concise slide text, high-contrast labels and layouts usable on a projector; no essential content clipped on smaller screens. Exploration supports phone reading.
- NFR3 Performance: avoid inactive demo animation loops; stop work on unmount and when a demo is not visible. Load the talk without unnecessarily increasing the initial portfolio workload. Prefer native CSS/SVG/canvas techniques suitable for the approved visuals.
- NFR4 Reliability: static build and existing GitHub Pages base-path handling remain valid. Core talk and demos do not require runtime network requests after assets load. This is not a requirement for offline installation or a service worker.
- NFR5 Maintainability: keep Vietnamese content and focus-area metadata editable separately from visual logic, with stable IDs and typed contracts. Avoid global event or style leaks into the portfolio.

## Verification and success criteria

Verify completeness of all eleven entries; meaningful demo response/reset; presentation bounds and keyboard behaviour; reduced-motion alternatives; view switching; fullscreen fallback; direct hash loading and history; and both entry links. Run appropriate TypeScript/build and existing regression tests after implementation. Visually inspect representative desktop projection and mobile layouts when browser tooling is available; report any verification limit.

Success: the speaker can deliver the core story in 10–15 minutes; students can articulate the CS/CE distinction, associate an area with an application and possible job, and name an approachable next step. Timing is an editorial target requiring a rehearsal, not an automated assertion.

## Scope boundaries

No new backend, login, student tracking, live AI inference, admissions counselling, salary forecasting or separate PowerPoint export is required. The existing GitHub Pages website remains the destination. Publishing is handled after implementation and relevant workflow gates.

## Extension compliance

| Extension | Enabled | Stage assessment |
| --- | --- | --- |
| Security Baseline | No, Q7 B | N/A: explicitly disabled; full rules not loaded. |
| Property-Based Testing | No, Q8 C | N/A: explicitly disabled; ordinary functional and regression checks still apply. |

No enabled extension has a blocking finding.

## Next stage assessment

User Stories is required: new student-facing interactions and separate presenter/student journeys satisfy the high-priority criteria. After requirements approval, prepare a short story-generation plan with acceptance criteria and persona mapping.
