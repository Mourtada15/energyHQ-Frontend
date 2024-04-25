import "./Body.css";
import { Link } from "react-router-dom";

const Body = () => {
    return (
        <div className="body-wrapper">
            <h2>Latest News</h2>
            <div className="inner-latest-news-wrapper" >
                <div className="latest-news" >
                    <img src="test.jpg" alt="" />
                    <div>
                        <h4>Header test</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam nesciunt nisi repudiandae magnam! Voluptate rem, eius eveniet blanditiis et totam earum quos laudantium laboriosam consectetur? Iusto nemo minus consequatur!
                            Minima omnis voluptates cum, officia repudiandae laudantium exercitationem repellendus facilis placeat excepturi? Vero, odio optio mollitia consequatur aliquid cupiditate at temporibus architecto quisquam nesciunt fugit aliquam maiores dolorum, illum aperiam?</p>
                        <Link to="./articles"><button>Read more</button></Link>
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
    );
}

export default Body;