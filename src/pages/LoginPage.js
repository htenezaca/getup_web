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
      <LoginForm />
    </div>
  );
};

export default LoginPage;
