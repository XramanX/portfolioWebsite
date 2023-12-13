"use client";
import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { theme } from "../styles/chakra/theme";

export interface NavBarProps {}

export function Navbar() {
  const [selectedItem, setSelectedItem] = React.useState("ABOUT");
  const [hoveredItem, setHoveredItem] = React.useState("");

  const navItems = [
    { label: "ABOUT", targetId: "about-section" },
    { label: "EXPERIENCE", targetId: "experience-section" },
    { label: "PROJECTS", targetId: "projects-section" },
    { label: "CONTACT", targetId: "contact-section" },
  ];

  const handleItemClick = (label: any, targetId: any) => {
    setSelectedItem(label);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleItemHover = (label: string) => {
    setHoveredItem(label);
  };

  return (
    <Flex as="nav" justify="end" gap={8} flexDirection="column">
      {navItems.map((item, index) => (
        <Flex
          key={index}
          alignItems="center"
          position="relative"
          _hover={{
            cursor: "pointer",
          }}
          onMouseEnter={() => handleItemHover(item.label)}
          onMouseLeave={() => handleItemHover("")}
          onClick={() => handleItemClick(item.label, item.targetId)}
          flexDirection="row"
        >
          <Box
            height="1%"
            width={
              selectedItem === item.label || hoveredItem === item.label
                ? "95px"
                : "30px"
            }
            background={
              selectedItem === item.label || hoveredItem === item.label
                ? "teal.500"
                : "gray"
            }
            transition="width 0.2s"
          />
          <Text
            fontSize="xs"
            color={selectedItem === item.label ? "white" : "gray"}
            letterSpacing="1.2px"
            pl={4}
            lineHeight="1"
          >
            {item.label}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
}
