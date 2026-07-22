import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import ExternalAction from "../../components/shared/ExternalAction";
import { gallery, hero, profile } from "../../data/portfolio";
import type { ExternalLink } from "../../types/portfolio";
import { scrollToSection } from "../../utils/scroll";

const socialIcon = (link: ExternalLink) => {
  if (link.label.toLowerCase().includes("github"))
    return <FaGithub size={19} />;
  if (link.label.toLowerCase().includes("linkedin"))
    return <FaLinkedin size={19} />;
  return <FaEnvelope size={19} />;
};

function NeutralHero() {
  const supportingImage = gallery[0];

  return (
    <Box
      id="home"
      className="neutral-hero neutral-feature-story"
      px={{ base: 4, md: 8 }}
      py={{ base: 10, md: 14 }}
    >
      <Box w="100%" maxW="1440px" mx="auto">
        <Flex
          justify="space-between"
          align="flex-end"
          gap={5}
          pb={5}
          borderBottom="1px solid"
          borderColor="var(--line-700)"
        >
          <Box>
            <Text
              className="neutral-kicker"
              color="var(--accent-300)"
              fontSize="xs"
              textTransform="uppercase"
            >
              Cover story / Profile
            </Text>
            <Text mt={2} color="var(--text-300)" fontSize="sm">
              Technology, education, and independent practice
            </Text>
          </Box>
          <Text color="var(--text-300)" fontSize="xs" textAlign="right">
            Vol. 01
            <br />
            {profile.location}
          </Text>
        </Flex>

        <Heading
          as="h1"
          tabIndex={-1}
          data-chapter-heading
          className="neutral-display neutral-cover-title"
          fontSize={{ base: "5xl", md: "7xl" }}
          lineHeight="0.96"
          color="var(--text-100)"
          py={{ base: 8, md: 10 }}
          overflowWrap="anywhere"
        >
          {profile.name}
        </Heading>

        <Box
          className="neutral-feature-grid"
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            lg: "minmax(0, 1.3fr) minmax(320px, 0.7fr)",
          }}
          gap={{ base: 8, lg: 12 }}
          alignItems="stretch"
        >
          <Box className="neutral-feature-media" position="relative" minW={0}>
            <Image
              src={profile.profileImage}
              alt={`${profile.name} portrait`}
              w="100%"
              h="100%"
              minH={{ base: "420px", md: "620px" }}
              maxH="760px"
              objectFit="cover"
            />
            <Flex
              position="absolute"
              inset="auto 0 0"
              px={4}
              py={3}
              justify="space-between"
              gap={4}
              bg="var(--caption-bg)"
              color="var(--caption-text)"
              fontSize="xs"
            >
              <Text>Portrait / 001</Text>
              <Text textAlign="right">{profile.role}</Text>
            </Flex>
          </Box>

          <VStack
            className="neutral-feature-copy"
            align="stretch"
            justify="space-between"
            gap={8}
            minW={0}
          >
            <VStack align="stretch" gap={6}>
              <Text
                color="var(--accent-300)"
                fontSize="xs"
                fontWeight={700}
                textTransform="uppercase"
              >
                Editor's introduction
              </Text>
              <Heading
                as="h2"
                className="neutral-display neutral-feature-headline"
                fontSize={{ base: "3xl", md: "5xl" }}
                lineHeight="1.08"
                color="var(--text-100)"
              >
                {hero.headline}
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.9"
                color="var(--text-300)"
              >
                {hero.intro}
              </Text>

              <Flex gap={3} wrap="wrap">
                <Button
                  onClick={() => scrollToSection("projects")}
                  bg="var(--primary-bg)"
                  color="var(--primary-text)"
                  _hover={{
                    bg: "var(--primary-hover-bg)",
                    transform: "translateY(-2px)",
                  }}
                  data-testid="neutral-hero-primary-action"
                >
                  Read selected work
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  borderColor="var(--line-500)"
                  color="var(--text-100)"
                  _hover={{ bg: "var(--control-bg-soft)" }}
                  data-testid="neutral-hero-secondary-action"
                >
                  Start a conversation
                </Button>
                <ExternalAction
                  href={profile.resume.href}
                  label={profile.resume.label}
                  ariaLabel={profile.resume.ariaLabel}
                  icon={<FiDownload />}
                  download={profile.resume.fileName}
                  testId="neutral-hero-resume-download"
                />
              </Flex>

              <HStack gap={5}>
                {profile.socialLinks.map((link) => (
                  <ExternalAction
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    ariaLabel={link.ariaLabel}
                    icon={socialIcon(link)}
                    variant="icon"
                    testId={`neutral-social-${link.label.toLowerCase()}`}
                  />
                ))}
              </HStack>
            </VStack>

            <Box
              className="neutral-feature-note"
              display="grid"
              gridTemplateColumns="112px minmax(0, 1fr)"
              gap={4}
              pt={5}
              borderTop="1px solid"
              borderColor="var(--line-700)"
            >
              <Image
                src={supportingImage.src}
                alt={supportingImage.alt}
                w="112px"
                aspectRatio="1 / 1"
                objectFit="cover"
              />
              <Box minW={0}>
                <Text color="var(--accent-300)" fontSize="xs">
                  Inside this issue
                </Text>
                <Text mt={2} color="var(--text-100)" fontWeight={700}>
                  {supportingImage.title}
                </Text>
                <Text mt={1} color="var(--text-300)" fontSize="sm">
                  Projects, learning notes, and the evidence behind the work.
                </Text>
              </Box>
            </Box>
          </VStack>
        </Box>

        <SimpleGrid
          className="neutral-facts"
          columns={{ base: 1, sm: 3 }}
          mt={{ base: 10, md: 12 }}
          borderTop="1px solid"
          borderBottom="1px solid"
          borderColor="var(--line-700)"
        >
          {hero.stats.map((stat, index) => (
            <Box key={stat.label} py={5} px={{ base: 0, sm: 5 }}>
              <Flex justify="space-between" gap={4}>
                <Text
                  fontSize="xs"
                  color="var(--text-300)"
                  textTransform="uppercase"
                >
                  {stat.label}
                </Text>
                <Text color="var(--accent-300)" fontSize="xs">
                  0{index + 1}
                </Text>
              </Flex>
              <Text mt={1} fontSize="lg" fontWeight={700} color="var(--text-100)">
                {stat.value}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default NeutralHero;
