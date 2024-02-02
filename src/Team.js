import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

function Team() {
    return (
        <>
            <Container>
                <Row>
                    <div className='d-flex pt-5 justify-content-center pb-3'>
                        <div className='title mt-5'></div>
                        <h1 className='display-6 mb-4 fw-bolder'>Team Members</h1>
                        <div className='title mt-5'></div>

                    </div>
                </Row>
                <Row className='mb-5'>
                    <Col lg={3} md={6} xs={12}>
                        <div className='me-2 team_member'>
                            <div className='team_img'>
                                <img src={require("./image/team-1.jpg")}></img>
                                <div className='team_icon'>
                                    <div className='team_icon_side'><FaFacebookF /></div>
                                    <div className='team_icon_side'><FaTwitter /></div>
                                    <div className='team_icon_side'><FaInstagram /></div>
                                </div>
                            </div>
                            <div className='team_info text-center'>
                                <h5 className='pt-3 mb-0'>Full Name</h5>
                                <p className='mt-0 mb-3'>Designation</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} xs={12}>
                        <div className='me-2 team_member'>
                            <div className='team_img'>
                                <img src={require("./image/team-2.jpg")}></img>
                                <div className='team_icon'>
                                    <div className='team_icon_side'><FaFacebookF /></div>
                                    <div className='team_icon_side'><FaTwitter /></div>
                                    <div className='team_icon_side'><FaInstagram /></div>
                                </div>
                            </div>
                            <div className='team_info text-center'>
                                <h5 className='pt-3 mb-0'>Full Name</h5>
                                <p className='mt-0 mb-3'>Designation</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} xs={12}>
                        <div className='me-2 team_member'>
                            <div className='team_img'>
                                <img src={require("./image/team-3.jpg")}></img>
                                <div className='team_icon'>
                                    <div className='team_icon_side'><FaFacebookF /></div>
                                    <div className='team_icon_side'><FaTwitter /></div>
                                    <div className='team_icon_side'><FaInstagram /></div>
                                </div>
                            </div>
                            <div className='team_info text-center'>
                                <h5 className='pt-3 mb-0'>Full Name</h5>
                                <p className='mt-0 mb-3'>Designation</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={3} md={6} xs={12}>
                        <div className='me-2 team_member'>
                            <div className='team_img'>
                                <img src={require("./image/team-4.jpg")}></img>
                                <div className='team_icon'>
                                    <div className='team_icon_side'><FaFacebookF /></div>
                                    <div className='team_icon_side'><FaTwitter /></div>
                                    <div className='team_icon_side'><FaInstagram /></div>
                                </div>
                            </div>
                            <div className='team_info text-center'>
                                <h5 className='pt-3 mb-0'>Full Name</h5>
                                <p className='mt-0 mb-3'>Designation</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Team;