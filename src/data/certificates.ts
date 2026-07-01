import aixImpactCertificate from '../assets/certificates/aiximpact-certificate.pdf'
import aixImpactPresentation from '../assets/certificates/aiximpact-final-presentation.pdf'
import awsCloudPractitioner from '../assets/certificates/aws-cloud-practitioner.pdf'
import kubernetesApplicationDeveloper from '../assets/certificates/certified-kubernetes-application-developer.pdf'
import courseraCertificate from '../assets/certificates/coursera-mmpg2mrcsjrt.pdf'
import databaseSystemFocusArea from '../assets/certificates/database-system-focus-area.pdf'
import nusBigDataSystemsAward from '../assets/certificates/nus-top-student-for-big-data-systems.pdf'
import universityCertificate from '../assets/certificates/university.pdf'
import type { CertificateEntry } from '../types/portfolio'

export const certificates = [
  {
    title: 'AIxImpact Competition Certificate',
    issuer: 'AIxImpact',
    kind: 'Competition',
    description:
      'Recognition for applying AI and product thinking in a competitive build setting, with emphasis on practical delivery and presentation.',
    file: aixImpactCertificate,
    logoKey: 'aiximpact',
    logoLabel: 'AIxImpact competition logo mark',
    logoAccent: '#0f766e',
    ariaLabel: 'Open AIxImpact Certificate',
  },
  {
    title: 'AIxImpact Final Presentation',
    issuer: 'AIxImpact',
    kind: 'Presentation',
    description:
      'Final project deck showing problem framing, solution design, implementation decisions, and communication of the AIxImpact outcome.',
    file: aixImpactPresentation,
    logoKey: 'aiximpact',
    logoLabel: 'AIxImpact presentation logo mark',
    logoAccent: '#0f766e',
    ariaLabel: 'Open AIxImpact Final Presentation',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    kind: 'Certification',
    description:
      'Foundational AWS certification covering cloud concepts, core services, security, architecture, pricing, and operational practices.',
    file: awsCloudPractitioner,
    logoKey: 'amazonwebservices',
    logoLabel: 'Amazon Web Services certification logo',
    logoAccent: '#ff9900',
    ariaLabel: 'Open AWS Certified Cloud Practitioner certificate',
  },
  {
    title: 'Certified Kubernetes Application Developer',
    issuer: 'The Linux Foundation',
    kind: 'Certification',
    description:
      'Cloud-native credential demonstrating hands-on Kubernetes application design, deployment, configuration, and troubleshooting skills.',
    file: kubernetesApplicationDeveloper,
    logoKey: 'kubernetes',
    logoLabel: 'Kubernetes certification logo',
    logoAccent: '#326ce5',
    ariaLabel: 'Open Certified Kubernetes Application Developer certificate',
  },
  {
    title: 'Coursera Machine Learning Certificate',
    issuer: 'Coursera',
    kind: 'Coursework',
    description:
      'Course completion evidence for structured machine learning study, strengthening the portfolio with formal online learning artifacts.',
    file: courseraCertificate,
    logoKey: 'coursera',
    logoLabel: 'Coursera logo',
    logoAccent: '#0056d2',
    ariaLabel: 'Open Coursera Certificate',
  },
  {
    title: 'Database System Focus Area',
    issuer: 'Academic',
    kind: 'Coursework',
    description:
      'Academic focus area evidence for database systems, reinforcing backend, data modeling, and scalable storage foundations.',
    file: databaseSystemFocusArea,
    logoKey: 'database',
    logoLabel: 'Database coursework logo mark',
    logoAccent: '#4169e1',
    ariaLabel: 'Open Database System Focus Area certificate',
  },
  {
    title: 'NUS Top Student for Big Data Systems',
    issuer: 'National University of Singapore',
    kind: 'Award',
    description:
      'Academic award recognizing strong performance in big data systems, highlighting distributed data processing and analytical depth.',
    file: nusBigDataSystemsAward,
    logoKey: 'nus',
    logoLabel: 'National University of Singapore award logo mark',
    logoAccent: '#ef7c00',
    ariaLabel: 'Open NUS Top Student for Big Data Systems award',
  },
  {
    title: 'University Academic Certificate',
    issuer: 'Academic',
    kind: 'Academic',
    description:
      'Formal academic record supporting the education timeline and providing evidence of completed university-level study.',
    file: universityCertificate,
    logoKey: 'university',
    logoLabel: 'University certificate logo mark',
    logoAccent: '#1d4ed8',
    ariaLabel: 'Open University certificate',
  },
] satisfies CertificateEntry[]
