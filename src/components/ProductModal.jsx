import { useEffect, useRef } from "react";
import { Modal } from "bootstrap";

function ProductModal({ juego, onCerrar }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!juego || !modalRef.current) {
      return;
    }

    const modal = Modal.getOrCreateInstance(modalRef.current);

    modal.show();

    const manejarCierre = () => {
      onCerrar();
    };

    modalRef.current.addEventListener(
      "hidden.bs.modal",
      manejarCierre,
      { once: true }
    );

    return () => {
      modalRef.current?.removeEventListener(
        "hidden.bs.modal",
        manejarCierre
      );
    };
  }, [juego, onCerrar]);

  if (!juego) {
    return null;
  }

  return (
    <div
      className="modal fade"
      ref={modalRef}
      tabIndex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">

            <h5
              className="modal-title"
              id="productModalLabel"
            >
              {juego.titulo}
            </h5>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            ></button>

          </div>

          <div className="modal-body">

            <img
              src={juego.imagen}
              alt={juego.titulo}
              className="img-fluid rounded mb-3"
            />

            <span className="badge bg-danger mb-3">
              Oferta
            </span>

            <h6>Género</h6>

            <p className="text-muted">
              {juego.genero}
            </p>

            <h6>Descripción</h6>

            <p>
              {juego.descripcion}
            </p>

            <p className="mb-1">
              Precio normal:{" "}
              <span className="text-decoration-line-through text-muted">
                ${juego.precioNormal.toLocaleString("es-CL")}
              </span>
            </p>

            <p className="fs-5 fw-bold text-danger mb-0">
              Precio oferta: $
              {juego.precioOferta.toLocaleString("es-CL")}
            </p>

          </div>

          <div className="modal-footer">

            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cerrar
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductModal;
