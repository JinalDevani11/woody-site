import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import TopHeader from '../Topheader';
import Header from '../Header';
import Testimonial from '../Testimonial';
import Footer from '../Footer';
function Testimonial_pg() {
    return(
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
                                    <h1>Testimonial</h1>
                                    <span>Home</span>/<span>Page</span>/<span>Testimonial</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </>
    )
}
export default Testimonial_pg;