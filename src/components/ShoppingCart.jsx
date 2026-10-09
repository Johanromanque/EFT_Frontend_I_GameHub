function ShoppingCart({ carrito, eliminarDelCarrito }) {
  const total = carrito.reduce(
    (acumulador, juego) => acumulador + juego.precioOferta,
    0,
  );

  return (
    <section id="carrito" className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4">Carrito de compras</h2>

        {carrito.length === 0 ? (
          <div className="alert alert-secondary">El carrito está vacío.</div>
        ) : (
          <>
            <div className="list-group mb-4">
              {carrito.map((juego, indice) => (
                <div
                  key={`${juego.id}-${indice}`}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>
                    <strong>{juego.titulo}</strong>

                    <div className="text-muted">
                      ${juego.precioOferta.toLocaleString("es-CL")}
                    </div>
                  </div>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarDelCarrito(indice)}
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>

            <p className="fw-bold">Productos en el carrito: {carrito.length}</p>

            <h4>Total: ${total.toLocaleString("es-CL")}</h4>
          </>
        )}
      </div>
    </section>
  );
}

export default ShoppingCart;
