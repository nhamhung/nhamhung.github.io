import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import App from './App'
import { Provider } from './components/ui/provider'
import { hero, navigation, profile } from './data/portfolio'

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
})
