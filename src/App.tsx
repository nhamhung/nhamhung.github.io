import { useEffect, useMemo, useState } from 'react'

import './App.css'
import { navigation } from './data/portfolio'
import { usePortfolioLayout } from './hooks/usePortfolioLayout'
import { activePortfolioTemplate } from './templates'
import type { PortfolioTemplate } from './templates/types'
import { parseJournalPostHash } from './utils/journal'
import { getEnabledNavigationItems, getEnabledSectionIds, useActiveSection } from './utils/scroll'

type PortfolioAppProps = {
  template: PortfolioTemplate
}

export function PortfolioApp({ template }: PortfolioAppProps) {
  const [locationHash, setLocationHash] = useState(() => window.location.hash)
  const enabledNavigationItems = useMemo(() => getEnabledNavigationItems(navigation), [])
  const enabledSectionIds = useMemo(() => getEnabledSectionIds(navigation), [])
  const sectionComponents = template.sectionComponents
  const scrollActiveSection = useActiveSection(enabledSectionIds)
  const {
    layoutMode,
    activeSection,
    activePageSection,
    isMultiPageLayout,
    getNavigationHref,
    navigateToSection,
    toggleLayoutMode,
  } = usePortfolioLayout(enabledSectionIds, scrollActiveSection)

  useEffect(() => {
    const syncLocationHash = () => setLocationHash(window.location.hash)

    window.addEventListener('hashchange', syncLocationHash)
    window.addEventListener('popstate', syncLocationHash)

    return () => {
      window.removeEventListener('hashchange', syncLocationHash)
      window.removeEventListener('popstate', syncLocationHash)
    }
  }, [])

  const localJournalPostSlug = parseJournalPostHash(locationHash)
  const visibleSectionIds = isMultiPageLayout ? [activePageSection] : enabledSectionIds
  const ShellComponent = template.ShellComponent
  const JournalPostComponent = template.JournalPostComponent
  const shellActiveSection = localJournalPostSlug ? 'journal' : activeSection
  const selectedContent = localJournalPostSlug ? (
    <JournalPostComponent slug={localJournalPostSlug} />
  ) : (
    visibleSectionIds.map((sectionId) => {
      const SectionComponent = sectionComponents[sectionId]

      return <SectionComponent key={sectionId} />
    })
  )

  return (
    <ShellComponent
      activeSection={shellActiveSection}
      getNavigationHref={getNavigationHref}
      layoutMode={layoutMode}
      navigationItems={enabledNavigationItems}
      onNavigate={navigateToSection}
      onToggleLayoutMode={toggleLayoutMode}
    >
      {selectedContent}
    </ShellComponent>
  )
}

function App() {
  return <PortfolioApp template={activePortfolioTemplate} />
}

export default App
