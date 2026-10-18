# Header and Photo Introduction - Implementation Summary

Status: all seven approved generation steps complete; generated-code review pending.

## Changes

- Engineering header: NUS CS is a padded 108×44px non-shrinking, non-wrapping action. Header container can grow to 1600px; full section navigation activates at 2xl, while narrower desktops retain the compact menu. Profile identity and action controls have explicit space. Mobile talk entry remains available.
- Business header: matching padded, non-wrapping NUS CS action with a reserved width and theme-consistent surface.
- Introduction: second talk scene shows the unchanged existing `profile.jpeg` portrait, Nhâm Quốc Hùng and four concise Vietnamese professional highlights. Education, Torilab/Rakuten/Sea experience, ongoing UT Austin study and mentoring/sharing come from the actual bundled CV.
- Navigation: final slide bound comes from slide count; featured exploration context comes from the current scene's area ID, replacing fixed numeric indexes. The talk now has ten scenes; all eleven demos retain their learning interactions.

## Source files

Modified `src/components/Navbar.tsx`, `src/templates/business/BusinessShell.tsx`, and `src/features/nus-talk/content.ts`, `PresentationView.tsx`, `talk.css`, `models.ts`, `content.test.ts`, `models.test.ts`, `TalkPage.test.tsx`.

Reused the existing profile record/photo; no image file was edited, no dependency added, and no route, hosting configuration or portfolio template added. Existing header integration tests still cover both entry points; geometry was verified in a real browser rather than through CSS-mirroring tests.

## Verification

- Focused affected tests: 26 passed across six files.
- Full regression suite: 115 tests passed across 16 files.
- Production TypeScript/Vite build: passed. Vite bundling phase 2.46s; talk JS about 44.62 kB / 14.55 kB gzip and CSS 10.69 kB / 2.89 kB gzip. The pre-existing main chunk warning remains.
- `git diff --check`: passed.
- Headless Chrome: Engineering and Business at 360, 1110, 1280, 1440, 1536 and 1920px. Each visible talk action measured 108×44px with a single text line; brand and action bounds did not overlap; no horizontal document overflow. At phone width the talk entry remains in compact navigation.
- Speaker slide: checked at 1440×900, 1280×720 and 360×800. Photo loaded, retained a square 298×298 rendered image and showed four highlights with progress 02 / 10. Reviewed screenshots for the narrow desktop header, wide header and speaker layout. No browser runtime exceptions recorded.
- Temporary QA screenshots/report are under `/private/tmp/nus-amend-*` and `/private/tmp/nus-header-intro-report.json`. These are local verification artifacts, not application assets.

## Limits and editorial note

Checks used Chrome on this local machine, not Safari/Firefox, screen readers or physical phones. Phone content scrolls vertically; a live timed rehearsal of the 10–15 minute talk remains unverified. Photo and career facts reflect the supplied portfolio/CV. UT Austin study is explicitly ongoing according to the CV's December 2026 end date.

## Preview and review

With Node/npm available run `npm run dev`, open the printed Local URL, then use `#/talks/nus-cs` and advance once to the introduction. The temporary QA browser/server are stopped at handoff. No changes were committed, pushed or published.

Choose Request Changes or Continue to Next Stage in `header-intro-review-questions.md` before the formal amendment Build and Test handoff. Existing baseline stage evidence is retained as dated history; this summary supersedes its nine-scene count for the current page.

Security Baseline and PBT: N/A, explicitly disabled. Full rules skipped; no enabled blocking findings.

## Generated-code review revisions - 2026-10-18

Implemented the user's explicit request for changes at the generated-code review gate:

- Address students as “các em”; use Nhâm Quốc Hùng, including the shared portfolio identity. Remove CV references from the presentation, while keeping the supplied document as the factual editorial source.
- Introduce both CS expertise and student advising through education, engineering experience and concrete advising activities. Keep UT Austin study ongoing; retain the original portrait.
- Rewrite slide and topic copy in professional Vietnamese. Present the NUS programme as the speaker's familiar example for explaining CS subjects, applications and careers.
- Replace opaque comparison glyphs with two labelled three-stage robot flows. Give CS/CE matching hierarchy, equal desktop column dimensions and aligned career sections; stack them on phones. The NUS reference slide also uses equal desktop panels.
- Use a warm off-white/sage background, navy typography, white panels and restrained blue/green accents. Adjust demo text, nodes, outlines, focus indicators and selected controls to suit the light palette. Portfolio theme palettes are preserved.

