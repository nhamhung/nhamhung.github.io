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
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Videos from './components/Videos'
import { navigation } from './data/portfolio'
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
  videos: Videos,
  skills: Skills,
  contact: Contact,
} satisfies Record<SectionId, ComponentType>

function App() {
  const enabledNavigationItems = useMemo(() => getEnabledNavigationItems(navigation), [])
  const enabledSectionIds = useMemo(() => getEnabledSectionIds(navigation), [])
  const activeSection = useActiveSection(enabledSectionIds)

  return (
    <Box minH="100vh" w="100%">
      <Navbar activeSection={activeSection} navigationItems={enabledNavigationItems} />
      <Box as="main" w="100%" p={0} m={0}>
        {enabledSectionIds.map((sectionId) => {
          const SectionComponent = sectionComponents[sectionId]

          return <SectionComponent key={sectionId} />
        })}
      </Box>
    </Box>
  )
}

export default App
