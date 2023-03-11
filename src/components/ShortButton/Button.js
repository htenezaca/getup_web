import React from "react";
import "./Button.css";

const Button = ({ onClick, content, variant }) => {
  const classes = `button btn btn-${variant}`;
  return (
    <button type="submit" className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;