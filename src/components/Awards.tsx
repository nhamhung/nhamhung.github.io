import { Badge, Box, Container, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import nusLogo from '../assets/nus.svg'
import saLogo from '../assets/sa.png'

function Awards() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const awards = [
    {
      title: 'ASEAN Secondary Scholarship',
      organization: "Saint Andrew's Junior College",
      year: '2014 - 2018',
      description: 'Full-ride scholarship for secondary and junior college education.',
      logo: saLogo,
      tag: 'SCHOLARSHIP',
    },
    {
      title: 'ASEAN Undergraduate Scholarship',
      organization: 'National University of Singapore',
      year: '2018 - 2022',
      description: 'Full-ride scholarship for undergraduate studies.',
      logo: nusLogo,
      tag: 'SCHOLARSHIP',
    },
    {
      title: '1st Prize Team | AIxImpact Healthcare Track',
      organization: 'QuantumBlack, a McKinsey company',
      year: '2022',
      description: 'Best project award in the AIxImpact healthcare case competition track.',
      logo: nusLogo,
      tag: 'COMPETITION',
    },
  ]

  return (
    <Box
      id="awards"
      minH="100vh"
      w="100%"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      py={{ base: 16, md: 24 }}
      className="engineering-grid"
    >
      <Container maxW="1200px" px={{ base: 4, md: 8 }}>
        <VStack align="stretch" gap={4} mb={12} className="reveal-up">
          <Text className="code-font" color="var(--text-300)" letterSpacing="widest" fontSize="xs">
            ACHIEVEMENT_LOG
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} color="var(--text-100)">
            Awards and Achievements
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
          {awards.map((award, index) => (
            <Box
              key={award.title}
              p={6}
              borderRadius="lg"
              bg="var(--surface-900)"
              border="1px solid"
              borderColor="var(--line-700)"
              textAlign="left"
              className={`reveal-up delay-${Math.min(index + 1, 3)}`}
              _hover={{
                borderColor: 'rgba(98, 240, 213, 0.45)',
                transform: 'translateY(-4px)',
                boxShadow: '0 16px 34px rgba(3, 10, 21, 0.55)',
              }}
              transition="all 0.25s ease"
            >
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
                <Box
                  w="48px"
                  h="48px"
                  p={2}
                  borderRadius="md"
                  bg="rgba(34, 128, 235, 0.15)"
                  border="1px solid"
                  borderColor="rgba(69, 162, 255, 0.36)"
                >
                  <Image src={award.logo} alt={`${award.organization} logo`} w="100%" h="100%" objectFit="contain" />
                </Box>
                <Badge
                  className="code-font"
                  px={2.5}
                  py={1}
                  borderRadius="md"
                  bg="rgba(98, 240, 213, 0.12)"
                  border="1px solid"
                  borderColor="rgba(98, 240, 213, 0.45)"
                  color="var(--text-100)"
                  fontWeight={500}
                  fontSize="0.65rem"
                >
                  {award.tag}
                </Badge>
              </Box>

              <Heading as="h3" fontSize="xl" color="var(--text-100)" mb={2}>
                {award.title}
              </Heading>
              <Text className="code-font" color="var(--accent-300)" fontSize="sm" mb={3}>
                {award.organization}
              </Text>
              <Text color="var(--text-300)" mb={3} lineHeight="1.75">
                {award.description}
              </Text>
              <Text className="code-font" color="var(--text-300)" fontSize="xs">
                YEAR: {award.year}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Box
        position="absolute"
        bottom={6}
        left="50%"
        transform="translateX(-50%)"
        color="var(--text-300)"
        _hover={{ color: 'var(--text-100)' }}
        cursor="pointer"
        onClick={() => scrollToSection('projects')}
        className="pulse-line"
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={28} />
      </Box>
    </Box>
  )
}

export default Awards
