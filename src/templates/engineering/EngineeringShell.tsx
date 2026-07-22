import { Box } from '@chakra-ui/react'

import Navbar from '../../components/Navbar'
import type { PortfolioShellProps } from '../types'

function EngineeringShell({
  activeSection,
  layoutMode,
  navigationItems,
  getNavigationHref,
  onNavigate,
  onToggleLayoutMode,
  children,
}: PortfolioShellProps) {
  return (
    <Box
      minH="100vh"
      w="100%"
      className="portfolio-template portfolio-template-engineering"
      data-template-id="engineering"
    >
      <Navbar
        activeSection={activeSection}
        getNavigationHref={getNavigationHref}
        layoutMode={layoutMode}
        navigationItems={[...navigationItems]}
        onNavigate={onNavigate}
        onToggleLayoutMode={onToggleLayoutMode}
      />
      <Box
        as="main"
        w="100%"
        p={0}
        m={0}
        pt={layoutMode === 'multi' ? { base: '68px', md: '76px' } : 0}
        data-layout-mode={layoutMode}
        data-template-id="engineering"
        data-testid="portfolio-main"
        tabIndex={-1}
      >
        {children}
      </Box>
    </Box>
  )
}

export default EngineeringShell
