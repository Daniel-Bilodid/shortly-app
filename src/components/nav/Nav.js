import React, { useState } from "react";
import "./nav.scss";
import Logo from "../../assets/logo.svg";
const Nav = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setIsBurgerOpen((prevState) => !prevState);
  };

  const bodyElement = document.querySelector("body");

  if (isBurgerOpen) {
    bodyElement.style.overflow = "hidden";
  } else {
    bodyElement.style.overflow = "visible";
  }

  return (
    <>
      <div className="nav">
        <div className="nav__menu">
          <div className="nav__menu-logo">
            <img src={Logo} alt="logo" />
          </div>

          <div className="nav__menu-list">
            <ul className="list">
              <li className="list-item">Features</li>
              <li className="list-item">Pricing</li>
              <li className="list-item">Resources</li>
            </ul>
          </div>
        </div>

        <div className="nav__auth">
          <div className="nav__auth-login">Login</div>

          <div className="nav__auth-sign">
            <button className="sign-button">Sign Up</button>
          </div>
        </div>

        <div className="burger__menu">
          <div className="burger" onClick={toggleBurger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              viewBox="0 0 24 21"
              fill="none"
            >
              <rect width="24" height="3" fill="#9E9AA8" />
              <rect y="9" width="24" height="3" fill="#9E9AA8" />
              <rect y="18" width="24" height="3" fill="#9E9AA8" />
            </svg>
          </div>
        </div>
      </div>
      <div className={`burger__nav ${isBurgerOpen ? "burger__opacity" : ""}`}>
        <div className="burger__nav-list">
          <ul className="burger__list">
            <li className="burger__list-item">Features</li>
            <li className="burger__list-item">Pricing</li>
            <li className="burger__list-item">Resources</li>
          </ul>
        </div>
        <div className="hr"></div>
        <div className="burger__auth">
          <div className="burger__auth-login">Login</div>

          <button className="burger__auth-button">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Nav;
