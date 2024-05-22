import "./../styles/about.css";

import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <Link to={`/`} className="active">
            Inicio
          </Link>
        </nav>
      </header>
      <div className="container-fluid page-header d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5 mb-5">
        <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">
          Sobre Nosotros
        </h1>
      </div>
      {/* Page Header Start */}
      {/* About Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row align-items-center pb-1">
            <div className="col-lg-5">
              <img
                className="img-thumbnail p-3"
                src="src/assets/img/relleno.png"
                alt=""
              />
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0">
              <h1 className="mt-2 mb-4">Soluciones SKMA</h1>
              <p className="mb-4">
                Somos una empresa líder en soluciones de software, comprometida
                con la innovación y la excelencia. Nuestro equipo de expertos se
                dedica a proporcionar soluciones de software personalizadas que
                ayudan a las empresas a superar sus desafíos más complejos.
                <br /> <br />
                En SKMA, creemos que la tecnología es una herramienta poderosa
                que puede transformar las empresas y mejorar la vida de las
                personas. Estamos dedicados a usar nuestra experiencia en
                desarrollo de software para ayudar a nuestros clientes a
                alcanzar sus objetivos y lograr el éxito.
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4">
              <div
                className="d-flex align-items-center border mb-4 mb-lg-0 p-4"
                style={{ height: 120 }}
              >
                <i className="fa fa-2x fa-map-marker-alt text-primary mr-3" />
                <div className="d-flex flex-column">
                  <h5 className="font-weight-bold">Our Office</h5>
                  <p className="m-0">Mz 52 - Casa 11 - xBarrio</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="d-flex align-items-center border mb-4 mb-lg-0 p-4"
                style={{ height: 120 }}
              >
                <i className="fa fa-2x fa-envelope-open text-primary mr-3" />
                <div className="d-flex flex-column">
                  <h5 className="font-weight-bold">Correo Empresarial</h5>
                  <p className="m-0">empresao@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="d-flex align-items-center border mb-4 mb-lg-0 p-4"
                style={{ height: 120 }}
              >
                <i className="fas fa-2x fa-phone-alt text-primary mr-3" />
                <div className="d-flex flex-column">
                  <h5 className="font-weight-bold">Numero de Contacto</h5>
                  <p className="m-0">+57 3122143672</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Team Start */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-5">
              <h1 className="mt-2 mb-3">Nuestros Expertos:</h1>
              <h4 className="font-weight-normal text-muted mb-4">
                Todos capacitados para realizar sus tareas con el mejor
                desempeño
              </h4>
            </div>
            <div className="col-lg-8 mb-5">
              <div className="row">
                <div className="col-lg-6">
                  <div className="owl-carousel team-carousel">
                    <div className="team-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src="src/assets/img/santiago.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        className="border border-top-0 text-center"
                        style={{ padding: 30 }}
                      >
                        <h5 className="font-weight-bold">Santiago Jojoa</h5>
                        <span>CEO, Founder</span>
                      </div>
                    </div>{" "}
                    <br />
                    <div className="team-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src="src/assets/img/angie.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        className="border border-top-0 text-center"
                        style={{ padding: 30 }}
                      >
                        <h5 className="font-weight-bold">Angie Puerres</h5>
                        <span>Designer</span>
                      </div>
                    </div>{" "}
                    <br />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="owl-carousel team-carousel">
                    <div className="team-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src="src/assets/img/oscar.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        className="border border-top-0 text-center"
                        style={{ padding: 30 }}
                      >
                        <h5 className="font-weight-bold">Oscar Narvaez</h5>
                        <span>Developer</span>
                      </div>
                    </div>{" "}
                    <br />
                    <div className="team-item">
                      <div className="position-relative">
                        <img
                          className="img-fluid w-100"
                          src="src/assets/img/mariachi.jpg"
                          alt=""
                        />
                      </div>
                      <div
                        className="border border-top-0 text-center"
                        style={{ padding: 30 }}
                      >
                        <h5 className="font-weight-bold">Mario Pantoja</h5>
                        <span>Marketer</span>
                      </div>
                    </div>{" "}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
