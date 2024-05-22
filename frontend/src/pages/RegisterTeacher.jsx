import "./../styles/registerTeacher.css";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function RegisterTeacher() {
  const [form, setForm] = useState({
    name: "",
    f_last_name: "",
    s_last_name: "",
    email: "",
    password: "",
    ced: "",
    tel: "",
    abil: "",
    desc: "",
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
      <div className="registerTeacherWrapper">
        <h2>Registrar</h2>
        <form
          id="registerTeacherForm"
          className="grid-form registerTeacherForm"
          // action="http://localhost:8000/api/teachers/"
          // method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            fetch("http://localhost:8000/api/teachers/", {
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
            <label htmlFor="name" />
            <br />
            <input
              type="text"
              id="firstName"
              name="name"
              required=""
              placeholder="Nombre(s)"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <br />
            <label htmlFor="f_last_name" />
            <br />
            <input
              type="text"
              id="f_last_name"
              name="f_last_name"
              required=""
              placeholder="Primer Apellido"
              value={form.f_last_name}
              onChange={(e) =>
                setForm({ ...form, f_last_name: e.target.value })
              }
            />
            <br />
            <label htmlFor="s_lastName" />
            <br />
            <input
              type="text"
              id="s_last_name"
              name="s_last_name"
              placeholder="Segundo Apellido (opcional)"
              value={form.s_last_name}
              onChange={(e) =>
                setForm({ ...form, s_last_name: e.target.value })
              }
            />
            <br />
            <label htmlFor="email" />
            <br />
            <input
              type="email"
              id="email"
              name="email"
              required=""
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <br />
            <label htmlFor="password" />
            <br />
            <input
              type="password"
              id="password"
              name="password"
              required=""
              minLength={8}
              placeholder="Contraseña"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <br />
          </div>
          <div>
            <label htmlFor="ced" />
            <br />
            <input
              type="text"
              id="ced"
              name="ced"
              required=""
              placeholder="Cédula"
              maxLength={10}
              minLength={10}
              value={form.ced}
              onChange={(e) => setForm({ ...form, ced: e.target.value })}
            />
            <br />
            <label htmlFor="tel" />
            <br />
            <input
              type="text"
              id="tel"
              name="tel"
              required=""
              placeholder="Numero de celular"
              value={form.tel}
              onChange={(e) => setForm({ ...form, tel: e.target.value })}
            />
            <br />
            <label htmlFor="abil" />
            <br />
            <input
              type="text"
              id="abil"
              name="abil"
              required=""
              placeholder="Materias en las que es hábil"
              value={form.abil}
              onChange={(e) => setForm({ ...form, abil: e.target.value })}
            />
            <br />
            <label htmlFor="desc" />
            <br />
            <textarea
              name="desc"
              id="desc"
              placeholder="Una breve descripción de usted:"
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
            />
          </div>
          <button type="submit" className="registerTeacherButton">
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

export default RegisterTeacher;
