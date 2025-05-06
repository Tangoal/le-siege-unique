import React from 'react'
import './SiegesCaroussel.css'
import car1 from ".//../../assets/img/pages/sieges/carsiege1-comp.webp"
import car2 from ".//../../assets/img/pages/sieges/carsiege2-comp.webp"
import car3 from ".//../../assets/img/pages/sieges/carsiege3-comp.webp"
import car4 from ".//../../assets/img/pages/sieges/carsiege4-comp.webp"
import car5 from ".//../../assets/img/pages/sieges/carsiege5-comp.webp"
import car6 from ".//../../assets/img/pages/sieges/carsiege6-comp.webp"


function SiegesCaroussel() {
    return (
        <div class="container-caroussel-siege">
            <div class="caroussel-siege">
                <img src={car1} fetchpriority="high" alt="Caroussel 1" />
                <img src={car2} fetchpriority="high" alt="Caroussel 2" />
                <img src={car3} fetchpriority="high" alt="Caroussel 3" />
                <img src={car4} loading="lazy" fetchpriority="low" alt="Caroussel 4" />
                <img src={car5} loading="lazy" fetchpriority="low" alt="Caroussel 5" />
                <img src={car6} loading="lazy" fetchpriority="low" alt="Caroussel 6" />
                <img src={car1} loading="lazy" fetchpriority="low" alt="Caroussel 1" />
            </div>
        </div>
    )
}

export default SiegesCaroussel