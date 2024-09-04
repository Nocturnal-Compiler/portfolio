import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TitleContainer = styled(motion.div)`
  font-size: 36px;  // Increase font size for the job titles
  color: ${({ theme }) => theme.colors.text};
  height: 50px;  // Increase container height for better spacing
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Space Grotesk', sans-serif;  // Use Space Grotesk for job titles
`;

const titles = [
  "Web-Developer",
  "React-Developer",
  "Django & Python",
];

const JobTitles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);  // Change titles every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <TitleContainer
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {titles[index]}
    </TitleContainer>
  );
};

export default JobTitles;
