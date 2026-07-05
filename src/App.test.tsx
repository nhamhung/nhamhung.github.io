import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import App from './App'
import { Provider } from './components/ui/provider'
import { hero, journalPosts, navigation, profile } from './data/portfolio'

const enabledNavigationItems = navigation.filter((item) => item.enabled)

const renderPortfolio = () =>
  render(
    <Provider>
      <App />
    </Provider>,
  )

beforeEach(() => {
  window.localStorage.clear()
  window.history.pushState(null, '', '/')
})

afterEach(() => {
  cleanup()
})

describe('App smoke render', () => {
  it('renders core portfolio content from local data files', () => {
    renderPortfolio()

    expect(document.body.textContent).toContain(profile.name)
    expect(document.body.textContent).toContain(profile.role)
    expect(document.body.textContent).toContain(hero.primaryAction.label)
    expect(screen.getByTestId('hero-resume-download')).toHaveAttribute('download', profile.resume.fileName)
    expect(screen.getAllByText(enabledNavigationItems[0].label).length).toBeGreaterThan(0)
  })

  it('renders the layout switch control and all enabled sections in single-page mode', () => {
    renderPortfolio()

    expect(screen.getByTestId('navbar-layout-toggle')).toBeInTheDocument()
    expect(screen.getByTestId('navbar-theme-toggle')).toBeInTheDocument()
    expect(screen.getByTestId('portfolio-main')).toHaveAttribute('data-layout-mode', 'single')
    expect(document.getElementById('home')).toBeInTheDocument()
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByTestId('projects-section')).toBeInTheDocument()
    expect(screen.getAllByText('IN_SITE').length).toBeGreaterThan(0)
    expect(screen.getAllByText('WORDPRESS').length).toBeGreaterThan(0)
  })

  it('switches to multi-page mode and renders one selected page section', async () => {
    renderPortfolio()

    fireEvent.click(screen.getByTestId('navbar-layout-toggle'))

    expect(screen.getByTestId('portfolio-main')).toHaveAttribute('data-layout-mode', 'multi')
    expect(document.getElementById('home')).toBeInTheDocument()
    expect(screen.queryByTestId('about-section')).not.toBeInTheDocument()
    expect(screen.queryByTestId('navbar-link-projects')).not.toBeInTheDocument()

    fireEvent.click(screen.getByTestId('navbar-menu-toggle'))
    fireEvent.click(await screen.findByTestId('navbar-mobile-link-projects'))

    expect(screen.getByTestId('projects-section')).toBeInTheDocument()
    expect(screen.queryByTestId('about-section')).not.toBeInTheDocument()
    expect(window.location.hash).toBe('#/projects')
  })

  it('initializes multi-page mode from a direct GitHub Pages-safe section hash', async () => {
    window.history.pushState(null, '', '#/projects')

    renderPortfolio()

    expect(screen.getByTestId('portfolio-main')).toHaveAttribute('data-layout-mode', 'multi')
    expect(screen.getByTestId('projects-section')).toBeInTheDocument()
    expect(screen.queryByTestId('about-section')).not.toBeInTheDocument()
    expect(screen.queryByTestId('navbar-link-about')).not.toBeInTheDocument()

    fireEvent.click(screen.getByTestId('navbar-menu-toggle'))

    expect(await screen.findByTestId('navbar-mobile-link-about')).toHaveAttribute('href', '#/about')
  })

  it('renders a local journal post from a direct GitHub Pages-safe hash', () => {
    window.history.pushState(null, '', journalPosts[0].href)

    renderPortfolio()

    expect(screen.getByTestId('journal-post-page')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: journalPosts[0].title })).toBeInTheDocument()
    expect(screen.getByText('IN_SITE')).toBeInTheDocument()
    expect(screen.getByTestId('journal-post-back-link')).toHaveAttribute('href', '#/journal')
  })

  it('renders a graceful fallback for an unknown local journal post hash', () => {
    window.history.pushState(null, '', '#/journal/missing-post')

    renderPortfolio()

    expect(screen.getByTestId('journal-post-not-found')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: 'Journal post not found' })).toBeInTheDocument()
  })
})
