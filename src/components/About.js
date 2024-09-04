import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 50px;
  background: ${({ theme }) => theme.colors.backgroundLight};
`;

const AboutText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <AboutText>
        I'm a developer with a passion for creating beautiful and functional web experiences...
      </AboutText>
    </AboutContainer>
  );
};

export default About;
