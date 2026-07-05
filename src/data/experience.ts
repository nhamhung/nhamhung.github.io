import type { ExperienceEntry } from '../types/portfolio'

export const experience = [
  {
    title: 'Mentor',
    company: 'Self-employed',
    period: '2025 - Present',
    description: [
      'Mentored students in-person and online across Math, Science, English, Economics, and Computer Science.',
      'Prepared students for certifications such as SAT, ACT, GMAT/GRE, IELTS, GCSE/IGCSE, O-levels and A-levels.',
      'Supported scholarship and entrance exam applications including ASEAN, A*STAR, TestAS, AEIS and UEE into top secondary schools and universities in Singapore.',
      'Designed new curricula and syllabi to equip students with meaningful and practical skills to prepare for undergraduate studies, higher education and career orientation.',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Torilab Inc.',
    period: '2025 - Present',
    description: [
      'Built and maintained 40+ data models across multiple company platforms to support executive decision-making.',
      'Designed pipelines powering analytics workflows and Business Intelligence (BI) dashboards for management and business teams.',
      'Partnered with cross-functional teams to build a centralise data warehouse and enable self-service reporting.',
      'Managed entire BI data infrastructure on Google Cloud Platform to ensure reporting consistency, reliability and timeliness'
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Rakuten Asia Pte Ltd',
    period: '2023 - 2025',
    description: [
      'Maintained ad-serving systems handling mission-critical ad item delivery and tracking.',
      'Managed Couchbase and Hive data platforms operating at hundreds of millions of records to support real-time ads delivery.',
      'Built scalable backend APIs with Spring, Kafka, Kubernetes, Redis, and caching strategies for cross-department data ingestion and synchronisation.',
    ],
  },
  {
    title: 'Data Engineer',
    company: 'Sea Limited',
    period: '2021 - 2023',
    description: [
      'Developed batch and streaming ingestion pipelines for financial reporting on the New York Stock Exchange (NYSE).',
      'Built a self-service ingestion portal for non-technical users across databases, Google Sheets, and Kafka.',
      'Operated large-scale pipelines and on-call workflows using Bash and PySpark.',
    ],
  },
] satisfies ExperienceEntry[]
