import React from 'react'
import './Hero.css'
import fond from ".//../assets/img/Fond2.jpg"

function Hero() {
  return (
    <section id="hero">
      <div className="hero-banner">
        <img src={fond} loading="lazy" alt="Fond" />
      </div>
    </section>

  )
}

export default Hero