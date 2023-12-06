import React from 'react'
import './Banner.css'
import banner from ".//../assets/img/banner.jpg"

function Banner() {
  return (
    <section id="banner">
      <div className="banner">
        <img src={banner} loading="lazy" alt="Banner" />
      </div>
    </section>
  )
}

export default Banner