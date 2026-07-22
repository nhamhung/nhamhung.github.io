import {
  Box,
  Button,
  Drawer,
  Flex,
  IconButton,
  Link,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { LuMenu, LuPanelLeft, LuX } from "react-icons/lu";

import { ColorModeButton } from "../../components/ui/color-mode";
import { profile } from "../../data/portfolio";
import type { PortfolioShellProps } from "../types";

function NeutralShell({
  activeSection,
  layoutMode,
  navigationItems,
  getNavigationHref,
  onNavigate,
  onToggleLayoutMode,
  children,
}: PortfolioShellProps) {
  const { open, onOpen, onClose } = useDisclosure();
  const nextLayoutLabel =
    layoutMode === "single" ? "Multi-page" : "Single page";
  const activeLabel =
    navigationItems.find((item) => item.id === activeSection)?.label ?? "Home";

  const navigate = (sectionId: typeof activeSection) => {
    onNavigate(sectionId);
    onClose();
  };

  const navigationLinks = (prefix: "nav" | "mobile") =>
    navigationItems.map((item, index) => {
      const isActive = item.id === activeSection;

      return (
        <Box as="li" key={item.id} minW={0}>
          <Link
            href={getNavigationHref(item.id)}
            onClick={(event) => {
              event.preventDefault();
              navigate(item.id);
            }}
            display="grid"
            gridTemplateColumns="24px minmax(0, 1fr)"
            alignItems="center"
            minH={prefix === "nav" ? "44px" : "46px"}
            px={prefix === "nav" ? 2 : 3}
            color={isActive ? "var(--text-100)" : "var(--text-300)"}
            borderBottom={prefix === "nav" ? "2px solid" : undefined}
            borderLeft={prefix === "mobile" ? "3px solid" : undefined}
            borderColor={isActive ? "var(--accent-500)" : "transparent"}
            bg={isActive ? "var(--active-nav-bg)" : "transparent"}
            fontSize="sm"
            aria-current={isActive ? "page" : undefined}
            data-testid={`neutral-${prefix}-link-${item.id}`}
          >
            <Text as="span" fontSize="xs" color="var(--accent-300)">
              {String(index + 1).padStart(2, "0")}
            </Text>
            <Text as="span" overflowWrap="anywhere">
              {item.label}
            </Text>
          </Link>
        </Box>
      );
    });

  return (
    <Box
      minH="100vh"
      w="100%"
      className="portfolio-template portfolio-template-neutral neutral-shell"
      data-template-id="neutral"
    >
      <Box
        as="header"
        className="neutral-magazine-masthead"
        position="sticky"
        top={0}
        zIndex={1000}
        bg="var(--surface-900)"
        borderBottom="1px solid"
        borderColor="var(--line-700)"
      >
        <Flex
          className="neutral-issue-strip"
          maxW="1520px"
          mx="auto"
          minH="32px"
          px={{ base: 4, md: 8 }}
          align="center"
          justify="space-between"
          gap={4}
          borderBottom="1px solid"
          borderColor="var(--line-700)"
          fontSize="xs"
          color="var(--text-300)"
        >
          <Text textTransform="uppercase">Portfolio review / Issue 01</Text>
          <Text textAlign="right">
            {activeLabel} / {profile.location}
          </Text>
        </Flex>

        <Flex
          maxW="1520px"
          mx="auto"
          minH={{ base: "64px", lg: "82px" }}
          px={{ base: 4, md: 8 }}
          align="center"
          justify="space-between"
          gap={{ base: 3, md: 6 }}
        >
          <Link
            href={getNavigationHref("home")}
            onClick={(event) => {
              event.preventDefault();
              navigate("home");
            }}
            minW={0}
            display="flex"
            alignItems="baseline"
            gap={{ base: 2, md: 4 }}
            aria-label="Navigate to Neutral portfolio home"
            data-testid="neutral-brand-link"
          >
            <Text
              className="neutral-wordmark"
              fontSize={{ base: "xl", md: "3xl" }}
              lineHeight="1"
              fontWeight={700}
              color="var(--text-100)"
              truncate
            >
              {profile.name}
            </Text>
            <Text
              display={{ base: "none", md: "block" }}
              color="var(--accent-300)"
              fontSize="xs"
              textTransform="uppercase"
              whiteSpace="nowrap"
            >
              {profile.role}
            </Text>
          </Link>

          <Flex align="center" gap={2} flex="none">
            <ColorModeButton
              color="var(--text-100)"
              border="1px solid"
              borderColor="var(--line-500)"
              bg="var(--control-bg)"
              data-testid="neutral-theme-toggle"
            />
            <Button
              display={{ base: "none", md: "inline-flex" }}
              size="sm"
              variant="outline"
              borderColor="var(--line-500)"
              color="var(--text-100)"
              bg="var(--control-bg-soft)"
              onClick={onToggleLayoutMode}
              aria-label={`Switch to ${nextLayoutLabel} layout`}
              data-testid="neutral-layout-toggle"
            >
              <LuPanelLeft />
              {nextLayoutLabel}
            </Button>
            <IconButton
              display={{ base: "inline-flex", lg: "none" }}
              aria-label="Open navigation"
              onClick={onOpen}
              color="var(--text-100)"
              border="1px solid"
              borderColor="var(--line-500)"
              bg="var(--control-bg)"
              data-testid="neutral-menu-toggle"
            >
              <LuMenu />
            </IconButton>
          </Flex>
        </Flex>

        <Box
          className="neutral-magazine-nav"
          display={{ base: "none", lg: "block" }}
          borderTop="1px solid"
          borderColor="var(--line-700)"
        >
          <Flex
            as="nav"
            aria-label="Neutral magazine contents"
            maxW="1520px"
            mx="auto"
            px={8}
          >
            <Flex
              as="ul"
              listStyleType="none"
              align="stretch"
              justify="space-between"
              gap={1}
              w="100%"
              minW={0}
            >
              {navigationLinks("nav")}
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Drawer.Root
        open={open}
        onOpenChange={(event) => !event.open && onClose()}
        placement="end"
      >
        <Drawer.Backdrop bg="var(--modal-overlay-bg)" />
        <Drawer.Positioner>
          <Drawer.Content
            maxW="340px"
            bg="var(--surface-800)"
            color="var(--text-100)"
          >
            <Drawer.Header
              borderBottom="1px solid"
              borderColor="var(--line-700)"
            >
              <Flex justify="space-between" align="center" w="100%">
                <Box>
                  <Text
                    className="neutral-wordmark"
                    fontSize="lg"
                    fontWeight={700}
                  >
                    Contents
                  </Text>
                  <Text mt={1} color="var(--text-300)" fontSize="xs">
                    Portfolio review / Issue 01
                  </Text>
                </Box>
                <IconButton
                  aria-label="Close navigation"
                  variant="ghost"
                  onClick={onClose}
                  data-testid="neutral-menu-close"
                >
                  <LuX />
                </IconButton>
              </Flex>
            </Drawer.Header>
            <Drawer.Body py={5}>
              <VStack align="stretch" gap={5}>
                <Box as="nav" aria-label="Neutral mobile portfolio navigation">
                  <VStack
                    as="ul"
                    align="stretch"
                    gap={1}
                    listStyleType="none"
                  >
                    {navigationLinks("mobile")}
                  </VStack>
                </Box>
                <Button
                  w="100%"
                  variant="outline"
                  borderColor="var(--line-500)"
                  color="var(--text-100)"
                  onClick={() => {
                    onToggleLayoutMode();
                    onClose();
                  }}
                  data-testid="neutral-mobile-layout-toggle"
                >
                  <LuPanelLeft />
                  {nextLayoutLabel}
                </Button>
              </VStack>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>

      <Box
        as="main"
        className="neutral-magazine-canvas"
        w="100%"
        minH="100vh"
        data-layout-mode={layoutMode}
        data-template-id="neutral"
        data-testid="portfolio-main"
        tabIndex={-1}
      >
        {children}
      </Box>
    </Box>
  );
}

export default NeutralShell;
