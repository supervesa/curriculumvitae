import React from 'react'; // Varmistetaan Reactin tuonti
import Header from './components/Header';
// Oletetaan, että Numbers.jsx on components-kansiossa
import NumbersSection from './components/numbers'; // Korjattu tiedostonimen kirjainkoko vastaamaan virheilmoitusta
import Profile from './components/Profile'; // Oletan, että tämä on olemassa, vaikka sitä ei käytetä suoraan App.jsx:ssä
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import AdditionalTraining from './components/AdditionalTraining';
import TrustPositions from './components/TrustPositions';
import Publications from './components/Publications';
import LanguageSkills from './components/LanguageSkills';
import Cover from './components/Cover';
import cvData from './data/cv.json';
import './styles/global.css';
import './App.css';

// Poistetaan NumbersSection, NumberCard ja numberData määrittelyt täältä,
// koska ne ovat nyt erillisessä Numbers.jsx tiedostossa ja NumbersSection tuodaan sieltä.

export default function App() {
  if (!cvData) {
    return <div className="error">CV-dataa ei löytynyt</div>;
  }

  return (
    <>
      {/* Font Awesome & Inter font links should be in public/index.html or loaded globally */}
      {/* In public/index.html:
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
      */}

      <Header
          name={cvData.name}
          contact={cvData.contact}
          backgroundImages={[
            cvData.picture1[0],
            cvData.picture2[0],
            cvData.picture3[0]
          ]}
          profileImage={cvData["profiili-kuva"][0]}
          description={cvData.description2[0]}
        />
    <div className="cv-container">
      <NumbersSection />

  
        <WorkExperience jobs={cvData.work_experience || []} />
   
        <LanguageSkills positions={cvData.languages} />
        <Education schools={cvData.education || []} />
        <AdditionalTraining trainings={cvData.additional_training} />
        <Publications publications={cvData.publish} />

       
        <Skills
          technical_skills={cvData.technical_skills || {}}
          ict_skills={cvData.ict_skills || {}}
          core_competencies={cvData.core_competencies || {}}
        />
         <TrustPositions positions={cvData.paikat} />
        <Hobbies hobbies={cvData.hobbies || ['Harrastuksia ei määritelty']} />
      </div>
    </>
  );
}
