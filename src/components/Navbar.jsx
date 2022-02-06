import React from 'react'
import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import searchIcon from '../assets/searchicon.png'
import Products from './Products'

function Header() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="mercapp-logo" />
          </a>
        </div>
        <div className="navbarLinks">
          <div className="login">
            <a href="/">Iniciar Sesión</a>
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
