import React from 'react'
import './Contenu.css'
import selleriemoto1 from "../.././assets/img/pages/selleriemoto/selleriemoto1.webp"
import selleriemoto2 from "../.././assets/img/pages/selleriemoto/selleriemoto3.webp"
import PopupTypeForm from '../PopupTypeForm'


export default function SellerieMotoContenu() {
  return (
    <section id="contenu">
      <div class="section-bg">
        <div class="section-contenu">
          <div class="contenu-img"><img src={selleriemoto1} alt="selleriemoto1"/></div>
          <div class="contenu-txt">
            <div class="contenu-paragraphe">
              <h2>Notre Vision : Redéfinir le confort et le design pour chaque virée à moto</h2>
              <p>LE SIEGE UNIQUE est votre spécialiste en sellerie moto. Notre équipe combine expertise technique et passion pour travailler vos selles de motos modernes ou anciennes. Nous nous engageons à offrir des services personnalisés qui allient confort, esthétique et durabilité.</p>
            </div>
          </div>

        </div>
        <div class="section-contenu">

          <div class="contenu-txt">
            <div class="contenu-paragraphe">
              <h2>Nos prestations</h2>
              <ul>
                <li>Création de A à Z : laissez parler votre imagination !</li>
                <li>Confection des garnitures suivant votre style de conduite et votre gabarit</li>
                <li>Revêtement de votre selle adapté à votre besoin et au style de votre moto</li>
                <li>Réparation des coutures</li>
                <li><strong>Broderie</strong></li>
                <li><strong>Entretien et re-pigmentation des cuirs</strong></li>
              </ul>
            </div>
          </div>
          <div class="contenu-img"><img src={selleriemoto2} alt="selleriemoto2"/></div>

        </div>


      </div>
      <PopupTypeForm />
    </section>

  )
}