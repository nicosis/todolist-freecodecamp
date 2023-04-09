import React from "react";
import "../styles/ToDo.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const ToDo = ({ id, texto, completada, completarTarea, eliminarTarea }) => {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
};

export default ToDo;
