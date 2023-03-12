import React, { useState } from "react";
import { Switch, Toolbar } from "@mui/material";

const Toggle = () =>{

  return (
    <Switch
      value="checkedA"
      inputProps={{
        'aria-label': 'Switch A'
      }}
    />
  )

}

export default Toggle;