import React from "react";
import SignUpForm from "../components/SignUpForm/SignUpForm";

const SignupPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        paddingTop: "50px",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        marginRight: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          marginRight: "0px",
        }}
      >
        <div style={{ marginRight: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {" "}
            <img src="image 1.png" alt="Imagen de inicio de sesión" />
            <p style={{ color: "#614D9E", padding: "10px" }}>
              ¡Bienvenido a nuestra aplicación de alarmas y agenda! Nunca más
              llegues tarde a tus citas importantes o pierdas el primer tren de
              la mañana con nuestra aplicación de alarmas personalizada. ¡Pero
              eso no es todo! Además de ser una aplicación de alarmas
              personalizada, nuestra aplicación también cuenta con tecnología de
              inteligencia artificial para identificar tus hábitos de sueño y
              sugerir la mejor hora para que te despiertes.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <h3 style={{ color: "#614D9E", padding: "20px" }}>Registrarse</h3>

          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
