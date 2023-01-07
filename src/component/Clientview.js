import React from "react";
import Buttonbar from "./Button-bar/Button-bar";
import Header from "./Header/header";
import Navigation from "./Nav/Navigation";

const Clientview = () => {
  return (
    <div>
      <Navigation />
      <div>
        <Header />
        <Buttonbar />
      </div>
    </div>
  );
};

export default Clientview;
