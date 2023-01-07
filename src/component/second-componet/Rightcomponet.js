import React from "react";
import "../second-componet/Rightcomponet.css";
import Header from "../Header/header";
import ContentArea from "../contentarea/contentarea";

const RightComponet = () => {
  return (
    <div className="second-div">
      <Header />

      <ContentArea />
    </div>
  );
};

export default RightComponet;
