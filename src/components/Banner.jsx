import React from 'react'
import banner from '../assets/banner.png'
import '../styles/Banner.css'

const Banner = () => {
  return (
    <div className='bannerContainer'>
      <img src={banner} alt="" className='banner'/>
    </div>
  )
}

export default Banner
