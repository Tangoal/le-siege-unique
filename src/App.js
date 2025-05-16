import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import './App.css';
import './ResetCSS.css';

import Home from "./pages/Home";
import Sieges from "./pages/Sieges";
import Banquettes from "./pages/Banquettes";
import SellerieAuto from "./pages/SellerieAuto";
import SellerieMoto from "./pages/SellerieMoto";
import Decoration from "./pages/Decoration";
import MentionsLegales from "./pages/MentionsLegales";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'

// Composant pour gérer les animations de page
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Routes location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/sieges' element={<Sieges />} />
          <Route path='/banquettes' element={<Banquettes />} />
          <Route path='/sellerie-auto' element={<SellerieAuto />} />
          <Route path='/sellerie-moto' element={<SellerieMoto />} />
          <Route path='/decoration' element={<Decoration />} />
          <Route path='/mentions-legales' element={<MentionsLegales />} />
        </Routes>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Attendre que toutes les ressources soient chargées
    const waitForResources = async () => {
      try {
        // Attendre le chargement complet de la page
        await new Promise(resolve => {
          if (document.readyState === 'complete') {
            resolve();
          } else {
            window.addEventListener('load', resolve);
          }
        });

        // Attendre le temps minimum d'animation
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Masquer l'écran de chargement
        setIsLoading(false);
      } catch (error) {
        console.error('Erreur lors du chargement:', error);
        setIsLoading(false);
      }
    };

    waitForResources();
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div style={{
        visibility: isLoading ? 'hidden' : 'visible',
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out'
      }}>
        <Router>
          <Suspense fallback={<LoadingScreen isLoading={true} />}>
            <Navbar />
            <AnimatedRoutes />
            <ScrollToTop />
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
