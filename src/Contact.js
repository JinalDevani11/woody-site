import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import TopHeader from './Topheader';
import Header from './Header';
import Footer from './Footer';
function Contact() {
    return (
        <>
            <TopHeader></TopHeader>
            <Header></Header>
            <div className='Contact_pg_bg_color mb-5'>
                <Container fluid>
                    <Row>
                        <Col lg={6} md={12}>
                            <div className='Contact_info'>
                                <div className='d-flex pt-5'>
                                    <h1 className='display-6 mb-4 fw-bolder'>Contact Us</h1>
                                    <div className='title mt-5'></div>
                                </div>
                                <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done.</p>
                                <Form>
                                    <Row>
                                        <Col md={6} xs={12} className='mb-3'>
                                            <Form.Control placeholder="Your Name" className='py-3' />
                                        </Col>
                                        <Col md={6} xs={12} className='mb-3'>
                                            <Form.Control placeholder="Your Email" className='py-3' />
                                        </Col>
                                        <Col xs={12} className='mb-3'>
                                            <Form.Control placeholder="Subject" className='py-3' />
                                        </Col>
                                        <Col xs={12} className='mb-3'>
                                            <Form.Control placeholder="Special Note" className='py-4' />
                                        </Col>
                                    </Row>
                                </Form>
                                <div className='submit_btn mt-3 text-center'>
                                    <a href="#">Send Message</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} xs={12}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" height={600} width="100%"></iframe>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer></Footer>
        </>
    )
}
export default Contact;