import "./Footer.css";

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div>
                    <h5 className="footer-about-us-header"><b>About Us</b></h5>
                    <ul className="footer-about-us">
                        <li><a href="#">About energyHQ</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>

                <div className="footer-social" >
                    <h5><b>Stay Connected</b></h5>
                    <div className="footer-social-icons">
                        <a href="https://www.linkedin.com/company/energyhq/" target="_blank"><img src="linkedin.png" alt="icon" /></a>
                        <a href="https://twitter.com/1energyHQ/" target="_blank"><img src="twitter.png" alt="icon" /></a>
                        <a href="https://www.facebook.com/1energyhq/" target="_blank"><img src="facebook.png" alt="icon" /></a>
                        <a href="https://www.instagram.com/1energyhq/" target="_blank"><img src="instagram.png" alt="icon" /></a>
                        <a href="https://www.youtube.com/@1energyHQ" target="_blank"><img src="youtube.png" alt="icon" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;