import React from "react";
import { Route } from "react-router-dom";
import "../Page/Dashboard.css";
import logos from "../Page/bussiness.png";
import Logo from "../Page/homeLogo.png";
import TableHeading1 from "../component/Table/tableheading1";
import Clients from "./Clients";

import Logo2 from "../Page/profilelogo.png";
import { Link } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div className="main-body-div">
        <div className="first-div">
          <img src={logos} alt="logo" id="img-nav" />
          <ul className="itemlist">
            <li className="item">
              <Link to="/Clients">Client</Link>
            </li>
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

export default DashBoard;
