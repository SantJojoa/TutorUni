import "./../styles/rolSelect.css";

import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

function RolSelect() {
  const [role, setRole] = useState("teacher");

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
      <div className="wrapper">
        <h2>Cual es tú ocupacion</h2>
        <form
          className="blockSelect"
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/Register${role}`);
          }}
        >
          <div className="role-select">
            <label htmlFor="role">Selecciona tu rol:</label>
            <select
              className="role"
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="Teacher">Docente</option>
              <option value="Student">Estudiante</option>
            </select>
          </div>
          <button id="startButton">Iniciar</button>
        </form>
      </div>
    </>
  );
}

export default RolSelect;
