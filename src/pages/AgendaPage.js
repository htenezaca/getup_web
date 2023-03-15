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
import AgendaEditPage from "./AgendaEditPage";

const AgendaPage = () => {
  return (
    <div style={{ display: "flex", paddingTop: "60px" }}>
      <div style={{ width: "325px" }}>
        <TitleSection title="Eventos" />
        <CustomDatePicker />
        {/* Generar una lista para colocar componentes flex */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "350px",
          }}
        >
          <EventComponent text=" Cita trabajo 1 | 02:00pm" />

          <EventComponent text=" Cita trabajo 2 | 02:00pm" />

          <Link to={"/agenda/create"}>
            <LargeButton content={"Agregar Evento"} variant={"primary"} />
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
          <CustomTextField
            label={"Titulo"}
            placeholder={"Cita trabajo 1"}
            helperText={"Nombre de la cita"}
          />
          <CustomSelect
            label="Etiqueta"
            options={[
              { value: "Trabajo", label: "Trabajo" },
              { value: "Ocio", label: "Ocio" },
              { value: "Familia", label: "Familia" },
            ]}
            helperText="Selecciona una opción para continuar"
            infoText="Esta es la lista de opciones disponibles"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingBottom: "10px",
          }}
        >
          <CustomTextField
            label={"Descripción"}
            placeholder={"Este es un evento de trabajo"}
            helperText={"Descripción del evento"}
          />
          <CustomTextField
            label={"Invitados"}
            placeholder={"user@mail.com"}
            helperText={"Ingrese los correos de los invitados"}
          />
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

export default AgendaPage;
