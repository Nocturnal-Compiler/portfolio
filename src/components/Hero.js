import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import JobTitles from './JobTitles';

const HeroContainer = styled.section`
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;  // Center content vertically
  align-items: center;  // Center content horizontally
  background: ${({ theme }) => theme.colors.background};
`;

const HeroText = styled(motion.h1)`
  font-size: 72px;  // Increase font size for emphasis
  color: ${({ theme }) => theme.colors.cyan};
  margin-bottom: 30px;
  font-family: 'Neuton', serif;  // Use the Neuton font for the heading
  text-align: center;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Vignan Chowdary
      </HeroText>
      <JobTitles />
    </HeroContainer>
  );
};

export default Hero;
