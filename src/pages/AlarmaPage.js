import React from "react";
import TitleSection from "../components/TitleSection/TitleSection";
import CustomDatePicker from "../components/DatePicker/DatePicker";
import EventComponent from "../components/EventComponent/EventComponent";
import CustomTextField from "../components/TextField/TextField";
import CustomTimePicker from "../components/TimePicker/TimePicker";
import Button from "../components/ShortButton/Button";
import CustomSelect from "../components/Select/Select";
import { Link } from "react-router-dom";
import LargeButton from "../components/LargeButton/LargeButton";
import AlarmComponent from "../components/AlarmComponent/AlarmComponent";

const AlarmaPage = () => {
  return (
    <div style={{ display: "flex", paddingTop: "60px" }}>
      <div style={{ width: "325px" }}>
        <TitleSection title="Alarmas" />
        {/* Generar una lista para colocar componentes flex */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AlarmComponent title="Despertar" repeat="Todos los dias" />
          <AlarmComponent title="Almuerzo" repeat="Lunes, Miercoles, Viernes" />

          <Link to={"/larma/create"}>
            <LargeButton content={"Agregar Alarma"} variant={"primary"} />
          </Link>
          <br />
          <br />
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          <CustomTimePicker />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          {/*  aqui van los elementos en una fila*/}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "20px",
          }}
        >
          {/* aqui van los dos primeros switch */}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          {/* aqui va el ultimo switch */}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <Link to={"/agenda/edit"} style={{ marginLeft: "10px" }}>
            <Button
              content={"Edit"}
              variant={"primary"}
              style={{ maxWidth: "120px" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlarmaPage;
