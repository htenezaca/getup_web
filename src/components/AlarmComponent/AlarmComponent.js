//create a React component
import React from "react";
import { makeStyles } from "@mui/styles";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const useStyles = makeStyles({
  margin: {
    marginLeft: "auto",
  },
});

const AlarmComponent = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className="card" style={{ width: "300px" }}>
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
          <br />
          <div
            style={{
              display: "inline-block",
              fontFamily: "Balsamiq Sans",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "20px",
              width: "43%",
              margin: "right",
            }}
          >
            Despertar
          </div>
          <div style={{ float: "right", width: "33%" }}>
            <Switch checked={true} onChange={() => {}} />
          </div>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div style={{ float: "left", width: "75%" }}>
              <div
                style={{
                  fontFamily: "Balsamiq Sans",
                  fontStyle: "normal",
                  fontWeight: "normal",
                  fontSize: "20px",
                  width: "100%",
                }}
              >
                Todos los días
              </div>
            </div>
            <div style={{ float: "right", width: "25%" }}>
              <IconButton aria-label="delete" className={classes.margin}>
                <DeleteIcon />
              </IconButton>
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default AlarmComponent;
