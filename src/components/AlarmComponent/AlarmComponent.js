import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import Toogle from "../Toogle/Toogle";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "./AlarmComponent.css";

const useStyles = makeStyles({
  margin: {
    marginLeft: "auto",
  },
});

const AlarmComponent = ({ title, repeat }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Link to={"/alarma/edit"}>
        <div
          className="card custom-border"
          style={{
            width: "300px",
            marginTop: "20px",
          }}
        >
          <div className="card-body">
            <div style={{ float: "left", width: "23%" }}>
              <div
                style={{
                  width: "45px",
                  height: "45px",
                  borderRadius: "50%",
                  backgroundColor: "lightgray",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "inline-block",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "20px",
                width: "43%",
                margin: "right",
              }}
            >
              <h5>{title}</h5>
            </div>
            <div style={{ float: "right", width: "33%" }}>
              <div>
                <h6>7:00 am</h6>
                <Toogle />
              </div>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item" style={{ borderRadius: "28px" }}>
              <div style={{ float: "left", width: "75%" }}>
                <div
                  style={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    width: "100%",
                  }}
                >
                  {repeat}
                </div>
              </div>
              <div style={{ float: "right", width: "25%" }}>
                <Link to={"/alarma/delete"}>
                  <IconButton aria-label="delete" className={classes.margin}>
                    <DeleteIcon style={{ color: "red" }} />
                  </IconButton>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default AlarmComponent;
