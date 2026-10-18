# NUS Career Talk - User Stories

Status: approved by explicit user response “approve” on 2026-10-18.

Personas: P1 presenter and P2 high-school student, defined in `personas.md`. Requirements: `../../requirements/nus-career-talk-requirements.md`.

## US01 - Enter and leave the talk

As a presenter or student, I want to open the talk from the portfolio or a shared link so that I can reach it easily and return afterwards.

Personas: P1, P2. References: FR8, NFR4, NFR5.

- Given either Engineering or Business on desktop or mobile, when I use the visible talk link, then the dedicated `#/talks/nus-cs` experience opens.
- Given a shared talk URL, when I open or refresh it, then the talk loads under the existing GitHub Pages base path without a server route error.
- Given I entered the talk, when I use browser back/forward or the portfolio return action, then navigation resolves correctly and existing template, colour and layout preferences are preserved.
- Given portfolio section and journal links, when I follow them after leaving the talk, then their existing behaviour remains available and talk keyboard handlers/styles do not interfere.

## US02 - Present a short, controlled narrative

As a presenter, I want dependable slide controls so that I can guide the audience through a 10–15 minute talk.

Personas: P1, P2. References: FR1, FR5, NFR1, NFR2, NFR4.

- Given the opening slide, when I advance through the narrative, then previous/next controls, keyboard navigation and current-slide progress stay consistent.
- Given the first or last slide, when I attempt to move beyond it, then navigation remains bounded without blank content.
- Given focus is inside an interactive input, when I use its arrow keys, then it operates the input without changing slides.
- Given fullscreen is supported, when I request it and later exit using Escape or the control, then the view and control state remain usable.
- Given fullscreen is unavailable or rejected, when I attempt to use it, then the presentation remains usable in its normal view with an understandable fallback.
- Given a rehearsed main narrative, when the presenter covers the introduction, comparison, focus map, three featured demos and closing, then it targets 10–15 minutes without requiring all eleven demos to be run. Rehearsal, not an automated timer assertion, evaluates timing.

## US03 - Understand CS and Computer Engineering

As a student, I want a familiar comparison so that I understand the different emphases and overlapping skills of CS and Computer Engineering.

Personas: P2, P1. References: FR1, FR2, NFR1, NFR2.

- Given no coding background, when I read the Vietnamese comparison, then goals, common study topics and example work are explained without requiring course codes.
- Given a shared example such as a robot, when I inspect its visual and accompanying text, then I can connect software/algorithms, hardware and embedded control to their collaboration.
- Given the comparison, when I review both disciplines, then it explains overlap rather than making an absolute software-versus-hardware split.
- Given NUS-specific degree statements, when content is finalised, then they are supported by official CS/CE references with a verification date.

## US04 - Discover NUS CS and the eleven focus areas

As a student, I want an understandable map of NUS CS so that I see the range of directions beyond a single job title.

Personas: P2, P1. References: FR1, FR3, FR4, NFR1, NFR2, NFR5.

- Given the focus-area overview, when I inspect it, then all eleven official names appear alongside beginner-friendly Vietnamese explanations, with each area identifiable through text as well as colour.
- Given “Focus Areas”, when the term is introduced, then it is explained as “hướng chuyên sâu” and distinguished from separate degree programmes and formal specialisation titles.
- Given the overview or an area entry, when I seek more information, then relevant official NUS sources and a verification date are accessible.
- Given the educational page, when I read the introduction, then it does not invent speaker experiences or imply NUS endorsement.

## US05 - See three memorable applications live

As a student watching the talk, I want selected concepts demonstrated visually so that the fields feel concrete within the short presentation.

Personas: P2, P1. References: FR1, FR4, FR6, NFR1, NFR2, NFR3, NFR4.

- Given the featured live sequence, when the presenter visits Algorithms & Theory, Artificial Intelligence, and Computer Graphics and Games, then each has a working, controllable visual tied to a familiar application and possible careers.
- Given a demonstrated input change, when the visual updates, then the observable result agrees with the explanatory text and is labelled as a simplified teaching model where appropriate.
- Given a finished or altered demo, when replay/reset is relevant and selected, then the demo returns to a clear initial state.
- Given all talk assets have loaded, when these demos run, then they do not depend on live API calls or external video playback.

## US06 - Explore any field independently

As a student, I want to try every field's demo and inspect related careers so that I can find a direction connected to my interests.

Personas: P2, P1. References: FR1, FR4, FR6, NFR1, NFR2, NFR3, NFR4, NFR5.

