import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUsers, FaCheck } from "react-icons/fa6";

function Aboutus() {
    return (
        <>
            <Container fluid className='px-0'>
                <Row className='g-0 about_info'>
                    <Col lg={6} md={12}>
                        <div className='about_img'>
                            <img src={require("./image/about.jpg")}></img>
                        </div>
                    </Col>
                    <Col lg={6} md={12} className='ps-5 pt-5'>
                        <div>
                            <div className='d-flex pt-5'>
                                <h1 className='display-6 mb-4 fw-bolder'>About Us</h1>
                                <div className='title mt-5'></div>
                            </div>
                            <p className='about_P'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                            <Row className='g-0'>
                                <Col lg={6} xs={12}>
                                    <div className='me-5'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className=' d-flex align-items-center mt-4'>
                                                <FaUsers className='icons_about align-self-start' />
                                                <div className=' about_1234 ms-2'>
                                                    <h5>1234</h5>
                                                    <p>Happy clients</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6} xs={12}>
                                    <div className='me-5'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div className=' d-flex align-items-center mt-4'>
                                                <FaCheck className='icons_about align-self-start' />
                                                <div className=' about_1234 ms-2'>
                                                    <h5>1234</h5>
                                                    <p>Projects Done</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <div className='theme_btn mt-5'>
                                <a href="#">Explore More</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Aboutus;