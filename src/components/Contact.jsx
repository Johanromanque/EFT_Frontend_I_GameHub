import { useState } from "react";

function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  function validarFormulario() {
    const nuevosErrores = {};

    if (nombre.trim() === "") {
      nuevosErrores.nombre = "Debes ingresar tu nombre.";
    }

    if (email.trim() === "") {
      nuevosErrores.email = "Debes ingresar tu correo electrónico.";
    } else {
      const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!formatoEmail.test(email)) {
        nuevosErrores.email = "Ingresa un correo electrónico válido.";
      }
    }

    if (mensaje.trim() === "") {
      nuevosErrores.mensaje = "Debes ingresar un mensaje.";
    }

    return nuevosErrores;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nuevosErrores = validarFormulario();

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      setEnviado(false);
      return;
    }

    setErrores({});
    setEnviado(true);

    // Limpia el formulario después de una validación correcta.
    setNombre("");
    setEmail("");
    setMensaje("");
  }

  return (
    <section id="contacto" className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <h2 className="text-center fw-bold mb-3">
              Contacto
            </h2>

            <p className="text-center text-muted mb-4">
              ¿Tienes alguna consulta? Escríbenos.
            </p>

            {enviado && (
              <div
                className="alert alert-success"
                role="alert"
              >
                ✓ Mensaje enviado correctamente.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label
                  htmlFor="nombre"
                  className="form-label"
                >
                  Nombre
                </label>

                <input
                  type="text"
                  id="nombre"
                  className={`form-control ${
                    errores.nombre ? "is-invalid" : ""
                  }`}
                  value={nombre}
                  onChange={(event) => {
                    setNombre(event.target.value);
                    setEnviado(false);
                  }}
                  placeholder="Ingresa tu nombre"
                />

                {errores.nombre && (
                  <div className="invalid-feedback">
                    {errores.nombre}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="email"
                  className="form-label"
                >
                  Correo electrónico
                </label>

                <input
                  type="email"
                  id="email"
                  className={`form-control ${
                    errores.email ? "is-invalid" : ""
                  }`}
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setEnviado(false);
                  }}
                  placeholder="correo@ejemplo.cl"
                />

                {errores.email && (
                  <div className="invalid-feedback">
                    {errores.email}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="mensaje"
                  className="form-label"
                >
                  Mensaje
                </label>

                <textarea
                  id="mensaje"
                  className={`form-control ${
                    errores.mensaje ? "is-invalid" : ""
                  }`}
                  rows="5"
                  value={mensaje}
                  onChange={(event) => {
                    setMensaje(event.target.value);
                    setEnviado(false);
                  }}
                  placeholder="Escribe tu mensaje"
                ></textarea>

                {errores.mensaje && (
                  <div className="invalid-feedback">
                    {errores.mensaje}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
