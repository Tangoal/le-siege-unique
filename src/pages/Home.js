import React from 'react'
import Presentation from '../components/Presentation'
import ContactInfo from '../components/ContactInfo'
import Banner from '../components/Banner'
import PopupTypeForm from '../components/PopupTypeForm'


function Home() {
    return (
        <>
            <Presentation />
            <Banner />
            <PopupTypeForm/>
            <ContactInfo />
        </>
    )
}

export default Home