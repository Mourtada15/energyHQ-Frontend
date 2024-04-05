import "./CarouselSide.css"

const CarouselSide = () => {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide carousel-slide" data-bs-ride="carousel" data-bs-interval="8000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="Website skyscraper.png" className="h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="Website skyscraper.png" className="h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="Website skyscraper.png" className="h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="Website skyscraper.png" className="h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="Website skyscraper.png" className="h-100" alt="..." />
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

export default CarouselSide;