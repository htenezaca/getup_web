import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

function CustomDatePicker() {
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    function handleDateChange(date) {
      setSelectedDate(date);
    }
  
    return (
      <div className="container">
        <DatePicker 
          selected={selectedDate} 
          onChange={handleDateChange} 
          open={true} // Establecemos open en true para que el calendario esté desplegado por defecto
        />
      </div>
    );
}
  
export default CustomDatePicker;