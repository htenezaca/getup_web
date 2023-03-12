import React from "react";
import "./LargeButton.css";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const LargeButton = ({ onClick, content }) => {
  const classes = `button btn btn-primary`;
  return (
    <button type="submit" className={classes} onClick={onClick}>
      <AddCircleOutlineIcon style={{ fontSize: 24 }} />
      {content}
    </button>
  );
};

export default LargeButton;
