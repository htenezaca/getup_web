import React, { useState } from "react";
import { Switch, Toolbar } from "@mui/material";

const Toggle = () => {
  return (
    <Switch
      value="checkedA"
      inputProps={{
        "aria-label": "Switch A",
      }}
      color="primary"
      sx={{
        "& .MuiSwitch-thumb": {
          backgroundColor: "#6C5C9E",
        },
      }}
    />
  );
};

export default Toggle;
