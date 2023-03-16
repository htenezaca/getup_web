import React from "react";

const SleepBarChart = ({ sleepHours }) => {
  // Establecer la altura máxima de la barra (en píxeles)
  const MAX_HEIGHT = 200;

  // Establecer los días de la semana
  const days = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom"];

  // Calcular la altura de cada barra
  const heights = sleepHours.map((hours) => (hours / 8) * MAX_HEIGHT);

  // Crear un array de elementos <div> para cada barra
  const bars = heights.map((height, index) => (
    <div
      key={days[index]}
      style={{
        display: "flex",
        flexDirection: "column",
        height: `${height}px`,
        width: "80px",
        backgroundColor: "#614d9e",
        margin: "0 5px",
      }}
    />
  ));

  return (
    <div style={{ display: "flex", alignItems: "flex-end", margin: "50px" }}>
      {bars}
    </div>
  );
};

export default SleepBarChart;
