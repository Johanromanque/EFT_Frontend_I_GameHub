function ProductCard({
  juego,
  agregarAlCarrito,
  enCarrito,
  onVerDetalle,
  onEliminar,
}) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img src={juego.imagen} className="card-img-top" alt={juego.titulo} />

        <div className="card-body d-flex flex-column">
          <span className="badge bg-danger mb-2">Oferta</span>
          <h5 className="card-title">{juego.titulo}</h5>

          <p className="text-muted">{juego.genero}</p>

          <p className="card-text">{juego.descripcion}</p>

          <div className="mt-auto">
            <p className="mb-1">
              <span className="text-decoration-line-through text-muted">
                ${juego.precioNormal.toLocaleString("es-CL")}
              </span>
            </p>

            <p className="fs-5 fw-bold text-danger">
              Oferta: ${juego.precioOferta.toLocaleString("es-CL")}
            </p>

            <div className="d-grid gap-2">
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={() => onVerDetalle(juego)}
              >
                Ver detalle
              </button>

              <button
                className={`btn ${enCarrito ? "btn-success" : "btn-primary"}`}
                type="button"
                onClick={() => agregarAlCarrito(juego)}
                disabled={enCarrito}
              >
                {enCarrito ? "✓ En el carrito" : "Agregar al carrito"}
              </button>

              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => onEliminar(juego.id)}
              >
                Eliminar del catálogo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
