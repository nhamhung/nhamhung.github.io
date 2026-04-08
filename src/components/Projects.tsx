import { Badge, Box, Button, Container, Flex, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { HiArrowDown } from 'react-icons/hi'

function Projects() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const projects = [
    {
      title: "Master's Coursework and Technical Certificates",
      description: 'Graduate coursework and technical certifications with applied work from professional projects.',
      technologies: ['Deep Learning', 'Machine Learning', 'Linear Algebra', 'Generative AI'],
      github: 'https://github.com/nhamhung/Coursework-and-Certificates',
      demo: 'https://github.com/nhamhung/Coursework-and-Certificates/blob/main/Coursework/Statement%20of%20Purpose.pdf',
    },
    {
      title: 'YouTube Engineering Journal',
      description: 'Technical content sharing lessons from data engineering, computer science, and interview prep.',
      technologies: ['Data Engineering', 'LeetCode', 'Data Analytics'],
      github: 'https://github.com/nhamhung/youtube-scripts',
      demo: 'https://www.youtube.com/watch?v=cmZ9-sDzYYY',
    },
    {
      title: 'Personal Technical Blog',
      description: 'Knowledge base covering software, AI, cloud systems, and personal learning write-ups.',
      technologies: ['Computer Science', 'AI', 'Cloud Computing'],
      github: 'https://nhamhung.wordpress.com/',
      demo: 'https://nhamhung.wordpress.com/2025/03/10/nhat-ky-hang-ngay/',
    },
  ]

  return (
    <Box
      id="projects"
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
            BUILD_LOGS
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} color="var(--text-100)">
            Selected Projects
          </Heading>
          <Text maxW="760px" color="var(--text-300)" lineHeight="1.8">
            A mix of learning systems and engineering outputs focused on practical implementation, sharing, and measurable
            outcomes.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
          {projects.map((project) => (
            <Box
              key={project.title}
              p={6}
              borderRadius="lg"
              bg="var(--surface-900)"
              border="1px solid"
              borderColor="var(--line-700)"
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              _hover={{
                borderColor: 'rgba(98, 240, 213, 0.45)',
                transform: 'translateY(-4px)',
                boxShadow: '0 18px 38px rgba(3, 10, 21, 0.55)',
              }}
              transition="all 0.25s ease"
              className="reveal-up delay-2"
            >
              <VStack align="stretch" gap={4}>
                <Text className="code-font" fontSize="xs" color="var(--text-300)">
                  MODULE
                </Text>
                <Heading as="h3" fontSize="xl" color="var(--text-100)">
                  {project.title}
                </Heading>
                <Text color="var(--text-300)" lineHeight="1.8">
                  {project.description}
                </Text>

                <Flex gap={2} wrap="wrap">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      px={2.5}
                      py={1}
                      borderRadius="md"
                      className="code-font"
                      bg="rgba(34, 128, 235, 0.18)"
                      border="1px solid"
                      borderColor="rgba(69, 162, 255, 0.36)"
                      color="var(--text-100)"
                      fontSize="0.68rem"
                      fontWeight={500}
                    >
                      {tech}
                    </Badge>
                  ))}
                </Flex>
              </VStack>

              <HStack gap={3} mt={6}>
                <Button
                  size="sm"
                  variant="outline"
                  borderColor="rgba(118, 168, 255, 0.42)"
                  color="var(--text-100)"
                  bg="rgba(34, 128, 235, 0.1)"
                  _hover={{ bg: 'rgba(34, 128, 235, 0.2)' }}
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <HStack gap={1.5}>
                    <Text>Repository</Text>
                    <FiExternalLink />
                  </HStack>
                </Button>

                <Button
                  size="sm"
                  bg="var(--accent-500)"
                  color="white"
                  border="1px solid"
                  borderColor="rgba(118, 168, 255, 0.58)"
                  _hover={{ bg: 'var(--accent-400)' }}
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <HStack gap={1.5}>
                    <Text>View</Text>
                    <FiExternalLink />
                  </HStack>
                </Button>
              </HStack>
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
        onClick={() => scrollToSection('gallery')}
        className="pulse-line"
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={28} />
      </Box>
    </Box>
  )
}

export default Projects
