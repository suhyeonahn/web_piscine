import '../scss/styles.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Menu from './Menu'
import Header from './Header'

function Layout({children}) {
  return (
      <>
        <Header />
        <Container fluid>
          <Row>
            <Col xs={2}>
              <Menu />
            </Col>
            <Col xs={10}>
              {children}
            </Col>
          </Row>
        </Container>
      </>
    );
 }

export default Layout;