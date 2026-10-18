# Tech Stack Decisions - nus-career-talk

## Retain the existing application stack

React, TypeScript and Vite remain authoritative. Reuse the existing provider and portfolio preference mechanisms. CSS and native semantic HTML provide the talk layout; existing Chakra primitives may be reused where they improve consistency and accessibility. Keep Vitest/jsdom and Testing Library for model/interaction coverage and TypeScript/Vite for production validation. No upgrade or new package is approved or required by this decision.

Manifest version ranges remain in package.json; this document does not claim installed versions were measured or dependencies audited.

## Visual and interaction choices

Prefer SVG and CSS for graph paths, points, packet routes, timelines, lighting and pipeline states. These small finite scenes do not require a 3D/WebGL engine. SVG/CSS can illustrate the simplified cube lighting formula without implying a full renderer. Native range/select/button controls provide keyboard-operable demo inputs. Use deterministic local toy data and explicit textual outputs.

Use React local state for demos and talk session; no external global state framework. Standard history/hash events support the existing static site; no new router package is needed. Lazy import keeps talk rendering/data code behind the route boundary. Lightweight shared route metadata must not import that bundle.

## Browser and hosting choices

Use browser fullscreen only through capability checks and handled asynchronous requests. Reduced-motion media query, manual pause and visibility/lifecycle policy govern movement. Exact hook patterns, error boundaries, focus handling and scheduling follow in NFR Design.

Retain GitHub Pages, the existing deployment workflow and Vite base-path handling. No server/database, workers, remote AI service, service worker, analytics or network-fetched demo content is introduced. Existing global fonts may remain in the portfolio, but the talk must have a readable local/system fallback.

## Tradeoffs

Finite, labelled simulations support a short talk and remain dependable without external services. They demonstrate principles and applications, not full production systems. One mounted demo limits background work at the cost of resetting local demo state on topic changes; selected topic and presentation position remain preserved as approved.

## Extension compliance

Security Baseline and PBT: N/A; disabled in state. No full extension rules loaded. Existing functional and regression verification remains in scope.
