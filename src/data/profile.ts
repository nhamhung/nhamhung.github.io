import profileImage from '../assets/profile.jpeg'
import type { HeroSection, Profile } from '../types/portfolio'

export const profile = {
  name: 'Nham Quoc Hung',
  slug: 'nham-quoc-hung',
  role: 'Data Engineer at Torilab Inc.',
  location: 'Hanoi Capital Region, Vietnam',
  email: 'nhamhung.gttn@gmail.com',
  profileImage,
  summary:
    'Computer Science graduate specialized in Data. I design and ship production-ready pipelines, low-latency services, and analytics systems that teams can trust for decisions and growth.',
  socialLinks: [
    {
      label: 'GitHub',
      href: 'https://github.com/nhamhung',
      ariaLabel: 'Open Nham Quoc Hung GitHub profile',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/quoc-hung-nham/',
      ariaLabel: 'Open Nham Quoc Hung LinkedIn profile',
    },
    {
      label: 'Email',
      href: 'mailto:nhamhung.gttn@gmail.com',
      ariaLabel: 'Email Nham Quoc Hung',
    },
  ],
} satisfies Profile

export const hero = {
  eyebrow: '<engineer id="nham-quoc-hung" />',
  statusBadges: ['SYSTEM STATUS: BUILDING', 'DATA | SOFTWARE | MENTORSHIP'],
  headline: 'Building reliable data systems and scalable backend platforms.',
  highlightedPhrase: 'data systems',
  intro: profile.summary,
  stats: [
    { value: '4+ Years', label: 'Experience' },
    { value: 'Data + Backend', label: 'Focus' },
    { value: 'End-to-End', label: 'Delivery' },
  ],
  primaryAction: {
    label: 'View Projects',
    sectionId: 'projects',
    ariaLabel: 'Scroll to selected projects',
  },
  secondaryAction: {
    label: 'Contact',
    sectionId: 'contact',
    ariaLabel: 'Scroll to contact section',
  },
  stackHighlights: ['Apache Spark', 'Apache Kafka', 'Airflow', 'Kubernetes', 'BigQuery', 'GCP'],
} satisfies HeroSection
