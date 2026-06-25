import nusLogo from '../assets/nus.png'
import saLogo from '../assets/sa.png'
import utLogo from '../assets/ut.png'
import type { EducationEntry } from '../types/portfolio'

export const education = [
  {
    degree: "Master's of Science in Computer Science",
    institution: 'The University of Texas at Austin',
    period: '2024 - 2026',
    specialization: 'Computer Science',
    logo: utLogo,
    description: ['Deep Learning, Deep Generative Models, Machine Learning, Advanced Linear Algebra'],
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'National University of Singapore',
    period: '2018 - 2022',
    specialization: 'Database Systems and Artificial Intelligence',
    logo: nusLogo,
    description: [
      'Graduated with honours',
      'ASEAN Undergraduate Scholarship (full-ride)',
      'Relevant coursework: database tuning, big data systems, algorithms, and machine learning',
    ],
  },
  {
    degree: 'Secondary and Junior College Diploma',
    institution: "Saint Andrew's Junior College",
    period: '2014 - 2018',
    specialization: 'GCE O-levels and A-levels',
    logo: saLogo,
    description: [
      'ASEAN Secondary Scholarship (full-ride)',
      'Jacob Ballas Award for outstanding GCE A-level performance',
    ],
  },
] satisfies EducationEntry[]
