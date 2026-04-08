import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import profileImage from '../assets/profile.jpeg'

function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const stackHighlights = ['Apache Spark', 'Kafka', 'Airflow', 'Kubernetes', 'Hive', 'Looker']

  return (
    <Box
      id="home"
      minH="100vh"
      w="100%"
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={{ base: '96px', md: '110px' }}
      pb={{ base: 16, md: 20 }}
      px={0}
      className="engineering-grid"
    >
      <Container maxW="1280px" px={{ base: 4, md: 8 }}>
        <Flex direction={{ base: 'column', xl: 'row' }} gap={{ base: 10, xl: 14 }} align="stretch">
          <VStack align={{ base: 'flex-start', lg: 'flex-start' }} gap={6} flex={1.1} className="reveal-up">
            <HStack gap={3} flexWrap="wrap">
              <Badge
                className="code-font"
                px={3}
                py={1}
                borderRadius="full"
                fontWeight={500}
                fontSize="0.72rem"
                border="1px solid"
                borderColor="rgba(69, 162, 255, 0.5)"
                bg="rgba(34, 128, 235, 0.16)"
                color="var(--text-100)"
              >
                SYSTEM STATUS: BUILDING
              </Badge>
              <Badge
                className="code-font"
                px={3}
                py={1}
                borderRadius="full"
                fontWeight={500}
                fontSize="0.72rem"
                border="1px solid"
                borderColor="rgba(98, 240, 213, 0.45)"
                bg="rgba(98, 240, 213, 0.1)"
                color="var(--text-100)"
              >
                DATA | SOFTWARE | MENTORSHIP
              </Badge>
            </HStack>

            <VStack align="flex-start" gap={3}>
              <Text className="code-font" fontSize={{ base: 'sm', md: 'md' }} color="var(--text-300)">
                &lt;engineer id="nham-quoc-hung" /&gt;
              </Text>
              <Heading as="h1" fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }} lineHeight="1.05" color="var(--text-100)">
                Building reliable
                <Box as="span" color="var(--accent-300)"> data systems </Box>
                and scalable backend platforms.
              </Heading>
            </VStack>

            <Text fontSize={{ base: 'md', md: 'lg' }} maxW="720px" color="var(--text-300)" lineHeight="1.85">
              Computer Science graduate specialized in Data. I design and ship production-ready pipelines, low-latency services,
              and analytics systems that teams can trust for decisions and growth.
            </Text>

            <SimpleGrid columns={{ base: 1, sm: 3 }} gap={3} w="full">
              <Box p={4} borderRadius="md" bg="var(--surface-900)" border="1px solid" borderColor="var(--line-700)">
                <Text className="code-font" color="var(--text-300)" fontSize="xs" mb={2}>
                  EXPERIENCE
                </Text>
                <Text fontSize="xl" fontWeight={700} color="var(--text-100)">
                  4+ Years
                </Text>
              </Box>
              <Box p={4} borderRadius="md" bg="var(--surface-900)" border="1px solid" borderColor="var(--line-700)">
                <Text className="code-font" color="var(--text-300)" fontSize="xs" mb={2}>
                  FOCUS
                </Text>
                <Text fontSize="xl" fontWeight={700} color="var(--text-100)">
                  Data + Backend
                </Text>
              </Box>
              <Box p={4} borderRadius="md" bg="var(--surface-900)" border="1px solid" borderColor="var(--line-700)">
                <Text className="code-font" color="var(--text-300)" fontSize="xs" mb={2}>
                  DELIVERY
                </Text>
                <Text fontSize="xl" fontWeight={700} color="var(--text-100)">
                  End-to-End
                </Text>
              </Box>
            </SimpleGrid>

            <HStack gap={3} pt={2} flexWrap="wrap">
              <Button
                onClick={() => scrollToSection('projects')}
                bg="var(--accent-500)"
                color="white"
                border="1px solid"
                borderColor="rgba(118, 168, 255, 0.6)"
                _hover={{ bg: 'var(--accent-400)' }}
              >
                View Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                borderColor="rgba(118, 168, 255, 0.45)"
                color="var(--text-100)"
                bg="rgba(34, 128, 235, 0.1)"
                _hover={{ bg: 'rgba(34, 128, 235, 0.2)' }}
              >
                Contact
              </Button>
            </HStack>

            <HStack gap={4}>
              <Link href="https://github.com/nhamhung" target="_blank" rel="noopener noreferrer" color="var(--text-300)" _hover={{ color: 'var(--text-100)' }}>
                <FaGithub size={22} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/quoc-hung-nham/"
                target="_blank"
                rel="noopener noreferrer"
                color="var(--text-300)"
                _hover={{ color: 'var(--text-100)' }}
              >
                <FaLinkedin size={22} />
              </Link>
              <Link href="mailto:nhamhung.gttn@gmail.com" color="var(--text-300)" _hover={{ color: 'var(--text-100)' }}>
                <FaEnvelope size={22} />
              </Link>
            </HStack>
          </VStack>

          <VStack flex={0.9} align="stretch" gap={4} className="reveal-up delay-1">
            <Box
              bg="var(--surface-800)"
              border="1px solid"
              borderColor="var(--line-500)"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="0 20px 55px rgba(3, 10, 21, 0.65)"
            >
              <Flex
                px={4}
                py={3}
                justify="space-between"
                align="center"
                bg="rgba(8, 22, 40, 0.95)"
                borderBottom="1px solid"
                borderColor="rgba(118, 168, 255, 0.2)"
              >
                <Text className="code-font" fontSize="xs" color="var(--text-300)">
                  ENGINEERING SNAPSHOT
                </Text>
                <HStack gap={1.5}>
                  <Box w="8px" h="8px" borderRadius="full" bg="#ee6a5f" />
                  <Box w="8px" h="8px" borderRadius="full" bg="#f3be4e" />
                  <Box w="8px" h="8px" borderRadius="full" bg="#61c554" />
                </HStack>
              </Flex>

              <Box p={{ base: 4, md: 6 }}>
                <HStack gap={4} align="start" mb={4}>
                  <Box
                    w={{ base: '90px', md: '120px' }}
                    h={{ base: '90px', md: '120px' }}
                    borderRadius="lg"
                    overflow="hidden"
                    border="1px solid"
                    borderColor="rgba(118, 168, 255, 0.4)"
                    className="float-soft"
                  >
                    <Image src={profileImage} alt="Nham Quoc Hung" w="100%" h="100%" objectFit="cover" />
                  </Box>
                  <Box>
                    <Text className="code-font" fontSize="xs" color="var(--text-300)">
                      CURRENT ROLE
                    </Text>
                    <Text color="var(--text-100)" fontWeight={600} mt={1}>
                      Data Engineer at Torilab Inc.
                    </Text>
                    <Text className="code-font" fontSize="xs" color="var(--text-300)" mt={3}>
                      LOCATION
                    </Text>
                    <Text color="var(--text-100)" mt={1}>
                      Ho Chi Minh City, Vietnam
                    </Text>
                  </Box>
                </HStack>

                <Box pt={2} borderTop="1px solid" borderColor="rgba(118, 168, 255, 0.2)">
                  <Text className="code-font" fontSize="xs" color="var(--text-300)" mb={3}>
                    ACTIVE STACK
                  </Text>
                  <Flex gap={2} wrap="wrap">
                    {stackHighlights.map((item) => (
                      <Badge
                        key={item}
                        borderRadius="md"
                        px={2.5}
                        py={1}
                        fontSize="0.68rem"
                        className="code-font"
                        bg="rgba(34, 128, 235, 0.18)"
                        border="1px solid"
                        borderColor="rgba(69, 162, 255, 0.38)"
                        color="var(--text-100)"
                        fontWeight={500}
                      >
                        {item}
                      </Badge>
                    ))}
                  </Flex>
                </Box>
              </Box>
            </Box>
          </VStack>
        </Flex>
      </Container>

      <Box
        position="absolute"
        bottom={6}
        left="50%"
        transform="translateX(-50%)"
        color="var(--text-300)"
        cursor="pointer"
        onClick={() => scrollToSection('about')}
        className="pulse-line"
        _hover={{ color: 'var(--text-100)' }}
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={28} />
      </Box>
    </Box>
  )
}

export default Hero
