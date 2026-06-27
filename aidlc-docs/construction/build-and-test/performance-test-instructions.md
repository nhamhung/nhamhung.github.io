# Performance Test Instructions

## Purpose

Define lightweight performance checks appropriate for a static student portfolio template.

## Performance Scope

This project does not require load testing, stress testing, or server throughput testing because it is a static site hosted on GitHub Pages.

Relevant performance checks are:

- Local test suite remains fast.
- Production build completes successfully.
- Built app can be previewed locally.
- Large asset warnings are understood and tracked.

## Commands

### Test Suite Runtime

```bash
npm run test
```

Expected current result:

- The suite completes in a few seconds on a normal development machine.
- Current baseline observed during code generation: 3 test files and 9 tests passed.

### Production Build

```bash
npm run build
```

Expected current result:

- Build succeeds.
- Vite may warn about large chunks or large assets because the portfolio includes images and PDFs.

## Asset Size Review

If performance becomes a class concern, inspect:

- Large images in `src/assets/`.
- Large PDFs in `src/assets/certificates/`.
- The main JS chunk size reported by Vite.

Possible future improvements:

- Compress images before committing.
- Replace very large PDFs with external links.
- Add lazy loading or code splitting if the app grows substantially.

## Not Applicable

The following are intentionally not part of the baseline performance test strategy:

- Server load testing.
- Concurrent user testing.
- API throughput testing.
- Stress testing.
- Browser automation performance metrics.

