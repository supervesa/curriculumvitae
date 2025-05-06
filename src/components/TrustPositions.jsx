export default function TrustPositions({ positions = [] }) {
    // Ryhmitellään paikat organisaation mukaan
    const groupedPositions = positions.reduce((acc, position) => {
      const key = position.organization;
      if (!acc[key]) {
        acc[key] = {
          organization: position.organization,
          url: position["organization-url"],
          description: position.description,
          roles: []
        };
      }
      // Lisätään roolit järjestettynä
      acc[key].roles.push({
        years: position.years,
        role: position.role
      });
      return acc;
    }, {});
  
    // Muunnetaan ryhmitelty data taulukoksi ja järjestetään
    const sortedGroups = Object.values(groupedPositions)
      .map(group => ({
        ...group,
        // Järjestä roolit: ensin meneillään olevat, sitten uusimmat
        roles: group.roles.sort((a, b) => {
          const aIsCurrent = a.years?.endsWith('-');
          const bIsCurrent = b.years?.endsWith('-');
          if (aIsCurrent && !bIsCurrent) return -1;
          if (!aIsCurrent && bIsCurrent) return 1;
          
          const getLastYear = (years) => Math.max(...(years?.match(/\d{4}/g) || []).map(Number));
          return getLastYear(b.years) - getLastYear(a.years);
        })
      }))
      // Järjestä ryhmät: organisaatiot joissa on meneillään olevia ensin
      .sort((a, b) => {
        const aHasCurrent = a.roles.some(r => r.years?.endsWith('-'));
        const bHasCurrent = b.roles.some(r => r.years?.endsWith('-'));
        
        if (aHasCurrent && !bHasCurrent) return -1;
        if (!aHasCurrent && bHasCurrent) return 1;
        return 0;
      });
  
    return (
      <section className="trustpos-section">
      <h1>Luottamuspaikat</h1>
      {sortedGroups.map((group, index) => (
        <div key={index} className="trustpos-card">
          <div className="organization-header">
            <div className="organization-line">
              <h2 className="organization">{group.organization || 'Organisaatio puuttuu'}</h2>
              {group.url && (
                <a 
                  href={group.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="org-link"
                  aria-label={`Avaa ${group.organization} verkkosivu`}
                >
                  <svg className="link-icon" viewBox="0 0 24 24" width="14" height="14">
                    <path 
                      d="M13.5 6H18V10.5M18 6L8 16M18 6V10.5H13.5" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      fill="none" 
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              )}
            </div>
            
            {group.description && (
              <p className="organization-description">{group.description}</p>
            )}
          </div>
    
          <ul className="role-list">
            {group.roles.map((role, roleIndex) => (
              <li key={roleIndex} className="role-item">
                <p> <span className="role-years">{role.years || 'Vuodet puuttuu'}</span>{' '}
                <span className="role-title">{role.role || 'Tehtävä puuttuu'}</span>
                </p>
               
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    );
  }