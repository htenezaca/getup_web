import "./TimePicker.css";

import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";

export default function CustomTimePicker() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticTimePicker
        displayStaticWrapperAs="mobile"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            MuiPickersStaticWrapperProps={{
              style: { backgroundColor: "black" },
            }}
            MuiPickersClockPointerProps={{
              style: { backgroundColor: "black" },
            }}
            MuiPickersClockNumberProps={{ style: { color: "black" } }}
            MuiPickersClockPointerThumbProps={{
              style: { backgroundColor: "black" },
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
}
