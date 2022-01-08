import React from 'react'
import banner1 from '../assets/mercappbanner.png'
import '../styles/Banner.css'

const Banner = () => {
  return (
    <div className='bannerContainer'>
      <img src={banner1} alt="" className='banner'/>
    </div>
  )
}

export default Banner
