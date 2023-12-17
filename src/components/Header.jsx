import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logoImg from "../assets/coffee-brew.png";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CartIcon from "./Cart/CartIcon";
import { useSelector } from "react-redux";


export default function Header() {

  const [btnIsHighlighted,setBtnIsHighlighted]=useState(false)

  const cartQuantity=useSelector(state=>state.cart.totalQuantity)
  const items=useSelector(state=>state.cart.items)

  const location = useLocation();
  const isRootRoute = location.pathname === "/";
  let content;

  const btnClasses=btnIsHighlighted?'cart-btn bump':'cart-btn'

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    if(location.pathname!=='/coffee' && location.pathname!=='/cart'){
      return
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  if (isRootRoute) {
    content = (
      <>
        <li className="nav-item">
          <ScrollLink
           to="home"
           spy={true}
           smooth={true}
           duration={200}
           className="nav-link list-group-item list-group-item-action"
          >
            Home
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            to="about"
            className="nav-link list-group-item list-group-item-action"
            spy={true}
            smooth={true}
            duration={200}
          >
            About
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            to="menu"
                spy={true}
                smooth={true}
                duration={200}
            className="nav-link list-group-item list-group-item-action"
          >
            Menu
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
           to="testimonials"
           spy={true}
           smooth={true}
           duration={200}
           className="nav-link list-group-item list-group-item-action"
          >
            Testimonials
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            to="subscribe"
            spy={true}
            smooth={true}
            duration={200}
            className="nav-link list-group-item list-group-item-action"
          >
            Subscribe
          </ScrollLink>
        </li>
      </>
    );
  } else if(location.pathname==='/coffee' || location.pathname==='/checkout'){
    content = (
      <>
        <li className="nav-item">
          <RouterLink
            className="nav-link list-group-item list-group-item-action"
            to='../'
          >
            Back to HomePage
          </RouterLink>
        </li>
      </>
    );
  }else{
    content = (
      <>
        <li className="nav-item">
          <RouterLink
            className="nav-link list-group-item list-group-item-action"
            to={-1}
          >
            Back to PreviousPage
          </RouterLink>
        </li>
      </>
    );
  }

  return (
    <header className="header fixed-top">
      <nav id="logo" className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <RouterLink className="navbar-brand" to="/">
            <img src={logoImg} alt="coffee brew logo" />
          </RouterLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="justify-content-end navbar-collapse collapse "
            id="navbarText"
          >
            <ul className="navbar-nav mr-auto">
              {content}
              <li className="nav-item">
                <RouterLink to="/cart" type="button" className={btnClasses}>
                  <CartIcon/>Cart<span className="badges">{cartQuantity}</span>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
