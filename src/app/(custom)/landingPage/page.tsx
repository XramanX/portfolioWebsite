import {
  Box,
  Flex,
  Text,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Navbar } from "../../components/navbar";
import AboutMePage from "@/app/(custom)/about/page";
import Experience from "../experience/page";
import Projects from "../projects/page";

const LandingPage: React.FC = () => {
  const paddingValue = useBreakpointValue({ base: 1, md: 10 });
  return (
    <Container
      maxW="container.xl"
      display="flex"
      flexWrap="wrap"
      textAlign="start"
      padding={paddingValue}
    >
      <Flex
        padding="4"
        flexDirection="column"
        gap={20}
        flex={{ base: 1, md: 2 }}
      >
        <Flex flexDirection="column" gap={2}>
          <Text fontSize="2xl" fontWeight="bold">
            Ramandeep Singh
          </Text>
          <Text fontSize="lg">Full-Stack Developer</Text>
          <Text fontSize="md" style={{ color: "gray" }}>
            Goal-oriented Software Developer with a passion for crafting
            innovative solutions and a commitment to continuous learning.
          </Text>
        </Flex>
        <Flex>
          <Navbar />
        </Flex>
      </Flex>

      <Flex
        padding={{ base: 1, md: 4 }}
        flex={{ base: 1, md: 3 }}
        flexDirection="column"
        gap={20}
      >
        <AboutMePage />
        <Experience />
        <Projects />
      </Flex>
    </Container>
  );
};

export default LandingPage;
