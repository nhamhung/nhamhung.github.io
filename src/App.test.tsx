import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import App from './App'
import { Provider } from './components/ui/provider'
import { hero, navigation, profile } from './data/portfolio'

const enabledNavigationItems = navigation.filter((item) => item.enabled)

describe('App smoke render', () => {
  it('renders core portfolio content from local data files', () => {
    render(
      <Provider>
        <App />
      </Provider>,
    )

    expect(document.body.textContent).toContain(profile.name)
    expect(document.body.textContent).toContain(profile.role)
    expect(document.body.textContent).toContain(hero.primaryAction.label)
    expect(screen.getAllByText(enabledNavigationItems[0].label).length).toBeGreaterThan(0)
  })
})
