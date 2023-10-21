import React from 'react'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {useNavigate} from 'react-router-dom'

import slider from '../assets/IconsPages/ImagesHome/slider.jpg'

function Home() {
  const navigate = useNavigate()

  const goRegister = () => {
    navigate('/login')
  }
  return (
    <>
    <Navbar/>

    <Slider/>

    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={slider} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"></img>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Tu tienda virtual en linea</h1>
        <p class="lead">"Abre tu Tienda Virtual en Línea hoy mismo y disfruta de millones de productos en todo el mundo! Con nuestra plataforma de comercio electrónico de última generación vive una experiencia de compras sin igual.
         No te pierdas la oportunidad de obtener tus articulos favoritos
        ¡Regístrate ahora y comienza a comprar en línea de manera exitosa!"</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={goRegister}>Registrate AQUI</button>
        </div>
      </div>
    </div>
  </div>
    <Footer/>
    </>
  )
}

export default Home
