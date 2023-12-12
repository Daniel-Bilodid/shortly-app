import React from "react";
import "./hero.scss";
import Nav from "../nav/Nav";
import working from "../../assets/illustration-working.svg";

const Hero = () => {
  return (
    // <div className="hero">
    //   <Nav />

    //   <div className="hero__wrapper">
    //     <div className="hero__promo">
    //       <div className="hero__promo-title">More than just shorter links</div>
    //       <div className="hero__promo-text">
    //         Build your brand’s recognition and get detailed insights on how your
    //         links are performing.
    //       </div>

    //       <div className="hero__promo-btn">
    //         <button>Get Started</button>
    //       </div>
    //     </div>
    //     <div className="hero__img">
    //       <img src={working} alt="working" />
    //     </div>
    //   </div>
    // </div>

    <div className="hero">
      <div className="hero__promo">
        <div className="hero__promo-title">More than just shorter links</div>
        <div className="hero__promo-text">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </div>
        <div className="hero__promo-btn">
          <button>Get Started</button>
        </div>
      </div>
      <div className="hero__img">
        <img src={working} alt="working" />
      </div>
    </div>
  );
};

export default Hero;
