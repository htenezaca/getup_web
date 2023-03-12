import React from "react";
import "./Sidebar.css"; // importa el archivo CSS del sidebar
import CustomDatePicker from "../DatePicker/DatePicker"; // importa el componente DatePicker

function Sidebar() {
  return (
    <div className="sidebar container d-flex justify-content-center">
        <CustomDatePicker />          
    </div>
  );
}

export default Sidebar;