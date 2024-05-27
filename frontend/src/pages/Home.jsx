import "./../styles/home.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header className="header">
        <Link to={`/`} className="logo">
          TutorUni
        </Link>

        <nav className="navbar">
          <Link to={`/`}>Cerrar Sesión</Link>
        </nav>
      </header>
      <section className="hero">
        <div className="container">
          <h3>¡Empecemos eligiendo la materia en la que te vamos a ayudar!</h3>
          <form action="#" className="search-container">
            <i className="bx bxs-pencil" />
            <input
              id="input-a"
              type="text"
              className="se"
              placeholder="¿Cual es tu carrera?"
              name="cargo"
            />
            <div id="hidden-cb" style={{ display: "none" }}>
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
            <i className="bx bxs-book-bookmark" />
            <input
              id="input-b"
              type="text"
              placeholder="Elige la materia"
              name="lugar"
            />

<<<<<<< HEAD
            <form action=""></form>
            <button id="searchTutorButton" type="button" >
              Buscar Tutor
            </button>
=======
            <Link to="/SelectTeacher">
              <button id="searchTutorButton" type="button">
                Buscar Tutor
              </button>
            </Link>
>>>>>>> oscar
          </form>
          <p>
            Encuentra el profesor <span className="blue">ideal</span> para tus
            necesidades.
          </p>
        </div>
      </section>
      <section className="empresas">
        <div className="container">
          <div className="empresas-grid">
            <div className="empresa">
              <img src="src/assets/img/red.png" alt="Empresa 1" />
            </div>
            <div className="empresa">
              <img src="src/assets/img/images.png" alt="Empresa 2" />
            </div>
            <div className="empresa">
              <img src="src/assets/img/mariana2.png" alt="Empresa 3" />
            </div>
          </div>
          <p>
            Trabajamos con los <span>mejores docentes</span> de las mejores
            universidades.
          </p>
        </div>
      </section>
      <footer>
        <div className="social-media">
          <ul>
            <a href="https://www.unicesmag.edu.co/">
              <i className="bx bx-world" />
            </a>
            <a href="https://www.instagram.com/unicesmagoficial/">
              <i className="bx bxl-instagram-alt" />
            </a>
            <a href="https://github.com/SantJojoa/Tutor-Uni">
              <i className="bx bxl-github" />
            </a>
          </ul>
        </div>
        <div className="container">
          <p>© 2024 | Soluciones SKMA</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
