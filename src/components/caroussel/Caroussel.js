import React from 'react'
import './Caroussel.css'
import car1 from ".//../../assets/img/gallery/caroussel/car1-comp.webp"
import car2 from ".//../../assets/img/gallery/caroussel/car2-comp.webp"
import car3 from ".//../../assets/img/gallery/caroussel/car3-comp.webp"
import car4 from ".//../../assets/img/gallery/caroussel/car4-comp.webp"
import car5 from ".//../../assets/img/gallery/caroussel/car5-comp.webp"
import car6 from ".//../../assets/img/gallery/caroussel/car6-comp.webp"
import car7 from ".//../../assets/img/gallery/caroussel/car7-comp.webp"


function Caroussel() {
    return (
        <div class="container-caroussel">
            <div class="caroussel">
                <img src={car1} fetchpriority="high" alt="Caroussel 1" />
                <img src={car2} fetchpriority="high" alt="Caroussel 2" />
                <img src={car3} fetchpriority="high" alt="Caroussel 3" />
                <img src={car4} loading="lazy" fetchpriority="low" alt="Caroussel 4" />
                <img src={car5} loading="lazy" fetchpriority="low" alt="Caroussel 5" />
                <img src={car6} loading="lazy" fetchpriority="low" alt="Caroussel 6" />
                <img src={car7} loading="lazy" fetchpriority="low" alt="Caroussel 7" />
                <img src={car1} loading="lazy" fetchpriority="low" alt="Caroussel 1" />
            </div>
        </div>
    )
}

export default Caroussel