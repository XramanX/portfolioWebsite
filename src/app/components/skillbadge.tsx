import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { theme } from "../styles/chakra/theme";
type SkillBadgeProps = {
  skill: string;
  index: number;
};

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, index }) => {
  return (
    <Box
      key={index}
      bgColor={theme.colors.brand.primary}
      borderRadius="full"
      w="auto"
      h={"auto"}
      px={2}
      py={1}
      display="inline-block"
    >
      <Text fontSize="xs" textAlign="center">
        {skill}
      </Text>
    </Box>
  );
};

export default SkillBadge;
