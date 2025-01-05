import React from 'react'
import './SiegesCaroussel.css'
import car1 from ".//../../assets/img/pages/sieges/carsiege1.webp"
import car2 from ".//../../assets/img/pages/sieges/carsiege2.webp"
import car3 from ".//../../assets/img/pages/sieges/carsiege3.webp"
import car4 from ".//../../assets/img/pages/sieges/carsiege4.webp"
import car5 from ".//../../assets/img/pages/sieges/carsiege5.webp"
import car6 from ".//../../assets/img/pages/sieges/carsiege6.webp"


function SiegesCaroussel() {
    return (
        <div class="container-caroussel">
            <div class="caroussel">
                <img src={car1} fetchpriority="high" alt="Caroussel 1" />
                <img src={car2} alt="Caroussel 2" />
                <img src={car3} alt="Caroussel 3" />
                <img src={car4} fetchpriority="low" alt="Caroussel 4" />
                <img src={car5} fetchpriority="low" alt="Caroussel 5" />
                <img src={car6} fetchpriority="low" alt="Caroussel 6" />
                <img src={car1} fetchpriority="low" alt="Caroussel 1" />
            </div>
        </div>
    )
}

export default SiegesCaroussel