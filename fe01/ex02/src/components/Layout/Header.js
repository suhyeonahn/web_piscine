import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>My Website</Logo>
    </HeaderContainer>
  );
};


export default Header;