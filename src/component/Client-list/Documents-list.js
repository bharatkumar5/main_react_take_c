import React from "react";
import { Link } from "react-router-dom";
import "../Client-list/Document-list.css";
function DocumentList(props) {
  return (
    <div className="document-list">
      {props.data.map((document, index) => (
        <div className="document-row" key={document.id}>
          <div className="table-cell">{index + 1}</div>
          <div className="table-cell">{document.name}</div>
          <div className="table-cell">{document.company}</div>
          <div className="table-cell">{document.status}</div>
          <div className="table-cell">
            <Link to="/Client/:id">
              {" "}
              <button onClick={() => props.onView(document.id)}>View</button>
            </Link>
            <button onClick={() => props.onUpdate(document.id)}>Update</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DocumentList;
