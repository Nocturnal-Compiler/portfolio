import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} YourName. All Rights Reserved.
    </FooterContainer>
  );
};

export default Footer;
