import React, { useState } from 'react';

const WorkExperience = ({ jobs }) => {
  const [openSection, setOpenSection] = useState({ type: null, index: -1 });

  const toggleSection = (type, index) => {
    setOpenSection(prev => {
      if (prev.index === index && prev.type === type) return { type: null, index: -1 };
      return { type, index };
    });
  };

  return (
    <section className="experience-section">
      <h1 className="section-title">Työkokemus</h1>
      <div className="experience-grid">
        {(jobs || []).map((job, index) => {
          const responsibilities = Array.isArray(job.responsibilities) 
            ? job.responsibilities 
            : typeof job.responsibilities === 'string' 
            ? [job.responsibilities] 
            : [];

          const hasEvaluation = job.evaluation || job.omistaja;
          const hasRecommendations = job.suosittelija?.length > 0;

          return (
            <div key={index} className="experience-card">
              {job.type && <div className="tag-one">{job.type}</div>}

              <div className="experience-header">
                <h2 className="experience-title">{job.title}</h2>
                <div className="experience-meta">
                  {job.company && <div className="experience-company">{job.company}</div>}
                  {job.dates && <div className="experience-dates">{job.dates}</div>}
                </div>
              </div>

              {responsibilities.length > 0 && (
                <p className="experience-responsibilities">
                  {responsibilities.map((responsibility, i) => (
                    <div key={i} className="responsibility-item">
                      {responsibility}
                    </div>
                  ))}
                </p>
              )}

              <div className="toggle-links">
                {hasEvaluation && (
                <button 
                className={`toggle-link ${openSection.type === 'evaluation' && openSection.index === index ? 'active' : ''}`}
                onClick={() => toggleSection('evaluation', index)}
              >
                <div className="toggle-content">
                  <svg
                    className={`toggle-icon ${openSection.type === 'evaluation' && openSection.index === index ? 'expanded' : ''}`}
                    viewBox="0 0 24 24" 
                    width="16" 
                    height="16"
                    style={{ 
                      marginRight: "8px",
                      alignSelf: 'center' // Uusi rivi
                    }}
                  >
                    <path
                      fill="currentColor"
                      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    />
                  </svg>
                  <span style={{ lineHeight: '1' }}>Arvio</span> {/* Lisätty line-height */}
                </div>
              </button>
                )}

                {hasRecommendations && (
                  <button 
                    className={`toggle-link ${openSection.type === 'recommender' && openSection.index === index ? 'active' : ''}`}
                    onClick={() => toggleSection('recommender', index)}
                  >
                    <div className="toggle-content">
                      <svg
                        className={`toggle-icon ${openSection.type === 'recommender' && openSection.index === index ? 'expanded' : ''}`}
                        viewBox="0 0 24 24" 
                        width="16" 
                        height="16"
                      >
                        <path
                          fill="currentColor"
                          d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                        />
                      </svg>
                      <span>Suosittelija</span>
                    </div>
                  </button>
                )}
              </div>

              {openSection.index === index && (
                <p className="section-content">
                  {openSection.type === 'evaluation' && (
                    <div className="evaluation-content">
                      {job.evaluation && <div className="evaluation-text">{job.evaluation}</div>}
                      {job.omistaja && <p className="small-caption">{job.omistaja}</p>}
                    </div>
                  )}
                  
                  {openSection.type === 'recommender' && job.suosittelija?.map((suosittelija, i) => (
                    <div key={i} className="recommender-info">
                      {suosittelija.nimi && <p><strong>{suosittelija.nimi}</strong></p>}
                      {suosittelija.puhelinnumero && <p>Puhelin: {suosittelija.puhelinnumero}</p>}
                      {suosittelija.sähköposti && <p>Sähköposti: {suosittelija.sähköposti}</p>}
                    </div>
                  ))}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperience;