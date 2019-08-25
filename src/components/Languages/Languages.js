import React, { useContext } from 'react';
import ResumeContext from '../../ResumeContext';

import styles from './Languages.module.css';

const Languages = () => {
  const { languages } = useContext(ResumeContext);

  return (
    <div className={styles.Languages}>
      <h2>Languages</h2>
      <div>
        {languages.map(l => (
          <div key={l.language}>
            {l.language} - {l.proficiency}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
