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
    ariaLabel: 'Open AIxImpact Certificate',
  },
  {
    title: 'AIxImpact Final Presentation',
    issuer: 'AIxImpact',
    kind: 'Presentation',
    file: aixImpactPresentation,
    ariaLabel: 'Open AIxImpact Final Presentation',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    kind: 'Certification',
    file: awsCloudPractitioner,
    ariaLabel: 'Open AWS Certified Cloud Practitioner certificate',
  },
  {
    title: 'Certified Kubernetes Application Developer',
    issuer: 'The Linux Foundation',
    kind: 'Certification',
    file: kubernetesApplicationDeveloper,
    ariaLabel: 'Open Certified Kubernetes Application Developer certificate',
  },
  {
    title: 'Coursera Certificate',
    issuer: 'Coursera',
    kind: 'Coursework',
    file: courseraCertificate,
    ariaLabel: 'Open Coursera Certificate',
  },
  {
    title: 'Database System Focus Area',
    issuer: 'Academic',
    kind: 'Coursework',
    file: databaseSystemFocusArea,
    ariaLabel: 'Open Database System Focus Area certificate',
  },
  {
    title: 'NUS Top Student for Big Data Systems',
    issuer: 'National University of Singapore',
    kind: 'Award',
    file: nusBigDataSystemsAward,
    ariaLabel: 'Open NUS Top Student for Big Data Systems award',
  },
  {
    title: 'University',
    issuer: 'Academic',
    kind: 'Academic',
    file: universityCertificate,
    ariaLabel: 'Open University certificate',
  },
] satisfies CertificateEntry[]
