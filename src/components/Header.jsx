import React from 'react'
import header from '../styles/header.css'
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
        <div className="dispatchMethods">
          <a href="/">
            <p>Delivery</p>
          </a>
          <a href="/">
           <p>Retiro</p>
          </a>
        </div>
        <div className="addressBar">
          <img src={locationPin} alt="" />
          <input className="addressInput" placeholder="Ingresa tu dirección" />
        </div>
        <div className="login">
          <a href="/">Iniciar Sesión</a>
        </div>
        <div className="cart">
          <a href="/" className="secondary-button">Carrito</a>
        </div>
      </div>
    </div>
  )
}

export default Header
