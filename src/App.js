import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Sieges from "./pages/Sieges";
import Sellerie from "./pages/Sellerie";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Hero />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/sieges' element={<Sieges />}></Route>
          <Route path='/sellerie' element={<Sellerie />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/mentions-legales' element={<MentionsLegales />}></Route>
        </Routes>
        <Hero />
        <Footer />
      </Router >
    </>
  );
}

export default App;
