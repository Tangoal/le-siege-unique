import React from 'react'
import banner from ".//../assets/img/banner.jpg"

function Hero() {
  return (
    <section id="banner">
      <div className="banner">
        <img src={banner} loading="lazy" alt="Banner" />
      </div>
    </section>
  )
}

export default Hero