# Component Inventory

## Application Packages

- `my-portfolio` - Vite React application that renders and deploys a student portfolio website.

## Infrastructure Packages

- `.github/workflows/deploy.yml` - GitHub Actions workflow for GitHub Pages deployment.

## Shared Packages

- `src/components/ui` - Chakra UI provider and helper components.
- `src/assets` - Shared static images, logos, and certificate PDFs.

## Test Packages

- None detected.

## Component Count

- **Total Source Components**: 14
- **Portfolio Sections**: 10
- **UI Helper Components**: 4
- **Application Entrypoints**: 2
- **Source CSS Files**: 2
- **Static Assets**: 21

## Source Component Inventory

- `App` - Top-level section orchestration and active section tracking.
- `Navbar` - Desktop/mobile navigation.
- `Hero` - First-screen introduction and CTAs.
- `About` - Personal summary and metrics.
- `Education` - Education cards.
- `Experience` - Professional experience timeline.
- `Awards` - Awards cards.
- `Projects` - Selected project cards.
- `Gallery` - Journey image gallery.
- `Videos` - Educational video embeds.
- `Skills` - Skill categories and certificate previews.
- `Contact` - Mailto contact form.
- `Provider` - Chakra UI app provider.
- `ColorMode`, `Tooltip`, `Toaster` helpers - Chakra UI support exports.

## User-Facing Sections

- Home
- About
- Education
- Experience
- Awards
- Projects
- Gallery
- Videos
- Skills
- Contact

## Template Customization Hotspots

- Personal identity, roles, and links: `Hero.tsx`, `Navbar.tsx`, `Contact.tsx`
- Resume-style content: `About.tsx`, `Education.tsx`, `Experience.tsx`, `Awards.tsx`
- Project showcase: `Projects.tsx`
- Media and certificates: `Gallery.tsx`, `Videos.tsx`, `Skills.tsx`, `src/assets`
- Deployment repository path: `vite.config.ts`
- GitHub Pages workflow: `.github/workflows/deploy.yml`
