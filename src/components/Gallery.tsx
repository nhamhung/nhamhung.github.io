import { useState } from 'react'
import { Box, Container, Dialog, Heading, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { HiArrowDown } from 'react-icons/hi'
import photo1 from '../assets/photo_1.jpg'
import photo2 from '../assets/photo_2.jpg'
import photo3 from '../assets/photo_3.jpg'
import photo4 from '../assets/photo_4.jpg'
import photo5 from '../assets/photo_5.jpg'
import photo6 from '../assets/photo_6.jpg'

type GalleryItem = {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

function Gallery() {
  const { open, onOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getDelayClass = (index: number) => {
    if (index === 0) return 'reveal-up delay-1'
    if (index === 1) return 'reveal-up delay-2'
    return 'reveal-up delay-3'
  }

  const images: GalleryItem[] = [
    {
      id: 1,
      src: photo1,
      alt: 'Gallery Image 1',
      title: 'Zhonghua Secondary School',
      description: "My first school in Singapore, where I completed GCE O-levels with 7 A's.",
    },
    {
      id: 2,
      src: photo2,
      alt: 'Gallery Image 2',
      title: "Saint Andrew's Junior College",
      description: "Completed GCE A-levels with 6 A's.",
    },
    {
      id: 3,
      src: photo3,
      alt: 'Gallery Image 3',
      title: 'National University of Singapore',
      description: "Bachelor's in Computer Science with Honours.",
    },
    {
      id: 4,
      src: photo4,
      alt: 'Gallery Image 4',
      title: 'The University of Texas at Austin',
      description: "Master's studies in Computer Science.",
    },
    {
      id: 5,
      src: photo5,
      alt: 'Gallery Image 5',
      title: 'Sea Limited',
      description: 'First role in Singapore as a Data Engineer.',
    },
    {
      id: 6,
      src: photo6,
      alt: 'Gallery Image 6',
      title: 'Rakuten Asia Pte Ltd',
      description: 'Second role in Singapore as a Software Engineer.',
    },
  ]

  const openModal = (image: GalleryItem) => {
    setSelectedImage(image)
    onOpen()
  }

  return (
    <Box
      id="gallery"
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
            JOURNEY_FRAMES
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} color="var(--text-100)">
            Learning Journey
          </Heading>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
          {images.map((image, index) => (
            <Box
              key={image.id}
              cursor="pointer"
              onClick={() => openModal(image)}
              borderRadius="lg"
              overflow="hidden"
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
              <Image src={image.src} alt={image.alt} w="100%" h="220px" objectFit="cover" />
              <Box p={5}>
                <Heading as="h3" fontSize="lg" mb={2} color="var(--text-100)">
                  {image.title}
                </Heading>
                <Text color="var(--text-300)" lineHeight="1.75" fontSize="sm">
                  {image.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Dialog.Root open={open} onOpenChange={(e) => !e.open && onClose()}>
        <Dialog.Backdrop bg="rgba(0, 0, 0, 0.55)" />
        <Dialog.Positioner>
          <Dialog.Content maxW="860px" bg="var(--surface-800)" border="1px solid" borderColor="var(--line-700)">
            <Dialog.CloseTrigger />
            {selectedImage && (
              <Box p={6}>
                <Image src={selectedImage.src} alt={selectedImage.alt} w="100%" mb={4} borderRadius="md" />
                <Heading as="h3" fontSize="xl" mb={2} color="var(--text-100)">
                  {selectedImage.title}
                </Heading>
                <Text color="var(--text-300)">{selectedImage.description}</Text>
              </Box>
            )}
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Root>

      <Box
        position="absolute"
        bottom={6}
        left="50%"
        transform="translateX(-50%)"
        color="var(--text-300)"
        _hover={{ color: 'var(--text-100)' }}
        cursor="pointer"
        onClick={() => scrollToSection('videos')}
        className="pulse-line"
        display={{ base: 'none', md: 'block' }}
      >
        <HiArrowDown size={28} />
      </Box>
    </Box>
  )
}

export default Gallery
