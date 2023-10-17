import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import facebook from "../assets/icons/facebook.svg";
import youtube from "../assets/icons/youtube.svg";
import twitter from "../assets/icons/twitter.svg";
import ins from "../assets/icons/instagram.svg";
import wasap from "../assets/icons/whatsapp.svg";
import telefono from "../assets/icons/telephone.svg";
import geo from "../assets/icons/geo.svg";
import email from "../assets/icons/email.svg";
import back from "../assets/icons/back.svg";
import OnlineStore from "../assets/IconsPages/ImagesHome/OnlineStore.jpg";

import "../styles/pages/style.css";

function Footer() {
    const [showSVG, setShowSVG] = useState(false);

    useEffect(() => {
        // Aquí defines la lógica para mostrar u ocultar el SVG de reemplazo
        const handleResize = () => {
            const windowWidth = window.innerWidth;
            setShowSVG(windowWidth < 1000);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

  return (
      <>
          <div className="olas " style={{ height: "250px", overflow: "hidden" }}>
              {showSVG ? (
                  <svg
                      className="olas-reemplazo fond"
                      viewBox="0 0 1440 320"
                      preserveAspectRatio="none"
                      style={{ height: "100%", width: "100%" }}
                  >
                      <path
                          fill="#161627"
                          fillOpacity="1"
                          d="M0,160L60,154.7C120,149,240,139,360,144C480,149,600,171,720,160C840,149,960,107,1080,101.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                      ></path>
                  </svg>
              ) : (
                  <svg
                      className="fond"
                      viewBox="0 0 500 150"
                      preserveAspectRatio="none"
                      style={{ height: "100%", width: "100%" }}
                  >
                      <path
                          d="M-1.58,23.19 C327.99,297.53 371.44,-79.44 501.80,87.32 L500.00,150.00 L0.00,150.00 Z"
                          style={{ stroke: "none", fill: "#161627" }}
                      ></path>
                  </svg>
              )}
          </div>

          <footer className=" w-100 m-0 p-0">
              <div className="footer__container   ">
                  <div className="row d-flex">
                      <div className="col-12 col-md-6 col-xl-4 text-center text-md-start newsletter containerc1 ">
                          <img src={OnlineStore} style={{ width: "50%" }}></img>
                          <ul className="footer__list my-4 text-center">
                              <li className="footer__list-item me-2">
                                  <a
                                      target="_blank"
                                      href="https://web.facebook.com"
                                      className="footer__list-link" >
                                      <img
                                          src={facebook}
                                          width="24px"
                                          className="ms-2"
                                          alt=""
                                      ></img>
                                  </a>
                              </li>
                              <li className="footer__list-item me-2">
                                  <a
                                      target="_blank"
                                      href="https://www.instagram.com"
                                      className="footer__list-link" >
                                      <img src={ins} width="24px" className="ms-2" alt=""></img>
                                  </a>
                              </li>
                              <li className="footer__list-item me-2">
                                  <a
                                      target="_blank"
                                      href="https://twitter.com"
                                      className="footer__list-link"  >
                                      <img
                                          src={twitter}
                                          width="24px"
                                          className="ms-2"
                                          alt=""
                                      ></img>
                                  </a>
                              </li>
                              <li target="_blank" className="footer__list-item me-2">
                                  <a
                                      target="_blank"
                                      href="https://api.whatsapp.com/send?phone=573182268916"
                                      className="footer__list-link">
                                      <img src={wasap} width="24px" className="ms-2" alt=""></img>
                                  </a>
                              </li>
                              <li className="footer__list-item me-2">
                                  <a
                                      target="_blank"
                                      href="https://www.youtube.com"
                                      className="footer__list-link" >
                                      <img
                                          src={youtube}
                                          width="24px"
                                          className="ms-2"
                                          alt=""
                                      ></img>
                                  </a>
                              </li>
                          </ul>
                          <div className="eslogan-footeer mt-3">
                              <p>
                                  "Llegamos a todos los rincones <br></br>para
                                  que disfrutes de tus compras en linea"
                              </p>
                          </div>
                      </div>

                      <div className="col-12 col-md-6 col-xl-4 text-center text-md-start ">
                          <h6 className="footer__title">Navegación</h6>
                          <ul className="footer__list">
                              <li className="footer__list-item">
                                  <img src={back} alt=""></img>
                                  <Link to="/" className="footer__list-link ms-3">
                                      Inicio
                                  </Link>
                              </li>
                              <li className="footer__list-item">
                                  <img src={back} alt=""></img>
                                  <Link
                                      to="/"
                                      className="footer__list-link ms-3"
                                  >
                                      Acerca de nosotros
                                  </Link>
                              </li>

                              <li className="footer__list-item">
                                  <img src={back} alt=""></img>
                                  <Link
                                      to={"/"}
                                      className="footer__list-link ms-3"
                                  >
                                      Ayuda
                                  </Link>
                              </li>
                              <li className="footer__list-item">
                                  <img src={back} alt=""></img>
                                  <Link
                                      to={"/"}
                                      className="footer__list-link ms-3" >
                                      Desarrolladores
                                  </Link>
                              </li>
                          </ul>
                      </div>

                      <div className="col-12 col-md-6 col-xl-4 text-center text-md-start ">
                          <h6 className="footer__title">Contactanos</h6>
                          <ul className="footer__list">
                              <li className="footer__list-item">
                                  <img src={geo} alt=""></img>
                                  <a target="_blank" href="https://goo.gl/maps/VLJwizZzytx5hg918"
                                   className="footer__list-link ms-1" >Crra 5 #6-67 CTPI SENA Norte
                                  </a>
                              </li>
                              <li className="footer__list-item">
                                  <img src={email} alt=""></img>

                                  <a
                                      target="_blank"
                                      href="mailto:Tramosas2023@gmail.com"
                                      className="footer__list-link ms-1">
                                      OnlineStore@gmail.com
                                  </a>
                              </li>
                              <li className="footer__list-item">
                                  <img src={telefono} alt=""></img>
                                  <a
                                      target="_blank"
                                      href="https://api.whatsapp.com/send?phone=573182268916"
                                      className="footer__list-link ms-1">
                                      +57 3182268916
                                  </a>
                              </li>
                              <li className="footer__list-item">
                                  <img src={telefono} alt=""></img>

                                  <a
                                      target="_blank"
                                      href="https://api.whatsapp.com/send?phone=573182268916"
                                      className="footer__list-link ms-1" >
                                      +57 3182268916
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <hr className="footer__divider"></hr>

                  <div className="footer__bottom w-100 text-center">
                      <p className="copyright text-center">
                          &copy; {new Date().getFullYear()}{" "}
                          <span className="h6 text-white-50">Online Store </span> Todos los
                          derechos reservados
                      </p>
                  </div>
              </div>
          </footer>
      </>
  )
}

export default Footer
