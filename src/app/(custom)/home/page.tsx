"use client";
import {
  Box,
  Center,
  Circle,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { theme } from "../../styles/chakra/theme";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

type HomePageProps = {
  togglePages: (value: any) => void;
};

const HomePage: React.FC<any> = ({ togglePages }) => {
  const technologies: string[] = [
    "JavaScript",
    "React.js",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web Sockets",
  ];
  const getRandomDirection = () => (Math.random() > 0.5 ? 1 : -1);
  const [isLargeScreen] = useMediaQuery("(min-width: 1100px)");
  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)");
  const [pictureHover, setPictureHover] = useState(false);
  const [isMidScreen] = useMediaQuery(
    "(min-width: 769px) and (max-width: 940px)"
  );
  const [currentTechIndex, setCurrentTechIndex] = useState(0);
  const containerFlex = isLargeScreen ? { base: 1, md: 2 } : 1;
  const paddingValue = isLargeScreen ? 10 : 0;
  const controls: any = useAnimation();
  let techControls: any = useAnimation();

  const techVariants = {
    hidden: {
      opacity: 0,
      y: "10%",
      transition: { duration: 0.2, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.4, ease: [0.25, 0.8, 0.25, 1] },
    },
  };

  const containerVariants = {
    exit: {
      opacity: 0,
      x: isLargeScreen ? getRandomDirection() * 200 : 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  const exitPictureAnimation = {
    scale: [10, 1],
    opacity: 0,
    transition: { duration: 0.15, ease: "easeOut" },
  };

  const onHoverPicture = {
    scale: [1, 10],
    borderRadius: ["20%", "10%"],
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  };

  useEffect(() => {
    let isMounted = true;

    const runAnimation = async () => {
      try {
        await techControls.start("hidden");
        if (!isMounted) return;

        setCurrentTechIndex(
          (prevIndex) => (prevIndex + 1) % technologies.length
        );

        await techControls.start("visible");
      } catch (error) {
        console.error("Animation error:", error);
      }
    };

    const interval = setInterval(runAnimation, 2000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [techControls]);

  useEffect(() => {
    controls.start({ opacity: 1, x: 0, transition: { duration: 1 } });
  }, [controls, currentTechIndex]);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Box
        maxW="container.xl"
        display="flex"
        flexWrap="wrap"
        textAlign="start"
        padding={isLargeScreen ? 10 : 0}
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
        p={isSmallerThanMd ? 4 : 10}
      >
        <Center gap={10} flexDirection={isSmallerThanMd ? "column" : "row"}>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            style={{ marginLeft: "1em", flex: 1 }}
          >
            <Box
              fontSize="xl"
              color={theme.colors.brand.white}
              textAlign={isSmallerThanMd ? "center" : "start"}
            >
              <Box
                fontSize="78px"
                fontWeight="bold"
                mb={6}
                color={theme.colors.brand.mintGreen}
                textAlign={isSmallerThanMd ? "center" : "start"}
              >
                <Text fontSize={isSmallerThanMd ? "48px" : "78px"}>
                  I'm Raman
                </Text>
              </Box>
              <Box
                mb={5}
                textAlign={isSmallerThanMd ? "start" : "start"}
                fontSize={isSmallerThanMd ? "lg" : "xl"}
              >
                As a full-stack web developer deeply entrenched in the world of{" "}
                <motion.span
                  animate={techControls}
                  variants={techVariants}
                  style={{
                    fontWeight: "bold",
                    color: theme.colors.brand.mintGreen,
                    display: "inline-block",
                  }}
                >
                  {technologies[currentTechIndex]}
                </motion.span>
                <br />
                I also reign supreme in the digital battlegrounds as a
                first-person shooter aficionado.
                <br />
                Inspired by the rhythmic beats of Hip-Hop, let's collaborate to
                seamlessly weave code and creativity, crafting compelling online
                experiences.
              </Box>
              <motion.button
                whileHover={{ scale: [1.1, 1.2], x: isSmallerThanMd ? 0 : 20 }}
                whileTap={{ scale: 0.9 }}
              >
                <Flex
                  position="relative"
                  onClick={() => {
                    togglePages(false);
                    setPictureHover(true);
                    techControls = null;
                  }}
                  textAlign="center"
                  alignItems="center"
                  border="1px solid"
                  color={theme.colors.brand.white}
                  w="auto"
                  flexDirection="row"
                  align="center"
                  gap={3}
                  maxWidth="250px"
                  padding={4}
                  borderRadius="40px"
                  overflow="hidden"
                  _hover={{
                    cursor: "pointer",
                    color: theme.colors.brand.lavender,
                  }}
                  transition={"color 0.4s"}
                  justifyContent="center"
                >
                  <Text fontSize="lg">See More About Me</Text>

                  <motion.div
                    animate={{
                      x: [0, 3, 5, 7, 8, 7, 5, 3, 0],
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    style={{ marginTop: "1px" }}
                  >
                    <HiOutlineArrowLongRight fontSize="22px" />
                  </motion.div>
                </Flex>
              </motion.button>
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={pictureHover ? onHoverPicture : controls}
            exit={exitPictureAnimation}
            style={{
              backgroundColor: "transparent",
              overflow: "hidden",
              order: -1,
            }}
          >
            <Circle
              size={isSmallerThanMd ? "14em" : "20em"}
              bg={
                !pictureHover
                  ? theme.colors.brand.mintGreen
                  : theme.colors.brand.primary
              }
              overflow="hidden"
            >
              <motion.div initial={{ opacity: 0, x: 200 }} animate={controls}>
                {!pictureHover ? (
                  <Image
                    src="/myPfp.png"
                    alt="Profile Picture"
                    boxSize="100%"
                  />
                ) : null}
              </motion.div>
            </Circle>
          </motion.div>
        </Center>
      </Box>
    </motion.div>
  );
};

export default HomePage;
