import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.section`
  padding: 50px;
  background: ${({ theme }) => theme.colors.background};
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const Projects = () => {
  const projectList = [
    { title: "Project One", description: "Description for project one" },
    { title: "Project Two", description: "Description for project two" },
  ];

  return (
    <ProjectsContainer id="projects">
      {projectList.map((project, index) => (
        <ProjectCard
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
