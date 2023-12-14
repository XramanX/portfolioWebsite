"use client";
import {
  Box,
  Flex,
  Text,
  Container,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
import { Navbar } from "../../components/navbar";
import AboutMePage from "../about/page";
import Experience from "../experience/page";
import Projects from "../projects/page";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import SocialMediaLinks from "../../components/socialMedia";
import Footer from "../footer/page";
import { theme } from "../../styles/chakra/theme";

const LandingPage: React.FC = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 1100px)");
  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)");
  const containerFlex = isLargeScreen ? { base: 1, md: 2 } : 1;
  const paddingValue = isLargeScreen ? 10 : 0;
  // const controls = useAnimation();
  // const bounceAnimation: any = {
  //   y: [0, -10, 0],
  //   transition: {
  //     duration: 1,
  //     repeat: Infinity,
  //     repeatType: "reverse",
  //   },
  // };
  // useEffect(() => {
  //   controls.start(bounceAnimation);
  // }, [controls]);

  return (
    <Box
      maxW="container.xl"
      display="flex"
      flexWrap="wrap"
      textAlign="start"
      padding={paddingValue}
    >
      <Flex
        padding="4"
        flexDirection="column"
        gap={20}
        flex={containerFlex}
        position={isSmallerThanMd ? "relative" : "fixed"}
        height="90%"
        justifyContent="space-between"
      >
        <Flex flexDirection="column" gap={2}>
          <Flex
            flexDirection="column"
            gap={2}
            w={isSmallerThanMd ? "auto" : "400px"}
          >
            <Text fontSize="2xl" fontWeight="bold">
              Ramandeep Singh
            </Text>
            <Text fontSize="lg">Full-Stack Developer</Text>
            <Text fontSize="md" style={{ color: theme.colors.brand.ghost }}>
              Goal-oriented Software Developer with a passion for crafting
              innovative solutions and a commitment to continuous learning.
            </Text>
          </Flex>
          {isSmallerThanMd ? (
            <></>
          ) : (
            <Flex mt={5}>
              <Navbar />
            </Flex>
          )}
        </Flex>

        <Flex>
          <SocialMediaLinks />
        </Flex>
      </Flex>

      <Box
        marginLeft={{ base: 0, md: "500px" }}
        padding={{ base: 1, md: 4 }}
        flex={{ base: 1, md: 3 }}
        flexDirection="column"
        gap={20}
        position="relative"
        zIndex={1}
      >
        <AboutMePage />
        <Experience />
        <Projects />
        <Footer />
      </Box>
      {isSmallerThanMd ? (
        <></>
      ) : (
        <Box
          position="absolute"
          bottom="0"
          right="0"
          margin="20px"
          h="100px"
          w="100px"
        >
          <Image src="/contact.gif" alt="Contact GIF" />
        </Box>
      )}
    </Box>
  );
};

export default LandingPage;
