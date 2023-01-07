import React from "react";
import "../Table/tableheading1.css";
const TableHeading1 = () => {
  return (
    <div className="table-heading-bar">
      <div className="table-cell">Sr. No.</div>
      <div className="table-cell">
        Name
        <input type="text" placeholder="Search" />
      </div>
      <div className="table-cell">Company Name</div>
      <div className="table-cell">
        Status
        <select>
          <option value="all">All</option>
          <option value="active">Approve</option>
          <option value="inactive">Unapprove</option>
        </select>
      </div>
      <div className="table-cell">Action</div>

      <hr></hr>
    </div>
  );
};

export default TableHeading1;
