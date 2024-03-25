import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./FooterPage.css";

const Footer = () => {
  return (
    <footer id="footerPage">
      <div className="container">
        <div className="row">
          <div
            className="footer-col"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <h4>Art Times</h4>
            <ul>
              <li>
                <a href="#beranda">homepage</a>
              </li>
              <li>
                <a href="#tentang">about us</a>
              </li>
              <li>
                <a href="#produk">product</a>
              </li>
              <li>
                <a href="#hubungi">contact</a>
              </li>
            </ul>
          </div>
          <div
            className="footer-col"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            {/* eslint-disable-next-line */}
            <h4>contact me</h4>
            <div className="social-links">
              <a href="https://github.com/Xfhreall" target="blank">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/risqi-fahreal-a2b7a4289/"
                target="blank"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="https://instagram.com/arfah.real_" target="blank">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://wa.me/6289643657149" target="blank">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
