import React from "react";
import TitleSection from "../components/TitleSection/TitleSection";
import CustomDatePicker from "../components/DatePicker/DatePicker";
import EventComponent from "../components/EventComponent/EventComponent";
import CustomTextField from "../components/TextField/TextField";
import CustomTimePicker from "../components/TimePicker/TimePicker";
import Button from "../components/ShortButton/Button";
import CustomSelect from "../components/Select/Select";

const AgendaEditPage = () => {
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
          <EventComponent text=" Cita trabajo 3 | 02:00pm" />
          <EventComponent text=" Cita trabajo 4 | 02:00pm" />
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
            paddingBottom: "40px",
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
              { value: "option1", label: "Opción 1" },
              { value: "option2", label: "Opción 2" },
              { value: "option3", label: "Opción 3" },
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
            paddingBottom: "20px",
          }}
        >
          <CustomTextField
            label={"label"}
            placeholder={"placeholder"}
            helperText={"helpertext"}
          />
          <CustomTextField
            label={"label"}
            placeholder={"placeholder"}
            helperText={"helpertext"}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button content={"Guardar"} variant={"primary"} />
        </div>
      </div>
    </div>
  );
};

export default AgendaEditPage;
