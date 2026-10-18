# API Documentation

No REST endpoints or backend services are implemented.

## Application contracts

- `PortfolioApp({ initialTemplate? })`: React component owning template selection and portfolio content rendering.
- `getPortfolioTemplate(templateId)`: resolves Engineering or Business, with Engineering fallback.
- `PortfolioTemplateId`: `engineering | business`.
- `PortfolioTemplate`: id, label, description, shell component, journal component, chapter labels, section components and optional `isSectionVisible` predicate.
- `PortfolioShellProps`: active section/template, layout, navigation items, href resolver and callbacks for navigation/template/layout changes, plus children.
- `usePortfolioLayout`: resolves active section, layout mode, hrefs and navigation actions.
- `parseJournalPostHash`: resolves local journal slugs from hashes.
- Template selection utilities validate IDs and guard browser-storage failures.
- `buildMailtoUrl`: encodes name, email, subject and message into a mailto action.

## Data and browser interfaces

Shared portfolio models cover profile, education, career, projects, awards, media, writing, skills, certificates and navigation. `SectionId` enumerates ten portfolio sections. Browser integration uses history, hash events, local storage, scrolling, dialogs and media embeds. No new talk route or talk data model exists yet.
