import React from "react";
import "../Mainframe/Mainframe.css";
import logos from "../Nav/bussiness.png";
import Logo from "../Header/homeLogo.png";

import Logo2 from "../Header/profilelogo.png";
``;
const MainFrameComponet = () => {
  return (
    <div>
      <div className="main-body-div">
        <div className="first-div">
          <img src={logos} alt="logo" id="img-nav" />
          <ul className="itemlist">
            <li className="item">Client</li>
            <li className="item">Status</li>
            <li className="item">Report</li>
          </ul>

          <span id="span-log" className="">
            <a href="/">Logout</a>
          </span>
        </div>

        <div className="second-div">
          <div className="header-div">
            <img src={Logo} alt="Home" />
            <img src={Logo2} alt="Profile" id="logo2" />
          </div>
          <div className="contentarea">
            <hr></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFrameComponet;
