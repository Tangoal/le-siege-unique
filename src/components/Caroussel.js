import React from 'react'
import './Caroussel.css'
import car1 from ".//../assets/img/gallery/caroussel/car1.jpeg"
import car2 from ".//../assets/img/gallery/caroussel/car2.jpeg"
import car3 from ".//../assets/img/gallery/caroussel/car3.jpeg"
import car4 from ".//../assets/img/gallery/caroussel/car4.jpeg"
import car5 from ".//../assets/img/gallery/caroussel/car5.jpeg"
import car6 from ".//../assets/img/gallery/caroussel/car6.jpeg"
import car7 from ".//../assets/img/gallery/caroussel/car7.jpeg"
import car8 from ".//../assets/img/gallery/caroussel/car8.jpeg"


function Caroussel() {
    return (
        <div class="container-caroussel">
            <div class="caroussel">
                <img src={car1} alt="Caroussel 1" />
                <img src={car2} alt="Caroussel 2" loading="lazy" />
                <img src={car3} alt="Caroussel 3" loading="lazy" />
                <img src={car4} alt="Caroussel 4" loading="lazy" />
                <img src={car5} alt="Caroussel 5" loading="lazy" />
                <img src={car6} alt="Caroussel 6" loading="lazy" />
                <img src={car7} alt="Caroussel 7" loading="lazy" />
                <img src={car8} alt="Caroussel 8" loading="lazy" />
                <img src={car1} alt="Caroussel 1" loading="lazy" />
            </div>
        </div>
    )
}

export default Caroussel