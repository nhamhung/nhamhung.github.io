import localJournalContent from '../content/journal/first-local-journal.md?raw'
import localJournalImage from '../assets/photo_2.jpg'
import type { LocalJournalPost, WritingEntry } from '../types/portfolio'
import { createJournalPostHref } from '../utils/journal'
import { blog } from './blog'

export const journalPosts = [
  {
    source: 'local',
    slug: 'my-first-local-journal-entry',
    href: createJournalPostHref('my-first-local-journal-entry'),
    title: 'SIM-LSE Data Analytics Challenge 2026',
    image: localJournalImage,
    imageAlt: 'Study desk representing a local learning journal entry',
    publishedDate: 'Jul 4, 2026',
    category: 'Learning Journal',
    summary:
      'A sample in-site Markdown journal post that students can copy, edit, and publish with the portfolio.',
    topics: ['Markdown', 'Portfolio', 'Reflection'],
    content: localJournalContent,
  },
] satisfies LocalJournalPost[]

export const writing = [...journalPosts, ...blog] satisfies WritingEntry[]

export const getLocalJournalPostBySlug = (slug: string): LocalJournalPost | undefined =>
  journalPosts.find((post) => post.slug === slug)
