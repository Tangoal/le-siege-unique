import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();

    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
        // Attendre la fin de l'animation (0.5s de délai + 0.5s de durée)
        const timer = setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Ajout d'un défilement fluide
            });
        }, 0); // 1000ms = délai + durée de l'animation

        return () => clearTimeout(timer);
    }, [pathname]);
}

export default ScrollToTop;