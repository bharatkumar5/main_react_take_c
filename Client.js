import { React, Fragment } from "react";
import "../Page/client.css";
import logos from "../Page/bussiness.png";
import Logo from "../Page/homeLogo.png";
import Navigation from "../component/Nav/Navigation";
import Header from "../component/Header/header";
import Logo2 from "../Page/profilelogo.png";
import Buttonbar from "../component/Button-bar/Button-bar";
import Card from "../component/Card/Card";

const Client = () => {
  return (
    <Fragment>
      <div className="main-body-div">
        {/* <div className="first-div">
          <img src={logos} alt="logo" id="img-nav" />
          <ul className="itemlist">
            <li className="item">Client</li>
            <li className="item">Status</li>
            <li className="item">Report</li>
          </ul>

          <span id="span-log" className="">
            <a href="/">Logout</a>
          </span>
        </div> */}
        <Navigation />

        <div className="second-div">
          {/* <div className="header-div">
            <a href="#top1">
              <img src={Logo} alt="Home" />
            </a>
            <a href="#top2">
              <img src={Logo2} alt="Profile" id="logo2" />
            </a>
          </div> */}

          <Header />
          <div className="contentarea">
            <hr></hr>

            <Buttonbar />
            {/*client data display div */}
            <div className="div-Client-data">
              {/* Filterr form input */}
              <form action="/action_page.php" className="Form-month-filter">
                <input
                  type="month"
                  id="month"
                  name="month"
                  className="input-item"
                />
                <input type="submit" className="input-item input-item-btn" />
              </form>
              {/* document list display */}

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p>21-10-22</p>
                  <p>Document</p>
                  <button>View</button>
                  <button>Download</button>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <p>21-10-22</p>
                  <p>Document</p>
                  <button>View</button>
                  <button>Download</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const viewDocument = (id) => {
  // code to view the document with the given id
};

const downloadDocument = (id) => {
  // code to download the document with the given id
};

export default Client;
