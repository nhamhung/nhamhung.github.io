import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stats = [
    { value: '4+', label: 'Years in Data and Software Engineering' },
    { value: '5+', label: 'Years in Teaching and Mentoring' },
    { value: '3+', label: 'Years Creating Educational Content' },
  ]

  return (
    <Box
      id="about"
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
            ABOUT_PROTOCOL
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} color="var(--text-100)">
            About Me
          </Heading>
          <Text maxW="760px" color="var(--text-300)" lineHeight="1.8">
            I build robust data platforms and backend services that are designed for reliability, maintainability, and
            clear business impact.
          </Text>
        </VStack>

        <VStack align="stretch" gap={5} mb={8}>
          <Box
            p={{ base: 5, md: 7 }}
            borderRadius="lg"
            bg="var(--surface-900)"
            border="1px solid"
            borderColor="var(--line-700)"
            className="reveal-up delay-1"
          >
            <Text color="var(--text-300)" lineHeight="1.9">
              I am a data engineer focused on designing efficient pipelines and analytics systems that turn raw data into
              trustworthy decision inputs. My work spans ingestion, modeling, orchestration, and data product delivery.
            </Text>
          </Box>

          <Box
            p={{ base: 5, md: 7 }}
            borderRadius="lg"
            bg="var(--surface-900)"
            border="1px solid"
            borderColor="var(--line-700)"
            className="reveal-up delay-2"
          >
            <Text color="var(--text-300)" lineHeight="1.9">
              Outside engineering, I mentor students and share practical learning paths for computer science and data.
              Teaching keeps my fundamentals sharp and improves how I design systems for real users.
            </Text>
          </Box>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={5}>
          {stats.map((stat) => (
            <Box
              key={stat.label}
              p={6}
              borderRadius="lg"
              bg="var(--surface-900)"
              border="1px solid"
              borderColor="var(--line-700)"
              className="reveal-up delay-3"
              _hover={{
                borderColor: 'rgba(98, 240, 213, 0.45)',
                transform: 'translateY(-3px)',
                boxShadow: '0 14px 30px rgba(3, 10, 21, 0.5)',
              }}
              transition="all 0.25s ease"
            >
              <Text className="code-font" fontSize="xs" color="var(--text-300)" mb={2}>
                METRIC
              </Text>
              <Heading as="h3" fontSize="4xl" color="var(--accent-300)" mb={3}>
                {stat.value}
              </Heading>
              <Text color="var(--text-300)">{stat.label}</Text>
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
        onClick={() => scrollToSection('education')}
        className="pulse-line"
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={28} />
      </Box>
    </Box>
  )
}

export default About
