# Technology Stack

## Programming Languages

- **TypeScript** - App code and Vite configuration.
- **TSX** - React component templates.
- **CSS** - Global styles, CSS variables, animations.
- **YAML** - GitHub Actions workflow.

## Frameworks and Libraries

- **React 19.2.0** - Component model, rendering, hooks.
- **React DOM 19.2.0** - Browser rendering.
- **Chakra UI 3.30.0** - Component primitives and responsive styling.
- **Emotion React 11.14.0** - Styling dependency used by Chakra UI.
- **next-themes 0.4.6** - Theme/color mode support.
- **React Icons 5.5.0** - Icon components.
- **Tailwind CSS 4.1.18** - Global utility CSS layer imported through `src/index.css`.

## Build Tools

- **Vite 7.2.4** - Dev server and production bundler.
- **@vitejs/plugin-react-swc 4.2.2** - React Fast Refresh and SWC compilation.
- **@tailwindcss/vite 4.1.18** - Tailwind Vite integration.
- **vite-tsconfig-paths 6.0.3** - TypeScript path alias support.
- **TypeScript 5.9.3** - Type checking and project references.
- **npm** - Dependency and script runner.

## Quality Tools

- **ESLint 9.39.2** - Linting.
- **typescript-eslint 8.51.0** - TypeScript lint rules.
- **eslint-plugin-react 7.37.5** - React lint rules.
- **eslint-plugin-react-hooks 7.0.1** - React hooks lint package is installed but not currently wired into the config.
- **eslint-plugin-react-refresh 0.4.24** - React refresh lint package is installed but not currently wired into the config.
- **Prettier 3.7.4** - Formatting.
- **eslint-config-prettier 10.1.8** - Disables conflicting formatting lint rules.

## Infrastructure

- **GitHub Pages** - Static website hosting.
- **GitHub Actions** - Build and deploy automation.
- **Node.js 20** - CI runtime in `.github/workflows/deploy.yml`.

## Runtime Model

- Static files only.
- No backend process.
- No database.
- No secrets required for normal deployment beyond GitHub Pages permissions.

## Browser Integrations

- YouTube iframe embeds.
- Mailto link generation.
- External links to GitHub, LinkedIn, WordPress, and YouTube.
- Google Fonts CSS import.
