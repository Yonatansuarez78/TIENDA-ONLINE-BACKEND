import React from 'react'
import '../styles/pages/register.css'

function Register() {
  return (
      <div className="container">
          <div className="row justify-content-center mt-5">
              <div className="col-lg-6 col-md-8 col-sm-12">
                  <div className="card">
                      <div className="card-header bg-primary text-white">
                          <h3>Registro de usuario</h3>
                      </div>
                      <div className="card-body">
                          <form>
                              <div className="mb-3">
                                  <input type="text" className="form-control" id="username" placeholder="Nombre usuario" required />
                              </div>
                              <div className="mb-3">
                                  <input type="email" className="form-control" id="email" placeholder="Correo electrónico" required />
                              </div>
                              <div className="mb-3">
                                  <input type="password" className="form-control" id="password" placeholder="Contraseña" required />
                              </div>
                                  <label className="form-check-label" htmlFor="rememberMe">Aceptar terminos y condiciones</label>
                              <button type="submit" className="btn btn-primary w-100">Registrate</button>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Register
