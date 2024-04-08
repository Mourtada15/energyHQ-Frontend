import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Issues.css";

const Issues = () => {
  return (
    <div className="issues-wrapper">
      <Navbar />
      <Carousel />
      <div className="issues-container">
        <div className="issue-card" >
          <img src="EnergyHQ - january-february 2024 Cover.jpg" alt="" />
          <p>energyHQ March 2024</p>
        </div>

        <div className="issue-card" >
          <img src="EnergyHQ - january-february 2024 Cover.jpg" alt="" />
          <p>energyHQ March 2024</p>
        </div>
        <div className="issue-card" >
          <img src="EnergyHQ - january-february 2024 Cover.jpg" alt="" />
          <p>energyHQ March 2024</p>
        </div>
        <div className="issue-card" >
          <img src="EnergyHQ - january-february 2024 Cover.jpg" alt="" />
          <p>energyHQ March 2024</p>
        </div>
        <div className="issue-card" >
          <img src="EnergyHQ - january-february 2024 Cover.jpg" alt="" />
          <p>energyHQ March 2024</p>
        </div>
        <div className="issue-card" >
          <img src="EnergyHQ - january-february 2024 Cover.jpg" alt="" />
          <p>energyHQ March 2024</p>
        </div>
        <div className="issue-card" >
          <img src="EnergyHQ - january-february 2024 Cover.jpg" alt="" />
          <p>energyHQ March 2024</p>
        </div>
        <div className="issue-card" >
          <img src="EnergyHQ - january-february 2024 Cover.jpg" alt="" />
          <p>energyHQ March 2024</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Issues;