import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

function CustomDatePicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  const popperModifiers = {
    offset: {
      enabled: true,
      offset: "0px, 10px", // Personaliza el desplazamiento de la posición del popper
    },
    flip: {
      enabled: false, // Evita que el popper se vuelque automáticamente
    },
    preventOverflow: {
      enabled: true, // Evita que el popper se desborde del contenedor padre
      boundariesElement: "viewport", // Limita el desbordamiento al área visible del navegador
    },
    placement: "auto", // Establece la posición del popper automáticamente según el espacio disponible
    modifiers: {
      // Utiliza la opción "centered" para centrar el popper en el campo de entrada
      center: {
        enabled: true,
        order: 950,
        fn: ({ state }) => {
          const popper = state.elements.popper;
          const reference = state.elements.reference;

          popper.style.left =
            reference.offsetLeft +
            reference.offsetWidth / 2 -
            popper.offsetWidth / 2 +
            "px";
        },
      },
    },
  };

  return (
    <div className="container">
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        open={true}
        popperModifiers={popperModifiers} // Pasamos las opciones de configuración al componente DatePicker
      />
    </div>
  );
}

export default CustomDatePicker;
