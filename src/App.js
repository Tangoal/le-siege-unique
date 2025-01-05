import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sieges' element={<Sieges />}></Route>
          <Route path='/banquettes' element={<Banquettes />}></Route>
          <Route path='/sellerie-auto' element={<SellerieAuto />}></Route>
          <Route path='/sellerie-moto' element={<SellerieMoto />}></Route>
          <Route path='/decoration' element={<Decoration />}></Route>
          <Route path='/mentions-legales' element={<MentionsLegales />}></Route>
        </Routes>
        <Footer />
        <ScrollToTop />
      </Router >

    </>
  );
}

export default App;
