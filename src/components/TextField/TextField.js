import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormLabel-root": {
      color: "gray", // color de la etiqueta
      fontWeight: "bold",
      fontSize: "16px",
    },
    "& .MuiInputBase-input": {
      color: "gray", // color del texto
      fontSize: "16px",
    },
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "gray", // color del borde
      borderRadius: 28, // border radius
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "translate(24px, -12px)", // posición del label
      backgroundColor: "#fff",
    },
  },
}));

const CustomTextField = ({
  label,
  value,
  onChange,
  placeholder,
  helperText,
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
        style={{ height: "58px" }}
      />
      <FormHelperText
        style={{
          marginLeft: "28px", // Mueve el texto hacia la derecha
          color: "gray",
        }}
      >
        {helperText}
      </FormHelperText>
    </React.Fragment>
  );
};

export default CustomTextField;
