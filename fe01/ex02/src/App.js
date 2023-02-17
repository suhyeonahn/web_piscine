import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import { Button, Navbar, Container, Row, Col } from 'react-bootstrap';


function App() {
      return (
             <div className="App">
      <Container>
      <Row>
        <Col xs={12} md={8}>
          {/* Content goes here */}
        </Col>
        <Col xs={12} md={4}>
          {/* Sidebar goes here */}
        </Col>
      </Row>
    </Container>
    <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="#home">My App</Navbar.Brand>
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Signed in as: <a href="#login">username</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
<Button variant="primary" size="lg" block>Click me</Button>
<BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
</BrowserRouter>
             </div>
     );
 }

export default App;