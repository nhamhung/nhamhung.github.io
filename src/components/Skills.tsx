import { useEffect, useState } from 'react'
import { Badge, Box, Button, Container, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'

const certificateModules = import.meta.glob('../assets/certificates/*.pdf', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const certificateMetadata = {
  'aiximpact-certificate': {
    title: 'AIxImpact Certificate',
    issuer: 'AIxImpact',
    kind: 'Competition',
  },
  'aiximpact-final-presentation': {
    title: 'AIxImpact Final Presentation',
    issuer: 'AIxImpact',
    kind: 'Presentation',
  },
  'aws-cloud-practitioner': {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    kind: 'Certification',
  },
  'coursera-mmpg2mrcsjrt': {
    title: 'Coursera Certificate',
    issuer: 'Coursera',
    kind: 'Coursework',
  },
  'certified-kubernetes-application-developer': {
    title: 'Certified Kubernetes Application Developer',
    issuer: 'The Linux Foundation',
    kind: 'Certification',
  },
  'database-system-focus-area': {
    title: 'Database System Focus Area',
    issuer: 'Academic',
    kind: 'Coursework',
  },
  'nus-top-student-for-big-data-systems': {
    title: 'NUS Top Student for Big Data Systems',
    issuer: 'National University of Singapore',
    kind: 'Award',
  },
  university: {
    title: 'University',
    issuer: 'Academic',
    kind: 'Academic',
  },
} as const

const formatFallbackTitle = (filename: string) =>
  filename
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (character) => character.toUpperCase())

const certificates = Object.entries(certificateModules)
  .map(([path, file]) => {
    const filename = path.split('/').pop()?.replace(/\.pdf$/i, '') ?? path
    const metadata = certificateMetadata[filename as keyof typeof certificateMetadata]

    return {
      title: metadata?.title ?? formatFallbackTitle(filename),
      issuer: metadata?.issuer ?? 'Certificate',
      kind: metadata?.kind ?? 'Certificate',
      file,
    }
  })
  .sort((left, right) => left.title.localeCompare(right.title))

function Skills() {
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[number] | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    if (!selectedCertificate) {
      return undefined
    }

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedCertificate(null)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [selectedCertificate])

  const skillCategories = [
    {
      category: 'Academic',
      skills: ['IELTS 8.0', 'ACT 35/36 (STEM)', 'SAT 800/800 (Chemistry)'],
    },
    {
      category: 'Professional',
      skills: [
        'Couchbase Certified Associate Architect',
        'Certified Kubernetes Application Developer',
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

  const openCertificateInNewTab = (file: string) => {
    window.open(file, '_blank', 'noopener,noreferrer')
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

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={6} mb={8}>
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

        <VStack align="stretch" gap={4} className="reveal-up delay-2">
          <HStack justify="space-between" align="end" flexWrap="wrap" gap={3}>
            <Box>
              <Text className="code-font" color="var(--accent-300)" fontSize="sm" mb={2}>
                CERTIFICATE_PREVIEW
              </Text>
              <Heading as="h3" fontSize={{ base: 'xl', md: '2xl' }} color="var(--text-100)">
                Certificate Gallery
              </Heading>
            </Box>
            <Text color="var(--text-300)" maxW="560px" fontSize="sm">
              Click any preview to expand the PDF. Files are bundled locally from the Coursework and Certificates repository.
            </Text>
          </HStack>

          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={6}>
            {certificates.map((certificate, index) => (
              <Box
                key={certificate.title}
                role="button"
                tabIndex={0}
                aria-label={`Open ${certificate.title}`}
                onClick={() => setSelectedCertificate(certificate)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    setSelectedCertificate(certificate)
                  }
                }}
                p={4}
                borderRadius="xl"
                bg="rgba(8, 21, 39, 0.92)"
                border="1px solid"
                borderColor="rgba(98, 240, 213, 0.22)"
                transition="all 0.25s ease"
                className={getDelayClass(index)}
                _hover={{
                  transform: 'translateY(-4px)',
                  borderColor: 'rgba(98, 240, 213, 0.48)',
                  boxShadow: '0 18px 36px rgba(3, 10, 21, 0.52)',
                }}
              >
                <Box
                  overflow="hidden"
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="rgba(118, 168, 255, 0.22)"
                  bg="rgba(2, 8, 15, 0.78)"
                  mb={4}
                >
                  <object
                    aria-label={`${certificate.title} preview`}
                    data={`${certificate.file}#page=1&view=FitH`}
                    type="application/pdf"
                    style={{
                      width: '100%',
                      height: '320px',
                      border: '0',
                      pointerEvents: 'none',
                      display: 'block',
                    }}
                  >
                    <Box
                      h="320px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexDirection="column"
                      gap={2}
                      px={6}
                      textAlign="center"
                    >
                      <Text color="var(--text-100)" fontWeight={600}>
                        Preview unavailable in this browser
                      </Text>
                      <Text color="var(--text-300)" fontSize="sm">
                        Click this card to open the certificate.
                      </Text>
                    </Box>
                  </object>
                </Box>
                <VStack align="stretch" gap={2}>
                  <HStack justify="space-between" align="start" gap={3}>
                    <Box>
                      <Heading as="h5" fontSize="lg" color="var(--text-100)">
                        {certificate.title}
                      </Heading>
                      <Text color="var(--text-300)" fontSize="sm">
                        {certificate.issuer}
                      </Text>
                    </Box>
                    <Badge
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
                      {certificate.kind}
                    </Badge>
                  </HStack>
                  <Text color="var(--accent-300)" fontSize="sm" className="code-font">
                    Click to expand PDF
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {selectedCertificate && (
        <Box
          position="fixed"
          inset={0}
          zIndex={2000}
          bg="rgba(2, 8, 15, 0.86)"
          backdropFilter="blur(8px)"
          px={{ base: 4, md: 8 }}
          pt={{ base: 20, md: 24 }}
          pb={{ base: 4, md: 6 }}
          display="flex"
          alignItems="flex-start"
          justifyContent="center"
          overflowY="auto"
          onClick={() => setSelectedCertificate(null)}
        >
          <Box
            w="min(1100px, 100%)"
            minH={{ base: 'calc(100dvh - 7rem)', md: 'calc(100dvh - 9rem)' }}
            h={{ base: 'calc(100dvh - 7rem)', md: 'calc(100dvh - 9rem)' }}
            bg="var(--surface-900)"
            border="1px solid"
            borderColor="rgba(98, 240, 213, 0.36)"
            borderRadius="2xl"
            overflow="hidden"
            boxShadow="0 32px 80px rgba(0, 0, 0, 0.45)"
            display="flex"
            flexDirection="column"
            onClick={(event) => event.stopPropagation()}
          >
            <HStack
              justify="space-between"
              align={{ base: 'start', md: 'center' }}
              flexWrap="wrap"
              px={{ base: 4, md: 6 }}
              py={4}
              borderBottom="1px solid"
              borderColor="rgba(118, 168, 255, 0.22)"
              bg="rgba(8, 21, 39, 0.94)"
            >
              <Box>
                <Heading as="h3" fontSize={{ base: 'md', md: 'lg' }} color="var(--text-100)">
                  {selectedCertificate.title}
                </Heading>
                <Text color="var(--text-300)" fontSize="sm">
                  {selectedCertificate.issuer} · {selectedCertificate.kind}
                </Text>
              </Box>
              <HStack gap={3} flexWrap="wrap" justify={{ base: 'flex-start', md: 'flex-end' }}>
                <Button
                  size="sm"
                  bg="rgba(34, 128, 235, 0.16)"
                  border="1px solid"
                  borderColor="rgba(69, 162, 255, 0.36)"
                  color="var(--text-100)"
                  _hover={{ bg: 'rgba(34, 128, 235, 0.24)' }}
                  onClick={() => openCertificateInNewTab(selectedCertificate.file)}
                >
                  Open in new tab
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  color="var(--text-300)"
                  _hover={{ bg: 'rgba(255, 255, 255, 0.06)', color: 'var(--text-100)' }}
                  onClick={() => setSelectedCertificate(null)}
                >
                  Close
                </Button>
              </HStack>
            </HStack>
            <Box flex="1" minH={0} bg="#111827">
              <iframe
                title={`${selectedCertificate.title} expanded preview`}
                src={`${selectedCertificate.file}#page=1&view=FitH`}
                style={{ width: '100%', height: '100%', border: '0', display: 'block' }}
              />
            </Box>
          </Box>
        </Box>
      )}

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
