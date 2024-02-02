import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import TopHeader from './Topheader';
import Header from './Header';
import Team from './Team';
import Footer from './Footer';
function Team_pg() {
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
                                    <h1>Our Team</h1>
                                    <span>Home</span>/<span>Page</span>/<span>Our Team</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Team></Team>
            <Footer></Footer>
        </>
    )
}
export default Team_pg;