/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

function SelectTeacher() {
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
                    <h3>Empecemo</h3>
                </div>
            </section>
        </>
    )
}
