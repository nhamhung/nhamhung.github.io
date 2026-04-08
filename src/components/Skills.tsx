import { Badge, Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

function Skills() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const skillCategories = [
    {
      category: 'Academic',
      skills: ['IELTS 8.0', 'ACT 35/36 (STEM)', 'SAT 800/800 (Chemistry)'],
    },
    {
      category: 'Professional',
      skills: [
        'Couchbase Associate Developer',
        'Certified Kubernetes App Developer',
        'GCP Cloud Engineering',
        'AWS Cloud Practitioner',
      ],
    },
    {
      category: 'Data Engineering',
      skills: ['GCP', 'Hadoop', 'Hive', 'Spark', 'Kafka', 'MySQL', 'MongoDB', 'Couchbase', 'Redis', 'dbt', 'Iceberg'],
    },
    {
      category: 'Data and ML',
      skills: ['SQL', 'Python', 'Java', 'Scala', 'Bash', 'Airflow', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
    },
    {
      category: 'DevOps and MLOps',
      skills: ['Linux', 'Jenkins', 'Ansible', 'Docker', 'Kubernetes', 'ELK', 'Prometheus', 'Grafana', 'MLflow'],
    },
  ]

  const getDelayClass = (index: number) => {
    if (index === 0) return 'reveal-up delay-1'
    if (index === 1) return 'reveal-up delay-2'
    return 'reveal-up delay-3'
  }

  return (
    <Box
      id="skills"
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
            SKILL_MATRIX
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} color="var(--text-100)">
            Technical Skills and Certifications
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6}>
          {skillCategories.map((category, index) => (
            <Box
              key={category.category}
              p={6}
              borderRadius="lg"
              bg="var(--surface-900)"
              border="1px solid"
              borderColor="var(--line-700)"
              className={getDelayClass(index)}
              _hover={{
                transform: 'translateY(-3px)',
                borderColor: 'rgba(98, 240, 213, 0.45)',
                boxShadow: '0 16px 34px rgba(3, 10, 21, 0.55)',
              }}
              transition="all 0.25s ease"
            >
              <Text className="code-font" color="var(--accent-300)" fontSize="sm" mb={4}>
                {category.category.toUpperCase()}
              </Text>
              <Box display="flex" gap={2} flexWrap="wrap">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    px={2.5}
                    py={1}
                    borderRadius="md"
                    className="code-font"
                    fontSize="0.68rem"
                    fontWeight={500}
                    bg="rgba(34, 128, 235, 0.18)"
                    border="1px solid"
                    borderColor="rgba(69, 162, 255, 0.36)"
                    color="var(--text-100)"
                    textTransform="none"
                  >
                    {skill}
                  </Badge>
                ))}
              </Box>
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
        onClick={() => scrollToSection('contact')}
        className="pulse-line"
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={28} />
      </Box>
    </Box>
  )
}

export default Skills
