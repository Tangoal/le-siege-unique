import React from 'react'
import './Banner.css'
import banner from "../assets/img/banner.webp"

function Banner() {
  return (
    <section id="banner">
      <div className="banner">
        <img src={banner} fetchpriority="high" alt="Banner" />
      </div>
    </section>
  )
}

export default Banner