import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PopupButton } from '@typeform/embed-react'
import './Projet.css'
import siege from ".//../assets//img/flex/siege.webp"
import banquette from ".//../assets//img/flex/banquette.webp"
import sellerieauto from ".//../assets//img/flex/sellerieauto.webp"
import selleriemoto from ".//../assets//img/flex/selleriemoto.webp"
import decoration from ".//../assets//img/flex/decoration.webp"
import devis from ".//../assets//img/flex/devis.webp"



export default function Presentation() {
  return (
    <section id="presentation">
      <div class="section-bg">
        <div class="section-presentation">
          <h2>Votre projet 100 % sur-mesure, 100 % maîtrisé</h2>
          {/* Grille avec Flexbox */}
          <div className="flex-container">
            <div className="flex-item"><NavLink to='/sieges'><img src={siege} alt="siege"/><div className="flex-title">Siège X Ameublement</div></NavLink></div>
            <div className="flex-item"><NavLink to='/banquettes'><img src={banquette} alt="banquette"/><div className="flex-title">Banquette</div></NavLink></div>
            <div className="flex-item"><NavLink to='/sellerie-auto'><img src={sellerieauto} alt="sellerieauto"/><div className="flex-title">Sellerie automobile</div></NavLink></div>
            <div className="flex-item"><NavLink to='/sellerie-moto'><img src={selleriemoto} alt="selleriemoto"/><div className="flex-title">Sellerie moto</div></NavLink></div>
            <div className="flex-item"><NavLink to='/decoration'><img src={decoration} alt="decoration"/><div className="flex-title">Décoration</div></NavLink></div>
            <div className="flex-item"><PopupButton id="CyBZPM1U" className="button-tf"><img src={devis} alt="devis"/><div className="flex-title">J'ai un projet&nbsp;<i class="fa-solid fa-pen-nib"></i></div></PopupButton></div>
          </div>
        </div>
      </div>
    </section>
  )
}