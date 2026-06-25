import type { ExperienceEntry } from '../types/portfolio'

export const experience = [
  {
    title: 'Mentor',
    company: 'Self-employed',
    period: '2025 - Present',
    description: [
      'Mentored students in-person and online across Math, Science, English, Economics, and Computer Science.',
      'Prepared students for certifications such as SAT, ACT, IELTS, GCSE, O-levels and A-levels.',
      'Supported scholarship and entrance exam applications including ASEAN, A*STAR, TestAS, AEIS and UEE into top public secondary schools and universities in Singapore.',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Torilab Inc.',
    period: '2025 - Present',
    description: [
      'Built and maintained 30+ data models across multiple products to support executive decision-making.',
      'Designed pipelines powering analytics workflows and Looker dashboards for business teams.',
      'Partnered with cross-functional teams to improve data quality and self-service reporting.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Rakuten Asia Pte Ltd',
    period: '2023 - 2025',
    description: [
      'Maintained ad-serving systems handling mission-critical ad item delivery and tracking.',
      'Managed Couchbase and Hive data platforms operating at hundreds of millions of records.',
      'Built scalable backend APIs with Spring, Kafka, Kubernetes, Redis, and caching strategies.',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Sea Limited',
    period: '2021 - 2023',
    description: [
      'Developed batch and streaming ingestion pipelines for finance reporting use cases.',
      'Built a self-service ingestion portal for non-technical users across databases, sheets, and Kafka.',
      'Operated large-scale pipelines and on-call workflows using Bash and PySpark.',
    ],
  },
] satisfies ExperienceEntry[]
