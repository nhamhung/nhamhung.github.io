# Performance Test Instructions - NUS Career Talk

## Applicable goals

The approved workload is finite per-browser teaching demos on static hosting. No backend throughput, concurrent-user or uptime SLA was requested. Server load/stress tests are N/A; avoid creating a synthetic backend load benchmark.

## Repeatable browser procedure

1. Build and start the production preview using the build instructions.
2. Record browser version, machine/runtime context, viewport, development versus production serving, and reduced-motion state.
3. Inspect network/chunk loading on portfolio home and talk entry: talk code should load behind the route boundary, and header links should not eagerly import all demos.
4. In Chrome DevTools Performance, record representative input/run actions for route finding, classification and field switching. The immediate feedback target is within 100ms in the stated environment, excluding deliberate visual staging. Investigate lag or long main-thread work rather than encoding wall-clock assertions in unit tests.
5. Pause motion, enable reduced motion, switch fields, background the tab and leave the talk. Verify inactive demo work/listeners stop and textual results remain understandable.
6. After assets are loaded, disconnect networking and operate demos. Official external reference links still require connectivity when followed. This is not offline installation testing.

## Existing evidence and limits

From the preceding unchanged-code Chrome QA: one route-run interaction to two animation frames took about 33.1ms on macOS ARM64, headless Chrome 155.0.8059.80, development server. This is one observation, not a percentile or universal latency guarantee. No additional runtime profiling or offline-browser pass was performed in the formal stage. The production build reconfirmed separate talk chunks: JavaScript 42.74 kB (13.98 kB gzip), CSS 9.37 kB (2.66 kB gzip).

Record new measurements with environment and scope; do not mix timings from development and production as equivalent. Any performance refinement must preserve the deterministic educational models and accessibility behaviour.
