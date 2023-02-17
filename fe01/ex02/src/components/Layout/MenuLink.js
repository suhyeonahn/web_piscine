import React from 'react';
import styled, { css } from 'styled-components';
const Link = styled.a`
  display: block;
  font-size: 18px;
  margin-bottom: 10px;
`;

function MenuLink({children, to}) {
    return (
      <Link href={to}>
        {children}
      </Link>
    );
  }

export default MenuLink;