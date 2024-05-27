import "./../styles/selectTeacher.css";

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
      <br />
      <section className="hero">
        <div className="container">
          <h1>¡Aqui encontraras Docentes Capacitados para atender todas tus inquietudes...!</h1>
        </div>
      </section>
      <section className="empresas">

      </section>
      <footer>
        <div className="container">
          <p>© 2024 || Soluciones SKMA ||</p>
        </div>
      </footer>
    </>
  );
}

export default Home;
