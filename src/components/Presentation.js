import React from 'react'
import './Presentation.css'
import Caroussel from '../components/Caroussel'
import PopupTypeForm from './PopupTypeForm'

export default function Presentation() {
  return (
    <section id="presentation">
      <div class="section-bg">
        <div class="section">
          <h2>Le Siège Unique</h2>
          <div class="presentation-container">
            <div class="presentation-text">
              <p>Tapissier d'ameublement situé à Montaigu, entre Clisson et La-Roche-sur-Yon, Florian MOCQUET vous accueille dans son atelier showroom du lundi au vendredi.</p>
              <p>Le Siège Unique vous invite à découvrir et apprécier le fait main. Spécialisé dans la tapisserie d'ameublement, la sellerie automobile et moto, le Siège Unique vous accompagne dans vos projets sur mesure.</p>
              <p>Vous souhaitez restaurer, remplacer ou personnaliser vos revêtements usés&nbsp;? Florian s'immisce dans votre univers pour répondre à vos attentes.</p>
              <p>N'hésitez pas à suivre l'actualité du Siège Unique sur Facebook et Instagram&nbsp;! </p>
            </div>
            <PopupTypeForm/>
            <Caroussel />
          </div>
        </div>
      </div>
    </section>
  )
}