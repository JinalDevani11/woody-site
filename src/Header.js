import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            {/* ==================header sec start================== */}
            <div>
                <Container>
                    <Row>
                        <Col lg={2} xs={6} className='logo'><h3>WooDY</h3></Col>
                        <Col lg={8} xs={6} >
                            <Navbar expand="lg">
                                <Container>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto'/>
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav>
                                            <Nav.Link href=""><Link to="/Home">Home</Link></Nav.Link>
                                            <Nav.Link href=""><Link to="/About">About</Link></Nav.Link>
                                            <Nav.Link href=""><Link to="/Services">Services</Link></Nav.Link>
                                            <Nav.Link href=""><Link to="/Project">Project</Link></Nav.Link>
                                            <NavDropdown title="Pages" id="basic-nav-dropdown">
                                                <NavDropdown.Item href=""><Link to="/Feature">Feature</Link></NavDropdown.Item>
                                                <NavDropdown.Item href="Free-Quote"><Link to="/free-quote">Free Quote</Link></NavDropdown.Item>
                                                <NavDropdown.Item href="Our-team"><Link to="/Our-team">Our Team</Link></NavDropdown.Item>
                                                <NavDropdown.Item href="Testimonial"><Link to="/Testimonial">Testimonial</Link></NavDropdown.Item>
                                                <NavDropdown.Item href="404-page"><Link to="/404-page">404-page</Link></NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Link href=""><Link to="/contact">contact</Link></Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </Col>
                        <Col lg={2} className="d-none d-lg-block header_btn ">
                            <a href="#">Get A Quote<span className='ms-3'><FaArrowRight /></span></a>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* ==================header sec end================== */}
        </>
    );
}
export default Header;