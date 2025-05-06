export default function Education({ schools }) {
  return (
    <section className="koulutus-osio">
    <h1>Koulutus</h1>
    {(schools || []).map((school, index) => (
      <div key={index} className="koulutus-kortti">
        {/* Tutkinto ja vuosi samalla rivillä */}
        <div className="vuosi-rivi">
          <h2 className="tutkinto-nimi">{school.degree || 'Tutkinto puuttuu'}</h2>
          {school.year && <span className="vuosi">{school.year}</span>}
        </div>
  
        {/* Oppilaitos */}
        <h2 className="oppilaitos">{school.institution || 'Oppilaitos puuttuu'}</h2>
  
        {/* Pääaine */}
        {school.field_of_study && (
          <p className="maisteri">{school.field_of_study}</p>
        )}
  
        {/* Kuvaus */}
        {school.description && (
          <div className="description">{school.description}</div>
        )}
      </div>
    ))}
  </section>
  );
}