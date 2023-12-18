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
import { useEffect, useState } from "react";
import SocialMediaLinks from "../../components/socialMedia";
import Footer from "../footer/page";
import { theme } from "../../styles/chakra/theme";
import ContactPopup from "../../components/contactPopup";

const LandingPage: React.FC = () => {
  const [isLargeScreen] = useMediaQuery("(min-width: 1100px)");
  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)");
  const [isMidScreen] = useMediaQuery(
    "(min-width: 769px) and (max-width: 940px)"
  );
  const [isContactHovered, setContactHovered] = useState(false);
  const [isContactClicked, setContactClicked] = useState(false);
  const containerFlex = isLargeScreen ? { base: 1, md: 2 } : 1;
  const paddingValue = isLargeScreen ? 10 : 0;
  const [selectedNavItem, setSelectedNavItem] = useState("ABOUT");
  const handleNavbarItemSelect = (label: string) => {
    setSelectedNavItem(label);
  };
  const handleContactSubmit: any = (formData: FormData) => {
    console.log("Form submitted:", formData);

    setContactClicked(false);
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
  const handleContactHover = () => {
    setContactHovered(true);
  };

  const handleContactLeave = () => {
    setContactHovered(false);
  };

  const handleContactClick = () => {
    setContactClicked(true);
  };

  const handleContactClose = () => {
    setContactClicked(false);
  };
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
          md: isSmallerThanMd ? "0px" : isMidScreen ? "0px" : "500px",
        }}
        w={isSmallerThanMd || isMidScreen ? "200px" : "auto"}
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
      {/* {isSmallerThanMd || isMidScreen ? (
        <></>
      ) : (
        <Box
          position="absolute"
          bottom="0"
          right="0"
          margin="20px"
          h="100px"
          w="100px"
          onMouseEnter={handleContactHover}
          onMouseLeave={handleContactLeave}
          onClick={handleContactClick}
        >
          <Image
            src="/contact.gif"
            alt="Contact GIF"
            style={{
              transform: isContactHovered
                ? "translateY(-5px)"
                : "translateY(0)",
            }}
          />
          {isContactClicked && (
            <ContactPopup
              isOpen={isContactClicked}
              onClose={handleContactClose}
              onSubmit={handleContactSubmit}
            />
          )}
        </Box>
      )} */}
    </Box>
  );
};

export default LandingPage;
