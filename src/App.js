import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './ResetCSS.css';

import Home from "./pages/Home";
import Sieges from "./pages/Sieges";
import Sellerie from "./pages/Sellerie";
import Boutique from "./pages/Boutique";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Banner />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sieges' element={<Sieges />}></Route>
          <Route path='/sellerie' element={<Sellerie />}></Route>
          <Route path='/boutique' element={<Boutique />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/mentions-legales' element={<MentionsLegales />}></Route>
        </Routes>
        <Banner />
        <Footer />
        <ScrollToTop />
      </Router >

    </>
  );
}

export default App;
