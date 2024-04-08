import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./Sectors.css";

const Sectors = () => {
    return (
        <div className="outer-wrapper" >
            <Navbar />
            <Carousel />
            <div className="sectors-wrapper">
                <h2>Renewabale Energy</h2>
                <div className="inner-latest-news-wrapper" >
                    <div className="latest-news" >
                        <img src="test.jpg" alt="" />
                        <div>
                            <h4>Header test</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam nesciunt nisi repudiandae magnam! Voluptate rem, eius eveniet blanditiis et totam earum quos laudantium laboriosam consectetur? Iusto nemo minus consequatur!
                                Minima omnis voluptates cum, officia repudiandae laudantium exercitationem repellendus facilis placeat excepturi? Vero, odio optio mollitia consequatur aliquid cupiditate at temporibus architecto quisquam nesciunt fugit aliquam maiores dolorum, illum aperiam?</p>
                            <button>Read more</button>
                        </div>
                    </div>

                    <div className="latest-news" >
                        <img src="test.jpg" alt="" />
                        <div>
                            <h4>Header test</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam nesciunt nisi repudiandae magnam! Voluptate rem, eius eveniet blanditiis et totam earum quos laudantium laboriosam consectetur? Iusto nemo minus consequatur!
                                Minima omnis voluptates cum, officia repudiandae laudantium exercitationem repellendus facilis placeat excepturi? Vero, odio optio mollitia consequatur aliquid cupiditate at temporibus architecto quisquam nesciunt fugit aliquam maiores dolorum, illum aperiam?</p>
                            <button>Read more</button>
                        </div>
                    </div>

                    <div className="latest-news" >
                        <img src="test.jpg" alt="" />
                        <div>
                            <h4>Header test</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam nesciunt nisi repudiandae magnam! Voluptate rem, eius eveniet blanditiis et totam earum quos laudantium laboriosam consectetur? Iusto nemo minus consequatur!
                                Minima omnis voluptates cum, officia repudiandae laudantium exercitationem repellendus facilis placeat excepturi? Vero, odio optio mollitia consequatur aliquid cupiditate at temporibus architecto quisquam nesciunt fugit aliquam maiores dolorum, illum aperiam?</p>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="sectors-wrapper">
                <h2>Oil & Gas</h2>
                <div className="inner-latest-news-wrapper" >
                    <div className="latest-news" >
                        <img src="test.jpg" alt="" />
                        <div>
                            <h4>Header test</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam nesciunt nisi repudiandae magnam! Voluptate rem, eius eveniet blanditiis et totam earum quos laudantium laboriosam consectetur? Iusto nemo minus consequatur!
                                Minima omnis voluptates cum, officia repudiandae laudantium exercitationem repellendus facilis placeat excepturi? Vero, odio optio mollitia consequatur aliquid cupiditate at temporibus architecto quisquam nesciunt fugit aliquam maiores dolorum, illum aperiam?</p>
                            <button>Read more</button>
                        </div>
                    </div>

                    <div className="latest-news" >
                        <img src="test.jpg" alt="" />
                        <div>
                            <h4>Header test</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam nesciunt nisi repudiandae magnam! Voluptate rem, eius eveniet blanditiis et totam earum quos laudantium laboriosam consectetur? Iusto nemo minus consequatur!
                                Minima omnis voluptates cum, officia repudiandae laudantium exercitationem repellendus facilis placeat excepturi? Vero, odio optio mollitia consequatur aliquid cupiditate at temporibus architecto quisquam nesciunt fugit aliquam maiores dolorum, illum aperiam?</p>
                            <button>Read more</button>
                        </div>
                    </div>

                    <div className="latest-news" >
                        <img src="test.jpg" alt="" />
                        <div>
                            <h4>Header test</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam nesciunt nisi repudiandae magnam! Voluptate rem, eius eveniet blanditiis et totam earum quos laudantium laboriosam consectetur? Iusto nemo minus consequatur!
                                Minima omnis voluptates cum, officia repudiandae laudantium exercitationem repellendus facilis placeat excepturi? Vero, odio optio mollitia consequatur aliquid cupiditate at temporibus architecto quisquam nesciunt fugit aliquam maiores dolorum, illum aperiam?</p>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Sectors;