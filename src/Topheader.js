import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FaLocationDot, FaRegClock, FaPhone, FaFacebookF, FaTwitter,FaLinkedinIn ,FaInstagram } from "react-icons/fa6";
import { Container, Row, Col } from 'react-bootstrap';

function TopHeader() {
    return (
        <>
            {/* =======================top Header start=========================== */}
            <div className="top_header">
                <div className='top_header_bg d-none d-lg-block'>
                    <Container>
                        <Row className='py-2'>
                            <Col className='text-start d-none d-lg-block'>
                                <div className='top_header_info'>
                                    <ul className='d-flex'>
                                        <li className='me-4'><span className='me-2'><FaLocationDot /></span>123 Street, New York, USA</li>
                                        <li><span className='me-2'><FaRegClock /></span>Mon - Fri : 09.00 AM - 09.00 PM</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col className='d-none d-lg-block'>
                                <div className='top_header_icon'>
                                    <ul className='d-flex justify-content-end'>
                                        <li className='me-4'><span><FaPhone /></span>+012 345 6789</li>
                                        <i className='me-1'><icon><FaFacebookF /></icon></i>   
                                        <i className='me-1'><icon><FaTwitter /></icon></i>   
                                        <i className='me-1'><icon><FaLinkedinIn /></icon></i>   
                                        <i><icon><FaInstagram /></icon></i>   
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            {/* =======================top Header end=========================== */}

            
        </>
    );

}
export default TopHeader;