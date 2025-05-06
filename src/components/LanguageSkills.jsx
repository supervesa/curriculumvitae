import React from 'react';

const LanguageSkills = () => {
  const languagesData = {
    "languages": {
      "Suomi": {
        "Kirjallinen": ["10", "erinoimainen"],
        "Suullinen": ["10", "erinoimainen"],
        "Ymmärrys": ["10", "erinomainen"]
      },
      "Englanti": {
        "Kirjallinen": ["8", "sujuva"],
        "Suullinen": ["8", "sujuva"],
        "Ymmärrys": ["9", "sujuva"]
      },
      "Ruotsi": {
        "Kirjallinen": ["7", "tyydyttävä"],
        "Suullinen": ["7", "tyydyttävä"],
        "Ymmärrys": ["7", "tyydyttävä"]
      }
    }
  };

  return (
    <div className="language-skills-wrapper">
      <h2 className="section-title">Kielitaito</h2>
      <div className="language-grid">
        {Object.entries(languagesData.languages).map(([langName, langSkills]) => (
          <div key={langName} className="language-card">
            <div className="language-header">
              <h3 className="language-name">{langName}</h3>
            </div>
            <div className="language-skills">
              {Object.entries(langSkills).map(([skillName, [score, description]]) => (
                <div key={skillName} className="skill-row">
                  <div className="skill-info">
                    <span className="skill-type">{skillName}</span>
                    <span className="skill-desc">{description}</span>
                  </div>
                  <div className="progress-track">
                    <div 
                      className="progress-fill" 
                      style={{ width: `${parseInt(score) * 10}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSkills;