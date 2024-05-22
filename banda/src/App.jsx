import "./App.css";
import Contenido from "./Components/Contenido";
import Descripcion from "./Components/Descripcion";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="todo">
      <Navbar />
      <Contenido />
      <Descripcion />
    </div>
  );
}

export default App;
