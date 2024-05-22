import "./../styles/login.css";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

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
      <div className="wrapper">
        <h2>Ingresar</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            fetch("http://localhost:8000/api/students/", {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((response) => response.json())
              .then((data) => {
                if (
                  data.find(
                    (student) =>
                      student.email === form.email &&
                      student.password === form.password
                  )
                ) {
                  navigate(`/home`);
                }
              });
          }}
        >
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
          <div className="password-container">
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              required
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
            />
            <fa-icon
              id="password-eye"
              className="fas fa-eye-slash password-eye"
              aria-hidden="true"
            />
          </div>
          <div className="recover">¿Olvidaste tu contraseña?</div>
          <button>Iniciar Sesión</button>
        </form>
        <div className="message">
          ¿No estas registrado?{" "}
          <Link to={`/rolSelect`}>Crea tu cuenta ahora</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
