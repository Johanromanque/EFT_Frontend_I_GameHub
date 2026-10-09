function CategoryFilter({
  categorias,
  categoriaSeleccionada,
  setCategoriaSeleccionada,
}) {
  return (
    <section className="pb-4">
      <div className="container">
        <div className="text-center mb-3">
          <h3 className="fw-bold">Filtrar por categoría</h3>
        </div>

        <div className="d-flex flex-wrap justify-content-center gap-2">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              type="button"
              className={`btn ${
                categoriaSeleccionada === categoria
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => setCategoriaSeleccionada(categoria)}
            >
              {categoria}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryFilter;
