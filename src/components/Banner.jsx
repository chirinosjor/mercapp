import React from 'react'
import banner1 from '../assets/mercappbanner.png'
import banner from '../styles/Banner.css'

const Banner = () => {
  return (
    <div className='bannerCointainer'>
      <img src={banner1} alt="" className='banner'/>
    </div>
  )
}

export default Banner
