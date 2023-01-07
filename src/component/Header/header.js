import React from "react";
import "../Header/header.css";
import Logo from "../Header/homeLogo.png";

import Logo2 from "../Header/profilelogo.png";
const Header = () => {
  return (
    <div className="header-div">
      <a href="#top1">
        <img src={Logo} alt="Home" />
      </a>
      <a href="#top2">
        <img src={Logo2} alt="Profile" id="logo2" />
      </a>
    </div>
  );
};

export default Header;
