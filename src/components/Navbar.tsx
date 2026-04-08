import { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Drawer,
  Flex,
  IconButton,
  Image,
  Link,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { HiMenu, HiX } from 'react-icons/hi'
import profileImage from '../assets/profile.jpeg'

interface NavbarProps {
  activeSection?: string
}

function Navbar({ activeSection = 'home' }: NavbarProps) {
  const { open, onOpen, onClose } = useDisclosure()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'awards', label: 'Awards' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'videos', label: 'Videos' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      onClose()
    }
  }

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      borderBottom="1px solid"
      borderColor={isScrolled ? 'rgba(118, 168, 255, 0.34)' : 'transparent'}
      bg={isScrolled ? 'rgba(5, 17, 32, 0.82)' : 'rgba(4, 12, 24, 0.64)'}
      backdropFilter="blur(14px)"
      boxShadow={isScrolled ? '0 14px 40px rgba(2, 10, 20, 0.5)' : 'none'}
      transition="all 0.3s ease"
    >
      <Container maxW="1280px" px={{ base: 4, md: 8 }}>
        <Flex as="nav" justify="space-between" align="center" h={{ base: '68px', md: '76px' }}>
          <Link
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('home')
            }}
            display="flex"
            alignItems="center"
            gap={3}
          >
            <Box
              w={{ base: '36px', md: '40px' }}
              h={{ base: '36px', md: '40px' }}
              borderRadius="md"
              overflow="hidden"
              border="1px solid"
              borderColor="rgba(98, 240, 213, 0.5)"
              boxShadow="0 0 0 2px rgba(98, 240, 213, 0.15)"
            >
              <Image src={profileImage} alt="Profile" w="100%" h="100%" objectFit="cover" />
            </Box>
            <Box>
              <Text className="code-font" fontSize="xs" color="var(--text-300)" letterSpacing="widest">
                PROFILE.NODE
              </Text>
              <Text fontSize={{ base: 'sm', md: 'md' }} fontWeight={600} color="var(--text-100)">
                Nham Quoc Hung
              </Text>
            </Box>
          </Link>

          <Flex as="ul" listStyleType="none" gap={1} align="center" display={{ base: 'none', lg: 'flex' }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <Box as="li" key={item.id}>
                  <Link
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item.id)
                    }}
                    px={3}
                    py={2}
                    borderRadius="md"
                    fontSize="sm"
                    className="code-font"
                    color={isActive ? 'var(--text-100)' : 'var(--text-300)'}
                    bg={isActive ? 'rgba(34, 128, 235, 0.22)' : 'transparent'}
                    border="1px solid"
                    borderColor={isActive ? 'rgba(69, 162, 255, 0.6)' : 'transparent'}
                    _hover={{
                      color: 'var(--text-100)',
                      borderColor: 'rgba(69, 162, 255, 0.4)',
                      bg: 'rgba(34, 128, 235, 0.16)',
                    }}
                  >
                    {item.label}
                  </Link>
                </Box>
              )
            })}
          </Flex>

          <IconButton
            aria-label="Toggle menu"
            display={{ base: 'flex', lg: 'none' }}
            variant="ghost"
            onClick={open ? onClose : onOpen}
            color="var(--text-100)"
            border="1px solid"
            borderColor="rgba(118, 168, 255, 0.35)"
            bg="rgba(14, 31, 54, 0.75)"
            _hover={{ bg: 'rgba(22, 45, 74, 0.88)' }}
          >
            {open ? <HiX size={20} /> : <HiMenu size={20} />}
          </IconButton>
        </Flex>
      </Container>

      <Drawer.Root open={open} onOpenChange={(e) => !e.open && onClose()} placement="end">
        <Drawer.Backdrop bg="rgba(0, 0, 0, 0.45)" />
        <Drawer.Positioner>
          <Drawer.Content maxW="300px" bg="var(--bg-800)" borderLeft="1px solid" borderColor="rgba(118, 168, 255, 0.24)">
            <Drawer.Header borderBottom="1px solid" borderColor="rgba(118, 168, 255, 0.22)">
              <Flex justify="space-between" align="center">
                <Text className="code-font" fontWeight={600} color="var(--text-100)">
                  NAV_INDEX
                </Text>
                <IconButton
                  aria-label="Close menu"
                  variant="ghost"
                  onClick={onClose}
                  color="var(--text-100)"
                  _hover={{ bg: 'rgba(22, 45, 74, 0.88)' }}
                >
                  <HiX />
                </IconButton>
              </Flex>
            </Drawer.Header>
            <Drawer.Body py={4} px={3}>
              <VStack align="stretch" gap={2}>
                {navItems.map((item) => {
                  const isActive = activeSection === item.id

                  return (
                    <Link
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToSection(item.id)
                      }}
                      px={3}
                      py={2.5}
                      borderRadius="md"
                      className="code-font"
                      fontSize="sm"
                      color={isActive ? 'var(--text-100)' : 'var(--text-300)'}
                      bg={isActive ? 'rgba(34, 128, 235, 0.2)' : 'transparent'}
                      border="1px solid"
                      borderColor={isActive ? 'rgba(69, 162, 255, 0.52)' : 'transparent'}
                      _hover={{
                        bg: 'rgba(34, 128, 235, 0.16)',
                        borderColor: 'rgba(69, 162, 255, 0.4)',
                        color: 'var(--text-100)',
                      }}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </Box>
  )
}

export default Navbar
