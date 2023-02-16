import Nav from ".";

function isActive(path) {
  return window.location.pathname.startsWith(path);
}

function SideNav() {
    return (
        <Nav>
            <Nav.List>
                <Nav.Item>
                    <Nav.Link to='/' active={isActive('/')}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to='/Profile' active={isActive('/Profile')}>Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link to='/Board' active={isActive('/Board')}>Home</Nav.Link>
                </Nav.Item>
            </Nav.List>
        </Nav>
    );
}

export default SideNav;