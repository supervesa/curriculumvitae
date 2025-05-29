import React from 'react'; // Poistettu useEffect ja useState, koska niitä ei käytetä

// Oletetaan, että Font Awesome on käytössä nuolta varten, tai käytetään SVG:tä / Unicode-merkkiä
// Jos käytät Font Awesomea React-komponentteina:
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Header({
  name,
  contact,
  backgroundImages = [],
  profileImage,
  description
}) {
  const [bg1, bg2, bg3] = backgroundImages;

  // Poistettu scrollToContent -funktio

  return (
    <header className="header-container">
      {/* Taustakuvakerrokset */}
      <div className="background-layers">
        {bg1 && <div className="background-layer base-layer" style={{ backgroundImage: `url(${bg1})` }}></div>}
        {bg2 && <div className="background-layer middle-layer" style={{ backgroundImage: `url(${bg2})` }}></div>}
        {bg3 && <div className="background-layer top-layer" style={{ backgroundImage: `url(${bg3})` }}></div>}
      </div>

      {/* Valkoinen sisältölaatikko ja profiilikuva */}
      <div className="header-content-wrapper">
        <div className="header-content">
          {profileImage && (
            <div className="profile-image-container">
              <img src={profileImage} alt="Profile" className="profile-image" />
            </div>
          )}
          <div className="info-section">
            <h1 className="header-name">{name}</h1>
            {description && <p className="header-description">{description}</p>}
          </div>
          {(contact?.address || contact?.phone || contact?.email) && (
            <div className="address-box">
              {contact.address && <p>{contact.address}</p>}
              {contact.phone && <p>{contact.phone}</p>}
              {contact.email && <p>{contact.email}</p>}
            </div>
          )}

          <div className="cv-button-container">
            <a href="#numbers-section-anchor" className="cv-button">
              Curriculum Vitae
              <span className="cv-button-arrow">
                {/* Varmista, että Font Awesome on käytössä tai korvaa ikonilla */}
                <i className="fas fa-chevron-down"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      {/* Nappula siirretty header-content-wrapperin sisälle */}
    </header>
  );
}
