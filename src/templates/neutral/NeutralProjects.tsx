import {
  Badge,
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

import ExternalAction from "../../components/shared/ExternalAction";
import LogoMark from "../../components/shared/LogoMark";
import { gallery, projects, sectionContent } from "../../data/portfolio";

function ProjectActions({
  projectId,
  actions,
}: {
  projectId: string;
  actions: (typeof projects)[number]["actions"];
}) {
  return (
    <HStack gap={4} wrap="wrap">
      {actions.map((action, actionIndex) => (
        <ExternalAction
          key={action.href}
          href={action.href}
          label={action.label}
          ariaLabel={action.ariaLabel}
          variant="link"
          testId={`neutral-project-${projectId}-action-${actionIndex}`}
        />
      ))}
    </HStack>
  );
}

function NeutralProjects() {
  const [featuredProject, ...remainingProjects] = projects;
  const featuredImage = gallery[0];

  return (
    <Box
      id="projects"
      className="neutral-projects neutral-work-desk"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
      data-testid="projects-section"
    >
      <Box w="100%" maxW="1440px" mx="auto">
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "0.42fr 1fr" }}
          gap={{ base: 4, md: 10 }}
          pb={9}
          borderBottom="1px solid"
          borderColor="var(--line-700)"
        >
          <Text color="var(--accent-300)" fontSize="xs" textTransform="uppercase">
            Portfolio / Selected work
          </Text>
          <Box>
            <Heading
              as="h2"
              tabIndex={-1}
              data-chapter-heading
              className="neutral-display"
              fontSize={{ base: "4xl", md: "6xl" }}
              lineHeight="1"
              color="var(--text-100)"
            >
              {sectionContent.projects.title}
            </Heading>
            <Text mt={5} maxW="720px" color="var(--text-300)" lineHeight="1.85">
              {sectionContent.projects.description}
            </Text>
          </Box>
        </Box>

        {featuredProject && (
          <Box
            className="neutral-project-feature"
            display="grid"
            gridTemplateColumns={{ base: "1fr", lg: "minmax(0, 1.25fr) minmax(320px, 0.75fr)" }}
            mt={{ base: 10, md: 14 }}
            borderBottom="1px solid"
            borderColor="var(--line-700)"
          >
            <Box position="relative" minW={0} overflow="hidden">
              <Image
                src={featuredImage.src}
                alt={featuredImage.alt}
                w="100%"
                h="100%"
                minH={{ base: "320px", md: "520px" }}
                objectFit="cover"
              />
              <Text
                position="absolute"
                left={4}
                bottom={4}
                px={3}
                py={2}
                bg="var(--caption-bg)"
                color="var(--caption-text)"
                fontSize="xs"
              >
                Lead feature / {featuredImage.title}
              </Text>
            </Box>
            <VStack
              align="stretch"
              justify="space-between"
              gap={8}
              p={{ base: 6, md: 10 }}
              bg="var(--surface-900)"
            >
              <VStack align="stretch" gap={6}>
                <Flex justify="space-between" align="center" gap={5}>
                  <LogoMark
                    logoKey={featuredProject.logoKey}
                    logoLabel={featuredProject.logoLabel}
                    logoAccent={featuredProject.logoAccent}
                    size="lg"
                  />
                  <Text color="var(--accent-300)" fontSize="xs">
                    Story 01
                  </Text>
                </Flex>
                <Heading
                  as="h3"
                  className="neutral-display"
                  fontSize={{ base: "3xl", md: "5xl" }}
                  lineHeight="1.05"
                  color="var(--text-100)"
                >
                  {featuredProject.title}
                </Heading>
                <Text color="var(--text-300)" lineHeight="1.9">
                  {featuredProject.description}
                </Text>
                <Flex gap={2} wrap="wrap">
                  {featuredProject.technologies.map((technology) => (
                    <Badge
                      key={technology}
                      px={2.5}
                      py={1}
                      borderRadius="sm"
                      bg="var(--control-bg-soft)"
                      border="1px solid"
                      borderColor="var(--line-700)"
                      color="var(--text-300)"
                    >
                      {technology}
                    </Badge>
                  ))}
                </Flex>
              </VStack>
              <ProjectActions
                projectId={featuredProject.id}
                actions={featuredProject.actions}
              />
            </VStack>
          </Box>
        )}

        <SimpleGrid
          className="neutral-project-dispatches"
          columns={{ base: 1, lg: 2 }}
          mt={{ base: 10, md: 14 }}
          borderTop="1px solid"
          borderLeft={{ base: "0", lg: "1px solid" }}
          borderColor="var(--line-700)"
        >
          {remainingProjects.map((project, index) => {
            const image = gallery[(index + 1) % gallery.length];

            return (
              <Box
                key={project.id}
                className="neutral-project-dispatch"
                display="grid"
                gridTemplateRows="auto 1fr"
                minW={0}
                borderRight={{ base: "0", lg: "1px solid" }}
                borderBottom="1px solid"
                borderColor="var(--line-700)"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  w="100%"
                  aspectRatio="16 / 9"
                  objectFit="cover"
                />
                <VStack align="stretch" justify="space-between" gap={7} p={{ base: 6, md: 8 }}>
                  <VStack align="stretch" gap={5}>
                    <Flex justify="space-between" align="center" gap={5}>
                      <LogoMark
                        logoKey={project.logoKey}
                        logoLabel={project.logoLabel}
                        logoAccent={project.logoAccent}
                        size="sm"
                      />
                      <Text color="var(--accent-300)" fontSize="xs">
                        Story {String(index + 2).padStart(2, "0")}
                      </Text>
                    </Flex>
                    <Heading
                      as="h3"
                      className="neutral-display"
                      fontSize={{ base: "2xl", md: "4xl" }}
                      color="var(--text-100)"
                    >
                      {project.title}
                    </Heading>
                    <Text color="var(--text-300)" lineHeight="1.85">
                      {project.description}
                    </Text>
                    <Flex gap={2} wrap="wrap">
                      {project.technologies.map((technology) => (
                        <Badge
                          key={technology}
                          px={2.5}
                          py={1}
                          borderRadius="sm"
                          bg="var(--control-bg-soft)"
                          border="1px solid"
                          borderColor="var(--line-700)"
                          color="var(--text-300)"
                        >
                          {technology}
                        </Badge>
                      ))}
                    </Flex>
                  </VStack>
                  <ProjectActions projectId={project.id} actions={project.actions} />
                </VStack>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default NeutralProjects;
