import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheck, FaUserCheck, FaCompassDrafting, FaHeadphonesSimple } from "react-icons/fa6";
function Choose_us() {
    return (
        <>
            <Container fluid className='choose_us'>
                <Row className='g-0 mb-5 '>
                    <Col lg={6} md={12}>
                        <div className='choose_info'>
                            <div className='d-flex'>
                                <h1 className='display-6 mb-4 fw-bolder'>Why Choose Us</h1>
                                <div className='title mt-5'></div>
                            </div>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                        </div>
                        <Row className='choose_icon'>
                            <Col xs={6}>
                                <div className='me-5'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className=' d-flex align-items-center mt-4'>
                                            <FaCheck className='icons_about align-self-start' />
                                            <div className='choose ms-2'>
                                                <p>Quality</p>
                                                <b>Services</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6}>
                            <div className='me-5'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className=' d-flex align-items-center mt-4'>
                                            <FaUserCheck className='icons_about align-self-start' />
                                            <div className='choose ms-2'>
                                                <p>Creative</p>
                                                <b>Designers</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6}>
                            <div className='me-5'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className=' d-flex align-items-center mt-4'>
                                            <FaCompassDrafting className='icons_about align-self-start' />
                                            <div className='choose ms-2'>
                                                <p>Free</p>
                                                <b>Consultation</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={6}>
                            <div className='me-5'>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className=' d-flex align-items-center mt-4'>
                                            <FaHeadphonesSimple className='icons_about align-self-start' />
                                            <div className='choose ms-2'>
                                                <p>Customer</p>
                                                <b>Support</b>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className='about_img'>
                            <img src={require("./image/choose.jpg")}></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Choose_us;