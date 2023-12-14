import React from "react";
import { Flex, Link, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const SocialMediaLink: React.FC<{ href: string; icon: any }> = ({
  href,
  icon,
}) => {
  const iconStyle = {
    color: "gray.400",
    _hover: {
      color: "white",
      transform: "rotateY(180deg)",
    },
  };

  return (
    <Link
      href={href}
      isExternal
      {...iconStyle}
      style={{
        perspective: "1000px",
        transition: "all 0.3s ease",
      }}
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        w="30px"
        h="30px"
        borderRadius="50%"
        // bg="purple.500"
        boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
      >
        <Icon as={icon} boxSize={6} />
      </Flex>
    </Link>
  );
};

const SocialMediaLinks: React.FC = () => {
  return (
    <Flex flexDirection="row" gap={4}>
      <SocialMediaLink
        href="https://www.linkedin.com/in/raman0808/"
        icon={FaLinkedin}
      />
      <SocialMediaLink
        href="https://www.instagram.com/ramandeep.08/"
        icon={FaInstagram}
      />
      <SocialMediaLink
        href="https://twitter.com/ramandeep008"
        icon={FaSquareXTwitter}
      />
      <SocialMediaLink href="https://github.com/XramanX" icon={FaGithub} />
    </Flex>
  );
};

export default SocialMediaLinks;