- Given exploration view, when I choose any of the eleven fields, then its official name, Vietnamese explanation, distinct demo, everyday application, at least two illustrative job roles and an interest connection are available.
- Given each demo's input/action in the matrix below, when I operate it, then the field-specific observable result appears and agrees with a text explanation.
- Given a stateful demo, when I replay/reset it, then repeated exploration remains understandable rather than accumulating stale results.
- Given job examples or demo metrics, when I read them, then careers are described as possibilities and toy results as illustrative; neither employment guarantees nor fabricated measured results are claimed.
- Given I leave a demo or it is inactive, when it is no longer visible, then unnecessary animation work stops; unrelated portfolio use is not slowed by active hidden demonstrations.
- Given a phone viewport, when I explore, then controls and essential explanations remain readable and reachable without clipped content.

## US07 - Move between the talk and exploration

As a presenter or student, I want to switch views without losing my topic so that I can investigate a question and resume the narrative.

Personas: P1, P2. References: FR5, FR6, NFR1, NFR4.

- Given a featured-area slide, when I switch to exploration, then the same area is the initial exploration topic.
- Given I entered exploration from a presentation position, when I return, then I resume that presentation position rather than being sent to the opening.
- Given I explore a non-featured area, when I return to the presentation, then the preserved presentation position remains valid; the interface does not invent a missing featured slide.
- Given I switch views with a keyboard, when the new view appears, then focus moves to a meaningful heading or control and is not left on hidden content.

## US08 - Participate with accessible visuals and controls

As a student or presenter, I want readable, keyboard-operable content and controllable motion so that I can participate comfortably.

Personas: P1, P2. References: FR1, FR5, FR6, NFR1, NFR2, NFR3, NFR5.

- Given keyboard-only use, when I traverse controls, then each has a visible focus indicator, meaningful name and operable action without a keyboard trap.
- Given a Vietnamese talk, when assistive technology encounters it, then Vietnamese language metadata and semantic content support correct reading.
- Given reduced-motion preference or paused animations, when I inspect any teaching visual, then the explanation and result remain understandable without relying on motion.
- Given a continuous teaching animation, when I use pause, then motion stops without hiding the core explanation; resume/replay remains available as appropriate.
- Given a projector or small screen, when I inspect the content, then headings, labels and focus-area distinctions remain legible with adequate contrast and without reliance on colour alone.
- Given a demo is left or the talk is closed, when I navigate the portfolio, then animation work and talk-specific event handling no longer affect it.

## US09 - Leave excited with a practical next step

As a student, I want an inspiring but achievable challenge so that I can begin exploring a computing interest today.

Personas: P2, P1. References: FR1, FR3, FR7, NFR1, NFR2.

- Given the final scene, when I read it, then a Vietnamese closing remark connects curiosity and agency to the application examples without implying I must already know how to code.
- Given a reflection prompt, when I choose an interest, then I can identify a small action such as sketching a solution to a school problem in one selected field.
- Given the closing, when I want to continue, then exploration and official learning references are accessible using visible, keyboard-operable actions.

## Eleven-area acceptance matrix

Each row is a required acceptance scenario for US06; rows M01–M03 also apply to US05. Applications and roles below are illustrative teaching choices, not claims about official NUS placement outcomes. All rows also require the Vietnamese explanation, interest connection, text alternative and reset/replay where relevant from US06 and US08.

| ID / area | Given / action | Observable result and application | At least two illustrative roles |
| --- | --- | --- | --- |
| M01 Algorithms & Theory | Given a small route map, change the destination and run route finding. | A valid short route changes to the selected destination, with an explanation of route optimisation for deliveries or travel. | Algorithms engineer; optimisation engineer. |
| M02 Artificial Intelligence | Given a toy classifier, change a sample input and classify it. | Predicted class or decision illustration changes consistently with the toy model; explain simple recommendation or recognition applications and model limitations. | ML engineer; applied AI engineer. |
| M03 Computer Graphics and Games | Given a rendered scene, adjust lighting or viewing angle. | Scene shading or viewpoint visibly responds; connect the result to games or visual simulation. | Graphics engineer; game developer. |
| M04 Computer Security | Given a toy message/channel, toggle protection and send it. | The displayed transmitted representation and explanatory protection state change; connect to private messaging and avoid implying the toy model is production cryptography. | Security engineer; security analyst. |
| M05 Database Systems | Given a local dataset, choose a target and compare scanning with an index. | The same matching record is found with distinct illustrated lookup steps; connect to finding a product in a shop catalogue. | Database engineer; data engineer. |
| M06 Human-Computer Interaction | Given two interface variants, switch variants and perform the same task. | The required interaction path or clarity changes visibly; connect to usable school or everyday apps without inventing measured user-study results. | UX engineer; UX researcher. |
| M07 Multimedia Information Retrieval | Given a local collection, choose a sample and search for similar items. | Similarity matches/ranking update consistently with the stated toy criterion; connect to searching by image or other media. | Search engineer; multimedia retrieval engineer. |
| M08 Networking and Distributed Systems | Given connected nodes, send a packet and disable an intermediate node. | Packet delivery takes an available alternate path or explicitly reports no route; connect to resilient online communication. | Distributed systems engineer; network engineer. |
| M09 Parallel Computing | Given a fixed task queue, change worker count and run it. | The task distribution and completion illustration change under the stated toy assumptions; connect to processing many images without claiming linear speedup in real systems. | Parallel computing engineer; GPU software engineer. |
| M10 Programming Languages | Given a tiny valid expression, step through parsing or evaluation. | Tokens, structure or intermediate values progress to a consistent result; connect to compilers, interpreters and developer tools. | Compiler engineer; developer tools engineer. |
| M11 Software Engineering | Given a change with a failing test, run the workflow, apply a correction and rerun. | The failing path blocks release; the corrected path passes checks and reaches release; connect to reliable application updates. | Software engineer; test automation engineer. |

