import React from 'react'
import Gallery from "react-photo-gallery";
import { photos } from "../components/SelleriePhotos";

function Sieges() {
    return (
        <Gallery photos={photos} />
    )
}

export default Sieges