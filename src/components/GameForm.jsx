import { useState } from "react";

function GameForm({ onAgregar }) {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [precioNormal, setPrecioNormal] = useState("");
  const [precioOferta, setPrecioOferta] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (
      !titulo.trim() ||
      !genero.trim() ||
      !precioNormal ||
      !precioOferta ||
      !descripcion.trim() ||
      !imagen.trim()
    ) {
      setError("Completa todos los campos antes de agregar el videojuego.");
      return;
    }

    const nuevoJuego = {
      titulo: titulo.trim(),
      genero: genero.trim(),
      precioNormal: Number(precioNormal),
      precioOferta: Number(precioOferta),
      descripcion: descripcion.trim(),
      imagen: imagen.trim(),
    };

    onAgregar(nuevoJuego);

    setTitulo("");
    setGenero("");
    setPrecioNormal("");
    setPrecioOferta("");
    setDescripcion("");
    setImagen("");
    setError("");
  }

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">
          Agregar videojuego
        </h2>

        <form
          onSubmit={handleSubmit}
          className="row g-3"
        >
          {error && (
            <div className="col-12">
              <div className="alert alert-danger">
                {error}
              </div>
            </div>
          )}

          <div className="col-md-6">
            <label htmlFor="tituloJuego" className="form-label">
              Nombre
            </label>

            <input
              id="tituloJuego"
              type="text"
              className="form-control"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="generoJuego" className="form-label">
              Categoría
            </label>

            <input
              id="generoJuego"
              type="text"
              className="form-control"
              value={genero}
              onChange={(event) => setGenero(event.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="precioNormal" className="form-label">
              Precio normal
            </label>

            <input
              id="precioNormal"
              type="number"
              min="0"
              className="form-control"
              value={precioNormal}
              onChange={(event) => setPrecioNormal(event.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="precioOferta" className="form-label">
              Precio oferta
            </label>

            <input
              id="precioOferta"
              type="number"
              min="0"
              className="form-control"
              value={precioOferta}
              onChange={(event) => setPrecioOferta(event.target.value)}
            />
          </div>

          <div className="col-12">
            <label htmlFor="imagenJuego" className="form-label">
              URL de imagen
            </label>

            <input
              id="imagenJuego"
              type="url"
              className="form-control"
              value={imagen}
              onChange={(event) => setImagen(event.target.value)}
              placeholder="https://..."
            />
          </div>

          <div className="col-12">
            <label htmlFor="descripcionJuego" className="form-label">
              Descripción
            </label>

            <textarea
              id="descripcionJuego"
              className="form-control"
              rows="3"
              value={descripcion}
              onChange={(event) => setDescripcion(event.target.value)}
            ></textarea>
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-success"
            >
              Agregar videojuego
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default GameForm;
