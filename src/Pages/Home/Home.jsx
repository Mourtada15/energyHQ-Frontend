import Carousel from "../../Components/Carousel/Carousel";
import Navbar from "../../Components/Navbar/Navbar";
import "../../App.css";
import Body from "../../Components/Body/Body";
import CPH from "../../Components/CPH/CPH";
import Footer from "../../Components/Footer/Footer";
import CarouselSide from "../../Components/CarouselSide/CarouselSide";

const Home = () => {

    return (
        <div className="App">
            <Navbar />
            <Carousel />
            <div class="background-container">
                <div>
                    <h1><span className="empowering">Empowering</span> The World!</h1>
                    <p>Serving the natural gas, petroleum, coal, nuclear and renewable sectors <b>| Since 2023</b></p>
                </div>
            </div>
            <div className="carousel-side-align" >
                <Body />
                <CarouselSide />
            </div>
            <CPH />

            <Footer />
        </div>
    );
}

export default Home;