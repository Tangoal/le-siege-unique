import React from 'react'
import './ContactInfo.css'
import PopupTypeForm from '../components/PopupTypeForm'

export default function ContactInfo() {
  return (
    <section id="contact-info">
      <div class="section-bg">
        <div class="section-contact">
            <div class="section-bordure">
              <h2>Nous contacter</h2>
              <div class="contact-intro"><p>N'hésitez pas à nous contacter pour nous faire part de vos questions, partager vos projets et envoyer des photos.</p></div>
              <div class="container">

                <div className='contact-text'>
                  <div class="contact-info">
                    <div class="icon-text">
                      <i class="fa-solid fa-circle-user"></i>
                      <p>Florian Mocquet</p>
                    </div>
                    <div class="icon-text">
                      <i class="fa-solid fa-location-dot"></i>
                      <p>Rue Georges Clémenceau, 85260 L'HERBERGEMENT</p>
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
              <PopupTypeForm />
            </div>
        </div>
      </div>
    </section>
  )
}