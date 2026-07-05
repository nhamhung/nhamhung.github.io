import nusLogo from '../assets/nus.png'
import saLogo from '../assets/sa.png'
import utLogo from '../assets/ut.png'
import type { EducationEntry } from '../types/portfolio'

export const education = [
  {
    degree: "Master's of Science in Computer Science",
    institution: 'The University of Texas at Austin',
    period: '2024 - 2026',
    specialization: 'Systems, Theory and Application Tracks',
    logo: utLogo,
    description: [
      'Academic Achievement: 3.9/4.0 (GPA)',
      'Goals & Aspirations: To become further specialised both technically and theoretically in the field of Computer Science',
      'Relevant Coursework: Deep Learning, Deep Generative Models, Machine Learning, Advanced Linear Algebra, Online Learning & Optimisation',
    ],
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'National University of Singapore',
    period: '2018 - 2022',
    specialization: 'Database Systems and Artificial Intelligence',
    logo: nusLogo,
    description: [
      'Academic Achievement: Graduated with Honours',
      'Award: ASEAN Undergraduate Scholarship (full-ride)',
      'Goals & Aspirations: To become an informed individual capable of deeply comprehending the surrounding world and staying abreast of its latest trends and trajectories',
      'Relevant Coursework: Database Tuning, Big Data Systems, Software Engineering, Design & Analysis of Algorithms, Machine Learning',
    ],
  },
  {
    degree: 'Secondary and Junior College Diploma',
    institution: "Saint Andrew's Junior College",
    period: '2014 - 2018',
    specialization: 'GCE O-levels and A-levels',
    logo: saLogo,
    description: [
      'Academic Achievement: ASEAN Secondary Scholarship (full-ride)',
      'Award: Jacob Ballas Award for outstanding GCE A-level performance',
      'Goals & Aspirations: To fully experience the Singapore\'s education as an international student on MOE Scholarship and get the most out of this privilege and opportunity',
      'Relevant Coursework: H2 Mathematics, H2 Chemistry, H2 Economics, H1 Project Work, H1 General Paper, H1 History',
    ],
  },
] satisfies EducationEntry[]
