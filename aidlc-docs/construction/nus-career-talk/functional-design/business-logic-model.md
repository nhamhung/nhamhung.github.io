# Business Logic Model

## Presentation and exploration

Narrative order: opening → speaker introduction with portfolio photo → CS/CE comparison → NUS introduction → eleven-area map → algorithms demo → AI demo → graphics demo → career connections → closing. Editorial target: approximately twelve minutes, within 10–15 minutes after rehearsal. Exploration is untimed.

Previous/next clamp to the first/last slide. Progress is current one-based position over ten scenes. Entering exploration keeps the slide unchanged: an explicit valid area selection takes precedence, otherwise select the current featured slide's area, otherwise retain the last selected area. Returning to presentation restores the retained slide. Selecting a non-featured exploration area never changes the presentation position.

Changing slide/mode/area focuses an appropriate visible heading, without stealing focus on every demo input update. Presentation arrow-key shortcuts are inactive in exploration and do not override editable fields, controls that use arrow keys, modifier combinations or events already handled by a control. Exact browser mechanics belong to NFR Design.

## Common demo rules

All examples are labelled simplified local models. A meaningful input action updates an observable diagram and textual explanation/result. Reset restores the initial inputs and clears run/step state. For staged demos, replay starts from the first stage; no stage advances beyond its last result. Continuous decorative/teaching motion obeys motion policy; explicit user stepping and results remain available when paused. Changing inputs invalidates stale computed results or recomputes them explicitly, as stated below.

## M01 - Algorithms & Theory

Finite weighted undirected graph, nodes A–F, start A. Edges: A–B 2, A–C 5, B–C 1, B–D 4, C–E 2, D–E 1, D–F 3, E–F 2. Initial destination F; choices C, D, E, F. Run Dijkstra with non-negative weights; break equal-cost choices by node ID. Show highlighted route and total weight. F has minimum cost 7 via A–B–C–E–F; E costs 5 and C costs 3. Changing destination clears the prior highlight until Run. Reset returns destination F and no result. Delivery-route application; weights are illustrative units.

## M02 - Artificial Intelligence

Toy nearest-neighbour classifier with two labelled classes of fruit in a normalised feature space (size and sweetness, each 0–10). Training points: class Apple (2,3), (3,4), (4,3); class Mango (7,8), (8,7), (9,9). Sliders select the query, initially (5,5). Run computes squared Euclidean distance to all six labelled samples and selects the nearest label; ties use dataset order. Show sample/query points, chosen neighbour and class. Explain labelled examples and similarity, not production fruit recognition or a live language model. A query at (2,3) gives Apple; (8,7) gives Mango. Changing input clears prior result. Reset restores (5,5).

## M03 - Computer Graphics and Games

A simple lit scene with a cube/planar faces. Light-angle control spans 0–360 degrees; initial 45 degrees. Face brightness is ambient plus a bounded diffuse term, conceptually `0.2 + 0.8 * max(0, dot(unit normal, unit light direction))`. Update shading and light-direction marker immediately as the control changes; label that materials, shadows and full rendering complexity are simplified. Reset angle 45. No fabricated rendering-performance metric.

## M04 - Computer Security

Fixed toy message HELLO, protection toggle initially off. Send displays plain text when off; when on, display a reversible XOR-with-fixed-key byte encoding as hex, with a shield/channel state. Key 42 is visible in the explanation: a teaching encoding only, not secure production encryption. Receiver decodes to the original message in either case; the diagram contrasts channel representations. Toggle clears prior send state. Reset unprotected/unsent. Do not claim that the toy protects real messages.

## M05 - Database Systems

Sorted eight-item catalogue with IDs 1–8 and readable names. Choose target (initial 7). Compare sequential scan versus binary search as a simplified ordered-index lookup. Both find the same item; show visited records and comparison counts derived from the actual search steps. For target 7, scan visits seven entries; midpoint-floor binary search visits 4, 6, 7. Explain real database indexes are more complex. Changing target clears prior paths; reset target 7. Counts are model steps, not measured database timings.

## M06 - Human-Computer Interaction

Two variants of a school timetable lookup. Initial variant has nested choices (menu → learning → timetable); improved variant has a clearly labelled timetable action. Let the student perform the same task in each version. Track actions in that attempt; successful completion displays the path and observed click count. Switch/reset clears attempt state. No invented user-study time savings or claim that one design suits every user; explain task clarity and discoverability.

## M07 - Multimedia Information Retrieval

Local collection of six coloured geometric thumbnails. Each has an explicitly displayed feature vector (normalised red/green/blue components); similarity is Euclidean colour distance only. Select a query thumbnail (initial first item), then search. Rank the other five by ascending distance, ties by stable ID. Show ordered matches and scores under the stated toy criterion; do not imply semantic image recognition. Query change clears results; reset restores first item/no result. Search-by-image application.

## M08 - Networking and Distributed Systems

Undirected graph A–B, B–D, A–C, C–D with source A and destination D. Run breadth-first routing with stable alphabetical neighbour ordering. Initial B enabled gives A–B–D. Disabling B and resending gives A–C–D. A separate destination-offline toggle demonstrates no route when D is disabled. Show path or explicit delivery failure, never fake success. Input change clears prior delivery; reset all online/no packet. Explain rerouting as a toy model, not a complete network protocol.

## M09 - Parallel Computing

Eight equal tasks, each one illustrative time unit, no dependencies or overhead. Worker choices 1, 2, 4; initial 1. Run assigns tasks in order to the next free worker, tie by worker ID. Show task groups/timeline and elapsed model units `ceil(8 / workers)` (8, 4, 2). Counts reflect deliberately ideal assumptions; explain communication/coordination overhead prevents guaranteed linear speedup in real systems. Worker change clears run; reset one worker/no result.

## M10 - Programming Languages

Choose one of two fixed expressions: `2 + 3 * 4` (initial) and `(2 + 3) * 4`. Step shows expression, tokens, precedence/grouping structure, intermediate evaluation and final value (14 or 20). Use explicit trusted token/structure fixtures or a bounded parser; never execute user text as code. Final Step is bounded. Selection clears progress; reset first expression/initial stage. Explain why languages need precise meaning and tools, without claiming this is a full compiler.

## M11 - Software Engineering

Local pipeline: change → tests → release. Start with a deliberately failing addition result fixture (2 + 2 yields 5); running tests shows expected 4 versus actual 5 and blocks release. Apply correction toggles the fixture to correct 4 and invalidates the prior run. Running again passes and enables the release stage. Only passing current tests can lead to a displayed release; no external deployment occurs. Reset incorrect fixture/not run. Explain toy tests are evidence for the illustrated case, not proof all real bugs are absent.

## Output and reset invariants

At every stage, text and visual state agree. Values are finite and derived from the toy model; no random claims, external calls or real sensitive inputs. Re-running unchanged inputs gives the same result. Reset is repeatable. Hidden/unmounted demos do not progress. Detailed frame scheduling is NFR Design work.

## Extension compliance

Security Baseline and PBT: N/A; explicitly disabled in state. Full extension rules skipped. No enabled blocking findings.
