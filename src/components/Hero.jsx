function Hero() {
  return (
    <section id="inicio" className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-8">
            <p className="text-primary fw-semibold mb-2">
              Tu mundo gamer comienza aquí
            </p>

            <h1 className="display-5 fw-bold">
              Bienvenido a GameHub
            </h1>

            <p className="lead">
              Descubre videojuegos, novedades y grandes aventuras.
            </p>

            <a href="#ofertas" className="btn btn-primary">
              Ver ofertas
            </a>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="bg-dark text-white p-4 text-center rounded">
              <p className="display-4 mb-2">🎮</p>

              <p className="h4 mb-0">
                Encuentra tu próxima aventura
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;