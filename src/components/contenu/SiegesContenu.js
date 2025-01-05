import React from 'react'
import './Contenu.css'
import garniture from "../.././assets/img/pages/sieges/garniture.webp"
import couverture from "../.././assets/img/pages/sieges/couverture.webp"
import PopupTypeForm from '../.././components/PopupTypeForm'


export default function SiegesContenu() {
  return (
    <section id="contenu">
      <div class="section-bg">
        <div class="section-contenu">
          <div class="contenu-img"><img src={garniture} alt="garniture"/></div>
          <div class="contenu-txt">
            <div class="contenu-paragraphe">
              <h2>Votre garniture</h2>
              <p>Votre confort est une priorité. Nous vous proposons des garnitures de haute qualité.</p>
              <ul>
                <li><strong>EN CRIN</strong> : Conservez l’histoire de votre mobilier avec la méthode traditionnelle.</li>
                <li><strong>EN MOUSSE</strong> : La méthode contemporaine, très confortable sur tout siège et très utilisée sur les pièces modernes.</li>
                <li><strong>EN PLUME</strong> : Pour des coussins au confort inégalable.</li>
              </ul>
              <p>Nous respectons les différentes étapes pour atteindre votre confort et une durabilité maximale (pose de sangles élastiques ou en jute, pose de ressorts, toile forte, ouate…).</p>
            </div>
          </div>

        </div>
        <div class="section-contenu">

          <div class="contenu-txt">
            <div class="contenu-paragraphe">
              <h2>Votre converture</h2>
              <p>Votre choix rend votre projet UNIQUE, à vous de jouer&nbsp;!</p>
              <ul>
                <li><strong>TISSU HAUT DE GAMME</strong> : Découvrez les nombreuses collections à l’atelier-showroom.</li>
                <li><strong>CUIR</strong> : Appréciez sa durabilité, son aspect élégant et son caractère.</li>
                <li><strong>SIMILI CUIR</strong> : Composé de polyuréthane (PU) ou de polychlorure de vinyle (PVC). Profitez de sa robustesse, sa facilité d’entretien et son atout imperméable.</li>
              </ul>
            </div>
          </div>
          <div class="contenu-img"><img src={couverture} alt="couverture"/></div>

        </div>


      </div>
      <PopupTypeForm />
    </section>

  )
}