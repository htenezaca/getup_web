import React from "react";
import TitleSection from "../components/TitleSection/TitleSection";
import CustomTextField2 from "../components/TextField2/TextField2";
import CustomTimePicker from "../components/TimePicker/TimePicker";
import Button from "../components/ShortButton/Button";
import { Link } from "react-router-dom";
import AlarmComponent from "../components/AlarmComponent/AlarmComponent";
import AlarmOption from "../components/AlarmOption/AlarmOption";
import DaysComponent from "../components/DaysComponent/DaysComponent";

const AlarmaCreatePage = () => {
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

          <AlarmComponent title="Revisar correo" repeat="Todos los días" />
          <AlarmComponent
            title="Dictar curso"
            repeat="Lunes, Miercoles, Viernes"
          />

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
            flexDirection: "column",
          }}
        >
          <DaysComponent style={{ paddingRight: "20px" }} />
          <br />
          <CustomTextField2
            label={"Titulo"}
            placeholder={"Ingresar el nombre de la alrma"}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "40px",
            flexDirection: "column",
            width: "100%", // ancho fijo del contenedor
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <AlarmOption
              cita={"Sonido de Alarma"}
              label={"Bixby"}
              style={{ marginRight: "00px" }}
            />
            <AlarmOption
              cita={"Vibración"}
              label={"Uniforme"}
              style={{ marginLeft: "30px", marginRight: "30px" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "5px",
            flexDirection: "column",
            width: "100%", // ancho fijo del contenedor
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <AlarmOption
              cita={"Aplazar"}
              label={"5 min, 3 veces"}
              style={{ marginLeft: "20px", marginRight: "20px" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <Link to={"/alarma"} style={{ marginRight: "10px" }}>
            <Button
              content={"Cancelar"}
              variant={"secondary"}
              style={{ maxWidth: "120px" }}
            />
          </Link>
          <Link to={"/alarma"} style={{ marginLeft: "10px" }}>
            <Button
              content={"Guardar"}
              variant={"primary"}
              style={{ maxWidth: "120px" }}
            />
          </Link>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default AlarmaCreatePage;
