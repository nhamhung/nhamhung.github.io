# Student Portfolio Template

This repository is a baseline portfolio template that students can customize, run locally, and deploy to GitHub Pages. It is built with React, TypeScript, Vite, Chakra UI, Tailwind CSS, and React Icons.

Use this template to create a personal portfolio with sections for your profile, education, experience, awards, projects, gallery, videos, skills, certificates, and contact information.

## What You Can Customize

- Your name, headline, location, resume link, contact email, and social links.
- About, education, experience, awards, projects, gallery, videos, skills, and certificates.
- In-site journal posts and external blog post links.
- Section order and visibility in the navigation.
- Images, logos, gallery photos, resume PDF, and certificate PDFs.
- Reusable card/action/section components if you want to extend the layout later.

## Can I Edit The Web Page?

Yes. You can edit this web page, but you edit it through the project files, not by changing text directly in the browser preview.

The browser page is a live preview. When you run `npm run dev`, Vite watches the files and refreshes the page after you save changes. Most students should edit content in `src/data/`, write in-site journal posts in `src/content/journal/`, and place files such as images or PDFs in `src/assets/`.

If you want to change the layout, buttons, cards, or visual components, edit files under `src/components/`. Layout changes require more care than content edits, so run the verification commands before publishing.

## Prerequisites

Install these before starting:

- Git: https://git-scm.com/downloads
- Node.js 20 or newer: https://nodejs.org/
- npm, which is included with Node.js
- A GitHub account

Check your versions:

```bash
git --version
node --version
npm --version
```

## Quick Start

Clone your repository and install dependencies:

```bash
git clone https://github.com/<owner>/<repository>.git
cd <repository>
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173/`. Open it in your browser and edit files under `src/data/` to customize the portfolio.

Do not edit the text only inside the browser page. Those changes are temporary and will disappear when the page refreshes. Save your edits in the project files instead.

## Verify Before Publishing

Run these commands before pushing important changes:

```bash
npm run test
npm run build
npm run lint
npm run preview
```

What each command does:

| Command | Purpose |
|---|---|
| `npm run test` | Runs lightweight checks for app rendering, navigation config, and portfolio data. |
| `npm run build` | Checks TypeScript and creates a production build in `dist`. |
| `npm run lint` | Runs ESLint across the project. |
| `npm run preview` | Serves the production build locally for a final check. |

## Project Structure

| Path | What To Edit There |
|---|---|
| `src/data/profile.ts` | Your name, hero text, contact email, resume, and social links. |
| `src/data/about.ts` | About section content and highlights. |
| `src/data/education.ts` | Schools, degrees, coursework, and education dates. |
| `src/data/experience.ts` | Work, internship, leadership, or volunteer experience. |
| `src/data/awards.ts` | Awards, honors, and recognitions. |
| `src/data/projects.ts` | Project cards, descriptions, links, and technologies. |
| `src/data/gallery.ts` | Gallery image entries. |
| `src/data/videos.ts` | Video entries and links. |
| `src/data/skills.ts` | Skill groups and tools. |
| `src/data/certificates.ts` | Certificate metadata and PDF imports. |
| `src/data/blog.ts` | External blog links, such as WordPress posts. |
| `src/data/journalPosts.ts` | In-site journal post metadata and Markdown imports. |
| `src/data/navigation.ts` | Section order, labels, and visibility. |
| `src/content/journal/` | Markdown files for journal posts that are published directly inside this site. |
| `src/types/portfolio.ts` | Shared TypeScript types for portfolio data. Use this as a reference when editing data files. |
| `src/assets/` | Images, logos, gallery photos, PDFs, and other static files. |
| `src/assets/documents/` | Resume and other downloadable document files. |
| `src/components/shared/` | Reusable UI helpers for cards, section shells, and external actions. |

Most students should start with `src/data/profile.ts`, then update the section-specific files under `src/data/`.

## Customize Your Portfolio

### Profile, Contact, And Social Links

Edit:

- `src/data/profile.ts`

Update your display name, short introduction, location, email, resume link, and social links. Use a public-facing email or contact method that you are comfortable publishing online.

### Sections And Navigation

Edit:

- `src/data/navigation.ts`

Use this file to control which sections appear in navigation and how they are ordered. Keep navigation IDs aligned with the matching page sections.

### Education, Experience, Awards, Projects, Gallery, Videos, And Skills

Edit the matching file under `src/data/`:

- `src/data/education.ts`
- `src/data/experience.ts`
- `src/data/awards.ts`
- `src/data/projects.ts`
- `src/data/gallery.ts`
- `src/data/videos.ts`
- `src/data/skills.ts`

The shared types in `src/types/portfolio.ts` show the expected fields for each kind of data.

### Journal And Blog Posts

Use the Journal section for two kinds of writing:

- In-site posts that live directly in this portfolio.
- External posts that link to another site, such as WordPress.

For an in-site journal post, add a Markdown file under:

- `src/content/journal/`

Then add its title, date, summary, tags, and content import in:

- `src/data/journalPosts.ts`

For an external blog post, update:

- `src/data/blog.ts`

External blog posts open outside the site. In-site journal posts open directly inside this portfolio.

### Images And Logos

Place images and logos in:

- `src/assets/`

If you replace an existing image with a new filename, update the import or reference in the matching `src/data/` file. Run `npm run build` after replacing assets so TypeScript and Vite can catch missing files.

### Certificate PDFs

Place certificate PDFs in:

- `src/assets/certificates/`

Then update:

- `src/data/certificates.ts`

If the PDF filename changes, update the import in `src/data/certificates.ts` as well.

## Deploy To GitHub Pages

This project is already configured for GitHub Pages deployment through GitHub Actions.

Short version:

1. Push your code to GitHub.
2. In your repository, go to Settings > Pages.
3. Set Source to GitHub Actions.
4. Push to the `main` branch.
5. Check the Actions tab and the published Pages URL.

For the detailed guide, including URL patterns and troubleshooting, read [DEPLOYMENT.md](DEPLOYMENT.md).

## Common Local Issues

| Symptom | What To Try |
|---|---|
| `npm install` fails | Confirm Node.js is version 20 or newer, then try again. |
| The dev server does not start | Make sure dependencies are installed with `npm install`. |
| I changed text in the browser but it disappeared | Edit and save the matching file in `src/data/`, `src/content/journal/`, or `src/components/` instead. The browser is only a preview. |
| An image or PDF is missing | Check that the file exists in `src/assets/` and that the matching import path is correct. |
| TypeScript reports a data error | Compare your data file with the matching type in `src/types/portfolio.ts`. |
| The deployed site has broken assets | Read the base path and troubleshooting sections in `DEPLOYMENT.md`. |

## Tech Stack

- React 19
- TypeScript
- Vite
- Chakra UI v3
- Tailwind CSS
- React Icons
- GitHub Actions
- GitHub Pages

## License

MIT
