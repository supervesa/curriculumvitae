export default function Header({ 
  name, 
  contact, 
  backgroundImages = [], 
  profileImage, 
  description 
}) {
  const [bg1, bg2, bg3] = backgroundImages;

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
          {/* Profiilikuva päällekkäin taustan ja laatikon väliin */}
          {profileImage && (
            <div className="profile-image-container">
              <img src={profileImage} alt="Profile" className="profile-image" />
            </div>
          )}

          {/* Nimi ja kuvaus */}
          <div className="info-section">
            <h1 className="header-name">{name}</h1>
            {description && <p className="header-description">{description}</p>}
          </div>

          {/* Yhteystiedot */}
          {(contact?.address || contact?.phone || contact?.email) && (
            <div className="address-box">
              {contact.address && <p>{contact.address}</p>}
              {contact.phone && <p>{contact.phone}</p>}
              {contact.email && <p>{contact.email}</p>}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
