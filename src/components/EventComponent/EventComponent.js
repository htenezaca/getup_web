import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { width } from "@mui/system";

const useStyles = makeStyles({
  margin: {
    marginLeft: "auto",
  },
  container: {
    width: "280px",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "28px",
    border: "1px solid #ccc",
    height: "48px",
    "&:hover": {
      backgroundColor: "#BAA6ED",
    },
    "&:hover .MuiIconButton-root:not(:hover)": {
      backgroundColor: "transparent",
    },
  },
});

const EventComponent = (props) => {
  // Definir una prop llamada "text"
  const classes = useStyles();
  return (
    <React.Fragment>
      <Link to={"/agenda/edit"}>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "280px",
            padding: "10px",
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
                <p>{props.text}</p> {/* Usar la prop "text" aquí */}
              </div>
            </div>
          </div>
          <Link to="/agenda/delete">
            <IconButton aria-label="delete" className={classes.margin}>
              <DeleteIcon style={{ color: "red" }} />
            </IconButton>
          </Link>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default EventComponent;
