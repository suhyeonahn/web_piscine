import React from 'react';
import styled, { css } from 'styled-components';
import MenuLink from './MenuLink';

const MenuBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  box-sizing: border-box;
`;


function Menu() {
  return (
    <MenuBar>
        <MenuLink to='/Profile'>profile</MenuLink>
        <MenuLink to='/Board'>board</MenuLink>
    </MenuBar>
  );
};

export default Menu;