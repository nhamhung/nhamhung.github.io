import type { ProjectEntry } from '../types/portfolio'

export const projects = [
  {
    title: "Master's Coursework and Technical Certificates",
    description: 'Graduate coursework and technical certifications with applied work from professional projects.',
    technologies: ['Deep Learning', 'Machine Learning', 'Linear Algebra', 'Generative AI'],
    actions: [
      {
        label: 'Repository',
        href: 'https://github.com/nhamhung/Coursework-and-Certificates',
        ariaLabel: "Open Master's Coursework and Technical Certificates repository",
      },
      {
        label: 'View',
        href: 'https://github.com/nhamhung/Coursework-and-Certificates/blob/main/Coursework/Statement%20of%20Purpose.pdf',
        ariaLabel: "View Master's Coursework and Technical Certificates example",
      },
    ],
  },
  {
    title: 'YouTube Engineering Journal',
    description: 'Technical content sharing lessons from data engineering, computer science, and interview prep.',
    technologies: ['Data Engineering', 'LeetCode', 'Data Analytics'],
    actions: [
      {
        label: 'Repository',
        href: 'https://github.com/nhamhung/youtube-scripts',
        ariaLabel: 'Open YouTube Engineering Journal scripts repository',
      },
      {
        label: 'View',
        href: 'https://www.youtube.com/watch?v=cmZ9-sDzYYY',
        ariaLabel: 'Watch the YouTube Engineering Journal example video',
      },
    ],
  },
  {
    title: 'Personal Technical Blog',
    description: 'Knowledge base covering software, AI, cloud systems, and personal learning write-ups.',
    technologies: ['Computer Science', 'AI', 'Cloud Computing'],
    actions: [
      {
        label: 'Repository',
        href: 'https://nhamhung.wordpress.com/',
        ariaLabel: 'Open the Personal Technical Blog home page',
      },
      {
        label: 'View',
        href: 'https://nhamhung.wordpress.com/2025/03/10/nhat-ky-hang-ngay/',
        ariaLabel: 'Read an example Personal Technical Blog post',
      },
    ],
  },
] satisfies ProjectEntry[]
