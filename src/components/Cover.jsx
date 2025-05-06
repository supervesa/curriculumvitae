// src/components/Splash.jsx
import React from 'react';

const Splash = ({ name, description, profileImage, backgroundImage }) => {
  return (
    <div className="splash-container">
      {/* Taustakuva */}
      <div 
        className="background-image" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Valkoinen sisältölaatikko */}
      <div className="content-box">
        {/* Tekstiosio vasemmalla */}
        <div className="text-content">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        
        {/* Profiilikuva oikealla */}
        <div className="profile-image-container">
          <img 
            src={profileImage} 
            alt={name} 
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Splash;