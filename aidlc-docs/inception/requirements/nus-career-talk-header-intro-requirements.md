# NUS Career Talk - Header and Speaker Introduction Requirements

Status: approved by explicit user response on 2026-10-18. This extends the approved existing talk rather than replacing it.

## Intent analysis

Request type: UI bug fix and small presentation enhancement. Scope: existing header components, talk content/view and slide-navigation models/tests. Complexity: low to moderate. Requirements depth: minimal. User selected Question 1 A in the saved question file and explicitly requested the existing portfolio photo.

## R1 - Comfortable NUS CS entry

Keep “NUS CS” and its arrow together on one line, give the control adequate horizontal/vertical padding and a reserved non-shrinking width. Present it as a deliberate, visible action. Ensure neighbouring brand/navigation/display controls remain reachable. When full section navigation cannot fit, use the compact menu at an appropriate desktop breakpoint instead of squeezing the action. Apply the appropriate equivalent spacing protection to Business.

Acceptance: Engineering and Business work at 360px phone, approximately 1110px screenshot width, 1280px, 1440px and a wide desktop viewport. No NUS/CS/arrow wrapping, overlapping labels or clipped essential controls. The mobile talk link remains available and closes its menu when followed.

## R2 - Short speaker-introduction slide with portfolio photo

Add a Vietnamese introduction slide directly after the opening and before the CS/CE comparison. Reuse `src/assets/profile.jpeg`, the exact portrait imported by the existing portfolio profile record. Show the original image with respectful cropping/aspect ratio, responsive sizing and descriptive alternative text. Do not generate or modify the person's likeness.

Proposed content, verified against `src/assets/documents/resume.pdf`:

**Nham Quoc Hung**

**Từ NUS CS đến những sản phẩm thực tế**

- **NUS Computer Science:** Honours (Distinction), hướng chuyên sâu Database Systems; học bổng ASEAN.
- **Kinh nghiệm thực tế:** Data Engineer tại Torilab; từng làm Software Engineer tại Rakuten Asia và Data Engineer tại Sea Limited.
- **Tiếp tục học hỏi:** Đang theo học thạc sĩ Computer Science tại University of Texas at Austin (2024–2026, theo CV).
- **Chia sẻ & đồng hành:** Chia sẻ kiến thức kỹ thuật và hỗ trợ học sinh khám phá học tập, học bổng và hướng nghề nghiệp.

Keep this a 30–45 second introduction rather than a full CV. Do not state the UT Austin degree is completed: the CV lists December 2026 as its end date. Omit contact details, metrics and long technology lists from this slide. The short talk remains targeted at 10–15 minutes; a timed rehearsal is still a human check.

Acceptance: ten narrative scenes, with the introduction second; portrait and concise text legible on projection and phone layouts. No new standalone webpage is required by choice A.

## R3 - Preserve navigation and exploration context

Remove assumptions tied to nine slides or hard-coded featured-slide indexes. Derive narrative bounds and current featured field from the slide content so the inserted introduction cannot break previous/next, progress, keyboard navigation or topic-preserving view switching.

Acceptance: first/last bounds reflect all ten scenes; algorithms/AI/graphics exploration still opens its own field, and returning restores the selected presentation position. All eleven demos remain accessible and unchanged in learning outcomes.

## Verification

Run relevant content/model/view/header regressions and the production build. Inspect header spacing at the problem width and surrounding breakpoints plus the introduction in desktop/projection and phone layouts when local browser tooling permits. State any verification limits. No new dependency, backend, hosting change or publication is required.

## Reuse and stage assessment

Reuse the existing presenter/student personas, Application Design, Functional/NFR Design and single-unit structure. The change stays within established components and constraints. Workflow Planning will adapt the implementation sequence and existing story/acceptance mapping to R1–R3 without restarting the original full-system design.

## Extension compliance

Security Baseline and PBT remain explicitly disabled (N/A); full rules skipped. Existing accessibility and regression obligations remain in scope. No enabled blocking findings.

## Explicit user review revisions - 2026-10-18

This review request supersedes the earlier introduction draft and dark talk palette: use Nhâm Quốc Hùng and plural “các em”; show CS engineering and student-advising expertise; remove CV wording from the learner-facing presentation. Use professional Vietnamese, labelled balanced CS/CE comparison flows, and a friendly professional light background. Explain NUS as the speaker's own course of study used as a reference to introduce the discipline. Retain accurate factual credentials, the portfolio portrait and all existing learning interactions. This is an authorised generated-code revision, with the revised result returning to the same review gate.

## Additional speaker background - user-supplied review revision

The introduction now includes six concise highlights: 12 years living and studying in Singapore; four years of ASEAN secondary scholarships and four years of ASEAN undergraduate scholarships; NUS CS credentials; work experience at PSA International, Sea Group, Rakuten Group and Torilab; ongoing UT Austin study; and student advising. The new personal facts and employer group names are supplied explicitly by the user. Existing portrait and responsive card grid are reused. Five affected presentation/content tests passed and the production build passed; the previous main-bundle warning remains. This content-only revision did not receive a new browser screenshot pass. Generated-code review remains pending. Disabled extensions remain N/A.

## Requested fullscreen behaviour

Provide a fitted presentation mode that shows the entire current scene without scrolling, preserves demos, supports keyboard navigation and Escape, and offers a fitted-window fallback when native fullscreen is unavailable. Normal reading and exploration remain available.

## CS overview addition

User requested a clearer overview of CS. Include a standalone foundational scene after the speaker and before CS/CE: plain Vietnamese definition, information/algorithm/system concepts, programming’s role and a relatable school example. Current narrative count is eleven.

## Vietnamese editorial requirement

Use natural Vietnamese suitable for a live high-school career talk across the full narrative, field exploration and demo instructions. Replace translated slogans with specific explanations and an actionable closing. Retain established technical meaning, credentials and audience address các em.

## Five featured simulations

User requested removal of the standalone NUS curriculum introduction and five simulation scenes instead of three. Selected existing database/security simulations alongside algorithms/AI/graphics. Current narrative count: twelve; full eleven-topic exploration retained.
