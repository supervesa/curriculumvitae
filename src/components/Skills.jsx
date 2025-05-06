import { useMemo } from 'react';

export default function Skills({ ict_skills = {} }) {
  // Apufunktiot turvalliseen dataan
  const safeData = (data, fallback = {}) => data || fallback;

  // Tähtien renderöinti 1-4 asteikolla
  const renderStars = (originalRating) => {
    const maxStars = 4;
    const rating = Math.ceil(originalRating / 2.5);
    return (
      <div className="stars">
        {[...Array(maxStars)].map((_, i) => (
          <span 
            key={i} 
            className={`star ${i < rating ? 'filled' : ''}`}
          >
            {i < rating ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  // Järjestetään taidot arvion mukaan
  const sortedSkills = useMemo(() => {
    const skills = safeData(ict_skills);
    return Object.entries(skills).reduce((acc, [category, items]) => {
      const sortedItems = Object.entries(items)
        .map(([skill, data]) => ({
          skill,
          ...data,
          arvio: typeof data.arvio === 'number' ? data.arvio : 0
        }))
        .sort((a, b) => b.arvio - a.arvio);

      acc[category] = sortedItems;
      return acc;
    }, {});
  }, [ict_skills]);

  // ICT-taidot
  const renderICTSkills = () => {
    return (
      <div className="skills-container">
        {Object.entries(sortedSkills).map(([category, items]) => (
          <div key={category} className="category-card">
            <h2 className="category-title">{category}</h2>
            <div className="skills-list">
              {items.map(({ skill, arvio, lisätietoa }) => (
                <div 
                  key={skill} 
                  className="skill-item"
                  data-tooltip={lisätietoa}
                >
                  <span className="skill-name">{skill}</span>
                  {renderStars(arvio)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="skills-section">
      <h1>ICT-osaaminen</h1>
      {renderICTSkills()}
    </section>
  );
}