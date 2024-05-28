import "./../styles/index.css";

import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <header className="header">
        <Link to={`/`} className="logo">
          TutorUni
        </Link>
        <nav className="navbar">
          <Link to={`/`} className="active">
            Inicio
          </Link>
          <Link to={`/about`}>Acerca de Nosotros</Link>
          <Link to={`/login`}>Iniciar Sesión</Link>
        </nav>
      </header>
      <section className="home">
        <div className="home-content">
          <h1>Bienvenido a TutorUni</h1>
          <h3>Únete a nosotros!</h3>
          <p>
            estamos aquí para hacer que tu experiencia universitaria sea mucho
            más amigable y menos estresante. Encontramos que muchos estudiantes
            se enfrentan a desafíos como entender conceptos complicados, lidiar
            con una sobrecarga de información o simplemente necesitar un poco de
            apoyo adicional en sus estudios. Pero no te preocupes, ¡¡estamos
            aquí para ayudarte con todo eso y más!!
          </p>
          <div className="btn-box">
            <Link to={`/rolSelect`}>Registrarte</Link>
            <Link to={`/login`}>Ver Ofertas</Link>
          </div>
        </div>
        <div className="home-sci">
          <a href="https://www.unicesmag.edu.co/">
            <i className="bx bx-world" />
          </a>
          <a href="https://www.instagram.com/unicesmagoficial/">
            <i className="bx bxl-instagram-alt" />
          </a>
          <a href="https://github.com/SantJojoa/Tutor-Uni">
            <i className="bx bxl-github" />
          </a>
        </div>
      </section>
    </>
  );
}

export default Index;
