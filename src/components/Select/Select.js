import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Popover from "@material-ui/core/Popover";
import { FormHelperText } from "@mui/material";

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

const CustomSelect = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  helperText,
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
    <React.Fragment>
      <FormControl
        variant="outlined"
        className={classes.root}
        style={{ width: "280px" }} // <- añadir aquí la regla width
      >
        <Select
          value={value}
          onChange={onChange}
          label={label}
          InputLabelProps={{
            shrink: false,
          }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <InputLabel
          margin="dense"
          style={{
            backgroundColor: "#fff",
            paddingLeft: "8px",
          }}
        >
          {label}
        </InputLabel>
      </FormControl>
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
          <FormHelperText>{helperText}</FormHelperText>
        </div>
      </Popover>
    </React.Fragment>
  );
};

export default CustomSelect;
