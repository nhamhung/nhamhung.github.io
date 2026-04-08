import { Box, Container, Heading, Image, Text, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import nusLogo from '../assets/nus.svg'
import saLogo from '../assets/sa.png'
import utLogo from '../assets/ut.png'

function Education() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const education = [
    {
      degree: "Master's of Science in Computer Science",
      institution: 'The University of Texas at Austin',
      period: '2024 - 2026',
      specialization: 'Computer Science',
      logo: utLogo,
      description: ['Deep Learning, Deep Generative Models, Machine Learning, Advanced Linear Algebra'],
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'National University of Singapore',
      period: '2018 - 2022',
      specialization: 'Database Systems and Artificial Intelligence',
      logo: nusLogo,
      description: [
        'Graduated with honours',
        'ASEAN Undergraduate Scholarship (full-ride)',
        'Relevant coursework: database tuning, big data systems, algorithms, and machine learning',
      ],
    },
    {
      degree: 'Secondary and Junior College Diploma',
      institution: "Saint Andrew's Junior College",
      period: '2014 - 2018',
      specialization: 'GCE O-levels and A-levels',
      logo: saLogo,
      description: [
        'ASEAN Secondary Scholarship (full-ride)',
        "Jacob Ballas Award for outstanding GCE A-level performance",
      ],
    },
  ]

  return (
    <Box
      id="education"
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
            EDU_TIMELINE
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} color="var(--text-100)">
            Education
          </Heading>
        </VStack>

        <VStack align="stretch" gap={6}>
          {education.map((edu, index) => (
            <Box
              key={edu.institution}
              p={{ base: 5, md: 7 }}
              borderRadius="lg"
              bg="var(--surface-900)"
              border="1px solid"
              borderColor="var(--line-700)"
              className={`reveal-up delay-${Math.min(index + 1, 3)}`}
              _hover={{
                borderColor: 'rgba(98, 240, 213, 0.42)',
                transform: 'translateY(-3px)',
                boxShadow: '0 16px 34px rgba(3, 10, 21, 0.55)',
              }}
              transition="all 0.25s ease"
            >
              <Box display="flex" gap={4} flexWrap="wrap" alignItems="center" mb={4}>
                <Box
                  w="54px"
                  h="54px"
                  borderRadius="md"
                  bg="rgba(34, 128, 235, 0.15)"
                  border="1px solid"
                  borderColor="rgba(69, 162, 255, 0.36)"
                  p={2}
                >
                  <Image src={edu.logo} alt={`${edu.institution} logo`} w="100%" h="100%" objectFit="contain" />
                </Box>
                <Box>
                  <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color="var(--text-100)">
                    {edu.degree}
                  </Heading>
                  <Text className="code-font" color="var(--accent-300)" fontSize="sm" mt={1}>
                    {edu.institution}
                  </Text>
                </Box>
              </Box>

              <Box mb={4}>
                <Text color="var(--text-300)">
                  <Text as="span" className="code-font" color="var(--text-100)">
                    PERIOD:
                  </Text>{' '}
                  {edu.period}
                </Text>
                <Text color="var(--text-300)">
                  <Text as="span" className="code-font" color="var(--text-100)">
                    FOCUS:
                  </Text>{' '}
                  {edu.specialization}
                </Text>
              </Box>

              <VStack align="stretch" gap={2}>
                {edu.description.map((item) => (
                  <Text key={item} color="var(--text-300)" lineHeight="1.75" pl={4} position="relative">
                    <Box as="span" position="absolute" left={0} top={0} color="var(--accent-400)">
                      -
                    </Box>
                    {item}
                  </Text>
                ))}
              </VStack>
            </Box>
          ))}
        </VStack>
      </Container>

      <Box
        position="absolute"
        bottom={6}
        left="50%"
        transform="translateX(-50%)"
        color="var(--text-300)"
        _hover={{ color: 'var(--text-100)' }}
        cursor="pointer"
        onClick={() => scrollToSection('experience')}
        className="pulse-line"
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={28} />
      </Box>
    </Box>
  )
}

export default Education
