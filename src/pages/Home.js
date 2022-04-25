import React, { Component } from 'react'
import Navbar from '../components/Navbar.jsx'
import Banner from '../components/Banner.jsx'
import Products from '../components/Products.jsx'

export class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Products />
      </div>
    )
  }
}

export default Home