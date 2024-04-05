import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Issues.css";

const Issues = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="issues-container">
        <div className="issue-card" >
          <img src="EnergyHQ - january-february 2024 Cover.jpg" alt="" />
          <h6>energyHQ March 2024</h6>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Issues;