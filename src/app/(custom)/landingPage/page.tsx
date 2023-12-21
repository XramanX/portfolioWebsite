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
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SocialMediaLinks from "../../components/socialMedia";
import Footer from "../footer/page";
import { theme } from "../../styles/chakra/theme";

type LandingPageProps = {
  togglePages: (value: boolean) => void;
};

const LandingPage: React.FC<LandingPageProps> = ({ togglePages }) => {
  const [isLargeScreen] = useMediaQuery("(min-width: 1100px)");
  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)");
  const [isMidScreen] = useMediaQuery(
    "(min-width: 769px) and (max-width: 940px)"
  );

  const containerFlex = isLargeScreen ? { base: 1, md: 2 } : 1;
  const paddingValue = isLargeScreen ? 10 : 0;
  const [selectedNavItem, setSelectedNavItem] = useState("ABOUT");
  const handleNavbarItemSelect = (label: string) => {
    setSelectedNavItem(label);
  };

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection: any = document.getElementById("about-section");
      const experienceSection: any =
        document.getElementById("experience-section");
      const projectsSection: any = document.getElementById("projects-section");
      const footerSection: any = document.getElementById("footer-section");

      const scrollPosition = window.scrollY;

      if (scrollPosition < aboutSection.offsetTop + aboutSection.clientHeight) {
        setSelectedNavItem("ABOUT");
      } else if (
        scrollPosition <
        experienceSection.offsetTop + experienceSection.clientHeight
      ) {
        setSelectedNavItem("EXPERIENCE");
      } else if (
        scrollPosition <
        projectsSection.offsetTop + projectsSection.clientHeight
      ) {
        setSelectedNavItem("PROJECTS");
      } else if (
        scrollPosition <
        footerSection.offsetTop + footerSection.clientHeight
      ) {
        setSelectedNavItem("CONTACT");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const entryAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };
  return (
    <motion.div
      variants={entryAnimation}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Box
        maxW="container.xl"
        display="flex"
        flexWrap="wrap"
        textAlign="start"
        padding={paddingValue}
      >
        <Flex
          padding={"4"}
          flexDirection="column"
          gap={20}
          flex={containerFlex}
          position={isSmallerThanMd || isMidScreen ? "relative" : "fixed"}
          height="90%"
          justifyContent="space-between"
        >
          <Flex flexDirection="column" gap={2}>
            <Flex
              padding={{ base: 1, md: 1, sm: 6 }}
              flexDirection="column"
              gap={2}
              w={isSmallerThanMd || isMidScreen ? "auto" : "400px"}
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
            {isSmallerThanMd || isMidScreen ? (
              <></>
            ) : (
              <Flex mt={5}>
                <Navbar
                  onItemSelect={handleNavbarItemSelect}
                  selectedNavItem={selectedNavItem}
                />
              </Flex>
            )}
          </Flex>

          <Flex padding={{ base: 1, md: 1, sm: 6 }}>
            <SocialMediaLinks />
          </Flex>
        </Flex>

        <Box
          marginLeft={{
            base: 0,
            md: isSmallerThanMd || isMidScreen ? "0px" : "500px",
          }}
          w={isSmallerThanMd || isMidScreen ? "auto" : "auto"}
          padding={{ base: 1, md: 4, sm: 6 }}
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
      </Box>
    </motion.div>
  );
};

export default LandingPage;
