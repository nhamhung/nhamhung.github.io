export type SectionId =
  | 'home'
  | 'about'
  | 'education'
  | 'experience'
  | 'awards'
  | 'projects'
  | 'gallery'
  | 'videos'
  | 'skills'
  | 'contact'

export type ExternalLink = {
  label: string
  href: string
  ariaLabel: string
}

export type SectionAction = {
  label: string
  sectionId: SectionId
  ariaLabel: string
}

export type Metric = {
  value: string
  label: string
}

export type NavigationItem = {
  id: SectionId
  label: string
  enabled: boolean
}

export type Profile = {
  name: string
  slug: string
  role: string
  location: string
  email: string
  profileImage: string
  summary: string
  socialLinks: ExternalLink[]
}

export type HeroSection = {
  eyebrow: string
  statusBadges: string[]
  headline: string
  highlightedPhrase?: string
  intro: string
  stats: Metric[]
  primaryAction: SectionAction
  secondaryAction: SectionAction
  stackHighlights: string[]
}

export type AboutSection = {
  eyebrow: string
  title: string
  intro: string
  paragraphs: string[]
  metrics: Metric[]
}

export type EducationEntry = {
  degree: string
  institution: string
  period: string
  specialization: string
  logo: string
  description: string[]
}

export type ExperienceEntry = {
  title: string
  company: string
  period: string
  description: string[]
}

export type AwardEntry = {
  title: string
  organization: string
  year: string
  description: string
  logo: string
  tag: string
}

export type ProjectEntry = {
  title: string
  description: string
  technologies: string[]
  actions: ExternalLink[]
}

export type GalleryItem = {
  id: string
  src: string
  alt: string
  title: string
  description: string
}

export type VideoEntry = {
  id: string
  title: string
  description: string
  videoId: string
  watchLink: ExternalLink
}

export type SkillCategory = {
  category: string
  skills: string[]
}

export type CertificateEntry = {
  title: string
  issuer: string
  kind: string
  file: string
  ariaLabel: string
}

export type Portfolio = {
  profile: Profile
  hero: HeroSection
  navigation: NavigationItem[]
  about: AboutSection
  education: EducationEntry[]
  experience: ExperienceEntry[]
  awards: AwardEntry[]
  projects: ProjectEntry[]
  gallery: GalleryItem[]
  videos: VideoEntry[]
  skills: SkillCategory[]
  certificates: CertificateEntry[]
}
