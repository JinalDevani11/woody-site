    import 'bootstrap/dist/css/bootstrap.min.css';
    import './App.css';
    import { Container, Row, Col } from 'react-bootstrap';
import { FaEye, FaLink } from "react-icons/fa6";
function Our_project() {
    return (
        <>
            <Container>
                <Row>
                    <div className='d-flex pt-5 justify-content-center'>
                        <div className='title mt-5'></div>
                        <h1 className='display-6 mb-4 fw-bolder'>Our Projects</h1>
                        <div className='title mt-5'></div>

                    </div>
                    <div className='project_infoline'>
                        <ul className='d-flex justify-content-center list-inline mb-5 '>
                            <li className='mx-2 active_pro'>All</li>
                            <li className='mx-2'>General Carpentry</li>
                            <li className='mx-2'>Custom Carpentry</li>
                        </ul>
                    </div>
                </Row>
                <Row className='mt-2 mb-5'>
                    <Col lg={4} md={6} xs={12} className='px-3 mb-4'>
                        <div className='project'>
                            <div className='project_images'>
                                <img src={require("./image/portfolio-1.jpg")}></img>
                                <div className='layer_project'>
                                    <div className='pro_layer_icon'>
                                        <a href="#" className='pro_icon1'><FaEye /></a>
                                        <a href='#' className='pro_icon2'><FaLink /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='project_imginfo'>
                                <p className='m-0 pb-2 fw-medium'>General Carpentry</p>
                                <h6>Wooden Furniture Manufacturing And Remodeling</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} xs={12} className='px-3 mb-4'>
                        <div className='project'>
                            <div className='project_images'>
                                <img src={require("./image/portfolio-2.jpg")}></img>
                                <div className='layer_project'>
                                    <div className='pro_layer_icon'>
                                        <a href="#" className='pro_icon1'><FaEye /></a>
                                        <a href='#' className='pro_icon2'><FaLink /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='project_imginfo'>
                                <p className='m-0 pb-2 fw-medium'>Custom Carpentry</p>
                                <h6>Wooden Furniture Manufacturing And Remodeling</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} xs={12} className='px-3 mb-4'>
                        <div className='project'>
                            <div className='project_images'>
                                <img src={require("./image/portfolio-3.jpg")}></img>
                                <div className='layer_project'>
                                    <div className='pro_layer_icon'>
                                        <a href="#" className='pro_icon1'><FaEye /></a>
                                        <a href='#' className='pro_icon2'><FaLink /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='project_imginfo'>
                                <p className='m-0 pb-2 fw-medium'>General Carpentry</p>
                                <h6>Wooden Furniture Manufacturing And Remodeling</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} xs={12} className='px-3 mb-4'>
                        <div className='project'>
                            <div className='project_images'>
                                <img src={require("./image/portfolio-4.jpg")}></img>
                                <div className='layer_project'>
                                    <div className='pro_layer_icon'>
                                        <a href="#" className='pro_icon1'><FaEye /></a>
                                        <a href='#' className='pro_icon2'><FaLink /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='project_imginfo'>
                                <p className='m-0 pb-2 fw-medium'>Custom Carpentry</p>
                                <h6>Wooden Furniture Manufacturing And Remodeling</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} xs={12} className='px-3 mb-4'>
                        <div className='project'>
                            <div className='project_images'>
                                <img src={require("./image/portfolio-5.jpg")}></img>
                                <div className='layer_project'>
                                    <div className='pro_layer_icon'>
                                        <a href="#" className='pro_icon1'><FaEye /></a>
                                        <a href='#' className='pro_icon2'><FaLink /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='project_imginfo'>
                                <p className='m-0 pb-2 fw-medium'>General Carpentry</p>
                                <h6>Wooden Furniture Manufacturing And Remodeling</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} xs={12} className='px-3 mb-4'>
                        <div className='project'>
                            <div className='project_images'>
                                <img src={require("./image/portfolio-6.jpg")}></img>
                                <div className='layer_project'>
                                    <div className='pro_layer_icon'>
                                        <a href="#" className='pro_icon1'><FaEye /></a>
                                        <a href='#' className='pro_icon2'><FaLink /></a>
                                    </div>
                                </div>
                            </div>
                            <div className='project_imginfo'>
                                <p className='m-0 pb-2 fw-medium'>Custom Carpentry</p>
                                <h6>Wooden Furniture Manufacturing And Remodeling</h6>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}
export default Our_project;