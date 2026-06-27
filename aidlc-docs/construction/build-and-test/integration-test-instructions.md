# Integration Test Instructions

## Purpose

Validate that the completed units work together as a single static portfolio template.

## Automated Integration Coverage

The lightweight test suite covers local integration between:

| Integration | Covered By |
|---|---|
| App shell and provider context | `src/App.test.tsx` |
| App sections and navigation config | `src/data/navigation.test.ts` |
| Portfolio aggregate and editable data modules | `src/data/portfolio.test.ts` |
| Test command and student documentation | README verification command list plus `package.json` script |

Run:

```bash
npm run test
```

## Manual Integration Checks

### Scenario 1: Local Development Server

Steps:

1. Start the dev server.

```bash
npm run dev
```

2. Open the printed local URL.
3. Confirm the hero, navigation, sections, gallery, videos, skills, and contact area render.
4. Click several navigation items and confirm they scroll to the expected sections.

Expected result:

- The app renders without console-breaking errors.
- Navigation points to visible sections.

### Scenario 2: Production Preview

Steps:

1. Build the app.

```bash
npm run build
```

2. Preview the built app.

```bash
npm run preview
```

3. Open the printed local URL.
4. Confirm the production build displays expected content and assets.

Expected result:

- Production preview works locally.
- Images and certificate links resolve from the built assets.

### Scenario 3: GitHub Pages Deployment Configuration

Steps:

1. Review `.github/workflows/deploy.yml`.
2. Review `vite.config.ts`.
3. Confirm `VITE_BASE_PATH` behavior is unchanged.
4. Push to `main` only when local test, build, and lint pass.

Expected result:

- GitHub Actions remains the deployment path.
- Unit 5 tests do not query the live site.

## Cleanup

Stop local dev or preview servers with `Ctrl+C` in the terminal where they are running.

