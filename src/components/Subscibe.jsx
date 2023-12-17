import { useEffect, useRef, useState } from "react";
import subscribeImg from "../assets/img/coffee-drink.jpg";
import { emailValidator } from "../util/helper";

export default function Subscribe() {
  const emailRef = useRef();
  const [error, setError] = useState({
    email: "",
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        setSuccess(false);
      }, 2500);
    }
  }, [success]);

  const subscribeHandler = (event) => {
    event.preventDefault();
    if (
      emailRef.current.value.trim() === "" ||
      !emailValidator(emailRef.current.value)
    ) {
      setError((prevError) => ({
        ...prevError,
        email: "Enter a valid email",
      }));
    }else {
      setSuccess(true);
      emailRef.current.value = "";
      setError({
        email: "",
      });
    }
  };

  return (
    <section id="subscribe" name="subscribe">
      <div className="container">
        <div className="card">
          <div className="col">
            <h4>Subscribe to Coffee Brew Newsletter!</h4>
            <p>
              Stay in the loop with all things coffee-related! Get exclusive
              updates, brewing tips, new flavor releases, and exciting offers
              delivered straight to your inbox.
            </p>
            <p>Why Subscribe?</p>
            <ul className="subscribe-benifits">
              <li>
                Be the first to know about our latest coffee blends and
                products.
              </li>
              <li>
                Receive expert tips for brewing the perfect cup of coffee at
                home.
              </li>
              <li>
                Access exclusive discounts and promotions available only to
                subscribers.
              </li>
            </ul>
            <div className="subscribe-form">
              {success && (
                <div className="alert alert-primary" role="alert">
                  <h5>You have subscribe to our newsletter.</h5>
                  <span>You will recieve further updates on your email</span>
                </div>
              )}
              {!success && (
                <form onSubmit={subscribeHandler} noValidate>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      ref={emailRef}
                    />
                    {error.email !== "" && <span className="text-danger fw-medium">{error.email}</span>}
                  </div>
                  <button>Subscribe</button>
                </form>
              )}
            </div>
          </div>
          <div className="col col-4 card-overlay">
            <img
              src={subscribeImg}
              alt="girl smiling photo"
              className="card-img card-img-top"
            />
            <div className="card-img-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
