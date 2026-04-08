import { Box, Container, Heading, Link, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'
import { HiArrowDown } from 'react-icons/hi'

function Videos() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const videos = [
    {
      id: 1,
      title: 'Tu hoc IT nhu nao hieu qua nhat?',
      description:
        'With many learning resources available, this video focuses on choosing a practical and sustainable way to self-study IT.',
      videoId: '1Whd4I0b1u4',
    },
    {
      id: 2,
      title: 'Xu ly du lieu trong thoi gian thuc voi Apache Kafka',
      description: 'A walkthrough of building real-time data processing flows with Apache Kafka.',
      videoId: 'jfu4ORM8k9Q',
    },
    {
      id: 3,
      title: 'Minh co hoi tiec khi hoc Thac si Khoa hoc may tinh?',
      description: 'A reflection on applying for and studying a Master of Computer Science.',
      videoId: 'lBOcJR7QOMs',
    },
    {
      id: 4,
      title: 'Cach minh toi uu hoa thoi gian cho viec hoc IT?',
      description: 'Practical tactics to optimize study time and improve consistency in technical learning.',
      videoId: 'C7d0LEefUcw',
    },
  ]

  const getEmbedUrl = (videoId: string) => {
    return 'https://www.youtube.com/embed/' + videoId + '?rel=0&modestbranding=1'
  }

  const getDelayClass = (index: number) => {
    if (index === 0) return 'reveal-up delay-1'
    if (index === 1) return 'reveal-up delay-2'
    return 'reveal-up delay-3'
  }

  return (
    <Box
      id="videos"
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
            VIDEO_FEED
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} color="var(--text-100)">
            Educational Videos
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {videos.map((video, index) => (
            <Box
              key={video.id}
              bg="var(--surface-900)"
              borderRadius="lg"
              overflow="hidden"
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
              <Box position="relative" paddingBottom="56.25%" height="0" overflow="hidden" bg="rgba(14, 31, 54, 0.6)">
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                  src={getEmbedUrl(video.videoId)}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </Box>
              <Box p={5}>
                <Heading as="h3" fontSize="lg" mb={2} color="var(--text-100)">
                  {video.title}
                </Heading>
                <Text color="var(--text-300)" mb={4} lineHeight="1.75" fontSize="sm">
                  {video.description}
                </Text>
                <Link
                  href={'https://www.youtube.com/watch?v=' + video.videoId}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="var(--accent-300)"
                  className="code-font"
                  fontSize="sm"
                  display="flex"
                  alignItems="center"
                  gap={2}
                  _hover={{ color: 'var(--text-100)' }}
                >
                  WATCH_ON_YOUTUBE <FiExternalLink />
                </Link>
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
        onClick={() => scrollToSection('skills')}
        className="pulse-line"
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={28} />
      </Box>
    </Box>
  )
}

export default Videos
