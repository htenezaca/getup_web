import React from 'react';
import './Panel.css';
import LoginForm from '../LoginForm/LoginForm';
import CustomDatePicker from '../DatePicker/DatePicker';
import SignUpForm from '../SignUpForm/SignUpForm';
import Button from '../ShortButton/Button';
import Popup from '../Popup/Popup';

const Panel = ({ children }) => {
  return (
    <div className="panel">
        <LoginForm />
        <SignUpForm />
          <Button  content="Enviar" variant="primary" />
          <Button content="Cancelar" variant="secondary" />
          {/*  <Popup firstButton={{ "content": "Aceptar", "variant": "primary"}} secondButton={{ "content": "Cancelar", "variant": "secondary"}} />
    */}
      </div>
  );
};

export default Panel;