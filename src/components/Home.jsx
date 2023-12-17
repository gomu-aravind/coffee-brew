import { Link } from "react-scroll";
import heroImg from "../assets/hero.png";
export default function Home() {
  return (
    <section id="home" name="home">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Discover the Perfect Cup of Coffee</h1>
            <p>
              Immerse Yourself in a World of Rich Aromas and Exceptional Flavors
              - Explore Our Handcrafted Blends, From Ethically Sourced Beans to
              Expertly Roasted Delights, and Savor Every Sip
            </p>
            <div className="cta">
              <Link
                to="menu"
                spy={true}
                smooth={true}
                duration={200}
                className="cart-btn home-main"
              >
                Find Your Blend
              </Link>

              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={200}
                className="home-info"
              >
                Learn more &darr;
              </Link>
            </div>
          </div>
          <div className="col">
            <img src={heroImg} alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
}
