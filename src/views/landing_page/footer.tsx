import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const CopyrightText = styled.p`
  margin: 0;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <CopyrightText>&copy; {currentYear} Clustrr. All rights reserved.</CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
