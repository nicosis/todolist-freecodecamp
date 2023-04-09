import React, { useState } from "react";
import "../styles/ToDoForm.css";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = (props) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
    setInput("")
    console.log('vaciado');
  };
  return (
    <div>
      <form className="tarea-form" onSubmit={handleEnvio}>
        <input
          className="tarea-input"
          type="text"
          placeholder="Escribe una tarea"
          name="texto"
          onChange={handleChange}
        />
        <button className="tarea-boton">Agregar Tarea</button>
      </form>
    </div>
  );
};

export default ToDoForm;
