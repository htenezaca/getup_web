

import './TimePicker.css';

import * as React from 'react';  
import TextField from '@mui/material/TextField';  
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';  
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';  
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';  
  
export default function CustomDatePicker() {  
  const [value, setValue] = React.useState(new Date());  
  
  return (  
    <LocalizationProvider dateAdapter={AdapterDateFns}>  
      <StaticTimePicker  
        displayStaticWrapperAs="mobile"  
        value={value}  
        onChange={(newValue) => {  
          setValue(newValue);  
        }}  
              renderInput={(params) => <TextField {...params}
              style={{ backgroundColor: 'red' }}
              MuiPickersStaticWrapperProps={{ style: { backgroundColor: '#000000' } }}
              MuiPickersClockPointerProps={{ style: { backgroundColor: '#ffffff' } }}
              MuiPickersClockNumberProps={{ style: { color: '614d9e' } }}
              MuiPickersClockPointerThumbProps={{ style: { backgroundColor: '#614d9e' } }}/>}  
      />  
    </LocalizationProvider>  
  );  
}  