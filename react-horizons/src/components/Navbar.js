import {Container, Row, Col, Image} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarMain() {
  return (

      <Container fluid  expand="lg" style={{height:"8vh"}}>
        <Row>

            <Col xs={2} style={{display:"flex", justifyContent:"end"}}>
            
            <Navbar.Brand href="#home">
              <Image  style={{height:"50px"}} src="rainbow ui.png"/>
            </Navbar.Brand>
            

            </Col>

            <Col xs={6} >
              
            </Col>

            <Col xs={4}>
            
          <Nav className="me-auto">
            <Nav.Link href="#home">Product</Nav.Link>
            <Nav.Link href="#link">Download</Nav.Link>
            <Nav.Link href="#home">Support</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
          </Nav>
        
            </Col>

        </Row>
          
      </Container>
  );
}

export default NavbarMain;