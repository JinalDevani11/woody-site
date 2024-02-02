import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaLocationDot, FaPhone, FaEnvelope, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaAngleRight } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <div className='footer-bg-color footer pt-5 pb-2'>
                <Container>
                    <Row className='Footer_info mb-5'>
                        <Col lg={3} md={6} xs={12} className='mb-3'>
                            <div>
                                <div className='footer_title'>
                                    <h4 className='my-3'>Address</h4>
                                    <li className='my-2'><span><FaLocationDot className='me-2' /></span>123 Street, New York, USA</li>
                                    <li className='my-2'><span><FaPhone className='me-2' /></span>+012 345 67890</li>
                                    <li className='my-3'><span><FaEnvelope className='me-2' />info@example.com</span></li>
                                </div>
                                <div className='footer_icon mt-2'>
                                    <span className='px-2 me-2 pb-1'><FaTwitter /></span>
                                    <span className='px-2 me-2 pb-1'><FaFacebookF /></span>
                                    <span className='px-2 me-2 pb-1'><FaYoutube /></span>
                                    <span className='px-2  pb-1'><FaLinkedinIn /></span>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12} className='mb-3'>
                            <div className='footer_service'>
                                <h4 className='my-3'>Services</h4>
                                <div className='footer_service_info d-flex align-content-center mb-2'>
                                    <icon className="align-self-center me-2"><FaAngleRight /></icon><font>General Carpentry</font>
                                </div>
                                <div className='footer_service_info d-flex align-content-center mb-2'>
                                    <icon className="align-self-center me-2"><FaAngleRight /></icon><font>Furniture Remodeling</font>
                                </div>
                                <div className='footer_service_info d-flex align-content-center mb-2'>
                                    <icon className="align-self-center me-2"><FaAngleRight /></icon><font>Wooden Floor</font>
                                </div>
                                <div className='footer_service_info d-flex align-content-center mb-2'>
                                    <icon className="align-self-center me-2"><FaAngleRight /></icon><font>Wooden Furniture</font>
                                </div>
                                <div className='footer_service_info d-flex align-content-center '>
                                    <icon className="align-self-center me-2"><FaAngleRight /></icon><font>Custom Carpentry</font>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12} className='mb-3'>
                            <div className='footer_service'>
                                <h4 className='my-3'>Quick Links</h4>
                                <div className='footer_service_info d-flex align-content-center mb-2'>
                                    <icon className="align-self-center me-2"><FaAngleRight /></icon><font>About us</font>
                                </div>
                                <div className='footer_service_info d-flex align-content-center mb-2'>
                                    <icon className="align-self-center me-2"><FaAngleRight /></icon><font>Contact us</font>
                                </div>
                                <div className='footer_service_info d-flex align-content-center mb-2'>
                                    <icon className="align-self-center me-2"><FaAngleRight /></icon><font>Our servicesr</font>
                                </div>
                                <div className='footer_service_info d-flex align-content-center mb-2'>
                                    <icon className="align-self-center me-2"><FaAngleRight /></icon><font>Team & Condition</font>
                                </div>
                                <div className='footer_service_info d-flex align-content-center '>
                                    <icon className="align-self-center me-2"><FaAngleRight /></icon><font>Support</font>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={6} xs={12} className='mb-3'>
                            <div>
                                <h4 className='my-3'>Newsletter</h4>
                                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div className='footer_form'>
                                    <Form>
                                        <Row className='g-0'>
                                            <Col xs={12}>
                                                <Form.Control placeholder="Your Email" className='py-3 pe-5' />
                                            </Col>
                                        </Row>
                                    </Form>
                                    <div className='footer_btn'>
                                        <a href="#">SignUp</a>
                                    </div>
                                </div>

                            </div>
                        </Col>
                    </Row>
                    <Row className='copy_footer py-3 '>
                        <Col lg={6} xs={12} className='text-center text-lg-start'>
                            <div>
                                <span className='me-2'>&#169;</span>
                                <span className='me-2 website_name'>Woody site,</span>
                                <span>All Right Reserved.</span>
                            </div>
                        </Col>
                        <Col lg={6} xs={12} className='text-lg-end text-center'>
                            <div>
                                <span className='me-2'>Designed By</span>
                                <span className='website_name'>HTML codex</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default Footer;