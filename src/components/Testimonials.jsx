import customerOneImg from "../assets/img/ben.jpg";
import customerTwoImg from "../assets/img/steve.jpg";
import customerThreeImg from "../assets/img/customer-3.jpg";
export default function Testimonials() {
  return (
    <section id="testimonials" name="testimonials">
      <h4 className="testimonial-heading">See What our Customers Say</h4>
      <section className="py-4 background-img">
        <div className="container">
          <div
            id="carouselExampleDark"
            className="carousel  slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="col-sm-8 mx-auto">
              <div className="carousel-inner text-center text-white py-5">
                <div className="carousel-item active" data-bs-interval="10000">
                  <div className="user-photo shadow">
                    <img
                      src={customerOneImg}
                      className="img-fluid"
                      alt="customer photo"
                    />
                  </div>
                  <div className="slider-caption mt-3">
                    <p className="fs-5">
                      As a coffee enthusiast, I'm quite picky about my brews.
                      This particular blend strikes the perfect balance. It's
                      robust enough to wake me up but doesn't compromise on the
                      delightful aroma that fills the room. A truly delightful
                      choice for a morning ritual."
                    </p>
                    <figcaption className="blockquote-footer mt-3 text-white fs-5">
                      <cite>Henry david</cite>
                    </figcaption>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                  <div className="user-photo shadow">
                    <img
                      src={customerTwoImg}
                      className="img-fluid"
                      alt="cutomer photo"
                    />
                  </div>
                  <div className="slider-caption mt-3">
                    <p className="fs-5">
                      This coffee has redefined my morning routine. The
                      freshness of the beans is evident with every sip. Its bold
                      flavor profile wakes up my senses, making it an absolute
                      must-have to kickstart a productive day. A game-changer in
                      the world of coffee!"
                    </p>
                    <figcaption className="blockquote-footer mt-3 text-white fs-5">
                      <cite>Alex White</cite>
                    </figcaption>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="10000">
                  <div className="user-photo shadow">
                    <img
                      src={customerThreeImg}
                      className="img-fluid"
                      alt="customer photo"
                    />
                  </div>
                  <div className="slider-caption mt-3">
                    <p className="fs-5">
                      I've tried numerous coffee blends, but nothing compares to
                      this brew! The aroma is inviting, and the taste is simply
                      divine. Its smoothness with a rich undertone is what gets
                      me through my mornings. Highly recommended for anyone
                      seeking a truly satisfying coffee experience."
                    </p>
                    <figcaption className="blockquote-footer mt-3 text-white fs-5">
                      <cite>Alexandria</cite>
                    </figcaption>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
