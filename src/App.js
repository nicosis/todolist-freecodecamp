import "./App.css";
import Logo from "./component/Logo";
import ToDoList from "./component/ToDoList";

function App() {
  return (
    <div className="App">
      <Logo />
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ToDoList/>
      </div>
    </div>
  );
}

export default App;
