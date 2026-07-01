import { describe, expect, it } from 'vitest'

import { portfolio, sectionIds } from './portfolio'
import type { ExternalLink, SectionId } from '../types/portfolio'

const supportedHrefPattern = /^(https?:\/\/|mailto:)/

const expectNonEmpty = (value: string, message: string) => {
  expect(value.trim(), message).not.toHaveLength(0)
}

const expectExternalLink = (link: ExternalLink, context: string) => {
  expectNonEmpty(link.label, `${context} needs a link label`)
  expectNonEmpty(link.href, `${context} needs an href`)
  expectNonEmpty(link.ariaLabel, `${context} needs an ariaLabel`)
  expect(supportedHrefPattern.test(link.href), `${context} must use http(s) or mailto href`).toBe(true)
}

const expectKnownSection = (sectionId: SectionId, context: string) => {
  expect(sectionIds, `${context} must target a known section`).toContain(sectionId)
}

describe('src/data/portfolio.ts', () => {
  it('keeps required profile and hero fields filled in', () => {
    expectNonEmpty(portfolio.profile.name, 'src/data/profile.ts profile.name is required')
    expectNonEmpty(portfolio.profile.role, 'src/data/profile.ts profile.role is required')
    expectNonEmpty(portfolio.profile.email, 'src/data/profile.ts profile.email is required')
    expectNonEmpty(portfolio.profile.profileImage, 'src/data/profile.ts profile.profileImage is required')
    expectNonEmpty(portfolio.profile.resume.href, 'src/data/profile.ts profile.resume.href is required')
    expectNonEmpty(portfolio.profile.resume.fileName, 'src/data/profile.ts profile.resume.fileName is required')
    expectNonEmpty(portfolio.profile.resume.ariaLabel, 'src/data/profile.ts profile.resume.ariaLabel is required')
    expectNonEmpty(portfolio.profile.summary, 'src/data/profile.ts profile.summary is required')
    expectNonEmpty(portfolio.hero.headline, 'src/data/profile.ts hero.headline is required')
    expectNonEmpty(portfolio.hero.intro, 'src/data/profile.ts hero.intro is required')
    expectKnownSection(portfolio.hero.primaryAction.sectionId, 'src/data/profile.ts hero.primaryAction')
    expectKnownSection(portfolio.hero.secondaryAction.sectionId, 'src/data/profile.ts hero.secondaryAction')
  })

  it('keeps social links and project actions usable without network checks', () => {
    for (const link of portfolio.profile.socialLinks) {
      expectExternalLink(link, `src/data/profile.ts social link "${link.label}"`)
    }

    for (const project of portfolio.projects) {
      expectNonEmpty(project.title, 'src/data/projects.ts project.title is required')
      expectNonEmpty(project.description, `src/data/projects.ts project "${project.title}" needs a description`)
      expectNonEmpty(project.logoKey, `src/data/projects.ts project "${project.title}" needs a logo key`)
      expectNonEmpty(project.logoLabel, `src/data/projects.ts project "${project.title}" needs a logo label`)
      expect(project.technologies.length, `src/data/projects.ts project "${project.title}" needs technologies`).toBeGreaterThan(0)

      for (const action of project.actions) {
        expectExternalLink(action, `src/data/projects.ts project "${project.title}" action "${action.label}"`)
      }
    }

    for (const post of portfolio.blog) {
      expectNonEmpty(post.title, 'src/data/blog.ts blog post title is required')
      expectNonEmpty(post.image, `src/data/blog.ts blog post "${post.title}" needs a feed image`)
      expectNonEmpty(post.imageAlt, `src/data/blog.ts blog post "${post.title}" needs image alt text`)
      expectNonEmpty(post.summary, `src/data/blog.ts blog post "${post.title}" needs a summary`)
      expectExternalLink(
        { label: post.title, href: post.href, ariaLabel: `Read ${post.title}` },
        `src/data/blog.ts blog post "${post.title}"`,
      )
      expect(post.topics.length, `src/data/blog.ts blog post "${post.title}" needs topics`).toBeGreaterThan(0)
    }
  })

  it('keeps gallery and certificate entries accessible', () => {
    for (const item of portfolio.gallery) {
      expectNonEmpty(item.id, 'src/data/gallery.ts gallery item id is required')
      expectNonEmpty(item.src, `src/data/gallery.ts gallery item "${item.id}" needs a source`)
      expectNonEmpty(item.alt, `src/data/gallery.ts gallery item "${item.id}" needs alt text`)
      expectNonEmpty(item.title, `src/data/gallery.ts gallery item "${item.id}" needs a title`)
    }

    for (const certificate of portfolio.certificates) {
      expectNonEmpty(certificate.title, 'src/data/certificates.ts certificate title is required')
      expectNonEmpty(certificate.issuer, `src/data/certificates.ts certificate "${certificate.title}" needs an issuer`)
      expectNonEmpty(
        certificate.description,
        `src/data/certificates.ts certificate "${certificate.title}" needs a description`,
      )
      expectNonEmpty(certificate.file, `src/data/certificates.ts certificate "${certificate.title}" needs a file`)
      expectNonEmpty(certificate.logoKey, `src/data/certificates.ts certificate "${certificate.title}" needs a logo key`)
      expectNonEmpty(certificate.logoLabel, `src/data/certificates.ts certificate "${certificate.title}" needs a logo label`)
      expectNonEmpty(certificate.ariaLabel, `src/data/certificates.ts certificate "${certificate.title}" needs an ariaLabel`)
    }
  })

  it('keeps visible section arrays populated with display fields', () => {
    expect(portfolio.education.length, 'src/data/education.ts should include at least one education entry').toBeGreaterThan(0)
    expect(portfolio.experience.length, 'src/data/experience.ts should include at least one experience entry').toBeGreaterThan(0)
    expect(portfolio.awards.length, 'src/data/awards.ts should include at least one award entry').toBeGreaterThan(0)
    expect(portfolio.projects.length, 'src/data/projects.ts should include at least one project entry').toBeGreaterThan(0)
    expect(portfolio.skills.length, 'src/data/skills.ts should include at least one skill category').toBeGreaterThan(0)

    for (const education of portfolio.education) {
      expectNonEmpty(education.degree, 'src/data/education.ts education.degree is required')
      expectNonEmpty(education.institution, `src/data/education.ts education "${education.degree}" needs an institution`)
    }

    for (const experience of portfolio.experience) {
      expectNonEmpty(experience.title, 'src/data/experience.ts experience.title is required')
      expectNonEmpty(experience.company, `src/data/experience.ts experience "${experience.title}" needs a company`)
    }

    for (const skillCategory of portfolio.skills) {
      expectNonEmpty(skillCategory.category, 'src/data/skills.ts skill category name is required')
      expect(skillCategory.skills.length, `src/data/skills.ts category "${skillCategory.category}" needs skills`).toBeGreaterThan(0)

      for (const skill of skillCategory.skills) {
        expectNonEmpty(skill.label, `src/data/skills.ts category "${skillCategory.category}" has a skill without a label`)
        expectNonEmpty(skill.logoKey, `src/data/skills.ts skill "${skill.label}" needs a logo key`)
        expectNonEmpty(skill.logoLabel, `src/data/skills.ts skill "${skill.label}" needs a logo label`)
      }
    }
  })
})
