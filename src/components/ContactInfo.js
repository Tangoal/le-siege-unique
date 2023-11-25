import React from 'react'
import './ContactInfo.css'
import avatar from ".//../assets/img/avatar5.png"
import location from ".//../assets/img/broche-de-localisation (2).png"
import phone from ".//../assets/img/appel.png"
import mail from ".//../assets/img/mail.png"
import atelier from ".//../assets/img/Contact.JPG"
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact">
      <div class="contact-bg">
        <div class="contact-section">
          <div class="contact-container">
            <div className='contact-text'>
            <h2>Contact</h2>
            <div class="contact-info">
              <div class="icon-text">
              <i className="fab fa-square-facebook"></i>
                <p>Florian Mocquet</p>
              </div>
              <div class="icon-text">
              <i className="fab fa-square-facebook"></i>
                <p>Montaigu</p>
              </div>
              <div class="icon-text">
                <i className="fab fa-square-facebook"></i>
                <p>07 64 43 54 42</p>
              </div>
              <div class="icon-text">
              <i className="fab fa-square-facebook"></i>
                <p>lesiegeunique@gmail.com</p>
              </div>
            </div>
            <ContactForm />
            </div>
            <div className='contact-img'>
            <img src={atelier} alt="Atelier" />
            </div>
            </div>
          </div>
        </div>
    </section>
  )
}