import React from 'react';
import './LoadingScreen.css';
import logo from '../assets/img/logo-navbar.webp'; // Assurez-vous que le chemin vers votre logo est correct

const LoadingScreen = ({ isLoading }) => {
  return (
    <div className={`loading-screen ${!isLoading ? 'hidden' : ''}`}>
      <div className="loading-content">
        <img src={logo} alt="Le Siège Unique" className="loading-logo" />
        <div className="loading-bar">
          <div className="loading-progress"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 