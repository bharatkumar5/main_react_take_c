import React from "react";

import "./Navigation.css";
import logos from "../Nav/bussiness.png";

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
