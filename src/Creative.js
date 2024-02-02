import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUserCheck, FaCheck, FaCompassDrafting, FaHeadphonesSimple } from "react-icons/fa6";


function Creative() {
    return (
        <>
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col  lg={3} md={6} >
                        <div>
                            <div className='d-flex justify-content-between align-items-center pe-5'>
                                <div className='align-items-center'>
                                    <FaUserCheck className='icons_cre' />
                                </div>
                                <div className='cre_font '>01</div>
                            </div>
                            <h5>Creative Designers</h5>

                        </div>
                    </Col>
                    <Col  lg={3} md={6}>
                        <div>
                            <div className='d-flex justify-content-between align-items-center pe-5'>
                                <div className='align-items-center'>
                                    <FaCheck className='icons_cre' />
                                </div>
                                <div className='cre_font '>02</div>
                            </div>
                            <h5>Quality Products</h5>
                        </div>
                    </Col>
                    <Col  lg={3} md={6}>
                        <div>
                            <div className='d-flex justify-content-between align-items-center pe-5'>
                                <div className='align-items-center'>
                                    <FaCompassDrafting className='icons_cre' />
                                </div>
                                <div className='cre_font '>03</div>
                            </div>
                            <h5>Free Consultation</h5>
                        </div>
                    </Col>
                    <Col lg={3} md={6}>
                        <div>
                            <div className='d-flex justify-content-between align-items-center pe-5'>
                                <div className='align-items-center'>
                                    <FaHeadphonesSimple className='icons_cre' />
                                </div>
                                <div className='cre_font '>04</div>
                            </div>
                            <h5>Customer Support</h5>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    );
}
export default Creative;