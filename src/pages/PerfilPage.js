import React from "react";
import TitleSection from "../components/TitleSection/TitleSection";
import { Link } from "react-router-dom";
import PersonalCard from "../components/PersonalCard/PersonalCard";
import Button from "../components/ShortButton/Button";
import ActivityPieChart from "../components/ActivityPieChart/ActivityPieChart";
import SleepBarChart from "../components/SleepBarChart/SleepBarChart";

const PerfilPage = () => {
  const activityData = [
    { label: "Trabajo", value: 40 },
    { label: "Ocio", value: 30 },
    { label: "Familia", value: 30 },
  ];
  return (
    <div style={{ display: "flex", paddingTop: "60px" }}>
      <div style={{ width: "325px" }}>
        <TitleSection title="Perfil" />
        <br />
        <PersonalCard name={"Juan Perez"} email={"juanperez@mail.com"} />

        {/* Al final colocar un boton y centrarlo */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/login">
            <Button content="Cerrar sesión" variant="primary" />
          </Link>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <div
          style={{
            backgroundColor: "white",
            width: "40%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "bold",
            fontSize: "24px",
            color: "black",
            marginTop: "40px",
          }}
        >
          Hábitos
        </div>
        <ActivityPieChart data={activityData} />
        <SleepBarChart sleepHours={[7, 8, 6, 9, 8, 7, 9]} />
      </div>
    </div>
  );
};

export default PerfilPage;
