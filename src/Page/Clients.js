import { React, Fragment, useState } from "react";
import "../Page/client.css";
import logos from "../Page/bussiness.png";
import Logo from "../Page/homeLogo.png";
import Navigation from "../component/Nav/Navigation";
import Header from "../component/Header/header";
import Logo2 from "../Page/profilelogo.png";
import TableHeading1 from "../component/Table/tableheading1";
import DocumentList from "../component/Client-list/Documents-list";

let document = [
  {
    Id: 1,
    name: "bharat",
    company: "shree ram trader",
    status: "approve",
  },
  {
    Id: 2,
    name: "ashok",
    company: "shree ram trader",
    status: "approve",
  },
];

const Client = () => {
  const [data, setData] = useState(document);
  return (
    <Fragment>
      <div className="main-body-div">
        <Navigation />

        <div className="second-div">
          <Header />
          <div className="contentarea">
            <hr></hr>
            <TableHeading1 />
            {/* document list render */}
            <DocumentList data={data} />
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

{
  /* <Fragment>
<div className="main-body-div">
  <Navigation />

  <div className="second-div">
    <Header />
    <div className="contentarea">
      <hr></hr>
      <TableHeading1 />
      {/* document list render */
}
//       <DocumentList data={data} />
//     </div>
//   </div>
// </div>
// </Fragment> */}
