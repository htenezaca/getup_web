import React, { useState } from "react";
import "./Panel.css";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import Button from "../ShortButton/Button";
import Popup from "../Popup/Popup";
import CustomTimePicker from "../TimePicker/TimePicker";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import Toogle from "../Toogle/Toogle";
import AlarmComponent from "../AlarmComponent/AlarmComponent";

const Panel = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  function handleOpenPopup() {
    setShowPopup(true);
  }

  function handleClosePopup() {
    setShowPopup(false);
  }

  return (
    <div className="panel">
      <LoginForm />
      <SignUpForm />
      <Button content="Enviar" variant="primary" />
      <Button content="Cancelar" variant="secondary" />

      {/*  <Popup
              firstButton={{
                  content: "Aceptar",
                  variant: "primary",
              }}
              secondButton={{
                  content: "Cancelar",
                  variant: "secondary",
                }}
          ></Popup>*/}
      <CustomTimePicker />

      <Toogle />
      <AlarmComponent />
    </div>
  );
};

export default Panel;
