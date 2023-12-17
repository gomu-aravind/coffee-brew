import { NavLink } from "react-router-dom";
import coldCoffeeImg from "../assets/coffee/cold-coffee.jpg";
export default function Menu() {
  return (
    <>
    <section id="menu" name="menu">
      <div className="container">
        <span>Menu</span>
        <h4>Choose Your Blend</h4>
        <div className="row">
          <div className="col col-md-auto">
            <NavLink to="/coffee" className="coffee-menu">
              <div className="card">
              <div className="menu-card-overlay">
                    <p className="menu-text">Click to see menu</p>
                  </div>
                <img
                  src={coldCoffeeImg}
                  className="card-img-top"
                  alt="hot coffee image"
                />
                <div className="card-body">
                  <h5 className="card-title">Experience the Magic</h5>
                  <p className="card-text">
                    Select your refreshment here
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
