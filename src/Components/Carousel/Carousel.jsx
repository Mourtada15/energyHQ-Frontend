import "./Carousel.css"

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel banner-carousel slide" data-bs-ride="carousel" data-bs-interval="8000">
        <div className="carousel-inner" data-aos="fade-right">
          <div className="carousel-item active">
            <img src="Website Leaderboard.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="Website Leaderboard.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="Website Leaderboard.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="Website Leaderboard.png" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="Website Leaderboard.png" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;