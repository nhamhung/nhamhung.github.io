# API Documentation

## REST APIs

No REST APIs are implemented in this project. The portfolio is a static client-side application with no backend service.

## Internal APIs

### `App`
- **Signature**: `function App(): JSX.Element`
- **Purpose**: Render the portfolio shell and all sections.
- **State**: `activeSection`.
- **Side Effects**: Registers a scroll listener to update active navigation.

### `Navbar`
- **Signature**: `function Navbar({ activeSection = 'home' }: NavbarProps): JSX.Element`
- **Parameters**:
  - `activeSection?: string` - Current section ID for active link highlighting.
- **Purpose**: Render fixed desktop and mobile navigation.
- **Side Effects**: Registers a scroll listener to control scrolled header styling.

### Section Components
- **Signatures**:
  - `Hero(): JSX.Element`
  - `About(): JSX.Element`
  - `Education(): JSX.Element`
  - `Experience(): JSX.Element`
  - `Awards(): JSX.Element`
  - `Projects(): JSX.Element`
  - `Gallery(): JSX.Element`
  - `Videos(): JSX.Element`
  - `Skills(): JSX.Element`
  - `Contact(): JSX.Element`
- **Purpose**: Render independent portfolio sections.
- **Shared Behavior**: Most sections include a local `scrollToSection(sectionId: string)` helper for next-section arrow navigation.

### `GalleryItem`
- **Location**: `src/components/Gallery.tsx`.
- **Fields**:
  - `id: number`
  - `src: string`
  - `alt: string`
  - `title: string`
  - `description: string`
- **Purpose**: Typed image card model for the gallery.

### Certificate Metadata
- **Location**: `src/components/Skills.tsx`.
- **Fields**:
  - `title`
  - `issuer`
  - `kind`
  - `file`
- **Purpose**: Build certificate cards from PDF files and metadata.

### Contact Form State
- **Location**: `src/components/Contact.tsx`.
- **Fields**:
  - `name`
  - `email`
  - `subject`
  - `message`
- **Purpose**: Build a mailto subject/body from visitor-entered contact data.

## Data Models

The project currently uses inline object arrays rather than exported data models. Key model shapes include:

- **Navigation Item**: `{ id: string, label: string }`
- **Experience**: `{ title: string, company: string, period: string, description: string[] }`
- **Education**: `{ degree: string, institution: string, period: string, specialization: string, logo: string, description: string[] }`
- **Award**: `{ title: string, organization: string, year: string, description: string, logo: string, tag: string }`
- **Project**: `{ title: string, description: string, technologies: string[], github: string, demo: string }`
- **Video**: `{ id: number, title: string, description: string, videoId: string }`
- **Skill Category**: `{ category: string, skills: string[] }`

## External Browser APIs

- `window.addEventListener('scroll', ...)` for active section and header state.
- `document.getElementById(...)` and `Element.scrollIntoView(...)` for smooth section navigation.
- `window.open(...)` for external project and certificate links.
- `window.location.href = 'mailto:...'` for contact submission.

## Template API Recommendation

For a student baseline template, move editable content into exported data files such as `src/data/profile.ts`, `src/data/sections.ts`, `src/data/projects.ts`, and `src/data/skills.ts`. Components should consume typed data rather than containing all user-specific text directly.
