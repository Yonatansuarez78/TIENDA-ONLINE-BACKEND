import React from 'react'
import slider from '../assets/IconsPages/ImagesHome/slider.jpg'
import sliderVentas from '../assets/IconsPages/ImagesHome/sliderVentas.jpg'
import '../styles/pages/slider.css'

function Slider() {
  return (
    <div className='container'>
          <div id="carouselExampleFade" class="carousel slide carousel-fade">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                      <img src={slider} class="d-block w-100 rounded-4" alt="..."></img>
                  </div>
                  <div class="carousel-item">
                      <img src={sliderVentas} class="d-block w-100 rounded-4" alt="..."></img>
                  </div>
                  <div class="carousel-item">
                      <img src={slider} class="d-block w-100 rounded-4" alt="..."></img>
                  </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
              </button>
          </div>
    </div>
  )
}

export default Slider
