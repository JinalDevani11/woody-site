import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
function Free_Quote() {
    return (
        <>
            <Container fluid className='px-0'>
                <Row className='g-0 quote_sec mb-5'>
                    <Col lg={6} md={12}>
                        <div>
                            <img src={require("./image/quote.jpg")}></img>
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className='free_quote'>
                            <div className='d-flex pt-5'>
                                <h1 className='display-6 mb-4 fw-bolder'>Free Quote</h1>
                                <div className='title mt-5'></div>
                            </div>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet</p>
                            <Form>
                                <Row>
                                    <Col md={6} xs={12} className='mb-3'>
                                        <Form.Control placeholder="Your Name" className='py-3' />
                                    </Col>
                                    <Col md={6} xs={12} className='mb-3'>
                                        <Form.Control placeholder="Your Email" className='py-3' />
                                    </Col>
                                    <Col md={6} xs={12} className='mb-3'>
                                        <Form.Control placeholder="Your Mobile" className='py-3' />
                                    </Col>
                                    <Col md={6} xs={12} className='mb-3'>
                                        <Form.Select defaultValue="Select A service" className='py-3'>
                                            <option>Select A service</option>
                                            <option>service 1</option>
                                            <option>service 2</option>
                                            <option>service 3</option>
                                        </Form.Select>
                                    </Col>
                                    <Col xs={12} className='mb-3'>
                                        <Form.Control placeholder="Special Note" className='py-3' />
                                    </Col>
                                </Row>
                            </Form>
                            <div className='submit_btn mt-3 text-center'> 
                                <a href="#">Submit</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Free_Quote;