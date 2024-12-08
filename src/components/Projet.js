import React from 'react'
import './Projet.css'
import Caroussel from './Caroussel'
import PopupTypeForm from './PopupTypeForm'

export default function Presentation() {
  return (
    <section id="presentation">
      <div class="section-bg">
        <div class="section-presentation">
          <h2>J'ai un projet :</h2>
          {/* Grille avec Flexbox */}
          <div className="flex-container">
            <div className="flex-item">Siège X Ameublement</div>
            <div className="flex-item">Banquette</div>
            <div className="flex-item">Sellerie automobile</div>
            <div className="flex-item">Sellerie moto</div>
          </div>
        </div>
      </div>
    </section>
  )
}