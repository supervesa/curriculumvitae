import React, { useState } from 'react';

export default function AdditionalTraining({ trainings = [] }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleDescription = (index) => {
    setExpandedIndex(prev => prev === index ? -1 : index);
  };

  return (
    <section className="education-section">
      <h1 className="section-title">Lisäkoulutus</h1>
      <div className="education-grid">
        {trainings.map((training, index) => (
          <div key={index} className="additional-education-card">
            {/* Otsikko, opintopisteet ja vuosi */}
            <div className="course-header-wrapper" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
  <div className="course-header-left" style={{display: 'flex', alignItems: 'baseline', gap: '8px'}}>
    <h2 className="course-title" style={{margin: 0}}>{training.course}</h2>
    {training.credits >= 5 && (
      <div className="tag-two" style={{marginBottom: '2px'}}>{training.credits} op</div>
    )}
  </div>
  {training.year && (
    <p className="course-year" style={{margin: 0}}>{training.year}</p>
  )}
</div>

            {/* Oppilaitos */}
            {training.institution && (
              <p>{training.institution}</p>
            )}

            {/* Kuvaus */}
            {training.description && (
              <p className="toggle-wrapper">
                <div 
                  className="toggle-header"
                  onClick={() => toggleDescription(index)}
                  role="button"
                  tabIndex={0}
                >
                   <svg
                    className={`toggle-icon ${expandedIndex === index ? 'expanded' : ''}`}
                    viewBox="0 0 24 24" 
                    width="16" 
                    height="16"
                  >
                    <path
                      fill="currentColor"
                      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    />
                  </svg>
                  <span>Lisätietoa</span>
                 
                </div>
                
                {expandedIndex === index && (
                  <div className="description-content">
                    <p>{training.description}</p>
                  </div>
                )}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}