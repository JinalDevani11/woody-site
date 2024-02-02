import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { BsExclamationTriangle } from "react-icons/bs";
import TopHeader from './Topheader';
import Header from './Header';
import Footer from './Footer';
function Pg_404() {
    return (
        <>
            <TopHeader></TopHeader>
            <Header></Header>
            <Container fluid>
                <Row className='mb-5'>
                    <Col className='g-0'>
                        <div className='about_pg_img'>
                            <img src={require("./image/abouts.jpg")} className='w-100'></img>
                            <div className='about_pg_layer'>
                                <div className='about_pg_layer_info'>
                                    <h1>404 Error</h1>
                                    <span>Home</span>/<span>Page</span>/<span>404 Error</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mb-5">
                    <Col lg={6}>
                        <div className='text-center '>
                            <span className='icon_404'><BsExclamationTriangle /></span>
                            <h1 className="display-1 fw-bolder">404</h1>
                            <h1 className="fw-bold">Page Not Found</h1>
                            <p className="px-5">We're sorry, the page you have looked for does not exist in our website!Maybe go to our home page or try to use a search?</p>
                            <div className='btn_404_a'>
                                <a  href="#" className="mt-3 btn_404">Go Back to Home</a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    )
}
export default Pg_404;