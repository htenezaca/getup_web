import React from "react";
import SignUpForm from "../components/SignUpForm/SignUpForm";

const SignupPage = () => {
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
      <SignUpForm />
    </div>
  );
};

export default SignupPage;
