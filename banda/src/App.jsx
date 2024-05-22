import "./App.css";
import Contenido from "./Components/Contenido";
import Descripcion from "./Components/Descripcion";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="todo">
      <Navbar />
      <Contenido />
      <Descripcion />
      <Footer />
    </div>
  );
}

export default App;
