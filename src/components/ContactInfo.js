import React from 'react'
import './ContactInfo.css'
import atelier from ".//../assets/img/atelier.JPG"
import contact from ".//../assets/img/Contact.JPG"

// Test ?
// fetch("https://formsubmit.co/ajax/your@email.com", {
//     method: "POST",
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     },
//     body: JSON.stringify({
//         name: "FormSubmit",
//         message: "I'm from Dero LABS"
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));


export default function Contact() {
  return (
    <section id="contact">
      <div class="contact-bg">
        <div class="contact-section">
          <h2>Contact</h2>
          <div class="contact-container">
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
          <h3>N'hésitez pas à me contacter !</h3>
          <div class="contact-container">
            <div class="contact-form">
              <form action="https://formsubmit.co/lesiegeunique@gmail.com" method="POST">
                <div><input type="text" id="nom" name="nom" placeholder="Nom*" required="" /></div>
                <div><input type="email" id="email" name="email" placeholder="Email*" required="" /></div>
                <div><input type="tel" id="phone" name="numéro de téléphone" placeholder="Téléphone" /></div>
                <div><input type="text" id="company" name="entreprise" placeholder="Entreprise" /></div>
                <div><textarea className="textarea" id="message" name="message" placeholder="Votre message..." required="" defaultValue={""} /></div>

                <input type="hidden" name="_template" defaultValue="table" />
                <input type="hidden" name="_subject" defaultValue="Nouveau message reçu sur lesiegeunique.com/" />

                <div><button className="button" type="submit">Envoyer</button>
                </div>
              </form>
            </div>
            <div className='contact-img'>
              <img src={contact} alt="Contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}