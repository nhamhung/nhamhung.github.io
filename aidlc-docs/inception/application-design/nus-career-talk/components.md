# Components

## Route boundary - existing App

Own browser hash subscription to hashchange and popstate; select the existing exported PortfolioApp or a lazy-loaded TalkPage. Resolve the exact talk hash `#/talks/nus-cs` before mounting portfolio layout hooks. Render an accessible loading fallback while loading the feature. Retain the most recent non-talk hash in memory for the return action; direct talk visits fall back to portfolio home. Route recognition does not introduce a third portfolio template or a new SectionId.

Mount only one experience at a time. Portfolio template, layout and colour preferences remain owned by existing storage/provider mechanisms; talk state is not written into those keys. Returning remounts the existing portfolio at the chosen hash. Session-only state such as an open drawer need not survive leaving the portfolio.

## TalkPage and session controller

Own mode, slide position, selected focus area and motion pause preference for the mounted talk visit. Pass state and callbacks to both views. Preserve slide position when exploring; select a featured slide's area on entering exploration. Browser return contract is received from App. TalkPage owns its Vietnamese language scope and talk-specific styles.

## PresentationView and PresentationControls

Render the approximately twelve-minute narrative: opening, speaker introduction with the portfolio photo, CS/CE comparison, NUS CS introduction, eleven-area overview, three featured demos, and closing. Controls expose previous/next, progress, exploration, fullscreen and exit. Render only the current teaching scene and its active demo. NUS sources remain accessible without requiring a dense projection slide.

## ExplorationView and FocusAreaDetails

Show all eleven area choices, selected Vietnamese explanation, English name, application, interest connection, careers, sources and one active demo. Provide a clear return to presentation. Fields not featured in the live sequence remain fully explorable.

## TalkContent and types

Static typed data, independent of rendering: stable field/slide IDs, Vietnamese narrative, area metadata, illustrative jobs, references and verification dates. Content is separately editable. Validate completeness for all eleven fields. NUS factual content is checked against official pages before finalisation.

## DemoHost and eleven demo components

Map stable area IDs to distinct components corresponding to M01–M11. Each component receives motion policy and owns its local inputs, steps, computed output and reset/replay. Shared diagram/text/control primitives are allowed; substantive outcomes remain distinct. Unmount inactive demos. Exact computation and reset rules belong to Functional Design.

The eleven components cover route optimisation, toy classification, lighting/viewpoint, protected message representation, indexed lookup, interface task flow, similarity retrieval, packet routing/failure, worker scheduling, expression evaluation and test/release workflow.

## Browser interaction hooks

Talk-scoped hooks own keyboard filtering, focus transitions, fullscreen state/events and reduced-motion preference. Listeners and animation resources are disposed on unmount. Browser feature absence is a supported state, not a route failure.

## Portfolio entry links

Engineering: `src/components/Navbar.tsx`. Business: `src/templates/business/BusinessShell.tsx`. Share the talk hash/link metadata through a small route constant module that does not import the talk feature. Expose links on desktop and mobile; close a mobile drawer when following its link.

## Extension compliance

Security Baseline and Property-Based Testing: N/A; both explicitly disabled in state (Q7 B, Q8 C). Full rules skipped. No enabled extension has a blocking finding.
