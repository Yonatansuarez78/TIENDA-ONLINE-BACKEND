import React from 'react';
import '../styles/pages/login.css'; // Importa tu archivo CSS desde la ubicación correcta

function Login() {
    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6 col-md-8 col-sm-12">
                    <div className="card">
                        <div className="card-header bg-primary text-white">
                            <h3>Iniciar Sesión</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="email" placeholder="Correo electrónico" required />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="password" placeholder="Contraseña" required />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                                    <label className="form-check-label" htmlFor="rememberMe">Recordarme</label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
