import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #222;
`;

const Logo = styled.h1`
  font-size: 20px;
  color: #fff;
  padding-left: 15px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>My website</Logo>
    </HeaderContainer>
  );
};

export default Header;
