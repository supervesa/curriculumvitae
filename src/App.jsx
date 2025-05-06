import Header from './components/Header';
import Profile from './components/Profile';
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

export default function App() {
  // Tarkista puuttuvat datat
  if (!cvData) {
    return <div className="error">CV-dataa ei löytynyt</div>;
  }

  return (
    <>

      <div className="cv-container">
        <Header
          name={cvData.name} // Korjattu: data → cvData
          contact={cvData.contact}
          backgroundImages={[
            cvData.picture1[0], // Korjattu: data → cvData
            cvData.picture2[0], // Korjattu: data → cvData
            cvData.picture3[0]  // Korjattu: data → cvData
          ]}
          profileImage={cvData["profiili-kuva"][0]} // Korjattu: data → cvData
          description={cvData.description2[0]} // Korjattu: data → cvData
        />
        
        <WorkExperience jobs={cvData.work_experience || []} />
        <Education schools={cvData.education || []} />
        <LanguageSkills positions={cvData.languages} />
        <Publications publications={cvData.publish} />
        <AdditionalTraining trainings={cvData.additional_training} />
        <TrustPositions positions={cvData.paikat} />
        <Skills
          technical_skills={cvData.technical_skills || {}}
          ict_skills={cvData.ict_skills || {}}
          core_competencies={cvData.core_competencies || {}}
        />
        <Hobbies hobbies={cvData.hobbies || ['Harrastuksia ei määritelty']} />
      </div>
    </>
  );
}