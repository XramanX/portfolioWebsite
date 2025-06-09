"use client";
import React from "react";
import { Flex, Text, useColorModeValue, Link } from "@chakra-ui/react";
import { theme } from "../../styles/chakra/theme";

const AboutMePage: React.FC = () => {
  const highlightColor = useColorModeValue(theme.colors.brand.teal, "teal.300");

  return (
    <Flex
      fontSize={{ base: "sm", md: "md" }}
      color={theme.colors.brand.ghost}
      flexDirection="column"
      gap={4}
      id="about-section"
      mb={10}
      p={4}
    >
      <Text>
        My journey in development began back in high school, sparked by
        curiosity and a desire to build things from scratch. Since then, coding
        has become more than a skill—it's my toolkit for solving real-world
        problems.
      </Text>

      <Text>
        In 2021, I joined{" "}
        <Link
          href="https://www.vuedata.com/"
          target="_blank"
          color="white"
          _hover={{ color: highlightColor }}
          transition="color 0.3s"
        >
          VueData
        </Link>
        , where I’ve led and contributed to four major projects. The fast-paced,
        collaborative environment has helped shape my approach to writing clean,
        scalable code.
      </Text>

      <Text>
        These days, I’m focused on leveling up as a full-stack developer. I
        specialize in frontend engineering but often dive into backend
        architecture when needed. Outside work, you’ll find me unwinding with
        gaming—my way of resetting and recharging.
      </Text>
    </Flex>
  );
};

export default AboutMePage;