## Requirement traceability

| Requirement | Stories |
| --- | --- |
| FR1 Vietnamese content | US02–US06, US08, US09 |
| FR2 CS/CE distinction | US03 |
| FR3 NUS and source accuracy | US03, US04, US09 |
| FR4 Complete area coverage | US04, US05, US06; matrix M01–M11 |
| FR5 Presentation controls | US02, US07, US08 |
| FR6 Exploration behaviour | US05–US08 |
| FR7 Closing and action | US09 |
| FR8 Website integration | US01 |
| NFR1 Accessibility | US02–US09 |
| NFR2 Readability | US02–US06, US08, US09 |
| NFR3 Performance | US05, US06, US08 |
| NFR4 Reliability | US01, US02, US05–US07 |
| NFR5 Maintainability | US01, US04, US06, US08; supporting design review below |

NFR5 additionally requires design/code review of separately editable Vietnamese content, stable typed field IDs and scoped styles/listeners. This internal quality constraint supports the stories but does not need an invented user-facing feature.

## INVEST and dependency review

- Independent: story outcomes can be reviewed separately; US01 provides the common entry, US04 provides area naming, and US05/US06 share demo content. US07 depends on both views. US08 is a cross-cutting acceptance obligation for every journey, not a deferred optional enhancement.
- Negotiable: visual details remain open within approved concepts; the eleven-area coverage and learning outcomes are fixed requirements.
- Valuable: each story identifies a presenter or student benefit.
- Estimable: bounded actions and outcomes specify acceptance without speculative effort estimates.
- Small: US06 is an umbrella for eleven bounded scenarios M01–M11. Each row can be assessed separately while sharing entry/content/accessibility criteria. US08 is deliberately cross-cutting rather than falsely presented as an independent small implementation task.
- Testable: controls, demo outcomes, history and state have observable checks; projection readability, factual review and rehearsal timing need manual review. No checks have been executed at this documentation stage.

## Scope and compliance review

All eight functional and five non-functional requirements are mapped. The live sequence retains the approved 10–15 minute target and three featured demos; independent exploration retains all eleven. No new backend, accounts, live inference, admissions/salary guidance or employment guarantees were introduced.

Security Baseline: N/A, disabled by Q7 B. Property-Based Testing: N/A, disabled by Q8 C. Full extension rules were skipped; no enabled extension has a blocking finding. Ordinary correctness, accessibility and regression checks remain acceptance obligations.

## US10 - Meet the speaker (approved focused amendment)

As a high-school student, I want a short introduction to the speaker and their experience so that I understand the perspective behind the talk.

Personas: P1, P2. References: amendment R2/R3, FR1, NFR1/NFR2.

- Given the opening, when I advance, then scene two shows the existing portfolio photo, Nham Quoc Hung and the concise approved Vietnamese CV highlights.
- Given the education highlight, when I read it, then UT Austin study is ongoing according to the CV, not described as completed.
- Given phone or projection layout, when I inspect the introduction, then the original portrait is not stretched and text remains reachable.
- Given the inserted scene, when I navigate to a featured demo and explore, then the correct field opens and the presentation position is retained on return.

US01 additionally requires the NUS CS action and arrow to stay together with reserved width/padding and compact navigation before crowding. US02/US07 now use ten content-derived scenes. Implementation coverage is recorded in `aidlc-docs/construction/nus-career-talk/code/header-intro-summary.md`.
