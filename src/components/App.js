import React, { useContext } from 'react';
import ResumeContext from '../ResumeContext';

import styles from './App.module.css';

import General from './General';
import Work from './Work';
import Skills from './Skills';
import Awards from './Awards';
import InterestsAndSkills from './InterestsAndSkills';
import Languages from './Languages';
import Certificates from './Certificates';
import Education from './Education';
import SideProjects from './SideProjects';

const App = () => {
  const resume = useContext(ResumeContext);

  console.log(resume);

  return (
    <div className={styles.App}>
      <General />
      <section className={styles.App__content}>
        <Skills />
        <Work />
        <SideProjects />
        <Education />
        <Awards />
        <InterestsAndSkills />
        <Certificates />
        <Languages />
      </section>
    </div>
  );
};

export default App;
