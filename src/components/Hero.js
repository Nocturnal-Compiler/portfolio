import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
`;

const HeroText = styled(motion.h1)`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm YourName
      </HeroText>
    </HeroContainer>
  );
};

export default Hero;
