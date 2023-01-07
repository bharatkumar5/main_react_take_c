import React from "react";
import "../contentarea/contentarea.css";
import TableHeading1 from "../Table/tableheading1";
import "../Client-list/Document-list.css";
const ContentArea = (props) => {
  return (
    <div className="contentarea">
      <hr></hr>
      {/* <TableHeading1 /> */}
      <div className="document-list">
        <div className="document-row" key={document.id}>
          <div className="table-cell">1</div>
          <div className="table-cell">bharat kumar</div>
          <div className="table-cell">Shree ram textile</div>
          <div className="table-cell">approve</div>
          <div className="table-cell">
            <button>View</button>
            <button>Approve</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
