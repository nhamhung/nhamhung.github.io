# Component Inventory

## Application Packages

- `my-portfolio` - React/Vite application that renders a configurable student portfolio and local journal.

## Infrastructure Packages

- `.github/workflows/deploy.yml` - GitHub Actions workflow that builds and deploys the static site to GitHub Pages.

## Shared Packages

- `src/data` - Student-editable typed portfolio and template configuration.
- `src/types` - Shared data and section contracts.
- `src/hooks` - Layout and navigation state.
- `src/utils` - Scroll, route, media, and animation helpers.
- `src/components/shared` - Reusable section, card, action, and logo primitives.
- `src/components/ui` - Chakra provider and UI helpers.
- `src/assets` - Images, logos, resume, and certificate documents.
- `src/content/journal` - Local Markdown journal bodies.

## Test Packages

- `src/App.test.tsx` - Application smoke and route behavior.
- `src/data/*.test.ts` - Navigation and content validation.
- `src/hooks/*.test.ts` - Layout helper behavior.
- `src/templates/*.test.ts` - Template registry completeness and fallback.

## Total Count

- **Total Packages**: 1 application package plus deployment configuration.
- **Source Files**: 86 files under `src/` at analysis time.
- **React Components**: 27 TSX files, including tests and the entrypoint.
- **TypeScript Modules**: 33 TS files, including tests.
- **Stylesheets**: 2 CSS files.
- **Bundled Assets and Content**: 24 files, including one Markdown journal post.
- **Automated Tests**: 5 test files with 23 passing test cases at the latest recorded verification.

## User-Facing Components

- `App` - Template, route, layout, and visible-section orchestration.
- `Navbar` - Shared desktop/mobile navigation and display controls.
- `Hero` and `ArtisticHero` - Template-specific introductions and actions.
- `About` - Biography and metrics.
- `Education` - Education records.
- `Experience` - Work and leadership records.
- `Awards` - Awards and recognitions.
- `Projects` and `ArtisticProjects` - Template-specific project presentations.
- `Gallery` and `ArtisticGallery` - Template-specific visual portfolios and previews.
- `Journal` - Combined in-site and external writing index.
- `JournalPostPage` - Local writing detail and not-found states.
- `Skills` - Skill groups and certificates.
- `Contact` - Mailto contact form and social actions.

## Template Differentiation Boundary

- **Currently Template-Specific**: Hero, Projects, Gallery, section shell, and CSS variables.
- **Currently Shared**: Navbar, App-level section ordering, layout switcher, About, Education, Experience, Awards, Journal, Skills, Contact, and local post detail.
- **Architectural Constraint**: A template can replace section components but cannot yet replace the Navbar or define a distinct section sequence, section grouping, or page-level interaction model.
