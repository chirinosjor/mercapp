import React from 'react'
import '../styles/header.css'
import logo from '../assets/logo.png'
import locationPin from '../assets/locationpin.png'

function Header() {
  return (
    <div>
      <div className="header">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="mercapp-logo" />
          </a>
        </div>
        <div className="navbar">
          <div className="dispatchMethods">
            <a href="/">
              <p>Delivery</p>
            </a>
            <a href="/">
              <p>Retiro</p>
            </a>
          </div>
          <div className="addressBar">
            <img src={locationPin} alt="locationPin" />
            <input className="addressInput" placeholder="Ingresa tu dirección" />
            <a href="/" className="primary-button">Buscar</a>
          </div>
          <div className="login">
            <a href="/"><p>Iniciar Sesión</p></a>
          </div>
          <div className="cart">
            <a href="/" className="primary-button">Carrito</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
