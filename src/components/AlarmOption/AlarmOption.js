import React from "react";
import { makeStyles } from "@mui/styles";
import Toogle from "../Toogle/Toogle";

const useStyles = makeStyles({
  margin: {
    marginLeft: "auto",
  },
});

const AlarmOption = ({ cita, label }) => {
  const classes = useStyles();
  return (
    <div className="container" style={{ width: "280px" }}>
      <div
        style={{
          display: "flex",
          width: "200px",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            borderRadius: "28px",
            display: "flex",
            alignItems: "center",
            height: "48px",
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
      <div style={{ textAlign: "left", marginTop: "8px" }}>
        <span style={{ fontWeight: "normal" }}>{label}</span>
      </div>
    </div>
  );
};

export default AlarmOption;
