import TopHeader from "./Topheader";
import Header from "./Header";
import Slider from "./Slider";
import Creative from "./Creative";
import Aboutus from "./About_us";
import Our_service from "./Our_services";
import Choose_us from "./Chosee_us";
import Our_project from "./Our_project";
import Free_Quote from "./Free_Quote";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Footer from "./Footer";


function Home() {
    return(
        <>
            <TopHeader></TopHeader>
            <Header></Header>
            <Slider></Slider>
            <Creative></Creative>
            <Aboutus></Aboutus>
            <Our_service></Our_service>
            <Choose_us></Choose_us>
            <Our_project></Our_project>
            <Free_Quote></Free_Quote>
            <Team></Team>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </>
    );
}
export default Home;