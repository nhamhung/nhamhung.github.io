import nusLogo from '../assets/nus.png'
import saLogo from '../assets/sa.png'
import type { AwardEntry } from '../types/portfolio'

export const awards = [
  {
    title: 'ASEAN Secondary Scholarship',
    organization: "Saint Andrew's Junior College",
    year: '2014 - 2018',
    description: 'Full-ride scholarship for secondary and junior college education.',
    logo: saLogo,
    tag: 'SCHOLARSHIP',
  },
  {
    title: 'ASEAN Undergraduate Scholarship',
    organization: 'National University of Singapore',
    year: '2018 - 2022',
    description: 'Full-ride scholarship for undergraduate studies.',
    logo: nusLogo,
    tag: 'SCHOLARSHIP',
  },
  {
    title: '1st Prize Team | AIxImpact Healthcare Track',
    organization: 'QuantumBlack, a McKinsey company',
    year: '2022',
    description: 'Best project award in the AIxImpact healthcare case competition track.',
    logo: nusLogo,
    tag: 'COMPETITION',
  },
] satisfies AwardEntry[]
