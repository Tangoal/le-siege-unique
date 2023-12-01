import React from "react";
import GalleryLightBox from "./GalleryLightBox";
import { photos } from "./PhotosSieges";

export default function GallerySieges() {
    return (
        <div>
            <section id="gallery">
                <div className="section-bg">
                    <div className="section">
                        <h2>Sièges</h2>
                        <div>
                            <p>Vous souhaitez restaurer votre siège ou fauteuil&nbsp;? Florian vous accompagne dans votre restauration, en respectant les méthodes traditionnelles et contemporaines. Ces méthodes garantes de l’harmonie et du style vous donneront satisfaction. Un large choix de tissus et cuirs haut de gamme vous sont proposés pour répondre à vos envies.</p>
                            <GalleryLightBox photos={photos} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}