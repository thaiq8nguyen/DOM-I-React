import React from "react";
import "bulma/css/bulma.css";
import logoURL from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="level">
      <nav className="level-left">
        <a href="" className="level-item link is-info">
          Services
        </a>
        <a href="" className="level-item link is-info">
          Product
        </a>
        <a href="" className="level-item link is-info">
          Vision
        </a>
        <a href="" className="level-item link is-info">
          Features
        </a>
        <a href="" className="level-item link is-info">
          About
        </a>
        <a href="" className="level-item link is-info">
          Contact
        </a>
      </nav>
      <div className="level-right">
        <img src={logoURL} alt="a great idea logo" className="level-item" />
      </div>
    </div>
  );
};

export default Header;
