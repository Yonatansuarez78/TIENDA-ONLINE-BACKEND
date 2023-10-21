import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/componentsStylesPrivate/navbarPrivate.css"
import { useAuth } from '../../context/AuthContext'

function NavbarPrivate() {
    const {logout} = useAuth();
    return (
        <>
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand font-weight-bold">Online Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active " aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Precios top</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Nuevo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Lo mas comprado</a>
                            </li>
                        </ul>

                            <div className="">
                                <div className="flex-shrink-0 dropdown custom-dropdown">
                                    <a href="#" className="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                                    </a>
                                    <ul className="dropdown-menu text-small shadow">
                                        <li><a className="dropdown-item" href="#">Perfil</a></li>
                                        <li><a className="dropdown-item" href="#">Mis pedidos</a></li>
                                        <li><a className="dropdown-item" href="#">Cupones</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link to="/" onClick={logout}> <button className="dropdown-item">Cerrar sesión</button> </Link></li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </nav>
        </div>
        
        </>
    )
}

export default NavbarPrivate

