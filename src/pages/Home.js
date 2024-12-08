import React from 'react'
import Presentation from '../components/Presentation'
import ContactInfo from '../components/ContactInfo'
import Caroussel from '../components/Caroussel'
import Projet from '../components/Projet'



function Home() {
    return (
        <>
            <Caroussel/>
            <Projet />
            <Presentation />
            <ContactInfo />
        </>
    )
}

export default Home