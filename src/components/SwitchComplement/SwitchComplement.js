import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Popover from "@material-ui/core/Popover";
import Toogle from "../Toogle/Toogle";

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
  container: {
    display: "flex",
    alignItems: "center",
  },
  toogle: {
    marginLeft: "16px",
  },
}));

const SwitchComplement = ({
  label,
  value,
  onChange,
  placeholder,
  infoText,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleInfoClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInfoClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "info-popover" : undefined;

  return (
    <div className={classes.container}>
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
      <IconButton onClick={handleInfoClick}>
        <InfoIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleInfoClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className={classes.popover}>
          <p>{infoText}</p>
        </div>
      </Popover>
      <Toogle className={classes.toogle} />
    </div>
  );
};

export default SwitchComplement;
