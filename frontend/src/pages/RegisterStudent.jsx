import "./../styles/registerStudent.css";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

function RegisterStudent() {
  const [form, setForm] = useState({
    doc: "",
    code: "",
    name: "",
    tel: "",
    uni: "",
    email: "",
    password: "",
    carrer: "",
  });

  const navigate = useNavigate();

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
        </nav>
      </header>
      <div className="registerStudentWrapper">
        <h2>Estudiante</h2>
        <form
          className="grid-form registerStudentForm"
          id="registrationForm"
          onSubmit={(e) => {
            e.preventDefault();
            fetch("http://localhost:8000/api/students/", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(form),
            }).then((response) => {
              if (response.status === 201) {
                navigate(`/login`);
              }
            });
          }}
        >
          <div>
            <label htmlFor="name">Nombres:</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <br />
            <label htmlFor="email">Correo:</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <br />
            <label htmlFor="password">Contraseña:</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              required
              minLength={8}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <br />
            <label htmlFor="code">Código de Estudiante:</label>
            <br />
            <input
              type="text"
              id="code"
              name="code"
              required
              value={form.code}
              onChange={(e) => setForm({ ...form, code: e.target.value })}
            />
            <br />
          </div>
          <div>
            <label htmlFor="doc">Cédula:</label>
            <br />
            <input
              type="text"
              id="doc"
              name="doc"
              required
              value={form.doc}
              onChange={(e) => setForm({ ...form, doc: e.target.value })}
            />
            <br />
            <label htmlFor="tel">Número de Celular:</label>
            <br />
            <input
              type="tel"
              id="tel"
              name="tel"
              required
              pattern="[0-9]{10}"
              value={form.tel}
              onChange={(e) => setForm({ ...form, tel: e.target.value })}
            />
            <br />
            <label htmlFor="uni">Universidad:</label>
            <br />
            <input
              type="text"
              id="uni"
              name="uni"
              required
              value={form.uni}
              onChange={(e) => setForm({ ...form, uni: e.target.value })}
            />
            <br />
            <label htmlFor="career">Carrera:</label>
            <br />
            <select
              className="carrer"
              id="career"
              name="career"
              required
              value={form.career}
              onChange={(e) => setForm({ ...form, career: e.target.value })}
            >
              <option value="">Seleccione una carrera</option>
              <option value="carrera1">Carrera 1</option>
              <option value="carrera2">Carrera 2</option>
              <option value="carrera3">Carrera 3</option>
            </select>
            <br />
          </div>
          <button className="registerStudentButton" type="submit">
            Registrar
          </button>
        </form>
        <div className="login">
          <p>
            ¿Ya tienes una cuenta? <Link to={`/login`}>Inicia Sesión</Link>
          </p>
        </div>{" "}
        <br />
      </div>
    </>
  );
}

export default RegisterStudent;
