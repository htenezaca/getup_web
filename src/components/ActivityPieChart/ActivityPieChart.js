import React from "react";

const ActivityPieChart = ({ data }) => {
  const total = data.reduce((acc, d) => acc + d.value, 0);
  const colors = ["#6C5C9E", "#BAA6ED", "#8C83AC"];
  let startAngle = 0;

  return (
    <div style={{ margin: "40px" }}>
      <h5>Resumen de eventos</h5>
      <svg viewBox="-1 -1 2 2" style={{ width: "70%" }}>
        {data.map((d, i) => {
          const endAngle = startAngle + (d.value / total) * 360;
          const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
          const pathData = `
            M ${Math.cos((startAngle / 180) * Math.PI)} ${Math.sin(
            (startAngle / 180) * Math.PI
          )}
            A 1 1 0 ${largeArcFlag} 1 ${Math.cos(
            (endAngle / 180) * Math.PI
          )} ${Math.sin((endAngle / 180) * Math.PI)}
            L 0 0
          `;
          const style = {
            fill: colors[i],
            strokeWidth: "0.1",
            stroke: "white",
          };
          startAngle = endAngle;

          return <path key={i} d={pathData} style={style} />;
        })}
      </svg>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        {data.map((d, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                height: "10px",
                width: "10px",
                backgroundColor: colors[i],
                marginRight: "5px",
              }}
            />
            <div>
              {d.label} - {((d.value / total) * 100).toFixed(1)}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityPieChart;
