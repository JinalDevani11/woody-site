import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from "./Header";
import TopHeader from "./Topheader";
import Creative from './Creative';
import Aboutus from './About_us';
import Team from './Team';
import Footer from './Footer';

function About() {
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
                                    <h1>About Us</h1>
                                    <span>Home</span>/<span>Page</span>/<span>About</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Creative></Creative>
            <Aboutus></Aboutus>
            <Team></Team>
            <Footer></Footer>
        </>
    );
}
export default About;