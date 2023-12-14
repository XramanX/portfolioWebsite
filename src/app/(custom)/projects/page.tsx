"use client";
import React from "react";
import ProjectCard from "../../components/projectCard";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";

type Props = {};
type ProjectProps = {
  name: string;
  description: string;
  link: string;
  isClient: boolean;
  svgName: string;
}[];

const Projects = () => {
  const projects: ProjectProps = [
    {
      name: "LIMITLESS",
      link: "https://limitlessminds.com/",
      isClient: true,
      svgName: "limitless",
      description:
        "Played a pivotal role in creating a dynamic Content Management System (CMS) for the Limitless project. Empowered administrators to efficiently add, edit, and manage data, optimizing data presentation within the app. Designed and implemented a dedicated Partner Dashboard offering detailed analytics. Provided stakeholders with crucial insights, including total users, platform distribution, and comprehensive activity metrics. Actively contributed to the seamless integration of new features into the existing Limitless project architecture.",
    },
    {
      name: "NEOU FITNESS",
      link: "https://neoufitness.com/",
      isClient: true,
      svgName: "neou",

      description:
        "Migrated codebase from React.js to Next.js to improve performance and SEO. Designed and implemented attractive UI enhancements to enhance the user experience. Collaborated with the team to ensure smooth development and seamless integration of new features.",
    },
    {
      name: "G0-BOSS",
      link: "https://www.go-boss.com/",
      isClient: true,
      svgName: "goBoss",

      description:
        "Created new UI components based on client requirements, enhancing the visual appeal and user interaction. Developed backend functionalities in Node.js, including the creation of APIs to support various features. Actively collaborated with the team, contributing to the project's overall development and successful delivery.",
    },
    {
      name: "RTS",
      link: "",
      isClient: false,
      svgName: "rts",
      description:
        "Developed a responsive web application using Node.js and React based on the internal team's requirements. Implemented role-based access control and other features to meet the project specifications. Successfully delivered a fully functional project that is currently being used by our company.",
    },
  ];

  const [isLargeScreen] = useMediaQuery("(min-width: 48em)");
  const columns = isLargeScreen ? 2 : 1;

  return (
    <Box id="projects-section">
      <Flex
        flexDirection="column"
        gap={2}
        css={{
          columns: columns,
          breakInside: "auto",
        }}
      >
        {projects.map((project: any, index: number) => (
          <ProjectCard key={index} project={project} />
        ))}
      </Flex>
    </Box>
  );
};

export default Projects;
