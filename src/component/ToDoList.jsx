import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";
import "../styles/ToDoList.css";

const ToDoList = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      setTareas([tarea, ...tareas]);
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          tarea.completada = !tarea.completada;
        }
        return tarea;
      })
    );
  };

  return (
    <>
      <ToDoForm onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <ToDo
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
};

export default ToDoList;
