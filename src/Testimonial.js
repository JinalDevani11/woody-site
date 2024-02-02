import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function Testimonial() {
    const testimonial = {
        responsive:{
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        }
    }
    return (
        <>
            <Container>
                <Row>
                    <div className='d-flex pt-5 justify-content-center'>
                        <div className='title mt-5'></div>
                        <h1 className='display-6 mb-4 fw-bolder'>Testimonial</h1>
                        <div className='title mt-5'></div>

                    </div>
                </Row>
                <Row className='mb-5'>
                    <Col>
                        <OwlCarousel className='owl-theme' id="#testimonial" loop margin={10} nav={false} dots={false} autoplay={true} autoplayTimeout={3000} autoplaySpeed={1500} {...testimonial}>
                            <div class='item testi_main mx-4'>
                                <div class="testi_item mt-3">
                                    <div class="testi_pro_img mb-3">
                                        <img src={require("./image/testimonial-1.jpg")}></img>
                                    </div>
                                    <div className='client_review'>
                                        <p className='mb-3 text-center'>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed .</p>
                                        <h5 className='text-center'>Client Name</h5>
                                        <span className='fst-italic mb-3'>Profession</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item testi_main mx-4'>
                                <div class="testi_item mt-3">
                                    <div class="testi_pro_img mb-3">
                                        <img src={require("./image/testimonial-2.jpg")}></img>
                                    </div>
                                    <div className='client_review'>
                                        <p className='mb-3 text-center'>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed .</p>
                                        <h5 className='text-center'>Client Name</h5>
                                        <span className='fst-italic mb-3'>Profession</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item testi_main mx-4'>
                                <div class="testi_item mt-3">
                                    <div class="testi_pro_img mb-3">
                                        <img src={require("./image/testimonial-3.jpg")}></img>
                                    </div>
                                    <div className='client_review'>
                                        <p className='mb-3 text-center'>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed .</p>
                                        <h5 className='text-center'>Client Name</h5>
                                        <span className='fst-italic mb-3'>Profession</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item testi_main mx-4'>
                                <div class="testi_item mt-3">
                                    <div class="testi_pro_img mb-3">
                                        <img src={require("./image/testimonial-1.jpg")}></img>
                                    </div>
                                    <div className='client_review'>
                                        <p className='mb-3 text-center'>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed .</p>
                                        <h5 className='text-center'>Client Name</h5>
                                        <span className='fst-italic mb-3'>Profession</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item testi_main mx-4'>
                                <div class="testi_item mt-3">
                                    <div class="testi_pro_img mb-3">
                                        <img src={require("./image/testimonial-2.jpg")}></img>
                                    </div>
                                    <div className='client_review'>
                                        <p className='mb-3 text-center'>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed .</p>
                                        <h5 className='text-center'>Client Name</h5>
                                        <span className='fst-italic mb-3'>Profession</span>
                                    </div>
                                </div>
                            </div>
                            <div class='item testi_main mx-4'>
                                <div class="testi_item mt-3">
                                    <div class="testi_pro_img mb-3">
                                        <img src={require("./image/testimonial-3.jpg")}></img>
                                    </div>
                                    <div className='client_review'>
                                        <p className='mb-3 text-center'>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed .</p>
                                        <h5 className='text-center'>Client Name</h5>
                                        <span className='fst-italic mb-3'>Profession</span>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Testimonial;