import { useState } from 'react'
import { Box, Button, Container, Heading, HStack, Input, Link, Text, Textarea, VStack } from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio')
    const body = encodeURIComponent('Name: ' + formData.name + '\nEmail: ' + formData.email + '\n\nMessage:\n' + formData.message)
    window.location.href = 'mailto:nhamhung.gttn@gmail.com?subject=' + subject + '&body=' + body
  }

  return (
    <Box
      id="contact"
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
        <VStack align="stretch" gap={4} mb={10} className="reveal-up">
          <Text className="code-font" color="var(--text-300)" letterSpacing="widest" fontSize="xs">
            CONTACT_INTERFACE
          </Text>
          <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }} color="var(--text-100)">
            Contact Me
          </Heading>
          <Text maxW="760px" color="var(--text-300)" lineHeight="1.8">
            Open to discussing backend engineering, data platform work, teaching, and collaborations.
          </Text>
        </VStack>

        <Box
          bg="var(--surface-900)"
          p={{ base: 5, md: 8 }}
          borderRadius="lg"
          border="1px solid"
          borderColor="var(--line-700)"
          className="reveal-up delay-1"
        >
          <form onSubmit={handleSubmit}>
            <VStack gap={5} align="stretch">
              <HStack gap={4} align="stretch" flexDirection={{ base: 'column', md: 'row' }}>
                <Box flex={1}>
                  <Text className="code-font" color="var(--text-300)" fontSize="xs" mb={2}>
                    NAME *
                  </Text>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    bg="rgba(14, 31, 54, 0.7)"
                    color="var(--text-100)"
                    border="1px solid"
                    borderColor="rgba(118, 168, 255, 0.32)"
                    _focusVisible={{
                      borderColor: 'rgba(98, 240, 213, 0.58)',
                      boxShadow: '0 0 0 1px rgba(98, 240, 213, 0.35)',
                    }}
                  />
                </Box>
                <Box flex={1}>
                  <Text className="code-font" color="var(--text-300)" fontSize="xs" mb={2}>
                    EMAIL *
                  </Text>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    bg="rgba(14, 31, 54, 0.7)"
                    color="var(--text-100)"
                    border="1px solid"
                    borderColor="rgba(118, 168, 255, 0.32)"
                    _focusVisible={{
                      borderColor: 'rgba(98, 240, 213, 0.58)',
                      boxShadow: '0 0 0 1px rgba(98, 240, 213, 0.35)',
                    }}
                  />
                </Box>
              </HStack>

              <Box>
                <Text className="code-font" color="var(--text-300)" fontSize="xs" mb={2}>
                  SUBJECT
                </Text>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project discussion"
                  bg="rgba(14, 31, 54, 0.7)"
                  color="var(--text-100)"
                  border="1px solid"
                  borderColor="rgba(118, 168, 255, 0.32)"
                  _focusVisible={{
                    borderColor: 'rgba(98, 240, 213, 0.58)',
                    boxShadow: '0 0 0 1px rgba(98, 240, 213, 0.35)',
                  }}
                />
              </Box>

              <Box>
                <Text className="code-font" color="var(--text-300)" fontSize="xs" mb={2}>
                  MESSAGE *
                </Text>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me what you are building."
                  required
                  rows={6}
                  resize="vertical"
                  bg="rgba(14, 31, 54, 0.7)"
                  color="var(--text-100)"
                  border="1px solid"
                  borderColor="rgba(118, 168, 255, 0.32)"
                  _focusVisible={{
                    borderColor: 'rgba(98, 240, 213, 0.58)',
                    boxShadow: '0 0 0 1px rgba(98, 240, 213, 0.35)',
                  }}
                />
              </Box>

              <Button
                type="submit"
                bg="var(--accent-500)"
                color="white"
                border="1px solid"
                borderColor="rgba(118, 168, 255, 0.58)"
                _hover={{ bg: 'var(--accent-400)' }}
              >
                Send Message
              </Button>
            </VStack>
          </form>

          <Box mt={8} pt={6} borderTop="1px solid" borderColor="rgba(118, 168, 255, 0.24)">
            <Text className="code-font" color="var(--text-300)" fontSize="xs" mb={3}>
              CONNECT_CHANNELS
            </Text>
            <HStack gap={4} flexWrap="wrap">
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
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Contact
