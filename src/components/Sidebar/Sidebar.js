import React from "react";
import "./Sidebar.css"; // importa el archivo CSS del sidebar
import CustomDatePicker from "../DatePicker/DatePicker"; // importa el componente DatePicker

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <i className="fas fa-times"></i>
        <CustomDatePicker />
      </div>

          
    </div>
  );
}

export default Sidebar;