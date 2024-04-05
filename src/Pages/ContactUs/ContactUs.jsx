import Carousel from "../../Components/Carousel/Carousel";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper" >
      <Navbar />
      <Carousel />
      <div>
        <div className="contact-us-one" >
          <div>
            <h1>Contact us</h1>
            <h4>Have a question? We're here to help.</h4>
          </div>
          <form className="contact-us-form" >
            <h4>Get in touch with energyHQ team</h4>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="8" placeholder="Your Message"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d348.11238484917016!2d35.47969174616432!3d33.8942430156186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f172b5bfcb549%3A0x14f6a78785d70dcb!2sCPH%20World%20Media!5e0!3m2!1sen!2slb!4v1669726809621!5m2!1sen!2slb" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <p className="contact-us-address" >
        CPH WORLD MEDIA (L.L.C.)<br />
        Hamra, Commodore, Barouk ST,<br />
        Chatila Building, 2nd Floor<br />
        P.O.BOX: 13-5121 Chouran<br />
        Postal Code: 1102-2802<br />
        Beirut – Lebanon<br /><br />

        +961-1-748333<br /><br />

        Working Hours: From 9:00 AM To 3:00 PM Beirut Time
      </p>
      <Footer />
    </div>
  );
}

export default ContactUs;