//create a React component
import React from "react";
import { makeStyles } from "@mui/styles";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { width } from "@mui/system";

const useStyles = makeStyles({
  margin: {
    marginLeft: "auto",
  },
});

const EventComponent = () => {
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
            border: "1px solid #ccc",
            borderRadius: "28px",
            display: "flex",
            alignItems: "center",
            height: "48px", // Nueva altura
          }}
        >
          <div className="card-body">
            <div>
              <h6>Cita de trabajo| 02 p.m.</h6>
            </div>
          </div>
        </div>
        <IconButton aria-label="delete" className={classes.margin}>
          <DeleteIcon style={{ color: "red" }} />
        </IconButton>
      </div>
    </React.Fragment>
  );
};

export default EventComponent;
