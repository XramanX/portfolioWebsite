import React, { useState } from "react";
import { Box, Text, Flex, useBreakpointValue, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { theme } from "../styles/chakra/theme";

type ProjectCardProps = {
  name: string;
  description: string;
  link: string;
  isClient: boolean;
  svgName: string;
};

const ProjectCard: React.FC<any> = ({ index, project }) => {
  const { name, description, link, isClient, svgName }: ProjectCardProps =
    project;
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  const handleClick = () => {
    if (isClient && link !== "") window.open(link, "_blank");
  };

  const arrowSize = useBreakpointValue({ base: "14px", md: "16px" });

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      padding={4}
      bg={isHovered ? "" : ""}
      cursor="pointer"
      _hover={{
        boxShadow:
          "rgba(96, 85, 83, 0.2) -5px 5px, rgba(96, 85, 83, 0.2) -10px 10px, rgba(96, 85, 83, 0.1) -15px 15px, rgba(96, 85, 83, 0.1) -20px 20px, rgba(96, 85, 83, 0.05) -25px 25px",
        transform: "translateY(-1px)",
        transitionDuration: "0.4s",
        transitionTimingFunction: "ease-in-out",
        bg: `rgba(96, 85, 83, 0.1)`,
        cursor: "pointer",
      }}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {useBreakpointValue({
        base: <></>,
        md: (
          <Box transform="rotate(-90deg)" p={5}>
            <Image
              src={svgName === "goBoss" ? "/goBoss.png" : `/${svgName}.svg`}
              alt={`${name}`}
              w="130px"
              h={"80px"}
            />
          </Box>
        ),
      })}
      <Box flex="1">
        <Flex
          mb={{ base: 2, md: 0 }}
          fontSize={{ base: "sm", md: "md" }}
          justify="start"
          align="center"
          color={isHovered ? theme.colors.brand.teal : ""}
          transition={"color 0.4s"}
        >
          <Text fontSize="md" fontWeight="bold">
            {name}
          </Text>
          <motion.div
            animate={{ x: isHovered ? 6 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {isHovered ? (
              <MdOutlineKeyboardDoubleArrowRight fontSize={arrowSize} />
            ) : (
              <MdOutlineKeyboardArrowRight fontSize={arrowSize} />
            )}
          </motion.div>
        </Flex>
        <Text color="gray">{description}</Text>
      </Box>
    </Flex>
  );
};

export default ProjectCard;
