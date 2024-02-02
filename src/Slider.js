import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Row, Col, Container } from 'react-bootstrap';


function Slider() {
    return (
        <>

            <OwlCarousel className='owl-theme' id="main_slider" loop margin={10} nav dots={false} items={1} autoplay={true} autoplayTimeout={3000} autoplaySpeed={1500}>
                <div class='item'>
                    <div className='main_slider'>
                        <img src={require("./image/carousel-1.jpg")}></img>
                        <div className='slider_layer'>
                            <div className='main_slider_info'>
                                <h5>WELCOME TO WOODY</h5>
                                <h1>Best Carpenter & Craftsman Services</h1>
                                <p className='fs-5 fw-medium text-white mb-4 pb-2'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="#" className='btn btn-read  me-3'> Read More</a>
                                <a href="#" className='btn btn-free'>Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div className='main_slider'>
                        <img src={require("./image/carousel-2.jpg")}></img>
                        <div className='slider_layer'>
                            <div className='main_slider_info'>
                                <h5>WELCOME TO WOODY</h5>
                                <h1>Best Carpenter & Craftsman Services</h1>
                                <p className='fs-5 fw-medium text-white mb-4 pb-2'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="#" className='btn btn-read  me-3'> Read More</a>
                                <a href="#" className='btn btn-free'>Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div className='main_slider'>
                        <img src={require("./image/carousel-3.jpg")}></img>
                        <div className='slider_layer'>
                            <div className='main_slider_info'>
                                <h5>WELCOME TO WOODY</h5>
                                <h1>Best Carpenter & Craftsman Services</h1>
                                <p className='fs-5 fw-medium text-white mb-4 pb-2'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="#" className='btn btn-read  me-3'> Read More</a>
                                <a href="#" className='btn btn-free'>Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div className='main_slider'>
                        <img src={require("./image/carousel-1.jpg")}></img>
                        <div className='slider_layer'>
                            <div className='main_slider_info'>
                                <h5>WELCOME TO WOODY</h5>
                                <h1>Best Carpenter & Craftsman Services</h1>
                                <p className='fs-5 fw-medium text-white mb-4 pb-2'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="#" className='btn btn-read  me-3'> Read More</a>
                                <a href="#" className='btn btn-free'>Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div className='main_slider'>
                        <img src={require("./image/carousel-2.jpg")}></img>
                        <div className='slider_layer'>
                            <div className='main_slider_info'>
                                <h5>WELCOME TO WOODY</h5>
                                <h1>Best Carpenter & Craftsman Services</h1>
                                <p className='fs-5 fw-medium text-white mb-4 pb-2'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="#" className='btn btn-read  me-3'> Read More</a>
                                <a href="#" className='btn btn-free'>Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='item'>
                    <div className='main_slider'>
                        <img src={require("./image/carousel-3.jpg")}></img>
                        <div className='slider_layer'>
                            <div className='main_slider_info'>
                                <h5>WELCOME TO WOODY</h5>
                                <h1>Best Carpenter & Craftsman Services</h1>
                                <p className='fs-5 fw-medium text-white mb-4 pb-2'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                <a href="#" className='btn btn-read  me-3'> Read More</a>
                                <a href="#" className='btn btn-free'>Free Quote</a>
                            </div>
                        </div>
                    </div>
                </div>

            </OwlCarousel>
            {/* <OwlCarousel className='owl-theme main_slider' id="main_slider" loop margin={0} nav items={1} dots={false} autoplay={1000}>
                <div class='item'>
                    <img src={require("./image/carousel-1.jpg")}></img>
                    <div className='slider_layer align-items-center container'>
                        <Row className=' slider_of_info g-0'>
                            <Col className='text-center '>
                                <div className='mt-5 welcome_slider' >
                                    <h5 className='text-white text-uppercase mb-3'>Welcome To WooDY</h5>
                                    <h1 className='text-white mb-4'>Best Carpenter & Craftsman Services</h1>
                                  
                                  
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div class='item'>
                    <img src={require("./image/carousel-2.jpg")}></img>
                    <div className='slider_layer align-items-center container'>
                        <Row className=' slider_of_info g-0'>
                            <Col className='text-center '>
                                <div className='mt-5 welcome_slider' >
                                    <h5 className='text-white text-uppercase mb-3'>Welcome To WooDY</h5>
                                    <h1 className='text-white mb-4'>Best Carpenter & Craftsman Services</h1>
                                    <p className='fs-5 fw-medium text-white mb-4 pb-2'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="#" className='btn btn-read  me-3'> Read More</a>
                                    <a href="#" className='btn btn-free'>Free Quote</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div class='item'>
                    <img src={require("./image/carousel-3.jpg")}></img>
                    <div className='slider_layer align-items-center container'>
                        <Row className=' slider_of_info g-0'>
                            <Col className='text-center '>
                                <div className='mt-5 welcome_slider' >
                                    <h5 className='text-white text-uppercase mb-3'>Welcome To WooDY</h5>
                                    <h1 className='text-white mb-4'>Best Carpenter & Craftsman Services</h1>
                                    <p className='fs-5 fw-medium text-white mb-4 pb-2'>Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="#" className='btn btn-read  me-3'> Read More</a>
                                    <a href="#" className='btn btn-free'>Free Quote</a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </OwlCarousel> */}

        </>
    );
}
export default Slider;