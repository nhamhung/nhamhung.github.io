# GitHub Pages Template Guide

## Purpose

This guide records the deployment and template-readiness requirements discovered during reverse engineering. It is not yet the final student-facing guide; that should be produced during the approved implementation/documentation stage.

## Current Deployment Flow

1. Student pushes changes to the `main` branch.
2. GitHub Actions runs `.github/workflows/deploy.yml`.
3. The workflow installs Node dependencies with `npm ci`.
4. The workflow builds the Vite app with `npm run build`.
5. GitHub Pages deploys the generated `dist/` folder.

## Current GitHub Pages Settings Needed

- In the GitHub repository, open **Settings**.
- Open **Pages**.
- Set **Source** to **GitHub Actions**.
- Push to `main`.
- Wait for the workflow in the **Actions** tab to complete.

## Current Base Path Requirement

The app currently has:

```ts
base: '/my-portfolio/',
```

That works only when the repository is deployed at:

```text
https://USERNAME.github.io/my-portfolio/
```

Students using a different repository name must change the base path to match:

```text
base: '/REPOSITORY_NAME/',
```

Students using a user site named `USERNAME.github.io` should use:

```text
base: '/'
```

## Student-Friendly Setup Guide Requirements

The final guide should include:

- Required tools: Git, Node.js 20 or newer, npm, GitHub account.
- How to fork or use the project as a template.
- How to clone the repository.
- How to install dependencies with `npm install`.
- How to run locally with `npm run dev`.
- Which files students should edit first.
- How to replace profile photo, gallery images, certificates, and logos.
- How to update GitHub, LinkedIn, YouTube, blog, and email links.
- How to configure the Vite base path.
- How to enable GitHub Pages with GitHub Actions.
- How to verify the deployed URL.
- Troubleshooting for 404 pages, missing assets, failed builds, and wrong Node versions.

## Recommended Code Changes Before Finalizing Template

- Move content data out of React components.
- Create a single navigation/section configuration.
- Make deployment base path easier to configure.
- Remove Vite starter content from README.
- Replace personal-specific instructions with student-template instructions.
- Add a checklist-based customization guide.

## Manual Deployment Verification Checklist

- [ ] `npm install` completes.
- [ ] `npm run dev` starts the local site.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] `npm run preview` displays the production build.
- [ ] GitHub Actions deployment completes successfully.
- [ ] Published site URL loads without 404 errors.
- [ ] Images, PDFs, and YouTube embeds load correctly.
- [ ] Navigation links scroll to the right sections.
- [ ] Contact form opens the expected email client.
