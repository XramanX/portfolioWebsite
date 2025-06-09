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

const Experience: React.FC<Props> = () => {
  const experiences: ExperienceProps = [
    {
      jobDuration: "September 2024 - June 2025",
      company: "SkyFobs",
      role: "Software Engineer",
      location: "Remote",
      description:
        "Developed multiple high-impact web applications, including a real-time chat platform and a mobile-first high-concurrency engagement system. Integrated IndexedDB for local data persistence, reducing backend API load and enabling offline capabilities. Led frontend design from scratch, optimizing UI/UX for seamless experiences and boosting engagement metrics. Implemented Sockets for real-time communication and updates, driving responsiveness. Built a scalable, modular codebase to accelerate development and future feature integration.",
      skills: ["ReactJS", "NextJS", "IndexedDB", "WebSockets", "UI/UX"],
      link: "",
    },
    {
      jobDuration: "November 2021 - September 2024",
      company: "VueData Technologies",
      role: "Software Engineer",
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
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  const arrowSize = "16px";
  const [isLargeScreen] = useMediaQuery("(min-width: 48em)");
  const columns = isLargeScreen ? 2 : 1;

  return (
    <Box id="experience-section">
      <Flex
        flexDirection="column"
        gap={4}
        css={{
          columns: columns,
          breakInside: "auto",
        }}
      >
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </Flex>

      <Flex w="full" align="center" justify="center" p={5}>
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
            <TiArrowForward style={{ marginLeft: "4px" }} size={arrowSize} />
          </motion.div>
        </Link>
      </Flex>
    </Box>
  );
};

export default Experience;
