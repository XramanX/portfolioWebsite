"use client";
import ExperienceCard from "../../components/experienceCard";
import { Box, Flex, Link, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
import { theme } from "../../styles/chakra/theme";
type Props = {};
type ExperienceProps = {
  jobDuration: string;
  company: string;
  role: string;
  location: string;
  description: string;
  skills: string[];
  link: string;
}[];

const Experience: React.FC<any> = () => {
  const experiences: ExperienceProps = [
    {
      jobDuration: "November 2021 - Present",
      company: "VueData Technologies",
      role: "Full Stack Developer",
      location: "Bengaluru",
      description:
        "As a Full Stack Developer at VueData Technologies, I contribute to the development of innovative web applications. I use ReactJS and NextJS for front-end development, creating intuitive and visually appealing user interfaces. For back-end development, I employ NodeJS, designing and implementing robust and scalable server-side functionalities. Collaborating closely with cross-functional teams, including designers and product managers, I ensure the delivery of high-quality software solutions. I actively participate in code reviews, ensuring adherence to coding standards and best practices. Proactively identifying areas for improvement, I implement optimizations to enhance performance and user experience. I consistently meet project deadlines, contributing to the overall success of the development team.",
      skills: ["ReactJS", "NextJS", "NodeJS", "TypeScript"],
      link: "https://www.vuedata.com/",
    },
    {
      jobDuration: "October - November 2021",
      company: "VueData Technologies",
      role: "Software Engineer Trainee",
      location: "Bengaluru",
      description:
        "As a Software Engineer Trainee at VueData, I began my career by gaining hands-on experience in cutting-edge technologies. Collaborating closely with the development team, I actively contributed to the design and implementation of software solutions. During this time, I acquired proficiency in front-end technologies like ReactJS and NextJS, as well as back-end technologies, including NodeJS.",
      skills: ["HTML", "CSS", "ReactJS", "NodeJS"],
      link: "https://www.vuedata.com/",
    },
  ];
  const [isHovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const arrowSize = "16px";

  // Use useMediaQuery to check for the current breakpoint
  const isLargeScreen = useMediaQuery("(min-width: 48em)");

  // Use the result to determine the number of columns
  const columns = isLargeScreen ? 2 : 1;

  return (
    <Box id="experience-section">
      <Flex
        flexDirection="column"
        gap={2}
        css={{
          columns: columns,
          breakInside: "auto",
        }}
      >
        {experiences.map((experience: any, index: number) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </Flex>
      <Flex w="full" align="center" textAlign="center" p={5}>
        <Link
          href="/Ramandeep_resume.pdf"
          target="_blank"
          fontSize="md"
          textDecoration="none"
          _hover={{
            textDecoration: "underline",
            textDecorationColor: theme.colors.brand.teal,
            textDecorationThickness: "1px",
            textUnderlinePosition: "under",
          }}
          display="flex"
          alignItems="center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Check out my full Résumé
          <motion.div
            animate={{ x: isHovered ? 10 : 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <TiArrowForward style={{ marginTop: "1px", marginLeft: "4px" }} />
          </motion.div>
        </Link>
      </Flex>
    </Box>
  );
};

export default Experience;
