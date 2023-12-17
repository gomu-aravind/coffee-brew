import shopImg from "../assets/coffee-shop-about.png";
export default function About() {
  return (
    <section id="about" name="about">
      <div className="container">
        <div className="row">
          <div className="col col-6">
            <img src={shopImg} alt="coffee-shop" />
          </div>
          <div className="col col-4">
            <div>
              <span>About us</span>
              <h3>Your Companion in 2 steps</h3>
            </div>
            <div>
              <p>
                Welcome to Coffee-Brew, where every sip tells a story of
                passion, craftsmanship, and the love for exceptional coffee. Our
                journey began with a simple yet profound dedication to craft the
                perfect cup—a blend of artistry, expertise, and an unwavering
                commitment to quality.
              </p>
              <p>
                Founded by a team of coffee aficionados driven by a shared love
                for the aromatic bean, Coffee-Brew was born from a desire to
                redefine the coffee experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
