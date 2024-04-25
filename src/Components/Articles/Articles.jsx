import "./Articles.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Carousel from "../Carousel/Carousel";

const Articles = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="articles-wrapper">
        <div className="articles-container-left">
          <h1 >This is Going to Be the Title of the Article </h1>
          <h5>Renewable Energy</h5>
          <p>April 24, 2024</p>
          <img src="test.jpg" alt="" /> <br /><br />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum reiciendis ut iure, odit repellat voluptas veniam optio ea magni, illum sed, incidunt a illo sint? Excepturi maxime similique ex accusamus!
            At nobis officiis aut sed molestiae, in commodi. Totam iste, dicta dignissimos mollitia qui, placeat earum sapiente ab obcaecati quibusdam unde expedita labore corrupti, nisi asperiores. Cum asperiores excepturi non!
            Veritatis nulla, accusamus libero nisi, voluptatem nemo enim officia error molestias tempora necessitatibus? Nesciunt blanditiis consequatur sed voluptates, amet quidem aliquid suscipit praesentium nemo dolorem fugit eum! Rem, inventore illo.
            Eaque, facere ratione omnis mollitia non nulla id perspiciatis ex soluta velit reiciendis, asperiores doloribus aspernatur cumque sequi repellat. Id hic minima veritatis, libero accusantium illo sint. Alias, sed optio.
            Sed maxime facilis veniam accusamus consequatur, corporis quo incidunt harum optio, <br /><br /> expedita tenetur amet ab ipsam tempore ex nobis deserunt repellendus modi fuga enim quasi. Inventore ea ut assumenda labore.
            Veritatis dicta, aut expedita voluptate amet ex tempora aliquid accusantium soluta inventore aliquam doloremque itaque neque quibusdam, optio cum laborum libero, iste mollitia tenetur. Consequatur amet tempore nisi similique enim?
            Ratione atque veniam esse mollitia laudantium? Cum eaque unde sed velit animi id consequatur commodi consectetur praesentium, laudantium minima provident, doloremque hic expedita quisquam laborum aliquid eveniet laboriosam. Iure, possimus!
            Voluptate soluta adipisci facere, id ratione et quia quam harum autem officiis velit quis <br /><br />neque tempora ipsum accusantium ipsam sunt porro excepturi ab natus dicta qui praesentium modi hic? Ipsa?
            Fugit nulla deleniti unde exercitationem est earum praesentium! Quaerat minima culpa ratione, sapiente illum tenetur explicabo quae temporibus asperiores ipsa fugit inventore assumenda dolorum quos sit perferendis magnam, laborum reprehenderit.
            Neque id beatae fugiat non. Dolorem quo illum, est provident voluptates quia dolore quidem sit, optio quibusdam corrupti reprehenderit distinctio aspernatur, sint possimus dolorum! Quidem accusantium repellendus delectus vel vitae.</p>

          <p><b>Source:</b> This is the source of the article  </p>
          <a href="www.waterhq.world">www.waterhq.world</a>
        </div>
        <div className="articles-container-right">
          <h4>Related Articles</h4>
          <div className="related-article">
            <img src="test.jpg" alt="" />
            <h5>Related article title</h5>
          </div>
          <div className="related-article">
            <img src="test.jpg" alt="" />
            <h5>Related article title</h5>
          </div>
          <div className="related-article">
            <img src="test.jpg" alt="" />
            <h5>Related article title</h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Articles;