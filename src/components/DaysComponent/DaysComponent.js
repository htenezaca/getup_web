//create a React component
import React from "react";
import { makeStyles } from "@mui/styles";
import "./DaysComponent.css";
import { border } from "@mui/system";

const useStyles = makeStyles({
  margin: {
    margin: "auto",
  },
});

const DaysComponent = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card custom-border"
        style={{
          width: "282px",
          background: "#BAA6ED",
          opacity: "0.9",
        }}
      >
        <div className="card-body">
          <h6 style={{ letterSpacing: "8px" }}>L M M J V S D</h6>
        </div>
        <ul className="list-group list-group-flush">
          <li
            className="list-group-item"
            style={{
              background: "#BAA6ED",
              borderRadius: "28px",
              color: "black",
            }}
          >
            <h6>Todos los días</h6>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DaysComponent;
