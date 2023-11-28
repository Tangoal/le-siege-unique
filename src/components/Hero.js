import React from 'react'
import './Hero.css'
import fond from ".//../assets/img/Fond.jpg"

function Hero() {
  return (
    <section id="hero">
      <div className="hero-banner">
        <div className='fond'><img src={fond} loading="lazy" alt="Fond" /></div>
      </div>
    </section>

  )
}

export default Hero