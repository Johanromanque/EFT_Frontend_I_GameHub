import { useState } from "react";

function Header({ cantidadCarrito }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">

          <a className="navbar-brand" href="#inicio">
            GameHub
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Mostrar navegación"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav">

              <li className="nav-item">
                <a className="nav-link active" href="#inicio">
                  Inicio
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#juegos">
                  Juegos
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#carrito">
                  Carrito{" "}
                  <span className="badge bg-danger">
                    {cantidadCarrito}
                  </span>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#ofertas">
                  Ofertas
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  Contacto
                </a>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;
