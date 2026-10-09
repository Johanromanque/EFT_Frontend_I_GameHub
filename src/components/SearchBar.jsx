function SearchBar({ busqueda, setBusqueda }) {
  return (
    <section className="py-4 bg-light">
      <div className="container">

        <h2 className="h4 mb-3">
          Buscar videojuego
        </h2>

        <input
          type="search"
          className="form-control"
          placeholder="Escribe el nombre de un videojuego..."
          value={busqueda}
          onChange={(event) => setBusqueda(event.target.value)}
        />

      </div>
    </section>
  );
}

export default SearchBar;
