import React from "react";
import GalleryLightBox from "./GalleryLightBox";
import { photos } from "./PhotosSellerie";

export default function GallerySellerie() {
    return (
        <div>
            <section id="gallery">
                <div className="section-bg">
                    <div className="section">
                        <h2>Sellerie</h2>
                        <div>
                            <p>Travailler une sellerie d’origine ou créer une sellerie à votre image, vous hésitez&nbsp;? Florian habille votre auto ou moto avec des tissus, simili ou cuirs haut de gamme, garants de durabilité.</p>
                            <GalleryLightBox photos={photos} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}