import React from 'react'
import './ContactForm.css'

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

export default function ContactInfo() {
    return (
        <section id="contact-info">
            <div class="section-bg">
                <div class="section">
                    <div class="container">
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
                        
                    </div>
                </div>
            </div>
        </section>
    )
}