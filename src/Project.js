import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import TopHeader from './Topheader';
import Header from './Header';
import Our_project from './Our_project';
import Footer from './Footer';
function Project() {
    return(
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
                                    <h1>Project</h1>
                                    <span>Home</span>/<span>Page</span>/<span>Project</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Our_project></Our_project>
            <Footer></Footer>
        </>
    )
}
export default Project;