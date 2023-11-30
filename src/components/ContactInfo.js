import React from 'react'
import './ContactInfo.css'

export default function ContactInfo() {
  return (
    <section id="contact-info">
      <div class="section-bg">
        <div class="section">
          <h2>Contact</h2>
          <div class="container">
            <div className='contact-text'>
              <div class="contact-info">
                <div class="icon-text">
                  <i class="fa-solid fa-circle-user"></i>
                  <p>Florian Mocquet</p>
                </div>
                <div class="icon-text">
                  <i class="fa-solid fa-location-dot"></i>
                  <p> 168 rue Moulin Gros, 85600 MONTAIGU</p>
                </div>
                <div class="icon-text">
                  <i class="fa-solid fa-clock"></i>
                  <p> Ouvert du lundi au vendredi</p>
                </div>
                <div class="icon-text">
                  <i class="fa-solid fa-phone"></i>
                  <p>07 64 43 54 42</p>
                </div>
                <div class="icon-text">
                  <i class="fa-solid fa-envelope"></i>
                  <p>lesiegeunique@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}