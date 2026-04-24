import { Badge, Box, Container, Heading, Text, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Experience() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const experiences = [
    {
      title: 'Mentor',
      company: 'Self-employed',
      period: '2025 - Present',
      description: [
        'Mentored students in-person and online across Math, Science, English, Economics, and Computer Science.',
        'Prepared students for certifications such as SAT, ACT, IELTS, GCSE, O-levels and A-levels.',
        'Supported scholarship and entrance exam applications including ASEAN, A-Star, TestAS, AEIS and UEE into top public universities in Singapore.',
      ],
    },
    {
      title: 'Data Engineer',
      company: 'Torilab Inc.',
      period: '2025 - Present',
      description: [
        'Built and maintained 30+ data models across multiple products to support executive decision-making.',
        'Designed pipelines powering analytics workflows and Looker dashboards for business teams.',
        'Partnered with cross-functional teams to improve data quality and self-service reporting.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Rakuten Asia Pte Ltd',
      period: '2023 - 2025',
      description: [
        'Maintained ad-serving systems handling mission-critical ad item delivery and tracking.',
        'Managed Couchbase and Hive data platforms operating at hundreds of millions of records.',
        'Built scalable backend APIs with Spring, Kafka, Kubernetes, Redis, and caching strategies.',
      ],
    },
    {
      title: 'Data Engineer',
      company: 'Sea Limited',
      period: '2021 - 2023',
      description: [
        'Developed batch and streaming ingestion pipelines for finance reporting use cases.',
        'Built a self-service ingestion portal for non-technical users across databases, sheets, and Kafka.',
        'Operated large-scale pipelines and on-call workflows using Bash and PySpark.',
      ],
    },
  ]

  return (
    <Box
      id="experience"
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
            CAREER_LOG
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} color="var(--text-100)">
            Professional Experience
          </Heading>
          <Text maxW="760px" color="var(--text-300)" lineHeight="1.8">
            High-impact roles across data engineering, backend systems, and education with production ownership and
            business-facing delivery.
          </Text>
        </VStack>

        <VStack align="stretch" gap={8} position="relative" pl={{ base: 0, md: 8 }}>
          <Box
            position="absolute"
            left={{ base: '10px', md: '22px' }}
            top="6px"
            bottom="8px"
            w="2px"
            bg="rgba(118, 168, 255, 0.4)"
            className="pulse-line"
          />

          {experiences.map((exp, index) => (
            <Box key={index} position="relative" pl={{ base: 8, md: 10 }} className="reveal-up delay-1">
              <Box
                position="absolute"
                left={{ base: '2px', md: '14px' }}
                top="12px"
                w="18px"
                h="18px"
                borderRadius="full"
                bg="var(--accent-500)"
                border="3px solid"
                borderColor="var(--bg-900)"
                boxShadow="0 0 0 3px rgba(69, 162, 255, 0.35)"
              />

              <Box
                p={{ base: 5, md: 6 }}
                borderRadius="lg"
                bg="var(--surface-900)"
                border="1px solid"
                borderColor="var(--line-700)"
                _hover={{
                  borderColor: 'rgba(98, 240, 213, 0.42)',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 16px 38px rgba(3, 10, 21, 0.55)',
                }}
                transition="all 0.25s ease"
              >
                <VStack align="stretch" gap={3}>
                  <Box display="flex" justifyContent="space-between" gap={4} flexWrap="wrap" alignItems="center">
                    <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color="var(--text-100)">
                      {exp.title}
                    </Heading>
                    <Badge
                      px={3}
                      py={1.5}
                      borderRadius="full"
                      className="code-font"
                      bg="rgba(34, 128, 235, 0.18)"
                      border="1px solid"
                      borderColor="rgba(69, 162, 255, 0.42)"
                      color="var(--text-100)"
                      fontWeight={500}
                    >
                      {exp.period}
                    </Badge>
                  </Box>

                  <Text className="code-font" color="var(--accent-300)" fontSize="sm">
                    {exp.company}
                  </Text>

                  <VStack align="stretch" gap={2}>
                    {exp.description.map((item) => (
                      <Text key={item} color="var(--text-300)" lineHeight="1.75" pl={4} position="relative">
                        <Box as="span" position="absolute" left={0} top={0} color="var(--accent-400)">
                          ▸
                        </Box>
                        {item}
                      </Text>
                    ))}
                  </VStack>
                </VStack>
              </Box>
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
        onClick={() => scrollToSection('awards')}
        className="pulse-line"
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={28} />
      </Box>
    </Box>
  )
}

export default Experience
