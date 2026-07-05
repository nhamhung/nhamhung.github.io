import { Badge, Box, Container, Flex, Heading, HStack, Image, Link, Text, VStack } from '@chakra-ui/react'
import { HiArrowLeft } from 'react-icons/hi'

import ContentCard from './shared/ContentCard'
import { getLocalJournalPostBySlug } from '../data/journalPosts'

type JournalPostPageProps = {
  slug: string
}

type MarkdownBlock =
  | { type: 'heading'; level: 1 | 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }

const parseMarkdownBlocks = (content: string): MarkdownBlock[] => {
  const blocks: MarkdownBlock[] = []
  const lines = content.split(/\r?\n/)
  let paragraph: string[] = []
  let listItems: string[] = []

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      blocks.push({ type: 'paragraph', text: paragraph.join(' ') })
      paragraph = []
    }
  }

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push({ type: 'list', items: listItems })
      listItems = []
    }
  }

  for (const line of lines) {
    const trimmedLine = line.trim()

    if (!trimmedLine) {
      flushParagraph()
      flushList()
      continue
    }

    const headingMatch = /^(#{1,3})\s+(.+)$/.exec(trimmedLine)

    if (headingMatch) {
      flushParagraph()
      flushList()
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length as 1 | 2 | 3,
        text: headingMatch[2],
      })
      continue
    }

    if (trimmedLine.startsWith('- ')) {
      flushParagraph()
      listItems.push(trimmedLine.slice(2))
      continue
    }

    flushList()
    paragraph.push(trimmedLine)
  }

  flushParagraph()
  flushList()

  return blocks
}

function MarkdownContent({ content }: { content: string }) {
  return (
    <VStack align="stretch" gap={5}>
      {parseMarkdownBlocks(content).map((block, index) => {
        if (block.type === 'heading') {
          return (
            <Heading
              key={`${block.type}-${index}`}
              as={`h${block.level + 1}` as 'h2' | 'h3' | 'h4'}
              fontSize={block.level === 1 ? { base: '2xl', md: '3xl' } : { base: 'xl', md: '2xl' }}
              color="var(--text-100)"
              mt={index === 0 ? 0 : 4}
            >
              {block.text}
            </Heading>
          )
        }

        if (block.type === 'list') {
          return (
            <Box as="ul" key={`${block.type}-${index}`} pl={5} color="var(--text-300)">
              {block.items.map((item) => (
                <Box as="li" key={item} mb={2} lineHeight="1.8">
                  {item}
                </Box>
              ))}
            </Box>
          )
        }

        return (
          <Text key={`${block.type}-${index}`} color="var(--text-300)" lineHeight="1.9">
            {block.text}
          </Text>
        )
      })}
    </VStack>
  )
}

function JournalPostPage({ slug }: JournalPostPageProps) {
  const post = getLocalJournalPostBySlug(slug)

  return (
    <Box minH="100vh" pt={{ base: '96px', md: '110px' }} pb={{ base: 12, md: 16 }} className="engineering-grid">
      <Container maxW="980px" px={{ base: 4, md: 8 }}>
        <Link
          href="#/journal"
          display="inline-flex"
          alignItems="center"
          gap={2}
          color="var(--accent-300)"
          fontWeight={700}
          mb={6}
          data-testid="journal-post-back-link"
        >
          <HiArrowLeft />
          Back to Journal
        </Link>

        {!post ? (
          <ContentCard p={{ base: 6, md: 8 }} data-testid="journal-post-not-found">
            <Badge
              px={2.5}
              py={1}
              borderRadius="md"
              className="code-font"
              bg="var(--active-nav-bg)"
              border="1px solid"
              borderColor="var(--active-nav-border)"
              color="var(--text-100)"
              mb={4}
            >
              NOT_FOUND
            </Badge>
            <Heading as="h1" color="var(--text-100)" mb={3}>
              Journal post not found
            </Heading>
            <Text color="var(--text-300)" lineHeight="1.8">
              The local journal post link does not match an available entry. Return to Journal to browse the current posts.
            </Text>
          </ContentCard>
        ) : (
          <ContentCard p={0} overflow="hidden" data-testid="journal-post-page">
            <Image src={post.image} alt={post.imageAlt} w="100%" h={{ base: '220px', md: '340px' }} objectFit="cover" />
            <VStack align="stretch" gap={6} p={{ base: 6, md: 8 }}>
              <HStack justify="space-between" align="start" gap={3} flexWrap="wrap">
                <Text className="code-font" color="var(--text-300)" fontSize="xs">
                  {post.publishedDate}
                </Text>
                <Flex gap={2} wrap="wrap">
                  <Badge
                    px={2.5}
                    py={1}
                    borderRadius="md"
                    className="code-font"
                    bg="var(--active-nav-bg)"
                    border="1px solid"
                    borderColor="var(--active-nav-border)"
                    color="var(--text-100)"
                    fontSize="0.68rem"
                    textTransform="none"
                  >
                    {post.category}
                  </Badge>
                  <Badge
                    px={2.5}
                    py={1}
                    borderRadius="md"
                    className="code-font"
                    bg="var(--accent-control-bg)"
                    border="1px solid"
                    borderColor="rgba(98, 240, 213, 0.34)"
                    color="var(--text-100)"
                    fontSize="0.68rem"
                    textTransform="none"
                  >
                    IN_SITE
                  </Badge>
                </Flex>
              </HStack>

              <Box>
                <Heading as="h1" fontSize={{ base: '3xl', md: '5xl' }} color="var(--text-100)" lineHeight="1.08" mb={4}>
                  {post.title}
                </Heading>
                <Text color="var(--text-300)" lineHeight="1.85">
                  {post.summary}
                </Text>
              </Box>

              <Flex gap={2} wrap="wrap">
                {post.topics.map((topic) => (
                  <Badge
                    key={topic}
                    px={2.5}
                    py={1}
                    borderRadius="md"
                    className="code-font"
                    bg="rgba(34, 128, 235, 0.18)"
                    border="1px solid"
                    borderColor="rgba(69, 162, 255, 0.38)"
                    color="var(--text-100)"
                    fontSize="0.68rem"
                    textTransform="none"
                  >
                    {topic}
                  </Badge>
                ))}
              </Flex>

              <Box borderTop="1px solid" borderColor="var(--line-700)" pt={6}>
                <MarkdownContent content={post.content} />
              </Box>
            </VStack>
          </ContentCard>
        )}
      </Container>
    </Box>
  )
}

export default JournalPostPage
