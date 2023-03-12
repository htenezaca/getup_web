import React from "react";

const TitleSection = ({ title }) => {
  return (
    <div
      style={{
        backgroundColor: "#614D9E",
        width: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        fontSize: "24px",
        color: "#FFFFFF",
      }}
    >
      {title}
    </div>
  );
};

export default TitleSection;
