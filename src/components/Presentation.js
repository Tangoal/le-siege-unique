import React from 'react'
import './Presentation.css'
import profile_pic from ".//../assets/img/Flo2.jpg"

export default function Presentation() {
  return (
    <section id="presentation">
      <div class="presentation-bg">
        <div class="presentation-section">
          <div class="presentation-container">
            <div class="presentation-text">
              <p>M’appuyant sur une expérience de 10 années au sein d’une unité Parachutiste Spécialisée de l’Armée de Terre, j’ai eu l’opportunité de découvrir et de m’impliquer pleinement dans le Secourisme.</p>
              <p>Diplômé d’un brevet en pédagogie, formateur SST, GQS, PSC1, PSE, agrémenté formateur Stop The Bleed® et formateur Secourisme au Combat, j'ai pu mettre en œuvre ces compétences aussi bien en métropole qu'en milieux isolés à l'étranger.</p>
              <p>En créant SEFOSA, mon souhait est de permettre à chacun de se SEnsibiliser, avant même de se FOrmer, pour savoir comment SAuver un parent, un enfant, un ami, un collègue…</p>

             <p> Tapissier décorateur situé au cœur du quartier Dobrée, entre les Machines de l’Île et le Théâtre Graslin, Ronan Le Pommelec vous propose un travail appliqué selon les règles d'un savoir-faire traditionnel. Il est essentiel pour lui de répondre avec justesse et précision à la demande de ses clients, par l'écoute, l'analyse et le conseil afin de concrétiser leur projet, leurs envies.

 

Ronan Le Pommelec vous propose ses compétences et son expérience dans les domaines du siège, de la literie, de la tenture murale, ainsi que dans la confection de rideaux et voilages sur mesure.

 

Retrouvez Ronan Le Pommelec au magasin, 5 place Eugène Livet à Nantes, où il a pris la suite de l'activité de Yannick Collineau depuis septembre 2016 et où déjà 6 générations de tapissiers se sont succédées...

 

Horaires d'ouverture du magasin : du mardi au samedi, de 9h30 à 12h30 et de 14h00 à 19h00 (le mardi matin et le jeudi après-midi : sur rdv).

 

Et au quotidien, vous pouvez suivre l'actualité du Tapissier Dobrée sur Facebook et Instagram ! </p>

 

            </div>
            <img src={profile_pic} alt="Florain Mocquet" />

          </div>
        </div>
      </div>
    </section>
  )
}