import React from "react";
import Button from "../ShortButton/Button";
import { makeStyles } from "@mui/styles";
import Avatar from "@mui/material/Avatar";
import { Title } from "@material-ui/icons";
import TitleSection from "../TitleSection/TitleSection";

const useStyles = makeStyles({
  card: {
    borderRadius: "28px",
    padding: "10px",
    borderColor: "#614d9e",
    borderWidth: "2px",
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
  info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

const PersonalCard = ({ name, email }) => {
  const classes = useStyles();

  return (
    <div className={`card ${classes.card}`}>
      <div className={`card-body ${classes.info}`}>
        <Avatar className={classes.avatar} />
        <div>
          <h2 className={classes.name}>{name}</h2>
          <h3 className={classes.email}>{email}</h3>
          <div style={{ width: "75%" }}>
            <Button
              content="Actualizar plan"
              variant="primary"
              className={classes.button}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalCard;
