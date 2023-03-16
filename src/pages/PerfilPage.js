import React from "react";
import TitleSection from "../components/TitleSection/TitleSection";
import { Link } from "react-router-dom";
import PersonalCard from "../components/PersonalCard/PersonalCard";
import Button from "../components/ShortButton/Button";
import SleepBarChart from "../components/SleepBarChart/SleepBarChart";
import SemiCircleProgressBar from "../components/Semicircle/Semicircle";

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            bottom: "0",
          }}
        >
          <Link to="/login">
            <Button content="Cerrar sesión" variant="primary" />
          </Link>
        </div>
      </div>
      <div style={{ flex: 1 }}>
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "40px",
              flexDirection: "column",
            }}
          >
            <SemiCircleProgressBar
              progress={85}
              size={300}
              strokeWidth={25}
              circleOneStroke="#e6e6e6"
              circleTwoStroke="#614d9e"
            />
            <SleepBarChart sleepHours={[7, 8, 6, 9, 8, 7, 9]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilPage;
