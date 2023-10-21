import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import {useAuth} from '../context/AuthContext'

import '../styles/pages/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {signin, errors: signinErrors, isAuthenticated} = useAuth()
    const navigate = useNavigate()

    const onSubmit = handleSubmit(async (data) => {
        signin(data)
    })

    useEffect(() => {
        if (isAuthenticated) navigate('/homeproducts')
    }, [isAuthenticated])

    return (
        <section className="container">
            <i class="bi bi-arrow-left-square-fill" onClick={() => {navigate('/')}}></i>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-10 col-xl-9">
                        <div className="card text-black" style={{ borderRadius: '25px' }}>
                            <div className="">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h2 fw-bold mb-4 mx-1 mx-md-4 mt-4">Inicia sesión</p>
                                        {signinErrors.map((error, i) => (<div className='bg-danger-subtle text-black font-bold text-center m-2' key={i}>{error}</div>))}
                                        <form className="mx-1 mx-md-4" onSubmit={onSubmit}>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" className="form-control" {...register("email", { required: true })} placeholder='Correo electronico' />
                                                    {errors.email && (<p className='text-danger' style={{ fontSize: '13px' }}>Correo electronico es requerido</p>)}
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" className="form-control" {...register("password", { required: true })} placeholder='Contraseña' />
                                                    {errors.password && (<p className='text-danger' style={{ fontSize: '13px' }}>Contraseña es requerida</p>)}
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="submit" className="btn btn-primary btn-lg">Inicia sesión</button>
                                            </div>
                                        </form>

                                        <div className="form-check d-flex justify-content-center mb-5 mt-5">
                                            <label className="form-check-label" htmlFor="form2Example3">
                                                No tienes cuenta? <Link to="/Register">Regístrate</Link>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
