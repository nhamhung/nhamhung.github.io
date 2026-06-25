import type { AboutSection } from '../types/portfolio'

export const about = {
  eyebrow: 'ABOUT_PROTOCOL',
  title: 'About Me',
  intro:
    'I build robust data platforms and backend services that are designed for reliability, maintainability, and clear business impact.',
  paragraphs: [
    'I am a data engineer focused on designing efficient pipelines and analytics systems that turn raw data into trustworthy decision inputs. My work spans ingestion, modeling, orchestration, and data product delivery.',
    'Outside engineering, I mentor students and share practical learning paths for computer science and data. Teaching keeps my fundamentals sharp and improves how I design systems for real users.',
  ],
  metrics: [
    { value: '4+', label: 'Years in Data and Software Engineering' },
    { value: '5+', label: 'Years in Teaching and Mentoring' },
    { value: '3+', label: 'Years Creating Educational Content' },
  ],
} satisfies AboutSection
