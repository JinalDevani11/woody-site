import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import TopHeader from './Topheader';
import Header from './Header';
import Choose_us from './Chosee_us';
import Footer from './Footer';
function Feature() {
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
                                    <h1>Feature</h1>
                                    <span>Home</span>/<span>Page</span>/<span>Feature</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Choose_us></Choose_us>
            <Footer></Footer>
        </>
    )
}
export default Feature;