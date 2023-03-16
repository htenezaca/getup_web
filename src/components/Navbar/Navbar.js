import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light custom-nav-bar fixed-top"
      style={{
        backgroundColor: "#D9D9D9",
        padding: "0",
        margin: "0",
        height: "60px",
      }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto">
            <div
              className="nav-link active"
              aria-current="page"
              href="#"
              style={{ width: "150px", textAlign: "center" }}
            >
              <img src="bell_icon.png" height={30} width={30} />
            </div>
          </div>
          <div className="navbar-nav mx-auto">
            <a
              className="nav-link active hover-bg-custom"
              aria-current="page"
              href="/agenda"
              style={{ width: "150px", textAlign: "center" }}
            >
              Agenda
            </a>
            <a
              className="nav-link hover-bg-custom"
              href="/alarma"
              style={{ width: "150px", textAlign: "center" }}
            >
              Alarma
            </a>
            <a
              className="nav-link hover-bg-custom"
              href="/perfil"
              style={{ width: "150px", textAlign: "center" }}
            >
              Perfil
            </a>
          </div>
          <div className="navbar-nav ms-auto">
            <Link to="/login">
              <button
                className="btn"
                style={{ backgroundColor: "#6C5C9E", color: "#fff" }}
              >
                Iniciar sesión
              </button>
            </Link>
          </div>
        </div>
      </div>
      <style>
        {`
        .hover-bg-custom:hover {
          background-color: #C9C0E0;
        }
      `}
      </style>
    </nav>
  );
};

export default Navbar;