Latest verification supersedes earlier counts above: 116 tests passed in 16 files; production TypeScript/Vite build passed; git diff whitespace check passed. Talk bundle: 47.69 kB JS / 15.24 kB gzip, 13.39 kB CSS / 3.40 kB gzip. Existing main-bundle size warning remains.

Chrome checked all ten scenes at 1440×900, 1280×720 and 360×800 with no horizontal overflow or runtime exceptions. At 1440px, comparison cards measured equal 673.45×471.36px; at 1280px equal 597.28×493.11px. NUS cards also matched in position and dimensions at both desktop widths. Reviewed screenshots for introduction, comparison, NUS context, area map and AI demo. Smaller viewports use vertical scrolling; this remains a scrolling presentation page, not a fixed-height slide export. Local screenshots and report: /private/tmp/nus-amend-revision-*.png and /private/tmp/nus-revision-report.json.

Security Baseline and PBT remain disabled: N/A; full rules skipped. No enabled blocking findings. Generated-code approval is still pending; the user's request for changes does not approve the revised result or authorise publishing.

## Additional speaker background - user-supplied review revision

The introduction now includes six concise highlights: 12 years living and studying in Singapore; four years of ASEAN secondary scholarships and four years of ASEAN undergraduate scholarships; NUS CS credentials; work experience at PSA International, Sea Group, Rakuten Group and Torilab; ongoing UT Austin study; and student advising. The new personal facts and employer group names are supplied explicitly by the user. Existing portrait and responsive card grid are reused. Five affected presentation/content tests passed and the production build passed; the previous main-bundle warning remains. This content-only revision did not receive a new browser screenshot pass. Generated-code review remains pending. Disabled extensions remain N/A.

## Audience address revision

Removed presenter first-person wording from the NUS title, narrative, biographical panel and labels. Replaced collective address with các em where applicable; retained the NUS programme as the example grounded in the speaker’s studies. Source scan confirms no tôi, chúng ta or các bạn in the talk code/content. Five affected tests and production build passed; previous bundle warning remains. Generated-code review unchanged; disabled extensions N/A.

## Fitted fullscreen presentation - 2026-10-19

The fullscreen control now enters a fitted presentation layout. A measured 1440px canvas scales the complete current scene to the available width and height, updates through ResizeObserver, and preserves interactive controls. Compact toolbar/footer remain available. Demo scenes place simulations beside applications/careers. Browser fullscreen is requested on entry; unsupported or rejected requests retain a fitted window layout with a status message. Escape exits fallback mode; native fullscreenchange restores normal layout on browser exit. Presentation mode locks page scrolling and restores it on exit/unmount. Exploration remains scrollable. Arrow keys and Page Up/Down navigate when focus is outside interactive controls. Source details remain available in normal reading mode.

Verification: 118 tests across 16 files passed; production TypeScript/Vite build passed. Chrome measurements confirmed all ten complete scene bounds fit the frame at 1920×1080, 1280×720 and 1024×768 (30/30); no runtime exceptions. Report: /private/tmp/nus-fullscreen-report.json. Window fallback was exercised in Chrome; native fullscreen lifecycle was covered by mocked browser events, not a physical projector/browser fullscreen rehearsal. Previous main-bundle warning remains. Very small screens necessarily render smaller slide text; normal reading mode remains available. Security Baseline/PBT disabled and N/A. Generated-code review remains pending; no publication.

## Demo fullscreen correction - 2026-10-19

Corrected the fitted grid to place the actual DemoHost wrapper rather than its nested panel. Demo/career columns now align without the large blank row; the demo receives a wider 1.7:1 column. Added “Phóng to demo” to every demo: a viewport overlay attached inside the fullscreen root but outside the scaled canvas. Interactive state survives expansion/return. Escape closes only the demo first; focus returns and Tab remains within the dialog. The visualization flexes within the viewport with controls/results visible. Other non-SVG demos can scroll in the overlay when necessary.

