import React from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  return (
    <div className="container">
      <form className="signup-form">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Ingrese el usuario"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Ingrese el email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Ingrese la contraseña"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Repetir contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Ingrese otra vez la contraseña"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsAndConditions"
          />
          <label htmlFor="termsAndConditions" className="form-check-label">
            Aceptar los términos y condiciones
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar
        </button>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">
            Iniciar sesión con Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
