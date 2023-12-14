import React from "react";
import { Box, Text, Link, VStack } from "@chakra-ui/react";
import { theme } from "../../styles/chakra/theme";

const Footer: React.FC = () => {
  const externalLinkProps = {
    target: "_blank",
  };
  return (
    <Box color="gray" gap={2} mt={5} p={2} w="98%">
      <Text fontSize="xs">
        Whipped up in the coding battlefield of{" "}
        <Text
          as="a"
          href="https://code.visualstudio.com/"
          color="white"
          {...externalLinkProps}
          transition={"color 0.4s"}
          _hover={{ textDecoration: "none", color: theme.colors.brand.teal }}
        >
          Visual Studio Code
        </Text>{" "}
        by this gaming virtuoso. Crafted with Next.js and fortified with the
        mighty{" "}
        <Text
          as="a"
          href="https://chakra-ui.com/"
          color="white"
          _hover={{ textDecoration: "none", color: theme.colors.brand.teal }}
          transition={"color 0.4s"}
          {...externalLinkProps}
        >
          Chakra UI
        </Text>
        . Deployed seamlessly into the digital realm with the prowess of{" "}
        <Text
          as="a"
          href="https://vercel.com/"
          color="white"
          _hover={{ textDecoration: "none", color: theme.colors.brand.teal }}
          transition={"color 0.4s"}
          {...externalLinkProps}
        >
          Vercel
        </Text>
        .
      </Text>
    </Box>
  );
};

export default Footer;
