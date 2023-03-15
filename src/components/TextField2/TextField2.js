import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Popover from "@material-ui/core/Popover";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormLabel-root": {
      color: "gray",
      fontWeight: "bold",
      fontSize: "16px",
    },
    "& .MuiInputBase-input": {
      color: "gray",
      fontSize: "16px",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "gray",
      borderRadius: 28,
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(24px, -12px)",
      backgroundColor: "#fff",
    },
  },
  popover: {
    padding: theme.spacing(2),
    maxWidth: 400,
  },
}));

const CustomTextField2 = ({
  label,
  value,
  onChange,
  placeholder,
  infoText,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TextField
        className={classes.root}
        label={label}
        variant="outlined"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        InputLabelProps={{
          shrink: true,
        }}
        style={{ height: "58px", width: "282px" }}
      />
    </React.Fragment>
  );
};

export default CustomTextField2;
