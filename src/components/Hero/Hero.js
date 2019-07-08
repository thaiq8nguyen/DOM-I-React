import React from "react";
import "bulma/css/bulma.css";

import heroImageURL from "../../assets/images/header-img.png";

const Hero = () => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="columns is-vcentered">
          <div className="column is-half has-text-centered ">
            <div className="container">
              <h1 className="title is-size-1 has-text-weight-bold">
                REACT IS AWESOME
              </h1>
              <button className="button is-info is-medium">Get Started</button>
            </div>
          </div>
          <div className="column is-half has-text-centered">
            <img src={heroImageURL} alt="a code fragment" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
