import React from "react";
import { makeStyles } from "@mui/styles";
import Toogle from "../Toogle/Toogle";
import { width } from "@mui/system";

const useStyles = makeStyles({
  margin: {
    marginLeft: "auto",
  },
});

const AlarmOption = ({ cita, label }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "280px",
        }}
      >
        <div
          className="container"
          style={{
            width: "240px",
            borderRadius: "28px",
            display: "flex",
            alignItems: "center",
            height: "48px", // Nueva altura
          }}
        >
          <div className="card-body">
            <div>
              <h6>{cita}</h6>
            </div>
          </div>
        </div>
        <Toogle />
      </div>
      <div style={{ textAlign: "center", marginTop: "8px" }}>
        <span style={{ fontWeight: "normal" }}>{label}</span>
      </div>
    </React.Fragment>
  );
};

export default AlarmOption;
