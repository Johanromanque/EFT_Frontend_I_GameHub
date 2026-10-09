import { useEffect } from "react";

function CartToast({ mensaje, onCerrar }) {
  useEffect(() => {
    if (!mensaje) {
      return;
    }

    const temporizador = setTimeout(() => {
      onCerrar();
    }, 3000);

    return () => {
      clearTimeout(temporizador);
    };
  }, [mensaje, onCerrar]);

  if (!mensaje) {
    return null;
  }

  return (
    <div
      className="toast-container position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 1100 }}
    >
      <div
        className="toast show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <strong className="me-auto">
            GameHub
          </strong>

          <button
            type="button"
            className="btn-close"
            aria-label="Cerrar"
            onClick={onCerrar}
          ></button>
        </div>

        <div className="toast-body">
          {mensaje}
        </div>
      </div>
    </div>
  );
}

export default CartToast;
