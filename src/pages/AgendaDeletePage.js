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
import Popup from "../components/Popup/Popup";

const AgendaDeletePage = () => {
  return (
    <React.Fragment>
      <div style={{ position: "absolute", zIndex: -1 }}>
        <div style={{ display: "flex", paddingTop: "60px" }}>
          <div style={{ width: "325px" }}>
            <TitleSection title="Eventos" />
            {/* Send to back a component */}
            <div style={{ position: "absolute", zIndex: -1 }}>
              <CustomDatePicker />
            </div>

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
              <Link to={"/agenda/edit"}>
                <EventComponent text=" Cita trabajo 1 | 02:00pm" />
              </Link>
              <EventComponent text=" Cita trabajo 2 | 02:00pm" />

              <Link to={"/agenda/create"}>
                <LargeButton content={"Agregar Evento"} variant={"primary"} />
              </Link>
              <br />
              <br />
            </div>
          </div>
          <Popup
            firstButton={{
              content: "Aceptar",
              variant: "primary",
            }}
            secondButton={{
              content: "Cancelar",
              variant: "secondary",
            }}
            content="¿Estás seguro de eliminar el evento Cita trabajo 1?"
            title={"Eliminar evento"}
            goto={"agenda"}
          >
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
          </Popup>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AgendaDeletePage;
