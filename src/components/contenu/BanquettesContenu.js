import React from 'react'
import './Contenu.css'
import banquetteexterieur from "../.././assets/img/pages/banquettes/banquetteexterieur.webp"
import banquettecampingcar from "../.././assets/img/pages/banquettes/banquettecampingcar.webp"
import banquettehotel from "../.././assets/img/pages/banquettes/banquettehotel.webp"
import PopupTypeForm from '../PopupTypeForm'

export default function BanquettesContenu() {
  return (
    <section id="contenu">
      <div class="section-bg">
        <div class="section-contenu">
          <div class="contenu-img"><img src={banquetteexterieur} alt="banquetteexterieur"/></div>
          <div class="contenu-txt">
            <div class="contenu-paragraphe">
              <h2>Nos solutions pour <strong>VOS EXTERIEURS</strong></h2>
              <ul>
                <li>Mousse à cellule ouverte.</li>
                <li>Textile adapté.</li>
                <li>Aération de la banquette.</li>
                <li>Systèmes de fixations adaptées</li>
              </ul>
            </div>
          </div>

        </div>
        <div class="section-contenu">

          <div class="contenu-txt">
            <div class="contenu-paragraphe">
              <h2>Nos solutions pour vos <strong>CAMPING CAR ET VANS</strong></h2>
              
              <ul><li>Optez pour un esprit cocooning, resistant et facile d’entretien.</li>
              <li>Personnalisez votre densité de mousse et votre style.</li>
              </ul>
            </div>
          </div>
          <div class="contenu-img"><img src={banquettecampingcar} alt="banquettecampingcar"/></div>

        </div>

        <div class="section-contenu">
          <div class="contenu-img"><img src={banquettehotel} alt="banquettehotel"/></div>
          <div class="contenu-txt">
            <div class="contenu-paragraphe">
              <h2>Nos prestations pour <br /><strong>RESTAURANTS ET HÔTELLERIE</strong></h2>
              <ul>
                <li>Idées, conseils et accompagnement.</li>
                <li>Matériaux dédiés : Non feu, aquaclean...</li>
                <li>Création à l’image de votre entreprise.</li>
              </ul>
            </div>
          </div>

        </div>


      </div>
      <PopupTypeForm />
    </section>

  )
}