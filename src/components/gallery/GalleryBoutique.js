import React from "react";
import GalleryLightBox from "./GalleryLightBox";
import { photos } from "./PhotosBoutique";

export default function GalleryBoutique() {
    return (
        <div>
            <section id="gallery">
                <div className="section-bg">
                    <div className="section">
                        <h2>Boutique</h2>
                        <div>
                            <p>Venez y découvrir les nombreux revêtements de grands éditeurs pour dorer vos intérieurs.</p>
                            <div className="gallery"><GalleryLightBox photos={photos} /></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}