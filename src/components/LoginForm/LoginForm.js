import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="container">
      <form className="login-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo electrónico o teléfono
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Correo electrónico o teléfono"
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
            placeholder="Contraseña"
          />
        </div>
        <Link to="/agenda">
          <button type="submit" className="btn btn-primary">
            Iniciar sesión
          </button>
        </Link>

        <div className="mb-3">
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
        <Link to="/agenda">
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Iniciar sesión con Google
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
