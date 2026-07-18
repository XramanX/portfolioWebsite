"use client";
import React from "react";
import { Box, Flex, Heading, Link, List, ListItem, Text, Badge, Avatar, Button, HStack, Tag, Wrap, WrapItem, Divider, Stack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { theme } from "../styles/chakra/theme";

const GitHubSection: React.FC = () => {
  return (
    <Box
      id="github-section"
      py={10}
      px={{ base: 4, md: 8 }}
      mt={10}
      borderTop="1px solid rgba(255,255,255,0.08)"
    >
      <Box mb={6}>
        <Heading
          as="h2"
          fontSize={{ base: "3xl", md: "4xl" }}
          mb={3}
          color={theme.colors.brand.white}
        >
          GitHub & Open Source
        </Heading>
        <Text color={theme.colors.brand.ghost} maxW="3xl" fontSize="lg">
          I contribute to open source and maintain a hands-on GitHub presence.
          Here’s a snapshot of my work on Receipt Factory plus my public profile.
        </Text>
      </Box>

      <Box
        bg="linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))"
        border="1px solid rgba(255,255,255,0.04)"
        borderRadius="2xl"
        p={{ base: 5, md: 8 }}
        boxShadow="0 20px 60px rgba(2,6,23,0.6)"
      >
        <Stack spacing={6}>
        
          <Box>
            <Flex align="center" justify="space-between" mb={3}>
              <Box>
                <Text color={theme.colors.brand.ghost} fontSize="sm">
                  Featured contribution
                </Text>
                <Heading size="md" color={theme.colors.brand.white}>
                  Receipt Factory
                </Heading>
              </Box>
              <Badge colorScheme="teal" variant="solid">
                Open source
              </Badge>
            </Flex>

            <Text color={theme.colors.brand.ghost} mb={4}>
              Receipt is a Bun + TanStack platform designed to make AI chat
              feel instant. The core product goal is to maximize responsiveness
              while preserving native provider behaviors and enterprise-grade
              controls. Built around TanStack Start and Rocicorp Zero for
              realtime sync, with an extensible AI SDK.
            </Text>

            <Wrap spacing={2} mb={4}>
              <WrapItem>
                <Tag size="sm" bg="rgba(75,182,172,0.08)" color={theme.colors.brand.skillTextColor}>
                  Bun
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag size="sm" bg="rgba(75,182,172,0.08)" color={theme.colors.brand.skillTextColor}>
                  TanStack Start
                </Tag>
              </WrapItem>
              <WrapItem>
                <Tag size="sm" bg="rgba(75,182,172,0.08)" color={theme.colors.brand.skillTextColor}>
                  Rocicorp Zero
                </Tag>
              </WrapItem>
            </Wrap>

            <List spacing={2} color={theme.colors.brand.ghost} mb={4}>
              <ListItem>Sync-first architecture and realtime updates.</ListItem>
              <ListItem>Multi-provider AI SDK and resumable streaming.</ListItem>
              <ListItem>Broad file/attachment pipelines (PDF, Office, etc.).</ListItem>
            </List>

            <HStack>
              <Button
                as={Link}
                href="https://github.com/skishore23/receipt-factory"
                isExternal
                colorScheme="teal"
                size="sm"
                variant="outline"
              >
                View contribution
              </Button>
            </HStack>
          </Box>
        </Stack>
        
      </Box>
      
    </Box>
  );
};

export default GitHubSection;
