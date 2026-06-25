import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'

import ExternalAction from './shared/ExternalAction'
import SectionShell from './shared/SectionShell'
import { videos } from '../data/portfolio'
import { getAnimationDelayClass } from '../utils/animation'
import { getYouTubeEmbedUrl } from '../utils/media'

function Videos() {
  return (
    <SectionShell id="videos" eyebrow="VIDEO_FEED" title="Educational Videos" nextSectionId="skills">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
          {videos.map((video, index) => (
            <Box
              key={video.id}
              bg="var(--surface-900)"
              borderRadius="lg"
              overflow="hidden"
              border="1px solid"
              borderColor="var(--line-700)"
              className={`reveal-up ${getAnimationDelayClass(index)}`}
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
                  src={getYouTubeEmbedUrl(video.videoId)}
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
                <ExternalAction
                  href={video.watchLink.href}
                  label="WATCH_ON_YOUTUBE"
                  ariaLabel={video.watchLink.ariaLabel}
                  variant="link"
                  testId={`video-watch-link-${video.id}`}
                />
              </Box>
            </Box>
          ))}
        </SimpleGrid>
    </SectionShell>
  )
}

export default Videos
