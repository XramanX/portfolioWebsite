"use client";
import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { theme } from "../../styles/chakra/theme";

type Props = {};

const AboutMePage: React.FC<any> = () => {
  const highlightColor = useColorModeValue(theme.colors.brand.teal, "teal.300");
  const highlightHoverColor = useColorModeValue(
    theme.colors.brand.teal,
    "teal.300"
  );

  const controllerCursorStyle = {
    cursor: "url('/game.svg'), auto",
  };

  return (
    <Flex
      fontSize={{ base: "sm", md: "md" }}
      color={theme.colors.brand.ghost}
      flexDirection="column"
      gap={2}
      id="about-section"
      mb={5}
      p={4}
    >
      <Text>
        I discovered my love for coding during high school, where curiosity led
        me to explore the intricacies of web development.
      </Text>
      <Text>
        Joining{" "}
        <a
          href="https://www.vuedata.com/"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Text
            as="span"
            color="white"
            _hover={{
              right: 0,
              color: highlightHoverColor,
            }}
            transition={"color 0.3s"}
          >
            VueData
          </Text>
        </a>{" "}
        in late 2021 marked the beginning of a meaningful chapter in my career.
        Working within this dynamic environment, I've actively contributed to
        four major projects, each offering unique challenges and invaluable
        learning experiences.
      </Text>
      <Text>
        Presently, my focus is dual-fold—continuously refining my coding skills,
        driven by an unwavering belief in ongoing improvement, and striving for
        new heights in my career. While I specialize in frontend development,
        I've also ventured into backend realms. Beyond coding, I find solace and
        excitement in the world of{" "}
        <Text
          as="span"
          color="white"
          _hover={{
            ...controllerCursorStyle,
            right: 0,
            color: highlightHoverColor,
          }}
          transition={"color 0.3s"}
        >
          gaming
        </Text>
        , making it my go-to escape from the everyday hustle.
      </Text>
    </Flex>
  );
};

export default AboutMePage;
