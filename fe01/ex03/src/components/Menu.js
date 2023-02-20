import '../scss/styles.scss';
import { Nav } from 'react-bootstrap';

const Menu = () => {
    return (
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/aboutt">About</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    );
};

export default Menu;