"use client";
import React, { useEffect, useState } from "react";
import { Box, Text, Flex, useMediaQuery } from "@chakra-ui/react";
import SkillBadge from "./skillbadge";
import { color, motion } from "framer-motion";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { theme } from "../styles/chakra/theme";

type ExperienceCardProps = {
  jobDuration: string;
  company: string;
  role: string;
  location: string;
  description: string;
  skills: string[];
  link: string;
};

const ExperienceCard: React.FC<any> = ({ index, experience }) => {
  const {
    jobDuration,
    company,
    role,
    description,
    skills,
    link,
  }: ExperienceCardProps = experience;
  const [isHovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleClick = () => {
    window.open(link, "_blank");
  };

  const isSmallerThanMd = useMediaQuery("(max-width: 48em)");

  const arrowSize = isSmallerThanMd ? "14px" : "16px";

  useEffect(() => {
    const handleScroll = () => {
      const card = document.getElementById(`experience-card-${index}`);
      if (card) {
        const topOffset = card.getBoundingClientRect().top;
        const isVisible = topOffset < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [index]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
      transition={{ duration: 0.6, delay: 0.2 * index }}
    >
      <Box
        key={index}
        p={4}
        _hover={{
          boxShadow:
            "rgba(79, 129, 189, 0.2) -5px 5px, rgba(79, 129, 189, 0.2) -10px 10px, rgba(79, 129, 189, 0.1) -15px 15px, rgba(79, 129, 189, 0.1) -20px 20px, rgba(79, 129, 189, 0.05) -25px 25px",

          transform: "translateY(-1px)",
          transitionDuration: "0.4s",
          transitionTimingFunction: "ease-in-out",
          bg: `rgba(96, 85, 83, 0.1)`,
          cursor: "pointer",
        }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        borderRadius="md"
        id={`experience-card-${index}`}
      >
        <Flex direction={{ base: "column", md: "row" }}>
          <Box
            mb={{ base: 2, md: 0 }}
            mr={{ base: 0, md: 4 }}
            flex={{ base: 1, md: 3 }}
            color={theme.colors.brand.ghost}
          >
            <Text fontSize={{ base: "sm", md: "xs" }}>{jobDuration}</Text>
          </Box>

          <Box flex={{ base: 1, md: 9 }}>
            <Flex
              mb={{ base: 2, md: 0 }}
              fontSize={{ base: "sm", md: "md" }}
              justify="start"
              align="center"
              color={isHovered ? theme.colors.brand.teal : ""}
              transition={"color 0.4s"}
            >
              <Text>{role} </Text>
              <Text fontSize="sm" mx={1} mt="-2px">
                {"•"}
              </Text>
              <Text>{company}</Text>
              <motion.div
                animate={{ x: isHovered ? 6 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {isHovered ? (
                  <MdOutlineKeyboardDoubleArrowRight
                  // fontSize={arrowSize}
                  />
                ) : (
                  <MdOutlineKeyboardArrowRight
                  // fontSize={arrowSize}
                  />
                )}
              </motion.div>
            </Flex>

            <Box mb={{ base: 2, md: 4 }}></Box>

            <Box mb={{ base: 4, md: 2 }}>
              <Text
                fontSize={{ base: "xs", md: "md" }}
                color={theme.colors.brand.ghost}
              >
                {description}
              </Text>
            </Box>

            <Box mt={{ base: 4, md: 0 }}>
              <Flex gap={1}>
                {skills.map((skill: any, index: number) => (
                  <SkillBadge key={index} index={index} skill={skill} />
                ))}
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default ExperienceCard;
