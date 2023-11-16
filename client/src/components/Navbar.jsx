import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate('/login');
      };

      const goRegister = () => {
        navigate('/register');
      };
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand font-weight-bold" to="/">Online Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active " aria-current="page" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Canales de atencion</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mas opciones
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item " href="#">Política de privacidad</a></li>
                                    <li><a className="dropdown-item " href="#">Terminos y condiciones</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="btn btn-primary m-1" onClick={goLogin}>Inicia sesión</button>
                            <button className="btn btn-primary m-1" onClick={goRegister}>Registrate</button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
