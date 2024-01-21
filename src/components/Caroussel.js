import React from 'react'
import './Caroussel.css'
import car1 from ".//../assets/img/gallery/caroussel/car1.webp"
import car2 from ".//../assets/img/gallery/caroussel/car2.webp"
import car3 from ".//../assets/img/gallery/caroussel/car3.webp"
import car4 from ".//../assets/img/gallery/caroussel/car4.webp"
import car5 from ".//../assets/img/gallery/caroussel/car5.webp"
import car6 from ".//../assets/img/gallery/caroussel/car6.webp"
import car7 from ".//../assets/img/gallery/caroussel/car7.webp"
import car8 from ".//../assets/img/gallery/caroussel/car8.webp"


function Caroussel() {
    return (
        <div class="container-caroussel">
            <div class="caroussel">
                <img src={car1} fetchpriority="high" alt="Caroussel 1" />
                <img src={car2} alt="Caroussel 2" />
                <img src={car3} alt="Caroussel 3" loading="lazy" />
                <img src={car4} fetchpriority="low" alt="Caroussel 4" loading="lazy" />
                <img src={car5} fetchpriority="low" alt="Caroussel 5" loading="lazy" />
                <img src={car6} fetchpriority="low" alt="Caroussel 6" loading="lazy" />
                <img src={car7} fetchpriority="low" alt="Caroussel 7" loading="lazy" />
                <img src={car8} fetchpriority="low" alt="Caroussel 8" loading="lazy" />
                <img src={car1} fetchpriority="low" alt="Caroussel 1" loading="lazy" />
            </div>
        </div>
    )
}

export default Caroussel