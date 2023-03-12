import React from "react";
import Button from "../ShortButton/Button";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";

const useStyles = makeStyles({
  card: {
    borderRadius: "28px",
    padding: "20px",
  },
  avatar: {
    width: "45px",
    height: "45px",
    marginRight: "10px",
  },
  name: {
    fontFamily: "Balsamiq Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "20px",
    margin: "0",
  },
  email: {
    fontFamily: "Balsamiq Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    margin: "0",
  },
  button: {
    display: "block",
    margin: "auto",
    marginTop: "20px",
  },
});

const PersonalCard = ({ name, email }) => {
  const classes = useStyles();

  return (
    <div className={`card ${classes.card}`}>
      <div className="card-body d-flex align-items-center">
        <Avatar className={classes.avatar} />
        <div>
          <h2 className={classes.name}>{name}</h2>
          <h6 className={classes.email}>{email}</h6>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item" style={{ borderRadius: "28px" }}>
            <div style={{ float: "bottom", width: "75%" }}>
              <Button
                content="Actualizar plan"
                variant="primary"
                className={classes.button}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalCard;
