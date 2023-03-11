import React from 'react';
import './LoginForm.css'; // Importamos los estilos CSS personalizados

const LoginForm = () => {
  return (
    <div className="container">
      <form className="login-form">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico o teléfono</label>
          <input type="text" className="form-control" id="email" placeholder="Correo electrónico o teléfono" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" placeholder="Contraseña" />
        </div>
        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        <div className="mb-3">
          <a href="#">¿Olvidaste tu contraseña?</a>
              </div >
        <div className="mb-3">
            <button type="submit" className="btn btn-primary">Iniciar sesión con Google</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;