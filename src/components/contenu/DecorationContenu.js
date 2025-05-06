import React from 'react'
import './Contenu.css'
import deco1 from "../.././assets/img/pages/decoration/deco1-comp.webp"
import deco2 from "../.././assets/img/pages/decoration/deco2-comp.webp"
import deco3 from "../.././assets/img/pages/decoration/deco3-comp.webp"
import deco4 from "../.././assets/img/pages/decoration/deco4-comp.webp"
import PopupTypeForm from '../PopupTypeForm'


export default function DecorationContenu() {
  return (
    <section id="contenu">
      <div class="section-bg">
        <div class="section-contenu">
          <div class="contenu-img"><img src={deco1} alt="deco1" /></div>
          <div class="contenu-txt">
            <div class="contenu-paragraphe">
              <h2>VOS RIDEAUX ET VOILAGES</h2>
              <p>LE SIEGE UNIQUE vous propose ses services dans la confection sur mesure de rideaux et de voilages, offrant des solutions élégantes et personnalisées pour tous types d'intérieurs. Que ce soit pour une maison, un bureau ou des espaces commerciaux, nous nous engageons à apporter une touche unique à chaque projet.</p>
            </div>
          </div>

          <div class="contenu-txt">
            <div class="contenu-paragraphe">
              <h2>Nos prestations</h2>
              <ul>
                <li>Confection sur mesure</li>
                <li>Choix de tissus variés </li>
                <li>Pose professionnelle</li>
                <li>Conseils déco personnalisés</li>
              </ul>
            </div>
          </div>
          <div class="contenu-img"><img src={deco2} alt="deco2" /></div>

          <div class="contenu-img"><img src={deco3} alt="deco3" /></div>
          <div class="contenu-txt">
            <div class="contenu-paragraphe">
              <h2>Nos solutions pour VOTRE TEINTURE MURALE</h2>
              <p>LE SIEGE UNIQUE propose des tentures murales sur mesure, créant des solutions élégantes pour habiller vos murs avec style et personnalité. Que ce soit pour un intérieur résidentiel, un espace commercial ou un événement, nous ajoutons une touche unique et fonctionnelle à chaque projet.</p>
            </div>
          </div>

          <div class="contenu-txt">
            <div class="contenu-paragraphe">
              <h2>Nos solutions pour Nos prestations</h2>
              <ul>
                <li>Confection sur mesure</li>
                <li>Choix de tissus variés</li>
                <li>Design personnalisé</li>
                <li>Installation professionnelle </li>
                <li>Solutions isolantes et acoustiques</li>
              </ul>
            </div>
          </div>
          <div class="contenu-img"><img src={deco4} alt="deco4" /></div>
        </div>

      </div>
      <PopupTypeForm />
    </section>

  )
}