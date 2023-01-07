import React from "react";
import "./Dashboard.css";

import Navigation from "./Nav/Navigation";
import RightComponet from "./second-componet/Rightcomponet";
const Dashboard = () => {
  return (
    <div>
      <div className="main-body-div">
        <Navigation />

        <RightComponet />
      </div>
    </div>
  );
};

export default Dashboard;
