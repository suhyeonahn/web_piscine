import React from 'react';
import styled from 'styled-components';

const NavigationContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  background-color: #ddd;
  padding: 1rem;
`;

const NavigationLink = styled.a`
  color: #333;
  text-decoration: none;
  margin-bottom: 0.5rem;
`;

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationLink href="#">Home</NavigationLink>
      <NavigationLink href="#">About</NavigationLink>
      <NavigationLink href="#">Contact</NavigationLink>
    </NavigationContainer>
  );
};

export default Navigation;