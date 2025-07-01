import React from 'react'
import './SellerieAutoCaroussel.css'
import car1 from ".//../../assets/img/pages/sellerieauto/carsellerieauto1-comp.webp"
import car2 from ".//../../assets/img/pages/sellerieauto/carsellerieauto2-comp.webp"
import car3 from ".//../../assets/img/pages/sellerieauto/carsellerieauto3-comp.webp"
import car4 from ".//../../assets/img/pages/sellerieauto/carsellerieauto4-comp.webp"


function sellerieautosCaroussel() {
    return (
        <div class="container-caroussel-sellerieauto">
            <div class="caroussel-sellerieauto">
                <img src={car1} fetchpriority="high" alt="Caroussel 1" />
                <img src={car2} fetchpriority="high" alt="Caroussel 2" />
                <img src={car3} fetchpriority="high" alt="Caroussel 3" />
                <img src={car4} loading="lazy" fetchpriority="low" alt="Caroussel 4" />
                <img src={car1} loading="lazy" fetchpriority="low" alt="Caroussel 1" />
            </div>
        </div>
    )
}

export default sellerieautosCaroussel