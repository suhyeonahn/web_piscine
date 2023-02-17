import styled from 'styled-components';

const Nav = styled.nav`
  width: 8vh;
  height: 100vh;
  background-color: #444;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

const NavItem = styled.a`
  color: #fff;
  font-size: 15px;
  margin-bottom: 15px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Menu = () => {
    return (
      <Nav>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Contact</NavItem>
      </Nav>
    );
};

export default Menu;