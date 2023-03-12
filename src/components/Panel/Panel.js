import React, { useState } from "react";
import "./Panel.css";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import Button from "../ShortButton/Button";
import LargeButton from "../LargeButton/LargeButton";
import CustomTimePicker from "../TimePicker/TimePicker";
import EventComponent from "../EventComponent/EventComponent";
import AlarmComponent from "../AlarmComponent/AlarmComponent";
import CustomTextField from "../TextField/TextField";
import DaysComponent from "../DaysComponent/DaysComponent";
import AlarmOption from "../AlarmOption/AlarmOption";
import TitleSection from "../TitleSection/TitleSection";
import PersonalCard from "../PersonalCard/PersonalCard";

const Panel = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="panel">
      <LoginForm />
      <SignUpForm />
      <AlarmComponent />
      <Button content="Enviar" variant="primary" />
      <Button content="Cancelar" variant="secondary" />
      <LargeButton content="Agregar evento" />

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
      <EventComponent />

      <CustomTextField
        label="Nombre"
        placeholder="Ingrese su nombre"
        helperText="Assertive text"
      />
      <DaysComponent />
      <AlarmOption label="Sonar cada 5 minutos" cita="Aplazar" />
      <TitleSection title="hola" />
      <PersonalCard name="Juan" email="user@email" />
    </div>
  );
};

export default Panel;
