import React from "react";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        height: "100vh",
        paddingTop: "100px",
        width: "100%",
        maxWidth: "800px",
        margin: "0 auto",
        marginRight: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "400px",
          margin: "0 auto",
          marginRight: "10px",
        }}
      >
        <h3 style={{ color: "#614D9E", padding: "20px" }}>Iniciar Sesión</h3>

        <LoginForm />

        <div>
          <p style={{ color: "#614D9E", padding: "20px" }}>
            En el caso de no estar registrado, de clic en{" "}
            <span style={{ color: "#614D9E", fontWeight: "bold" }}>
              Crear cuenta
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
