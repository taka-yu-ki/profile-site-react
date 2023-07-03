import React from "react";
import logo from "../img/logo.svg";

const header = () => {
  return (
    <header id="header" className="wrapper">
      <h1 className="site-title">
        <a href="index.html">
          <img src={logo} alt="Profile" />
        </a>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#bicycle">Bicycle</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
