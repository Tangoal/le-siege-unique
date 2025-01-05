import React from 'react'
import './Contenu.css'
import sellerieauto1 from "../.././assets/img/pages/sellerieauto/sellerieauto2.webp"
import sellerieauto2 from "../.././assets/img/pages/sellerieauto/sellerieauto1.webp"
import PopupTypeForm from '../PopupTypeForm'


export default function SellerieAutoContenu() {
  return (
    <section id="contenu">
      <div class="section-bg">
        <div class="section-contenu">
          <div class="contenu-img"><img src={sellerieauto1} alt="sellerieauto1" /></div>
          <div class="contenu-txt">
            <div class="contenu-paragraphe">
              <h2>Notre Vision : <br />L'Excellence au Service de Votre Véhicule</h2>
              <p>LE SIEGE UNIQUE est votre spécialiste en sellerie automobile. Notre équipe combine expertise technique et passion pour travailler vos intérieurs de véhicules à la hauteur de vos attentes. Nous nous engageons à offrir des services personnalisés qui allient confort, esthétique et durabilité.</p>
            </div>
          </div>

          <div class="contenu-txt">
            <div class="contenu-paragraphe">
              <h2>Nos prestations</h2>
              <ul>
                <li>Sièges, banquettes : assise, accoudoir, dossier, appui-tête...</li>
                <li>Moquettes, revêtement des sols</li>
                <li>Panneaux de porte, tableaux de bord</li>
                <li>Ciels de toit</li>
                <li>Volant et soufflets de vitesses</li>
                <li>Service de broderie</li>
                <li>Entretien et re-pigmentation des cuirs</li>
              </ul>
            </div>
          </div>
          <div class="contenu-img"><img src={sellerieauto2} alt="sellerieauto2" /></div>

        </div>


      </div>
      <PopupTypeForm />
    </section>

  )
}