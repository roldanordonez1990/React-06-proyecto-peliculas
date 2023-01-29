import { useState } from "react";
import { Buscardor } from "./components/Buscardor";
import { Creador } from "./components/Creador";
import { Listado } from "./components/Listado";
import logo from "./logo.png";

function App() {
  //Este estado va a estar siempre devolviendo y recibiendo información 
  //La clave está en rellenar el setListadoPelis.
  //Se rellena en los otros componentes, lo pasan aquí y una vez listadoPelis esté relleno, se devuelve allí.
  //Esto se hace en App para que actualice asíncronamente.
  const [listadoPelis, setListadoPelis] = useState([]);
  return (
    <div className="layout">
      <header className="cabecera">
        <img className="logo" src={logo} alt="logo" />
        <h3>Nerd-Flix</h3>
      </header>
      <nav className="navegacion">
        <ul>
          <li>
            <a href="https://www.marca.com">
              <strong>Inicio</strong>
            </a>
          </li>
          <li>
            <a href="https://www.marca.com">
              <strong>Películas</strong>
            </a>
          </li>
          <li>
            <a href="https://www.marca.com">
              <strong>Blog</strong>
            </a>
          </li>
          <li>
            <a href="https://www.marca.com">
              <strong>Contacto</strong>
            </a>
          </li>
        </ul>
      </nav>
      <section className="contenido">
        <Listado listadoPelis={listadoPelis} setListadoPelis={setListadoPelis}/>
      </section>
      <aside className="lateral">
        <Buscardor listadoPelis={listadoPelis} setListadoPelis={setListadoPelis} />
        <Creador setListadoPelis={setListadoPelis}/>
      </aside>
      <footer className="footer">
        &copy; Nerd-Flix 2023 Francisco J Roldán
      </footer>
    </div>
  );
}

export default App;
