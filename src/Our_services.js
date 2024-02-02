import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
function Our_service() {
    return (
        <>
            <Container>
                <Row>
                    <div className='d-flex pt-5 justify-content-center'>
                        <div className='title mt-5'></div>
                        <h1 className='display-6 mb-4 fw-bolder'>Our Services</h1>
                        <div className='title mt-5'></div>
                    </div>
                </Row>
                <Row className='mt-4 mb-5'>
                    <Col lg={4} md={6} xs={12} className='px-2 mb-3'>
                        <div className='service_sec'>
                            <div className='service_img'>
                                <img src={require("./image/service-1.jpg")}></img>
                            </div>
                            <div className='service_info'>
                                <h5 className='mb-3 pt-3'>General Carpentry</h5>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam</p>
                                <div className='service_read'>
                                    <a href="#" className='mb-4'>Read More<span className='ps-2'><FaArrowRight /></span></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} xs={12} className='px-2 mb-3'>
                        <div className='service_sec'>
                            <div className='service_img'>
                                <img src={require("./image/service-2.jpg")}></img>
                            </div>
                            <div className='service_info'>
                                <h5 className='mb-3 pt-3'>Furniture Manufacturing</h5>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam</p>
                                <div className='service_read'>
                                    <a href="#" className='mb-4'>Read More<span className='ps-2'><FaArrowRight /></span></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} xs={12} className='px-2 mb-3'>
                        <div className='service_sec'>
                            <div className='service_img'>
                                <img src={require("./image/service-3.jpg")}></img>
                            </div>
                            <div className='service_info'>
                                <h5 className='mb-3 pt-3'>Furniture Remodeling</h5>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam</p>
                                <div className='service_read'>
                                    <a href="#" className='mb-4'>Read More<span className='ps-2'><FaArrowRight /></span></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} xs={12} className='px-2 mb-3'>
                        <div className='service_sec'>
                            <div className='service_img'>
                                <img src={require("./image/service-4.jpg")}></img>
                            </div>
                            <div className='service_info'>
                                <h5 className='mb-3 pt-3'>Wooden Floor</h5>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam</p>
                                <div className='service_read'>
                                    <a href="#" className='mb-4'>Read More<span className='ps-2'><FaArrowRight /></span></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} xs={12} className='px-2 mb-3'>
                        <div className='service_sec'>
                            <div className='service_img'>
                                <img src={require("./image/service-5.jpg")}></img>
                            </div>
                            <div className='service_info'>
                                <h5 className='mb-3 pt-3'>Wooden Furniture</h5>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam</p>
                                <div className='service_read'>
                                    <a href="#" className='mb-4'>Read More<span className='ps-2'><FaArrowRight /></span></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} xs={12} className='px-2 mb-3'>
                        <div className='service_sec'>
                            <div className='service_img'>
                                <img src={require("./image/service-6.jpg")}></img>
                            </div>
                            <div className='service_info'>
                                <h5 className='mb-3 pt-3'>Custom Work</h5>
                                <p>Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem diam</p>
                                <div className='service_read'>
                                    <a href="#" className='mb-4'>Read More<span className='ps-2'><FaArrowRight /></span></a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Our_service;