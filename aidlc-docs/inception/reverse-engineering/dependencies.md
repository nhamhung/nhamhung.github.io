# Dependencies

## Internal relationships

React root -> provider -> App -> template registry and layout hook -> shells and section components -> typed data, utilities, content and assets.

App also depends on journal parsing, navigation configuration and browser-storage helpers. Template options are separated into `src/templates/options.ts`. Tests import the application contracts and render through the configured jsdom environment.

## Declared external dependencies

- React/React DOM ^19.2.0: rendering.
- Chakra UI ^3.30.0, Emotion ^11.14.0: UI and styling.
- next-themes ^0.4.6: colour mode.
- react-icons ^5.5.0: icons.
- react-markdown ^10.1.0: Markdown rendering.
- Tailwind/Vite integration ^4.1.18: utility styling.
- Chakra icons ^2.2.4: declared icon package.
- Vite ^7.2.4, React SWC plugin ^4.2.2, TypeScript ~5.9.3: build tooling.
- Vitest ^4.1.9, Testing Library React ^16.3.2, jest-dom ^6.9.1, jsdom ^29.1.1: tests.
- ESLint, TypeScript ESLint and Prettier: static checks and formatting.

These are manifest version ranges, not a claim of installed versions or current upstream compatibility. No dependency installation, upgrade or licence audit was performed during this refresh.
