import React from 'react'
import './Presentation.css'
import profile_pic from ".//../assets/img/Flo2.jpg"

export default function Presentation() {
  return (
    <section id="presentation">
      <div class="presentation-bg">
        <div class="presentation-section">
          <div class="presentation-container">
          <img src={profile_pic} alt="Florain Mocquet" />
            <div class="presentation-text">
<p>Le Siège Unique vous invite à découvrir et apprécier le fait main. Spécialisé dans la tapisserie d'ameublement et la sellerie automobile, le Siège Unique vous accompagne dans vos projets sur mesure. Vous souhaitez restaurer, remplacer ou personnaliser vos revêtements usés&nbsp;? Le siège Unique s'immisce dans votre univers pour répondre à vos attentes.</p>
<p>N'hésitez pas à suivre l'actualité du Siège Unique sur Facebook et Instagram&nbsp;! </p>
            </div>
            

          </div>
        </div>
      </div>
    </section>
  )
}