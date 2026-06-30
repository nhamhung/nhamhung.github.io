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
    title: 'AIxImpact Certificate',
    issuer: 'AIxImpact',
    kind: 'Competition',
    file: aixImpactCertificate,
    logoKey: 'aiximpact',
    logoLabel: 'AIxImpact competition logo mark',
    logoAccent: '#0f766e',
    ariaLabel: 'Open AIxImpact Certificate',
  },
  {
    title: 'ABC',
    issuer: 'AIxImpact',
    kind: 'Presentation',
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
    file: awsCloudPractitioner,
    logoKey: 'amazonwebservices',
    logoLabel: 'Amazon Web Services certification logo',
    logoAccent: '#ff9900',
    ariaLabel: 'Open AWS Certified Cloud Practitioner certificate',
  },
  {
    title: 'Kubernetes',
    issuer: 'The Linux Foundation',
    kind: 'Certification',
    file: kubernetesApplicationDeveloper,
    logoKey: 'kubernetes',
    logoLabel: 'Kubernetes certification logo',
    logoAccent: '#326ce5',
    ariaLabel: 'Open Certified Kubernetes Application Developer certificate',
  },
  {
    title: 'Coursera Certificate',
    issuer: 'Coursera',
    kind: 'Coursework',
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
    file: nusBigDataSystemsAward,
    logoKey: 'nus',
    logoLabel: 'National University of Singapore award logo mark',
    logoAccent: '#ef7c00',
    ariaLabel: 'Open NUS Top Student for Big Data Systems award',
  },
  {
    title: 'University',
    issuer: 'Academic',
    kind: 'Academic',
    file: universityCertificate,
    logoKey: 'university',
    logoLabel: 'University certificate logo mark',
    logoAccent: '#1d4ed8',
    ariaLabel: 'Open University certificate',
  },
] satisfies CertificateEntry[]
