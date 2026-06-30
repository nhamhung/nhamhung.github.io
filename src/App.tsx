import { Box } from '@chakra-ui/react'
import { useMemo } from 'react'
import type { ComponentType } from 'react'

import './App.css'
import About from './components/About'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Gallery from './components/Gallery'
import Hero from './components/Hero'
import Journal from './components/Journal'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { navigation } from './data/portfolio'
import { usePortfolioLayout } from './hooks/usePortfolioLayout'
import type { SectionId } from './types/portfolio'
import { getEnabledNavigationItems, getEnabledSectionIds, useActiveSection } from './utils/scroll'

const sectionComponents = {
  home: Hero,
  about: About,
  education: Education,
  experience: Experience,
  awards: Awards,
  projects: Projects,
  gallery: Gallery,
  journal: Journal,
  skills: Skills,
  contact: Contact,
} satisfies Record<SectionId, ComponentType>

function App() {
  const enabledNavigationItems = useMemo(() => getEnabledNavigationItems(navigation), [])
  const enabledSectionIds = useMemo(() => getEnabledSectionIds(navigation), [])
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

  const visibleSectionIds = isMultiPageLayout ? [activePageSection] : enabledSectionIds

  return (
    <Box minH="100vh" w="100%">
      <Navbar
        activeSection={activeSection}
        getNavigationHref={getNavigationHref}
        layoutMode={layoutMode}
        navigationItems={enabledNavigationItems}
        onNavigate={navigateToSection}
        onToggleLayoutMode={toggleLayoutMode}
      />
      <Box
        as="main"
        w="100%"
        p={0}
        m={0}
        pt={isMultiPageLayout ? { base: '68px', md: '76px' } : 0}
        data-layout-mode={layoutMode}
        data-testid="portfolio-main"
      >
        {visibleSectionIds.map((sectionId) => {
          const SectionComponent = sectionComponents[sectionId]

          return <SectionComponent key={sectionId} />
        })}
      </Box>
    </Box>
  )
}

export default App
