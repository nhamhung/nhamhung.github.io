import { Box, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

import { about, gallery, sectionContent } from "../../data/portfolio";

function NeutralAbout() {
  const editorialImage = gallery[1] ?? gallery[0];

  return (
    <Box
      id="about"
      className="neutral-about neutral-editorial-spread"
      py={{ base: 16, md: 24 }}
      px={{ base: 4, md: 8 }}
      data-testid="about-section"
    >
      <Box w="100%" maxW="1320px" mx="auto">
        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", lg: "0.42fr 1fr" }}
          gap={{ base: 5, lg: 12 }}
          pb={{ base: 8, md: 12 }}
          borderBottom="1px solid"
          borderColor="var(--line-700)"
        >
          <Text color="var(--accent-300)" fontSize="xs" textTransform="uppercase">
            Feature / Perspective
          </Text>
          <Heading
            as="h2"
            tabIndex={-1}
            data-chapter-heading
            className="neutral-display"
            fontSize={{ base: "4xl", md: "6xl" }}
            lineHeight="1"
            color="var(--text-100)"
          >
            {sectionContent.about.title}
          </Heading>
        </Box>

        <Box
          className="neutral-about-grid"
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            md: "minmax(220px, 0.8fr) minmax(0, 1.2fr)",
            xl: "minmax(250px, 0.74fr) minmax(0, 1.1fr) minmax(220px, 0.56fr)",
          }}
          gap={{ base: 9, md: 10, xl: 12 }}
          pt={{ base: 10, md: 14 }}
          alignItems="start"
        >
          <Box as="figure" m={0}>
            <Image
              src={editorialImage.src}
              alt={editorialImage.alt}
              w="100%"
              aspectRatio="4 / 5"
              objectFit="cover"
            />
            <Text
              as="figcaption"
              mt={3}
              color="var(--text-300)"
              fontSize="xs"
              lineHeight="1.6"
            >
              Fig. 02 / {editorialImage.title}
            </Text>
          </Box>

          <Box className="neutral-about-copy" minW={0}>
            <Text
              className="neutral-pull-quote neutral-display"
              fontSize={{ base: "2xl", md: "3xl" }}
              lineHeight="1.35"
              color="var(--text-100)"
              pb={7}
              mb={7}
              borderBottom="1px solid"
              borderColor="var(--line-700)"
            >
              {sectionContent.about.description}
            </Text>
            {about.paragraphs.map((paragraph) => (
              <Text
                key={paragraph}
                mb={6}
                color="var(--text-300)"
                lineHeight="1.95"
                fontSize={{ base: "md", md: "lg" }}
              >
                {paragraph}
              </Text>
            ))}
          </Box>

          <Box
            className="neutral-about-index"
            gridColumn={{ base: "1", md: "1 / 3", xl: "3" }}
            borderTop="1px solid"
            borderColor="var(--line-700)"
          >
            {about.metrics.map((metric, index) => (
              <Box
                key={metric.label}
                display="grid"
                gridTemplateColumns="32px minmax(0, 1fr)"
                gap={3}
                py={5}
                borderBottom="1px solid"
                borderColor="var(--line-700)"
              >
                <Text color="var(--accent-300)" fontSize="xs">
                  0{index + 1}
                </Text>
                <Box>
                  <Text fontSize="2xl" fontWeight={700} color="var(--text-100)">
                    {metric.value}
                  </Text>
                  <Text mt={1} color="var(--text-300)" fontSize="sm">
                    {metric.label}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          mt={{ base: 12, md: 16 }}
          borderTop="1px solid"
          borderColor="var(--line-700)"
        >
          {["Curiosity", "Craft", "Community"].map((value, index) => (
            <Box key={value} py={5} px={{ base: 0, md: 5 }} className="neutral-value-cell">
              <Text color="var(--accent-300)" fontSize="xs">
                0{index + 1}
              </Text>
              <Text mt={2} color="var(--text-100)" fontWeight={700}>
                {value}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default NeutralAbout;
