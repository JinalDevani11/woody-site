import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import TopHeader from './Topheader';
import Header from './Header';
import Our_service from './Our_services';
import Free_Quote from './Free_Quote';
import Testimonial from './Testimonial';
import Footer from './Footer';
function Services() {
    return (
        <>
            <TopHeader></TopHeader>
            <Header></Header>
            <Container fluid>
                <Row >
                    <Col className='g-0'>
                        <div className='about_pg_img'>
                            <img src={require("./image/abouts.jpg")} className='w-100'></img>
                            <div className='about_pg_layer'>
                                <div className='about_pg_layer_info'>
                                    <h1>Service</h1>
                                    <span>Home</span>/<span>Page</span>/<span>Service</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Our_service></Our_service>
            <Free_Quote></Free_Quote>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </>
    )
}
export default Services;