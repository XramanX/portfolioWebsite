import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { theme } from "../styles/chakra/theme";

export interface NavbarProps {
  onItemSelect: (label: string) => void;
  selectedNavItem: string;
}

export function Navbar({ onItemSelect, selectedNavItem }: NavbarProps) {
  const [hoveredItem, setHoveredItem] = React.useState("");

  const navItems = [
    { label: "ABOUT", targetId: "about-section" },
    { label: "EXPERIENCE", targetId: "experience-section" },
    { label: "PROJECTS", targetId: "projects-section" },
    // { label: "CONTACT", targetId: "contact-section" },
  ];

  const handleItemHover = (label: string) => {
    setHoveredItem(label);
  };

  const [isSmallerThanMd] = useMediaQuery("(max-width: 48em)");

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Determine which section is in view based on scroll position
      // Update the selectedNavItem accordingly
      // You may need to adjust the values based on your layout
      const aboutSection: any = document.getElementById("about-section");
      const experienceSection: any =
        document.getElementById("experience-section");
      const projectsSection: any = document.getElementById("projects-section");
      const contactSection: any = document.getElementById("contact-section");

      if (scrollPosition < aboutSection.offsetTop + aboutSection.clientHeight) {
        onItemSelect("ABOUT");
      } else if (
        scrollPosition <
        experienceSection.offsetTop + experienceSection.clientHeight
      ) {
        onItemSelect("EXPERIENCE");
      } else if (
        scrollPosition <
        projectsSection.offsetTop + projectsSection.clientHeight
      ) {
        onItemSelect("PROJECTS");
      } else {
        onItemSelect("CONTACT");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onItemSelect]);

  return (
    <Flex
      as="nav"
      justify={isSmallerThanMd ? "center" : "end"}
      gap={isSmallerThanMd ? 0 : 8}
      flexDirection={isSmallerThanMd ? "row" : "column"}
    >
      {navItems.map((item, index) => (
        <Flex
          key={index}
          alignItems="center"
          position="relative"
          _hover={{
            cursor: "pointer",
          }}
          onClick={() => {
            onItemSelect(item.label);
            const targetElement = document.getElementById(item.targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: "smooth" });
            }
          }}
          onMouseEnter={() => handleItemHover(item.label)}
          onMouseLeave={() => handleItemHover("")}
          flexDirection={isSmallerThanMd ? "column" : "row"}
          mb={isSmallerThanMd ? 0 : 2}
        >
          <Box
            height="1%"
            width={
              selectedNavItem === item.label || hoveredItem === item.label
                ? "95px"
                : "30px"
            }
            background={
              selectedNavItem === item.label || hoveredItem === item.label
                ? theme.colors.brand.teal
                : theme.colors.brand.ghost
            }
            transition="width 0.2s"
            mb={isSmallerThanMd ? 1 : 0}
          />
          <Text
            fontSize="xs"
            color={
              selectedNavItem === item.label
                ? "white"
                : theme.colors.brand.ghost
            }
            letterSpacing="1.2px"
            pl={isSmallerThanMd ? 2 : 4}
            lineHeight="1"
          >
            {item.label}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
