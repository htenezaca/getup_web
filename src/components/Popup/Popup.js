import zIndex from "@material-ui/core/styles/zIndex";
import React from "react";
import { Link } from "react-router-dom";
import Button from "../ShortButton/Button";
import "./Popup.css";

const Popup = ({ content, title, firstButton, secondButton, goto }) => {
  return (
    <div className="popup">
      <div className="card" style={{ width: "28rem", zIndex: "1" }}>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>

          <p className="card-text">{content}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
            }}
          >
            <Link to={`/${goto}`} style={{ textDecoration: "none" }}>
              <Button
                content={firstButton.content}
                variant={firstButton.variant}
              />
            </Link>
            <Link to={`/${goto}`} style={{ textDecoration: "none" }}>
              <Button
                content={secondButton.content}
                variant={secondButton.variant}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
