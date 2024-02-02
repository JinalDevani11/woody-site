import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import TopHeader from './Topheader';
import Header from './Header';
import Free_Quote from './Free_Quote';
import Footer from './Footer';
function Free_Quote_pg() {
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
                                    <h1>Free Quote</h1>
                                    <span>Home</span>/<span>Page</span>/<span>Free-Quote</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Free_Quote></Free_Quote>
            <Footer></Footer>
        </>
    )
}
export default Free_Quote_pg;