import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h6>Coffee-brew</h6>
            <p>Feel free to awaken Your Senses with our Coffee-Brew.</p>
          </div>
          <div className="col">
            <h6>Quick Links</h6>
            <div className="footer-links">
              <RouterLink to="/coffee">Menu</RouterLink>
              <ScrollLink
                to="subscribe"
                spy={true}
                smooth={true}
                duration={200}
                style={{cursor:'pointer'}}
              >
                Subscribe
              </ScrollLink>
            </div>
          </div>
          <div className="col">
            <h6>Follow us on </h6>
            <div className="footer-social-icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
            </div>
          </div>
          <div className="col">
            <h6>Contact us</h6>
            <address className="contacts">
              <p className="address">02 3rd-floor 16th street Chennai-28</p>
              <p>
                <a href="tel:415-012-2024">415-012-2024</a>
                <br />
                <a href="mailto:contact@coffee-brew.com">
                  conntact@coffeebrew.com
                </a>
              </p>
            </address>
          </div>
        </div>
        <hr></hr>
        <p className="reserved-text">
          &copy; {year} Coffee-brew. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