Verification: 119 tests in 16 files passed; build passed; existing bundle warning retained. Chrome: 30/30 scene fit checks at 1920×1080, 1280×720 and 1024×768, with demo/career geometry aligned for all three featured scenes at every size; no runtime exceptions. Inspected enlarged algorithms demo screenshot at 1280×720 showing graph, inputs, result and note within the screen. Local evidence /private/tmp/nus-demo-expanded-report.txt and /private/tmp/nus-amend-demo-expanded.png. No physical projector/native fullscreen rehearsal. Disabled extensions N/A; review remains pending.

## CS overview - 2026-10-19

Added “Khoa học máy tính là gì?” after the speaker introduction and before CS/CE. The scene defines CS, explains information representation, algorithms/correctness/efficiency and practical systems, then connects them through a school timetable example. A final note explains programming as the tool for expressing/testing solutions and the broader analytical skills CS develops. Audience address remains các em. Three-column overview and example layouts stack in reading mode on phones and retain their presentation structure in the fitted canvas. Narrative now has eleven scenes; slide-count and featured-navigation regressions updated. All 119 tests in 16 files passed and production build passed; prior bundle warning remains. This editorial scene was not separately screenshot-verified. Previous ten-scene browser evidence is historical, not verification of the new scene. Disabled extensions N/A; generated-code review pending.

## Career card wording clarification

Replaced “Hiểu dữ liệu” with “Giúp máy học và dự đoán”, illustrated by image recognition, music recommendations and demand prediction. Replaced “Xây nền tảng” with “Giữ ứng dụng hoạt động ổn định”, illustrated by message delivery, account protection and concurrent users. Existing AI/network exploration links retained. Six affected tests and production build passed; existing bundle warning remains. No new screenshot pass. Disabled extensions N/A; review remains pending.

## Complete Vietnamese editorial pass - 2026-10-19

Reviewed all eleven narrative scenes, all eleven field descriptions and their applications/interest/career explanations, navigation/source copy and all eleven demo instructions. Replaced translated slogans and clipped rhetorical questions with direct Vietnamese, concrete examples and explanatory instructions. Closing now reads “Bắt đầu từ một vấn đề các em muốn giải quyết”, followed by a small-project invitation. Decorative orbit labels now use natural action phrases. Clarified algorithm, database, networking, language-processing, security and parallel-computing demo descriptions without changing computations or factual claims. Official English field/job names remain for reference; Vietnamese surrounding explanations are revised. Preserved các em, accented identity, credentials, fullscreen and interactions. All 119 tests passed and production build passed; prior bundle warning remains. No fresh browser screenshot pass for this copy revision. Disabled extensions N/A; review remains pending.

## Five featured simulations - 2026-10-19

Removed the standalone NUS curriculum introduction scene and its unused render branch. Featured simulations now cover algorithms, AI, graphics, database systems and security; the additional scenes reuse the existing interactive demos and enlarged-view control. Numbering updated sequentially. Narrative now has twelve scenes, with comparison leading directly into the field map. All eleven exploration topics remain available. Tests cover exactly five featured areas, absence of NUS scene, navigation bounds and topic-preserving exploration/return for each featured scene. Full suite: 124 tests passed across 16 files; production build passed; existing bundle warning remains. No new browser screenshot pass. Earlier scene-count/geometry reports remain historical. Disabled extensions N/A; generated-code review pending.

## Replace database featured scene

Featured scene six now demonstrates network delivery/rerouting under machine failure instead of binary-search/database illustration. Five featured areas are algorithms, AI, graphics, networks and security; twelve total scenes. Existing optional database exploration remains accessible with accurate labels Tìm lần lượt and Tìm kiếm nhị phân, removing Chỉ mục mẫu. All 124 tests passed and production build passed; previous bundle warning unchanged. No new screenshot pass. Disabled extensions N/A; review pending.

## Edge labels and terminology

Confirmed no Chỉ mục mẫu remains in application source; optional database demo correctly labels its algorithm Tìm kiếm nhị phân. Shared graph now offsets vertical-edge weight labels 18 SVG units to the right of the line and vertically centres the baseline, fixing both weights 1 on B–C and D–E. Other edge labels retain their positions. Eleven demo regressions passed; production build passed with existing bundle warning. No fresh browser screenshot verification. Disabled extensions N/A; existing review status retained.
