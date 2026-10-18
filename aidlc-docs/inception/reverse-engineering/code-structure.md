# Code Structure

## Application package

- `src/main.tsx`: React root, StrictMode and Chakra provider.
- `src/App.tsx`: portfolio template state, routing and content orchestration.
- `src/App.css`, `src/index.css`: shared/global styles.
- `src/templates/types.ts`, `index.ts`, `options.ts`: two-template contract, registry and display metadata.
- `src/templates/engineering/`: Engineering shell and section map.
- `src/templates/business/`: Business shell, section components, journal page and scoped CSS.
- `src/components/`: baseline portfolio sections and journal page.
- `src/components/shared/`: section/card/action primitives, logo and style selector.
- `src/components/ui/`: provider, colour mode, tooltip and toaster.
- `src/data/`: typed profile, navigation and portfolio content.
- `src/types/portfolio.ts`: shared content and section types.
- `src/hooks/usePortfolioLayout.ts`: section navigation and layout persistence.
- `src/utils/`: journal routing, template persistence, contact mailto, scroll, media and animation helpers.
- `src/content/journal/`: Markdown posts.
- `src/assets/`: profile, project, gallery, certificate and resume assets.

## Build and verification

`package.json` defines dev, test, build, lint and preview scripts. Vite configures React SWC, Tailwind, path aliases and Vitest/jsdom. TypeScript project references provide build checking. Tests live beside App, hooks, templates and utilities and under `src/test/`. GitHub Actions builds `dist/` and deploys Pages using a derived repository base path.

## Patterns

Typed data separates content from presentation; the registry selects a complete presentation strategy; shared primitives keep actions and sections consistent; hash routing supports static hosting.
