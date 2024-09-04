import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Logo = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
`;

const Link = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 18px;
  &:hover {
    color: ${({ theme }) => theme.colors.cyan};
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Vignan Chowdary</Logo>
      <NavLinks>
        <Link whileHover={{ scale: 1.1 }} href="#about">About</Link>
        <Link whileHover={{ scale: 1.1 }} href="#projects">Projects</Link>
        <Link whileHover={{ scale: 1.1 }} href="#contact">Contact</Link>
      </NavLinks>
    </HeaderContainer>
  );
};

export default Header;
