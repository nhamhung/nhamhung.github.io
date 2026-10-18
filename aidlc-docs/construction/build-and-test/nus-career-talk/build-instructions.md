# Build Instructions - NUS Career Talk

## Prerequisites

Run from the repository root. Use a compatible Node.js installation and npm; this stage used Node 22.14.0 on macOS ARM64. The repository's existing CI workflow selects Node 20. Dependencies are pinned by package-lock.json. No credentials, runtime secrets, database or additional service is required.

## Steps

1. If dependencies are absent or the lockfile changed, run `npm ci`. Avoid reinstalling unchanged dependencies just to repeat a build.
2. Run `npm run build`. This performs TypeScript project checking and the Vite production build.
3. Verify successful exit and `dist/index.html` plus assets. Separate TalkPage JavaScript/CSS chunks should appear.
4. For a local production preview, run `npm run preview -- --host 127.0.0.1`, open its printed Local URL and append `#/talks/nus-cs`. Stop the server with Ctrl+C when finished.

Vite reads optional VITE_BASE_PATH; the default is `/`. The existing GitHub Actions workflow derives the repository base path. Do not change hosting configuration for this feature. Build success is not publication; no push/deploy is included in these instructions.

## Current result and warnings

Build passed. Vite reported 1.79 seconds for its bundling phase; this excludes the preceding TypeScript work. Talk JavaScript is 42.74 kB (13.98 kB gzip); talk CSS is 9.37 kB (2.66 kB gzip). The existing main portfolio chunk still triggers the large-chunk warning. That warning does not indicate a failed build or an eagerly imported talk module.

## Troubleshooting

If npm/node are unavailable, install a compatible runtime or put an existing runtime on PATH. This session used `/private/tmp/node-v22.14.0-darwin-arm64/bin`; that temporary path is not a permanent project dependency. For missing packages, restore locked dependencies with npm ci. For compilation errors, inspect the reported file/type and fix the underlying mismatch before rerunning. Never claim a build passed from stale dist output after a failed command.
